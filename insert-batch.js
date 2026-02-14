const fs = require('fs');
const path = require('path');

const batchFile = process.argv[2];
if (!batchFile) {
  console.log('Usage: node insert-batch.js <batch-file-path>');
  process.exit(1);
}

const raw = fs.readFileSync(batchFile, 'utf8');

// Extract JS code between ``` markers
const lines = raw.split('\n');
let inCode = false;
let codeLines = [];
for (const line of lines) {
  if (line.trim() === '```' && inCode) { inCode = false; continue; }
  if (line.trim().startsWith('```') && !inCode) { inCode = true; continue; }
  if (inCode) codeLines.push(line);
}

let code = codeLines.join('\n').trim();
if (!code) {
  // No code blocks found, try using raw content directly
  // Skip first line if it's a preamble
  const allLines = raw.split('\n');
  const startIdx = allLines.findIndex(l => l.trim().startsWith("'"));
  if (startIdx >= 0) {
    code = allLines.slice(startIdx).join('\n').trim();
  }
}

console.log('Extracted code length:', code.length);

let script = fs.readFileSync('update-cities.js', 'utf8');

// Find insertion point: the }; that closes cityUpdates (before the application logic)
// Handle both \n and \r\n line endings
let marker = '\r\n};\r\n';
let idx = script.indexOf(marker);
if (idx === -1) {
  marker = '\n};\n';
  idx = script.indexOf(marker);
}
if (idx === -1) {
  console.log('Could not find closing }; marker');
  process.exit(1);
}

// Ensure code starts with comma if needed (previous entry should end with })
const beforeInsert = script.substring(0, idx).trimEnd();
const needsComma = beforeInsert.endsWith('}');

const insertion = (needsComma ? ',\n' : '\n') + code + '\n';
script = script.substring(0, idx) + insertion + script.substring(idx);

fs.writeFileSync('update-cities.js', script, 'utf8');
console.log('SUCCESS: Inserted', code.length, 'chars into update-cities.js');

// Verify by loading
try {
  delete require.cache[require.resolve('./update-cities.js')];
  const u = require('./update-cities.js');
  console.log('Total entries now:', Object.keys(u.cityUpdates).length);
} catch (e) {
  console.log('WARNING: Syntax error after insertion:', e.message);
}
