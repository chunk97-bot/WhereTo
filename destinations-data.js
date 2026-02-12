/**
 * WhereTo Destinations Data
 * Comprehensive travel destinations database
 * Structure: Regions > Countries > Cities > Attractions/Activities
 */

// ============================================
// CATEGORIES (Travel Themes/Types)
// ============================================
const destinationCategories = [
    { id: 'all', name: 'All', icon: '🌍' },
    { id: 'beach', name: 'Beaches', icon: '🏖️' },
    { id: 'mountains', name: 'Hills & Mountains', icon: '🏔️' },
    { id: 'heritage', name: 'Heritage', icon: '🏛️' },
    { id: 'honeymoon', name: 'Honeymoon', icon: '💕' },
    { id: 'adventure', name: 'Adventure', icon: '🎯' },
    { id: 'romantic', name: 'Romantic', icon: '❤️' },
    { id: 'pilgrimage', name: 'Pilgrimage', icon: '🙏' },
    { id: 'food', name: 'Food & Cuisine', icon: '🍜' },
    { id: 'trekking', name: 'Trekking', icon: '🥾' },
    { id: 'relaxation', name: 'Relaxation', icon: '🧘' },
    { id: 'wildlife', name: 'Wildlife', icon: '🦁' },
    { id: 'nightlife', name: 'Nightlife', icon: '🎉' },
    { id: 'shopping', name: 'Shopping', icon: '🛍️' },
    { id: 'waterSports', name: 'Water Sports', icon: '🏄' },
    { id: 'cultural', name: 'Cultural', icon: '🎭' },
    { id: 'offbeat', name: 'Offbeat', icon: '🗺️' }
];

// ============================================
// COLLECTIONS (Curated lists)
// ============================================
const destinationCollections = [
    // Monthly Collections
    { id: 'january', name: 'January Destinations', icon: '❄️', type: 'month', description: 'Best places to visit in January' },
    { id: 'february', name: 'February Destinations', icon: '💕', type: 'month', description: 'Valentine\'s special & winter escapes' },
    { id: 'march', name: 'March Destinations', icon: '🌸', type: 'month', description: 'Spring getaways before summer' },
    { id: 'april', name: 'April Destinations', icon: '🌷', type: 'month', description: 'Beat the heat hill stations' },
    { id: 'may', name: 'May Destinations', icon: '☀️', type: 'month', description: 'Summer vacation spots' },
    { id: 'june', name: 'June Destinations', icon: '🌧️', type: 'month', description: 'Monsoon magic destinations' },
    { id: 'july', name: 'July Destinations', icon: '🌈', type: 'month', description: 'Lush green retreats' },
    { id: 'august', name: 'August Destinations', icon: '🌿', type: 'month', description: 'Independence Day specials' },
    { id: 'september', name: 'September Destinations', icon: '🍂', type: 'month', description: 'Post-monsoon beauty' },
    { id: 'october', name: 'October Destinations', icon: '🎃', type: 'month', description: 'Festive season travels' },
    { id: 'november', name: 'November Destinations', icon: '🍁', type: 'month', description: 'Perfect weather escapes' },
    { id: 'december', name: 'December Destinations', icon: '🎄', type: 'month', description: 'Winter wonderlands & New Year' },
    
    // Special Collections
    { id: 'weekend', name: 'Weekend Getaways', icon: '🚗', type: 'special', description: '2-3 day escapes near you' },
    { id: 'budget', name: 'Budget Friendly', icon: '💰', type: 'special', description: 'Under ₹15,000 trips' },
    { id: 'luxury', name: 'Luxury Escapes', icon: '👑', type: 'special', description: 'Premium travel experiences' },
    { id: 'family', name: 'Family Vacations', icon: '👨‍👩‍👧‍👦', type: 'special', description: 'Kid-friendly destinations' },
    { id: 'solo', name: 'Solo Travel', icon: '🎒', type: 'special', description: 'Best for solo travelers' },
    { id: 'international', name: 'International', icon: '✈️', type: 'special', description: 'Best destinations abroad' },
    { id: 'trending', name: 'Trending 2026', icon: '🔥', type: 'special', description: 'Most popular this year' }
];

// ============================================
// REGIONS DATA
// ============================================
const regions = [
    { id: 'asia', name: 'Asia', icon: '🌏' },
    { id: 'europe', name: 'Europe', icon: '🇪🇺' },
    { id: 'northAmerica', name: 'North America', icon: '🌎' },
    { id: 'southAmerica', name: 'South America', icon: '🌎' },
    { id: 'africa', name: 'Africa', icon: '🌍' },
    { id: 'oceania', name: 'Oceania', icon: '🌊' },
    { id: 'middleEast', name: 'Middle East', icon: '🕌' }
];

// ============================================
// COUNTRIES DATA
// ============================================
const countriesData = [
    // ASIA
    {
        id: 'india',
        name: 'India',
        region: 'asia',
        flag: '🇮🇳',
        currency: 'INR',
        currencySymbol: '₹',
        language: 'Hindi, English',
        visaRequired: false,
        bestMonths: ['october', 'november', 'december', 'january', 'february', 'march'],
        description: 'Incredible diversity from Himalayas to tropical beaches, ancient temples to modern cities.',
        highlights: ['Taj Mahal', 'Kerala Backwaters', 'Rajasthan Forts', 'Goa Beaches', 'Himalayas'],
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800'
    },
    {
        id: 'thailand',
        name: 'Thailand',
        region: 'asia',
        flag: '🇹🇭',
        currency: 'THB',
        currencySymbol: '฿',
        language: 'Thai',
        visaRequired: false,
        bestMonths: ['november', 'december', 'january', 'february', 'march'],
        description: 'Land of smiles with stunning beaches, ornate temples, and incredible street food.',
        highlights: ['Bangkok Temples', 'Phuket Beaches', 'Chiang Mai', 'Thai Cuisine', 'Full Moon Party'],
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800'
    },
    {
        id: 'indonesia',
        name: 'Indonesia',
        region: 'asia',
        flag: '🇮🇩',
        currency: 'IDR',
        currencySymbol: 'Rp',
        language: 'Indonesian',
        visaRequired: false,
        bestMonths: ['april', 'may', 'june', 'july', 'august', 'september'],
        description: 'Archipelago paradise with world-famous Bali, ancient temples, and diverse cultures.',
        highlights: ['Bali', 'Komodo Dragons', 'Borobudur', 'Raja Ampat', 'Ubud'],
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800'
    },
    {
        id: 'japan',
        name: 'Japan',
        region: 'asia',
        flag: '🇯🇵',
        currency: 'JPY',
        currencySymbol: '¥',
        language: 'Japanese',
        visaRequired: true,
        bestMonths: ['march', 'april', 'october', 'november'],
        description: 'Perfect blend of ancient traditions and cutting-edge technology.',
        highlights: ['Cherry Blossoms', 'Mt. Fuji', 'Tokyo', 'Kyoto Temples', 'Japanese Cuisine'],
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800'
    },
    {
        id: 'maldives',
        name: 'Maldives',
        region: 'asia',
        flag: '🇲🇻',
        currency: 'MVR',
        currencySymbol: 'Rf',
        language: 'Dhivehi',
        visaRequired: false,
        bestMonths: ['november', 'december', 'january', 'february', 'march', 'april'],
        description: 'Ultimate luxury beach destination with overwater villas and crystal-clear waters.',
        highlights: ['Overwater Villas', 'Underwater Dining', 'Snorkeling', 'Sunset Cruises', 'Spa Retreats'],
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800'
    },
    {
        id: 'singapore',
        name: 'Singapore',
        region: 'asia',
        flag: '🇸🇬',
        currency: 'SGD',
        currencySymbol: 'S$',
        language: 'English, Mandarin, Malay, Tamil',
        visaRequired: false,
        bestMonths: ['february', 'march', 'april', 'may', 'june', 'july'],
        description: 'Futuristic city-state with world-class attractions, food, and shopping.',
        highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Hawker Food', 'Universal Studios'],
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800'
    },
    {
        id: 'vietnam',
        name: 'Vietnam',
        region: 'asia',
        flag: '🇻🇳',
        currency: 'VND',
        currencySymbol: '₫',
        language: 'Vietnamese',
        visaRequired: true,
        bestMonths: ['february', 'march', 'april', 'september', 'october', 'november'],
        description: 'Stunning landscapes from Ha Long Bay to Mekong Delta with rich history.',
        highlights: ['Ha Long Bay', 'Hoi An', 'Pho', 'Cu Chi Tunnels', 'Sapa Rice Terraces'],
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800'
    },
    {
        id: 'malaysia',
        name: 'Malaysia',
        region: 'asia',
        flag: '🇲🇾',
        currency: 'MYR',
        currencySymbol: 'RM',
        language: 'Malay, English',
        visaRequired: false,
        bestMonths: ['march', 'april', 'may', 'june', 'july', 'september'],
        description: 'Diverse nation with rainforests, beaches, and multicultural cities.',
        highlights: ['Petronas Towers', 'Langkawi', 'Borneo Wildlife', 'Penang Food', 'Cameron Highlands'],
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800'
    },
    {
        id: 'srilanka',
        name: 'Sri Lanka',
        region: 'asia',
        flag: '🇱🇰',
        currency: 'LKR',
        currencySymbol: 'Rs',
        language: 'Sinhala, Tamil',
        visaRequired: true,
        bestMonths: ['december', 'january', 'february', 'march', 'july', 'august'],
        description: 'Tropical island with ancient ruins, tea plantations, and wildlife safaris.',
        highlights: ['Sigiriya Rock', 'Ella Train', 'Yala Safari', 'Galle Fort', 'Tea Plantations'],
        image: 'https://images.unsplash.com/photo-1586183189334-4c4e3c7024c8?w=800'
    },
    {
        id: 'nepal',
        name: 'Nepal',
        region: 'asia',
        flag: '🇳🇵',
        currency: 'NPR',
        currencySymbol: 'Rs',
        language: 'Nepali',
        visaRequired: true,
        bestMonths: ['september', 'october', 'november', 'march', 'april', 'may'],
        description: 'Home to Mount Everest and stunning Himalayan treks.',
        highlights: ['Everest Base Camp', 'Kathmandu', 'Pokhara', 'Annapurna Trek', 'Buddhist Monasteries'],
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800'
    },
    {
        id: 'bhutan',
        name: 'Bhutan',
        region: 'asia',
        flag: '🇧🇹',
        currency: 'BTN',
        currencySymbol: 'Nu.',
        language: 'Dzongkha',
        visaRequired: true,
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        description: 'Last Himalayan kingdom with pristine nature and unique culture.',
        highlights: ['Tiger\'s Nest', 'Punakha Dzong', 'Gross National Happiness', 'Festivals', 'Hiking'],
        image: 'https://images.unsplash.com/photo-1553856622-d1b352e24a4c?w=800'
    },
    
    // EUROPE
    {
        id: 'france',
        name: 'France',
        region: 'europe',
        flag: '🇫🇷',
        currency: 'EUR',
        currencySymbol: '€',
        language: 'French',
        visaRequired: true,
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        description: 'Romance, art, cuisine, and iconic landmarks from Paris to Provence.',
        highlights: ['Eiffel Tower', 'Louvre', 'French Riviera', 'Wine Regions', 'Mont Saint-Michel'],
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800'
    },
    {
        id: 'italy',
        name: 'Italy',
        region: 'europe',
        flag: '🇮🇹',
        currency: 'EUR',
        currencySymbol: '€',
        language: 'Italian',
        visaRequired: true,
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        description: 'Art, architecture, cuisine, and history in every corner.',
        highlights: ['Rome Colosseum', 'Venice Canals', 'Tuscany', 'Amalfi Coast', 'Italian Food'],
        image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800'
    },
    {
        id: 'spain',
        name: 'Spain',
        region: 'europe',
        flag: '🇪🇸',
        currency: 'EUR',
        currencySymbol: '€',
        language: 'Spanish',
        visaRequired: true,
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        description: 'Vibrant culture, stunning beaches, tapas, and flamenco.',
        highlights: ['Barcelona', 'Madrid', 'Ibiza', 'Sagrada Familia', 'Alhambra'],
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800'
    },
    {
        id: 'greece',
        name: 'Greece',
        region: 'europe',
        flag: '🇬🇷',
        currency: 'EUR',
        currencySymbol: '€',
        language: 'Greek',
        visaRequired: true,
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        description: 'Ancient ruins, stunning islands, and Mediterranean beauty.',
        highlights: ['Santorini', 'Acropolis', 'Mykonos', 'Greek Islands', 'Ancient Ruins'],
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800'
    },
    {
        id: 'switzerland',
        name: 'Switzerland',
        region: 'europe',
        flag: '🇨🇭',
        currency: 'CHF',
        currencySymbol: 'CHF',
        language: 'German, French, Italian',
        visaRequired: true,
        bestMonths: ['june', 'july', 'august', 'september', 'december', 'january', 'february'],
        description: 'Alpine paradise with stunning mountains, lakes, and chocolate.',
        highlights: ['Swiss Alps', 'Interlaken', 'Zurich', 'Jungfrau', 'Lake Geneva'],
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800'
    },
    {
        id: 'uk',
        name: 'United Kingdom',
        region: 'europe',
        flag: '🇬🇧',
        currency: 'GBP',
        currencySymbol: '£',
        language: 'English',
        visaRequired: true,
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'Royal heritage, charming countryside, and vibrant cities.',
        highlights: ['London', 'Edinburgh', 'Stonehenge', 'Scottish Highlands', 'Oxford'],
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800'
    },
    {
        id: 'germany',
        name: 'Germany',
        region: 'europe',
        flag: '🇩🇪',
        currency: 'EUR',
        currencySymbol: '€',
        language: 'German',
        visaRequired: true,
        bestMonths: ['may', 'june', 'july', 'august', 'september', 'december'],
        description: 'Castles, culture, beer, and efficiency.',
        highlights: ['Berlin', 'Munich', 'Neuschwanstein Castle', 'Oktoberfest', 'Black Forest'],
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800'
    },
    {
        id: 'netherlands',
        name: 'Netherlands',
        region: 'europe',
        flag: '🇳🇱',
        currency: 'EUR',
        currencySymbol: '€',
        language: 'Dutch',
        visaRequired: true,
        bestMonths: ['april', 'may', 'june', 'july', 'august', 'september'],
        description: 'Tulips, windmills, canals, and world-class museums.',
        highlights: ['Amsterdam Canals', 'Van Gogh Museum', 'Keukenhof', 'Windmills', 'Anne Frank House'],
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800'
    },
    {
        id: 'portugal',
        name: 'Portugal',
        region: 'europe',
        flag: '🇵🇹',
        currency: 'EUR',
        currencySymbol: '€',
        language: 'Portuguese',
        visaRequired: true,
        bestMonths: ['march', 'april', 'may', 'june', 'september', 'october'],
        description: 'Historic cities, stunning coastline, and delicious cuisine.',
        highlights: ['Lisbon', 'Porto', 'Algarve', 'Sintra', 'Pastel de Nata'],
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800'
    },
    {
        id: 'iceland',
        name: 'Iceland',
        region: 'europe',
        flag: '🇮🇸',
        currency: 'ISK',
        currencySymbol: 'kr',
        language: 'Icelandic',
        visaRequired: true,
        bestMonths: ['june', 'july', 'august', 'september', 'february', 'march'],
        description: 'Land of fire and ice with geysers, glaciers, and Northern Lights.',
        highlights: ['Northern Lights', 'Blue Lagoon', 'Golden Circle', 'Glaciers', 'Volcanoes'],
        image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800'
    },
    {
        id: 'norway',
        name: 'Norway',
        region: 'europe',
        flag: '🇳🇴',
        currency: 'NOK',
        currencySymbol: 'kr',
        language: 'Norwegian',
        visaRequired: true,
        bestMonths: ['may', 'june', 'july', 'august', 'september', 'december', 'january'],
        description: 'Dramatic fjords, Northern Lights, and stunning natural beauty.',
        highlights: ['Fjords', 'Northern Lights', 'Oslo', 'Bergen', 'Midnight Sun'],
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    },
    
    // MIDDLE EAST
    {
        id: 'uae',
        name: 'United Arab Emirates',
        region: 'middleEast',
        flag: '🇦🇪',
        currency: 'AED',
        currencySymbol: 'د.إ',
        language: 'Arabic, English',
        visaRequired: true,
        bestMonths: ['november', 'december', 'january', 'february', 'march'],
        description: 'Futuristic cities, luxury shopping, and desert adventures.',
        highlights: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari', 'Abu Dhabi', 'Palm Jumeirah'],
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
    },
    {
        id: 'turkey',
        name: 'Turkey',
        region: 'middleEast',
        flag: '🇹🇷',
        currency: 'TRY',
        currencySymbol: '₺',
        language: 'Turkish',
        visaRequired: true,
        bestMonths: ['april', 'may', 'september', 'october', 'november'],
        description: 'Bridge between East and West with rich history and stunning landscapes.',
        highlights: ['Istanbul', 'Cappadocia', 'Pamukkale', 'Ephesus', 'Turkish Cuisine'],
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800'
    },
    {
        id: 'jordan',
        name: 'Jordan',
        region: 'middleEast',
        flag: '🇯🇴',
        currency: 'JOD',
        currencySymbol: 'JD',
        language: 'Arabic',
        visaRequired: true,
        bestMonths: ['march', 'april', 'may', 'october', 'november'],
        description: 'Ancient wonders and dramatic desert landscapes.',
        highlights: ['Petra', 'Wadi Rum', 'Dead Sea', 'Amman', 'Red Sea'],
        image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=800'
    },
    {
        id: 'egypt',
        name: 'Egypt',
        region: 'middleEast',
        flag: '🇪🇬',
        currency: 'EGP',
        currencySymbol: 'E£',
        language: 'Arabic',
        visaRequired: true,
        bestMonths: ['october', 'november', 'december', 'january', 'february', 'march'],
        description: 'Land of pharaohs with pyramids, temples, and Nile cruises.',
        highlights: ['Pyramids of Giza', 'Luxor Temples', 'Nile Cruise', 'Valley of Kings', 'Red Sea Diving'],
        image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800'
    },
    
    // NORTH AMERICA
    {
        id: 'usa',
        name: 'United States',
        region: 'northAmerica',
        flag: '🇺🇸',
        currency: 'USD',
        currencySymbol: '$',
        language: 'English',
        visaRequired: true,
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        description: 'Diverse landscapes from beaches to mountains, iconic cities.',
        highlights: ['New York', 'Grand Canyon', 'Las Vegas', 'San Francisco', 'National Parks'],
        image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800'
    },
    {
        id: 'canada',
        name: 'Canada',
        region: 'northAmerica',
        flag: '🇨🇦',
        currency: 'CAD',
        currencySymbol: 'C$',
        language: 'English, French',
        visaRequired: true,
        bestMonths: ['june', 'july', 'august', 'september', 'december', 'january'],
        description: 'Vast wilderness, stunning national parks, and vibrant cities.',
        highlights: ['Niagara Falls', 'Banff', 'Vancouver', 'Toronto', 'Northern Lights'],
        image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800'
    },
    {
        id: 'mexico',
        name: 'Mexico',
        region: 'northAmerica',
        flag: '🇲🇽',
        currency: 'MXN',
        currencySymbol: 'Mex$',
        language: 'Spanish',
        visaRequired: false,
        bestMonths: ['december', 'january', 'february', 'march', 'april'],
        description: 'Ancient ruins, pristine beaches, and vibrant culture.',
        highlights: ['Cancun', 'Chichen Itza', 'Mexico City', 'Tulum', 'Mexican Cuisine'],
        image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800'
    },
    
    // SOUTH AMERICA
    {
        id: 'brazil',
        name: 'Brazil',
        region: 'southAmerica',
        flag: '🇧🇷',
        currency: 'BRL',
        currencySymbol: 'R$',
        language: 'Portuguese',
        visaRequired: false,
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        description: 'Vibrant culture, rainforests, beaches, and Carnival.',
        highlights: ['Christ the Redeemer', 'Amazon Rainforest', 'Rio Beaches', 'Iguazu Falls', 'Carnival'],
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800'
    },
    {
        id: 'peru',
        name: 'Peru',
        region: 'southAmerica',
        flag: '🇵🇪',
        currency: 'PEN',
        currencySymbol: 'S/',
        language: 'Spanish',
        visaRequired: false,
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'Ancient Incan wonders and diverse ecosystems.',
        highlights: ['Machu Picchu', 'Cusco', 'Sacred Valley', 'Amazon', 'Lake Titicaca'],
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800'
    },
    {
        id: 'argentina',
        name: 'Argentina',
        region: 'southAmerica',
        flag: '🇦🇷',
        currency: 'ARS',
        currencySymbol: 'AR$',
        language: 'Spanish',
        visaRequired: false,
        bestMonths: ['october', 'november', 'december', 'march', 'april'],
        description: 'Tango, wine, glaciers, and stunning Patagonia.',
        highlights: ['Buenos Aires', 'Patagonia', 'Iguazu Falls', 'Mendoza Wine', 'Glaciers'],
        image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800'
    },
    
    // AFRICA
    {
        id: 'southafrica',
        name: 'South Africa',
        region: 'africa',
        flag: '🇿🇦',
        currency: 'ZAR',
        currencySymbol: 'R',
        language: 'English, Afrikaans',
        visaRequired: false,
        bestMonths: ['april', 'may', 'september', 'october', 'november'],
        description: 'Safari adventures, stunning coastline, and vibrant cities.',
        highlights: ['Cape Town', 'Kruger Safari', 'Table Mountain', 'Garden Route', 'Wine Regions'],
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800'
    },
    {
        id: 'kenya',
        name: 'Kenya',
        region: 'africa',
        flag: '🇰🇪',
        currency: 'KES',
        currencySymbol: 'KSh',
        language: 'English, Swahili',
        visaRequired: true,
        bestMonths: ['july', 'august', 'september', 'october', 'january', 'february'],
        description: 'Ultimate safari destination with the Great Migration.',
        highlights: ['Masai Mara', 'Great Migration', 'Nairobi', 'Mount Kenya', 'Diani Beach'],
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800'
    },
    {
        id: 'morocco',
        name: 'Morocco',
        region: 'africa',
        flag: '🇲🇦',
        currency: 'MAD',
        currencySymbol: 'MAD',
        language: 'Arabic, French',
        visaRequired: false,
        bestMonths: ['march', 'april', 'may', 'october', 'november'],
        description: 'Exotic markets, desert adventures, and ancient medinas.',
        highlights: ['Marrakech', 'Sahara Desert', 'Fes Medina', 'Chefchaouen', 'Atlas Mountains'],
        image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800'
    },
    {
        id: 'tanzania',
        name: 'Tanzania',
        region: 'africa',
        flag: '🇹🇿',
        currency: 'TZS',
        currencySymbol: 'TSh',
        language: 'English, Swahili',
        visaRequired: true,
        bestMonths: ['june', 'july', 'august', 'september', 'january', 'february'],
        description: 'Serengeti safaris and Mount Kilimanjaro adventures.',
        highlights: ['Serengeti', 'Mount Kilimanjaro', 'Zanzibar', 'Ngorongoro Crater', 'Safari'],
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800'
    },
    
    // OCEANIA
    {
        id: 'australia',
        name: 'Australia',
        region: 'oceania',
        flag: '🇦🇺',
        currency: 'AUD',
        currencySymbol: 'A$',
        language: 'English',
        visaRequired: true,
        bestMonths: ['september', 'october', 'november', 'march', 'april', 'may'],
        description: 'Unique wildlife, stunning beaches, and outback adventures.',
        highlights: ['Sydney Opera House', 'Great Barrier Reef', 'Uluru', 'Melbourne', 'Gold Coast'],
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800'
    },
    {
        id: 'newzealand',
        name: 'New Zealand',
        region: 'oceania',
        flag: '🇳🇿',
        currency: 'NZD',
        currencySymbol: 'NZ$',
        language: 'English, Maori',
        visaRequired: true,
        bestMonths: ['december', 'january', 'february', 'march', 'april'],
        description: 'Dramatic landscapes from Lord of the Rings and adventure capital.',
        highlights: ['Queenstown', 'Milford Sound', 'Hobbiton', 'Rotorua', 'Fiordland'],
        image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=800'
    },
    {
        id: 'fiji',
        name: 'Fiji',
        region: 'oceania',
        flag: '🇫🇯',
        currency: 'FJD',
        currencySymbol: 'FJ$',
        language: 'English, Fijian',
        visaRequired: false,
        bestMonths: ['may', 'june', 'july', 'august', 'september', 'october'],
        description: 'Tropical paradise with pristine beaches and warm hospitality.',
        highlights: ['Mamanuca Islands', 'Coral Reefs', 'Bure Stays', 'Culture Villages', 'Diving'],
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800'
    }
];

// ============================================
// CITIES/DESTINATIONS DATA
// ============================================
const destinationsData = [
    // INDIA
    {
        id: 1,
        name: 'Goa',
        country: 'India',
        countryId: 'india',
        region: 'asia',
        description: 'Sun, sand, and Portuguese heritage on India\'s western coast.',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
        category: ['beach', 'nightlife', 'relaxation', 'food'],
        highlights: ['Baga Beach', 'Old Goa Churches', 'Anjuna Flea Market', 'Water Sports', 'Nightlife'],
        rating: 4.5,
        reviews: 12450,
        priceFrom: 5000,
        currency: '₹',
        bestTime: 'November to February',
        bestMonths: ['november', 'december', 'january', 'february'],
        duration: '4-5 days',
        featured: true,
        collections: ['beach', 'weekend', 'nightlife', 'december', 'january']
    },
    {
        id: 2,
        name: 'Manali',
        country: 'India',
        countryId: 'india',
        region: 'asia',
        description: 'Himalayan paradise with snow-capped peaks and adventure sports.',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
        category: ['mountains', 'adventure', 'honeymoon', 'trekking'],
        highlights: ['Rohtang Pass', 'Solang Valley', 'Old Manali', 'River Rafting', 'Skiing'],
        rating: 4.6,
        reviews: 9876,
        priceFrom: 8000,
        currency: '₹',
        bestTime: 'October to June',
        bestMonths: ['october', 'november', 'december', 'january', 'february', 'march', 'april', 'may', 'june'],
        duration: '5-6 days',
        featured: true,
        collections: ['mountains', 'honeymoon', 'adventure', 'december']
    },
    {
        id: 3,
        name: 'Jaipur',
        country: 'India',
        countryId: 'india',
        region: 'asia',
        description: 'The Pink City with magnificent forts, palaces, and rich culture.',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
        category: ['heritage', 'cultural', 'shopping', 'food'],
        highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Bazaars'],
        rating: 4.7,
        reviews: 15678,
        priceFrom: 6000,
        currency: '₹',
        bestTime: 'October to March',
        bestMonths: ['october', 'november', 'december', 'january', 'february', 'march'],
        duration: '3-4 days',
        featured: true,
        collections: ['heritage', 'cultural', 'shopping', 'february']
    },
    {
        id: 4,
        name: 'Kerala Backwaters',
        country: 'India',
        countryId: 'india',
        region: 'asia',
        description: 'Serene houseboat cruises through palm-fringed waterways.',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
        category: ['relaxation', 'romantic', 'honeymoon', 'cultural'],
        highlights: ['Houseboat Stay', 'Alleppey', 'Kumarakom', 'Ayurveda', 'Village Tours'],
        rating: 4.8,
        reviews: 11234,
        priceFrom: 12000,
        currency: '₹',
        bestTime: 'September to March',
        bestMonths: ['september', 'october', 'november', 'december', 'january', 'february', 'march'],
        duration: '4-5 days',
        featured: true,
        collections: ['honeymoon', 'relaxation', 'romantic', 'november']
    },
    {
        id: 5,
        name: 'Ladakh',
        country: 'India',
        countryId: 'india',
        region: 'asia',
        description: 'High-altitude desert with dramatic landscapes and Buddhist monasteries.',
        image: 'https://images.unsplash.com/photo-1589793907316-f94025d46cad?w=800',
        category: ['mountains', 'adventure', 'cultural', 'trekking', 'offbeat'],
        highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La', 'Monasteries', 'Magnetic Hill'],
        rating: 4.9,
        reviews: 8765,
        priceFrom: 25000,
        currency: '₹',
        bestTime: 'June to September',
        bestMonths: ['june', 'july', 'august', 'september'],
        duration: '7-10 days',
        featured: true,
        collections: ['adventure', 'offbeat', 'trekking', 'july', 'august']
    },
    {
        id: 6,
        name: 'Varanasi',
        country: 'India',
        countryId: 'india',
        region: 'asia',
        description: 'Sacred city on the banks of Ganges with ancient spirituality.',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800',
        category: ['pilgrimage', 'cultural', 'heritage', 'food'],
        highlights: ['Ganga Aarti', 'Ghats', 'Kashi Vishwanath', 'Sarnath', 'Street Food'],
        rating: 4.6,
        reviews: 7654,
        priceFrom: 4000,
        currency: '₹',
        bestTime: 'October to March',
        bestMonths: ['october', 'november', 'december', 'january', 'february', 'march'],
        duration: '2-3 days',
        featured: false,
        collections: ['pilgrimage', 'cultural', 'heritage', 'november']
    },
    {
        id: 7,
        name: 'Udaipur',
        country: 'India',
        countryId: 'india',
        region: 'asia',
        description: 'City of Lakes with romantic palaces and royal heritage.',
        image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800',
        category: ['heritage', 'romantic', 'honeymoon', 'cultural'],
        highlights: ['Lake Pichola', 'City Palace', 'Taj Lake Palace', 'Jag Mandir', 'Sunset Views'],
        rating: 4.8,
        reviews: 9432,
        priceFrom: 7000,
        currency: '₹',
        bestTime: 'September to March',
        bestMonths: ['september', 'october', 'november', 'december', 'january', 'february', 'march'],
        duration: '3-4 days',
        featured: true,
        collections: ['honeymoon', 'romantic', 'heritage', 'february']
    },
    {
        id: 8,
        name: 'Rishikesh',
        country: 'India',
        countryId: 'india',
        region: 'asia',
        description: 'Yoga capital of the world with thrilling adventure activities.',
        image: 'https://images.unsplash.com/photo-1600627619286-c3a776db0e70?w=800',
        category: ['adventure', 'pilgrimage', 'relaxation', 'trekking'],
        highlights: ['River Rafting', 'Bungee Jumping', 'Yoga Ashrams', 'Laxman Jhula', 'Ganga Aarti'],
        rating: 4.5,
        reviews: 8765,
        priceFrom: 5000,
        currency: '₹',
        bestTime: 'September to November, March to May',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        duration: '3-4 days',
        featured: false,
        collections: ['adventure', 'pilgrimage', 'relaxation', 'october']
    },
    {
        id: 9,
        name: 'Andaman Islands',
        country: 'India',
        countryId: 'india',
        region: 'asia',
        description: 'Pristine beaches, coral reefs, and tropical paradise.',
        image: 'https://images.unsplash.com/photo-1586508577428-120d6b072945?w=800',
        category: ['beach', 'waterSports', 'honeymoon', 'relaxation'],
        highlights: ['Havelock Island', 'Radhanagar Beach', 'Scuba Diving', 'Cellular Jail', 'Neil Island'],
        rating: 4.7,
        reviews: 6543,
        priceFrom: 20000,
        currency: '₹',
        bestTime: 'November to May',
        bestMonths: ['november', 'december', 'january', 'february', 'march', 'april', 'may'],
        duration: '5-7 days',
        featured: true,
        collections: ['beach', 'honeymoon', 'waterSports', 'january', 'february']
    },
    {
        id: 10,
        name: 'Darjeeling',
        country: 'India',
        countryId: 'india',
        region: 'asia',
        description: 'Queen of Hills with tea gardens and Himalayan views.',
        image: 'https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=800',
        category: ['mountains', 'relaxation', 'cultural', 'food'],
        highlights: ['Tiger Hill Sunrise', 'Tea Gardens', 'Toy Train', 'Kanchenjunga Views', 'Monasteries'],
        rating: 4.6,
        reviews: 7890,
        priceFrom: 8000,
        currency: '₹',
        bestTime: 'March to May, October to December',
        bestMonths: ['march', 'april', 'may', 'october', 'november', 'december'],
        duration: '4-5 days',
        featured: false,
        collections: ['mountains', 'relaxation', 'october', 'november']
    },
    
    // THAILAND
    {
        id: 11,
        name: 'Bangkok',
        country: 'Thailand',
        countryId: 'thailand',
        region: 'asia',
        description: 'Vibrant capital with ornate temples, street food, and nightlife.',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800',
        category: ['cultural', 'food', 'nightlife', 'shopping'],
        highlights: ['Grand Palace', 'Wat Arun', 'Floating Markets', 'Street Food', 'Khao San Road'],
        rating: 4.5,
        reviews: 23456,
        priceFrom: 25000,
        currency: '₹',
        bestTime: 'November to February',
        bestMonths: ['november', 'december', 'january', 'february'],
        duration: '4-5 days',
        featured: true,
        collections: ['international', 'food', 'shopping', 'december']
    },
    {
        id: 12,
        name: 'Phuket',
        country: 'Thailand',
        countryId: 'thailand',
        region: 'asia',
        description: 'Thailand\'s largest island with stunning beaches and vibrant nightlife.',
        image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800',
        category: ['beach', 'nightlife', 'waterSports', 'relaxation'],
        highlights: ['Patong Beach', 'Phi Phi Islands', 'Big Buddha', 'Water Sports', 'Thai Massage'],
        rating: 4.4,
        reviews: 19876,
        priceFrom: 30000,
        currency: '₹',
        bestTime: 'November to April',
        bestMonths: ['november', 'december', 'january', 'february', 'march', 'april'],
        duration: '5-6 days',
        featured: true,
        collections: ['beach', 'international', 'nightlife', 'january']
    },
    {
        id: 13,
        name: 'Chiang Mai',
        country: 'Thailand',
        countryId: 'thailand',
        region: 'asia',
        description: 'Cultural capital with ancient temples and mountain scenery.',
        image: 'https://images.unsplash.com/photo-1556480831-bfc tried-image-url?w=800',
        category: ['cultural', 'mountains', 'food', 'relaxation'],
        highlights: ['Doi Suthep', 'Old City Temples', 'Night Bazaar', 'Elephant Sanctuaries', 'Thai Cooking'],
        rating: 4.6,
        reviews: 12345,
        priceFrom: 22000,
        currency: '₹',
        bestTime: 'November to February',
        bestMonths: ['november', 'december', 'january', 'february'],
        duration: '4-5 days',
        featured: false,
        collections: ['cultural', 'food', 'relaxation', 'november']
    },
    {
        id: 14,
        name: 'Krabi',
        country: 'Thailand',
        countryId: 'thailand',
        region: 'asia',
        description: 'Stunning limestone cliffs and pristine beaches.',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800',
        category: ['beach', 'adventure', 'waterSports', 'relaxation'],
        highlights: ['Railay Beach', 'Four Islands', 'Rock Climbing', 'Kayaking', 'Emerald Pool'],
        rating: 4.5,
        reviews: 8765,
        priceFrom: 28000,
        currency: '₹',
        bestTime: 'November to April',
        bestMonths: ['november', 'december', 'january', 'february', 'march', 'april'],
        duration: '4-5 days',
        featured: false,
        collections: ['beach', 'adventure', 'february']
    },
    
    // BALI, INDONESIA
    {
        id: 15,
        name: 'Bali',
        country: 'Indonesia',
        countryId: 'indonesia',
        region: 'asia',
        description: 'Island of Gods with spiritual temples, rice terraces, and beaches.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
        category: ['beach', 'cultural', 'honeymoon', 'relaxation', 'adventure'],
        highlights: ['Ubud', 'Tegallalang Rice Terraces', 'Tanah Lot', 'Beach Clubs', 'Uluwatu Temple'],
        rating: 4.8,
        reviews: 34567,
        priceFrom: 35000,
        currency: '₹',
        bestTime: 'April to October',
        bestMonths: ['april', 'may', 'june', 'july', 'august', 'september', 'october'],
        duration: '6-8 days',
        featured: true,
        collections: ['honeymoon', 'international', 'beach', 'trending', 'may', 'june']
    },
    
    // MALDIVES
    {
        id: 16,
        name: 'Maldives',
        country: 'Maldives',
        countryId: 'maldives',
        region: 'asia',
        description: 'Ultimate tropical paradise with overwater villas and crystal waters.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
        category: ['beach', 'honeymoon', 'luxury', 'waterSports', 'relaxation'],
        highlights: ['Overwater Villas', 'Snorkeling', 'Underwater Restaurant', 'Sunset Dolphin Cruise', 'Spa'],
        rating: 4.9,
        reviews: 28765,
        priceFrom: 80000,
        currency: '₹',
        bestTime: 'November to April',
        bestMonths: ['november', 'december', 'january', 'february', 'march', 'april'],
        duration: '5-7 days',
        featured: true,
        collections: ['honeymoon', 'luxury', 'beach', 'international', 'december', 'january']
    },
    
    // SINGAPORE
    {
        id: 17,
        name: 'Singapore',
        country: 'Singapore',
        countryId: 'singapore',
        region: 'asia',
        description: 'Futuristic city-state with world-class attractions and food.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
        category: ['shopping', 'food', 'cultural', 'family'],
        highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa', 'Universal Studios', 'Hawker Centers'],
        rating: 4.7,
        reviews: 21456,
        priceFrom: 45000,
        currency: '₹',
        bestTime: 'February to April',
        bestMonths: ['february', 'march', 'april', 'may', 'june', 'july'],
        duration: '4-5 days',
        featured: true,
        collections: ['shopping', 'family', 'food', 'international', 'march']
    },
    
    // DUBAI, UAE
    {
        id: 18,
        name: 'Dubai',
        country: 'United Arab Emirates',
        countryId: 'uae',
        region: 'middleEast',
        description: 'Futuristic desert metropolis with luxury experiences.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
        category: ['shopping', 'luxury', 'adventure', 'family'],
        highlights: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari', 'Palm Jumeirah', 'Dubai Marina'],
        rating: 4.6,
        reviews: 32456,
        priceFrom: 50000,
        currency: '₹',
        bestTime: 'November to March',
        bestMonths: ['november', 'december', 'january', 'february', 'march'],
        duration: '5-6 days',
        featured: true,
        collections: ['shopping', 'luxury', 'international', 'december', 'january']
    },
    
    // EUROPE
    {
        id: 19,
        name: 'Paris',
        country: 'France',
        countryId: 'france',
        region: 'europe',
        description: 'City of Love with iconic landmarks and world-class art.',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
        category: ['romantic', 'cultural', 'food', 'shopping', 'heritage'],
        highlights: ['Eiffel Tower', 'Louvre', 'Champs-Élysées', 'Notre Dame', 'French Cuisine'],
        rating: 4.8,
        reviews: 45678,
        priceFrom: 120000,
        currency: '₹',
        bestTime: 'April to June, September to November',
        bestMonths: ['april', 'may', 'june', 'september', 'october', 'november'],
        duration: '5-7 days',
        featured: true,
        collections: ['romantic', 'honeymoon', 'international', 'may', 'september']
    },
    {
        id: 20,
        name: 'Rome',
        country: 'Italy',
        countryId: 'italy',
        region: 'europe',
        description: 'Eternal City with ancient ruins and incredible cuisine.',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
        category: ['heritage', 'cultural', 'food', 'romantic'],
        highlights: ['Colosseum', 'Vatican', 'Trevi Fountain', 'Pantheon', 'Italian Food'],
        rating: 4.7,
        reviews: 38765,
        priceFrom: 100000,
        currency: '₹',
        bestTime: 'April to June, September to October',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        duration: '4-5 days',
        featured: true,
        collections: ['heritage', 'food', 'international', 'april', 'october']
    },
    {
        id: 21,
        name: 'Santorini',
        country: 'Greece',
        countryId: 'greece',
        region: 'europe',
        description: 'Stunning Greek island with iconic white and blue architecture.',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
        category: ['romantic', 'honeymoon', 'beach', 'relaxation'],
        highlights: ['Oia Sunset', 'Caldera Views', 'Wine Tasting', 'Black Sand Beaches', 'Greek Food'],
        rating: 4.9,
        reviews: 26543,
        priceFrom: 150000,
        currency: '₹',
        bestTime: 'April to October',
        bestMonths: ['april', 'may', 'june', 'july', 'august', 'september', 'october'],
        duration: '4-5 days',
        featured: true,
        collections: ['honeymoon', 'romantic', 'international', 'june', 'september']
    },
    {
        id: 22,
        name: 'Swiss Alps',
        country: 'Switzerland',
        countryId: 'switzerland',
        region: 'europe',
        description: 'Breathtaking Alpine scenery with world-class skiing and hiking.',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800',
        category: ['mountains', 'adventure', 'honeymoon', 'trekking'],
        highlights: ['Jungfrau', 'Interlaken', 'Zermatt', 'Skiing', 'Scenic Trains'],
        rating: 4.9,
        reviews: 19876,
        priceFrom: 200000,
        currency: '₹',
        bestTime: 'June to September for hiking, December to March for skiing',
        bestMonths: ['june', 'july', 'august', 'september', 'december', 'january', 'february', 'march'],
        duration: '6-8 days',
        featured: true,
        collections: ['mountains', 'adventure', 'honeymoon', 'luxury', 'july', 'december']
    },
    {
        id: 23,
        name: 'Barcelona',
        country: 'Spain',
        countryId: 'spain',
        region: 'europe',
        description: 'Vibrant city with unique Gaudí architecture and beach life.',
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800',
        category: ['cultural', 'beach', 'food', 'nightlife', 'shopping'],
        highlights: ['Sagrada Familia', 'La Rambla', 'Gothic Quarter', 'Barceloneta Beach', 'Tapas'],
        rating: 4.7,
        reviews: 28765,
        priceFrom: 90000,
        currency: '₹',
        bestTime: 'May to June, September to October',
        bestMonths: ['may', 'june', 'september', 'october'],
        duration: '4-5 days',
        featured: false,
        collections: ['cultural', 'beach', 'food', 'may', 'september']
    },
    {
        id: 24,
        name: 'Amsterdam',
        country: 'Netherlands',
        countryId: 'netherlands',
        region: 'europe',
        description: 'Canal city with world-class museums and cycling culture.',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
        category: ['cultural', 'romantic', 'food', 'nightlife'],
        highlights: ['Canal Cruises', 'Van Gogh Museum', 'Anne Frank House', 'Tulip Season', 'Cycling'],
        rating: 4.6,
        reviews: 21345,
        priceFrom: 85000,
        currency: '₹',
        bestTime: 'April to May, September to November',
        bestMonths: ['april', 'may', 'september', 'october', 'november'],
        duration: '3-4 days',
        featured: false,
        collections: ['cultural', 'romantic', 'april', 'may']
    },
    {
        id: 25,
        name: 'London',
        country: 'United Kingdom',
        countryId: 'uk',
        region: 'europe',
        description: 'Historic capital with royal heritage and modern culture.',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        category: ['cultural', 'heritage', 'shopping', 'food'],
        highlights: ['Big Ben', 'Tower of London', 'British Museum', 'West End', 'Royal Parks'],
        rating: 4.7,
        reviews: 42345,
        priceFrom: 110000,
        currency: '₹',
        bestTime: 'May to September',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        duration: '5-6 days',
        featured: true,
        collections: ['cultural', 'heritage', 'shopping', 'june', 'july']
    },
    {
        id: 26,
        name: 'Iceland',
        country: 'Iceland',
        countryId: 'iceland',
        region: 'europe',
        description: 'Land of fire and ice with otherworldly landscapes.',
        image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800',
        category: ['adventure', 'offbeat', 'relaxation'],
        highlights: ['Northern Lights', 'Blue Lagoon', 'Golden Circle', 'Glaciers', 'Geysers'],
        rating: 4.8,
        reviews: 15678,
        priceFrom: 180000,
        currency: '₹',
        bestTime: 'June to August for hiking, September to March for Northern Lights',
        bestMonths: ['june', 'july', 'august', 'september', 'february', 'march'],
        duration: '6-8 days',
        featured: true,
        collections: ['adventure', 'offbeat', 'february', 'march', 'july']
    },
    
    // AMERICAS
    {
        id: 27,
        name: 'New York',
        country: 'United States',
        countryId: 'usa',
        region: 'northAmerica',
        description: 'The city that never sleeps with iconic landmarks and culture.',
        image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800',
        category: ['cultural', 'shopping', 'food', 'nightlife'],
        highlights: ['Statue of Liberty', 'Times Square', 'Central Park', 'Broadway', 'Museums'],
        rating: 4.8,
        reviews: 56789,
        priceFrom: 150000,
        currency: '₹',
        bestTime: 'April to June, September to November',
        bestMonths: ['april', 'may', 'june', 'september', 'october', 'november'],
        duration: '5-7 days',
        featured: true,
        collections: ['cultural', 'shopping', 'international', 'april', 'october']
    },
    {
        id: 28,
        name: 'Grand Canyon',
        country: 'United States',
        countryId: 'usa',
        region: 'northAmerica',
        description: 'Natural wonder with breathtaking vistas and hiking trails.',
        image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800',
        category: ['adventure', 'trekking', 'offbeat'],
        highlights: ['South Rim', 'Hiking Trails', 'Sunrise Views', 'Rafting', 'Helicopter Tours'],
        rating: 4.9,
        reviews: 23456,
        priceFrom: 180000,
        currency: '₹',
        bestTime: 'March to May, September to November',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        duration: '3-4 days',
        featured: false,
        collections: ['adventure', 'trekking', 'march', 'october']
    },
    {
        id: 29,
        name: 'Machu Picchu',
        country: 'Peru',
        countryId: 'peru',
        region: 'southAmerica',
        description: 'Ancient Incan citadel in the Andes mountains.',
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
        category: ['heritage', 'adventure', 'trekking', 'cultural'],
        highlights: ['Inca Trail', 'Sacred Valley', 'Cusco', 'Sun Gate', 'Ancient Ruins'],
        rating: 4.9,
        reviews: 19876,
        priceFrom: 200000,
        currency: '₹',
        bestTime: 'May to September',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        duration: '5-7 days',
        featured: true,
        collections: ['heritage', 'adventure', 'trekking', 'july', 'august']
    },
    {
        id: 30,
        name: 'Rio de Janeiro',
        country: 'Brazil',
        countryId: 'brazil',
        region: 'southAmerica',
        description: 'Vibrant city with iconic beaches and Carnival culture.',
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800',
        category: ['beach', 'cultural', 'nightlife', 'adventure'],
        highlights: ['Christ the Redeemer', 'Copacabana', 'Sugarloaf Mountain', 'Carnival', 'Ipanema'],
        rating: 4.6,
        reviews: 24567,
        priceFrom: 180000,
        currency: '₹',
        bestTime: 'December to March',
        bestMonths: ['december', 'january', 'february', 'march'],
        duration: '5-7 days',
        featured: false,
        collections: ['beach', 'cultural', 'nightlife', 'february', 'march']
    },
    
    // AFRICA
    {
        id: 31,
        name: 'Cape Town',
        country: 'South Africa',
        countryId: 'southafrica',
        region: 'africa',
        description: 'Stunning coastal city with mountains and vineyards.',
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
        category: ['beach', 'adventure', 'wildlife', 'food'],
        highlights: ['Table Mountain', 'Cape Point', 'Wine Regions', 'Robben Island', 'V&A Waterfront'],
        rating: 4.7,
        reviews: 18765,
        priceFrom: 120000,
        currency: '₹',
        bestTime: 'November to March',
        bestMonths: ['november', 'december', 'january', 'february', 'march'],
        duration: '5-7 days',
        featured: true,
        collections: ['adventure', 'wildlife', 'international', 'november', 'december']
    },
    {
        id: 32,
        name: 'Masai Mara',
        country: 'Kenya',
        countryId: 'kenya',
        region: 'africa',
        description: 'World-famous safari destination with the Great Migration.',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
        category: ['wildlife', 'adventure', 'offbeat'],
        highlights: ['Great Migration', 'Big Five', 'Hot Air Balloon Safari', 'Masai Culture', 'Game Drives'],
        rating: 4.9,
        reviews: 12345,
        priceFrom: 150000,
        currency: '₹',
        bestTime: 'July to October',
        bestMonths: ['july', 'august', 'september', 'october'],
        duration: '4-6 days',
        featured: true,
        collections: ['wildlife', 'adventure', 'july', 'august', 'september']
    },
    {
        id: 33,
        name: 'Marrakech',
        country: 'Morocco',
        countryId: 'morocco',
        region: 'africa',
        description: 'Exotic city with colorful souks and historic palaces.',
        image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
        category: ['cultural', 'shopping', 'food', 'heritage'],
        highlights: ['Medina', 'Jemaa el-Fnaa', 'Majorelle Garden', 'Riads', 'Sahara Tours'],
        rating: 4.5,
        reviews: 16789,
        priceFrom: 80000,
        currency: '₹',
        bestTime: 'March to May, September to November',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        duration: '4-5 days',
        featured: false,
        collections: ['cultural', 'shopping', 'march', 'october']
    },
    
    // OCEANIA
    {
        id: 34,
        name: 'Sydney',
        country: 'Australia',
        countryId: 'australia',
        region: 'oceania',
        description: 'Harbor city with iconic Opera House and stunning beaches.',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
        category: ['beach', 'cultural', 'food', 'nightlife'],
        highlights: ['Opera House', 'Harbour Bridge', 'Bondi Beach', 'Wildlife', 'Blue Mountains'],
        rating: 4.7,
        reviews: 28765,
        priceFrom: 180000,
        currency: '₹',
        bestTime: 'September to November, March to May',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        duration: '5-7 days',
        featured: true,
        collections: ['beach', 'cultural', 'international', 'march', 'october']
    },
    {
        id: 35,
        name: 'Great Barrier Reef',
        country: 'Australia',
        countryId: 'australia',
        region: 'oceania',
        description: 'World\'s largest coral reef system with incredible marine life.',
        image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800',
        category: ['waterSports', 'adventure', 'wildlife'],
        highlights: ['Snorkeling', 'Scuba Diving', 'Coral Gardens', 'Marine Life', 'Island Hopping'],
        rating: 4.9,
        reviews: 21345,
        priceFrom: 200000,
        currency: '₹',
        bestTime: 'June to October',
        bestMonths: ['june', 'july', 'august', 'september', 'october'],
        duration: '4-6 days',
        featured: true,
        collections: ['waterSports', 'adventure', 'wildlife', 'july', 'august']
    },
    {
        id: 36,
        name: 'Queenstown',
        country: 'New Zealand',
        countryId: 'newzealand',
        region: 'oceania',
        description: 'Adventure capital of the world with stunning scenery.',
        image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=800',
        category: ['adventure', 'mountains', 'trekking'],
        highlights: ['Bungee Jumping', 'Milford Sound', 'Skiing', 'Skydiving', 'Lord of the Rings Tours'],
        rating: 4.8,
        reviews: 15678,
        priceFrom: 180000,
        currency: '₹',
        bestTime: 'December to February for summer, June to August for skiing',
        bestMonths: ['december', 'january', 'february', 'june', 'july', 'august'],
        duration: '5-7 days',
        featured: true,
        collections: ['adventure', 'mountains', 'december', 'january', 'july']
    }
];

// ============================================
// ACTIVITIES DATA (Things to do)
// ============================================
const activitiesData = [
    // Activity templates for common activities
    {
        id: 'scuba',
        name: 'Scuba Diving',
        icon: '🤿',
        duration: '2-4 hours',
        category: 'waterSports',
        priceRange: '₹3,000 - ₹8,000',
        description: 'Explore underwater worlds with certified instructors'
    },
    {
        id: 'snorkeling',
        name: 'Snorkeling',
        icon: '🏊',
        duration: '1-2 hours',
        category: 'waterSports',
        priceRange: '₹500 - ₹2,000',
        description: 'Discover colorful marine life in crystal-clear waters'
    },
    {
        id: 'parasailing',
        name: 'Parasailing',
        icon: '🪂',
        duration: '15-30 minutes',
        category: 'waterSports',
        priceRange: '₹1,000 - ₹3,000',
        description: 'Soar above the waters for breathtaking views'
    },
    {
        id: 'jetski',
        name: 'Jet Skiing',
        icon: '🚤',
        duration: '15-30 minutes',
        category: 'waterSports',
        priceRange: '₹1,000 - ₹2,500',
        description: 'Race across the waves on high-powered jet skis'
    },
    {
        id: 'rafting',
        name: 'White Water Rafting',
        icon: '🚣',
        duration: '2-4 hours',
        category: 'adventure',
        priceRange: '₹1,500 - ₹4,000',
        description: 'Navigate thrilling rapids with expert guides'
    },
    {
        id: 'bungee',
        name: 'Bungee Jumping',
        icon: '🎢',
        duration: '30 minutes',
        category: 'adventure',
        priceRange: '₹3,000 - ₹5,000',
        description: 'Take the ultimate leap of faith'
    },
    {
        id: 'skydiving',
        name: 'Skydiving',
        icon: '🪂',
        duration: '3-4 hours',
        category: 'adventure',
        priceRange: '₹25,000 - ₹40,000',
        description: 'Experience free-fall from thousands of feet'
    },
    {
        id: 'trekking',
        name: 'Mountain Trekking',
        icon: '🥾',
        duration: 'Half day to multi-day',
        category: 'trekking',
        priceRange: '₹500 - ₹20,000',
        description: 'Hike through scenic mountain trails'
    },
    {
        id: 'spa',
        name: 'Spa & Wellness',
        icon: '🧖',
        duration: '1-3 hours',
        category: 'relaxation',
        priceRange: '₹2,000 - ₹15,000',
        description: 'Rejuvenate with traditional therapies'
    },
    {
        id: 'safari',
        name: 'Wildlife Safari',
        icon: '🦁',
        duration: '3-6 hours',
        category: 'wildlife',
        priceRange: '₹3,000 - ₹15,000',
        description: 'Spot exotic wildlife in their natural habitat'
    },
    {
        id: 'foodtour',
        name: 'Food Tour',
        icon: '🍜',
        duration: '3-4 hours',
        category: 'food',
        priceRange: '₹1,500 - ₹5,000',
        description: 'Taste local delicacies with expert guides'
    },
    {
        id: 'cooking',
        name: 'Cooking Class',
        icon: '👨‍🍳',
        duration: '3-4 hours',
        category: 'food',
        priceRange: '₹2,000 - ₹6,000',
        description: 'Learn to cook authentic local dishes'
    },
    {
        id: 'heritage',
        name: 'Heritage Walk',
        icon: '🏛️',
        duration: '2-4 hours',
        category: 'cultural',
        priceRange: '₹500 - ₹2,000',
        description: 'Explore historical sites with local experts'
    },
    {
        id: 'sunset',
        name: 'Sunset Cruise',
        icon: '🌅',
        duration: '2-3 hours',
        category: 'romantic',
        priceRange: '₹2,000 - ₹8,000',
        description: 'Watch magical sunsets from the water'
    },
    {
        id: 'hotairballoon',
        name: 'Hot Air Balloon',
        icon: '🎈',
        duration: '1-2 hours',
        category: 'adventure',
        priceRange: '₹8,000 - ₹20,000',
        description: 'Float above stunning landscapes at sunrise'
    }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get destinations by category
 */
function getDestinationsByCategory(categoryId) {
    if (categoryId === 'all') return destinationsData;
    return destinationsData.filter(dest => dest.category.includes(categoryId));
}

/**
 * Get destinations by country
 */
function getDestinationsByCountry(countryId) {
    return destinationsData.filter(dest => dest.countryId === countryId);
}

/**
 * Get destinations by region
 */
function getDestinationsByRegion(regionId) {
    return destinationsData.filter(dest => dest.region === regionId);
}

/**
 * Get destinations by collection (month or special)
 */
function getDestinationsByCollection(collectionId) {
    return destinationsData.filter(dest => dest.collections && dest.collections.includes(collectionId));
}

/**
 * Get destinations by best month to visit
 */
function getDestinationsByMonth(month) {
    return destinationsData.filter(dest => dest.bestMonths && dest.bestMonths.includes(month));
}

/**
 * Get featured destinations
 */
function getFeaturedDestinations() {
    return destinationsData.filter(dest => dest.featured);
}

/**
 * Search destinations
 */
function searchDestinations(query) {
    const searchTerm = query.toLowerCase();
    return destinationsData.filter(dest => 
        dest.name.toLowerCase().includes(searchTerm) ||
        dest.country.toLowerCase().includes(searchTerm) ||
        dest.description.toLowerCase().includes(searchTerm) ||
        dest.highlights.some(h => h.toLowerCase().includes(searchTerm))
    );
}

/**
 * Get country by ID
 */
function getCountryById(countryId) {
    return countriesData.find(country => country.id === countryId);
}

/**
 * Get destinations sorted by rating
 */
function getTopRatedDestinations(limit = 10) {
    return [...destinationsData]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
}

/**
 * Get budget-friendly destinations
 */
function getBudgetDestinations(maxPrice) {
    return destinationsData
        .filter(dest => dest.priceFrom <= maxPrice)
        .sort((a, b) => a.priceFrom - b.priceFrom);
}

/**
 * Filter destinations by multiple criteria
 */
function filterDestinations(filters) {
    let results = [...destinationsData];
    
    if (filters.category && filters.category !== 'all') {
        results = results.filter(d => d.category.includes(filters.category));
    }
    if (filters.region) {
        results = results.filter(d => d.region === filters.region);
    }
    if (filters.country) {
        results = results.filter(d => d.countryId === filters.country);
    }
    if (filters.maxPrice) {
        results = results.filter(d => d.priceFrom <= filters.maxPrice);
    }
    if (filters.minRating) {
        results = results.filter(d => d.rating >= filters.minRating);
    }
    if (filters.month) {
        results = results.filter(d => d.bestMonths && d.bestMonths.includes(filters.month));
    }
    if (filters.duration) {
        // Parse duration filter (e.g., "short" for < 4 days, "medium" for 4-7, "long" for 7+)
        // Add logic as needed
    }
    
    return results;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        destinationCategories,
        destinationCollections,
        regions,
        countriesData,
        destinationsData,
        activitiesData,
        getDestinationsByCategory,
        getDestinationsByCountry,
        getDestinationsByRegion,
        getDestinationsByCollection,
        getDestinationsByMonth,
        getFeaturedDestinations,
        searchDestinations,
        getCountryById,
        getTopRatedDestinations,
        getBudgetDestinations,
        filterDestinations
    };
}
