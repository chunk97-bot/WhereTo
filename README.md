# WhereTo - Your AI Travel Buddy 🌍✈️

A web-based travel chatbot that helps you discover destinations, get travel advice, and plan your next adventure.

![WhereTo Travel Chatbot](https://img.shields.io/badge/Made%20with-❤️-red)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- 🗺️ **Destination Recommendations** - Get personalized suggestions for beaches, cities, adventures, and more
- 💬 **Natural Conversations** - Chat naturally about your travel interests
- 📅 **Best Time to Visit** - Learn when to travel to each destination
- 💰 **Budget Guidance** - Find destinations that match your budget
- 🎒 **Packing Tips** - Get packing advice for any trip
- 🍜 **Food & Culture** - Discover culinary experiences worldwide

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
```bash
# Using npm's serve
npx serve .

# Or using Python
python -m http.server 8000

# Or using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
WhereTo/
├── index.html        # Main HTML page
├── style.css         # Styling and animations
├── chat.js           # Chatbot logic and responses
├── destinations.js   # Travel knowledge base
├── README.md
└── .gitignore
```

## 💬 What Can You Ask?

Try these conversation starters:

- "Suggest a beach destination"
- "Best city for food lovers"
- "Adventure travel ideas"
- "Budget-friendly destinations"
- "Tell me about Japan"
- "Best time to visit Europe"
- "Packing tips for my trip"
- "Romantic honeymoon destinations"
- "Family-friendly places"

## 🛠️ Customization

### Adding New Destinations

Edit `destinations.js` and add to the `DESTINATIONS` array:

```javascript
{
    name: "Your Destination",
    country: "Country",
    emoji: "🌴",
    description: "A brief description",
    bestTime: "Best months to visit",
    budget: "budget|moderate|luxury",
    budgetRange: "$XX-XX/day",
    rating: "4.5",
    tags: ["beach", "culture", "adventure"],
    highlights: ["Highlight 1", "Highlight 2"]
}
```

### Adding New Response Patterns

Edit `chat.js` and add patterns in the `generateResponse()` method:

```javascript
if (this.matchesPattern(msg, ['your', 'keywords'])) {
    return this.yourCustomResponse();
}
```

## 🎨 Styling

The app uses CSS custom properties for easy theming. Edit the `:root` variables in `style.css`:

```css
:root {
    --primary: #3b82f6;
    --background: #0f172a;
    --surface: #1e293b;
    /* ... */
}
```

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select `main` branch
4. Your site is live!

### Netlify
1. Connect your GitHub repo
2. Deploy automatically

### Vercel
```bash
npm i -g vercel
vercel
```

## 🔮 Future Enhancements

- [ ] Integration with real travel APIs (Amadeus, Skyscanner)
- [ ] AI-powered responses using OpenAI/Claude
- [ ] User accounts and saved trips
- [ ] Weather integration
- [ ] Currency converter
- [ ] Flight price alerts
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)

## 📝 License

MIT License - Feel free to use this for your own projects!

## 🙏 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Made with ❤️ for travelers everywhere**

*"The world is a book, and those who do not travel read only one page."* - Saint Augustine
