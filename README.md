# WhereTo - Your AI Travel Buddy 🌍✈️

A comprehensive web-based travel platform that helps you discover destinations, get visa information, plan budgets, and explore 340+ cities across the globe.

![WhereTo Travel Platform](https://img.shields.io/badge/Made%20with-❤️-red)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- 🗺️ **340+ Cities Database** - Detailed information for cities across all continents
- 🌐 **Region-Based Navigation** - Browse by Schengen, Scandinavia, Americas, Asia, Africa, Middle East & more
- 💬 **NOVA AI Assistant** - Chat naturally about your travel interests
- 📋 **Visa Guide** - Check visa requirements for any destination
- 💰 **Budget Calculator** - Plan your trip expenses
- 💱 **Currency Converter** - Real-time exchange rates
- 📅 **Trip Planner** - Create detailed itineraries
- 🎯 **10-12 Activities per City** - Viator-style recommended tours and experiences

## 🚀 Quick Start

### Option 1: Open Directly
Open `nova.html` in your web browser (or navigate to `pages/home.html` for the landing page).

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8080

# Or using npm's serve
npx serve .

# Or use the included PowerShell script (Windows)
.\tools\preview.ps1
```

Then visit `http://localhost:8080` in your browser.

## 📁 Project Structure

```
WhereTo/
├── nova.html              # Entry point (NOVA AI Chat)
├── README.md
├── .gitignore
│
├── css/                   # Stylesheets
│   ├── style.css          # Global styles
│   ├── pages.css          # Page-specific styles
│   └── home.css           # Landing page styles
│
├── js/                    # JavaScript modules
│   ├── chat.js            # NOVA chatbot logic
│   └── destinations.js    # Chat knowledge base
│
├── data/                  # Data files
│   ├── regions-data.js    # Main database (340 cities, 120 countries)
│   └── destinations-data.js # Legacy category data (trip-planner)
│
├── pages/                 # HTML pages
│   ├── home.html          # Landing page
│   ├── destinations.html  # Destination browser
│   ├── region.html        # Region explorer
│   ├── country.html       # Country detail page
│   ├── city.html          # City detail page
│   ├── trip-planner.html  # Trip planning tool
│   ├── budget-calculator.html # Budget calculator
│   ├── currency-converter.html # Currency converter
│   └── visa-guide.html    # Visa requirements
│
└── tools/                 # Development tools
    └── preview.ps1        # Local server script
```

## 🌍 Regions Covered

- **Schengen/Europe** - 84 cities across 45 countries
- **Scandinavia** - 13 cities (Denmark, Finland, Iceland, Norway, Sweden)
- **Americas** - 30 cities (USA, Canada, Mexico, Caribbean, Central America)
- **South America** - 7 cities (Argentina, Brazil, Colombia, Peru, etc.)
- **Central Asia** - 19 cities (Georgia, Kazakhstan, Uzbekistan, etc.)
- **Australia & Oceania** - 18 cities
- **Asia** - 96 cities (Japan, Thailand, India, China, etc.)
- **Africa** - 33 cities (Morocco, Egypt, South Africa, etc.)
- **Middle East** - 35 cities (UAE, Turkey, Jordan, Israel, etc.)

## 🎨 Styling

The app uses CSS custom properties for easy theming. Edit the `:root` variables in `css/style.css`:

```css
:root {
    --primary: #3b82f6;
    --background: #0f172a;
    --surface: #1e293b;
}
```

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select `main` branch
4. Your site is live!

### Netlify / Vercel
Connect your GitHub repo and deploy automatically.

## 📝 License

MIT License - Feel free to use this for your own projects!

---

**Made with ❤️ for travelers everywhere**

*"The world is a book, and those who do not travel read only one page."* - Saint Augustine
