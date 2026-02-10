// Travel Destinations Knowledge Base
const DESTINATIONS = [
    // Beach Destinations
    {
        name: "Bali",
        country: "Indonesia",
        emoji: "🏝️",
        description: "Island paradise with stunning temples, rice terraces, and world-class beaches",
        bestTime: "Apr-Oct",
        budget: "budget",
        budgetRange: "$50-150/day",
        rating: "4.8",
        tags: ["beach", "culture", "romantic", "adventure", "budget"],
        highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Seminyak Beach", "Mount Batur", "Yoga Retreats"]
    },
    {
        name: "Maldives",
        country: "Maldives",
        emoji: "🏖️",
        description: "Paradise islands with crystal-clear waters and luxury overwater villas",
        bestTime: "Nov-Apr",
        budget: "luxury",
        budgetRange: "$400-1000/day",
        rating: "4.9",
        tags: ["beach", "luxury", "romantic", "diving"],
        highlights: ["Overwater Bungalows", "Snorkeling", "Sunset Cruises", "Underwater Dining", "Spa Retreats"]
    },
    {
        name: "Phuket",
        country: "Thailand",
        emoji: "🌊",
        description: "Thailand's largest island with beautiful beaches and vibrant nightlife",
        bestTime: "Nov-Feb",
        budget: "budget",
        budgetRange: "$40-120/day",
        rating: "4.5",
        tags: ["beach", "nightlife", "budget", "family"],
        highlights: ["Patong Beach", "Phi Phi Islands", "Big Buddha", "Thai Food", "Island Hopping"]
    },
    {
        name: "Santorini",
        country: "Greece",
        emoji: "🏛️",
        description: "Iconic white-washed buildings with blue domes overlooking the Aegean Sea",
        bestTime: "Apr-Oct",
        budget: "moderate",
        budgetRange: "$150-300/day",
        rating: "4.8",
        tags: ["beach", "romantic", "culture", "photography"],
        highlights: ["Oia Sunsets", "Caldera Views", "Wine Tasting", "Greek Cuisine", "Volcanic Beach"]
    },
    {
        name: "Cancun",
        country: "Mexico",
        emoji: "🌴",
        description: "Caribbean paradise with ancient Mayan ruins and all-inclusive resorts",
        bestTime: "Dec-Apr",
        budget: "moderate",
        budgetRange: "$100-250/day",
        rating: "4.4",
        tags: ["beach", "party", "history", "family", "all-inclusive"],
        highlights: ["Chichen Itza", "Cenotes", "Isla Mujeres", "Beach Clubs", "Mexican Cuisine"]
    },
    
    // City Destinations
    {
        name: "Tokyo",
        country: "Japan",
        emoji: "🗼",
        description: "A mesmerizing blend of ultra-modern and traditional, with the world's best food scene",
        bestTime: "Mar-May, Sep-Nov",
        budget: "moderate",
        budgetRange: "$100-250/day",
        rating: "4.9",
        tags: ["city", "food", "culture", "technology", "shopping"],
        highlights: ["Shibuya Crossing", "Senso-ji Temple", "Ramen", "Sushi", "Robot Restaurant"]
    },
    {
        name: "Paris",
        country: "France",
        emoji: "🗼",
        description: "The City of Light - romance, art, cuisine, and timeless elegance",
        bestTime: "Apr-Jun, Sep-Oct",
        budget: "moderate",
        budgetRange: "$150-300/day",
        rating: "4.7",
        tags: ["city", "romantic", "culture", "food", "art"],
        highlights: ["Eiffel Tower", "Louvre", "Montmartre", "Seine River", "French Pastries"]
    },
    {
        name: "New York",
        country: "USA",
        emoji: "🗽",
        description: "The city that never sleeps - world-class culture, dining, and endless energy",
        bestTime: "Apr-Jun, Sep-Nov",
        budget: "moderate",
        budgetRange: "$200-400/day",
        rating: "4.7",
        tags: ["city", "culture", "food", "shopping", "nightlife"],
        highlights: ["Central Park", "Broadway", "Statue of Liberty", "Times Square", "Brooklyn Bridge"]
    },
    {
        name: "Barcelona",
        country: "Spain",
        emoji: "🏗️",
        description: "Mediterranean vibes with stunning Gaudí architecture and incredible nightlife",
        bestTime: "May-Jun, Sep-Oct",
        budget: "moderate",
        budgetRange: "$120-220/day",
        rating: "4.7",
        tags: ["city", "beach", "culture", "food", "nightlife", "art"],
        highlights: ["Sagrada Familia", "Park Güell", "La Boqueria", "Gothic Quarter", "Beach"]
    },
    {
        name: "Singapore",
        country: "Singapore",
        emoji: "🦁",
        description: "Futuristic city-state with incredible food, gardens, and cleanliness",
        bestTime: "Feb-Apr",
        budget: "moderate",
        budgetRange: "$150-300/day",
        rating: "4.6",
        tags: ["city", "food", "family", "shopping", "modern"],
        highlights: ["Marina Bay Sands", "Gardens by the Bay", "Hawker Centers", "Sentosa", "Orchard Road"]
    },
    
    // Adventure Destinations
    {
        name: "Queenstown",
        country: "New Zealand",
        emoji: "🏔️",
        description: "Adventure capital of the world with stunning alpine scenery",
        bestTime: "Dec-Feb (summer), Jun-Aug (skiing)",
        budget: "moderate",
        budgetRange: "$150-300/day",
        rating: "4.8",
        tags: ["adventure", "nature", "mountains", "extreme sports"],
        highlights: ["Bungee Jumping", "Milford Sound", "Skiing", "Jet Boating", "Lord of the Rings Tours"]
    },
    {
        name: "Costa Rica",
        country: "Costa Rica",
        emoji: "🦜",
        description: "Eco-paradise with rainforests, volcanoes, and incredible biodiversity",
        bestTime: "Dec-Apr",
        budget: "moderate",
        budgetRange: "$80-180/day",
        rating: "4.7",
        tags: ["adventure", "nature", "wildlife", "beach", "eco-tourism"],
        highlights: ["Zip-lining", "Arenal Volcano", "Manuel Antonio", "Cloud Forests", "Wildlife"]
    },
    {
        name: "Iceland",
        country: "Iceland",
        emoji: "🌋",
        description: "Land of fire and ice with extraordinary natural wonders",
        bestTime: "Jun-Aug (midnight sun), Sep-Mar (northern lights)",
        budget: "luxury",
        budgetRange: "$250-400/day",
        rating: "4.9",
        tags: ["adventure", "nature", "unique", "photography"],
        highlights: ["Northern Lights", "Blue Lagoon", "Golden Circle", "Glacier Hiking", "Waterfalls"]
    },
    {
        name: "Patagonia",
        country: "Argentina/Chile",
        emoji: "🏔️",
        description: "Dramatic landscapes of glaciers, mountains, and untouched wilderness",
        bestTime: "Nov-Mar",
        budget: "moderate",
        budgetRange: "$120-250/day",
        rating: "4.9",
        tags: ["adventure", "nature", "hiking", "mountains"],
        highlights: ["Torres del Paine", "Perito Moreno Glacier", "Fitz Roy", "Wildlife", "Trekking"]
    },
    {
        name: "Nepal",
        country: "Nepal",
        emoji: "🏔️",
        description: "Home of the Himalayas with world-class trekking and spiritual experiences",
        bestTime: "Oct-Nov, Mar-May",
        budget: "budget",
        budgetRange: "$30-80/day",
        rating: "4.7",
        tags: ["adventure", "mountains", "culture", "budget", "spiritual"],
        highlights: ["Everest Base Camp", "Annapurna Circuit", "Kathmandu", "Buddhist Temples", "Trekking"]
    },
    
    // Cultural & Historical
    {
        name: "Rome",
        country: "Italy",
        emoji: "🏛️",
        description: "The Eternal City with 3,000 years of history and incredible cuisine",
        bestTime: "Apr-Jun, Sep-Oct",
        budget: "moderate",
        budgetRange: "$120-250/day",
        rating: "4.8",
        tags: ["history", "culture", "food", "art", "city"],
        highlights: ["Colosseum", "Vatican City", "Trevi Fountain", "Roman Forum", "Italian Cuisine"]
    },
    {
        name: "Kyoto",
        country: "Japan",
        emoji: "⛩️",
        description: "Ancient capital with thousands of temples, gardens, and geisha districts",
        bestTime: "Mar-May, Oct-Nov",
        budget: "moderate",
        budgetRange: "$100-200/day",
        rating: "4.9",
        tags: ["culture", "history", "spiritual", "nature"],
        highlights: ["Fushimi Inari", "Bamboo Grove", "Geisha District", "Temples", "Tea Ceremonies"]
    },
    {
        name: "Marrakech",
        country: "Morocco",
        emoji: "🕌",
        description: "Sensory overload of colors, sounds, and flavors in ancient medinas",
        bestTime: "Mar-May, Sep-Nov",
        budget: "budget",
        budgetRange: "$50-120/day",
        rating: "4.5",
        tags: ["culture", "history", "food", "budget", "unique"],
        highlights: ["Medina", "Jemaa el-Fnaa", "Riads", "Souks", "Moroccan Cuisine"]
    },
    {
        name: "Cairo",
        country: "Egypt",
        emoji: "🔺",
        description: "Gateway to ancient wonders and pharaonic treasures",
        bestTime: "Oct-Apr",
        budget: "budget",
        budgetRange: "$40-100/day",
        rating: "4.4",
        tags: ["history", "culture", "ancient", "budget"],
        highlights: ["Pyramids of Giza", "Sphinx", "Egyptian Museum", "Nile Cruise", "Luxor"]
    },
    {
        name: "Petra",
        country: "Jordan",
        emoji: "🏜️",
        description: "Rose-red city carved into cliffs - one of the New Seven Wonders",
        bestTime: "Mar-May, Sep-Nov",
        budget: "moderate",
        budgetRange: "$80-150/day",
        rating: "4.9",
        tags: ["history", "adventure", "unique", "photography"],
        highlights: ["The Treasury", "The Monastery", "Wadi Rum", "Dead Sea", "Jordanian Hospitality"]
    },
    
    // Food Destinations
    {
        name: "Bangkok",
        country: "Thailand",
        emoji: "🍜",
        description: "Street food paradise with temples, markets, and legendary nightlife",
        bestTime: "Nov-Feb",
        budget: "budget",
        budgetRange: "$40-100/day",
        rating: "4.6",
        tags: ["food", "city", "budget", "nightlife", "culture"],
        highlights: ["Street Food", "Grand Palace", "Floating Markets", "Rooftop Bars", "Thai Massage"]
    },
    {
        name: "Lisbon",
        country: "Portugal",
        emoji: "🚃",
        description: "Charming hills, pastel buildings, and incredible seafood and pastries",
        bestTime: "Mar-May, Sep-Oct",
        budget: "moderate",
        budgetRange: "$100-180/day",
        rating: "4.7",
        tags: ["food", "city", "culture", "beach", "budget-friendly"],
        highlights: ["Pastéis de Belém", "Alfama", "Sintra", "Seafood", "Fado Music"]
    },
    {
        name: "Mexico City",
        country: "Mexico",
        emoji: "🌮",
        description: "Vibrant metropolis with rich history and world-class Mexican cuisine",
        bestTime: "Mar-May",
        budget: "budget",
        budgetRange: "$60-150/day",
        rating: "4.6",
        tags: ["food", "city", "culture", "history", "art"],
        highlights: ["Tacos", "Frida Kahlo Museum", "Teotihuacan", "Street Food", "Mezcal"]
    },
    
    // Family-Friendly
    {
        name: "Orlando",
        country: "USA",
        emoji: "🏰",
        description: "Theme park capital of the world with endless family entertainment",
        bestTime: "Mar-May, Sep-Nov",
        budget: "moderate",
        budgetRange: "$200-400/day",
        rating: "4.5",
        tags: ["family", "entertainment", "theme parks"],
        highlights: ["Walt Disney World", "Universal Studios", "SeaWorld", "Kennedy Space Center"]
    },
    {
        name: "London",
        country: "UK",
        emoji: "🎡",
        description: "Historic capital with world-class museums, parks, and endless activities",
        bestTime: "May-Sep",
        budget: "moderate",
        budgetRange: "$180-350/day",
        rating: "4.6",
        tags: ["city", "family", "culture", "history", "shopping"],
        highlights: ["Big Ben", "Tower of London", "British Museum", "Harry Potter Studios", "West End"]
    },
    {
        name: "Dubai",
        country: "UAE",
        emoji: "🌆",
        description: "Futuristic city of superlatives with beaches, shopping, and entertainment",
        bestTime: "Nov-Mar",
        budget: "luxury",
        budgetRange: "$200-500/day",
        rating: "4.5",
        tags: ["luxury", "family", "shopping", "beach", "modern"],
        highlights: ["Burj Khalifa", "Dubai Mall", "Desert Safari", "Palm Jumeirah", "Gold Souk"]
    }
];

// Travel tips by category
const TRAVEL_TIPS = {
    packing: [
        "Roll clothes instead of folding to save space",
        "Pack versatile, mix-and-match clothing",
        "Always bring a portable charger",
        "Use packing cubes for organization",
        "Wear your bulkiest items on the plane"
    ],
    budget: [
        "Travel during shoulder season for better deals",
        "Use local transportation instead of taxis",
        "Eat where locals eat",
        "Book flights on Tuesday or Wednesday",
        "Use credit cards with no foreign transaction fees"
    ],
    safety: [
        "Keep digital copies of important documents",
        "Register with your embassy when traveling abroad",
        "Use hotel safes for valuables",
        "Share your itinerary with someone at home",
        "Trust your instincts in unfamiliar situations"
    ],
    photography: [
        "The golden hours are sunrise and sunset",
        "Wake up early to avoid crowds at popular spots",
        "Back up photos daily to the cloud",
        "Capture local life, not just monuments",
        "Ask permission before photographing people"
    ]
};

// Seasonal travel recommendations
const SEASONAL_DESTINATIONS = {
    spring: ["Japan (Cherry Blossoms)", "Netherlands (Tulips)", "Washington DC", "Paris"],
    summer: ["Iceland", "Alaska", "Scandinavia", "Canadian Rockies"],
    fall: ["New England", "Kyoto", "Bavaria", "Patagonia"],
    winter: ["Maldives", "Thailand", "New Zealand", "Costa Rica"]
};
