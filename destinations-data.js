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
    },
    // NEW COUNTRIES FROM EUROPAMUNDO & STARTOURS
    {
        id: 'czechrepublic',
        name: 'Czech Republic',
        region: 'europe',
        flag: '🇨🇿',
        currency: 'CZK',
        language: 'Czech',
        visaPolicy: 'schengen',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        description: 'A land of fairytale castles, historic towns, and world-famous beer. Prague\'s stunning architecture and Bohemian charm make it one of Europe\'s most enchanting destinations.',
        image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800'
    },
    {
        id: 'austria',
        name: 'Austria',
        region: 'europe',
        flag: '🇦🇹',
        currency: 'EUR',
        language: 'German',
        visaPolicy: 'schengen',
        bestMonths: ['may', 'june', 'july', 'august', 'september', 'december', 'january'],
        description: 'Alpine grandeur meets imperial elegance. From Vienna\'s grand palaces to Salzburg\'s musical heritage and stunning mountain villages, Austria offers culture and natural beauty.',
        image: 'https://images.unsplash.com/photo-1516550893885-a3b8f54b1a68?w=800'
    },
    {
        id: 'hungary',
        name: 'Hungary',
        region: 'europe',
        flag: '🇭🇺',
        currency: 'HUF',
        language: 'Hungarian',
        visaPolicy: 'schengen',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        description: 'Budapest, the "Pearl of the Danube," offers thermal baths, stunning architecture, and vibrant nightlife. Hungary combines rich history with affordable luxury.',
        image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800'
    },
    {
        id: 'netherlands',
        name: 'Netherlands',
        region: 'europe',
        flag: '🇳🇱',
        currency: 'EUR',
        language: 'Dutch',
        visaPolicy: 'schengen',
        bestMonths: ['april', 'may', 'june', 'july', 'august', 'september'],
        description: 'Tulip fields, windmills, canals, and world-class museums. The Netherlands offers a unique blend of art, history, and progressive culture in compact, bike-friendly cities.',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800'
    },
    {
        id: 'germany',
        name: 'Germany',
        region: 'europe',
        flag: '🇩🇪',
        currency: 'EUR',
        language: 'German',
        visaPolicy: 'schengen',
        bestMonths: ['may', 'june', 'july', 'august', 'september', 'december'],
        description: 'From Berlin\'s dynamic culture to Bavaria\'s fairytale castles, Germany offers incredible diversity. Rich history, efficient transport, and world-famous beer await.',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800'
    },
    {
        id: 'ireland',
        name: 'Ireland',
        region: 'europe',
        flag: '🇮🇪',
        currency: 'EUR',
        language: 'English, Irish',
        visaPolicy: 'visaRequired',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'The Emerald Isle captivates with dramatic coastlines, ancient castles, traditional pubs, and legendary hospitality. Ireland offers stunning landscapes and rich Celtic heritage.',
        image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800'
    },
    {
        id: 'scotland',
        name: 'Scotland',
        region: 'europe',
        flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        currency: 'GBP',
        language: 'English, Scots Gaelic',
        visaPolicy: 'etaRequired',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'Rugged highlands, historic castles, Loch Ness mysteries, and whisky trails. Scotland offers dramatic landscapes and rich heritage that inspired countless legends.',
        image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800'
    },
    {
        id: 'belgium',
        name: 'Belgium',
        region: 'europe',
        flag: '🇧🇪',
        currency: 'EUR',
        language: 'Dutch, French, German',
        visaPolicy: 'schengen',
        bestMonths: ['april', 'may', 'june', 'july', 'august', 'september'],
        description: 'Medieval cities, world-famous chocolate and beer, stunning architecture. Belgium packs incredible variety into a small country with Brussels, Bruges, and Ghent.',
        image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=800'
    },
    {
        id: 'croatia',
        name: 'Croatia',
        region: 'europe',
        flag: '🇭🇷',
        currency: 'EUR',
        language: 'Croatian',
        visaPolicy: 'schengen',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'Azure Adriatic waters, ancient walled cities, and stunning islands. Croatia offers Mediterranean beauty, Game of Thrones filming locations, and incredible value.',
        image: 'https://images.unsplash.com/photo-1555990538-1e2a5fe65dc9?w=800'
    },
    {
        id: 'poland',
        name: 'Poland',
        region: 'europe',
        flag: '🇵🇱',
        currency: 'PLN',
        language: 'Polish',
        visaPolicy: 'schengen',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'Historic cities, tragic history, and remarkable resilience. Poland offers Krakow\'s medieval charm, Warsaw\'s rebirth, and poignant Holocaust memorials.',
        image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11a20?w=800'
    },
    {
        id: 'norway',
        name: 'Norway',
        region: 'europe',
        flag: '🇳🇴',
        currency: 'NOK',
        language: 'Norwegian',
        visaPolicy: 'schengen',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'Dramatic fjords, Northern Lights, midnight sun, and Viking heritage. Norway offers some of Earth\'s most spectacular natural scenery and outdoor adventures.',
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800'
    },
    {
        id: 'sweden',
        name: 'Sweden',
        region: 'europe',
        flag: '🇸🇪',
        currency: 'SEK',
        language: 'Swedish',
        visaPolicy: 'schengen',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'Scandinavian design, pristine nature, and progressive culture. Sweden offers charming Stockholm, Arctic adventures, and the Northern Lights.',
        image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800'
    },
    {
        id: 'denmark',
        name: 'Denmark',
        region: 'europe',
        flag: '🇩🇰',
        currency: 'DKK',
        language: 'Danish',
        visaPolicy: 'schengen',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'The happiest country in the world, home to hygge culture. Copenhagen offers world-class dining, design, and the fairytale spirit of Hans Christian Andersen.',
        image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800'
    },
    {
        id: 'finland',
        name: 'Finland',
        region: 'europe',
        flag: '🇫🇮',
        currency: 'EUR',
        language: 'Finnish, Swedish',
        visaPolicy: 'schengen',
        bestMonths: ['june', 'july', 'august', 'december', 'january', 'february'],
        description: 'Land of a thousand lakes, Northern Lights, and Santa Claus. Finland offers Arctic adventures, sauna culture, and unique Lapland experiences.',
        image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800'
    },
    {
        id: 'slovenia',
        name: 'Slovenia',
        region: 'europe',
        flag: '🇸🇮',
        currency: 'EUR',
        language: 'Slovenian',
        visaPolicy: 'schengen',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'Europe\'s hidden gem with stunning Lake Bled, Julian Alps, and charming Ljubljana. Slovenia offers Alpine beauty, Mediterranean coast, and incredible cuisine.',
        image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800'
    },
    {
        id: 'romania',
        name: 'Romania',
        region: 'europe',
        flag: '🇷🇴',
        currency: 'RON',
        language: 'Romanian',
        visaPolicy: 'schengen',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        description: 'Dracula\'s homeland offers medieval castles, painted monasteries, and Transylvanian charm. Romania is Europe\'s last frontier for authentic village life.',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800'
    },
    {
        id: 'serbia',
        name: 'Serbia',
        region: 'europe',
        flag: '🇷🇸',
        currency: 'RSD',
        language: 'Serbian',
        visaPolicy: 'visaFree',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        description: 'Vibrant Belgrade nightlife, historic fortresses, and Serbian hospitality. An emerging destination with great food, music, and incredible value.',
        image: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=800'
    },
    {
        id: 'saudiarabia',
        name: 'Saudi Arabia',
        region: 'middleEast',
        flag: '🇸🇦',
        currency: 'SAR',
        language: 'Arabic',
        visaPolicy: 'eVisa',
        bestMonths: ['october', 'november', 'december', 'january', 'february', 'march'],
        description: 'An ancient land opening to tourism with UNESCO sites, Red Sea diving, and futuristic megaprojects. Saudi Arabia offers a glimpse into authentic Arabian culture.',
        image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800'
    },
    {
        id: 'jordan',
        name: 'Jordan',
        region: 'middleEast',
        flag: '🇯🇴',
        currency: 'JOD',
        language: 'Arabic',
        visaPolicy: 'visaOnArrival',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        description: 'Home to Petra, one of the New Seven Wonders. Jordan offers ancient wonders, Dead Sea floating, desert camping in Wadi Rum, and legendary hospitality.',
        image: 'https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800'
    },
    {
        id: 'argentina',
        name: 'Argentina',
        region: 'southAmerica',
        flag: '🇦🇷',
        currency: 'ARS',
        language: 'Spanish',
        visaPolicy: 'visaFree',
        bestMonths: ['october', 'november', 'december', 'january', 'february', 'march'],
        description: 'Tango, incredible wine, Patagonian glaciers, and passionate culture. Argentina offers diverse landscapes from Buenos Aires glamour to Iguazu Falls.',
        image: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800'
    },
    {
        id: 'peru',
        name: 'Peru',
        region: 'southAmerica',
        flag: '🇵🇪',
        currency: 'PEN',
        language: 'Spanish',
        visaPolicy: 'visaFree',
        bestMonths: ['april', 'may', 'june', 'july', 'august', 'september', 'october'],
        description: 'Home to Machu Picchu, one of the New Seven Wonders. Peru offers Incan heritage, Amazon rainforest, world-class cuisine, and stunning Andes scenery.',
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800'
    },
    {
        id: 'kenya',
        name: 'Kenya',
        region: 'africa',
        flag: '🇰🇪',
        currency: 'KES',
        language: 'Swahili, English',
        visaPolicy: 'eVisa',
        bestMonths: ['january', 'february', 'june', 'july', 'august', 'september', 'october'],
        description: 'The ultimate safari destination. Kenya offers the Great Migration, Big Five wildlife, Maasai culture, and pristine Indian Ocean beaches.',
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800'
    },
    {
        id: 'southafrica',
        name: 'South Africa',
        region: 'africa',
        flag: '🇿🇦',
        currency: 'ZAR',
        language: 'English, Afrikaans, Zulu',
        visaPolicy: 'visaFree',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        description: 'Rainbow nation with incredible diversity. From Cape Town\'s beauty to Kruger safaris, wine regions to adventure sports, South Africa has it all.',
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800'
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
        thingsToDo: [
            { name: 'Visit Versailles Palace', details: 'Explore the magnificent Palace of Versailles, a UNESCO World Heritage site. Tour the stunning Hall of Mirrors, royal apartments, and the extensive formal gardens. Pre-book tickets to skip lines and consider a guided tour for deeper insights into French royal history.', duration: '4-5 hours' },
            { name: 'Seine River Cruise', details: 'Glide past Paris\'s most iconic monuments on a scenic boat cruise. Day cruises offer excellent photo opportunities while evening dinner cruises provide magical views of illuminated landmarks. The Bateaux Mouches and Bateaux Parisiens offer various options.', duration: '1-2 hours' },
            { name: 'Explore the Marais District', details: 'Wander through this historic neighborhood known for trendy boutiques, art galleries, and Jewish heritage sites. Visit Place des Vosges, the oldest planned square in Paris, and enjoy falafel on Rue des Rosiers. Perfect for an afternoon of shopping and people-watching.', duration: '2-3 hours' },
            { name: 'Shop at Galeries Lafayette', details: 'Experience Parisian shopping at this iconic department store. The stunning Art Nouveau glass dome is worth seeing alone. Visit the free rooftop terrace for panoramic city views. Thursday evening features fashion shows.', duration: '2-3 hours' },
            { name: 'Taste French Pastries', details: 'Embark on a self-guided or organized pastry tour sampling croissants, macarons, éclairs, and tarts from renowned patisseries. Must-visit spots include Pierre Hermé, Ladurée, and Du Pain et des Idées. Each arrondissement has hidden gems.', duration: '2-3 hours' },
            { name: 'Eiffel Tower Experience', details: 'Ascend the Iron Lady via elevator or climb the stairs for stunning panoramic views. Book tickets in advance, especially for the summit. Visit at sunset for magical golden-hour photos. Evening sparkle shows happen every hour after dark.', duration: '2-3 hours' },
            { name: 'Montmartre & Sacré-Cœur', details: 'Explore the artistic hilltop village where Picasso and Van Gogh once lived. Visit the white-domed Sacré-Cœur Basilica, watch street artists at Place du Tertre, and find hidden vineyards. Best experienced in early morning or evening.', duration: '3-4 hours' }
        ]
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
        thingsToDo: [
            { name: 'Stroll Promenade des Anglais', details: 'Walk or cycle along Nice\'s famous 7km waterfront promenade. Blue chairs face the Mediterranean for perfect people-watching. Best at sunset when the light turns golden on the Belle Époque buildings.', duration: '1-2 hours' },
            { name: 'Day Trip to Monaco', details: 'Visit the tiny principality - see the Monte Carlo Casino (passport required), Prince\'s Palace, and Oceanographic Museum. The changing of the guard happens at 11:55 AM daily. Public buses make this an easy day trip.', duration: '4-5 hours' },
            { name: 'Explore Eze Village', details: 'Perched medieval village with stunning views of the Riviera. Visit the exotic garden at the top, browse artisan shops, and enjoy lunch with panoramic views. Reach by bus from Nice in 20 minutes.', duration: '2-3 hours' },
            { name: 'Old Town Nice Food Tour', details: 'Sample socca (chickpea pancake), pissaladière (onion tart), and salade niçoise in the authentic old town. Cours Saleya market is perfect for flowers and produce. The colorful baroque buildings create perfect photo ops.', duration: '2-3 hours' },
            { name: 'Beach Day at Villefranche-sur-Mer', details: 'One of the Riviera\'s most beautiful beaches with crystal-clear water. Small charming town nearby for lunch. Less crowded than Nice beaches. Easy 10-minute train ride from Nice.', duration: '4-5 hours' },
            { name: 'Visit Matisse & Chagall Museums', details: 'Nice has excellent art museums dedicated to these masters who lived on the Riviera. Combined visits work well. The Chagall Museum\'s biblical message paintings are particularly stunning.', duration: '3-4 hours' }
        ]
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
        thingsToDo: [
            { name: 'Explore Senso-ji Temple', details: 'Tokyo\'s oldest temple in Asakusa. Walk through the iconic Kaminarimon thunder gate, shop on Nakamise Street, and draw your fortune (omikuji). Most atmospheric early morning or evening when crowds thin.', duration: '2-3 hours' },
            { name: 'Experience Shibuya Crossing', details: 'The world\'s busiest pedestrian crossing. View from Starbucks or Shibuya Sky observation deck for best photos. Cross with the crowds for the full experience. Best at night with neon lights.', duration: '1-2 hours' },
            { name: 'teamLab Digital Art Museum', details: 'Immersive digital art installations that respond to your movement. Book tickets online in advance - sells out fast. Wear comfortable pants (floor seating), skip white clothing (it glows).', duration: '2-3 hours' },
            { name: 'Eat at Tsukiji Outer Market', details: 'The inner wholesale market moved, but the outer market still has Tokyo\'s best sushi, tamagoyaki (sweet omelet), and kitchen supplies. Go early morning for freshest fish. Come hungry!', duration: '2-3 hours' },
            { name: 'Day Trip to Mount Fuji', details: 'Japan\'s iconic peak is accessible from Tokyo. Visit Hakone for hot springs with Fuji views, or Lake Kawaguchiko for the famous postcard views. Book clear day forecasts. 2-3 hours each way.', duration: 'Full day' },
            { name: 'Shop & Explore Harajuku', details: 'Youth fashion and pop culture capital. Takeshita Street is colorful chaos, while nearby Omotesando is designer tree-lined elegance. Try colorful crepes and visit the serene Meiji Shrine nearby.', duration: '3-4 hours' },
            { name: 'Robot Restaurant Show', details: 'Quintessentially Tokyo absurdity - robots, dancers, and lasers in a sensory overload cabaret. Pure entertainment, not fine dining (eat beforehand). Book online for discounts.', duration: '2 hours' }
        ]
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
        thingsToDo: [
            { name: 'Hike Fushimi Inari Shrine', details: 'Walk through thousands of vermillion torii gates up the sacred mountain. The main path takes 2-3 hours round trip. Start early morning (open 24 hours) to avoid crowds. Small shrines and fox statues along the way.', duration: '2-3 hours' },
            { name: 'Visit Kinkaku-ji Golden Pavilion', details: 'Iconic Zen temple covered in gold leaf, perfectly reflected in the pond. One of Japan\'s most photographed sights. Morning light is best. The surrounding garden is meticulously maintained.', duration: '1-1.5 hours' },
            { name: 'Arashiyama Bamboo Grove Walk', details: 'Towering bamboo creates an otherworldly atmosphere. Visit at sunrise for empty paths and listen to the wind through the stalks. Combine with Tenryu-ji Temple garden and monkey park.', duration: '2-3 hours' },
            { name: 'Traditional Tea Ceremony', details: 'Experience Japanese hospitality and mindfulness in a formal tea ceremony. Many teahouses offer tourist-friendly 30-60 minute sessions. Learn proper etiquette and enjoy matcha with seasonal sweets.', duration: '1-1.5 hours' },
            { name: 'Evening Walk in Gion', details: 'Kyoto\'s famous geisha district comes alive at dusk. Wooden machiya houses, lantern-lit streets, and if lucky, spot geiko or maiko heading to appointments. Hanami-koji is the main street.', duration: '1-2 hours' },
            { name: 'Day Trip to Nara', details: 'Ancient capital with friendly deer roaming freely among UNESCO World Heritage temples. See Todai-ji\'s giant Buddha and Kasuga Taisha shrine. 45-minute train from Kyoto. Buy deer crackers for feeding.', duration: '5-6 hours' }
        ]
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
        description: 'The Eternal City where ancient ruins stand alongside vibrant modern life. Rome offers nearly 3,000 years of globally influential art, architecture, and culture. From the mighty Colosseum to masterpieces of the Vatican, every corner reveals layers of history. Add world-class cuisine, great coffee, and Italian passion for life.',
        highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Pantheon', 'Roman Forum'],
        thingsToDo: [
            { name: 'Colosseum & Roman Forum Tour', details: 'Explore the iconic amphitheater where gladiators once fought. Book skip-the-line tickets and consider underground or arena floor access for exclusive areas. The combined ticket includes the Roman Forum and Palatine Hill.', duration: '3-4 hours' },
            { name: 'Vatican Museums & Sistine Chapel', details: 'Witness Michelangelo\'s masterpiece ceiling and explore one of the world\'s greatest art collections. Book tickets online weeks ahead. Early morning or late afternoon slots are less crowded. Don\'t miss the Raphael Rooms.', duration: '4-5 hours' },
            { name: 'Toss a Coin in Trevi Fountain', details: 'Legend says throwing a coin over your left shoulder guarantees a return to Rome. Visit early morning or late evening to avoid largest crowds. The baroque masterpiece is even more magical when illuminated at night.', duration: '30 minutes' },
            { name: 'Taste Authentic Italian Pizza', details: 'Experience Rome\'s pizza tradition at legendary spots like Da Remo (Testaccio), Pizzarium (gourmet by-the-slice), or Ai Marmi (locals\' favorite). Roman pizza is thin and crispy, different from Neapolitan style.', duration: '1-2 hours' },
            { name: 'Explore Trastevere', details: 'Wander Rome\'s most charming neighborhood with cobblestone streets, ivy-covered buildings, and authentic trattorias. Best experienced after dark when locals come out. Try supplì (fried rice balls) and local wine.', duration: '2-3 hours' },
            { name: 'Visit Borghese Gallery', details: 'Home to stunning Bernini sculptures and Caravaggio paintings in a beautiful villa setting. Tickets are timed and limited - book 2-3 weeks ahead. Each 2-hour slot offers intimate art appreciation.', duration: '2 hours' },
            { name: 'Pantheon Visit', details: 'Marvel at the best-preserved Ancient Roman building with its remarkable concrete dome and oculus. Entry is free but timed tickets recommended. The light streaming through the opening is magical at noon.', duration: '1 hour' }
        ]
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
        thingsToDo: [
            { name: 'Gondola Ride Through Canals', details: 'Iconic Venetian experience best enjoyed at sunset or evening. Official rate is €80 for 30 mins (up to 6 people). Negotiate politely for longer trips. Side canals are more romantic than the busy Grand Canal.', duration: '30-45 minutes' },
            { name: 'St. Mark\'s Basilica & Square', details: 'Byzantine masterpiece with gold mosaics covering every surface. Skip lines by booking online or visiting the museum first. Dress code enforced (covered shoulders/knees). The square floods in acqua alta season.', duration: '1-2 hours' },
            { name: 'Visit Murano Glass Workshops', details: 'Watch master glassblowers create intricate pieces using centuries-old techniques. Factories offer free demonstrations hoping you\'ll buy. Many high-quality showrooms and affordable souvenir glass available.', duration: '2-3 hours' },
            { name: 'Cicchetti Crawl in Cannaregio', details: 'Venetian tapas and wine at traditional bàcari bars. Start near Rialto Market, try crostini, fried seafood, and meatballs with local wines sold by the glass. Much cheaper than sit-down restaurants.', duration: '2-3 hours' },
            { name: 'Day Trip to Burano', details: 'Island famous for rainbow-colored houses and lace-making tradition. Perfect for photography. Less touristy than central Venice. Combine with Murano for glass. Vaporetto takes about 45 minutes from Venice.', duration: '3-4 hours' },
            { name: 'Watch Sunset from Rialto Bridge', details: 'Venice\'s oldest bridge over the Grand Canal offers spectacular sunset views. Very crowded but worth it. For fewer crowds, walk to nearby Fondaco dei Tedeschi rooftop terrace (free, book ahead).', duration: '30-60 minutes' }
        ]
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
        thingsToDo: [
            { name: 'See a Broadway Show', details: 'The Theater District offers world-class musicals and plays. Book in advance for popular shows or try TKTS booth in Times Square for same-day discounted tickets. Matinees available Wednesdays and weekends.', duration: '2.5-3 hours' },
            { name: 'Central Park Exploration', details: 'The 843-acre green heart of Manhattan offers endless discoveries. Visit Bethesda Fountain, Strawberry Fields, rowboats at Loeb Boathouse, and the Ramble. Rent bikes for the full Loop road experience.', duration: '2-4 hours' },
            { name: 'Walk Across Brooklyn Bridge', details: 'Iconic 1883 bridge offers stunning Manhattan skyline views. Start from Brooklyn for best photos. Continue to DUMBO for waterfront parks and pizza at Juliana\'s or Grimaldi\'s. Best at sunset or night.', duration: '1-2 hours' },
            { name: 'Top of the Rock at Sunset', details: 'Rockefeller Center\'s observation deck offers unobstructed views including the Empire State Building. Book sunset slots in advance. Three outdoor decks on different levels. Central Park stretches north.', duration: '1-1.5 hours' },
            { name: 'Pizza Pilgrimage', details: 'NYC pizza is legendary. Try Joe\'s Pizza (classic slice), Prince Street Pizza (spicy square), Di Fara (Brooklyn institution), or Lucali (romantic). Different boroughs have different styles worth comparing.', duration: '2-3 hours' },
            { name: 'Walk the High Line', details: 'Elevated park built on former railway tracks through West Chelsea. Art installations, gardens, and views of the Hudson. Extends 1.45 miles. Combine with Chelsea Market food hall and Whitney Museum.', duration: '1-2 hours' },
            { name: 'Statue of Liberty & Ellis Island', details: 'Book ferry tickets well in advance, especially for crown access. Ellis Island immigration museum is deeply moving. Allow full day. Security screening similar to airports. Bring snacks.', duration: '4-5 hours' }
        ]
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
        thingsToDo: [
            { name: 'South Rim Viewpoints', details: 'The most accessible rim with stunning viewpoints. Mather Point is the classic first view. Shuttle buses connect viewpoints. Desert View Watchtower offers unique perspective. Arrive for sunrise or sunset.', duration: '3-4 hours' },
            { name: 'Hike Bright Angel Trail', details: 'Most popular inner canyon trail starts at rim. Day hikers should not attempt to reach the river. Ooh Aah Point (1.8 miles) or 3-Mile Resthouse are good turnarounds. Bring plenty of water. Start early.', duration: '3-5 hours' },
            { name: 'Helicopter Tour', details: 'Aerial views reveal the canyon\'s massive scale impossible to grasp from ground. Tours departing Grand Canyon Airport or Las Vegas available. Sunrise and sunset flights are magical but more expensive.', duration: '1-2 hours' },
            { name: 'Star Gazing', details: 'One of the world\'s best dark sky parks. Ranger-led astronomy programs at South Rim. Milky Way visible on moonless nights. Bring warm layers - even summer nights are cold at 7000ft elevation.', duration: '2-3 hours' },
            { name: 'Rim Trail Walking', details: 'Mostly paved 13-mile trail along the South Rim connecting viewpoints. Can walk entire stretch or sections. Shuttles make one-way walks easy. Spectacular at all hours.', duration: '1-4 hours' },
            { name: 'Sunrise at Mather Point', details: 'Watch colors transform the canyon as sun rises. Arrive 30 minutes before sunrise for parking and best spots. Temperature drops significantly at night, dress warmly. Magical photo opportunities.', duration: '1-2 hours' }
        ]
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
        thingsToDo: [
            { name: 'Grand Palace & Wat Phra Kaew', details: 'Thailand\'s most sacred site houses the Emerald Buddha. Strict dress code enforced (cover shoulders and knees). Go early morning to beat heat and crowds. Allow 2-3 hours for full exploration.', duration: '2-3 hours' },
            { name: 'Wat Pho Reclining Buddha', details: 'Marvel at the 46-meter golden reclining Buddha. Also birthplace of Thai massage - get one on site! Less crowded than Grand Palace, especially morning. Mother-of-pearl feet are stunning. 500 Buddha images throughout.', duration: '1-2 hours' },
            { name: 'Street Food Night Tour', details: 'Chinatown (Yaowarat Road) comes alive after dark with best street food. Try pad thai, mango sticky rice, boat noodles, and fresh seafood. Join organized tour or explore independently. Bring appetite!', duration: '2-3 hours' },
            { name: 'Chatuchak Weekend Market', details: 'One of world\'s largest markets with 15,000+ stalls. Opens Saturday-Sunday 6am-6pm. Arrive early to beat heat. Clothing, antiques, art, pets, food. Bring cash and bargaining skills. Get lost on purpose.', duration: '3-4 hours' },
            { name: 'Temple Tour by Longtail Boat', details: 'See Bangkok from the Chao Phraya River and canals. Hire longtail boat in Thonburi to visit Wat Arun (Temple of Dawn) and canal communities. Negotiate price before boarding. Combine with riverside lunch.', duration: '2-3 hours' },
            { name: 'Rooftop Bar at Sunset', details: 'Bangkok\'s skyline views are spectacular from rooftop bars. Try Sirocco (The Hangover 2 fame), Vertigo, or Octave. Smart casual dress code. Prices high but worth it for sunset cocktails above the chaos.', duration: '2-3 hours' }
        ]
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
        thingsToDo: [
            { name: 'Phi Phi Islands Day Trip', details: 'Stunning islands made famous by The Beach movie. Maya Bay reopened with visitor limits. Snorkeling, kayaking, and beach time. Book early for speedboat tours. Avoid stormy season (May-October).', duration: 'Full day' },
            { name: 'Phang Nga Bay & James Bond Island', details: 'Iconic limestone karsts rising from emerald water. Sea kayaking through caves and lagoons. Visit the famous James Bond Island (The Man with the Golden Gun). Best on calm weather days.', duration: 'Full day' },
            { name: 'Thai Cooking Class', details: 'Learn to make pad thai, green curry, and more. Most classes include market tour for ingredients. Hands-on experience in professional kitchens. Half-day or full-day options. Take recipes home!', duration: '4-5 hours' },
            { name: 'Visit Big Buddha', details: 'The 45-meter white marble Buddha sits on Nakkerd Hill with panoramic bay views. Dress respectfully (sarongs available). Best visited early morning or late afternoon for photos. Free entry, donations welcome.', duration: '1-2 hours' },
            { name: 'Explore Phuket Old Town', details: 'Charming Sino-Portuguese architecture, street art, cafes, and boutiques. Thai-Chinese heritage evident. Sunday Walking Street market. Great for photography and escaping beach crowds. Excellent local food.', duration: '2-3 hours' },
            { name: 'Scuba Diving or Snorkeling', details: 'Andaman Sea offers excellent visibility and marine life. Popular sites include Racha Islands, Shark Point, and Similan Islands (day trip). PADI courses available for beginners. Season: November-April.', duration: '4-6 hours' }
        ]
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
        thingsToDo: [
            { name: 'Sagrada Familia Tour', details: 'Gaudí\'s unfinished masterpiece is Barcelona\'s icon. Book tickets online weeks ahead - sells out daily. Tower access requires separate ticket. Audio guide essential. Best light in morning for Nativity Facade.', duration: '1.5-2 hours' },
            { name: 'Park Güell Exploration', details: 'Whimsical mosaic park overlooking the city. Monumental Zone requires timed tickets (book online). Free areas include nature trails. Best visited early morning or late afternoon for sunset vibes and fewer crowds.', duration: '2-3 hours' },
            { name: 'Gothic Quarter Wandering', details: 'Medieval streets reveal Roman ruins, cathedral, and hidden squares (plazas). Get intentionally lost. Small streets open to charming cafes and tapas bars. Best explored on foot, especially evening.', duration: '2-3 hours' },
            { name: 'Tapas & Wine Crawl', details: 'Barcelona tapas are legendary. Try patatas bravas, jamón ibérico, and pan con tomate. El Born and Gràcia neighborhoods have excellent bars. Dinner starts at 9 PM - adopt the Spanish schedule.', duration: '2-3 hours' },
            { name: 'La Boqueria Market', details: 'Vibrant food market off La Rambla since 1217. Fresh seafood, jamón, tropical fruits, and prepared foods. Arrive before noon to avoid tourist crush. Great for breakfast or lunch at market bars.', duration: '1-2 hours' },
            { name: 'Beach Time at Barceloneta', details: 'City beach perfect for sun, swimming, and people-watching. Chiringuitos (beach bars) serve drinks and seafood. Gets crowded on summer weekends. Combine with seaside lunch of paella at Can Paixano or nearby.', duration: '2-4 hours' }
        ]
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
        thingsToDo: [
            { name: 'Sydney Opera House Tour', details: 'Take a backstage tour of this UNESCO icon to appreciate its architecture and acoustics. Book in advance. Evening performances range from opera to contemporary music. The sails are most photogenic at sunset from the Botanic Gardens.', duration: '1-2 hours' },
            { name: 'Bondi to Coogee Coastal Walk', details: '6km clifftop walk passing stunning beaches, rock pools, and ocean views. Start at Bondi, swim at Bronte, coffee at Coogee. Allow time for beach stops. Best on sunny morning. Bus back to Bondi or continue exploring.', duration: '2-3 hours' },
            { name: 'Sydney Harbour Bridge Climb', details: 'Scale the iconic bridge for 360-degree harbor views. Various climb options from express to twilight. Not cheap but unforgettable. Book weeks ahead for weekend sunset climbs. Fear of heights? Walk across the pedestrian path for free.', duration: '2-3 hours' },
            { name: 'Ferry to Manly Beach', details: 'The 30-minute ferry ride is a Sydney experience itself. Manly offers great beaches, The Corso boardwalk, and excellent fish and chips. Return via different route past Opera House. Day trip or afternoon escape.', duration: '4-5 hours' },
            { name: 'Blue Mountains Day Trip', details: 'Stunning sandstone cliffs, eucalyptus forests, and dramatic Three Sisters formation. 90 minutes from Sydney. Bushwalks for all levels, scenic railway (world\'s steepest), and charming village of Leura. Full day recommended.', duration: 'Full day' },
            { name: 'Taronga Zoo Visit', details: 'Ferry ride + zoo with stunning harbor backdrop. Native Australian animals (koalas, kangaroos, platypus) plus global species. Sky Safari cable car offers great views. Allow full day especially with kids.', duration: '4-5 hours' }
        ]
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
        thingsToDo: [
            { name: 'At the Top - Burj Khalifa', details: 'World\'s tallest building offers views from 124th or 148th floor. Sunset tickets most popular - book weeks ahead. Don\'t miss the Dubai Fountain show at the base (every 30 mins evenings). Most iconic Dubai experience.', duration: '1-2 hours' },
            { name: 'Desert Safari & BBQ Dinner', details: 'Thrilling dune bashing in 4x4s, camel rides, sandboarding, and traditional Bedouin camp. Includes BBQ dinner, belly dancing, and stargazing. Half-day or overnight options. Early evening departure from hotels.', duration: '6-7 hours' },
            { name: 'Dubai Mall & Fountain Show', details: 'World\'s largest mall with 1,200 stores, aquarium, ice rink, and indoor theme park. The Dubai Fountain (world\'s largest choreographed fountain) performs every 30 minutes after sunset. Plan to get lost.', duration: '4-5 hours' },
            { name: 'Old Dubai Walking Tour', details: 'Discover traditional Dubai in Al Fahidi Historical District, cross Dubai Creek by abra (water taxi), and explore Gold and Spice Souks. Great contrast to modern Dubai. Bargaining expected in souks.', duration: '3-4 hours' },
            { name: 'Palm Jumeirah & Atlantis', details: 'Explore the iconic palm-shaped island. Visit Atlantis for waterpark, aquarium, or underwater restaurant. Monorail offers aerial views. Beach clubs and restaurants along the crescent. Book ahead for popular venues.', duration: '4-5 hours' },
            { name: 'Dhow Cruise Dinner', details: 'Traditional wooden boat cruise along Dubai Creek or Marina. Buffet dinner with entertainment and illuminated skyline views. Multiple cruise operators. Marina cruises showcase modern Dubai with Burj views.', duration: '2-3 hours' }
        ]
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
        thingsToDo: [
            { name: 'Tower of London Visit', details: 'Nearly 1,000 years of royal history including Crown Jewels, Beefeaters, and ravens. Book online to skip queues. Yeoman Warder tours included with entry are excellent. Allow 3-4 hours minimum. Morning visits less crowded.', duration: '3-4 hours' },
            { name: 'British Museum Exploration', details: 'World-class free museum with Rosetta Stone, Egyptian mummies, and Parthenon sculptures. Too vast for one visit - prioritize galleries. Audio guides available. Great Court restaurant for lunch. Evening events Fridays.', duration: '2-4 hours' },
            { name: 'West End Theatre Show', details: 'Legendary theater district rivals Broadway. Book in advance for popular shows or try TKTS Leicester Square for same-day discounts. Matinees Wednesdays and Saturdays. Pre-theater dinner in Soho nearby.', duration: '2.5-3 hours' },
            { name: 'Changing of the Guard', details: 'Iconic ceremony at Buckingham Palace with military bands and precision marching. 11am most days - check schedule. Arrive 45 minutes early for good views. Combine with Green Park stroll to Westminster.', duration: '45 minutes' },
            { name: 'Borough Market Food Tour', details: 'London\'s oldest food market under railway arches. Sample artisan cheeses, fresh bread, olives, and international street food. Thursday-Saturday are fullest. Arrive hungry. Great for lunch or foodie gifts.', duration: '2-3 hours' },
            { name: 'Thames River Cruise', details: 'See London landmarks from the water. Hop-on-hop-off services connect major attractions. Evening cruises offer illuminated views of Parliament and Tower Bridge. Various operators near Westminster Pier.', duration: '1-2 hours' }
        ]
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
        thingsToDo: [
            { name: 'Gardens by the Bay Supertree Grove', details: 'Futuristic vertical gardens up to 50m tall. OCBC Skyway connects trees for aerial views. Free to see, paid Cloud Forest and Flower Dome are worthwhile. Garden Rhapsody light show at 7:45PM and 8:45PM nightly - spectacular and free.', duration: '2-3 hours' },
            { name: 'Hawker Center Food Tour', details: 'Singapore\'s soul is in its hawker centers. Try Hainanese chicken rice, laksa, char kway teow, and chili crab. Maxwell Food Centre, Lau Pa Sat, and Chinatown Complex are popular. Michelin-starred hawker stalls exist here!', duration: '2-3 hours' },
            { name: 'Marina Bay Sands SkyPark', details: 'Iconic rooftop infinity pool (hotel guests only) but observation deck open to all. Best at sunset for skyline views. Book tickets online. Combine with Spectra light and water show at waterfront (free nightly).', duration: '1-2 hours' },
            { name: 'Singapore Zoo & Night Safari', details: 'World-class open-concept zoo by day, unique Night Safari after dark. See nocturnal animals in naturalistic habitats. Book ahead for Night Safari - very popular. Combine both for full day experience.', duration: '4-6 hours' },
            { name: 'Sentosa Island Day', details: 'Entertainment island with Universal Studios, S.E.A. Aquarium, beaches, and cable car. One day minimum for highlights. Book attraction tickets online for discounts. Cable car from HarbourFront offers scenic entry.', duration: 'Full day' },
            { name: 'Explore Little India & Arab Street', details: 'Vibrant ethnic quarters with temples, mosques, shops, and authentic food. Sri Veeramakaliamman Temple and Sultan Mosque are highlights. Great for shopping - textiles, spices, perfumes. Sunday evenings especially lively.', duration: '2-3 hours' }
        ]
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
        thingsToDo: [
            { name: 'Snorkeling at House Reef', details: 'Most resorts have excellent house reefs steps from your villa. See turtles, reef sharks, rays, and colorful fish without a boat. Free equipment usually provided. Early morning and late afternoon best for marine life.', duration: '1-2 hours' },
            { name: 'Sunset Dolphin Cruise', details: 'Traditional dhoni boats take you to spot spinner dolphins at sunset. High success rate. Champagne and canapés often included. Golden hour photography opportunities. One of the most magical Maldives experiences.', duration: '2 hours' },
            { name: 'Underwater Restaurant Experience', details: 'Dine surrounded by ocean at restaurants like Ithaa or Subsix. Book well in advance - limited seating. Expensive but unforgettable. Marine life passes by your table. Some offer underwater breakfast or lunch options.', duration: '2-3 hours' },
            { name: 'Private Sandbank Picnic', details: 'Your resort can arrange a private picnic on a pristine sandbank. Just you, partner, champagne, and endless ocean. Ultimate romantic experience. Some offer overnight glamping options on sandbanks.', duration: '3-4 hours' },
            { name: 'Spa Over the Ocean', details: 'World-class spas with overwater treatment rooms. Glass floor panels reveal marine life below. Traditional Maldivian treatments use coconut and local ingredients. Book signature treatments in advance.', duration: '2-3 hours' },
            { name: 'Night Snorkel for Mantas', details: 'Some atolls have manta ray feeding stations. Night snorkels let you float above graceful mantas attracted by lights. Hanifaru Bay (seasonal) offers large gatherings. Magical, bucket-list experience.', duration: '2 hours' }
        ]
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
        thingsToDo: [
            { name: 'Jungfraujoch - Top of Europe', details: 'Europe\'s highest railway station at 3,454m. Stunning Aletsch Glacier views, ice palace, and sphinx observation terrace. Book early, start early. Weather dependent - check forecasts. Clear days most magical.', duration: '5-6 hours' },
            { name: 'Glacier Express Journey', details: 'Seven-hour scenic train between Zermatt and St. Moritz crossing 291 bridges and 91 tunnels. Panoramic windows showcase alpine beauty. Reserve Excellence Class for gourmet dining. Book months ahead in peak season.', duration: '7-8 hours' },
            { name: 'Hike in Lauterbrunnen Valley', details: '72 waterfalls cascade down sheer cliffs in this valley that inspired Tolkien. Easy valley walks or challenging mountain trails. Cable cars access higher viewpoints. Staubbach Falls most iconic. Summer meadows spectacular.', duration: '3-5 hours' },
            { name: 'Gondola to Klein Matterhorn', details: 'Cable car ride to Europe\'s highest station (3,883m) with year-round snow and glacier views. See the iconic Matterhorn up close. January-February have clearest skies. Snow gear useful even in summer.', duration: '3-4 hours' },
            { name: 'Swiss Chocolate & Cheese Tasting', details: 'Visit Maison Cailler chocolate factory in Broc or Grèye\'s cheese factories. Learn production, enjoy generous tastings. Many offer workshops. Combine with scenic drives through rolling hills. Sweet teeth rejoice.', duration: '2-3 hours' },
            { name: 'Paragliding in Interlaken', details: 'Tandem flights over lakes and mountains - no experience needed. One of the world\'s best paragliding locations. 15-20 minute flights with photos/video. Weather dependent. Bucket-list adrenaline with stunning views.', duration: '2-3 hours' }
        ]
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
        thingsToDo: [
            { name: 'Watch Sunset in Oia', details: 'The world\'s most famous sunset draws crowds to Oia\'s castle ruins. Arrive 1-2 hours early for best spots. Alternatively, book restaurant with caldera view or watch from sailboat. Equally stunning from Fira or Imerovigli.', duration: '2 hours' },
            { name: 'Wine Tasting Tour', details: 'Santorini\'s volcanic soil produces unique wines. Visit 3-4 wineries sampling Assyrtiko and Vinsanto. Many offer caldera views. Sunset wine tours most popular. Some include food pairings. Book ahead in peak season.', duration: '3-4 hours' },
            { name: 'Catamaran Caldera Cruise', details: 'Sail around the volcanic caldera, swim at hot springs, snorkel, and BBQ lunch. Sunset cruises with dinner most romantic. Options from budget to luxury. Swimming in warm volcanic waters unique experience.', duration: '5-6 hours' },
            { name: 'Explore Akrotiri Ruins', details: 'Remarkably preserved Bronze Age city buried by volcanic eruption 3,600 years ago. Called "Minoan Pompeii." See multi-story buildings, pottery, and frescoes. Covered site - good rainy day activity. Guided tours recommended.', duration: '1.5-2 hours' },
            { name: 'Hike Fira to Oia', details: 'Dramatic 10km clifftop trail with continuous caldera views. Pass through Imerovigli (highest point). Takes 3-4 hours at leisure. Start early to avoid midday heat. End with Oia sunset. Bus back.', duration: '3-4 hours' },
            { name: 'Swim at Red & Black Beaches', details: 'Volcanic beaches with dramatic colored sand. Red Beach most famous but crowded and requires careful cliff walk. Perissa/Perivolos black sand beaches have facilities, restaurants, and beach clubs. Water shoes recommended.', duration: '2-4 hours' }
        ]
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
        thingsToDo: [
            { name: 'Hagia Sophia & Blue Mosque', details: 'Two iconic structures facing each other. Hagia Sophia (now mosque) stuns with Byzantine mosaics and massive dome. Blue Mosque famous for 20,000 blue tiles. Dress modestly (coverings available). Visit early morning.', duration: '2-3 hours' },
            { name: 'Traditional Turkish Bath (Hammam)', details: 'Centuries-old bathing ritual includes steam, scrub, and massage. Historic hammams like Çemberlitaş or Çağaloğlu offer authentic experience. Book in advance. Separate sections for men and women. Deeply relaxing.', duration: '1.5-2 hours' },
            { name: 'Bosphorus Cruise', details: 'See Ottoman palaces, fortresses, and both continents from the water. Short tourist cruises or full-day ferries to Black Sea. Sunset cruises most atmospheric. Public ferries are cheap and authentic.', duration: '1.5-3 hours' },
            { name: 'Grand Bazaar Shopping', details: 'One of world\'s oldest and largest covered markets - 4,000+ shops. Carpets, ceramics, jewelry, spices, lanterns. Bargaining expected (start at 50% of asking). Get lost intentionally. Tea offered in shops.', duration: '2-3 hours' },
            { name: 'Turkish Breakfast Feast', details: 'Legendary spread includes cheese, olives, eggs, tomatoes, cucumbers, honey, jam, and endless tea. Van Kahvaltı Evi popular but locals have favorites everywhere. Weekend brunches can last hours. Come hungry.', duration: '1.5-2 hours' },
            { name: 'Whirling Dervishes Ceremony', details: 'Sufi spiritual practice beautiful to witness. Galata Mevlevi Museum hosts authentic weekly ceremonies. Tourist shows run nightly at various venues. Deeply moving spiritual tradition even for non-religious visitors.', duration: '1-1.5 hours' }
        ]
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
        thingsToDo: [
            { name: 'Sunrise Hot Air Balloon Flight', details: 'The world\'s most famous balloon experience. Hundreds of balloons rise over fairy chimneys at dawn. Book weeks ahead with reputable company. Weather dependent - flexible dates advised. Most magical bucket-list experience.', duration: '3 hours' },
            { name: 'Göreme Open Air Museum', details: 'UNESCO site with Byzantine rock-cut churches and frescoes from 10th-12th centuries. Dark Church has best preserved paintings (extra fee). Audio guides available. Go early or late afternoon for fewer crowds.', duration: '2-3 hours' },
            { name: 'Underground City Exploration', details: 'Ancient multi-level cities carved underground for protection. Kaymaklı and Derinkuyu are largest (8 levels deep!). Narrow passages - not for claustrophobic. Guided tours explain fascinating history. Bring layers - it\'s cool underground.', duration: '1.5-2 hours' },
            { name: 'Valley Hikes', details: 'Rose Valley (sunset views), Love Valley (phallic rock formations), and Pigeon Valley offer unique landscapes. Easy to moderate trails. Self-guided or with local guide. Spring wildflowers spectacular. Carry water.', duration: '2-4 hours' },
            { name: 'ATV Tour at Sunset', details: 'Race through valleys and viewpoints on all-terrain vehicles. Sunset tours most popular for photography. Dusty but thrilling. Various durations available. Helmets provided. Fun alternative to hiking.', duration: '2-3 hours' },
            { name: 'Pottery Workshop in Avanos', details: 'Town famous for pottery since Hittite era. Watch masters work and try your hand at the wheel. Purchase authentic ceramics. Red clay from Kizılırmak River used for centuries. Fun hands-on experience.', duration: '1-2 hours' }
        ]
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
        thingsToDo: [
            { name: 'Pyramids of Giza Tour', details: 'Last surviving Ancient Wonder. Hire licensed guide to explain history. Enter Great Pyramid (extra fee, claustrophobic). Best visited early morning for fewer crowds and cooler temperatures. Camel rides available but negotiate firmly.', duration: '3-4 hours' },
            { name: 'Egyptian Museum (or Grand Egyptian Museum)', details: 'Tutankhamun\'s treasures, mummies, and 120,000+ artifacts. Grand Egyptian Museum near pyramids is new spectacular venue. Allow 3+ hours minimum. Guides bring artifacts to life. Photography restrictions vary.', duration: '3-4 hours' },
            { name: 'Felucca Nile Cruise', details: 'Traditional sailboat ride at sunset. Peaceful escape from Cairo\'s chaos. Basic boats for 1-2 hours or longer trips with dinner. Negotiate price before boarding. Views of city skyline and riverbanks.', duration: '1-2 hours' },
            { name: 'Khan el-Khalili Bazaar', details: 'Medieval market labyrinth selling jewelry, spices, perfumes, and souvenirs. Bargaining essential. Historic coffee houses like El Fishawy serve Turkish coffee since 1773. Best experienced evening when cooler and busier.', duration: '2-3 hours' },
            { name: 'Sound & Light Show at Pyramids', details: 'Pyramids and Sphinx illuminated with dramatic narration of ancient history. Multiple shows nightly in different languages. Check schedule. Atmospheric experience though somewhat dated production. Cool evening alternative.', duration: '1 hour' },
            { name: 'Coptic Cairo Exploration', details: 'Ancient Christian quarter with beautiful churches, synagogue, and peaceful atmosphere. Hanging Church most famous. Explore narrow streets. Good contrast to Islamic and pharaonic sites. Combine with lunch at local restaurant.', duration: '2-3 hours' }
        ]
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
        thingsToDo: [
            { name: 'Milford Sound Day Cruise', details: 'New Zealand\'s most famous fiord with waterfalls, seals, and dolphins. Day trips from Queenstown include stunning scenic drive. Overnight cruises more intimate. Rainy days actually enhance the waterfalls. Book ahead in summer.', duration: '12-13 hours' },
            { name: 'Bungee Jump at Kawarau Bridge', details: 'Birthplace of commercial bungee jumping. 43m plunge over turquoise Kawarau River. Tandem jumps available for the scared-but-determined. Photo/video packages capture the moment. Minimum age 10.', duration: '2-3 hours' },
            { name: 'Shotover Jet Boat Ride', details: 'Thrilling jet boat ride through narrow canyons at high speeds with 360-degree spins. Iconic Queenstown experience. Wet weather gear provided. Multiple daily departures. Fun for all ages.', duration: '1 hour' },
            { name: 'Wine Tasting in Central Otago', details: 'World-renowned Pinot Noir region with stunning vineyard settings. Half-day tours visit 3-4 wineries with tastings. Lunch at winery restaurant recommended. Bike and wine tours available.', duration: '4-5 hours' },
            { name: 'Skydive with Mountain Views', details: 'Jump from 15,000ft over Remarkables mountains and Lake Wakatipu. Stunning freefall over Middle-earth scenery. Tandem jumps - no experience needed. Weather dependent but worth the wait.', duration: '3-4 hours' },
            { name: 'Lord of the Rings Tour', details: 'Visit filming locations from the epic trilogy. Glenorchy area featured in many scenes. Guided tours explain movie magic and show movie clips at locations. Essential for LOTR fans.', duration: '4-6 hours' }
        ]
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
        thingsToDo: [
            { name: 'Overnight Cruise', details: 'The best way to experience Halong Bay. Traditional junk boats sail past karsts at sunset. Fresh seafood dinner, sunrise tai chi, and kayaking included. 2-night cruises explore further. Book reputable operators.', duration: '1-2 days' },
            { name: 'Kayaking Through Karsts', details: 'Paddle through hidden lagoons and limestone caves. Most cruises include kayaking. Early morning offers calmest waters and best light. Some areas require passing through low tunnels - magical experience.', duration: '1-2 hours' },
            { name: 'Sung Sot Cave Exploration', details: 'Halong Bay\'s largest cave with dramatic chambers and stalactites. Many steps to climb but worth it. Lighting enhances natural beauty. Part of most cruise itineraries.', duration: '1 hour' },
            { name: 'Visit Floating Fishing Village', details: 'See how locals have lived on the water for generations. Rowboat tours through villages. Learn about pearl farming. Some cruises include visits - check itineraries. Fascinating cultural experience.', duration: '1 hour' },
            { name: 'Sunrise Tai Chi on Deck', details: 'Many cruises offer morning tai chi sessions as sun rises over the bay. Gentle movements with stunning backdrop. No experience needed. Peaceful start to the day. Tea served afterwards.', duration: '30-45 minutes' },
            { name: 'Ti Top Island Hike', details: 'Climb 400 steps for panoramic bay views. Small beach at base for swimming. Popular stop on day trips and cruises. Best visited early or late to avoid midday crowds and heat.', duration: '1 hour' }
        ]
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
        thingsToDo: [
            { name: 'Chichen Itza Day Trip', details: 'One of the New Seven Wonders. El Castillo pyramid dominates this Maya city. Leave early to beat crowds and heat. Equinox serpent shadow phenomenon March/September. Hire guide for history. Book no-line access.', duration: '8-10 hours' },
            { name: 'Swim in Cenotes', details: 'Natural limestone sinkholes with crystal-clear water sacred to Maya. Thousands exist - try Ik Kil (popular), Gran Cenote (near Tulum), or Cenote Dos Ojos (snorkeling/diving). Life vests often required. Magical swimming.', duration: '2-3 hours' },
            { name: 'Tulum Ruins Visit', details: 'Cliff-top Maya ruins overlooking Caribbean Sea. Stunning photo opportunities. Visit early morning before heat and crowds. Beach below the ruins allows swimming. Combine with cenotes nearby.', duration: '2-3 hours' },
            { name: 'Snorkel with Sea Turtles', details: 'Akumal Bay offers reliable turtle encounters in shallow water. Morning visits best. Respect guidelines - keep distance from turtles. Life vests mandatory. Magical experience swimming with these gentle creatures.', duration: '2-3 hours' },
            { name: 'Isla Mujeres Day Trip', details: 'Charming island 20 minutes by ferry from Cancun. Rent golf cart to explore. Beautiful beaches, especially Playa Norte. Great seafood restaurants. More relaxed vibe than Cancun. Fantastic for day escape.', duration: '5-6 hours' },
            { name: 'Mexican Cooking Class', details: 'Learn to make mole, ceviche, guacamole, and other authentic dishes. Market tour often included. Fun hands-on experience. Take recipes home. Many options from casual to gourmet. Tequila tastings often included.', duration: '3-4 hours' }
        ]
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
        thingsToDo: [
            { name: 'Get Lost in the Souks', details: 'Labyrinthine markets selling spices, leather, carpets, ceramics, and metalwork. Bargaining essential - start at 30-50% of asking. Don\'t be afraid to walk away. Hire guide first time to understand layout. Mind your belongings.', duration: '2-3 hours' },
            { name: 'Traditional Hammam Experience', details: 'Moroccan bath ritual with steam, black soap scrub, and massage. Touristy hammams are luxurious; local ones are authentic. Heritage Spa and Les Bains de Marrakech are popular. Separate times for men/women typically.', duration: '2-3 hours' },
            { name: 'Moroccan Cooking Class', details: 'Learn tagine, couscous, pastilla, and mint tea preparation. Many include market tour to select ingredients. Riads and cooking schools offer classes. Hands-on experience. Take recipes home.', duration: '3-4 hours' },
            { name: 'Jemaa el-Fnaa at Night', details: 'The main square transforms after sunset. Food stalls, snake charmers, musicians, storytellers, and henna artists create electric atmosphere. Start with rooftop café drink, then dive in. Watch for scams.', duration: '2-3 hours' },
            { name: 'Visit Majorelle Garden', details: 'Stunning Art Deco garden created by French painter, later owned by YSL. Cobalt blue villa, exotic plants, and peaceful atmosphere. Book timed tickets online. Combine with YSL Museum next door. Morning best for photos.', duration: '1-2 hours' },
            { name: 'Sahara Desert Trip', details: 'Multi-day trip to desert dunes beyond the Atlas Mountains. Camel trekking, Berber camps, and spectacular stargazing. 3-day trips most common. Long drives but unforgettable. Book with reputable agency.', duration: '2-3 days' }
        ]
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
        thingsToDo: [
            { name: 'Ride Historic Tram 28', details: 'Iconic yellow tram winds through Lisbon\'s oldest neighborhoods. Very crowded - board at start points. Beware pickpockets. Alternative: just photograph it and walk the route. Early morning less packed.', duration: '30-45 minutes' },
            { name: 'Day Trip to Sintra', details: 'Fairytale palaces in the UNESCO World Heritage hills. Pena Palace (colorful), Quinta da Regaleira (mystery/gardens), and Moorish Castle offer different experiences. Book tickets online. One day minimum.', duration: '6-8 hours' },
            { name: 'Taste Pastéis de Nata', details: 'Portugal\'s famous custard tarts invented at Pastéis de Belém (since 1837). Long queues but fast-moving. Sprinkle with cinnamon and powdered sugar. Best eaten warm. Try others at Manteigaria.', duration: '30 minutes' },
            { name: 'Fado Show in Alfama', details: 'Soulful Portuguese music in intimate venues. Alfama has authentic spots. Meals included at most shows. A Baiuca and Mesa de Frades are recommended. Emotional and beautiful. Book ahead for best venues.', duration: '2-3 hours' },
            { name: 'Walk Through Alfama', details: 'Oldest neighborhood with narrow streets, street art, viewpoints (miradouros), and local life. Get intentionally lost. Morning light best for photos. Miradouro da Senhora do Monte and Miradouro Portas do Sol offer stunning views.', duration: '2-3 hours' },
            { name: 'Sunset Drinks at Rooftop Bar', details: 'Lisbon\'s hills mean incredible rooftops. Try Park (hidden on parking garage rooftop), TOPO, or Bairro Alto Hotel. Toast with Portuguese wine or gin tonic as sun sets over Tagus River. Reserve weekend evenings.', duration: '1-2 hours' }
        ]
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
        thingsToDo: [
            { name: 'Visit Christ the Redeemer', details: 'Iconic statue atop Corcovado mountain. Take train through Tijuca Forest for scenic journey or van for speed. Book tickets online. Go early or late for fewer clouds and crowds. Sunset views spectacular.', duration: '3-4 hours' },
            { name: 'Cable Car to Sugarloaf', details: 'Two cable car rides to 396m peak. Panoramic views of bay, beaches, and Christ. Sunset timing is magical. First car to Urca Hill has bar with views. Book online for shorter lines.', duration: '2-3 hours' },
            { name: 'Beach Day at Ipanema/Copacabana', details: 'Iconic beaches with different vibes. Ipanema (neighborhoods marked by posts - 8-10 is young/trendy, 7-8 is LGBTQ+ friendly). Copacabana longer/more touristy. Rent chairs/umbrellas. Stay for sunset at Arpoador rock.', duration: '3-5 hours' },
            { name: 'Samba Class or Show', details: 'Learn basic samba steps or watch professionals. Bar do Mineiro and Rio Scenarium in Lapa offer authentic experiences. Monday night at Pedra do Sal is local favorite. Pre-Carnival (Feb) is peak.', duration: '2-3 hours' },
            { name: 'Explore Santa Teresa', details: 'Bohemian hillside neighborhood with cobblestones, street art, and artistic vibe. Take restored bonde (tram) up. Great restaurants and bars. Parque das Ruinas has free city views. Safer during daytime.', duration: '3-4 hours' },
            { name: 'Helicopter Tour (Optional)', details: 'Dramatic aerial views of both Sugarloaf and Christ together with beaches and mountains. Not cheap but incredible photos. Various durations from 7-60 minutes. Departs from multiple locations.', duration: '1-2 hours' }
        ]
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
        thingsToDo: [
            { name: 'Sunrise Trek at Mount Batur', details: 'Wake at 2am to climb active volcano and watch dramatic sunrise above clouds. Guides mandatory. Breakfast (eggs cooked in volcanic steam!) at summit. Moderate difficulty. Life-changing views. Book ahead.', duration: '6-7 hours' },
            { name: 'Ubud Monkey Forest Walk', details: 'Sacred sanctuary with temples and 700+ Balinese macaques. Don\'t bring loose items or make eye contact. Beautiful moss-covered statues and jungle atmosphere. Early morning less crowded and cooler.', duration: '1-2 hours' },
            { name: 'Tegallalang Rice Terrace Visit', details: 'Iconic cascading rice paddies. Multiple viewpoints and swings for photos. Get there early to beat tourist crowds. Support local farmers at small cafes. Best during rainy season when brightest green.', duration: '1-2 hours' },
            { name: 'Uluwatu Temple Sunset', details: 'Clifftop temple with dramatic Indian Ocean views. Famous Kecak fire dance performance at sunset. Monkeys here are aggressive - secure belongings. Modest dress required (sarongs provided). Arrive early for best seats.', duration: '2-3 hours' },
            { name: 'Traditional Balinese Spa', details: 'World-class spas at very affordable prices. Try flower bath, body scrub, and Balinese massage. Ubud has beautiful jungle-setting spas. Book signature treatments in advance. Ultimate relaxation.', duration: '2-3 hours' },
            { name: 'Attend Temple Ceremony', details: 'Bali\'s Hindu ceremonies are colorful and welcoming. Full moon ceremonies (odalan) at major temples. Dress modestly in sarong (rentals available). Observe respectfully. Beautiful cultural experience.', duration: '1-2 hours' }
        ]
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
        thingsToDo: [
            { name: 'Hanbok Photoshoot at Gyeongbokgung', details: 'Rent traditional Korean dress (hanbok) for free palace entry and incredible photos. Rental shops surround the palace. Full-day rental is cheap. Changing of guard ceremony 10am and 2pm. Most iconic Seoul experience.', duration: '3-4 hours' },
            { name: 'Korean BBQ Dinner', details: 'Grill your own meat at the table - quintessential Korean dining. Try popular spots in Mapo-gu or tourist-friendly Myeongdong. Multiple meat options plus endless banchan (side dishes). Lettuce wraps essential. Come hungry.', duration: '1.5-2 hours' },
            { name: 'K-Beauty Shopping in Myeongdong', details: 'Korea\'s beauty industry capital. Hundreds of skincare and makeup shops with samples galore. Get free sheet masks just for browsing. Olive Young and Innisfree flagship stores. Best prices on duty-free.', duration: '2-3 hours' },
            { name: 'DMZ Tour', details: 'Visit the Demilitarized Zone between North and South Korea. See Joint Security Area and Third Infiltration Tunnel. Book official tour. Passport required. Dress code enforced. Fascinating and sobering experience.', duration: '5-6 hours' },
            { name: 'Nightlife in Hongdae', details: 'University area with indie music, street performers, clubs, and creative energy. Best on weekends. Club culture starts after midnight. Great for people-watching and street food. Young, energetic atmosphere.', duration: '3-4 hours' },
            { name: 'Visit N Seoul Tower', details: 'Iconic tower on Namsan Mountain. Cable car ride up, or hike through park. Observation deck views, love lock terrace, and restaurants. Visit at night when city lights sparkle. Sunset to night ideal.', duration: '2-3 hours' }
        ]
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
        thingsToDo: [
            { name: 'Amber Fort Tour', details: 'Magnificent hilltop fortress with intricate designs, mirror work, and stunning views. Hire guide to explain history. Elephant rides controversial but available. Jeep rides alternative. Early morning cooler and less crowded.', duration: '2-3 hours' },
            { name: 'Sunrise/Sunset at Nahargarh Fort', details: 'Overlooking the Pink City, this fort offers the best panoramic views. Sunset creates golden light on buildings below. Cafe at the top. Drive or walk up (challenging climb). Cityscape photography paradise.', duration: '2-3 hours' },
            { name: 'Bazaar Shopping Spree', details: 'Johari Bazaar (jewelry), Bapu Bazaar (textiles), and Tripolia Bazaar (lacquer bangles) offer authentic Rajasthani crafts. Bargaining essential. Silver jewelry, block-printed fabrics, and blue pottery popular.', duration: '2-3 hours' },
            { name: 'Block Printing Workshop', details: 'Learn traditional Rajasthani textile art. Hands-on experience carving blocks and printing fabric. Take your creation home. Various studios near Amber Road. Meaningful souvenir. Book in advance.', duration: '2-3 hours' },
            { name: 'Traditional Rajasthani Dinner', details: 'Experience thali dinner with dozens of dishes. Chokhi Dhani offers village atmosphere with folk performances. Laxmi Mishthan Bhandar for street food. Try dal baati churma and ghewar sweets. Vegetarian cuisine shines.', duration: '2-3 hours' },
            { name: 'Walk Through Pink City', details: 'The old walled city was painted pink in 1876 to welcome Prince Albert. Hawa Mahal (Palace of Winds) is most iconic. City Palace museum, Jantar Mantar observatory. Early morning walking best for photos.', duration: '3-4 hours' }
        ]
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
        thingsToDo: [
            { name: 'Canoe on Lake Louise', details: 'Paddle across turquoise waters with Victoria Glacier backdrop. Iconic Canadian Rockies experience. Rental at Fairmont Boathouse. Early morning for calm water and fewer people. Lake open mid-June to October.', duration: '1-2 hours' },
            { name: 'Drive Icefields Parkway', details: 'One of world\'s most scenic drives connecting Banff and Jasper. 230km of glaciers, waterfalls, and wildlife. Stop at Peyto Lake, Columbia Icefield, and Athabasca Falls. Allow full day, preferably two.', duration: 'Full day' },
            { name: 'Wildlife Watching', details: 'Elk, deer, bears, mountain goats, and more roam freely. Best viewing early morning and dusk. Bow Valley Parkway good for sightings. Keep safe distance (especially bears). Binoculars helpful.', duration: '2-3 hours' },
            { name: 'Banff Hot Springs Soak', details: 'Natural hot springs at top of Sulphur Mountain. Historic bathhouse setting with Rockies views. Warm year-round. Combine with Banff Gondola nearby for complete mountain experience. Very relaxing after hiking.', duration: '1-2 hours' },
            { name: 'Hike to Moraine Lake', details: 'Famous "Twenty Dollar Bill View" of turquoise lake and Ten Peaks. Shuttle or early arrival required (parking fills by 7am in summer). Rockpile Trail easy; Larch Valley moderate and stunning in fall.', duration: '2-5 hours' },
            { name: 'Banff Gondola', details: 'Eight-minute ride to Sulphur Mountain summit with 360-degree views. Boardwalk at top leads to historic weather station. Restaurants and interpretive center. Sunset visits magical. Dress warmly - it\'s cold at top!', duration: '2-3 hours' }
        ]
    },
    // NEW DESTINATIONS FROM EUROPAMUNDO & STARTOURS
    // CZECH REPUBLIC
    {
        id: 32,
        name: 'Prague',
        country: 'Czech Republic',
        countryId: 'czechrepublic',
        region: 'europe',
        category: ['heritage', 'cultural', 'romantic', 'nightlife'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800',
        rating: 4.8,
        duration: '3-4 days',
        bestTime: 'Apr-Jun, Sep-Oct',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        visaPolicy: 'schengen',
        description: 'The City of a Hundred Spires enchants with its Gothic architecture, baroque palaces, and medieval charm. Prague\'s Old Town Square, Charles Bridge, and Prague Castle create a fairytale atmosphere. Combine with excellent beer, affordable prices, and vibrant nightlife.',
        highlights: ['Charles Bridge', 'Prague Castle', 'Old Town Square', 'Astronomical Clock', 'Jewish Quarter'],
        thingsToDo: [
            { name: 'Walk Across Charles Bridge', details: 'Stroll the iconic 14th-century stone bridge adorned with 30 baroque statues. Visit at sunrise or after 10 PM to avoid crowds. Street artists and musicians add atmosphere. Each statue has a legend worth discovering.', duration: '30-45 minutes' },
            { name: 'Prague Castle Complex Tour', details: 'Explore the world\'s largest ancient castle complex. See St. Vitus Cathedral, Old Royal Palace, and Golden Lane. Combined tickets offer best value. The changing of the guard ceremony happens every hour.', duration: '3-4 hours' },
            { name: 'Watch the Astronomical Clock', details: 'Every hour from 9am-11pm, the medieval clock performs its show as apostle figures parade. Arrive 10 minutes early for a good view. The clock has been operating since 1410 - an engineering marvel.', duration: '30 minutes' },
            { name: 'Czech Beer Tasting', details: 'The Czech Republic has the world\'s highest beer consumption per capita. Visit historic breweries like U Fleků (since 1499) or modern craft bars. Try Pilsner Urquell, Staropramen, or local microbrews.', duration: '2-3 hours' },
            { name: 'Jewish Quarter (Josefov) Tour', details: 'One of Europe\'s best-preserved Jewish quarters with historic synagogues and the haunting Old Jewish Cemetery. The Pinkas Synagogue memorial to Holocaust victims is deeply moving.', duration: '2-3 hours' },
            { name: 'Day Trip to Kutná Hora', details: 'Visit the famous Sedlec Ossuary (Bone Church) decorated with human bones. The UNESCO-listed town also features stunning Gothic architecture and silver mining history.', duration: '4-5 hours' }
        ]
    },
    // AUSTRIA
    {
        id: 33,
        name: 'Vienna',
        country: 'Austria',
        countryId: 'austria',
        region: 'europe',
        category: ['heritage', 'cultural', 'food', 'romantic'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1516550893885-a3b8f54b1a68?w=800',
        rating: 4.8,
        duration: '3-4 days',
        bestTime: 'Apr-Jun, Sep-Oct, Dec',
        bestMonths: ['april', 'may', 'june', 'september', 'october', 'december'],
        visaPolicy: 'schengen',
        description: 'Imperial grandeur meets coffeehouse culture in Austria\'s elegant capital. Vienna dazzles with Schönbrunn Palace, world-class museums, and the legacy of Mozart and Beethoven. Waltz through stunning architecture, enjoy legendary Sachertorte, and attend a performance at the State Opera.',
        highlights: ['Schönbrunn Palace', 'St. Stephen\'s Cathedral', 'Belvedere Palace', 'State Opera', 'Naschmarkt'],
        thingsToDo: [
            { name: 'Schönbrunn Palace & Gardens', details: 'Tour the magnificent 1,441-room summer residence of the Habsburgs. The Grand Tour includes 40 rooms. Don\'t miss the stunning gardens, Gloriette, and the world\'s oldest zoo. Audio guides available.', duration: '4-5 hours' },
            { name: 'Vienna State Opera Performance', details: 'Experience world-class opera or ballet in this stunning neo-Renaissance building. Standing room tickets are affordable and sold same-day. Guided tours available during daytime when no performances.', duration: '3-4 hours' },
            { name: 'Coffeehouse Culture Experience', details: 'Vienna\'s coffee houses are UNESCO-listed cultural heritage. Try Café Central (historic), Sacher (for Sachertorte), or Demel (imperial pastries). Lingering is expected and encouraged.', duration: '1-2 hours' },
            { name: 'Belvedere Palace & Art Museum', details: 'Home to Klimt\'s famous "The Kiss" and an impressive collection of Austrian art. The baroque palace with sweeping city views is stunning. Upper and Lower Belvedere require separate tickets.', duration: '2-3 hours' },
            { name: 'Naschmarkt Food Tour', details: 'Vienna\'s most popular market offers diverse international cuisine and local delicacies. Sample cheese, olives, Middle Eastern food, and fresh produce. Saturday flea market adds extra charm.', duration: '2-3 hours' },
            { name: 'Classical Concert', details: 'Mozart and Strauss concerts are performed nightly in stunning historic venues. Reservations recommended. Some venues offer concerts with dinner. A must for music lovers.', duration: '2 hours' }
        ]
    },
    // HUNGARY
    {
        id: 34,
        name: 'Budapest',
        country: 'Hungary',
        countryId: 'hungary',
        region: 'europe',
        category: ['heritage', 'cultural', 'nightlife', 'relaxation'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800',
        rating: 4.7,
        duration: '3-4 days',
        bestTime: 'Apr-Jun, Sep-Oct',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        visaPolicy: 'schengen',
        description: 'The Pearl of the Danube unites historic Buda and trendy Pest across Europe\'s most beautiful capital. Soak in legendary thermal baths, explore stunning Art Nouveau architecture, and experience the famous ruin bars. Incredible value meets old-world elegance.',
        highlights: ['Parliament Building', 'Fisherman\'s Bastion', 'Széchenyi Baths', 'Ruin Bars', 'Buda Castle'],
        thingsToDo: [
            { name: 'Thermal Bath Experience', details: 'Budapest has over 120 thermal springs. Széchenyi (yellow palace) and Gellért (Art Nouveau) are most famous. Bring swimwear and flip-flops. Weekend nights offer "sparties" (spa parties) at Széchenyi.', duration: '2-3 hours' },
            { name: 'Parliament Building Tour', details: 'Europe\'s largest parliament building offers stunning neo-Gothic architecture and the Hungarian Crown Jewels. Book online in advance - tours fill quickly. Night illumination is spectacular.', duration: '1-1.5 hours' },
            { name: 'Ruin Bar Crawl', details: 'Explore unique bars in abandoned buildings. Szimpla Kert is the original and most famous. Each has distinctive décor and atmosphere. Best experienced after 10 PM. Great craft beers and pálinka.', duration: '3-4 hours' },
            { name: 'Walk to Fisherman\'s Bastion', details: 'Climb Castle Hill to this neo-Gothic terrace with panoramic city views. Best at sunset or night when Parliament is illuminated across the river. Free to walk around (tower requires ticket).', duration: '1-2 hours' },
            { name: 'Danube River Cruise', details: 'Evening cruises showcase illuminated bridges and buildings. Some include dinner or live music. The Chain Bridge, Parliament, and Buda Castle create magical nighttime views.', duration: '1-2 hours' },
            { name: 'Central Market Hall', details: 'Hungary\'s largest covered market offers local produce, paprika, salami, and traditional crafts. Ground floor for food, upper level for souvenirs. Try lángos (fried dough) upstairs.', duration: '1-2 hours' }
        ]
    },
    // NETHERLANDS
    {
        id: 35,
        name: 'Amsterdam',
        country: 'Netherlands',
        countryId: 'netherlands',
        region: 'europe',
        category: ['cultural', 'heritage', 'nightlife', 'romantic'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
        rating: 4.7,
        duration: '3-4 days',
        bestTime: 'Apr-Jun, Sep-Oct',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        visaPolicy: 'schengen',
        description: 'Canals, bikes, tulips, and artistic treasures define this liberal, welcoming city. Amsterdam blends Golden Age grandeur with modern creativity. World-class museums, charming canal houses, and vibrant neighborhoods await. Spring brings explosion of colorful tulip fields.',
        highlights: ['Anne Frank House', 'Van Gogh Museum', 'Rijksmuseum', 'Canal Ring', 'Jordaan neighborhood'],
        thingsToDo: [
            { name: 'Van Gogh Museum Visit', details: 'Home to the world\'s largest collection of Van Gogh paintings. Timed tickets required and sell out fast - book weeks ahead. Audio guide adds depth. Plan 2-3 hours minimum for full appreciation.', duration: '2-3 hours' },
            { name: 'Anne Frank House', details: 'The secret annex where Anne Frank hid for two years is deeply moving. Tickets released online exactly 6 weeks ahead - set reminders. Evening slots are less crowded. Allow time for reflection.', duration: '1.5-2 hours' },
            { name: 'Canal Boat Cruise', details: 'See the city from the water - UNESCO-listed Canal Ring is stunning. Day cruises offer great photo ops; evening cruises with wine are romantic. Many include commentary on history and architecture.', duration: '1-1.5 hours' },
            { name: 'Rent a Bike & Explore', details: 'Join 880,000 bikes in the cycling capital. Rental shops are everywhere. Visit Vondelpark, cycle along canals, or ride to windmills at Zaanse Schans. Remember: bike lanes are sacred!', duration: '2-4 hours' },
            { name: 'Jordaan Neighborhood Walk', details: 'Once working-class, now hip with indie shops, cozy cafés (brown bars), and hidden courtyards (hofjes). Saturday brings organic markets. Perfect for aimless wandering and photography.', duration: '2-3 hours' },
            { name: 'Keukenhof Tulip Gardens (Seasonal)', details: 'World\'s largest flower garden opens mid-March to mid-May. Seven million bulbs create stunning displays. Go on weekdays and arrive early. Combine with tulip farm visits.', duration: '4-5 hours' }
        ]
    },
    // GERMANY
    {
        id: 36,
        name: 'Berlin',
        country: 'Germany',
        countryId: 'germany',
        region: 'europe',
        category: ['cultural', 'heritage', 'nightlife', 'food'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
        rating: 4.7,
        duration: '4-5 days',
        bestTime: 'May-Sep',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        visaPolicy: 'schengen',
        description: 'Germany\'s dynamic capital pulses with history, culture, and creative energy. From Cold War memorials to world-class clubs, Berlin reinvents itself constantly. Street art, vibrant neighborhoods, incredible museums, and legendary nightlife create an edgy, welcoming atmosphere.',
        highlights: ['Brandenburg Gate', 'Berlin Wall Memorial', 'Museum Island', 'Reichstag', 'East Side Gallery'],
        thingsToDo: [
            { name: 'Berlin Wall & Cold War History', details: 'Visit the East Side Gallery (longest remaining section with murals), Checkpoint Charlie, and the Berlin Wall Memorial on Bernauer Strasse. Free outdoor exhibits tell powerful stories of division and reunification.', duration: '3-4 hours' },
            { name: 'Museum Island', details: 'Five world-class museums on an island in the Spree River (UNESCO). Don\'t miss the Pergamon Museum\'s ancient artifacts and Ishtar Gate. Day pass offers best value; audio guides essential.', duration: '4-6 hours' },
            { name: 'Reichstag Dome Visit', details: 'Free visit to Norman Foster\'s stunning glass dome with 360° city views. Pre-registration required online. Evening visits offer spectacular illuminated views. Restaurant onsite.', duration: '1-1.5 hours' },
            { name: 'Street Food at Markthalle Neun', details: 'Thursday Street Food Thursday is legendary with diverse vendors. Regular market days offer local products. Located in hip Kreuzberg neighborhood - explore before or after.', duration: '2-3 hours' },
            { name: 'Explore Kreuzberg & Neukölln', details: 'Berlin\'s most diverse, creative neighborhoods. Turkish markets, street art, craft coffee, vintage shops, and incredible dining. Best explored on foot, ending at a canal-side bar.', duration: '3-4 hours' },
            { name: 'Potsdam Day Trip', details: 'Frederick the Great\'s Sanssouci Palace rivals Versailles. Multiple palaces,stunning gardens, and fascinating history. Direct train from Berlin (30 min). Allow full day for exploration.', duration: '5-6 hours' }
        ]
    },
    // IRELAND
    {
        id: 37,
        name: 'Dublin',
        country: 'Ireland',
        countryId: 'ireland',
        region: 'europe',
        category: ['cultural', 'heritage', 'nightlife', 'food'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800',
        rating: 4.6,
        duration: '3-4 days',
        bestTime: 'May-Sep',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        visaPolicy: 'visaRequired',
        description: 'Ireland\'s spirited capital blends literary heritage with legendary pub culture. Viking history, Georgian architecture, and warm craic (fun with friends) define Dublin. Visit iconic Guinness Storehouse, wander Trinity College, and experience authentic Irish music in Temple Bar.',
        highlights: ['Guinness Storehouse', 'Trinity College', 'Temple Bar', 'St. Patrick\'s Cathedral', 'Kilmainham Gaol'],
        thingsToDo: [
            { name: 'Guinness Storehouse Experience', details: 'Seven floors exploring Ireland\'s most famous export. Learn brewing history, perfect your pour, and enjoy a pint with 360° city views at the Gravity Bar. Book online for discounts.', duration: '2-3 hours' },
            { name: 'Trinity College & Book of Kells', details: 'See the stunning 9th-century illuminated manuscript in Ireland\'s oldest university. The Long Room library is breathtaking. Timed tickets required. Morning visits are calmest.', duration: '1.5-2 hours' },
            { name: 'Traditional Irish Music Night', details: 'Experience authentic trad sessions in pubs like The Cobblestone, O\'Donoghue\'s, or Whelan\'s. Most start around 9 PM. Temple Bar is tourist-heavy but atmospheric.', duration: '2-3 hours' },
            { name: 'Literary Dublin Walking Tour', details: 'Follow footsteps of Joyce, Yeats, Wilde, and Beckett. Dublin is a UNESCO City of Literature. The Dublin Writers Museum adds context. Pub crawl versions combine literature with pints.', duration: '2-3 hours' },
            { name: 'Day Trip to Howth', details: 'Charming fishing village 30 minutes by DART train. Walk the cliff paths for stunning sea views, see harbor seals, enjoy fresh seafood. Weekend markets add local color.', duration: '4-5 hours' },
            { name: 'Kilmainham Gaol Tour', details: 'Former prison where Irish independence leaders were executed. Guided tours reveal powerful stories of Irish struggle. Pre-booking essential - sells out weeks ahead.', duration: '1.5 hours' }
        ]
    },
    // SCOTLAND
    {
        id: 38,
        name: 'Edinburgh',
        country: 'Scotland',
        countryId: 'scotland',
        region: 'europe',
        category: ['heritage', 'cultural', 'romantic'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800',
        rating: 4.7,
        duration: '3-4 days',
        bestTime: 'May-Sep',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        visaPolicy: 'etaRequired',
        description: 'Scotland\'s stunning capital perches on ancient volcanoes, crowned by a dramatic castle. Medieval Old Town and elegant New Town are both UNESCO-listed. Literary heritage, ghost stories, world-class festivals, and Scottish hospitality create unforgettable atmosphere.',
        highlights: ['Edinburgh Castle', 'Royal Mile', 'Arthur\'s Seat', 'Holyrood Palace', 'Calton Hill'],
        thingsToDo: [
            { name: 'Edinburgh Castle Tour', details: 'Scotland\'s most visited attraction dominating the skyline. See the Scottish Crown Jewels, Stone of Destiny, and military museums. Book ahead especially in August. Views from ramparts are spectacular.', duration: '2-3 hours' },
            { name: 'Walk the Royal Mile', details: 'Historic street connecting Castle to Holyrood Palace. Explore hidden closes (alleyways), whisky shops, Scottish souvenirs, and street performers. Many historic attractions along the way.', duration: '2-3 hours' },
            { name: 'Hike Arthur\'s Seat', details: 'Climb the ancient volcano for panoramic city views. Multiple trails of varying difficulty. Best at sunrise or sunset when fewer people. Allow 1.5-2 hours for round trip from Holyrood.', duration: '2-3 hours' },
            { name: 'Underground Vault Tour', details: 'Descend into spooky vaults beneath the city. Historical tours explain Edinburgh\'s dark past; ghost tours add theatrical scares. Evening tours most atmospheric. Book in advance.', duration: '1-1.5 hours' },
            { name: 'Scottish Whisky Experience', details: 'Learn about Scotland\'s national drink near the Castle. Tours explain production regions and finish with tastings. World\'s largest whisky collection on display. Gift shop is excellent.', duration: '1.5-2 hours' },
            { name: 'Day Trip to the Highlands', details: 'Organized tours visit Loch Ness, glens, and castles. Long day (10-12 hours) but stunning scenery. Alternatively, visit closer Stirling Castle independently by train.', duration: '10-12 hours' }
        ]
    },
    // CROATIA
    {
        id: 39,
        name: 'Dubrovnik',
        country: 'Croatia',
        countryId: 'croatia',
        region: 'europe',
        category: ['heritage', 'beach', 'romantic'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1555990538-1e2a5fe65dc9?w=800',
        rating: 4.7,
        duration: '3-4 days',
        bestTime: 'May-Jun, Sep-Oct',
        bestMonths: ['may', 'june', 'september', 'october'],
        visaPolicy: 'schengen',
        description: 'The Pearl of the Adriatic enchants with its stunning medieval walls, terracotta rooftops, and crystal-clear waters. Game of Thrones made it famous as King\'s Landing, but Dubrovnik\'s beauty needs no fantasy. Combine historic exploration with island hopping and beach relaxation.',
        highlights: ['City Walls Walk', 'Old Town', 'Lokrum Island', 'Cable Car', 'Game of Thrones locations'],
        thingsToDo: [
            { name: 'Walk the City Walls', details: 'Circle the complete 2km medieval walls for spectacular views. Go early morning to avoid crowds and midday heat. Takes 1-2 hours depending on stops. The most iconic Dubrovnik experience.', duration: '1.5-2 hours' },
            { name: 'Kayaking & Swimming', details: 'Paddle around the walls and discover hidden beaches and caves. Sunset tours are magical. Stop at Lokrum Island or Betina Beach. Tours available for all skill levels.', duration: '3-4 hours' },
            { name: 'Cable Car to Mount Srđ', details: 'Ride to the mountain top for breathtaking panoramic views of Old Town, islands, and Adriatic. Best at sunset. Walking trail down takes about 1 hour. Restaurant at summit.', duration: '1-2 hours' },
            { name: 'Game of Thrones Tour', details: 'Visit filming locations from King\'s Landing. Fort Lovrijenac (Red Keep), Pile Gate, and various streets featured prominently. Guided tours add behind-the-scenes stories.', duration: '2-3 hours' },
            { name: 'Day Trip to Lokrum Island', details: 'Quick ferry ride to this peaceful nature reserve. Medieval monastery ruins, botanical gardens, and swimming in the "Dead Sea" (salt lake). Peacocks roam freely. Bring picnic supplies.', duration: '4-5 hours' },
            { name: 'Explore Elafiti Islands', details: 'Three charming islands (Koločep, Lopud, Šipan) for swimming, hiking, and village exploration. Day trip cruises include lunch. Lopud\'s sandy Šunj Beach is Croatia\'s finest.', duration: '6-8 hours' }
        ]
    },
    // SPAIN - Madrid
    {
        id: 40,
        name: 'Madrid',
        country: 'Spain',
        countryId: 'spain',
        region: 'europe',
        category: ['cultural', 'food', 'nightlife', 'heritage'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800',
        rating: 4.7,
        duration: '3-4 days',
        bestTime: 'Mar-May, Sep-Nov',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        visaPolicy: 'schengen',
        description: 'Spain\'s elegant capital combines royal heritage with cutting-edge culture. World-class art museums, beautiful parks, legendary nightlife, and incredible tapas define Madrid. The city truly comes alive after dark when madrileños embrace their famous late-night lifestyle.',
        highlights: ['Prado Museum', 'Royal Palace', 'Retiro Park', 'Gran Vía', 'Plaza Mayor'],
        thingsToDo: [
            { name: 'Prado Museum Visit', details: 'One of the world\'s greatest art museums featuring Velázquez, Goya, and El Greco masterpieces. Free entry 6-8 PM daily. Allow 2-3 hours minimum; audio guide highly recommended.', duration: '2-4 hours' },
            { name: 'Retiro Park Walking Tour', details: 'Madrid\'s beautiful green heart with rose garden, Crystal Palace, and boating lake. Perfect for morning jogs, picnics, or afternoon strolls. Weekend drum circles and performers add life.', duration: '2-3 hours' },
            { name: 'Tapas Tour in La Latina', details: 'Best neighborhood for traditional tapas and wine hopping (ir de cañas). Calle Cava Baja is tapas paradise. Sunday El Rastro flea market adds to the experience.', duration: '2-3 hours' },
            { name: 'Royal Palace Tour', details: 'Europe\'s largest functioning royal palace with stunning State Rooms. Audio guide explains opulent details. Combined tickets with gardens offer value. Check for Changing of Guard (first Wednesday monthly).', duration: '2 hours' },
            { name: 'Day Trip to Toledo', details: 'The "City of Three Cultures" is a UNESCO World Heritage site 30 minutes by train. Medieval streets, El Greco\'s masterpieces, stunning cathedral, and marzipan shops. Full day recommended.', duration: '5-7 hours' },
            { name: 'Watch a Bullfighting Show (Seasonal)', details: 'Las Ventas is the world\'s most prestigious bullring. Controversial but culturally significant. Season runs March-October. Tours of the arena available year-round.', duration: '2-3 hours' }
        ]
    },
    // GREECE
    {
        id: 41,
        name: 'Athens',
        country: 'Greece',
        countryId: 'greece',
        region: 'europe',
        category: ['heritage', 'cultural', 'food'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
        rating: 4.6,
        duration: '3-4 days',
        bestTime: 'Apr-Jun, Sep-Oct',
        bestMonths: ['april', 'may', 'june', 'september', 'october'],
        visaPolicy: 'schengen',
        description: 'The birthplace of democracy and Western civilization. Athens combines ancient wonders with vibrant modern life. The mighty Acropolis presides over neighborhoods transformed into hip quarters with street art, rooftop bars, and excellent cuisine. Gateway to the Greek Islands.',
        highlights: ['Acropolis', 'Parthenon', 'Ancient Agora', 'Plaka', 'Acropolis Museum'],
        thingsToDo: [
            { name: 'Acropolis & Parthenon Tour', details: 'Greece\'s most important ancient site demands at least 2-3 hours. Book combined ticket for multiple sites. Visit early morning or late afternoon to avoid crowds and heat. Sturdy shoes essential.', duration: '2-3 hours' },
            { name: 'Acropolis Museum Visit', details: 'State-of-the-art museum showcasing sculptures from the Acropolis with glass floors revealing archaeological excavations. Friday evenings offer extended hours and lighter crowds.', duration: '2-3 hours' },
            { name: 'Explore Plaka & Monastiraki', details: 'Wander the charming old neighborhood beneath the Acropolis. Tavernas, souvenir shops, and ancient ruins blend seamlessly. Monastiraki flea market is perfect for antiques and souvenirs.', duration: '2-3 hours' },
            { name: 'Sunset at Lycabettus Hill', details: 'Take the funicular or hike to Athens\' highest point for stunning 360° views. Perfect at sunset when the Acropolis glows golden. Chapel and restaurant at the summit.', duration: '1-2 hours' },
            { name: 'Food Tour & Cooking Class', details: 'Greek cuisine shines in Athens. Market tours explore Central Market, while cooking classes teach traditional recipes. Try souvlaki, spanakopita, and baklava from local favorites.', duration: '3-4 hours' },
            { name: 'Day Trip to Delphi', details: 'Ancient Greeks considered Delphi the center of the world. See the Temple of Apollo, theater, and stadium with stunning mountain backdrop. Half-day or full-day tours available.', duration: '6-8 hours' }
        ]
    },
    // POLAND
    {
        id: 42,
        name: 'Krakow',
        country: 'Poland',
        countryId: 'poland',
        region: 'europe',
        category: ['heritage', 'cultural', 'nightlife', 'food'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11a20?w=800',
        rating: 4.7,
        duration: '3-4 days',
        bestTime: 'May-Sep',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        visaPolicy: 'schengen',
        description: 'Poland\'s cultural capital escaped WWII destruction, preserving stunning medieval architecture. Rynek Główny (main square) is Europe\'s largest, with Wawel Castle perched above the Vistula. Add affordable prices, vibrant nightlife, and moving Holocaust history.',
        highlights: ['Main Market Square', 'Wawel Castle', 'Kazimierz Jewish Quarter', 'St. Mary\'s Basilica', 'Wieliczka Salt Mine'],
        thingsToDo: [
            { name: 'Main Market Square (Rynek)', details: 'Europe\'s largest medieval square is Krakow\'s heart. The Cloth Hall, St. Mary\'s trumpet call on the hour, and café-lined arcades create perfect atmosphere. Best appreciated with a coffee or beer.', duration: '1-2 hours' },
            { name: 'Wawel Castle & Cathedral', details: 'The spiritual heart of Poland atop Wawel Hill. Royal chambers, treasury, and cathedral tombs of Polish kings. Multiple exhibitions require separate tickets. Plan 2-3 hours.', duration: '2-3 hours' },
            { name: 'Wieliczka Salt Mine', details: 'Stunning underground world 135 meters deep with chapels, lakes, and sculptures carved entirely from salt. UNESCO World Heritage site. Organized tours only - book in advance.', duration: '3-4 hours' },
            { name: 'Kazimierz Jewish Quarter', details: 'Former Jewish quarter is now Krakow\'s hippest area. Historic synagogues, Schindler\'s Factory, and trendy cafés blend past and present. Food tours and walking tours reveal hidden stories.', duration: '2-3 hours' },
            { name: 'Auschwitz-Birkenau Memorial', details: 'A profoundly moving visit to the former Nazi concentration camps. Pre-booking essential; guided tours recommended. Allow full day including 1.5-hour drive each way. Emotionally demanding but important.', duration: '6-7 hours' },
            { name: 'Polish Food & Vodka Tasting', details: 'Try pierogi, żurek (sour rye soup), and bigos (hunter\'s stew). Polish vodka traditions include flavored varieties. Food tours or cooking classes reveal culinary heritage.', duration: '2-3 hours' }
        ]
    },
    // NORWAY
    {
        id: 43,
        name: 'Bergen & Norwegian Fjords',
        country: 'Norway',
        countryId: 'norway',
        region: 'europe',
        category: ['adventure', 'mountains', 'cultural'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
        rating: 4.8,
        duration: '4-5 days',
        bestTime: 'May-Sep',
        bestMonths: ['may', 'june', 'july', 'august', 'september'],
        visaPolicy: 'schengen',
        description: 'Gateway to Norway\'s spectacular fjords, Bergen is a charming UNESCO city of colorful wooden houses. The surrounding fjords - deep blue waters carved between towering cliffs - are among Earth\'s most dramatic landscapes. Combine hiking, cruising, and Nordic culture.',
        highlights: ['Bryggen Wharf', 'Fløyen Funicular', 'Sognefjord', 'Hardangerfjord', 'Trolltunga'],
        thingsToDo: [
            { name: 'Bryggen Wharf Walk', details: 'UNESCO World Heritage wooden wharf from the Hanseatic era. Colorful historic buildings house shops, restaurants, and museums. The Hanseatic Museum reveals merchant life. Best photographed in morning light.', duration: '2-3 hours' },
            { name: 'Fløyen Funicular & Hike', details: 'Ride or hike to 320m viewpoint overlooking Bergen. Walking trails through forests offer various routes down. The funicular runs late in summer for sunset views.', duration: '2-3 hours' },
            { name: 'Fjord Cruise to Sognefjord', details: 'Norway\'s longest and deepest fjord. Day cruises from Bergen or Norway in a Nutshell tours combine boat, train, and bus through stunning scenery. Full-day experience.', duration: '8-10 hours' },
            { name: 'Norway in a Nutshell', details: 'Classic route combining scenic train rides (Bergen Railway, Flåm Railway), Nærøyfjord cruise, and mountain bus. One of the world\'s great rail journeys. Book in advance.', duration: 'Full day' },
            { name: 'Explore Fish Market', details: 'Bergen\'s famous fish market offers fresh seafood, including king crab, salmon, and whale (controversial). Indoor and outdoor sections. Best for lunch sampling Norwegian cuisine.', duration: '1-2 hours' },
            { name: 'Trolltunga Hike (Advanced)', details: 'Spectacular rock formation jutting over a lake - Norway\'s most famous viewpoint. Challenging 10-12 hour hike requiring fitness and preparation. Seasonal (June-September). Guides available.', duration: '10-12 hours' }
        ]
    },
    // JORDAN
    {
        id: 44,
        name: 'Petra & Wadi Rum',
        country: 'Jordan',
        countryId: 'jordan',
        region: 'middleEast',
        category: ['heritage', 'adventure'],
        featured: true,
        image: 'https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800',
        rating: 4.9,
        duration: '4-5 days',
        bestTime: 'Mar-May, Sep-Nov',
        bestMonths: ['march', 'april', 'may', 'september', 'october', 'november'],
        visaPolicy: 'visaOnArrival',
        description: 'Ancient Petra, rose-red city carved into cliffs, is one of the New Seven Wonders. Nearby Wadi Rum\'s Mars-like desert landscape offers otherworldly stargazing and Bedouin hospitality. Add Dead Sea floating for a complete Jordanian adventure.',
        highlights: ['Treasury at Petra', 'Monastery (Ad Deir)', 'Wadi Rum desert', 'Dead Sea', 'Siq canyon'],
        thingsToDo: [
            { name: 'Petra Treasury at Sunrise', details: 'Enter through the narrow Siq canyon as golden light illuminates the Treasury. Arrive before 6 AM to see it without crowds. Jordan Pass includes entry. Allow 2 days for full exploration.', duration: '4-6 hours' },
            { name: 'Hike to the Monastery', details: 'Climb 800+ steps to Petra\'s largest monument. Less crowded than Treasury with spectacular views. Best in afternoon when sun illuminates the facade. Plan 2-3 hours round trip.', duration: '2-3 hours' },
            { name: 'Petra by Night', details: 'Candlelit walk through the Siq to the Treasury (Mon, Wed, Thurs). Beautifully atmospheric with Bedouin music. Runs 8:30-10:30 PM. Book separately from day entry.', duration: '2 hours' },
            { name: 'Wadi Rum Desert Experience', details: 'Mars-like red desert with towering rock formations. 4x4 tours, camel rides, and Bedouin camp stays under incredible stars. Overnight stays highly recommended for best experience.', duration: '1-2 days' },
            { name: 'Float in the Dead Sea', details: 'Earth\'s lowest point and saltiest water means you float effortlessly. Mineral-rich mud treatments included at resort beaches. Avoid open wounds and eyes. Unique bucket-list experience.', duration: '2-3 hours' },
            { name: 'Amman City Tour', details: 'Jordan\'s modern capital offers the Citadel (ancient ruins), Roman theatre, and lively souks. Great food scene from street stands to upscale restaurants. Good base for day trips.', duration: '3-4 hours' }
        ]
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
