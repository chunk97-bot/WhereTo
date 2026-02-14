const fs = require('fs');

// Map of country codes to flag emojis
const countryFlags = {
    'AL': '🇦🇱', 'AT': '🇦🇹', 'BE': '🇧🇪', 'BG': '🇧🇬', 'HR': '🇭🇷',
    'CY': '🇨🇾', 'CZ': '🇨🇿', 'DK': '🇩🇰', 'EE': '🇪🇪', 'FI': '🇫🇮',
    'FR': '🇫🇷', 'DE': '🇩🇪', 'GR': '🇬🇷', 'HU': '🇭🇺', 'IS': '🇮🇸',
    'IE': '🇮🇪', 'IT': '🇮🇹', 'LV': '🇱🇻', 'LI': '🇱🇮', 'LT': '🇱🇹',
    'LU': '🇱🇺', 'MT': '🇲🇹', 'MC': '🇲🇨', 'NL': '🇳🇱', 'NO': '🇳🇴',
    'PL': '🇵🇱', 'PT': '🇵🇹', 'RO': '🇷🇴', 'SM': '🇸🇲', 'SK': '🇸🇰',
    'SI': '🇸🇮', 'ES': '🇪🇸', 'SE': '🇸🇪', 'CH': '🇨🇭', 'VA': '🇻🇦',
    'GB': '🇬🇧', 'UA': '🇺🇦', 'RS': '🇷🇸', 'ME': '🇲🇪', 'MK': '🇲🇰',
    'BA': '🇧🇦', 'XK': '🇽🇰', 'MD': '🇲🇩', 'BY': '🇧🇾',
    // Scandinavia
    'FO': '🇫🇴', 'GL': '🇬🇱', 'AX': '🇦🇽',
    // Americas
    'US': '🇺🇸', 'CA': '🇨🇦', 'MX': '🇲🇽', 'PA': '🇵🇦', 'CR': '🇨🇷',
    'CU': '🇨🇺', 'JM': '🇯🇲', 'DO': '🇩🇴', 'PR': '🇵🇷', 'GT': '🇬🇹',
    'BZ': '🇧🇿', 'HN': '🇭🇳', 'SV': '🇸🇻', 'NI': '🇳🇮',
    // South America
    'AR': '🇦🇷', 'BR': '🇧🇷', 'CL': '🇨🇱', 'CO': '🇨🇴', 'PE': '🇵🇪',
    'EC': '🇪🇨', 'BO': '🇧🇴', 'PY': '🇵🇾', 'UY': '🇺🇾', 'VE': '🇻🇪',
    'GY': '🇬🇾', 'SR': '🇸🇷', 'GF': '🇬🇫',
    // Central Asia
    'AM': '🇦🇲', 'AZ': '🇦🇿', 'GE': '🇬🇪', 'KZ': '🇰🇿', 'KG': '🇰🇬',
    'TJ': '🇹🇯', 'TM': '🇹🇲', 'UZ': '🇺🇿', 'MN': '🇲🇳', 'AF': '🇦🇫',
    // Australia & Oceania
    'AU': '🇦🇺', 'NZ': '🇳🇿', 'FJ': '🇫🇯', 'PG': '🇵🇬', 'WS': '🇼🇸',
    'TO': '🇹🇴', 'VU': '🇻🇺', 'NC': '🇳🇨', 'PF': '🇵🇫',
    // Asia
    'JP': '🇯🇵', 'KR': '🇰🇷', 'CN': '🇨🇳', 'HK': '🇭🇰', 'TW': '🇹🇼',
    'TH': '🇹🇭', 'VN': '🇻🇳', 'SG': '🇸🇬', 'MY': '🇲🇾', 'ID': '🇮🇩',
    'PH': '🇵🇭', 'IN': '🇮🇳', 'NP': '🇳🇵', 'LK': '🇱🇰', 'BD': '🇧🇩',
    'PK': '🇵🇰', 'MM': '🇲🇲', 'KH': '🇰🇭', 'LA': '🇱🇦', 'BT': '🇧🇹',
    'MV': '🇲🇻', 'BN': '🇧🇳', 'TL': '🇹🇱',
    // Africa
    'EG': '🇪🇬', 'MA': '🇲🇦', 'TN': '🇹🇳', 'ZA': '🇿🇦', 'KE': '🇰🇪',
    'TZ': '🇹🇿', 'ET': '🇪🇹', 'GH': '🇬🇭', 'NG': '🇳🇬', 'SN': '🇸🇳',
    'CI': '🇨🇮', 'UG': '🇺🇬', 'RW': '🇷🇼', 'BW': '🇧🇼', 'NA': '🇳🇦',
    'ZW': '🇿🇼', 'MU': '🇲🇺', 'SC': '🇸🇨', 'MG': '🇲🇬', 'DZ': '🇩🇿',
    // Middle East
    'AE': '🇦🇪', 'SA': '🇸🇦', 'QA': '🇶🇦', 'KW': '🇰🇼', 'BH': '🇧🇭',
    'OM': '🇴🇲', 'JO': '🇯🇴', 'LB': '🇱🇧', 'IL': '🇮🇱', 'PS': '🇵🇸',
    'IR': '🇮🇷', 'IQ': '🇮🇶', 'SY': '🇸🇾', 'YE': '🇾🇪', 'TR': '🇹🇷',
};

// Read the file
let content = fs.readFileSync('regions-data.js', 'utf8');

// Find all flag lines and fix them based on country code
const lines = content.split('\n');
let fixedCount = 0;

for (let i = 0; i < lines.length; i++) {
    // Look for code: 'XX' pattern
    if (lines[i].includes("code: '")) {
        const codeMatch = lines[i].match(/code: '([A-Z]{2})'/);
        if (codeMatch) {
            const countryCode = codeMatch[1];
            const flag = countryFlags[countryCode];
            
            if (flag) {
                // Look for the flag line nearby (usually within next 3 lines)
                for (let j = i; j < Math.min(i + 4, lines.length); j++) {
                    if (lines[j].includes("flag: '")) {
                        lines[j] = `                flag: '${flag}',`;
                        fixedCount++;
                        break;
                    }
                }
            }
        }
    }
}

content = lines.join('\n');
fs.writeFileSync('regions-data.js', content, 'utf8');
console.log(`Fixed ${fixedCount} flags`);
