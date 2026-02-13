// WhereTo Regions Data - Organized by Region > Country > Cities
const regionsData = {
    schengen: {
        id: 'schengen',
        name: 'Schengen Area',
        emoji: '🇪🇺',
        description: 'Travel freely across 27 European countries with a single visa',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
        countries: {
            albania: {
                id: 'albania',
                name: 'Albania',
                code: 'AL',
                flag: '🇦🇱',
                capital: 'Tirana',
                currency: 'Albanian Lek (ALL)',
                language: 'Albanian',
                description: 'Hidden gem of the Balkans with stunning beaches, ancient ruins, and vibrant culture',
                image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=800',
                cities: {
                    tirana: {
                        id: 'tirana',
                        name: 'Tirana',
                        country: 'Albania',
                        region: 'Schengen',
                        description: 'Colorful capital city with Ottoman, Italian and Soviet architectural influences',
                        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3eb0b6?w=800',
                        population: '520,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                            { name: 'Skanderbeg Square', type: 'Landmark', description: 'Main plaza and heart of the city' },
                            { name: 'Bunk\'Art', type: 'Museum', description: 'Cold War bunker turned museum' },
                            { name: 'Et\'hem Bej Mosque', type: 'Religious', description: 'Historic 18th-century mosque' },
                            { name: 'Dajti Mountain', type: 'Nature', description: 'Cable car ride with panoramic views' },
                            { name: 'Blloku District', type: 'Neighborhood', description: 'Trendy area with cafes and nightlife' }
                        ],
                        tips: [
                            'Cash is preferred in many places',
                            'Learn basic Albanian greetings',
                            'Try traditional byrek and tavë kosi',
                            'Taxis are cheap but agree on price first'
                        ]
                    }
                }
            },
            austria: {
                id: 'austria',
                name: 'Austria',
                code: 'AT',
                flag: '🇦🇹',
                capital: 'Vienna',
                currency: 'Euro (€)',
                language: 'German',
                description: 'Alpine beauty meets imperial grandeur with world-class music and coffee culture',
                image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800',
                cities: {
                    vienna: {
                        id: 'vienna',
                        name: 'Vienna',
                        country: 'Austria',
                        region: 'Schengen',
                        description: 'Imperial capital famous for classical music, coffee houses, and stunning architecture',
                        image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800',
                        population: '1,900,000',
                        bestTime: 'April to May, September to October',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Schönbrunn Palace', type: 'Palace', description: 'Former imperial summer residence' },
                            { name: 'St. Stephen\'s Cathedral', type: 'Religious', description: 'Gothic masterpiece in city center' },
                            { name: 'Belvedere Palace', type: 'Museum', description: 'Baroque palace with Klimt\'s The Kiss' },
                            { name: 'The Hofburg', type: 'Palace', description: 'Imperial palace complex' },
                            { name: 'Naschmarkt', type: 'Market', description: 'Famous outdoor market since 16th century' }
                        ],
                        tips: [
                            'Get a Vienna Card for public transport and discounts',
                            'Visit a traditional coffee house',
                            'Book opera tickets in advance',
                            'Try Wiener Schnitzel and Sachertorte'
                        ]
                    },
                    salzburg: {
                        id: 'salzburg',
                        name: 'Salzburg',
                        country: 'Austria',
                        region: 'Schengen',
                        description: 'Mozart\'s birthplace with baroque architecture and Sound of Music locations',
                        image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800',
                        population: '155,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                            { name: 'Hohensalzburg Fortress', type: 'Castle', description: 'Medieval fortress overlooking city' },
                            { name: 'Mirabell Gardens', type: 'Garden', description: 'Baroque gardens from Sound of Music' },
                            { name: 'Mozart\'s Birthplace', type: 'Museum', description: 'Where Wolfgang Amadeus Mozart was born' },
                            { name: 'Getreidegasse', type: 'Street', description: 'Famous shopping street with guild signs' },
                            { name: 'Salzburg Cathedral', type: 'Religious', description: '17th-century baroque cathedral' }
                        ],
                        tips: [
                            'Take the Sound of Music tour',
                            'Visit during Salzburg Festival in summer',
                            'Try Salzburger Nockerl dessert',
                            'Walk the Altstadt (Old Town) on foot'
                        ]
                    },
                    innsbruck: {
                        id: 'innsbruck',
                        name: 'Innsbruck',
                        country: 'Austria',
                        region: 'Schengen',
                        description: 'Alpine capital surrounded by mountains, perfect for skiing and hiking',
                        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800',
                        population: '132,000',
                        bestTime: 'December to March (skiing), June to September (hiking)',
                        avgBudget: { budget: 75, mid: 140, luxury: 380 },
                        attractions: [
                            { name: 'Golden Roof', type: 'Landmark', description: 'Gothic oriel with 2,657 gilded tiles' },
                            { name: 'Nordkette Cable Car', type: 'Adventure', description: 'Ride from city to 2,300m peak' },
                            { name: 'Ambras Castle', type: 'Castle', description: 'Renaissance castle and museum' },
                            { name: 'Bergisel Ski Jump', type: 'Sports', description: 'Olympic ski jump with panoramic cafe' },
                            { name: 'Swarovski Crystal Worlds', type: 'Attraction', description: 'Crystal museum and art installation' }
                        ],
                        tips: [
                            'Get Innsbruck Card for free transport and attractions',
                            'Ski pass covers multiple resorts',
                            'Visit Old Town for traditional architecture',
                            'Try Tyrolean Gröstl (potato dish)'
                        ]
                    },
                    graz: {
                        id: 'graz',
                        name: 'Graz',
                        country: 'Austria',
                        region: 'Schengen',
                        description: 'UNESCO World Heritage city with medieval charm and modern art scene',
                        image: 'https://images.unsplash.com/photo-1558431382-27f86c740594?w=800',
                        population: '290,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 65, mid: 120, luxury: 300 },
                        attractions: [
                            { name: 'Schlossberg', type: 'Landmark', description: 'Hill with clock tower and city views' },
                            { name: 'Kunsthaus Graz', type: 'Museum', description: 'Futuristic modern art museum' },
                            { name: 'Eggenberg Palace', type: 'Palace', description: 'Baroque palace with gardens' },
                            { name: 'Hauptplatz', type: 'Square', description: 'Main square with historic buildings' },
                            { name: 'Murinsel', type: 'Landmark', description: 'Floating island platform on River Mur' }
                        ],
                        tips: [
                            'Take the Schlossbergbahn funicular up the hill',
                            'Explore the UNESCO old town on foot',
                            'Visit farmers markets for local produce',
                            'Graz is Austria\'s culinary capital'
                        ]
                    },
                    linz: {
                        id: 'linz',
                        name: 'Linz',
                        country: 'Austria',
                        region: 'Schengen',
                        description: 'Industrial city transformed into a center of art and technology',
                        image: 'https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=800',
                        population: '205,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 60, mid: 110, luxury: 280 },
                        attractions: [
                            { name: 'Ars Electronica Center', type: 'Museum', description: 'Museum of the future and technology' },
                            { name: 'Lentos Art Museum', type: 'Museum', description: 'Modern art on the Danube' },
                            { name: 'Pöstlingberg', type: 'Viewpoint', description: 'Hilltop church with city views' },
                            { name: 'New Cathedral', type: 'Religious', description: 'Largest church in Austria' },
                            { name: 'Hauptplatz', type: 'Square', description: 'Baroque main square' }
                        ],
                        tips: [
                            'Try the original Linzer Torte',
                            'Visit Ars Electronica Festival in September',
                            'Take tram 3 to Pöstlingberg',
                            'Walk along the Danube promenade'
                        ]
                    }
                }
            },
            belarus: {
                id: 'belarus',
                name: 'Belarus',
                code: 'BY',
                flag: '🇧🇾',
                capital: 'Minsk',
                currency: 'Belarusian Ruble (BYN)',
                language: 'Belarusian, Russian',
                description: 'Untouched Soviet heritage with pristine nature and warm hospitality',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    minsk: {
                        id: 'minsk',
                        name: 'Minsk',
                        country: 'Belarus',
                        region: 'Schengen',
                        description: 'Soviet-era capital with grand architecture and emerging modern culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,000,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Independence Avenue', type: 'Street', description: '15km Stalinist architecture boulevard' },
                            { name: 'Victory Square', type: 'Landmark', description: 'WWII memorial with eternal flame' },
                            { name: 'National Library', type: 'Building', description: 'Diamond-shaped modern library' },
                            { name: 'Trinity Hill', type: 'Neighborhood', description: 'Historic old town district' },
                            { name: 'Mir Castle', type: 'Castle', description: 'UNESCO World Heritage castle nearby' }
                        ],
                        tips: [
                            '30-day visa-free entry at Minsk airport',
                            'Metro is efficient and beautiful',
                            'Try draniki (potato pancakes)',
                            'Locals are very friendly to tourists'
                        ]
                    }
                }
            },
            belgium: {
                id: 'belgium',
                name: 'Belgium',
                code: 'BE',
                flag: '🇧🇪',
                capital: 'Brussels',
                currency: 'Euro (€)',
                language: 'Dutch, French, German',
                description: 'Home of chocolate, beer, waffles, and stunning medieval cities',
                image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=800',
                cities: {
                    brussels: {
                        id: 'brussels',
                        name: 'Brussels',
                        country: 'Belgium',
                        region: 'Schengen',
                        description: 'EU capital with Art Nouveau architecture, comic book culture, and world-famous cuisine',
                        image: 'https://images.unsplash.com/photo-1559113202-c916b8e44373?w=800',
                        population: '1,200,000',
                        bestTime: 'April to September',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                            { name: 'Grand Place', type: 'Square', description: 'UNESCO World Heritage main square' },
                            { name: 'Atomium', type: 'Landmark', description: 'Iconic 1958 World Expo structure' },
                            { name: 'Manneken Pis', type: 'Statue', description: 'Famous bronze fountain sculpture' },
                            { name: 'Royal Palace', type: 'Palace', description: 'Official palace of the Belgian King' },
                            { name: 'Comic Strip Route', type: 'Art', description: 'Murals across the city' }
                        ],
                        tips: [
                            'Try Belgian frites with mayonnaise',
                            'Visit chocolate shops in Grand Sablon',
                            'Brussels Card gives free transport and museums',
                            'Order moules-frites (mussels and fries)'
                        ]
                    },
                    antwerp: {
                        id: 'antwerp',
                        name: 'Antwerp',
                        country: 'Belgium',
                        region: 'Schengen',
                        description: 'Diamond capital with fashion scene, Rubens masterpieces, and vibrant nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '530,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 65, mid: 130, luxury: 320 },
                        attractions: [
                            { name: 'Cathedral of Our Lady', type: 'Religious', description: 'Gothic cathedral with Rubens paintings' },
                            { name: 'Antwerp Central Station', type: 'Architecture', description: '"Railway cathedral" from 1905' },
                            { name: 'Museum aan de Stroom', type: 'Museum', description: 'Modern museum with city views' },
                            { name: 'Grote Markt', type: 'Square', description: 'Main square with guild houses' },
                            { name: 'Diamond District', type: 'Shopping', description: 'World\'s diamond trading center' }
                        ],
                        tips: [
                            'Visit MoMu for fashion exhibitions',
                            'Take a harbor boat tour',
                            'Explore trendy Het Zuid neighborhood',
                            'Try Antwerp hands chocolate'
                        ]
                    },
                    ghent: {
                        id: 'ghent',
                        name: 'Ghent',
                        country: 'Belgium',
                        region: 'Schengen',
                        description: 'Medieval university city with stunning canals and vibrant student atmosphere',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '265,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                            { name: 'Gravensteen Castle', type: 'Castle', description: 'Medieval castle of the Counts' },
                            { name: 'St Bavo\'s Cathedral', type: 'Religious', description: 'Home of the Ghent Altarpiece' },
                            { name: 'Graslei & Korenlei', type: 'Waterfront', description: 'Picturesque canal-side guild houses' },
                            { name: 'Belfry of Ghent', type: 'Tower', description: 'UNESCO World Heritage bell tower' },
                            { name: 'SMAK', type: 'Museum', description: 'Contemporary art museum' }
                        ],
                        tips: [
                            'Take a boat tour through the canals',
                            'Try cuberdons (nose-shaped candy)',
                            'Visit during Ghent Festival in July',
                            'Rent a bike to explore like locals'
                        ]
                    }
                }
            }
        }
    },
    southAmerica: {
        id: 'southAmerica',
        name: 'South America',
        emoji: '🌎',
        description: 'Diverse landscapes from Amazon rainforests to Patagonian glaciers',
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800',
        countries: {
            argentina: {
                id: 'argentina',
                name: 'Argentina',
                code: 'AR',
                flag: '🇦🇷',
                capital: 'Buenos Aires',
                currency: 'Argentine Peso (ARS)',
                language: 'Spanish',
                description: 'Land of tango, steak, wine, and dramatic Patagonian landscapes',
                image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800',
                cities: {
                    buenosAires: {
                        id: 'buenosAires',
                        name: 'Buenos Aires',
                        country: 'Argentina',
                        region: 'South America',
                        description: 'Paris of South America with passionate tango, world-class steak, and European architecture',
                        image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800',
                        population: '15,000,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'La Boca', type: 'Neighborhood', description: 'Colorful barrio with tango and art' },
                            { name: 'Recoleta Cemetery', type: 'Landmark', description: 'Ornate cemetery with Evita\'s tomb' },
                            { name: 'Teatro Colón', type: 'Theater', description: 'World-renowned opera house' },
                            { name: 'San Telmo Market', type: 'Market', description: 'Sunday antique market and tango' },
                            { name: 'Plaza de Mayo', type: 'Square', description: 'Historic square with Casa Rosada' }
                        ],
                        tips: [
                            'Dinner starts at 9pm or later',
                            'Take a tango lesson in San Telmo',
                            'Try asado (Argentine BBQ)',
                            'Bring USD for better exchange rates'
                        ]
                    }
                }
            }
        }
    },
    centralAsia: {
        id: 'centralAsia',
        name: 'Central Asia',
        emoji: '🏔️',
        description: 'Ancient Silk Road heritage with stunning mountain landscapes',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800',
        countries: {
            armenia: {
                id: 'armenia',
                name: 'Armenia',
                code: 'AM',
                flag: '🇦🇲',
                capital: 'Yerevan',
                currency: 'Armenian Dram (AMD)',
                language: 'Armenian',
                description: 'Ancient Christian nation with dramatic monasteries and warm hospitality',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    yerevan: {
                        id: 'yerevan',
                        name: 'Yerevan',
                        country: 'Armenia',
                        region: 'Central Asia',
                        description: 'Pink city with views of Mount Ararat, ancient history, and vibrant cafe culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,100,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Republic Square', type: 'Square', description: 'Central plaza with musical fountains' },
                            { name: 'Cascade Complex', type: 'Landmark', description: 'Giant stairway with art museum' },
                            { name: 'Matenadaran', type: 'Museum', description: 'Ancient manuscript repository' },
                            { name: 'Geghard Monastery', type: 'Religious', description: 'UNESCO medieval monastery' },
                            { name: 'Garni Temple', type: 'Historic', description: 'Hellenistic pagan temple' }
                        ],
                        tips: [
                            'Try Armenian brandy (Ararat)',
                            'Visit Vernissage flea market on weekends',
                            'Take day trips to monasteries',
                            'Hospitality is sacred - expect generous hosts'
                        ]
                    }
                }
            },
            azerbaijan: {
                id: 'azerbaijan',
                name: 'Azerbaijan',
                code: 'AZ',
                flag: '🇦🇿',
                capital: 'Baku',
                currency: 'Azerbaijani Manat (AZN)',
                language: 'Azerbaijani',
                description: 'Land of Fire where ancient and ultra-modern architecture meet',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    baku: {
                        id: 'baku',
                        name: 'Baku',
                        country: 'Azerbaijan',
                        region: 'Central Asia',
                        description: 'Futuristic Caspian Sea capital with UNESCO Old City and Flame Towers',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,300,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 45, mid: 90, luxury: 250 },
                        attractions: [
                            { name: 'Flame Towers', type: 'Landmark', description: 'Iconic skyscrapers shaped like flames' },
                            { name: 'Old City (Icherisheher)', type: 'Historic', description: 'UNESCO walled old town' },
                            { name: 'Maiden Tower', type: 'Tower', description: 'Ancient tower with city views' },
                            { name: 'Heydar Aliyev Center', type: 'Architecture', description: 'Zaha Hadid\'s flowing masterpiece' },
                            { name: 'Yanar Dag', type: 'Nature', description: 'Natural eternal flame on hillside' }
                        ],
                        tips: [
                            'Visa on arrival for many nationalities',
                            'Try plov (pilaf) and dolma',
                            'Visit mud volcanoes day trip',
                            'Baku Boulevard is perfect for walking'
                        ]
                    },
                    gabala: {
                        id: 'gabala',
                        name: 'Gabala',
                        country: 'Azerbaijan',
                        region: 'Central Asia',
                        description: 'Mountain resort town with adventure sports and natural beauty',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '15,000',
                        bestTime: 'May to September (summer), December to February (skiing)',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                            { name: 'Tufandag Ski Resort', type: 'Sports', description: 'Modern ski resort in the mountains' },
                            { name: 'Nohur Lake', type: 'Nature', description: 'Beautiful mountain lake' },
                            { name: 'Gabala Shooting Club', type: 'Sports', description: 'World-class shooting facility' },
                            { name: 'Seven Beauties Waterfall', type: 'Nature', description: 'Scenic waterfall in the forest' },
                            { name: 'Gabaland', type: 'Theme Park', description: 'Amusement park for families' }
                        ],
                        tips: [
                            '3 hour drive from Baku',
                            'Great for adventure activities',
                            'Try local mountain honey',
                            'Book ski equipment in advance'
                        ]
                    }
                }
            }
        }
    },
    australiaOceania: {
        id: 'australiaOceania',
        name: 'Australia & Oceania',
        emoji: '🦘',
        description: 'Unique wildlife, stunning beaches, and island paradises',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
        countries: {
            australia: {
                id: 'australia',
                name: 'Australia',
                code: 'AU',
                flag: '🇦🇺',
                capital: 'Canberra',
                currency: 'Australian Dollar (AUD)',
                language: 'English',
                description: 'Land of unique wildlife, stunning beaches, the Outback, and vibrant cities',
                image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
                cities: {
                    sydney: {
                        id: 'sydney',
                        name: 'Sydney',
                        country: 'Australia',
                        region: 'Australia & Oceania',
                        description: 'Iconic harbour city with world-famous Opera House and beautiful beaches',
                        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
                        population: '5,300,000',
                        bestTime: 'September to November, March to May',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Sydney Opera House', type: 'Landmark', description: 'UNESCO World Heritage icon' },
                            { name: 'Sydney Harbour Bridge', type: 'Landmark', description: 'Climb the iconic bridge' },
                            { name: 'Bondi Beach', type: 'Beach', description: 'World-famous surfing beach' },
                            { name: 'The Rocks', type: 'Historic', description: 'Historic harborside neighborhood' },
                            { name: 'Taronga Zoo', type: 'Zoo', description: 'Zoo with harbour views' }
                        ],
                        tips: [
                            'Get an Opal card for transport',
                            'Walk the Bondi to Coogee coastal trail',
                            'Book Opera House tour in advance',
                            'Try meat pies and flat whites'
                        ]
                    },
                    melbourne: {
                        id: 'melbourne',
                        name: 'Melbourne',
                        country: 'Australia',
                        region: 'Australia & Oceania',
                        description: 'Cultural capital with street art, coffee culture, and sports obsession',
                        image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=800',
                        population: '5,100,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 90, mid: 180, luxury: 450 },
                        attractions: [
                            { name: 'Federation Square', type: 'Square', description: 'Cultural hub in the CBD' },
                            { name: 'Hosier Lane', type: 'Art', description: 'Famous street art alley' },
                            { name: 'Queen Victoria Market', type: 'Market', description: 'Historic open-air market' },
                            { name: 'Great Ocean Road', type: 'Road Trip', description: 'Scenic coastal drive' },
                            { name: 'Melbourne Cricket Ground', type: 'Sports', description: 'Iconic sports arena' }
                        ],
                        tips: [
                            'Explore hidden laneways for coffee',
                            'Four seasons in one day - layer up',
                            'Free tram zone in the CBD',
                            'Try dim sum in Chinatown'
                        ]
                    },
                    brisbane: {
                        id: 'brisbane',
                        name: 'Brisbane',
                        country: 'Australia',
                        region: 'Australia & Oceania',
                        description: 'Sunny river city gateway to the Gold Coast and Great Barrier Reef',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,500,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 80, mid: 160, luxury: 400 },
                        attractions: [
                            { name: 'South Bank', type: 'Parkland', description: 'Urban beach and cultural precinct' },
                            { name: 'Story Bridge', type: 'Adventure', description: 'Bridge climb experience' },
                            { name: 'Lone Pine Koala Sanctuary', type: 'Wildlife', description: 'Cuddle koalas and feed kangaroos' },
                            { name: 'Mount Coot-tha', type: 'Viewpoint', description: 'City lookout and botanic gardens' },
                            { name: 'GOMA', type: 'Museum', description: 'Gallery of Modern Art' }
                        ],
                        tips: [
                            'Free ferry (CityHopper) along river',
                            'Day trip to Gold Coast beaches',
                            'Year-round warm weather',
                            'Visit Eat Street Northshore markets'
                        ]
                    },
                    goldCoast: {
                        id: 'goldCoast',
                        name: 'Gold Coast',
                        country: 'Australia',
                        region: 'Australia & Oceania',
                        description: 'Theme parks, surfing beaches, and glittering high-rises',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '680,000',
                        bestTime: 'April to November',
                        avgBudget: { budget: 85, mid: 170, luxury: 420 },
                        attractions: [
                            { name: 'Surfers Paradise Beach', type: 'Beach', description: 'Iconic golden sand beach' },
                            { name: 'Dreamworld', type: 'Theme Park', description: 'Biggest theme park in Australia' },
                            { name: 'Sea World', type: 'Theme Park', description: 'Marine theme park' },
                            { name: 'SkyPoint Observation', type: 'Viewpoint', description: 'Climb to Q1 tower summit' },
                            { name: 'Currumbin Wildlife Sanctuary', type: 'Wildlife', description: 'Native animal sanctuary' }
                        ],
                        tips: [
                            'Get a theme park multi-pass',
                            'Learn to surf - plenty of schools',
                            'Visit hinterland rainforests',
                            'Nightlife on Cavill Avenue'
                        ]
                    },
                    perth: {
                        id: 'perth',
                        name: 'Perth',
                        country: 'Australia',
                        region: 'Australia & Oceania',
                        description: 'Remote west coast city with stunning beaches and wine regions',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,100,000',
                        bestTime: 'September to November, March to May',
                        avgBudget: { budget: 90, mid: 180, luxury: 450 },
                        attractions: [
                            { name: 'Kings Park', type: 'Park', description: 'Huge parkland with city views' },
                            { name: 'Rottnest Island', type: 'Island', description: 'Home of the quokka' },
                            { name: 'Cottesloe Beach', type: 'Beach', description: 'Beautiful sunset beach' },
                            { name: 'Fremantle', type: 'Town', description: 'Historic port town with markets' },
                            { name: 'Swan Valley', type: 'Wine Region', description: 'Wine and food trail' }
                        ],
                        tips: [
                            'Take ferry to Rottnest for quokka selfies',
                            'Visit Freo Markets on weekends',
                            'Margaret River wine region day trip',
                            'Perth is in a different timezone'
                        ]
                    },
                    cairns: {
                        id: 'cairns',
                        name: 'Cairns',
                        country: 'Australia',
                        region: 'Australia & Oceania',
                        description: 'Gateway to Great Barrier Reef and ancient Daintree Rainforest',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '160,000',
                        bestTime: 'June to October (dry season)',
                        avgBudget: { budget: 95, mid: 190, luxury: 480 },
                        attractions: [
                            { name: 'Great Barrier Reef', type: 'Nature', description: 'World\'s largest coral reef system' },
                            { name: 'Daintree Rainforest', type: 'Nature', description: 'World\'s oldest tropical rainforest' },
                            { name: 'Kuranda Scenic Railway', type: 'Train', description: 'Historic rainforest train' },
                            { name: 'Cairns Esplanade Lagoon', type: 'Pool', description: 'Free saltwater swimming pool' },
                            { name: 'Green Island', type: 'Island', description: 'Coral cay with snorkeling' }
                        ],
                        tips: [
                            'Reef trips depart early - book ahead',
                            'Stinger season Nov-May - swim with suit',
                            'Skyrail rainforest cableway is amazing',
                            'Try barramundi fish'
                        ]
                    },
                    canberra: {
                        id: 'canberra',
                        name: 'Canberra',
                        country: 'Australia',
                        region: 'Australia & Oceania',
                        description: 'Purpose-built capital with world-class museums and galleries',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '450,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 85, mid: 160, luxury: 380 },
                        attractions: [
                            { name: 'Parliament House', type: 'Government', description: 'Australia\'s parliament building' },
                            { name: 'Australian War Memorial', type: 'Museum', description: 'Moving war museum and shrine' },
                            { name: 'National Gallery of Australia', type: 'Museum', description: 'National art collection' },
                            { name: 'Lake Burley Griffin', type: 'Lake', description: 'Central lake for walks and cycling' },
                            { name: 'Questacon', type: 'Museum', description: 'Interactive science center' }
                        ],
                        tips: [
                            'Most attractions are free',
                            'Rent a bike to explore',
                            'Floriade flower festival in spring',
                            'Visit nearby wineries'
                        ]
                    }
                }
            }
        }
    },
    asia: {
        id: 'asia',
        name: 'Asia',
        emoji: '🌏',
        description: 'Ancient cultures, diverse cuisines, and breathtaking temples',
        image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800',
        countries: {
            bahrain: {
                id: 'bahrain',
                name: 'Bahrain',
                code: 'BH',
                flag: '🇧🇭',
                capital: 'Manama',
                currency: 'Bahraini Dinar (BHD)',
                language: 'Arabic',
                description: 'Island kingdom blending ancient heritage with modern luxury',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    manama: {
                        id: 'manama',
                        name: 'Manama',
                        country: 'Bahrain',
                        region: 'Asia',
                        description: 'Modern capital with ancient fort, pearl diving heritage, and F1 circuit',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '400,000',
                        bestTime: 'November to March',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Bahrain Fort', type: 'Historic', description: 'UNESCO ancient fort and museum' },
                            { name: 'Al Fateh Grand Mosque', type: 'Religious', description: 'One of world\'s largest mosques' },
                            { name: 'Bahrain National Museum', type: 'Museum', description: 'History of Bahrain and Dilmun' },
                            { name: 'Souq Manama', type: 'Market', description: 'Traditional Arabian market' },
                            { name: 'Tree of Life', type: 'Nature', description: 'Ancient tree in the desert' }
                        ],
                        tips: [
                            'Thursday-Friday is the weekend',
                            'Dress modestly outside hotels',
                            'Try machboos (spiced rice dish)',
                            'Alcohol available in licensed venues'
                        ]
                    }
                }
            },
            bhutan: {
                id: 'bhutan',
                name: 'Bhutan',
                code: 'BT',
                flag: '🇧🇹',
                capital: 'Thimphu',
                currency: 'Bhutanese Ngultrum (BTN)',
                language: 'Dzongkha',
                description: 'Last Himalayan kingdom measuring Gross National Happiness',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    thimphu: {
                        id: 'thimphu',
                        name: 'Thimphu',
                        country: 'Bhutan',
                        region: 'Asia',
                        description: 'World\'s only capital without traffic lights, blending tradition and modernity',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '115,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 200, mid: 250, luxury: 500 },
                        attractions: [
                            { name: 'Tashichho Dzong', type: 'Religious', description: 'Fortress monastery and government seat' },
                            { name: 'Buddha Dordenma', type: 'Statue', description: 'Giant Buddha statue overlooking city' },
                            { name: 'National Memorial Chorten', type: 'Religious', description: 'Buddhist memorial stupa' },
                            { name: 'Folk Heritage Museum', type: 'Museum', description: 'Traditional Bhutanese life' },
                            { name: 'Centenary Farmers Market', type: 'Market', description: 'Weekend market for local produce' }
                        ],
                        tips: [
                            'Must book through licensed tour operator',
                            'Sustainable Development Fee required',
                            'Try ema datshi (chili cheese)',
                            'Dress modestly and respectfully'
                        ]
                    },
                    paro: {
                        id: 'paro',
                        name: 'Paro',
                        country: 'Bhutan',
                        region: 'Asia',
                        description: 'Home of iconic Tiger\'s Nest monastery clinging to a cliff',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '50,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 200, mid: 250, luxury: 500 },
                        attractions: [
                            { name: 'Tiger\'s Nest (Taktsang)', type: 'Religious', description: 'Iconic cliff-side monastery' },
                            { name: 'Rinpung Dzong', type: 'Religious', description: 'Fortress monastery in Paro valley' },
                            { name: 'National Museum', type: 'Museum', description: 'Art and artifacts in watchtower' },
                            { name: 'Kyichu Lhakhang', type: 'Religious', description: 'One of oldest temples in Bhutan' },
                            { name: 'Drukgyel Dzong', type: 'Ruins', description: 'Historic fortress ruins' }
                        ],
                        tips: [
                            'Tiger\'s Nest hike takes 4-5 hours',
                            'Start early for the monastery hike',
                            'Altitude ~2,200m - acclimatize',
                            'Only international airport in Bhutan'
                        ]
                    },
                    punakha: {
                        id: 'punakha',
                        name: 'Punakha',
                        country: 'Bhutan',
                        region: 'Asia',
                        description: 'Former capital with stunning dzong at confluence of two rivers',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '25,000',
                        bestTime: 'March to May, October to November',
                        avgBudget: { budget: 200, mid: 250, luxury: 500 },
                        attractions: [
                            { name: 'Punakha Dzong', type: 'Religious', description: 'Most beautiful dzong at river confluence' },
                            { name: 'Chimi Lhakhang', type: 'Religious', description: 'Temple of the Divine Madman' },
                            { name: 'Suspension Bridge', type: 'Bridge', description: 'Longest suspension bridge in Bhutan' },
                            { name: 'Mo Chhu River', type: 'Nature', description: 'White water rafting opportunity' },
                            { name: 'Khamsum Yulley Namgyal Chorten', type: 'Religious', description: 'Hilltop temple with valley views' }
                        ],
                        tips: [
                            'Warmer climate than other valleys',
                            'Rice paddies are beautiful in spring',
                            'Royal weddings held at Punakha Dzong',
                            'Try river rafting on Mo Chhu'
                        ]
                    },
                    phuentsholing: {
                        id: 'phuentsholing',
                        name: 'Phuentsholing',
                        country: 'Bhutan',
                        region: 'Asia',
                        description: 'Border town gateway from India with unique cultural mix',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '30,000',
                        bestTime: 'October to March',
                        avgBudget: { budget: 180, mid: 220, luxury: 400 },
                        attractions: [
                            { name: 'Zangto Pelri Lhakhang', type: 'Religious', description: 'Beautiful Buddhist temple' },
                            { name: 'Bhutan Gate', type: 'Landmark', description: 'Entrance gate to Bhutan' },
                            { name: 'Crocodile Breeding Centre', type: 'Wildlife', description: 'Gharial conservation center' },
                            { name: 'Amo Chhu', type: 'Nature', description: 'River with scenic walks' },
                            { name: 'Kharbandi Gompa', type: 'Religious', description: 'Monastery with panoramic views' }
                        ],
                        tips: [
                            'Land border crossing from India',
                            'Hot and humid - unlike rest of Bhutan',
                            'Mix of Bhutanese and Indian culture',
                            'Start point for road journey into Bhutan'
                        ]
                    }
                }
            }
        }
    }
};

// Helper function to get all regions
function getAllRegions() {
    return Object.values(regionsData).map(region => ({
        id: region.id,
        name: region.name,
        emoji: region.emoji,
        description: region.description,
        image: region.image,
        countryCount: Object.keys(region.countries).length
    }));
}

// Helper function to get countries in a region
function getCountriesByRegion(regionId) {
    const region = regionsData[regionId];
    if (!region) return [];
    return Object.values(region.countries).map(country => ({
        id: country.id,
        name: country.name,
        flag: country.flag,
        capital: country.capital,
        description: country.description,
        image: country.image,
        cityCount: Object.keys(country.cities).length,
        regionId: regionId
    }));
}

// Helper function to get cities in a country
function getCitiesByCountry(regionId, countryId) {
    const region = regionsData[regionId];
    if (!region) return [];
    const country = region.countries[countryId];
    if (!country) return [];
    return Object.values(country.cities).map(city => ({
        id: city.id,
        name: city.name,
        country: city.country,
        description: city.description,
        image: city.image,
        regionId: regionId,
        countryId: countryId
    }));
}

// Helper function to get full city details
function getCityDetails(regionId, countryId, cityId) {
    const region = regionsData[regionId];
    if (!region) return null;
    const country = region.countries[countryId];
    if (!country) return null;
    const city = country.cities[cityId];
    if (!city) return null;
    return {
        ...city,
        countryData: {
            name: country.name,
            flag: country.flag,
            currency: country.currency,
            language: country.language
        },
        regionData: {
            name: region.name,
            emoji: region.emoji
        }
    };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { regionsData, getAllRegions, getCountriesByRegion, getCitiesByCountry, getCityDetails };
}
