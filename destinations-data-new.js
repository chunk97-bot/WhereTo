/**
 * WhereTo Global Destinations Data
 * Comprehensive worldwide travel database - Optimized for global users
 */

// ============================================
// CATEGORIES
// ============================================
const destinationCategories = [
    { id: 'all', name: 'All', icon: '🌍' },
    { id: 'beach', name: 'Beaches', icon: '🏖️' },
    { id: 'mountains', name: 'Mountains', icon: '🏔️' },
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
    { id: 'cultural', name: 'Cultural', icon: '🎭' }
];

// ============================================
// REGIONS
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
// VISA POLICY GROUPS (For global users)
// Instead of showing visa for one country, we show visa policy type
// ============================================
const visaPolicies = {
    visaFree: 'Visa-free for most nationalities',
    visaOnArrival: 'Visa on arrival available',
    eVisa: 'E-Visa available online',
    visaRequired: 'Visa required - check embassy',
    schengen: 'Schengen visa (covers 27 EU countries)',
    etaRequired: 'Electronic Travel Authorization required'
};

// ============================================
// COUNTRIES DATA - Global Focus
// ============================================
const countriesData = [
    // TOP FEATURED - International Destinations
    {
        id: 'france',
        name: 'France',
        region: 'europe',
        flag: '🇫🇷',
        currency: 'EUR',
        language: 'French',
        visaPolicy: 'schengen',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        description: 'The world\'s most visited country, France captivates with its art, fashion, gastronomy, and culture. From the iconic Eiffel Tower to lavender fields of Provence, every corner tells a story.',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800'
    },
    {
        id: 'japan',
        name: 'Japan',
        region: 'asia',
        flag: '🇯🇵',
        currency: 'JPY',
        language: 'Japanese',
        visaPolicy: 'visaFree',
        bestMonths: ['march', 'april', 'october', 'november'],
        description: 'A fascinating blend of ancient traditions and cutting-edge technology. Experience serene temples, cherry blossoms, world-class cuisine, and the unique culture that defines the Land of the Rising Sun.',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800'
    },
    {
        id: 'italy',
        name: 'Italy',
        region: 'europe',
        flag: '🇮🇹',
        currency: 'EUR',
        language: 'Italian',
        visaPolicy: 'schengen',
        bestMonths: ['april', 'may', 'september', 'october'],
        description: 'The cradle of the Renaissance, Italy offers unparalleled art, architecture, and cuisine. From Rome\'s ancient ruins to Venice\'s romantic canals, every region has its own character and charm.',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800'
    },
    {
        id: 'usa',
        name: 'United States',
        region: 'northAmerica',
        flag: '🇺🇸',
        currency: 'USD',
        language: 'English',
        visaPolicy: 'etaRequired',
        bestMonths: ['may', 'june', 'september', 'october'],
        description: 'From the skyscrapers of New York to the natural wonders of the Grand Canyon, the USA offers incredible diversity. Experience vibrant cities, stunning national parks, and endless entertainment options.',
        image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800'
    },
    {
        id: 'thailand',
        name: 'Thailand',
        region: 'asia',
        flag: '🇹🇭',
        currency: 'THB',
        language: 'Thai',
        visaPolicy: 'visaFree',
        bestMonths: ['november', 'december', 'january', 'february'],
        description: 'The Land of Smiles welcomes travelers with stunning beaches, ornate temples, delicious street food, and warm hospitality. Perfect blend of relaxation, adventure, and cultural immersion.',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800'
    },
    {
        id: 'spain',
        name: 'Spain',
        region: 'europe',
        flag: '🇪🇸',
        currency: 'EUR',
        language: 'Spanish',
        visaPolicy: 'schengen',
        bestMonths: ['april', 'may', 'september', 'october'],
        description: 'Passionate flamenco, stunning architecture from Gaudí to Moorish palaces, world-famous cuisine, and beautiful beaches. Spain offers a vibrant lifestyle that captivates every visitor.',
        image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800'
    },
    {
        id: 'australia',
        name: 'Australia',
        region: 'oceania',
        flag: '🇦🇺',
        currency: 'AUD',
        language: 'English',
        visaPolicy: 'etaRequired',
        bestMonths: ['september', 'october', 'november', 'march', 'april'],
        description: 'The land down under offers unique wildlife, the Great Barrier Reef, cosmopolitan cities, and vast outback adventures. A continent of contrasts that rewards the adventurous traveler.',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800'
    },
    {
        id: 'uae',
        name: 'United Arab Emirates',
        region: 'middleEast',
        flag: '🇦🇪',
        currency: 'AED',
        language: 'Arabic, English',
        visaPolicy: 'visaOnArrival',
        bestMonths: ['november', 'december', 'january', 'february', 'march'],
        description: 'A dazzling blend of traditional Arabian culture and futuristic innovation. Dubai\'s iconic skyline, Abu Dhabi\'s cultural landmarks, and world-class shopping create an unforgettable experience.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
    },
    {
        id: 'uk',
        name: 'United Kingdom',
        region: 'europe',
        flag: '🇬🇧',
        currency: 'GBP',
        language: 'English',
        visaPolicy: 'etaRequired',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'Rich history meets modern culture in the UK. From London\'s iconic landmarks to Scottish highlands, centuries of heritage await alongside vibrant contemporary arts and entertainment.',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800'
    },
    {
        id: 'singapore',
        name: 'Singapore',
        region: 'asia',
        flag: '🇸🇬',
        currency: 'SGD',
        language: 'English, Mandarin, Malay, Tamil',
        visaPolicy: 'visaFree',
        bestMonths: ['february', 'march', 'april', 'july', 'august'],
        description: 'A gleaming city-state where East meets West. World-class attractions, incredible food scene, stunning architecture, and seamless blend of cultures make Singapore a must-visit destination.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800'
    },
    {
        id: 'maldives',
        name: 'Maldives',
        region: 'asia',
        flag: '🇲🇻',
        currency: 'MVR',
        language: 'Dhivehi, English',
        visaPolicy: 'visaOnArrival',
        bestMonths: ['november', 'december', 'january', 'february', 'march', 'april'],
        description: 'Paradise on Earth with crystal-clear waters, overwater villas, and vibrant marine life. The ultimate destination for honeymoons, diving, and pure tropical relaxation.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800'
    },
    {
        id: 'switzerland',
        name: 'Switzerland',
        region: 'europe',
        flag: '🇨🇭',
        currency: 'CHF',
        language: 'German, French, Italian',
        visaPolicy: 'schengen',
        bestMonths: ['june', 'july', 'august', 'september', 'december', 'january'],
        description: 'Majestic Alps, pristine lakes, charming villages, and world-renowned chocolate and cheese. Switzerland offers breathtaking natural beauty and precision in everything from watches to trains.',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800'
    },
    {
        id: 'greece',
        name: 'Greece',
        region: 'europe',
        flag: '🇬🇷',
        currency: 'EUR',
        language: 'Greek',
        visaPolicy: 'schengen',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        description: 'Birthplace of democracy and Western civilization. Ancient ruins, whitewashed islands, crystal-clear Aegean waters, and legendary hospitality create the perfect Mediterranean escape.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800'
    },
    {
        id: 'turkey',
        name: 'Turkey',
        region: 'europe',
        flag: '🇹🇷',
        currency: 'TRY',
        language: 'Turkish',
        visaPolicy: 'eVisa',
        bestMonths: ['april', 'may', 'september', 'october'],
        description: 'Where East meets West, Turkey offers a unique blend of cultures. Ancient ruins, stunning mosques, beautiful coastlines, and world-famous cuisine await in this transcontinental nation.',
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800'
    },
    {
        id: 'egypt',
        name: 'Egypt',
        region: 'africa',
        flag: '🇪🇬',
        currency: 'EGP',
        language: 'Arabic',
        visaPolicy: 'visaOnArrival',
        bestMonths: ['october', 'november', 'december', 'january', 'february', 'march'],
        description: 'Home to one of the world\'s oldest civilizations. The pyramids, Sphinx, Nile cruises, and ancient temples offer a journey through 5,000 years of human history.',
        image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800'
    },
    {
        id: 'newzealand',
        name: 'New Zealand',
        region: 'oceania',
        flag: '🇳🇿',
        currency: 'NZD',
        language: 'English, Māori',
        visaPolicy: 'etaRequired',
        bestMonths: ['december', 'january', 'february', 'march'],
        description: 'Dramatic landscapes that inspired Middle-earth. From glaciers to geysers, pristine fjords to rolling hills, New Zealand is an adventure lover\'s paradise with warm Kiwi hospitality.',
        image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=800'
    },
    {
        id: 'vietnam',
        name: 'Vietnam',
        region: 'asia',
        flag: '🇻🇳',
        currency: 'VND',
        language: 'Vietnamese',
        visaPolicy: 'eVisa',
        bestMonths: ['february', 'march', 'april', 'september', 'october'],
        description: 'Stunning landscapes from Halong Bay to terraced rice fields, rich history, vibrant cities, and some of the world\'s best street food. An affordable and fascinating destination.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800'
    },
    {
        id: 'mexico',
        name: 'Mexico',
        region: 'northAmerica',
        flag: '🇲🇽',
        currency: 'MXN',
        language: 'Spanish',
        visaPolicy: 'visaFree',
        bestMonths: ['november', 'december', 'january', 'february', 'march', 'april'],
        description: 'Ancient Mayan ruins, vibrant culture, stunning beaches, and world-renowned cuisine. Mexico offers an incredible mix of history, natural beauty, and warm hospitality.',
        image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800'
    },
    {
        id: 'canada',
        name: 'Canada',
        region: 'northAmerica',
        flag: '🇨🇦',
        currency: 'CAD',
        language: 'English, French',
        visaPolicy: 'etaRequired',
        bestMonths: ['june', 'july', 'august', 'september'],
        description: 'Vast wilderness, stunning national parks, cosmopolitan cities, and friendly locals. From Niagara Falls to the Rocky Mountains, Canada offers natural wonders on a grand scale.',
        image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800'
    },
    {
        id: 'southkorea',
        name: 'South Korea',
        region: 'asia',
        flag: '🇰🇷',
        currency: 'KRW',
        language: 'Korean',
        visaPolicy: 'visaFree',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        description: 'Where ancient palaces meet K-pop culture. Seoul\'s vibrant energy, beautiful temples, stunning autumn foliage, and world-class cuisine make Korea an exciting destination.',
        image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800'
    },
    {
        id: 'morocco',
        name: 'Morocco',
        region: 'africa',
        flag: '🇲🇦',
        currency: 'MAD',
        language: 'Arabic, French',
        visaPolicy: 'visaFree',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        description: 'A sensory feast of colorful souks, ancient medinas, Sahara desert adventures, and stunning architecture. Morocco offers an exotic escape just hours from Europe.',
        image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800'
    },
    {
        id: 'portugal',
        name: 'Portugal',
        region: 'europe',
        flag: '🇵🇹',
        currency: 'EUR',
        language: 'Portuguese',
        visaPolicy: 'schengen',
        bestMonths: ['march', 'april', 'may', 'september', 'october'],
        description: 'Charming cities, stunning coastlines, world-class wine, and warm hospitality. Portugal offers incredible value with rich history, beautiful beaches, and delicious cuisine.',
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800'
    },
    {
        id: 'brazil',
        name: 'Brazil',
        region: 'southAmerica',
        flag: '🇧🇷',
        currency: 'BRL',
        language: 'Portuguese',
        visaPolicy: 'visaFree',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'Samba rhythms, pristine beaches, Amazon rainforest, and vibrant cities. Brazil pulses with energy from Rio\'s carnival to Iguazu Falls\' thundering waters.',
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800'
    },
    {
        id: 'indonesia',
        name: 'Indonesia',
        region: 'asia',
        flag: '🇮🇩',
        currency: 'IDR',
        language: 'Indonesian',
        visaPolicy: 'visaOnArrival',
        bestMonths: ['april', 'may', 'june', 'july', 'august', 'september'],
        description: 'Over 17,000 islands offering incredible diversity. From Bali\'s spiritual retreats to Komodo dragons, ancient temples to pristine diving spots, Indonesia has it all.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800'
    },
    {
        id: 'india',
        name: 'India',
        region: 'asia',
        flag: '🇮🇳',
        currency: 'INR',
        language: 'Hindi, English',
        visaPolicy: 'eVisa',
        bestMonths: ['october', 'november', 'december', 'january', 'february', 'march'],
        description: 'A land of incredible diversity spanning Himalayan peaks to tropical beaches. Ancient temples, magnificent palaces, vibrant culture, and spiritual experiences await in this fascinating country.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800'
    }
];

// ============================================
// DESTINATIONS DATA - Major Cities & Attractions
// ============================================
const destinationsData = [
    // FRANCE
    {
        id: 1,
        name: 'Paris',
        country: 'France',
        countryId: 'france',
        region: 'europe',
        category: ['romantic', 'cultural', 'heritage', 'food', 'shopping'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
        rating: 4.8,
        duration: '4-5 days',
        bestTime: 'Apr-Jun, Sep-Oct',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        visaPolicy: 'schengen',
        description: 'The City of Light captivates visitors with its iconic landmarks, world-class museums, romantic ambiance, and exquisite cuisine. Paris is where art, fashion, and culture converge to create an unforgettable experience. Stroll along the Seine, explore charming neighborhoods, and indulge in pastries at corner cafés. Whether you\'re admiring masterpieces at the Louvre or watching the Eiffel Tower sparkle at night, Paris offers moments that stay with you forever.',
        highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Champs-Élysées', 'Montmartre'],
        thingsToDo: ['Visit Versailles Palace', 'Seine River cruise', 'Explore Marais district', 'Shop at Galeries Lafayette', 'Taste French pastries']
    },
    {
        id: 2,
        name: 'Nice & French Riviera',
        country: 'France',
        countryId: 'france',
        region: 'europe',
        category: ['beach', 'romantic', 'relaxation'],
        featured: false,
        image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800',
        rating: 4.6,
        duration: '3-4 days',
        bestTime: 'May-Sep',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        visaPolicy: 'schengen',
        description: 'The glamorous French Riviera offers stunning Mediterranean coastline, charming old towns, and endless sunshine. From Nice\'s famous Promenade des Anglais to the glitz of Monaco, the Côte d\'Azur has attracted artists, celebrities, and dreamers for over a century.',
        highlights: ['Promenade des Anglais', 'Old Town Nice', 'Monaco', 'Cannes', 'Eze Village'],
        thingsToDo: ['Beach hopping', 'Visit Monaco Casino', 'Explore hilltop villages', 'Wine tasting in Provence', 'Boat trip to islands']
    },
    // JAPAN
    {
        id: 3,
        name: 'Tokyo',
        country: 'Japan',
        countryId: 'japan',
        region: 'asia',
        category: ['cultural', 'food', 'shopping', 'nightlife'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
        rating: 4.9,
        duration: '4-5 days',
        bestTime: 'Mar-May, Sep-Nov',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        visaPolicy: 'visaFree',
        description: 'Japan\'s dazzling capital seamlessly blends ultra-modern technology with ancient traditions. From neon-lit Shibuya to serene temples, world-class sushi to quirky pop culture, Tokyo is a city of endless discovery. Experience the harmony of old and new as you navigate efficient trains, explore historic gardens, and witness the unique Japanese way of life.',
        highlights: ['Senso-ji Temple', 'Shibuya Crossing', 'Meiji Shrine', 'Tokyo Skytree', 'Tsukiji Market'],
        thingsToDo: ['Visit teamLab exhibitions', 'Explore Akihabara', 'Day trip to Mt. Fuji', 'Try authentic ramen', 'Shop in Harajuku']
    },
    {
        id: 4,
        name: 'Kyoto',
        country: 'Japan',
        countryId: 'japan',
        region: 'asia',
        category: ['heritage', 'cultural', 'pilgrimage', 'romantic'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
        rating: 4.9,
        duration: '3-4 days',
        bestTime: 'Mar-May, Oct-Nov',
        bestMonths: ['march', 'april', 'may', 'october', 'november'],
        visaPolicy: 'visaFree',
        description: 'Japan\'s cultural heart preserves over 2,000 temples and shrines, traditional geisha districts, and imperial palaces. Kyoto offers a glimpse into old Japan with its bamboo groves, zen gardens, and timeless tea ceremonies. The city transforms dramatically with cherry blossoms in spring and fiery maple leaves in autumn.',
        highlights: ['Fushimi Inari Shrine', 'Kinkaku-ji Golden Pavilion', 'Arashiyama Bamboo Grove', 'Gion District', 'Nijo Castle'],
        thingsToDo: ['Tea ceremony experience', 'Geisha spotting in Gion', 'Zen garden meditation', 'Nara deer park day trip', 'Traditional kaiseki dinner']
    },
    // ITALY
    {
        id: 5,
        name: 'Rome',
        country: 'Italy',
        countryId: 'italy',
        region: 'europe',
        category: ['heritage', 'cultural', 'food', 'romantic'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
        rating: 4.8,
        duration: '4-5 days',
        bestTime: 'Apr-Jun, Sep-Oct',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        visaPolicy: 'schengen',
        description: 'The Eternal City is a living museum where ancient ruins stand alongside Renaissance masterpieces. Walk in the footsteps of emperors at the Colosseum, make a wish at Trevi Fountain, and savor authentic Italian cuisine in charming trattorias. Rome\'s dolce vita lifestyle, stunning art, and 3,000 years of history create an incomparable experience.',
        highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Pantheon', 'Roman Forum'],
        thingsToDo: ['Vatican Museums tour', 'Toss coin in Trevi', 'Taste real Italian pizza', 'Explore Trastevere', 'Visit Borghese Gallery']
    },
    {
        id: 6,
        name: 'Venice',
        country: 'Italy',
        countryId: 'italy',
        region: 'europe',
        category: ['romantic', 'heritage', 'cultural'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800',
        rating: 4.7,
        duration: '2-3 days',
        bestTime: 'Apr-Jun, Sep-Oct',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        visaPolicy: 'schengen',
        description: 'Built on 118 islands connected by bridges, Venice is unlike anywhere else on Earth. Glide through romantic canals, admire Byzantine architecture in St. Mark\'s Square, and get lost in labyrinthine alleyways. This floating city of art and history creates an atmosphere of pure magic.',
        highlights: ['St. Mark\'s Basilica', 'Grand Canal', 'Rialto Bridge', 'Doge\'s Palace', 'Murano Island'],
        thingsToDo: ['Gondola ride', 'Glass-making in Murano', 'Sunset at Rialto', 'Cicchetti food tour', 'Visit Burano\'s colorful houses']
    },
    // USA
    {
        id: 7,
        name: 'New York City',
        country: 'United States',
        countryId: 'usa',
        region: 'northAmerica',
        category: ['cultural', 'shopping', 'nightlife', 'food'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
        rating: 4.8,
        duration: '5-7 days',
        bestTime: 'Apr-Jun, Sep-Nov',
        bestMonths: ['april', 'may', 'june', 'september', 'october', 'november'],
        visaPolicy: 'etaRequired',
        description: 'The city that never sleeps pulses with energy from Times Square\'s bright lights to Central Park\'s green oasis. NYC is a global center for arts, fashion, cuisine, and entertainment. Every neighborhood has its own character, from Brooklyn\'s artsy vibes to Manhattan\'s towering ambitions.',
        highlights: ['Statue of Liberty', 'Central Park', 'Times Square', 'Empire State Building', 'Brooklyn Bridge'],
        thingsToDo: ['Broadway show', 'Museum Mile tour', 'Walk the High Line', 'Pizza tour', 'Top of the Rock sunset']
    },
    {
        id: 8,
        name: 'Grand Canyon',
        country: 'United States',
        countryId: 'usa',
        region: 'northAmerica',
        category: ['adventure', 'trekking'],
        featured: false,
        image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800',
        rating: 4.9,
        duration: '2-3 days',
        bestTime: 'Mar-May, Sep-Nov',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        visaPolicy: 'etaRequired',
        description: 'One of the world\'s most awe-inspiring natural wonders, the Grand Canyon reveals 2 billion years of Earth\'s history. The vast scale and colorful layers create an almost spiritual experience. Whether viewing from the rim or hiking into its depths, the canyon leaves visitors speechless.',
        highlights: ['South Rim', 'Bright Angel Trail', 'Desert View', 'Havasu Falls', 'Skywalk'],
        thingsToDo: ['Rim Trail walking', 'Helicopter tour', 'Mule ride', 'Stargazing', 'Sunrise photography']
    },
    // THAILAND
    {
        id: 9,
        name: 'Bangkok',
        country: 'Thailand',
        countryId: 'thailand',
        region: 'asia',
        category: ['cultural', 'food', 'shopping', 'nightlife'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800',
        rating: 4.6,
        duration: '3-4 days',
        bestTime: 'Nov-Feb',
        bestMonths: ['november', 'december', 'january', 'february'],
        visaPolicy: 'visaFree',
        description: 'Thailand\'s vibrant capital is a sensory overload of ornate temples, bustling markets, delicious street food, and modern luxury. Bangkok offers incredible contrasts - ancient Buddhas beside futuristic malls, peaceful temples near wild nightlife. The city\'s energy and warmth of its people make it unforgettable.',
        highlights: ['Grand Palace', 'Wat Pho', 'Chatuchak Market', 'Khao San Road', 'Chao Phraya River'],
        thingsToDo: ['Temple hopping', 'Street food tour', 'Thai massage', 'Floating market visit', 'Rooftop bar sunset']
    },
    {
        id: 10,
        name: 'Phuket',
        country: 'Thailand',
        countryId: 'thailand',
        region: 'asia',
        category: ['beach', 'relaxation', 'nightlife', 'adventure'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800',
        rating: 4.5,
        duration: '4-5 days',
        bestTime: 'Nov-Apr',
        bestMonths: ['november', 'december', 'january', 'february', 'march', 'april'],
        visaPolicy: 'visaFree',
        description: 'Thailand\'s largest island offers stunning beaches, crystal-clear waters, and vibrant nightlife. From the bustling Patong Beach to tranquil hidden coves, Phuket caters to every type of traveler. Island hopping, Thai cuisine, and legendary hospitality complete the tropical paradise experience.',
        highlights: ['Phi Phi Islands', 'Patong Beach', 'Big Buddha', 'Old Town', 'Phang Nga Bay'],
        thingsToDo: ['Island hopping tour', 'Scuba diving', 'Thai cooking class', 'James Bond Island visit', 'Beach bar hopping']
    },
    // SPAIN
    {
        id: 11,
        name: 'Barcelona',
        country: 'Spain',
        countryId: 'spain',
        region: 'europe',
        category: ['cultural', 'beach', 'food', 'nightlife'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800',
        rating: 4.7,
        duration: '4-5 days',
        bestTime: 'Apr-Jun, Sep-Oct',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        visaPolicy: 'schengen',
        description: 'Gaudí\'s fantastical architecture, Mediterranean beaches, world-class dining, and vibrant nightlife make Barcelona irresistible. The city balances Catalan traditions with cosmopolitan energy. Stroll down La Rambla, marvel at Sagrada Familia, and experience tapas culture that extends well past midnight.',
        highlights: ['Sagrada Familia', 'Park Güell', 'La Rambla', 'Gothic Quarter', 'La Boqueria Market'],
        thingsToDo: ['Gaudí architecture tour', 'Beach afternoon', 'Tapas crawl', 'Flamenco show', 'Camp Nou stadium visit']
    },
    // AUSTRALIA
    {
        id: 12,
        name: 'Sydney',
        country: 'Australia',
        countryId: 'australia',
        region: 'oceania',
        category: ['beach', 'cultural', 'adventure'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
        rating: 4.7,
        duration: '4-5 days',
        bestTime: 'Sep-Nov, Mar-May',
        bestMonths: ['september', 'october', 'november', 'march', 'april', 'may'],
        visaPolicy: 'etaRequired',
        description: 'Australia\'s harbor city combines iconic landmarks with stunning beaches and a laid-back lifestyle. The Sydney Opera House and Harbour Bridge create one of the world\'s most recognizable skylines. Bondi Beach culture, world-class dining, and nearby natural wonders make Sydney a complete destination.',
        highlights: ['Sydney Opera House', 'Harbour Bridge', 'Bondi Beach', 'Darling Harbour', 'Blue Mountains'],
        thingsToDo: ['Opera House tour', 'Bridge climb', 'Bondi to Coogee walk', 'Ferry to Manly', 'Blue Mountains day trip']
    },
    // UAE
    {
        id: 13,
        name: 'Dubai',
        country: 'United Arab Emirates',
        countryId: 'uae',
        region: 'middleEast',
        category: ['shopping', 'adventure', 'beach', 'romantic'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
        rating: 4.7,
        duration: '4-5 days',
        bestTime: 'Nov-Mar',
        bestMonths: ['november', 'december', 'january', 'february', 'march'],
        visaPolicy: 'visaOnArrival',
        description: 'A city of superlatives where futuristic architecture rises from the desert. Dubai offers the world\'s tallest building, largest mall, and most luxurious experiences. Yet traditional souks and Arabian hospitality remain. From desert safaris to indoor skiing, Dubai makes the impossible possible.',
        highlights: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall', 'Burj Al Arab', 'Gold Souk'],
        thingsToDo: ['At the Top observation deck', 'Desert safari', 'Dubai Fountain show', 'Dhow cruise dinner', 'Ski Dubai experience']
    },
    // UK
    {
        id: 14,
        name: 'London',
        country: 'United Kingdom',
        countryId: 'uk',
        region: 'europe',
        category: ['heritage', 'cultural', 'shopping', 'nightlife'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        rating: 4.8,
        duration: '5-6 days',
        bestTime: 'May-Sep',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        visaPolicy: 'etaRequired',
        description: 'A global capital where centuries of history meet cutting-edge culture. Royal palaces, world-class museums, West End theaters, and diverse neighborhoods make London endlessly fascinating. From afternoon tea to pub culture, London offers experiences both quintessentially British and wonderfully international.',
        highlights: ['Big Ben & Parliament', 'Tower of London', 'British Museum', 'Buckingham Palace', 'Tower Bridge'],
        thingsToDo: ['Changing of the Guard', 'Harry Potter studio tour', 'West End show', 'Borough Market food tour', 'Thames river cruise']
    },
    // SINGAPORE
    {
        id: 15,
        name: 'Singapore',
        country: 'Singapore',
        countryId: 'singapore',
        region: 'asia',
        category: ['shopping', 'food', 'cultural', 'nightlife'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
        rating: 4.7,
        duration: '3-4 days',
        bestTime: 'Feb-Apr',
        bestMonths: ['february', 'march', 'april'],
        visaPolicy: 'visaFree',
        description: 'A futuristic city-state where diverse cultures blend seamlessly. Singapore dazzles with stunning architecture, incredible food from hawker centers to fine dining, and attractions for all ages. Efficient, clean, and safe, it\'s the perfect introduction to Asia or a stopover destination.',
        highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Chinatown', 'Little India'],
        thingsToDo: ['Supertree Grove light show', 'Hawker center food tour', 'Singapore Zoo', 'Universal Studios', 'Night Safari']
    },
    // MALDIVES
    {
        id: 16,
        name: 'Maldives',
        country: 'Maldives',
        countryId: 'maldives',
        region: 'asia',
        category: ['beach', 'honeymoon', 'romantic', 'relaxation'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
        rating: 4.9,
        duration: '5-7 days',
        bestTime: 'Nov-Apr',
        bestMonths: ['november', 'december', 'january', 'february', 'march', 'april'],
        visaPolicy: 'visaOnArrival',
        description: 'Paradise defined - crystal-clear turquoise waters, powder-white beaches, and luxurious overwater villas. The Maldives offers the ultimate escape from the world. Swim with manta rays, enjoy private island dining, and watch bioluminescent beaches glow at night. Pure tropical romance.',
        highlights: ['Overwater villas', 'Coral reefs', 'Underwater dining', 'Whale shark watching', 'Private island beaches'],
        thingsToDo: ['Snorkeling with turtles', 'Sunset dolphin cruise', 'Spa treatments', 'Underwater restaurant visit', 'Sandbank picnic']
    },
    // SWITZERLAND
    {
        id: 17,
        name: 'Swiss Alps',
        country: 'Switzerland',
        countryId: 'switzerland',
        region: 'europe',
        category: ['mountains', 'adventure', 'trekking', 'romantic'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800',
        rating: 4.9,
        duration: '5-7 days',
        bestTime: 'Jun-Sep, Dec-Mar',
        bestMonths: ['june', 'july', 'august', 'september', 'december', 'january', 'february', 'march'],
        visaPolicy: 'schengen',
        description: 'Majestic peaks, pristine lakes, charming villages, and world-class infrastructure. The Swiss Alps offer year-round beauty - summer hiking trails through meadows of wildflowers, winter skiing on legendary slopes. Add Swiss precision, chocolate, and cheese for the perfect alpine escape.',
        highlights: ['Matterhorn', 'Jungfrau', 'Lake Lucerne', 'Zermatt', 'Interlaken'],
        thingsToDo: ['Jungfraujoch railway', 'Glacier Express journey', 'Alpine hiking', 'Paragliding', 'Cheese and chocolate tasting']
    },
    // GREECE
    {
        id: 18,
        name: 'Santorini',
        country: 'Greece',
        countryId: 'greece',
        region: 'europe',
        category: ['romantic', 'honeymoon', 'beach', 'heritage'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800',
        rating: 4.8,
        duration: '3-4 days',
        bestTime: 'Apr-Jun, Sep-Oct',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        visaPolicy: 'schengen',
        description: 'Iconic white-washed buildings with blue domes cascading down volcanic cliffs into the sapphire Aegean Sea. Santorini\'s dramatic beauty, legendary sunsets, and romantic atmosphere make it one of the world\'s most photographed destinations. Wine tasting, ancient ruins, and black sand beaches complete the magic.',
        highlights: ['Oia sunset', 'Fira', 'Red Beach', 'Akrotiri ruins', 'Caldera views'],
        thingsToDo: ['Watch Oia sunset', 'Wine tasting tour', 'Catamaran cruise', 'Explore Akrotiri', 'Hot springs visit']
    },
    // TURKEY
    {
        id: 19,
        name: 'Istanbul',
        country: 'Turkey',
        countryId: 'turkey',
        region: 'europe',
        category: ['heritage', 'cultural', 'food', 'shopping'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800',
        rating: 4.7,
        duration: '4-5 days',
        bestTime: 'Apr-Jun, Sep-Nov',
        bestMonths: ['april', 'may', 'june', 'september', 'october', 'november'],
        visaPolicy: 'eVisa',
        description: 'Straddling two continents, Istanbul is where East meets West in spectacular fashion. Byzantine churches, Ottoman mosques, bustling bazaars, and modern cafes create a mesmerizing tapestry. The Bosphorus provides stunning views while Turkish hospitality, cuisine, and culture captivate visitors.',
        highlights: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar', 'Topkapi Palace', 'Bosphorus'],
        thingsToDo: ['Turkish bath experience', 'Bosphorus cruise', 'Bazaar shopping', 'Turkish breakfast feast', 'Whirling dervish show']
    },
    {
        id: 20,
        name: 'Cappadocia',
        country: 'Turkey',
        countryId: 'turkey',
        region: 'europe',
        category: ['adventure', 'heritage', 'romantic'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800',
        rating: 4.9,
        duration: '2-3 days',
        bestTime: 'Apr-Jun, Sep-Oct',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        visaPolicy: 'eVisa',
        description: 'A landscape from another planet - fairy chimneys, ancient cave dwellings, and hundreds of hot air balloons at sunrise. Cappadocia\'s surreal rock formations, underground cities, and cave hotels offer experiences found nowhere else on Earth. Pure magic awaits in this UNESCO World Heritage site.',
        highlights: ['Hot air balloon ride', 'Göreme Open Air Museum', 'Underground cities', 'Fairy chimneys', 'Cave hotels'],
        thingsToDo: ['Sunrise balloon flight', 'ATV tour', 'Explore cave churches', 'Pottery workshop', 'Valley hikes']
    },
    // EGYPT
    {
        id: 21,
        name: 'Cairo & Giza',
        country: 'Egypt',
        countryId: 'egypt',
        region: 'africa',
        category: ['heritage', 'cultural'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800',
        rating: 4.6,
        duration: '3-4 days',
        bestTime: 'Oct-Apr',
        bestMonths: ['october', 'november', 'december', 'january', 'february', 'march', 'april'],
        visaPolicy: 'visaOnArrival',
        description: 'Stand before the last surviving Wonder of the Ancient World - the Great Pyramid of Giza. Egypt\'s capital offers 5,000 years of history, from pharaonic treasures in the Egyptian Museum to the vibrant chaos of Khan el-Khalili bazaar. A journey through time unlike any other.',
        highlights: ['Pyramids of Giza', 'Sphinx', 'Egyptian Museum', 'Khan el-Khalili', 'Nile River'],
        thingsToDo: ['Pyramid tour with guide', 'Egyptian Museum visit', 'Felucca Nile cruise', 'Sound and light show', 'Bazaar shopping']
    },
    // NEW ZEALAND
    {
        id: 22,
        name: 'Queenstown',
        country: 'New Zealand',
        countryId: 'newzealand',
        region: 'oceania',
        category: ['adventure', 'trekking', 'mountains'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=800',
        rating: 4.8,
        duration: '4-5 days',
        bestTime: 'Dec-Mar',
        bestMonths: ['december', 'january', 'february', 'march'],
        visaPolicy: 'etaRequired',
        description: 'The adventure capital of the world, nestled on the shores of crystal-clear Lake Wakatipu surrounded by dramatic mountains. Bungee jumping was invented here, and the adrenaline hasn\'t stopped since. From skiing to jet boating, Middle-earth scenery to world-class wine, Queenstown delivers unforgettable thrills.',
        highlights: ['Lake Wakatipu', 'Milford Sound', 'Remarkables', 'Bungee jumping', 'Glenorchy'],
        thingsToDo: ['Milford Sound cruise', 'Bungee or skydive', 'Jet boat ride', 'Wine tasting', 'Lord of the Rings tour']
    },
    // VIETNAM
    {
        id: 23,
        name: 'Halong Bay',
        country: 'Vietnam',
        countryId: 'vietnam',
        region: 'asia',
        category: ['beach', 'adventure', 'romantic'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
        rating: 4.7,
        duration: '2-3 days',
        bestTime: 'Mar-Jun, Sep-Nov',
        bestMonths: ['march', 'april', 'may', 'june', 'september', 'october', 'november'],
        visaPolicy: 'eVisa',
        description: 'Nearly 2,000 limestone islands rise dramatically from emerald waters in this UNESCO World Heritage site. Cruise past towering karsts, explore hidden caves, and kayak through floating villages. Halong Bay\'s mystical beauty, especially at sunrise and sunset, creates an otherworldly experience.',
        highlights: ['Cruising experience', 'Sung Sot Cave', 'Ti Top Island', 'Floating villages', 'Cat Ba Island'],
        thingsToDo: ['Overnight cruise', 'Kayaking', 'Cave exploration', 'Sunrise tai chi', 'Local seafood dinner']
    },
    // MEXICO
    {
        id: 24,
        name: 'Cancún & Riviera Maya',
        country: 'Mexico',
        countryId: 'mexico',
        region: 'northAmerica',
        category: ['beach', 'adventure', 'heritage'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800',
        rating: 4.6,
        duration: '5-7 days',
        bestTime: 'Dec-Apr',
        bestMonths: ['december', 'january', 'february', 'march', 'april'],
        visaPolicy: 'visaFree',
        description: 'Caribbean paradise meets ancient Maya civilization. Stunning turquoise waters, white sand beaches, and nearby archaeological wonders like Chichen Itza and Tulum. Add cenotes (natural swimming holes), vibrant nightlife, and authentic Mexican cuisine for the ultimate beach vacation with culture.',
        highlights: ['Chichen Itza', 'Tulum ruins', 'Cenotes', 'Isla Mujeres', 'Xcaret'],
        thingsToDo: ['Visit Chichen Itza', 'Swim in cenotes', 'Snorkel with turtles', 'Day trip to Tulum', 'Mexican cooking class']
    },
    // MOROCCO
    {
        id: 25,
        name: 'Marrakech',
        country: 'Morocco',
        countryId: 'morocco',
        region: 'africa',
        category: ['cultural', 'heritage', 'food', 'shopping'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
        rating: 4.6,
        duration: '3-4 days',
        bestTime: 'Mar-May, Sep-Nov',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        visaPolicy: 'visaFree',
        description: 'A feast for the senses - labyrinthine souks, stunning riads, aromatic spices, and the bustling Jemaa el-Fnaa square. The Red City offers exotic adventure just hours from Europe. Ornate palaces, traditional hammams, and Moroccan hospitality transport you to another world.',
        highlights: ['Jemaa el-Fnaa', 'Majorelle Garden', 'Bahia Palace', 'Souks', 'Saadian Tombs'],
        thingsToDo: ['Get lost in the souks', 'Hammam spa experience', 'Cooking class', 'Sahara desert trip', 'Rooftop sunset drinks']
    },
    // PORTUGAL
    {
        id: 26,
        name: 'Lisbon',
        country: 'Portugal',
        countryId: 'portugal',
        region: 'europe',
        category: ['heritage', 'cultural', 'food', 'nightlife'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
        rating: 4.7,
        duration: '3-4 days',
        bestTime: 'Mar-May, Sep-Oct',
        bestMonths: ['march', 'april', 'may', 'september', 'october'],
        visaPolicy: 'schengen',
        description: 'Europe\'s sunniest capital, built on seven hills with vintage trams, stunning tiles, and captivating fado music. Lisbon offers incredible value with world-class cuisine, historic neighborhoods, and a thriving creative scene. Nearby beaches and the fairytale village of Sintra add more magic.',
        highlights: ['Belém Tower', 'Alfama', 'Sintra', 'Time Out Market', 'Tram 28'],
        thingsToDo: ['Ride Tram 28', 'Visit Sintra palaces', 'Taste pastéis de nata', 'Fado night', 'Sunset drinks in Alfama']
    },
    // BRAZIL
    {
        id: 27,
        name: 'Rio de Janeiro',
        country: 'Brazil',
        countryId: 'brazil',
        region: 'southAmerica',
        category: ['beach', 'cultural', 'nightlife', 'adventure'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800',
        rating: 4.6,
        duration: '4-5 days',
        bestTime: 'May-Oct',
        bestMonths: ['may', 'june', 'july', 'august', 'september', 'october'],
        visaPolicy: 'visaFree',
        description: 'The Marvelous City lives up to its name - Christ the Redeemer watching over golden beaches, dramatic mountains, and vibrant neighborhoods. Rio\'s samba rhythms, beach culture, and zest for life are infectious. From Copacabana to Carnival, the energy is absolutely electric.',
        highlights: ['Christ the Redeemer', 'Sugarloaf Mountain', 'Copacabana Beach', 'Ipanema', 'Santa Teresa'],
        thingsToDo: ['Corcovado to Christ', 'Cable car to Sugarloaf', 'Samba class', 'Beach volleyball', 'Favela tour']
    },
    // INDONESIA
    {
        id: 28,
        name: 'Bali',
        country: 'Indonesia',
        countryId: 'indonesia',
        region: 'asia',
        category: ['beach', 'honeymoon', 'relaxation', 'cultural', 'adventure'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
        rating: 4.8,
        duration: '5-7 days',
        bestTime: 'Apr-Oct',
        bestMonths: ['april', 'may', 'june', 'july', 'august', 'september', 'october'],
        visaPolicy: 'visaOnArrival',
        description: 'The Island of the Gods enchants with emerald rice terraces, sacred temples, pristine beaches, and spiritual energy. Bali offers something for everyone - yoga retreats, world-class surfing, vibrant nightlife, traditional ceremonies, and some of the most beautiful sunsets on Earth.',
        highlights: ['Ubud', 'Tanah Lot Temple', 'Tegallalang Rice Terraces', 'Seminyak beaches', 'Uluwatu'],
        thingsToDo: ['Sunrise at Mt. Batur', 'Ubud Monkey Forest', 'Rice terrace walk', 'Balinese spa', 'Temple ceremonies']
    },
    // SOUTH KOREA
    {
        id: 29,
        name: 'Seoul',
        country: 'South Korea',
        countryId: 'southkorea',
        region: 'asia',
        category: ['cultural', 'food', 'shopping', 'nightlife'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800',
        rating: 4.7,
        duration: '4-5 days',
        bestTime: 'Mar-May, Sep-Nov',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        visaPolicy: 'visaFree',
        description: 'Where ancient palaces meet K-pop culture, Seoul pulses with energy. Historic Hanok villages sit beside futuristic skyscrapers. The food scene - from street food to michelin-star - is extraordinary. Add in incredible shopping, K-beauty, and the famous Korean hospitality for an unforgettable city experience.',
        highlights: ['Gyeongbokgung Palace', 'Bukchon Hanok Village', 'Myeongdong', 'N Seoul Tower', 'Hongdae'],
        thingsToDo: ['Hanbok photoshoot at palace', 'Korean BBQ dinner', 'K-beauty shopping', 'DMZ tour', 'Nightlife in Gangnam']
    },
    // INDIA
    {
        id: 30,
        name: 'Jaipur',
        country: 'India',
        countryId: 'india',
        region: 'asia',
        category: ['heritage', 'cultural', 'shopping'],
        featured: false,
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
        rating: 4.6,
        duration: '3-4 days',
        bestTime: 'Oct-Mar',
        bestMonths: ['october', 'november', 'december', 'january', 'february', 'march'],
        visaPolicy: 'eVisa',
        description: 'The Pink City dazzles with majestic forts, opulent palaces, and a kaleidoscope of colors. Jaipur is the gateway to royal Rajasthan, where elephant rides to hilltop forts, intricate craftsmanship, and warm hospitality create experiences fit for royalty.',
        highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Nahargarh Fort'],
        thingsToDo: ['Elephant ride to Amber Fort', 'Sunset at Nahargarh', 'Bazaar shopping', 'Block printing workshop', 'Traditional Rajasthani dinner']
    },
    // CANADA
    {
        id: 31,
        name: 'Banff & Canadian Rockies',
        country: 'Canada',
        countryId: 'canada',
        region: 'northAmerica',
        category: ['mountains', 'adventure', 'trekking'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800',
        rating: 4.9,
        duration: '5-7 days',
        bestTime: 'Jun-Sep',
        bestMonths: ['june', 'july', 'august', 'september'],
        visaPolicy: 'etaRequired',
        description: 'Turquoise lakes reflecting snow-capped peaks, abundant wildlife, and endless wilderness. The Canadian Rockies offer nature at its most spectacular. From Lake Louise\'s impossibly blue waters to Jasper\'s dark sky preserve, this is where adventure and serenity meet.',
        highlights: ['Lake Louise', 'Moraine Lake', 'Banff National Park', 'Icefields Parkway', 'Jasper'],
        thingsToDo: ['Kayak Lake Louise', 'Drive Icefields Parkway', 'Wildlife spotting', 'Hot springs soak', 'Hiking trails']
    }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

function getDestinationsByCategory(category) {
    if (category === 'all') return destinationsData;
    return destinationsData.filter(d => d.category.includes(category));
}

function getDestinationsByRegion(region) {
    return destinationsData.filter(d => d.region === region);
}

function getDestinationsByCountry(countryId) {
    return destinationsData.filter(d => d.countryId === countryId);
}

function getDestinationsByMonth(month) {
    return destinationsData.filter(d => d.bestMonths && d.bestMonths.includes(month));
}

function getFeaturedDestinations() {
    return destinationsData.filter(d => d.featured);
}

function getDestinationById(id) {
    return destinationsData.find(d => d.id === id);
}

function getCountryById(id) {
    return countriesData.find(c => c.id === id);
}

function getVisaPolicyText(policy) {
    return visaPolicies[policy] || 'Check visa requirements';
}

// Search function
function searchDestinations(query) {
    const q = query.toLowerCase();
    return destinationsData.filter(d => 
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.highlights.some(h => h.toLowerCase().includes(q))
    );
}
