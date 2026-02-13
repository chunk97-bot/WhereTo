// WhereTo Travel Chatbot
class TravelChatbot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendButton');
        this.quickSuggestions = document.getElementById('quickSuggestions');
        
        this.conversationHistory = [];
        this.userPreferences = {
            budget: null,
            interests: [],
            climate: null
        };
        
        this.init();
    }
    
    init() {
        // Event listeners
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Quick suggestions
        document.querySelectorAll('.suggestion-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                this.userInput.value = chip.dataset.query;
                this.sendMessage();
            });
        });
    }
    
    sendMessage() {
        const message = this.userInput.value.trim();
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        this.userInput.value = '';
        
        // Hide quick suggestions after first interaction
        this.quickSuggestions.style.display = 'none';
        
        // Show typing indicator
        this.showTyping();
        
        // Process and respond
        setTimeout(() => {
            this.hideTyping();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 800 + Math.random() * 700);
    }
    
    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const novaAvatar = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="novaMsgGrad${Date.now()}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#00f5ff"/><stop offset="50%" style="stop-color:#8b5cf6"/><stop offset="100%" style="stop-color:#ec4899"/></linearGradient></defs><rect x="4" y="7" width="16" height="13" rx="4" fill="url(#novaMsgGrad${Date.now()})"/><rect x="7" y="3" width="10" height="5" rx="2.5" fill="url(#novaMsgGrad${Date.now()})"/><circle cx="8.5" cy="12.5" r="2.5" fill="#0a0a1a"/><circle cx="15.5" cy="12.5" r="2.5" fill="#0a0a1a"/><circle cx="8.5" cy="12.5" r="1.5" fill="#00f5ff"/><circle cx="15.5" cy="12.5" r="1.5" fill="#00f5ff"/><rect x="10" y="16" width="4" height="2" rx="1" fill="#ec4899"/><rect x="11" y="0" width="2" height="4" rx="1" fill="url(#novaMsgGrad${Date.now()})"/><circle cx="12" cy="0" r="1.5" fill="#00f5ff"><animate attributeName="r" values="1.5;2;1.5" dur="1.5s" repeatCount="indefinite"/></circle><rect x="1" y="10" width="3" height="6" rx="1.5" fill="url(#novaMsgGrad${Date.now()})"/><rect x="20" y="10" width="3" height="6" rx="1.5" fill="url(#novaMsgGrad${Date.now()})"/></svg>`;
        const avatarContent = sender === 'bot' ? novaAvatar : '👤';
        const avatarClass = sender === 'bot' ? 'message-avatar nova-avatar' : 'message-avatar';
        
        messageDiv.innerHTML = `
            <div class="${avatarClass}">${avatarContent}</div>
            <div class="message-content">${content}</div>
        `;
        
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
        
        this.conversationHistory.push({ sender, content });
    }
    
    showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message';
        typingDiv.id = 'typing-indicator';
        const novaTypingAvatar = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="novaTypingGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#00f5ff"/><stop offset="50%" style="stop-color:#8b5cf6"/><stop offset="100%" style="stop-color:#ec4899"/></linearGradient></defs><rect x="4" y="7" width="16" height="13" rx="4" fill="url(#novaTypingGrad)"/><rect x="7" y="3" width="10" height="5" rx="2.5" fill="url(#novaTypingGrad)"/><circle cx="8.5" cy="12.5" r="2.5" fill="#0a0a1a"/><circle cx="15.5" cy="12.5" r="2.5" fill="#0a0a1a"/><circle cx="8.5" cy="12.5" r="1.5" fill="#00f5ff"/><circle cx="15.5" cy="12.5" r="1.5" fill="#00f5ff"/><rect x="10" y="16" width="4" height="2" rx="1" fill="#ec4899"/><rect x="11" y="0" width="2" height="4" rx="1" fill="url(#novaTypingGrad)"/><circle cx="12" cy="0" r="1.5" fill="#00f5ff"><animate attributeName="r" values="1.5;2;1.5" dur="1.5s" repeatCount="indefinite"/></circle><rect x="1" y="10" width="3" height="6" rx="1.5" fill="url(#novaTypingGrad)"/><rect x="20" y="10" width="3" height="6" rx="1.5" fill="url(#novaTypingGrad)"/></svg>`;
        typingDiv.innerHTML = `
            <div class="message-avatar nova-avatar">${novaTypingAvatar}</div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
        this.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    hideTyping() {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    }
    
    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    generateResponse(userMessage) {
        const msg = userMessage.toLowerCase();
        
        // Greeting patterns
        if (this.matchesPattern(msg, ['hi', 'hello', 'hey', 'howdy', 'greetings'])) {
            return this.greetingResponse();
        }
        
        // Beach destinations
        if (this.matchesPattern(msg, ['beach', 'ocean', 'sea', 'island', 'tropical', 'coastal'])) {
            return this.beachDestinations();
        }
        
        // City/urban destinations
        if (this.matchesPattern(msg, ['city', 'urban', 'metropolitan', 'cities'])) {
            return this.cityDestinations();
        }
        
        // Adventure travel
        if (this.matchesPattern(msg, ['adventure', 'hiking', 'trekking', 'mountain', 'extreme', 'outdoor'])) {
            return this.adventureDestinations();
        }
        
        // Food/culinary
        if (this.matchesPattern(msg, ['food', 'culinary', 'cuisine', 'eat', 'restaurant', 'foodie'])) {
            return this.foodDestinations();
        }
        
        // Budget travel
        if (this.matchesPattern(msg, ['budget', 'cheap', 'affordable', 'inexpensive', 'save money', 'low cost'])) {
            return this.budgetDestinations();
        }
        
        // Luxury travel
        if (this.matchesPattern(msg, ['luxury', 'luxurious', 'premium', 'high-end', 'five star', '5 star'])) {
            return this.luxuryDestinations();
        }
        
        // Romantic/honeymoon
        if (this.matchesPattern(msg, ['romantic', 'honeymoon', 'couple', 'anniversary', 'love'])) {
            return this.romanticDestinations();
        }
        
        // Family travel
        if (this.matchesPattern(msg, ['family', 'kids', 'children', 'child-friendly'])) {
            return this.familyDestinations();
        }
        
        // History/culture
        if (this.matchesPattern(msg, ['history', 'historical', 'culture', 'museum', 'ancient', 'heritage'])) {
            return this.culturalDestinations();
        }
        
        // Specific destinations
        if (this.matchesPattern(msg, ['japan', 'tokyo', 'kyoto', 'osaka'])) {
            return this.japanInfo();
        }
        
        if (this.matchesPattern(msg, ['bali', 'indonesia'])) {
            return this.baliInfo();
        }
        
        if (this.matchesPattern(msg, ['paris', 'france', 'french'])) {
            return this.parisInfo();
        }
        
        if (this.matchesPattern(msg, ['italy', 'rome', 'florence', 'venice', 'italian'])) {
            return this.italyInfo();
        }
        
        if (this.matchesPattern(msg, ['thailand', 'bangkok', 'phuket', 'thai'])) {
            return this.thailandInfo();
        }
        
        // Best time to visit
        if (this.matchesPattern(msg, ['best time', 'when to visit', 'when should i go', 'what month'])) {
            return this.bestTimeResponse();
        }
        
        // Packing advice
        if (this.matchesPattern(msg, ['pack', 'packing', 'what to bring', 'luggage', 'suitcase'])) {
            return this.packingAdvice();
        }
        
        // Travel tips
        if (this.matchesPattern(msg, ['tip', 'tips', 'advice', 'recommend', 'suggestion'])) {
            return this.travelTips();
        }
        
        // Visa information
        if (this.matchesPattern(msg, ['visa', 'passport', 'entry', 'requirements'])) {
            return this.visaInfo();
        }
        
        // Weather
        if (this.matchesPattern(msg, ['weather', 'climate', 'temperature', 'rain', 'sunny'])) {
            return this.weatherInfo();
        }
        
        // Thanks
        if (this.matchesPattern(msg, ['thank', 'thanks', 'appreciate', 'helpful'])) {
            return this.thanksResponse();
        }
        
        // Goodbye
        if (this.matchesPattern(msg, ['bye', 'goodbye', 'see you', 'later'])) {
            return this.goodbyeResponse();
        }
        
        // Default response
        return this.defaultResponse();
    }
    
    matchesPattern(text, patterns) {
        return patterns.some(pattern => text.includes(pattern));
    }
    
    // Response generators
    greetingResponse() {
        const greetings = [
            `<p>Hello! 👋 Great to see you! Ready to plan your next adventure?</p>
            <p>Tell me what kind of trip you're dreaming about - beaches, cities, mountains, or something else?</p>`,
            
            `<p>Hey there, fellow traveler! 🌟</p>
            <p>I'm excited to help you discover amazing destinations. What's calling to you - relaxation, adventure, culture, or food?</p>`,
            
            `<p>Welcome! ✈️ The world is full of incredible places waiting to be explored.</p>
            <p>What type of experience are you looking for?</p>`
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    beachDestinations() {
        const destinations = DESTINATIONS.filter(d => d.tags.includes('beach'));
        return `<p>Ah, the sound of waves and sandy shores! 🏖️ Here are some incredible beach destinations:</p>
        ${this.createDestinationCards(destinations.slice(0, 3))}
        <p>Would you like more details about any of these, or shall I suggest more options?</p>`;
    }
    
    cityDestinations() {
        const destinations = DESTINATIONS.filter(d => d.tags.includes('city'));
        return `<p>Love the energy of big cities! 🏙️ Here are some vibrant urban destinations:</p>
        ${this.createDestinationCards(destinations.slice(0, 3))}
        <p>Want to know more about any of these cities?</p>`;
    }
    
    adventureDestinations() {
        const destinations = DESTINATIONS.filter(d => d.tags.includes('adventure'));
        return `<p>Ready for some adrenaline? 🏔️ These destinations are perfect for adventure seekers:</p>
        ${this.createDestinationCards(destinations.slice(0, 3))}
        <p>Which adventure calls to you?</p>`;
    }
    
    foodDestinations() {
        const destinations = DESTINATIONS.filter(d => d.tags.includes('food'));
        return `<p>A fellow foodie! 🍜 These destinations will delight your taste buds:</p>
        ${this.createDestinationCards(destinations.slice(0, 3))}
        <p>Ready to plan a culinary adventure?</p>`;
    }
    
    budgetDestinations() {
        const destinations = DESTINATIONS.filter(d => d.budget === 'budget');
        return `<p>Smart traveler! 💰 These amazing destinations are easy on the wallet:</p>
        ${this.createDestinationCards(destinations.slice(0, 3))}
        <p>Budget travel tip: Shoulder season (just before/after peak) offers great deals!</p>`;
    }
    
    luxuryDestinations() {
        const destinations = DESTINATIONS.filter(d => d.budget === 'luxury');
        return `<p>Time to treat yourself! ✨ These destinations offer world-class luxury:</p>
        ${this.createDestinationCards(destinations.slice(0, 3))}
        <p>Shall I share some exclusive experiences at these destinations?</p>`;
    }
    
    romanticDestinations() {
        const destinations = DESTINATIONS.filter(d => d.tags.includes('romantic'));
        return `<p>How romantic! 💕 These destinations are perfect for couples:</p>
        ${this.createDestinationCards(destinations.slice(0, 3))}
        <p>Planning a special occasion? I can suggest unique experiences!</p>`;
    }
    
    familyDestinations() {
        const destinations = DESTINATIONS.filter(d => d.tags.includes('family'));
        return `<p>Family adventures are the best! 👨‍👩‍👧‍👦 These destinations are great for all ages:</p>
        ${this.createDestinationCards(destinations.slice(0, 3))}
        <p>Want tips on family-friendly activities at any of these?</p>`;
    }
    
    culturalDestinations() {
        const destinations = DESTINATIONS.filter(d => d.tags.includes('culture') || d.tags.includes('history'));
        return `<p>A culture enthusiast! 🏛️ These destinations are rich in history and heritage:</p>
        ${this.createDestinationCards(destinations.slice(0, 3))}
        <p>Would you like more details about the historical sites?</p>`;
    }
    
    japanInfo() {
        return `<p>Japan is absolutely magical! 🇯🇵</p>
        <div class="destination-card">
            <h4>🗾 Japan Highlights</h4>
            <p><strong>Tokyo:</strong> Neon-lit streets, incredible food, and cutting-edge culture</p>
            <p><strong>Kyoto:</strong> Ancient temples, geisha districts, and traditional gardens</p>
            <p><strong>Osaka:</strong> Street food paradise and vibrant nightlife</p>
            <div class="meta">
                <span>💰 $150-300/day</span>
                <span>🌸 Best: Mar-May, Sep-Nov</span>
            </div>
        </div>
        <p><strong>Must-try:</strong> Ramen, sushi at Tsukiji, staying in a ryokan (traditional inn)</p>
        <p>Would you like specific recommendations for any city?</p>`;
    }
    
    baliInfo() {
        return `<p>Bali is pure magic! 🌴</p>
        <div class="destination-card">
            <h4>🏝️ Bali, Indonesia</h4>
            <p>Island of the Gods - where spirituality meets stunning nature</p>
            <ul>
                <li><strong>Ubud:</strong> Rice terraces, yoga retreats, art galleries</li>
                <li><strong>Seminyak:</strong> Beach clubs, boutiques, nightlife</li>
                <li><strong>Uluwatu:</strong> Dramatic cliffs, surf spots, sunset temples</li>
            </ul>
            <div class="meta">
                <span>💰 $50-150/day</span>
                <span>☀️ Best: Apr-Oct</span>
            </div>
        </div>
        <p>Bali is perfect for both budget backpackers and luxury seekers!</p>`;
    }
    
    parisInfo() {
        return `<p>Ah, Paris! The City of Light! 🗼</p>
        <div class="destination-card">
            <h4>🇫🇷 Paris, France</h4>
            <p>Romance, art, cuisine, and timeless elegance</p>
            <ul>
                <li><strong>Must-see:</strong> Eiffel Tower, Louvre, Notre-Dame, Montmartre</li>
                <li><strong>Hidden gems:</strong> Le Marais, Canal Saint-Martin, covered passages</li>
                <li><strong>Food:</strong> Croissants, macarons, bistro dining</li>
            </ul>
            <div class="meta">
                <span>💰 $150-250/day</span>
                <span>🌷 Best: Apr-Jun, Sep-Oct</span>
            </div>
        </div>
        <p>Pro tip: Get a museum pass to skip the lines!</p>`;
    }
    
    italyInfo() {
        return `<p>Italy is a feast for all senses! 🇮🇹</p>
        <div class="destination-card">
            <h4>🍝 Italy Highlights</h4>
            <p><strong>Rome:</strong> Ancient history, Vatican, incredible pasta</p>
            <p><strong>Florence:</strong> Renaissance art, Tuscan cuisine, leather crafts</p>
            <p><strong>Venice:</strong> Canals, gondolas, unique architecture</p>
            <p><strong>Amalfi Coast:</strong> Stunning coastline, limoncello, charming villages</p>
            <div class="meta">
                <span>💰 $120-250/day</span>
                <span>🌞 Best: Apr-Jun, Sep-Oct</span>
            </div>
        </div>
        <p>Italy tip: Always make dinner reservations at popular restaurants!</p>`;
    }
    
    thailandInfo() {
        return `<p>Thailand has something for everyone! 🇹🇭</p>
        <div class="destination-card">
            <h4>🛕 Thailand Highlights</h4>
            <p><strong>Bangkok:</strong> Temples, street food, vibrant markets</p>
            <p><strong>Chiang Mai:</strong> Mountains, elephants, cooking classes</p>
            <p><strong>Phuket & Islands:</strong> Beautiful beaches, diving, nightlife</p>
            <div class="meta">
                <span>💰 $40-100/day</span>
                <span>☀️ Best: Nov-Feb</span>
            </div>
        </div>
        <p>One of the best value destinations in the world!</p>`;
    }
    
    bestTimeResponse() {
        return `<p>Great question! 📅 Timing can make or break a trip. Here are some guidelines:</p>
        <ul>
            <li><strong>Europe:</strong> Apr-Jun & Sep-Oct (shoulder seasons are magic)</li>
            <li><strong>Southeast Asia:</strong> Nov-Feb (dry season)</li>
            <li><strong>Japan:</strong> Mar-May (cherry blossoms) or Oct-Nov (fall colors)</li>
            <li><strong>Caribbean:</strong> Dec-Apr (dry season)</li>
            <li><strong>Australia:</strong> Sep-Nov or Mar-May</li>
        </ul>
        <p>Which destination are you curious about? I can give you specific timing advice!</p>`;
    }
    
    packingAdvice() {
        return `<p>Smart packing makes travel so much easier! 🎒 Here are my top tips:</p>
        <ul>
            <li><strong>Roll, don't fold</strong> - saves space and reduces wrinkles</li>
            <li><strong>Versatile layers</strong> - mix and match outfits</li>
            <li><strong>Comfortable walking shoes</strong> - you'll thank yourself</li>
            <li><strong>Power bank & universal adapter</strong> - stay charged</li>
            <li><strong>Packing cubes</strong> - game changer for organization</li>
            <li><strong>Small day bag</strong> - for daily exploring</li>
        </ul>
        <p>Tell me where you're going, and I can give you destination-specific packing tips!</p>`;
    }
    
    travelTips() {
        return `<p>Here are some game-changing travel tips! 🌟</p>
        <ul>
            <li>📱 <strong>Download offline maps</strong> before you go</li>
            <li>💳 <strong>Get a no-foreign-fee credit card</strong></li>
            <li>🏨 <strong>Book accommodation in advance</strong> for popular destinations</li>
            <li>🍽️ <strong>Eat where locals eat</strong> - best food, best prices</li>
            <li>⏰ <strong>Visit attractions early morning</strong> - fewer crowds</li>
            <li>📷 <strong>Back up photos to cloud</strong> daily</li>
            <li>🗣️ <strong>Learn basic local phrases</strong> - locals appreciate it!</li>
        </ul>
        <p>Want tips specific to a destination you're planning to visit?</p>`;
    }
    
    visaInfo() {
        return `<p>Visa requirements depend on your nationality and destination. 📋</p>
        <p>Here's what I generally recommend:</p>
        <ul>
            <li>Check <strong>3+ months before travel</strong></li>
            <li>Many countries offer <strong>visa-on-arrival</strong> or <strong>e-visas</strong></li>
            <li>Ensure passport is valid for <strong>6+ months</strong> beyond travel dates</li>
            <li>Keep <strong>digital and physical copies</strong> of documents</li>
        </ul>
        <p>Which countries are you planning to visit? I can give you more specific guidance!</p>`;
    }
    
    weatherInfo() {
        return `<p>Weather is crucial for trip planning! 🌤️</p>
        <p>General patterns:</p>
        <ul>
            <li><strong>Tropical (SE Asia, Caribbean):</strong> Wet vs dry seasons</li>
            <li><strong>Mediterranean:</strong> Hot dry summers, mild winters</li>
            <li><strong>Northern Europe:</strong> Best Jun-Aug, but pricier</li>
            <li><strong>Southern Hemisphere:</strong> Seasons reversed from north</li>
        </ul>
        <p>Tell me where you're going, and I'll give you detailed weather insights!</p>`;
    }
    
    thanksResponse() {
        const responses = [
            `<p>You're so welcome! 🌟 That's what I'm here for. Feel free to ask anything else about your travels!</p>`,
            `<p>My pleasure! ✈️ I love helping wanderlusters plan amazing trips. Anything else you'd like to know?</p>`,
            `<p>Happy to help! 🗺️ Safe travels, and don't hesitate to come back for more advice!</p>`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    goodbyeResponse() {
        return `<p>Safe travels, adventurer! 👋✈️</p>
        <p>Remember: "The world is a book, and those who don't travel read only one page." - Saint Augustine</p>
        <p>Come back anytime you need travel inspiration! 🌍</p>`;
    }
    
    defaultResponse() {
        const responses = [
            `<p>I'd love to help with that! Could you tell me more about what you're looking for?</p>
            <p>Try asking about:</p>
            <ul>
                <li>Specific destinations (e.g., "Tell me about Japan")</li>
                <li>Types of trips (e.g., "Beach vacation" or "Adventure travel")</li>
                <li>Travel advice (e.g., "Packing tips" or "Budget travel")</li>
            </ul>`,
            
            `<p>Great question! Let me help you narrow it down. 🤔</p>
            <p>What's most important for your trip: relaxation, adventure, culture, food, or something else?</p>`,
            
            `<p>I'm here to help you find your perfect destination! 🌎</p>
            <p>Tell me: Are you looking for beaches, cities, mountains, or a mix of everything?</p>`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    createDestinationCards(destinations) {
        return destinations.map(d => `
            <div class="destination-card">
                <h4>${d.emoji} ${d.name}, ${d.country}</h4>
                <p>${d.description}</p>
                <div class="meta">
                    <span>💰 ${d.budgetRange}</span>
                    <span>📅 ${d.bestTime}</span>
                    <span>⭐ ${d.rating}</span>
                </div>
                <div class="highlights">
                    ${d.highlights.slice(0, 3).map(h => `<span class="highlight-tag">${h}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TravelChatbot();
});

// ===== WEATHER WIDGET =====
class WeatherWidget {
    constructor() {
        this.widget = document.getElementById('weatherWidget');
        if (!this.widget) return;
        
        this.iconEl = this.widget.querySelector('.weather-icon');
        this.tempEl = this.widget.querySelector('.weather-temp');
        this.locationEl = this.widget.querySelector('.weather-location');
        
        this.init();
    }
    
    async init() {
        // Try to get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => this.fetchWeather(pos.coords.latitude, pos.coords.longitude),
                () => this.fetchWeather(28.6139, 77.2090) // Default to Delhi
            );
        } else {
            this.fetchWeather(28.6139, 77.2090); // Default to Delhi
        }
    }
    
    async fetchWeather(lat, lon) {
        try {
            // Using Open-Meteo free API (no API key needed)
            const response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`
            );
            const data = await response.json();
            
            const temp = Math.round(data.current.temperature_2m);
            const weatherCode = data.current.weather_code;
            const icon = this.getWeatherIcon(weatherCode);
            
            // Get city name using reverse geocoding
            const cityResponse = await fetch(
                `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}`
            );
            const cityData = await cityResponse.json();
            const city = cityData.name || 'Your Location';
            
            this.tempEl.textContent = `${temp}°C`;
            this.locationEl.textContent = city;
            this.iconEl.textContent = icon;
        } catch (error) {
            console.log('Weather fetch error:', error);
            this.tempEl.textContent = '--°C';
            this.locationEl.textContent = 'Weather';
            this.iconEl.textContent = '🌤️';
        }
    }
    
    getWeatherIcon(code) {
        // WMO Weather interpretation codes
        if (code === 0) return '☀️';
        if (code === 1 || code === 2) return '🌤️';
        if (code === 3) return '☁️';
        if (code >= 45 && code <= 48) return '🌫️';
        if (code >= 51 && code <= 55) return '🌧️';
        if (code >= 56 && code <= 57) return '🌧️';
        if (code >= 61 && code <= 65) return '🌧️';
        if (code >= 66 && code <= 67) return '🌧️';
        if (code >= 71 && code <= 77) return '❄️';
        if (code >= 80 && code <= 82) return '🌧️';
        if (code >= 85 && code <= 86) return '❄️';
        if (code >= 95 && code <= 99) return '⛈️';
        return '🌤️';
    }
}

// Initialize weather widget
document.addEventListener('DOMContentLoaded', () => {
    new WeatherWidget();
});

