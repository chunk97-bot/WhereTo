# Local Preview Server for WhereTo
# Run this script to start a local web server and open the project in your browser

$port = 8080
$path = $PSScriptRoot

Write-Host "Starting local server at http://localhost:$port" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Open browser
Start-Process "http://localhost:$port"

# Start simple HTTP server using Python if available, otherwise use .NET
$pythonAvailable = Get-Command python -ErrorAction SilentlyContinue

if ($pythonAvailable) {
    Set-Location $path
    python -m http.server $port
} else {
    # Use .NET HttpListener as fallback
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
    
    Write-Host "Server running using .NET HttpListener..."
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath
        if ($localPath -eq "/") { $localPath = "/home.html" }
        
        $filePath = Join-Path $path $localPath.TrimStart("/")
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            
            # Set content type based on extension
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html" }
                ".css"  { "text/css" }
                ".js"   { "application/javascript" }
                ".json" { "application/json" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".gif"  { "image/gif" }
                ".svg"  { "image/svg+xml" }
                default { "application/octet-stream" }
            }
            
            $response.ContentType = $contentType
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
            $errorMsg = [System.Text.Encoding]::UTF8.GetBytes("404 - File Not Found")
            $response.OutputStream.Write($errorMsg, 0, $errorMsg.Length)
        }
        
        $response.Close()
        Write-Host "$($request.HttpMethod) $($request.Url.LocalPath) - $($response.StatusCode)"
    }
}
