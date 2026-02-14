// WhereTo Regions Data - Organized by Region > Country > Cities
const regionsData = {
    schengen: {
        id: 'schengen',
        name: 'Schengen Area',
        emoji: '🇪🇺',
        description: 'Travel freely across 27 European countries with a single visa',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
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
                image: 'https://images.unsplash.com/photo-1586878341523-f65c55cfa1ef?w=800',
                cities: {
                    tirana: {
                        id: 'tirana',
                        name: 'Tirana',
                        country: 'Albania',
                        region: 'Schengen',
                        description: 'Colorful capital city with Ottoman, Italian and Soviet architectural influences',
                        image: 'https://images.unsplash.com/photo-1586878341523-f65c55cfa1ef?w=800',
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
                            'Try traditional byrek and tavÃƒÆ’Ã‚Â« kosi',
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
                image: 'https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=800',
                cities: {
                    vienna: {
                        id: 'vienna',
                        name: 'Vienna',
                        country: 'Austria',
                        region: 'Schengen',
                        description: 'Imperial capital famous for classical music, coffee houses, and stunning architecture',
                        image: 'https://images.unsplash.com/photo-1516550893880-a3592c78dc77?w=800',
                        population: '1,900,000',
                        bestTime: 'April to May, September to October',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'SchÃƒÆ’Ã‚Â¶nbrunn Palace', type: 'Palace', description: 'Former imperial summer residence' },
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
                            'Try Tyrolean GrÃƒÆ’Ã‚Â¶stl (potato dish)'
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
                            { name: 'PÃƒÆ’Ã‚Â¶stlingberg', type: 'Viewpoint', description: 'Hilltop church with city views' },
                            { name: 'New Cathedral', type: 'Religious', description: 'Largest church in Austria' },
                            { name: 'Hauptplatz', type: 'Square', description: 'Baroque main square' }
                        ],
                        tips: [
                            'Try the original Linzer Torte',
                            'Visit Ars Electronica Festival in September',
                            'Take tram 3 to PÃƒÆ’Ã‚Â¶stlingberg',
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
                        image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800',
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
                        image: 'https://images.unsplash.com/photo-1582553755226-1a3d7dc95a2a?w=800',
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
            },
            bosniaHerzegovina: {
                id: 'bosniaHerzegovina',
                name: 'Bosnia and Herzegovina',
                code: 'BA',
                flag: '🇧🇦',
                capital: 'Sarajevo',
                currency: 'Convertible Mark (BAM)',
                language: 'Bosnian, Croatian, Serbian',
                description: 'Historic crossroads of East and West with Ottoman heritage and stunning nature',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    sarajevo: {
                        id: 'sarajevo',
                        name: 'Sarajevo',
                        country: 'Bosnia and Herzegovina',
                        region: 'Schengen',
                        description: 'Jerusalem of Europe where mosques, churches, and synagogues coexist',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '420,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'BaÃƒâ€¦Ã‚Â¡Ãƒâ€žÃ‚ÂarÃƒâ€¦Ã‚Â¡ija', type: 'Historic', description: 'Ottoman-era old bazaar district' },
                            { name: 'Latin Bridge', type: 'Historic', description: 'Where WWI was sparked in 1914' },
                            { name: 'Gazi Husrev-bey Mosque', type: 'Religious', description: 'Finest Ottoman mosque in the Balkans' },
                            { name: 'War Tunnel Museum', type: 'Museum', description: 'Tunnel of Hope from the siege' },
                            { name: 'Yellow Fortress', type: 'Viewpoint', description: 'Best sunset views over the city' }
                        ],
                        tips: [
                            'Try Ãƒâ€žÃ¢â‚¬Â¡evapi at BaÃƒâ€¦Ã‚Â¡Ãƒâ€žÃ‚ÂarÃƒâ€¦Ã‚Â¡ija',
                            'Very affordable destination',
                            'Learn about recent history respectfully',
                            'Coffee culture is important here'
                        ]
                    }
                }
            },
            bulgaria: {
                id: 'bulgaria',
                name: 'Bulgaria',
                code: 'BG',
                flag: '🇧🇬',
                capital: 'Sofia',
                currency: 'Bulgarian Lev (BGN)',
                language: 'Bulgarian',
                description: 'Ancient Thracian treasures, Black Sea beaches, and mountain monasteries',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    sofia: {
                        id: 'sofia',
                        name: 'Sofia',
                        country: 'Bulgaria',
                        region: 'Schengen',
                        description: 'Ancient capital with 7,000 years of history and striking Orthodox churches',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,300,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Alexander Nevsky Cathedral', type: 'Religious', description: 'Iconic gold-domed Orthodox cathedral' },
                            { name: 'Vitosha Mountain', type: 'Nature', description: 'Mountain for hiking right beside city' },
                            { name: 'National Palace of Culture', type: 'Building', description: 'Largest multifunctional complex in SE Europe' },
                            { name: 'St. George Rotunda', type: 'Religious', description: 'Oldest building in Sofia, 4th century' },
                            { name: 'Boyana Church', type: 'Religious', description: 'UNESCO World Heritage medieval church' }
                        ],
                        tips: [
                            'One of Europe\'s most affordable capitals',
                            'Try banitsa (cheese pastry) for breakfast',
                            'Free walking tours are excellent',
                            'Day trip to Rila Monastery UNESCO site'
                        ]
                    }
                }
            },
            croatia: {
                id: 'croatia',
                name: 'Croatia',
                code: 'HR',
                flag: '🇭🇷',
                capital: 'Zagreb',
                currency: 'Euro (€)',
                language: 'Croatian',
                description: 'Stunning Adriatic coastline with medieval walled cities and island hopping',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    zagreb: {
                        id: 'zagreb',
                        name: 'Zagreb',
                        country: 'Croatia',
                        region: 'Schengen',
                        description: 'Charming capital with Austro-Hungarian architecture and vibrant cafe culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '800,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 45, mid: 90, luxury: 220 },
                        attractions: [
                            { name: 'Ban JelaÃƒâ€žÃ‚ÂiÃƒâ€žÃ¢â‚¬Â¡ Square', type: 'Square', description: 'Central meeting point and heart of city' },
                            { name: 'St. Mark\'s Church', type: 'Religious', description: 'Iconic tiled roof church' },
                            { name: 'Dolac Market', type: 'Market', description: 'Open-air farmers market' },
                            { name: 'Museum of Broken Relationships', type: 'Museum', description: 'Unique museum of love and loss' },
                            { name: 'Mirogoj Cemetery', type: 'Landmark', description: 'Beautiful arcaded cemetery' }
                        ],
                        tips: [
                            'Take funicular to Upper Town',
                            'Try Ãƒâ€¦Ã‚Â¡trukli (cheese pastry)',
                            'Advent in Zagreb is magical',
                            'Day trip to Plitvice Lakes'
                        ]
                    },
                    split: {
                        id: 'split',
                        name: 'Split',
                        country: 'Croatia',
                        region: 'Schengen',
                        description: 'Ancient Roman palace turned vibrant coastal city on the Dalmatian coast',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '180,000',
                        bestTime: 'May to June, September',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Diocletian\'s Palace', type: 'Historic', description: 'UNESCO Roman emperor\'s palace in city center' },
                            { name: 'Riva Promenade', type: 'Waterfront', description: 'Palm-lined seafront with cafes' },
                            { name: 'Marjan Hill', type: 'Nature', description: 'Forested peninsula for hiking' },
                            { name: 'Cathedral of St. Domnius', type: 'Religious', description: 'Cathedral in Diocletian\'s mausoleum' },
                            { name: 'Pjaca (People\'s Square)', type: 'Square', description: 'Main square outside palace' }
                        ],
                        tips: [
                            'Ferry hub for islands - Hvar, BraÃƒâ€žÃ‚Â, Vis',
                            'Game of Thrones filming location',
                            'Swim at BaÃƒâ€žÃ‚Âvice Beach',
                            'Night tours of Diocletian\'s cellars'
                        ]
                    },
                    dubrovnik: {
                        id: 'dubrovnik',
                        name: 'Dubrovnik',
                        country: 'Croatia',
                        region: 'Schengen',
                        description: 'Pearl of the Adriatic with stunning walled old town and Game of Thrones fame',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '42,000',
                        bestTime: 'May to June, September to October',
                        avgBudget: { budget: 70, mid: 140, luxury: 400 },
                        attractions: [
                            { name: 'City Walls Walk', type: 'Landmark', description: '2km walk around medieval walls' },
                            { name: 'Stradun', type: 'Street', description: 'Main limestone-paved street' },
                            { name: 'Lovrijenac Fortress', type: 'Castle', description: 'Fort used in Game of Thrones' },
                            { name: 'Cable Car to SrÃƒâ€žÃ¢â‚¬Ëœ', type: 'Viewpoint', description: 'Panoramic views of old town' },
                            { name: 'Lokrum Island', type: 'Nature', description: 'Short ferry to nature reserve' }
                        ],
                        tips: [
                            'Very crowded in July-August',
                            'Book city walls ticket online',
                            'Game of Thrones tours popular',
                            'Expensive - budget accordingly'
                        ]
                    }
                }
            },
            cyprus: {
                id: 'cyprus',
                name: 'Cyprus',
                code: 'CY',
                flag: '🇨🇾',
                capital: 'Nicosia',
                currency: 'Euro (€)',
                language: 'Greek, Turkish',
                description: 'Island of Aphrodite with ancient ruins, beaches, and divided capital',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    nicosia: {
                        id: 'nicosia',
                        name: 'Nicosia (Lefkosia)',
                        country: 'Cyprus',
                        region: 'Schengen',
                        description: 'World\'s last divided capital with rich history on both sides',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '350,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                            { name: 'Ledra Street Crossing', type: 'Historic', description: 'Pedestrian crossing to North Cyprus' },
                            { name: 'Cyprus Museum', type: 'Museum', description: 'Best archaeological museum on island' },
                            { name: 'Venetian Walls', type: 'Historic', description: '16th-century fortifications' },
                            { name: 'BÃƒÆ’Ã‚Â¼yÃƒÆ’Ã‚Â¼k Han', type: 'Historic', description: 'Ottoman caravanserai in North' },
                            { name: 'Selimiye Mosque', type: 'Religious', description: 'Gothic cathedral turned mosque in North' }
                        ],
                        tips: [
                            'Bring passport to cross to North Cyprus',
                            'Try halloumi cheese everywhere',
                            'Very hot in summer - visit in spring/fall',
                            'Greek Cypriot south, Turkish Cypriot north'
                        ]
                    }
                }
            },
            czechRepublic: {
                id: 'czechRepublic',
                name: 'Czech Republic',
                code: 'CZ',
                flag: '🇨🇿',
                capital: 'Prague',
                currency: 'Czech Koruna (CZK)',
                language: 'Czech',
                description: 'Fairy-tale castles, world-famous beer, and stunning Gothic architecture',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    prague: {
                        id: 'prague',
                        name: 'Prague',
                        country: 'Czech Republic',
                        region: 'Schengen',
                        description: 'City of a Hundred Spires with stunning medieval old town and vibrant nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,300,000',
                        bestTime: 'April to May, September to October',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Charles Bridge', type: 'Landmark', description: 'Gothic bridge with baroque statues' },
                            { name: 'Prague Castle', type: 'Castle', description: 'Largest ancient castle complex' },
                            { name: 'Old Town Square', type: 'Square', description: 'Astronomical Clock and Gothic churches' },
                            { name: 'St. Vitus Cathedral', type: 'Religious', description: 'Gothic cathedral in castle complex' },
                            { name: 'Jewish Quarter', type: 'Historic', description: 'Historic synagogues and cemetery' }
                        ],
                        tips: [
                            'Czech beer is cheaper than water',
                            'Visit Charles Bridge at sunrise',
                            'Try trdelnÃƒÆ’Ã‚Â­k (chimney cake)',
                            'Book castle tickets in advance'
                        ]
                    }
                }
            },
            estonia: {
                id: 'estonia',
                name: 'Estonia',
                code: 'EE',
                flag: '🇪🇪',
                capital: 'Tallinn',
                currency: 'Euro (€)',
                language: 'Estonian',
                description: 'Digital nation with medieval old town and Baltic charm',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    tallinn: {
                        id: 'tallinn',
                        name: 'Tallinn',
                        country: 'Estonia',
                        region: 'Schengen',
                        description: 'UNESCO medieval old town meets Europe\'s most digital society',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '450,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Old Town', type: 'Historic', description: 'UNESCO medieval walled town' },
                            { name: 'Alexander Nevsky Cathedral', type: 'Religious', description: 'Orthodox cathedral on Toompea Hill' },
                            { name: 'Toompea Castle', type: 'Castle', description: 'Estonian Parliament in ancient castle' },
                            { name: 'St. Olaf\'s Church', type: 'Religious', description: 'Medieval church with observation tower' },
                            { name: 'Telliskivi Creative City', type: 'Neighborhood', description: 'Hipster area with street art' }
                        ],
                        tips: [
                            'Free WiFi everywhere - most digital country',
                            'Try black bread and kama dessert',
                            'Day trip to Lahemaa National Park',
                            'Ferry to Helsinki in 2 hours'
                        ]
                    }
                }
            },
            latvia: {
                id: 'latvia',
                name: 'Latvia',
                code: 'LV',
                flag: '🇱🇻',
                capital: 'Riga',
                currency: 'Euro (€)',
                language: 'Latvian',
                description: 'Art Nouveau treasures, Baltic beaches, and enchanting medieval old town',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    riga: {
                        id: 'riga',
                        name: 'Riga',
                        country: 'Latvia',
                        region: 'Schengen',
                        description: 'Baltic gem with the world\'s finest Art Nouveau architecture and medieval heart',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '630,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 50, mid: 100, luxury: 260 },
                        attractions: [
                            { name: 'Old Town (VecrÃƒâ€žÃ‚Â«ga)', type: 'Historic', description: 'UNESCO medieval old town' },
                            { name: 'Art Nouveau District', type: 'Architecture', description: 'World\'s best Art Nouveau buildings' },
                            { name: 'House of the Blackheads', type: 'Historic', description: 'Stunning Gothic facade on square' },
                            { name: 'Central Market', type: 'Market', description: 'Europe\'s largest market in Zeppelin hangars' },
                            { name: 'St. Peter\'s Church', type: 'Religious', description: 'Gothic church with observation deck' }
                        ],
                        tips: [
                            'Alberta Street for best Art Nouveau',
                            'Riga Black Balsam is local liqueur',
                            'Day trip to JÃƒâ€¦Ã‚Â«rmala beach resort',
                            'Combines well with Tallinn and Vilnius'
                        ]
                    }
                }
            },
            liechtenstein: {
                id: 'liechtenstein',
                name: 'Liechtenstein',
                code: 'LI',
                flag: '🇱🇮',
                capital: 'Vaduz',
                currency: 'Swiss Franc (CHF)',
                language: 'German',
                description: 'Tiny alpine principality between Switzerland and Austria with castle views',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    vaduz: {
                        id: 'vaduz',
                        name: 'Vaduz',
                        country: 'Liechtenstein',
                        region: 'Schengen',
                        description: 'Tiny capital dominated by royal castle with world-class art collection',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '5,700',
                        bestTime: 'May to September',
                        avgBudget: { budget: 100, mid: 180, luxury: 400 },
                        attractions: [
                            { name: 'Vaduz Castle', type: 'Castle', description: 'Royal residence on the hillside' },
                            { name: 'Kunstmuseum Liechtenstein', type: 'Museum', description: 'Modern art museum' },
                            { name: 'Postage Stamp Museum', type: 'Museum', description: 'Rare stamp collection' },
                            { name: 'Main Street', type: 'Street', description: 'Compact downtown with shops' },
                            { name: 'Malbun', type: 'Nature', description: 'Mountain ski resort village' }
                        ],
                        tips: [
                            'Get passport stamped at tourist office',
                            'Can walk across country in a day',
                            'No train station - arrive by bus',
                            'Day trip from Zurich or Austria'
                        ]
                    }
                }
            },
            lithuania: {
                id: 'lithuania',
                name: 'Lithuania',
                code: 'LT',
                flag: '🇱🇹',
                capital: 'Vilnius',
                currency: 'Euro (€)',
                language: 'Lithuanian',
                description: 'Baltic gem with baroque old town, Hill of Crosses, and pagan heritage',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    vilnius: {
                        id: 'vilnius',
                        name: 'Vilnius',
                        country: 'Lithuania',
                        region: 'Schengen',
                        description: 'Baroque capital with largest medieval old town in Eastern Europe',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '590,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 45, mid: 90, luxury: 240 },
                        attractions: [
                            { name: 'Old Town', type: 'Historic', description: 'UNESCO baroque and medieval streets' },
                            { name: 'Gediminas Tower', type: 'Castle', description: 'Symbol of Vilnius with city views' },
                            { name: 'UÃƒâ€¦Ã‚Â¾upis', type: 'Neighborhood', description: 'Quirky artists\' republic' },
                            { name: 'Gates of Dawn', type: 'Religious', description: 'Only surviving city gate with chapel' },
                            { name: 'St. Anne\'s Church', type: 'Religious', description: 'Gothic architectural masterpiece' }
                        ],
                        tips: [
                            'UÃƒâ€¦Ã‚Â¾upis declares itself an independent republic',
                            'Day trip to Trakai Island Castle',
                            'Try cepelinai (potato dumplings)',
                            'Very affordable destination'
                        ]
                    }
                }
            },
            luxembourg: {
                id: 'luxembourg',
                name: 'Luxembourg',
                code: 'LU',
                flag: '🇱🇺',
                capital: 'Luxembourg City',
                currency: 'Euro (€)',
                language: 'Luxembourgish, French, German',
                description: 'Tiny wealthy nation with dramatic fortress and charming villages',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    luxembourgCity: {
                        id: 'luxembourgCity',
                        name: 'Luxembourg City',
                        country: 'Luxembourg',
                        region: 'Schengen',
                        description: 'UNESCO fortress capital with dramatic gorge and European institutions',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '130,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 90, mid: 170, luxury: 420 },
                        attractions: [
                            { name: 'Bock Casemates', type: 'Historic', description: 'UNESCO underground fortress tunnels' },
                            { name: 'Old Town', type: 'Historic', description: 'Charming streets on the plateau' },
                            { name: 'Grund', type: 'Neighborhood', description: 'Lower town in the valley' },
                            { name: 'Grand Ducal Palace', type: 'Palace', description: 'Official residence of Grand Duke' },
                            { name: 'Chemin de la Corniche', type: 'Viewpoint', description: 'Europe\'s most beautiful balcony' }
                        ],
                        tips: [
                            'All public transport is free',
                            'Multilingual - French, German, Luxembourgish',
                            'Very expensive - day trip option',
                            'Rainy - bring a jacket'
                        ]
                    }
                }
            },
            malta: {
                id: 'malta',
                name: 'Malta',
                code: 'MT',
                flag: '🇲🇹',
                capital: 'Valletta',
                currency: 'Euro (€)',
                language: 'Maltese, English',
                description: 'Mediterranean archipelago with ancient temples, Knights\' history, and crystal waters',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    valletta: {
                        id: 'valletta',
                        name: 'Valletta',
                        country: 'Malta',
                        region: 'Schengen',
                        description: 'Fortress capital built by Knights of St. John with baroque churches',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '6,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 60, mid: 120, luxury: 320 },
                        attractions: [
                            { name: 'St. John\'s Co-Cathedral', type: 'Religious', description: 'Baroque masterpiece with Caravaggio' },
                            { name: 'Upper Barrakka Gardens', type: 'Garden', description: 'Views over Grand Harbour' },
                            { name: 'Grand Master\'s Palace', type: 'Palace', description: 'Knights of St. John headquarters' },
                            { name: 'Strait Street', type: 'Street', description: 'Historic entertainment street' },
                            { name: 'Fort St. Elmo', type: 'Fort', description: 'Great Siege fortifications' }
                        ],
                        tips: [
                            'Whole capital is UNESCO World Heritage',
                            'Ferry to Three Cities for views',
                            'Try pastizzi (savory pastries)',
                            'English widely spoken'
                        ]
                    },
                    gozo: {
                        id: 'gozo',
                        name: 'Gozo',
                        country: 'Malta',
                        region: 'Schengen',
                        description: 'Malta\'s quieter sister island with ancient temples and rural charm',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '37,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 55, mid: 110, luxury: 280 },
                        attractions: [
                            { name: 'Ãƒâ€žÃ‚Â gantija Temples', type: 'Ancient', description: 'Older than Stonehenge and Pyramids' },
                            { name: 'Victoria (Rabat)', type: 'Town', description: 'Main town with Citadel' },
                            { name: 'Ramla Bay', type: 'Beach', description: 'Best red sand beach' },
                            { name: 'Dwejra', type: 'Nature', description: 'Inland sea and Blue Hole diving' },
                            { name: 'Ta\' Pinu Basilica', type: 'Religious', description: 'Pilgrimage church' }
                        ],
                        tips: [
                            'More rural and peaceful than Malta',
                            'Rent a car or quad to explore',
                            'Ferry from Cirkewwa, Malta',
                            'Best diving in the Mediterranean'
                        ]
                    }
                }
            },
            moldova: {
                id: 'moldova',
                name: 'Moldova',
                code: 'MD',
                flag: '🇲🇩',
                capital: 'ChiÃƒË†Ã¢â€žÂ¢inÃƒâ€žÃ†â€™u',
                currency: 'Moldovan Leu (MDL)',
                language: 'Romanian',
                description: 'Wine country of Eastern Europe with monasteries and Soviet legacy',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    chisinau: {
                        id: 'chisinau',
                        name: 'ChiÃƒË†Ã¢â€žÂ¢inÃƒâ€žÃ†â€™u',
                        country: 'Moldova',
                        region: 'Europe',
                        description: 'Post-Soviet capital with parks and world\'s largest wine cellars nearby',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '670,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Milestii Mici', type: 'Winery', description: 'World\'s largest underground wine cellar' },
                            { name: 'Cricova Winery', type: 'Winery', description: 'Famous underground wine city' },
                            { name: 'Nativity Cathedral', type: 'Religious', description: 'Main Orthodox cathedral' },
                            { name: 'Stefan cel Mare Park', type: 'Park', description: 'Central park and gathering spot' },
                            { name: 'National Museum of History', type: 'Museum', description: 'Moldovan history and culture' }
                        ],
                        tips: [
                            'Wine tours are the main attraction',
                            'Very affordable destination',
                            'Russian widely spoken',
                            'Visit Transnistria for Soviet nostalgia'
                        ]
                    }
                }
            },
            monaco: {
                id: 'monaco',
                name: 'Monaco',
                code: 'MC',
                flag: '🇲🇨',
                capital: 'Monaco',
                currency: 'Euro (€)',
                language: 'French',
                description: 'Tiny principality of glamour with casinos, yachts, and Formula 1',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    monteCarlo: {
                        id: 'monteCarlo',
                        name: 'Monte Carlo',
                        country: 'Monaco',
                        region: 'Schengen',
                        description: 'Playground of the rich with legendary casino and Grand Prix',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '15,000',
                        bestTime: 'May to September (Grand Prix late May)',
                        avgBudget: { budget: 100, mid: 250, luxury: 800 },
                        attractions: [
                            { name: 'Casino de Monte-Carlo', type: 'Landmark', description: 'Legendary casino and architecture' },
                            { name: 'Prince\'s Palace', type: 'Palace', description: 'Official residence with changing of guard' },
                            { name: 'Oceanographic Museum', type: 'Museum', description: 'Aquarium founded by Jacques Cousteau' },
                            { name: 'Monaco Grand Prix Circuit', type: 'Landmark', description: 'F1 street circuit through town' },
                            { name: 'Larvotto Beach', type: 'Beach', description: 'Monaco\'s public beach' }
                        ],
                        tips: [
                            'Dress code for casino - no shorts',
                            'Day trip from Nice is budget option',
                            'Grand Prix week is extremely expensive',
                            'Walk the entire country in a few hours'
                        ]
                    }
                }
            },
            montenegro: {
                id: 'montenegro',
                name: 'Montenegro',
                code: 'ME',
                flag: '🇲🇪',
                capital: 'Podgorica',
                currency: 'Euro (€)',
                language: 'Montenegrin',
                description: 'Dramatic Adriatic coast, medieval towns, and rugged mountain wilderness',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    kotor: {
                        id: 'kotor',
                        name: 'Kotor',
                        country: 'Montenegro',
                        region: 'Europe',
                        description: 'UNESCO walled town in dramatic fjord-like bay',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '13,000',
                        bestTime: 'May to June, September to October',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Old Town Walls', type: 'Historic', description: '4.5km of medieval fortifications' },
                            { name: 'San Giovanni Fortress', type: 'Castle', description: '1,350 steps to stunning bay views' },
                            { name: 'Bay of Kotor', type: 'Nature', description: 'Dramatic fjord-like inlet' },
                            { name: 'Our Lady of the Rocks', type: 'Island', description: 'Artificial island church' },
                            { name: 'Perast', type: 'Town', description: 'Charming baroque village nearby' }
                        ],
                        tips: [
                            'Climb fortress walls early morning',
                            'Cruise ships bring crowds - go early',
                            'Boat trip to Perast and islands',
                            'Day trip to Dubrovnik'
                        ]
                    },
                    budva: {
                        id: 'budva',
                        name: 'Budva',
                        country: 'Montenegro',
                        region: 'Europe',
                        description: 'Adriatic party town with beaches and medieval old town',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '20,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 55, mid: 110, luxury: 300 },
                        attractions: [
                            { name: 'Old Town (Stari Grad)', type: 'Historic', description: 'Medieval walled peninsula' },
                            { name: 'Mogren Beach', type: 'Beach', description: 'Beautiful pebble beach' },
                            { name: 'Sveti Stefan', type: 'Landmark', description: 'Iconic island resort nearby' },
                            { name: 'Citadel', type: 'Castle', description: 'Old town fortress' },
                            { name: 'Jaz Beach', type: 'Beach', description: 'Festival beach with music events' }
                        ],
                        tips: [
                            'Party scene July and August',
                            'Sveti Stefan is invite only for resort',
                            'Beach clubs can be expensive',
                            'Better beaches outside town center'
                        ]
                    }
                }
            },
            netherlands: {
                id: 'netherlands',
                name: 'Netherlands',
                code: 'NL',
                flag: '🇳🇱',
                capital: 'Amsterdam',
                currency: 'Euro (€)',
                language: 'Dutch',
                description: 'Canals, tulips, windmills, cycling culture, and liberal social policies',
                image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
                cities: {
                    amsterdam: {
                        id: 'amsterdam',
                        name: 'Amsterdam',
                        country: 'Netherlands',
                        region: 'Schengen',
                        description: 'Canal-ringed capital with world-class museums, cycling, and vibrant nightlife',
                        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
                        population: '1,200,000',
                        bestTime: 'April to May (tulip season), September',
                        avgBudget: { budget: 80, mid: 160, luxury: 400 },
                        attractions: [
                            { name: 'Rijksmuseum', type: 'Museum', description: 'Dutch masterpieces including Rembrandt' },
                            { name: 'Anne Frank House', type: 'Museum', description: 'WWII hiding place memorial' },
                            { name: 'Van Gogh Museum', type: 'Museum', description: 'World\'s largest Van Gogh collection' },
                            { name: 'Jordaan', type: 'Neighborhood', description: 'Charming streets with cafes and boutiques' },
                            { name: 'Canal Ring', type: 'Landmark', description: 'UNESCO World Heritage canals' }
                        ],
                        tips: [
                            'Rent a bike - it\'s the local way',
                            'Book Anne Frank House months ahead',
                            'Coffeeshops are not for coffee',
                            'King\'s Day (April 27) is huge party'
                        ]
                    },
                    rotterdam: {
                        id: 'rotterdam',
                        name: 'Rotterdam',
                        country: 'Netherlands',
                        region: 'Schengen',
                        description: 'Rebuilt modern architecture city with Europe\'s largest port',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '650,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                            { name: 'Cube Houses', type: 'Architecture', description: 'Iconic tilted cube apartments' },
                            { name: 'Markthal', type: 'Market', description: 'Stunning arch-shaped food hall' },
                            { name: 'Erasmus Bridge', type: 'Landmark', description: 'Iconic swan-shaped bridge' },
                            { name: 'Delfshaven', type: 'Historic', description: 'Historic harbor district' },
                            { name: 'SS Rotterdam', type: 'Ship', description: 'Historic cruise liner hotel' }
                        ],
                        tips: [
                            'Completely rebuilt after WWII',
                            'Architecture tours are worthwhile',
                            'More local feel than Amsterdam',
                            'Good base for Kinderdijk windmills'
                        ]
                    }
                }
            },
            northMacedonia: {
                id: 'northMacedonia',
                name: 'North Macedonia',
                code: 'MK',
                flag: '🇲🇰',
                capital: 'Skopje',
                currency: 'Macedonian Denar (MKD)',
                language: 'Macedonian',
                description: 'Balkan gem with Ottoman heritage, ancient lakes, and dramatic canyons',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    skopje: {
                        id: 'skopje',
                        name: 'Skopje',
                        country: 'North Macedonia',
                        region: 'Europe',
                        description: 'Capital rebuilt with controversial statues and charming old bazaar',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '550,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Old Bazaar', type: 'Historic', description: 'Ottoman-era market district' },
                            { name: 'Stone Bridge', type: 'Bridge', description: 'Symbol connecting old and new' },
                            { name: 'Macedonia Square', type: 'Square', description: 'Controversial statue-filled square' },
                            { name: 'Kale Fortress', type: 'Castle', description: 'Hilltop fortress with views' },
                            { name: 'Mother Teresa Memorial', type: 'Religious', description: 'Birthplace of the saint' }
                        ],
                        tips: [
                            'Skopje 2014 project is love/hate',
                            'Very affordable destination',
                            'Old Bazaar for traditional food',
                            'Day trip to Matka Canyon'
                        ]
                    },
                    ohrid: {
                        id: 'ohrid',
                        name: 'Ohrid',
                        country: 'North Macedonia',
                        region: 'Europe',
                        description: 'UNESCO ancient lake town with Byzantine churches',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '42,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Lake Ohrid', type: 'Nature', description: 'Ancient clear lake - Europe\'s oldest' },
                            { name: 'Church of St. John at Kaneo', type: 'Religious', description: 'Cliffside church on the lake' },
                            { name: 'Samuel\'s Fortress', type: 'Castle', description: 'Medieval fortress walls' },
                            { name: 'Old Town', type: 'Historic', description: 'Charming cobbled streets' },
                            { name: 'Bay of Bones', type: 'Archaeological', description: 'Reconstructed Bronze Age settlement' }
                        ],
                        tips: [
                            'Swim in ancient lake',
                            'Boat trip to St. Naum monastery',
                            'Both natural and cultural UNESCO site',
                            'Summer festival season'
                        ]
                    }
                }
            },
            poland: {
                id: 'poland',
                name: 'Poland',
                code: 'PL',
                flag: '🇵🇱',
                capital: 'Warsaw',
                currency: 'Polish ZÃƒâ€¦Ã¢â‚¬Å¡oty (PLN)',
                language: 'Polish',
                description: 'Medieval cities, tragic WWII history, pierogi cuisine, and vibrant culture',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    krakow: {
                        id: 'krakow',
                        name: 'KrakÃƒÆ’Ã‚Â³w',
                        country: 'Poland',
                        region: 'Schengen',
                        description: 'Medieval gem with Main Square, Jewish quarter, and sobering Auschwitz nearby',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '780,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                            { name: 'Main Market Square', type: 'Square', description: 'Largest medieval square in Europe' },
                            { name: 'Wawel Castle', type: 'Castle', description: 'Royal castle and cathedral' },
                            { name: 'Kazimierz', type: 'Neighborhood', description: 'Jewish quarter with Schindler\'s Factory' },
                            { name: 'Auschwitz-Birkenau', type: 'Memorial', description: 'Holocaust memorial site' },
                            { name: 'Wieliczka Salt Mine', type: 'Mine', description: 'UNESCO underground salt cathedral' }
                        ],
                        tips: [
                            'Book Auschwitz months ahead',
                            'Free walking tours excellent',
                            'Try pierogi and zapiekanka',
                            'Very affordable nightlife'
                        ]
                    },
                    warsaw: {
                        id: 'warsaw',
                        name: 'Warsaw',
                        country: 'Poland',
                        region: 'Schengen',
                        description: 'Rebuilt capital with reconstructed Old Town and communist history',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,800,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 45, mid: 90, luxury: 220 },
                        attractions: [
                            { name: 'Old Town', type: 'Historic', description: 'UNESCO reconstructed after WWII' },
                            { name: 'POLIN Museum', type: 'Museum', description: 'History of Polish Jews' },
                            { name: 'Palace of Culture', type: 'Landmark', description: 'Stalin-era skyscraper' },
                            { name: 'Warsaw Uprising Museum', type: 'Museum', description: '1944 uprising history' },
                            { name: 'Lazienki Park', type: 'Park', description: 'Royal park with palace' }
                        ],
                        tips: [
                            'Old Town completely rebuilt - remarkable',
                            'Chopin concerts in Lazienki Park',
                            'Vodka museum for tastings',
                            'Modern, forward-looking city'
                        ]
                    },
                    gdansk: {
                        id: 'gdansk',
                        name: 'GdaÃƒâ€¦Ã¢â‚¬Å¾sk',
                        country: 'Poland',
                        region: 'Schengen',
                        description: 'Baltic port city where Solidarity movement began and WWII started',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '470,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                            { name: 'Long Market', type: 'Historic', description: 'Beautiful trading street' },
                            { name: 'European Solidarity Centre', type: 'Museum', description: 'Solidarity trade union history' },
                            { name: 'Westerplatte', type: 'Memorial', description: 'Where WWII began' },
                            { name: 'St. Mary\'s Church', type: 'Religious', description: 'Largest brick church in world' },
                            { name: 'Motlawa River', type: 'Waterfront', description: 'Iconic waterfront with crane' }
                        ],
                        tips: [
                            'Amber capital of the world',
                            'Beach resorts at Sopot and Gdynia',
                            'Three cities form Tri-City',
                            'Great summer destination'
                        ]
                    }
                }
            },
            portugal: {
                id: 'portugal',
                name: 'Portugal',
                code: 'PT',
                flag: '🇵🇹',
                capital: 'Lisbon',
                currency: 'Euro (€)',
                language: 'Portuguese',
                description: 'Age of Discovery heritage, stunning coastline, port wine, and melancholic fado',
                image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
                cities: {
                    lisbon: {
                        id: 'lisbon',
                        name: 'Lisbon',
                        country: 'Portugal',
                        region: 'Schengen',
                        description: 'Hilly capital with trams, tiles, fado music, and Belem pastries',
                        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
                        population: '545,000',
                        bestTime: 'March to May, September to October',
                        avgBudget: { budget: 55, mid: 110, luxury: 300 },
                        attractions: [
                            { name: 'Belem Tower', type: 'Landmark', description: 'UNESCO Age of Discovery tower' },
                            { name: 'Jeronimos Monastery', type: 'Religious', description: 'UNESCO Manueline masterpiece' },
                            { name: 'Alfama', type: 'Neighborhood', description: 'Oldest district with fado bars' },
                            { name: 'Tram 28', type: 'Transport', description: 'Iconic vintage tram route' },
                            { name: 'Time Out Market', type: 'Food Hall', description: 'Best of Lisbon food scene' }
                        ],
                        tips: [
                            'Eat pastel de nata in Belem',
                            'Wear comfortable shoes - it\'s hilly',
                            'Listen to fado in Alfama',
                            'Very affordable Western European city'
                        ]
                    },
                    porto: {
                        id: 'porto',
                        name: 'Porto',
                        country: 'Portugal',
                        region: 'Schengen',
                        description: 'UNESCO riverside city famous for port wine cellars and azulejos',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '250,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Ribeira', type: 'Historic', description: 'UNESCO riverside neighborhood' },
                            { name: 'Vila Nova de Gaia', type: 'Wine', description: 'Port wine cellars across river' },
                            { name: 'Livraria Lello', type: 'Bookshop', description: 'Harry Potter-inspiring bookstore' },
                            { name: 'SÃƒÆ’Ã‚Â£o Bento Station', type: 'Architecture', description: 'Stunning azulejo tiles' },
                            { name: 'ClÃƒÆ’Ã‚Â©rigos Tower', type: 'Landmark', description: 'Iconic baroque bell tower' }
                        ],
                        tips: [
                            'Port wine tastings essential',
                            'Livraria Lello - buy ticket online',
                            'Francesinha is the local sandwich',
                            'Walk across Dom LuÃƒÆ’Ã‚Â­s I Bridge'
                        ]
                    },
                    algarve: {
                        id: 'algarve',
                        name: 'Algarve',
                        country: 'Portugal',
                        region: 'Schengen',
                        description: 'Dramatic cliffs, golden beaches, and golf resorts on southern coast',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '440,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 50, mid: 100, luxury: 300 },
                        attractions: [
                            { name: 'Benagil Cave', type: 'Nature', description: 'Iconic sea cave with skylight' },
                            { name: 'Ponta da Piedade', type: 'Nature', description: 'Dramatic cliff formations' },
                            { name: 'Lagos', type: 'Town', description: 'Charming old town with beaches' },
                            { name: 'Tavira', type: 'Town', description: 'Traditional Algarvian town' },
                            { name: 'Ria Formosa', type: 'Nature', description: 'Barrier island lagoons' }
                        ],
                        tips: [
                            'Rent car to explore coast',
                            'Benagil by kayak or boat tour',
                            'Avoid August - packed with tourists',
                            'Great for golf'
                        ]
                    }
                }
            },
            romania: {
                id: 'romania',
                name: 'Romania',
                code: 'RO',
                flag: '🇷🇴',
                capital: 'Bucharest',
                currency: 'Romanian Leu (RON)',
                language: 'Romanian',
                description: 'Dracula legend, Carpathian mountains, painted monasteries, and unspoiled villages',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    bucharest: {
                        id: 'bucharest',
                        name: 'Bucharest',
                        country: 'Romania',
                        region: 'Schengen',
                        description: 'Little Paris of the East with grand boulevards and communist-era contrasts',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,100,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                            { name: 'Palace of Parliament', type: 'Landmark', description: 'World\'s heaviest building' },
                            { name: 'Old Town', type: 'Historic', description: 'Nightlife and historic streets' },
                            { name: 'Romanian Athenaeum', type: 'Architecture', description: 'Stunning concert hall' },
                            { name: 'Village Museum', type: 'Museum', description: 'Open-air traditional village' },
                            { name: 'Caru\' cu Bere', type: 'Restaurant', description: 'Historic beer hall' }
                        ],
                        tips: [
                            'Palace of Parliament tours book up',
                            'Very affordable nightlife',
                            'Uber and Bolt work well',
                            'Base for Transylvania trips'
                        ]
                    },
                    brasov: {
                        id: 'brasov',
                        name: 'BraÃƒË†Ã¢â€žÂ¢ov',
                        country: 'Romania',
                        region: 'Schengen',
                        description: 'Transylvanian gem with Saxon history and gateway to Dracula\'s castle',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '290,000',
                        bestTime: 'May to September, December (skiing)',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Council Square', type: 'Square', description: 'Beautiful medieval center' },
                            { name: 'Black Church', type: 'Religious', description: 'Largest Gothic church in Romania' },
                            { name: 'TÃƒÆ’Ã‚Â¢mpa Mountain', type: 'Viewpoint', description: 'Cable car to Hollywood-style sign' },
                            { name: 'Bran Castle', type: 'Castle', description: 'Dracula\'s Castle nearby' },
                            { name: 'PeleÃƒË†Ã¢â€žÂ¢ Castle', type: 'Castle', description: 'Stunning fairytale castle in Sinaia' }
                        ],
                        tips: [
                            'Best base for Transylvania',
                            'Bran Castle overrated but fun',
                            'PeleÃƒË†Ã¢â€žÂ¢ Castle is more impressive',
                            'Good skiing in winter'
                        ]
                    }
                }
            },
            serbia: {
                id: 'serbia',
                name: 'Serbia',
                code: 'RS',
                flag: '🇷🇸',
                capital: 'Belgrade',
                currency: 'Serbian Dinar (RSD)',
                language: 'Serbian',
                description: 'Legendary nightlife, fortress history, and warm Balkan hospitality',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    belgrade: {
                        id: 'belgrade',
                        name: 'Belgrade',
                        country: 'Serbia',
                        region: 'Europe',
                        description: 'Party capital of the Balkans at confluence of Danube and Sava rivers',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,400,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Kalemegdan Fortress', type: 'Castle', description: 'Fortress at river confluence' },
                            { name: 'Skadarlija', type: 'Street', description: 'Bohemian quarter with restaurants' },
                            { name: 'Temple of St. Sava', type: 'Religious', description: 'Largest Orthodox church in Balkans' },
                            { name: 'Ada Ciganlija', type: 'Beach', description: 'River beach and recreation' },
                            { name: 'River Clubs', type: 'Nightlife', description: 'Famous floating nightclubs' }
                        ],
                        tips: [
                            'Nightlife is legendary - starts late',
                            'Try Ãƒâ€žÃ¢â‚¬Â¡evapi and pljeskavica',
                            'Rakija is the national drink',
                            'Very affordable destination'
                        ]
                    },
                    noviSad: {
                        id: 'noviSad',
                        name: 'Novi Sad',
                        country: 'Serbia',
                        region: 'Europe',
                        description: 'Charming cultural capital with Petrovaradin Fortress and EXIT festival',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '290,000',
                        bestTime: 'May to September (EXIT in July)',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Petrovaradin Fortress', type: 'Castle', description: 'Gibraltar of the Danube, EXIT festival venue' },
                            { name: 'Danube Park', type: 'Park', description: 'Central city park' },
                            { name: 'Liberty Square', type: 'Square', description: 'Main square with cathedral' },
                            { name: 'Stari Grad', type: 'Historic', description: 'Old town center' },
                            { name: 'EXIT Festival', type: 'Festival', description: 'Major music festival' }
                        ],
                        tips: [
                            'EXIT Festival in July massive',
                            'More relaxed than Belgrade',
                            'European Capital of Culture 2022',
                            'Day trip from Belgrade'
                        ]
                    }
                }
            },
            slovakia: {
                id: 'slovakia',
                name: 'Slovakia',
                code: 'SK',
                flag: '🇸🇰',
                capital: 'Bratislava',
                currency: 'Euro (€)',
                language: 'Slovak',
                description: 'Compact country with castles, High Tatras mountains, and folk traditions',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    bratislava: {
                        id: 'bratislava',
                        name: 'Bratislava',
                        country: 'Slovakia',
                        region: 'Schengen',
                        description: 'Compact capital with castle views and quirky statues at Vienna\'s doorstep',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '440,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 45, mid: 90, luxury: 220 },
                        attractions: [
                            { name: 'Bratislava Castle', type: 'Castle', description: 'Hilltop castle with city views' },
                            { name: 'Old Town', type: 'Historic', description: 'Compact medieval center' },
                            { name: 'Ãƒâ€žÃ…â€™umin (The Watcher)', type: 'Statue', description: 'Famous manhole statue' },
                            { name: 'St. Martin\'s Cathedral', type: 'Religious', description: 'Coronation church' },
                            { name: 'UFO Tower', type: 'Viewpoint', description: 'Unique bridge observation deck' }
                        ],
                        tips: [
                            'Day trip from Vienna (1 hour)',
                            'Very walkable old town',
                            'Much cheaper than Vienna',
                            'Try bryndzovÃƒÆ’Ã‚Â© haluÃƒâ€¦Ã‚Â¡ky (sheep cheese dumplings)'
                        ]
                    },
                    highTatras: {
                        id: 'highTatras',
                        name: 'High Tatras',
                        country: 'Slovakia',
                        region: 'Schengen',
                        description: 'Smallest high mountain range with alpine hiking and skiing',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '10,000',
                        bestTime: 'June to September (hiking), December to March (skiing)',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                            { name: 'LomnickÃƒÆ’Ã‚Â½ Ãƒâ€¦Ã‚Â¡tÃƒÆ’Ã‚Â­t', type: 'Peak', description: 'Cable car to 2,634m summit' },
                            { name: 'Morskie Oko', type: 'Lake', description: 'Stunning mountain lake (Poland side)' },
                            { name: 'Hrebienok', type: 'Viewpoint', description: 'Funicular to waterfall hikes' },
                            { name: 'Ãƒâ€¦Ã‚Â trbskÃƒÆ’Ã‚Â© Pleso', type: 'Lake', description: 'Resort village with mountain lake' },
                            { name: 'Belianske Tatry', type: 'Nature', description: 'Cave and forest hiking' }
                        ],
                        tips: [
                            'World\'s smallest high mountains',
                            'Excellent hiking without crowds',
                            'Affordable ski resorts',
                            'Base in TatranskÃƒÆ’Ã‚Â¡ Lomnica or StarÃƒÆ’Ã‚Â½ Smokovec'
                        ]
                    }
                }
            },
            ukraine: {
                id: 'ukraine',
                name: 'Ukraine',
                code: 'UA',
                flag: '🇺🇦',
                capital: 'Kyiv',
                currency: 'Ukrainian Hryvnia (UAH)',
                language: 'Ukrainian',
                description: 'Fascinating history, resilient culture, beautiful churches, and warm hospitality',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    kyiv: {
                        id: 'kyiv',
                        name: 'Kyiv',
                        country: 'Ukraine',
                        region: 'Europe',
                        description: 'Historic capital with golden-domed monasteries and vibrant culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,000,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'St. Sophia\'s Cathedral', type: 'Religious', description: 'UNESCO 11th-century Byzantine cathedral' },
                            { name: 'Kyiv Pechersk Lavra', type: 'Religious', description: 'Cave monastery with catacombs' },
                            { name: 'Maidan Nezalezhnosti', type: 'Square', description: 'Independence Square - historic center' },
                            { name: 'Andriyivskyy Descent', type: 'Street', description: 'Artistic cobbled street' },
                            { name: 'Motherland Monument', type: 'Monument', description: '62m tall Soviet-era statue' }
                        ],
                        tips: [
                            'Check travel advisories before visiting',
                            'Incredibly hospitable people',
                            'Very affordable destination',
                            'Learn a few Ukrainian words'
                        ]
                    },
                    lviv: {
                        id: 'lviv',
                        name: 'Lviv',
                        country: 'Ukraine',
                        region: 'Europe',
                        description: 'Beautifully preserved Austrian-Hungarian city with coffee culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '720,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Rynok Square', type: 'Square', description: 'Beautiful central marketplace' },
                            { name: 'High Castle Hill', type: 'Viewpoint', description: 'City views from park' },
                            { name: 'Opera House', type: 'Theater', description: 'Neo-Renaissance masterpiece' },
                            { name: 'Lychakiv Cemetery', type: 'Cemetery', description: 'Historic burial ground' },
                            { name: 'Coffee Mines', type: 'Cafe', description: 'Underground themed coffee shop' }
                        ],
                        tips: [
                            'Coffee culture is serious here',
                            'Chocolate and coffee shops everywhere',
                            'Very walkable old town',
                            'Budget-friendly city break'
                        ]
                    }
                }
            },
            unitedKingdom: {
                id: 'unitedKingdom',
                name: 'United Kingdom',
                code: 'GB',
                flag: '🇬🇧',
                capital: 'London',
                currency: 'British Pound (GBP)',
                language: 'English',
                description: 'Royal heritage, pub culture, stunning countryside, and iconic cities',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    london: {
                        id: 'london',
                        name: 'London',
                        country: 'United Kingdom',
                        region: 'Europe',
                        description: 'Historic royal capital with world-class museums, theater, and diverse culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '8,900,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Big Ben & Parliament', type: 'Landmark', description: 'Iconic clock tower and government' },
                            { name: 'Tower of London', type: 'Castle', description: 'Crown Jewels and 1,000 years of history' },
                            { name: 'British Museum', type: 'Museum', description: 'World history collection - free entry' },
                            { name: 'Buckingham Palace', type: 'Palace', description: 'Changing of the Guard' },
                            { name: 'South Bank', type: 'Waterfront', description: 'River walk with attractions' }
                        ],
                        tips: [
                            'Most major museums are free',
                            'Get an Oyster card for transport',
                            'West End shows rival Broadway',
                            'Weather is unpredictable - bring layers'
                        ]
                    },
                    edinburgh: {
                        id: 'edinburgh',
                        name: 'Edinburgh',
                        country: 'United Kingdom',
                        region: 'Europe',
                        description: 'Scottish capital with medieval old town, castle, and festival culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '540,000',
                        bestTime: 'May to September (August for Festival)',
                        avgBudget: { budget: 80, mid: 160, luxury: 400 },
                        attractions: [
                            { name: 'Edinburgh Castle', type: 'Castle', description: 'Iconic fortress on volcanic rock' },
                            { name: 'Royal Mile', type: 'Street', description: 'Historic street from castle to palace' },
                            { name: 'Arthur\'s Seat', type: 'Nature', description: 'Ancient volcano hike with views' },
                            { name: 'Fringe Festival', type: 'Festival', description: 'World\'s largest arts festival' },
                            { name: 'Holyrood Palace', type: 'Palace', description: 'Queen\'s Scottish residence' }
                        ],
                        tips: [
                            'August Festival season is incredible but crowded',
                            'Book well ahead for August',
                            'Try a whisky tasting',
                            'Wear comfortable shoes for hills'
                        ]
                    },
                    cotswolds: {
                        id: 'cotswolds',
                        name: 'Cotswolds',
                        country: 'United Kingdom',
                        region: 'Europe',
                        description: 'Honey-colored villages and rolling hills - quintessential England',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '150,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                            { name: 'Bourton-on-the-Water', type: 'Village', description: 'Venice of the Cotswolds' },
                            { name: 'Bibury', type: 'Village', description: 'Arlington Row stone cottages' },
                            { name: 'Castle Combe', type: 'Village', description: 'Prettiest village in England' },
                            { name: 'Broadway Tower', type: 'Landmark', description: 'Folly with amazing views' },
                            { name: 'Blenheim Palace', type: 'Palace', description: 'Churchill\'s birthplace' }
                        ],
                        tips: [
                            'Rent a car to explore properly',
                            'Sunday roast in a village pub',
                            'Cream tea is essential',
                            'Very popular - visit weekdays'
                        ]
                    },
                    manchester: {
                        id: 'manchester',
                        name: 'Manchester',
                        country: 'United Kingdom',
                        region: 'Europe',
                        description: 'Industrial heritage turned cultural capital with football and music history',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '550,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                            { name: 'Old Trafford', type: 'Sports', description: 'Theatre of Dreams - Man United' },
                            { name: 'Etihad Stadium', type: 'Sports', description: 'Manchester City home' },
                            { name: 'Northern Quarter', type: 'Neighborhood', description: 'Indie shops and street art' },
                            { name: 'Science & Industry Museum', type: 'Museum', description: 'Industrial Revolution history' },
                            { name: 'John Rylands Library', type: 'Landmark', description: 'Gothic library masterpiece' }
                        ],
                        tips: [
                            'Music history - Oasis, The Smiths',
                            'Curry Mile in Rusholme',
                            'Football rivalry is serious',
                            '2 hour train from London'
                        ]
                    },
                    liverpool: {
                        id: 'liverpool',
                        name: 'Liverpool',
                        country: 'United Kingdom',
                        region: 'Europe',
                        description: 'Beatles birthplace with UNESCO waterfront and passionate football culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '500,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 65, mid: 130, luxury: 320 },
                        attractions: [
                            { name: 'The Beatles Story', type: 'Museum', description: 'World\'s largest Beatles exhibition' },
                            { name: 'Cavern Club', type: 'Music', description: 'Where Beatles performed' },
                            { name: 'Albert Dock', type: 'Waterfront', description: 'UNESCO World Heritage dock' },
                            { name: 'Anfield', type: 'Sports', description: 'Liverpool FC home' },
                            { name: 'Liverpool Cathedral', type: 'Religious', description: 'Largest cathedral in Britain' }
                        ],
                        tips: [
                            'Beatles fans must visit',
                            'Ferry across the Mersey',
                            'Scouse accent is strong',
                            'Very friendly locals'
                        ]
                    },
                    glasgow: {
                        id: 'glasgow',
                        name: 'Glasgow',
                        country: 'United Kingdom',
                        region: 'Europe',
                        description: 'Scotland\'s largest city with Victorian architecture and vibrant arts scene',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '635,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                            { name: 'Kelvingrove Art Gallery', type: 'Museum', description: 'Free world-class museum' },
                            { name: 'George Square', type: 'Square', description: 'Victorian city center' },
                            { name: 'Glasgow Cathedral', type: 'Religious', description: 'Medieval cathedral' },
                            { name: 'West End', type: 'Neighborhood', description: 'Bohemian area with university' },
                            { name: 'Riverside Museum', type: 'Museum', description: 'Transport museum by Zaha Hadid' }
                        ],
                        tips: [
                            'People are famously friendly',
                            'Gateway to Scottish Highlands',
                            'Rich music and arts scene',
                            'Cheaper than Edinburgh'
                        ]
                    },
                    birmingham: {
                        id: 'birmingham',
                        name: 'Birmingham',
                        country: 'United Kingdom',
                        region: 'Europe',
                        description: 'England\'s second city with canals, Peaky Blinders heritage, and Balti Triangle',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,150,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                            { name: 'Bullring', type: 'Shopping', description: 'Iconic shopping center' },
                            { name: 'Cadbury World', type: 'Attraction', description: 'Chocolate factory experience' },
                            { name: 'Jewellery Quarter', type: 'Historic', description: 'Historic jewelry making district' },
                            { name: 'Birmingham Museum', type: 'Museum', description: 'Pre-Raphaelite collection' },
                            { name: 'Canal Network', type: 'Waterway', description: 'More canals than Venice' }
                        ],
                        tips: [
                            'Balti Triangle for curry',
                            'Peaky Blinders tours available',
                            'More canals than Venice!',
                            'Central UK location'
                        ]
                    }
                }
            },
            slovenia: {
                id: 'slovenia',
                name: 'Slovenia',
                code: 'SI',
                flag: '🇸🇮',
                capital: 'Ljubljana',
                currency: 'Euro (€)',
                language: 'Slovenian',
                description: 'Alpine lakes, caves, and charming capital in compact green country',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    ljubljana: {
                        id: 'ljubljana',
                        name: 'Ljubljana',
                        country: 'Slovenia',
                        region: 'Schengen',
                        description: 'Green capital with dragon bridge, castle hill, and car-free center',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '290,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 50, mid: 100, luxury: 260 },
                        attractions: [
                            { name: 'Ljubljana Castle', type: 'Castle', description: 'Hilltop castle with funicular' },
                            { name: 'Triple Bridge', type: 'Bridge', description: 'Iconic three-part bridge' },
                            { name: 'Dragon Bridge', type: 'Bridge', description: 'Art nouveau bridge with dragons' },
                            { name: 'PreÃƒâ€¦Ã‚Â¡eren Square', type: 'Square', description: 'Main square with pink church' },
                            { name: 'Central Market', type: 'Market', description: 'Riverside market by Plenik' }
                        ],
                        tips: [
                            'Very walkable city center',
                            'Friday Open Kitchen food market',
                            'Day trips to Lake Bled easy',
                            'Green Capital of Europe 2016'
                        ]
                    },
                    bled: {
                        id: 'bled',
                        name: 'Lake Bled',
                        country: 'Slovenia',
                        region: 'Schengen',
                        description: 'Fairytale emerald lake with island church and clifftop castle',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '8,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 55, mid: 110, luxury: 300 },
                        attractions: [
                            { name: 'Bled Island', type: 'Island', description: 'Pletna boat to island church' },
                            { name: 'Bled Castle', type: 'Castle', description: 'Clifftop castle with lake views' },
                            { name: 'Vintgar Gorge', type: 'Nature', description: 'Wooden walkway through gorge' },
                            { name: 'Lake Walk', type: 'Walk', description: '6km scenic loop around lake' },
                            { name: 'Bled Cream Cake', type: 'Food', description: 'Famous kremna rezina' }
                        ],
                        tips: [
                            'Pletna boat ride traditional',
                            'Ring wishing bell on island',
                            'Summer very crowded',
                            'Try the cream cake'
                        ]
                    }
                }
            },
            spain: {
                id: 'spain',
                name: 'Spain',
                code: 'ES',
                flag: '🇪🇸',
                capital: 'Madrid',
                currency: 'Euro (€)',
                language: 'Spanish, Catalan, Basque',
                description: 'Flamenco, tapas, Gaudi, beaches, and passionate culture',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    barcelona: {
                        id: 'barcelona',
                        name: 'Barcelona',
                        country: 'Spain',
                        region: 'Schengen',
                        description: 'Gaudi\'s masterpieces, Mediterranean beaches, and vibrant nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,600,000',
                        bestTime: 'May to June, September to October',
                        avgBudget: { budget: 70, mid: 140, luxury: 380 },
                        attractions: [
                            { name: 'Sagrada Familia', type: 'Religious', description: 'Gaudi\'s unfinished masterpiece' },
                            { name: 'Park GÃƒÆ’Ã‚Â¼ell', type: 'Park', description: 'Gaudi\'s mosaic wonderland' },
                            { name: 'La Rambla', type: 'Street', description: 'Famous pedestrian boulevard' },
                            { name: 'Gothic Quarter', type: 'Historic', description: 'Medieval streets and cathedral' },
                            { name: 'Barceloneta Beach', type: 'Beach', description: 'City beach with seafood' }
                        ],
                        tips: [
                            'Book Sagrada Familia months ahead',
                            'Watch for pickpockets on La Rambla',
                            'Dinner starts at 9pm or later',
                            'Beach clubs in summer'
                        ]
                    },
                    madrid: {
                        id: 'madrid',
                        name: 'Madrid',
                        country: 'Spain',
                        region: 'Schengen',
                        description: 'Royal capital with world-class art museums and legendary nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,300,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 65, mid: 130, luxury: 350 },
                        attractions: [
                            { name: 'Prado Museum', type: 'Museum', description: 'World\'s best Spanish art collection' },
                            { name: 'Royal Palace', type: 'Palace', description: 'Largest royal palace in Europe' },
                            { name: 'Retiro Park', type: 'Park', description: 'Stunning city park with crystal palace' },
                            { name: 'Plaza Mayor', type: 'Square', description: 'Grand arcaded square' },
                            { name: 'Gran VÃƒÆ’Ã‚Â­a', type: 'Street', description: 'Shopping and entertainment avenue' }
                        ],
                        tips: [
                            'Free museum hours in evenings',
                            'Spaniards eat very late',
                            'Tapas hopping is the way',
                            'Nightlife starts after midnight'
                        ]
                    },
                    seville: {
                        id: 'seville',
                        name: 'Seville',
                        country: 'Spain',
                        region: 'Schengen',
                        description: 'Flamenco heartland with Moorish palace, cathedral, and passionate culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '690,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 55, mid: 110, luxury: 300 },
                        attractions: [
                            { name: 'AlcÃƒÆ’Ã‚Â¡zar', type: 'Palace', description: 'Stunning Moorish-Gothic palace' },
                            { name: 'Cathedral & Giralda', type: 'Religious', description: 'World\'s largest Gothic cathedral' },
                            { name: 'Plaza de EspaÃƒÆ’Ã‚Â±a', type: 'Square', description: 'Spectacular 1929 exposition plaza' },
                            { name: 'Triana', type: 'Neighborhood', description: 'Ceramics and flamenco district' },
                            { name: 'Flamenco Shows', type: 'Culture', description: 'Authentic flamenco in tablaos' }
                        ],
                        tips: [
                            'Extremely hot in summer - avoid',
                            'Watch authentic flamenco',
                            'Feria de Abril is incredible',
                            'Try tapas in Triana'
                        ]
                    },
                    valencia: {
                        id: 'valencia',
                        name: 'Valencia',
                        country: 'Spain',
                        region: 'Schengen',
                        description: 'Mediterranean city with futuristic architecture and famous paella',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '800,000',
                        bestTime: 'March to November',
                        avgBudget: { budget: 60, mid: 110, luxury: 300 },
                        attractions: [
                            { name: 'City of Arts and Sciences', type: 'Architecture', description: 'Futuristic Calatrava complex' },
                            { name: 'La Lonja de la Seda', type: 'UNESCO', description: 'Gothic silk exchange' },
                            { name: 'Central Market', type: 'Market', description: 'Art Nouveau food market' },
                            { name: 'Bioparc', type: 'Zoo', description: 'Immersive African zoo' },
                            { name: 'Malvarrosa Beach', type: 'Beach', description: 'Urban beach strip' }
                        ],
                        tips: [
                            'Authentic paella birthplace',
                            'Las Fallas festival in March',
                            'Rent a bike - very flat city',
                            'Cheaper than Barcelona or Madrid'
                        ]
                    },
                    zaragoza: {
                        id: 'zaragoza',
                        name: 'Zaragoza',
                        country: 'Spain',
                        region: 'Schengen',
                        description: 'Historic city on the Ebro with Roman, Moorish, and Christian heritage',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '680,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 55, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Basilica del Pilar', type: 'Religious', description: 'Massive baroque basilica on Ebro' },
                            { name: 'La Seo Cathedral', type: 'Religious', description: 'Gothic-Mudejar cathedral' },
                            { name: 'AljaferÃƒÆ’Ã‚Â­a Palace', type: 'UNESCO', description: 'Moorish palace complex' },
                            { name: 'Roman Theatre', type: 'Ancient', description: '1st century Roman ruins' },
                            { name: 'El Tubo', type: 'Neighborhood', description: 'Tapas bar district' }
                        ],
                        tips: [
                            'Between Madrid and Barcelona',
                            'Excellent tapas scene',
                            'Less touristy than other Spanish cities',
                            'Pilar festival in October'
                        ]
                    }
                }
            },
            switzerland: {
                id: 'switzerland',
                name: 'Switzerland',
                code: 'CH',
                flag: '🇨🇭',
                capital: 'Bern',
                currency: 'Swiss Franc (CHF)',
                language: 'German, French, Italian, Romansh',
                description: 'Alpine paradise with chocolate, watches, scenic trains, and pristine lakes',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    zurich: {
                        id: 'zurich',
                        name: 'Zurich',
                        country: 'Switzerland',
                        region: 'Schengen',
                        description: 'Banking capital with old town, lake, and gateway to Alps',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '420,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 120, mid: 220, luxury: 550 },
                        attractions: [
                            { name: 'Old Town', type: 'Historic', description: 'Medieval streets along Limmat River' },
                            { name: 'Bahnhofstrasse', type: 'Street', description: 'Luxury shopping street' },
                            { name: 'Lake Zurich', type: 'Nature', description: 'Swimming and boat cruises' },
                            { name: 'Kunsthaus', type: 'Museum', description: 'Major art museum' },
                            { name: 'Uetliberg', type: 'Viewpoint', description: 'Mountain viewpoint above city' }
                        ],
                        tips: [
                            'Very expensive - budget carefully',
                            'Lake swimming in summer',
                            'Day trips to Alps easy',
                            'Tap water is excellent'
                        ]
                    },
                    zermatt: {
                        id: 'zermatt',
                        name: 'Zermatt',
                        country: 'Switzerland',
                        region: 'Schengen',
                        description: 'Car-free Alpine village at foot of iconic Matterhorn',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '6,000',
                        bestTime: 'July to September (hiking), December to April (skiing)',
                        avgBudget: { budget: 150, mid: 280, luxury: 700 },
                        attractions: [
                            { name: 'Matterhorn', type: 'Mountain', description: 'Iconic pyramid peak' },
                            { name: 'Gornergrat Railway', type: 'Train', description: 'Cog railway with glacier views' },
                            { name: 'Klein Matterhorn', type: 'Viewpoint', description: 'Highest cable car station in Europe' },
                            { name: 'Five Lakes Walk', type: 'Hike', description: 'Matterhorn reflections in lakes' },
                            { name: 'Glacier Paradise', type: 'Attraction', description: 'Year-round snow at 3,883m' }
                        ],
                        tips: [
                            'Car-free - arrive by train',
                            'Extremely expensive',
                            'Book accommodation far ahead',
                            'Skiing even in summer'
                        ]
                    },
                    lucerne: {
                        id: 'lucerne',
                        name: 'Lucerne',
                        country: 'Switzerland',
                        region: 'Schengen',
                        description: 'Medieval city on lake with wooden bridge and mountain backdrop',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '82,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 110, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Chapel Bridge', type: 'Bridge', description: 'Oldest wooden covered bridge in Europe' },
                            { name: 'Mount Pilatus', type: 'Mountain', description: 'Cog railway and cable car' },
                            { name: 'Lake Lucerne', type: 'Nature', description: 'Paddle steamer cruises' },
                            { name: 'Lion Monument', type: 'Monument', description: 'Carved lion in rock face' },
                            { name: 'Old Town', type: 'Historic', description: 'Medieval painted buildings' }
                        ],
                        tips: [
                            'Golden Round Trip to Pilatus',
                            'Classic Swiss town',
                            'Day trip from Zurich',
                            'Chocolate and watch shopping'
                        ]
                    },
                    geneva: {
                        id: 'geneva',
                        name: 'Geneva',
                        country: 'Switzerland',
                        region: 'Schengen',
                        description: 'International city of diplomacy with stunning lake and Alpine views',
                        image: 'https://images.unsplash.com/photo-1573108037329-37aa135a142e?w=800',
                        population: '515,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 120, mid: 220, luxury: 550 },
                        attractions: [
                            { name: 'Jet d\'Eau', type: 'Landmark', description: 'Iconic 140m fountain on Lake Geneva' },
                            { name: 'United Nations Office', type: 'Institution', description: 'Palais des Nations guided tours' },
                            { name: 'Old Town', type: 'Historic', description: 'Medieval streets and St. Pierre Cathedral' },
                            { name: 'CERN', type: 'Science', description: 'Particle physics research center' },
                            { name: 'Lake Geneva Cruise', type: 'Experience', description: 'Belle ÃƒÆ’Ã‚Â©poque paddle steamers' }
                        ],
                        tips: [
                            'Geneva Transport Card free for hotel guests',
                            'CERN tours book months ahead',
                            'French is the main language',
                            'Day trip to Chamonix easily accessible'
                        ]
                    },
                    lausanne: {
                        id: 'lausanne',
                        name: 'Lausanne',
                        country: 'Switzerland',
                        region: 'Schengen',
                        description: 'Olympic capital with hillside old town and vineyard terraces',
                        image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
                        population: '420,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 110, mid: 200, luxury: 480 },
                        attractions: [
                            { name: 'Olympic Museum', type: 'Museum', description: 'Interactive museum on Olympic history' },
                            { name: 'Cathedral of Notre-Dame', type: 'Religious', description: 'Gothic masterpiece with night watchman' },
                            { name: 'Ouchy Waterfront', type: 'Promenade', description: 'Lakeside promenade with views' },
                            { name: 'Lavaux Vineyards', type: 'UNESCO', description: 'Terraced vineyards UNESCO site' },
                            { name: 'Collection de l\'Art Brut', type: 'Museum', description: 'Outsider art collection' }
                        ],
                        tips: [
                            'M2 metro is very steep',
                            'Wine tasting in Lavaux highly recommended',
                            'Last nightwatchman in Europe calls at midnight',
                            'Hilly city - good walking shoes essential'
                        ]
                    },
                    bern: {
                        id: 'bern',
                        name: 'Bern',
                        country: 'Switzerland',
                        region: 'Schengen',
                        description: 'Swiss capital with UNESCO old town and bear park',
                        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800',
                        population: '420,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 100, mid: 190, luxury: 450 },
                        attractions: [
                            { name: 'Zytglogge', type: 'Landmark', description: 'Medieval clock tower with astronomical clock' },
                            { name: 'Einstein House', type: 'Museum', description: 'Where Einstein developed relativity theory' },
                            { name: 'Bear Park', type: 'Park', description: 'Hillside enclosure for Bern\'s symbol' },
                            { name: 'Federal Palace', type: 'Government', description: 'Swiss parliament with tours' },
                            { name: 'Aare River Swimming', type: 'Activity', description: 'Floating down the turquoise river' }
                        ],
                        tips: [
                            'River swimming is a local tradition in summer',
                            '6km of covered arcades for shopping',
                            'Most government offices are here',
                            'Rose Garden offers panoramic old town views'
                        ]
                    }
                }
            },
            france: {
                id: 'france',
                name: 'France',
                code: 'FR',
                flag: '🇫🇷',
                capital: 'Paris',
                currency: 'Euro (€)',
                language: 'French',
                description: 'World capital of art, fashion, cuisine, and romance',
                image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
                cities: {
                    paris: {
                        id: 'paris',
                        name: 'Paris',
                        country: 'France',
                        region: 'Schengen',
                        description: 'City of Light with iconic landmarks, world-class museums, and romantic ambiance',
                        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
                        population: '12,000,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 100, mid: 180, luxury: 500 },
                        attractions: [
                            { name: 'Eiffel Tower', type: 'Landmark', description: 'Iconic iron lattice tower' },
                            { name: 'Louvre Museum', type: 'Museum', description: 'World\'s largest art museum with Mona Lisa' },
                            { name: 'Notre-Dame Cathedral', type: 'Religious', description: 'Gothic masterpiece (under restoration)' },
                            { name: 'Champs-ÃƒÆ’Ã¢â‚¬Â°lysÃƒÆ’Ã‚Â©es', type: 'Street', description: 'Famous avenue to Arc de Triomphe' },
                            { name: 'Montmartre', type: 'Neighborhood', description: 'Artistic hilltop neighborhood with SacrÃƒÆ’Ã‚Â©-CÃƒâ€¦Ã¢â‚¬Å“ur' }
                        ],
                        tips: [
                            'Book museum tickets online to skip lines',
                            'Metro is efficient and affordable',
                            'Learn basic French phrases - locals appreciate it',
                            'Sunday brunch is a Parisian tradition'
                        ]
                    },
                    lyon: {
                        id: 'lyon',
                        name: 'Lyon',
                        country: 'France',
                        region: 'Schengen',
                        description: 'Gastronomic capital of France with Renaissance architecture and silk history',
                        image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800',
                        population: '2,300,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Vieux Lyon', type: 'Historic', description: 'Renaissance old town with traboules' },
                            { name: 'Basilica of Notre-Dame de FourviÃƒÆ’Ã‚Â¨re', type: 'Religious', description: 'Hilltop basilica with city views' },
                            { name: 'Les Halles de Lyon Paul Bocuse', type: 'Market', description: 'Premier food market' },
                            { name: 'Presqu\'ÃƒÆ’Ã‚Â®le', type: 'Neighborhood', description: 'Central peninsula with shops and cafes' },
                            { name: 'MusÃƒÆ’Ã‚Â©e des Confluences', type: 'Museum', description: 'Science museum in stunning architecture' }
                        ],
                        tips: [
                            'Try a traditional bouchon restaurant',
                            'Festival of Lights in December is magical',
                            'Explore the secret traboule passageways',
                            'Day trips to Beaujolais wine region'
                        ]
                    },
                    marseille: {
                        id: 'marseille',
                        name: 'Marseille',
                        country: 'France',
                        region: 'Schengen',
                        description: 'France\'s oldest city with Mediterranean flair, diverse culture, and bouillabaisse',
                        image: 'https://images.unsplash.com/photo-1589810264340-0ce27bfbf751?w=800',
                        population: '1,600,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                            { name: 'Vieux-Port', type: 'Harbor', description: 'Historic old port with fish market' },
                            { name: 'Notre-Dame de la Garde', type: 'Religious', description: 'Hilltop basilica overlooking the city' },
                            { name: 'Le Panier', type: 'Neighborhood', description: 'Oldest neighborhood with street art' },
                            { name: 'Calanques', type: 'Nature', description: 'Stunning coastal cliffs and inlets' },
                            { name: 'MuCEM', type: 'Museum', description: 'Mediterranean civilizations museum' }
                        ],
                        tips: [
                            'Try authentic bouillabaisse fish stew',
                            'Visit the Calanques by boat or hiking',
                            'Rough around edges - stay aware',
                            'Gateway to Provence'
                        ]
                    },
                    nice: {
                        id: 'nice',
                        name: 'Nice',
                        country: 'France',
                        region: 'Schengen',
                        description: 'French Riviera gem with pebbly beaches, art museums, and Belle ÃƒÆ’Ã¢â‚¬Â°poque elegance',
                        image: 'https://images.unsplash.com/photo-1528909514011-a5d48a216a95?w=800',
                        population: '940,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Promenade des Anglais', type: 'Waterfront', description: 'Famous seafront promenade' },
                            { name: 'Vieille Ville', type: 'Historic', description: 'Charming old town with markets' },
                            { name: 'Castle Hill', type: 'Viewpoint', description: 'Ruins with panoramic views' },
                            { name: 'MusÃƒÆ’Ã‚Â©e Matisse', type: 'Museum', description: 'Works of Henri Matisse' },
                            { name: 'Cours Saleya', type: 'Market', description: 'Flower and food market' }
                        ],
                        tips: [
                            'Beaches are pebbly, not sandy',
                            'Try socca (chickpea pancake)',
                            'Day trip to Monaco and ÃƒÆ’Ã‹â€ ze',
                            'Nice Carnival in February'
                        ]
                    },
                    bordeaux: {
                        id: 'bordeaux',
                        name: 'Bordeaux',
                        country: 'France',
                        region: 'Schengen',
                        description: 'World wine capital with elegant architecture and gastronomy along the Garonne',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,200,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 75, mid: 140, luxury: 380 },
                        attractions: [
                            { name: 'Place de la Bourse', type: 'Square', description: 'Elegant square with Water Mirror' },
                            { name: 'La CitÃƒÆ’Ã‚Â© du Vin', type: 'Museum', description: 'Interactive wine museum' },
                            { name: 'Saint-ÃƒÆ’Ã¢â‚¬Â°milion', type: 'Wine Region', description: 'UNESCO wine village day trip' },
                            { name: 'Rue Sainte-Catherine', type: 'Street', description: 'Europe\'s longest pedestrian street' },
                            { name: 'Bordeaux Cathedral', type: 'Religious', description: 'Gothic cathedral and UNESCO site' }
                        ],
                        tips: [
                            'Book wine tours in advance',
                            'Miroir d\'eau best at sunset',
                            'Rent a bike - city is very bike-friendly',
                            'CanelÃƒÆ’Ã‚Â© pastry is the local specialty'
                        ]
                    },
                    cannes: {
                        id: 'cannes',
                        name: 'Cannes',
                        country: 'France',
                        region: 'Schengen',
                        description: 'Glamorous Riviera resort famous for red carpet film festival',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '75,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 100, mid: 200, luxury: 600 },
                        attractions: [
                            { name: 'La Croisette', type: 'Promenade', description: 'Famous palm-lined boulevard' },
                            { name: 'Palais des Festivals', type: 'Landmark', description: 'Home of Cannes Film Festival' },
                            { name: 'Le Suquet', type: 'Historic', description: 'Old town with panoramic views' },
                            { name: 'ÃƒÆ’Ã…Â½les de LÃƒÆ’Ã‚Â©rins', type: 'Islands', description: 'Peaceful island escape' },
                            { name: 'MarchÃƒÆ’Ã‚Â© Forville', type: 'Market', description: 'ProvenÃƒÆ’Ã‚Â§al food market' }
                        ],
                        tips: [
                            'Film festival in May - very expensive',
                            'Walk the red carpet steps anytime',
                            'Sandy beaches (unlike Nice)',
                            'Day trip to Saint-Tropez'
                        ]
                    },
                    toulouse: {
                        id: 'toulouse',
                        name: 'Toulouse',
                        country: 'France',
                        region: 'Schengen',
                        description: 'Pink city with aerospace industry and vibrant student life',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,300,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                            { name: 'CitÃƒÆ’Ã‚Â© de l\'Espace', type: 'Museum', description: 'Interactive space museum' },
                            { name: 'Place du Capitole', type: 'Square', description: 'Grand central square' },
                            { name: 'Basilica of Saint-Sernin', type: 'Religious', description: 'Largest Romanesque church' },
                            { name: 'Canal du Midi', type: 'UNESCO', description: 'Historic canal for cycling' },
                            { name: 'Airbus Factory', type: 'Tour', description: 'See A380 assembly line' }
                        ],
                        tips: [
                            'Airbus tours book weeks ahead',
                            'Try cassoulet - local specialty',
                            'Lots of pink terracotta buildings',
                            'Young, student-friendly atmosphere'
                        ]
                    }
                }
            },
            germany: {
                id: 'germany',
                name: 'Germany',
                code: 'DE',
                flag: '🇩🇪',
                capital: 'Berlin',
                currency: 'Euro (€)',
                language: 'German',
                description: 'Rich history, fairy-tale castles, beer culture, and modern innovation',
                image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
                cities: {
                    berlin: {
                        id: 'berlin',
                        name: 'Berlin',
                        country: 'Germany',
                        region: 'Schengen',
                        description: 'Vibrant capital with turbulent history, world-class arts, and legendary nightlife',
                        image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800',
                        population: '3,700,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                            { name: 'Brandenburg Gate', type: 'Landmark', description: 'Iconic neoclassical monument' },
                            { name: 'Berlin Wall Memorial', type: 'Historic', description: 'Preserved sections of the Wall' },
                            { name: 'Museum Island', type: 'Museum', description: 'UNESCO site with 5 world-class museums' },
                            { name: 'Reichstag', type: 'Government', description: 'Parliament with glass dome views' },
                            { name: 'East Side Gallery', type: 'Art', description: 'Open-air gallery on Berlin Wall' }
                        ],
                        tips: [
                            'Book Reichstag dome visit in advance',
                            'Nightlife starts late - clubs open at midnight',
                            'Excellent public transport system',
                            'Try currywurst and dÃƒÆ’Ã‚Â¶ner kebab'
                        ]
                    },
                    munich: {
                        id: 'munich',
                        name: 'Munich',
                        country: 'Germany',
                        region: 'Schengen',
                        description: 'Bavarian capital with beer halls, alpine access, and cultural treasures',
                        image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800',
                        population: '1,500,000',
                        bestTime: 'June to September, December for markets',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Marienplatz', type: 'Square', description: 'Central square with Glockenspiel' },
                            { name: 'HofbrÃƒÆ’Ã‚Â¤uhaus', type: 'Beer Hall', description: 'World\'s most famous beer hall' },
                            { name: 'English Garden', type: 'Park', description: 'One of world\'s largest urban parks' },
                            { name: 'BMW Welt', type: 'Museum', description: 'BMW museum and showroom' },
                            { name: 'Nymphenburg Palace', type: 'Palace', description: 'Baroque summer palace' }
                        ],
                        tips: [
                            'Oktoberfest in September - book months ahead',
                            'Day trips to Neuschwanstein Castle',
                            'Bavaria Bayern ticket for regional trains',
                            'Weisswurst breakfast before noon'
                        ]
                    },
                    frankfurt: {
                        id: 'frankfurt',
                        name: 'Frankfurt',
                        country: 'Germany',
                        region: 'Schengen',
                        description: 'Financial hub with dramatic skyline, apple wine taverns, and major museums',
                        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
                        population: '750,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 75, mid: 140, luxury: 380 },
                        attractions: [
                            { name: 'RÃƒÆ’Ã‚Â¶merberg', type: 'Square', description: 'Medieval old town square' },
                            { name: 'Main Tower', type: 'Viewpoint', description: 'Observation deck with skyline views' },
                            { name: 'Museumsufer', type: 'Museum', description: 'Museum embankment with 13 museums' },
                            { name: 'Sachsenhausen', type: 'Neighborhood', description: 'Apple wine tavern district' },
                            { name: 'Palmengarten', type: 'Garden', description: 'Botanical garden with greenhouses' }
                        ],
                        tips: [
                            'Try Apfelwein (apple wine) in Sachsenhausen',
                            'Major European transport hub',
                            'Museums free on last Saturday of month',
                            'Walk along the Main River'
                        ]
                    },
                    hamburg: {
                        id: 'hamburg',
                        name: 'Hamburg',
                        country: 'Germany',
                        region: 'Schengen',
                        description: 'Maritime city with world\'s largest port warehouse district and Beatles history',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,900,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 75, mid: 140, luxury: 370 },
                        attractions: [
                            { name: 'Speicherstadt', type: 'Historic', description: 'UNESCO warehouse district' },
                            { name: 'Elbphilharmonie', type: 'Concert Hall', description: 'Stunning concert hall architecture' },
                            { name: 'Miniatur Wunderland', type: 'Attraction', description: 'World\'s largest model railway' },
                            { name: 'Reeperbahn', type: 'Entertainment', description: 'Famous nightlife and red-light district' },
                            { name: 'Fish Market', type: 'Market', description: 'Sunday morning institution since 1703' }
                        ],
                        tips: [
                            'Beatles played here before fame',
                            'Fish sandwich at Hafen is must-try',
                            'Elbphilharmonie plaza is free',
                            'Rainy weather common - bring jacket'
                        ]
                    },
                    cologne: {
                        id: 'cologne',
                        name: 'Cologne',
                        country: 'Germany',
                        region: 'Schengen',
                        description: 'Rhineland city dominated by magnificent Gothic cathedral and KÃƒÆ’Ã‚Â¶lsch beer culture',
                        image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800',
                        population: '1,100,000',
                        bestTime: 'May to October, November for Carnival',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                            { name: 'Cologne Cathedral', type: 'Religious', description: 'UNESCO Gothic masterpiece' },
                            { name: 'Old Town', type: 'Historic', description: 'Rebuilt historic quarter with brewhouses' },
                            { name: 'Hohenzollern Bridge', type: 'Bridge', description: 'Love lock bridge with cathedral view' },
                            { name: 'Museum Ludwig', type: 'Museum', description: 'Modern and pop art collection' },
                            { name: 'Cologne Chocolate Museum', type: 'Museum', description: 'Lindt chocolate museum' }
                        ],
                        tips: [
                            'KÃƒÆ’Ã‚Â¶lsch beer served in small 0.2L glasses',
                            'Carnival (Karneval) is huge - February',
                            'Cathedral climb has 533 steps',
                            'Christmas markets are world-famous'
                        ]
                    },
                    dusseldorf: {
                        id: 'dusseldorf',
                        name: 'DÃƒÆ’Ã‚Â¼sseldorf',
                        country: 'Germany',
                        region: 'Schengen',
                        description: 'Elegant fashion capital with Rhine promenade and Japanese quarter',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '640,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 75, mid: 140, luxury: 380 },
                        attractions: [
                            { name: 'KÃƒÆ’Ã‚Â¶nigsallee', type: 'Shopping', description: 'Upscale shopping boulevard' },
                            { name: 'Altstadt', type: 'Historic', description: 'Old town with 300+ bars' },
                            { name: 'MedienHafen', type: 'Architecture', description: 'Gehry buildings and modern port' },
                            { name: 'Rhine Tower', type: 'Landmark', description: 'Observation deck with views' },
                            { name: 'Hofgarten', type: 'Park', description: 'Historic park in city center' }
                        ],
                        tips: [
                            'Altbier is the local beer',
                            'Little Tokyo has authentic Japanese food',
                            'Known as \"longest bar in the world\"',
                            'Fashion and art scene is prominent'
                        ]
                    },
                    stuttgart: {
                        id: 'stuttgart',
                        name: 'Stuttgart',
                        country: 'Germany',
                        region: 'Schengen',
                        description: 'Automotive capital home to Mercedes and Porsche museums',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '635,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 135, luxury: 360 },
                        attractions: [
                            { name: 'Mercedes-Benz Museum', type: 'Museum', description: 'History of automotive innovation' },
                            { name: 'Porsche Museum', type: 'Museum', description: 'Sports car heritage' },
                            { name: 'Schlossplatz', type: 'Square', description: 'Central square with New Palace' },
                            { name: 'Staatsgalerie', type: 'Museum', description: 'Major art museum' },
                            { name: 'Cannstatter Volksfest', type: 'Festival', description: 'Second-largest beer festival' }
                        ],
                        tips: [
                            'Both car museums are must-visits',
                            'Stuttgart 21 construction everywhere',
                            'Gateway to Black Forest',
                            'Swabian cuisine - SpÃƒÆ’Ã‚Â¤tzle and Maultaschen'
                        ]
                    }
                }
            },
            greece: {
                id: 'greece',
                name: 'Greece',
                code: 'GR',
                flag: '🇬🇷',
                capital: 'Athens',
                currency: 'Euro (€)',
                language: 'Greek',
                description: 'Cradle of Western civilization with ancient ruins, stunning islands, and Mediterranean cuisine',
                image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800',
                cities: {
                    athens: {
                        id: 'athens',
                        name: 'Athens',
                        country: 'Greece',
                        region: 'Schengen',
                        description: 'Ancient capital where Western civilization began, beneath the iconic Acropolis',
                        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
                        population: '3,200,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 60, mid: 110, luxury: 300 },
                        attractions: [
                            { name: 'Acropolis', type: 'Ancient', description: 'Parthenon and ancient citadel' },
                            { name: 'Acropolis Museum', type: 'Museum', description: 'World-class archaeological museum' },
                            { name: 'Plaka', type: 'Neighborhood', description: 'Historic neighborhood below Acropolis' },
                            { name: 'Ancient Agora', type: 'Ancient', description: 'Ancient marketplace and civic center' },
                            { name: 'Monastiraki', type: 'Market', description: 'Flea market and shopping area' }
                        ],
                        tips: [
                            'Visit Acropolis early to beat heat and crowds',
                            'Get combined ticket for multiple sites',
                            'Rooftop bars have Acropolis views',
                            'Try souvlaki and fresh seafood'
                        ]
                    },
                    santorini: {
                        id: 'santorini',
                        name: 'Santorini',
                        country: 'Greece',
                        region: 'Schengen',
                        description: 'Volcanic island with iconic white-washed buildings, blue domes, and dramatic sunsets',
                        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800',
                        population: '15,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 90, mid: 180, luxury: 500 },
                        attractions: [
                            { name: 'Oia Sunset', type: 'Viewpoint', description: 'World\'s most famous sunset spot' },
                            { name: 'Fira', type: 'Town', description: 'Capital town on the caldera rim' },
                            { name: 'Red Beach', type: 'Beach', description: 'Unique volcanic red sand beach' },
                            { name: 'Akrotiri', type: 'Ancient', description: 'Minoan Bronze Age settlement' },
                            { name: 'Wine Tasting', type: 'Activity', description: 'Volcanic terroir wines' }
                        ],
                        tips: [
                            'Book sunset spot in Oia early',
                            'Shoulder season (Apr-May, Sep-Oct) is best',
                            'Take boat trip around the caldera',
                            'Stay in Fira for more budget options'
                        ]
                    },
                    crete: {
                        id: 'crete',
                        name: 'Crete',
                        country: 'Greece',
                        region: 'Schengen',
                        description: 'Greece\'s largest island with ancient Minoan palaces, beaches, and mountain villages',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '630,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 60, mid: 120, luxury: 320 },
                        attractions: [
                            { name: 'Knossos Palace', type: 'Ancient', description: 'Legendary Minoan palace of King Minos' },
                            { name: 'Samaria Gorge', type: 'Nature', description: 'Europe\'s longest gorge hike' },
                            { name: 'Elafonisi Beach', type: 'Beach', description: 'Pink sand lagoon beach' },
                            { name: 'Chania Old Town', type: 'Historic', description: 'Venetian harbor and old city' },
                            { name: 'Heraklion Archaeological Museum', type: 'Museum', description: 'Minoan artifacts collection' }
                        ],
                        tips: [
                            'Rent a car to explore the island',
                            'Try dakos salad and raki',
                            'Samaria Gorge is challenging - wear good shoes',
                            'Island is big - pick a region to base'
                        ]
                    },
                    thessaloniki: {
                        id: 'thessaloniki',
                        name: 'Thessaloniki',
                        country: 'Greece',
                        region: 'Schengen',
                        description: 'Greece\'s second city with Byzantine churches, waterfront, and vibrant food scene',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,100,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'White Tower', type: 'Landmark', description: 'Iconic waterfront symbol of city' },
                            { name: 'Rotunda', type: 'Historic', description: 'Roman era monument turned church' },
                            { name: 'Aristotelous Square', type: 'Square', description: 'Grand central square' },
                            { name: 'Ano Poli', type: 'Neighborhood', description: 'Upper town with Byzantine walls' },
                            { name: 'Modiano Market', type: 'Market', description: 'Historic covered food market' }
                        ],
                        tips: [
                            'Food scene rivals Athens',
                            'Try bougatsa for breakfast',
                            'Waterfront promenade perfect for evening walk',
                            'Day trips to Mount Olympus'
                        ]
                    },
                    mykonos: {
                        id: 'mykonos',
                        name: 'Mykonos',
                        country: 'Greece',
                        region: 'Schengen',
                        description: 'Glamorous party island with iconic windmills, beaches, and Little Venice',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '10,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 100, mid: 200, luxury: 600 },
                        attractions: [
                            { name: 'Little Venice', type: 'Neighborhood', description: 'Waterfront houses with bars' },
                            { name: 'Windmills of Mykonos', type: 'Landmark', description: 'Iconic 16th-century windmills' },
                            { name: 'Paradise Beach', type: 'Beach', description: 'Famous party beach' },
                            { name: 'Delos Island', type: 'Ancient', description: 'UNESCO ancient ruins nearby' },
                            { name: 'Mykonos Town', type: 'Town', description: 'White-washed labyrinth streets' }
                        ],
                        tips: [
                            'Very expensive in peak season',
                            'Day trip to ancient Delos is must-do',
                            'Beach clubs have minimum spend',
                            'LGBTQ+ friendly destination'
                        ]
                    }
                }
            },
            hungary: {
                id: 'hungary',
                name: 'Hungary',
                code: 'HU',
                flag: '🇭🇺',
                capital: 'Budapest',
                currency: 'Hungarian Forint (HUF)',
                language: 'Hungarian',
                description: 'Thermal baths, ruin bars, stunning architecture, and paprika-spiced cuisine',
                image: 'https://images.unsplash.com/photo-1551867633-194f125bddfa?w=800',
                cities: {
                    budapest: {
                        id: 'budapest',
                        name: 'Budapest',
                        country: 'Hungary',
                        region: 'Schengen',
                        description: 'Pearl of the Danube with grand architecture, thermal spas, and legendary nightlife',
                        image: 'https://images.unsplash.com/photo-1551867633-194f125bddfa?w=800',
                        population: '1,750,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Buda Castle', type: 'Castle', description: 'Royal palace with museum and views' },
                            { name: 'SzÃƒÆ’Ã‚Â©chenyi Thermal Bath', type: 'Spa', description: 'Grand neo-baroque thermal complex' },
                            { name: 'Parliament Building', type: 'Government', description: 'Neo-Gothic masterpiece on Danube' },
                            { name: 'Fisherman\'s Bastion', type: 'Viewpoint', description: 'Fairy-tale towers with city views' },
                            { name: 'Ruin Bars', type: 'Entertainment', description: 'Unique bars in abandoned buildings' }
                        ],
                        tips: [
                            'Visit a thermal bath - it\'s a must',
                            'Szimpla Kert is the original ruin bar',
                            'Try goulash, langos, and chimney cake',
                            'Night cruise on Danube is magical'
                        ]
                    },
                    eger: {
                        id: 'eger',
                        name: 'Eger',
                        country: 'Hungary',
                        region: 'Schengen',
                        description: 'Baroque town famous for Bull\'s Blood wine and thermal baths',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '56,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Eger Castle', type: 'Castle', description: 'Fortress that defended against Ottomans' },
                            { name: 'Valley of the Beautiful Women', type: 'Wine Region', description: 'Wine cellars carved into hillside' },
                            { name: 'Eger Minaret', type: 'Landmark', description: 'Northernmost Ottoman minaret in Europe' },
                            { name: 'Thermal Baths', type: 'Spa', description: 'Turkish-era thermal bath tradition' },
                            { name: 'Basilica', type: 'Religious', description: 'Hungary\'s second largest church' }
                        ],
                        tips: [
                            'Try Egri BikavÃƒÆ’Ã‚Â©r (Bull\'s Blood wine)',
                            'Cellar wine tasting is very affordable',
                            'Easy day trip from Budapest',
                            'Turkish spa heritage still thrives'
                        ]
                    }
                }
            },
            ireland: {
                id: 'ireland',
                name: 'Ireland',
                code: 'IE',
                flag: '🇮🇪',
                capital: 'Dublin',
                currency: 'Euro (€)',
                language: 'English, Irish',
                description: 'Emerald Isle with ancient castles, dramatic cliffs, and legendary pub culture',
                image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800',
                cities: {
                    dublin: {
                        id: 'dublin',
                        name: 'Dublin',
                        country: 'Ireland',
                        region: 'Schengen',
                        description: 'Literary capital with Georgian architecture, lively pubs, and rich history',
                        image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800',
                        population: '1,400,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Trinity College & Book of Kells', type: 'Historic', description: 'Ancient university with illuminated manuscript' },
                            { name: 'Temple Bar', type: 'Neighborhood', description: 'Famous pub and cultural quarter' },
                            { name: 'Guinness Storehouse', type: 'Museum', description: 'Seven floors of Guinness history' },
                            { name: 'St. Patrick\'s Cathedral', type: 'Religious', description: 'Ireland\'s largest church' },
                            { name: 'Kilmainham Gaol', type: 'Historic', description: 'Irish independence history museum' }
                        ],
                        tips: [
                            'Book Book of Kells tickets online',
                            'Pub crawl is essential',
                            'Try Irish breakfast and fish & chips',
                            'Day trip to Wicklow Mountains'
                        ]
                    },
                    galway: {
                        id: 'galway',
                        name: 'Galway',
                        country: 'Ireland',
                        region: 'Schengen',
                        description: 'Bohemian city on the Wild Atlantic Way with festivals and traditional music',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '80,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                            { name: 'Latin Quarter', type: 'Neighborhood', description: 'Medieval streets with shops and pubs' },
                            { name: 'Cliffs of Moher', type: 'Nature', description: 'Iconic coastal cliffs day trip' },
                            { name: 'Spanish Arch', type: 'Historic', description: 'Medieval arch on the River Corrib' },
                            { name: 'Connemara', type: 'Nature', description: 'Wild western landscape' },
                            { name: 'Aran Islands', type: 'Island', description: 'Traditional Irish islands' }
                        ],
                        tips: [
                            'Best trad music scene in Ireland',
                            'Oyster Festival in September',
                            'Base for Wild Atlantic Way',
                            'Rain is constant - bring waterproofs'
                        ]
                    },
                    cork: {
                        id: 'cork',
                        name: 'Cork',
                        country: 'Ireland',
                        region: 'Schengen',
                        description: 'Foodie capital with colorful streets and gateway to southwest Ireland',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '210,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 65, mid: 120, luxury: 320 },
                        attractions: [
                            { name: 'English Market', type: 'Market', description: 'Historic covered food market' },
                            { name: 'Blarney Castle', type: 'Castle', description: 'Kiss the Blarney Stone' },
                            { name: 'St. Fin Barre\'s Cathedral', type: 'Religious', description: 'Gothic cathedral with three spires' },
                            { name: 'Cobh', type: 'Town', description: 'Titanic\'s last port of call' },
                            { name: 'Ring of Kerry', type: 'Scenic Drive', description: 'Famous scenic route' }
                        ],
                        tips: [
                            'Real capital of Ireland (locals say!)',
                            'Blarney Stone is backward kiss',
                            'Try Murphy\'s stout - local to Cork',
                            'Base for Ring of Kerry'
                        ]
                    }
                }
            },
            italy: {
                id: 'italy',
                name: 'Italy',
                code: 'IT',
                flag: '🇮🇹',
                capital: 'Rome',
                currency: 'Euro (€)',
                language: 'Italian',
                description: 'Art masterpieces, ancient ruins, world-class cuisine, and la dolce vita',
                image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
                cities: {
                    rome: {
                        id: 'rome',
                        name: 'Rome',
                        country: 'Italy',
                        region: 'Schengen',
                        description: 'Eternal City with ancient ruins, Vatican treasures, and endless charm',
                        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
                        population: '2,870,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Colosseum', type: 'Ancient', description: 'Iconic Roman amphitheater' },
                            { name: 'Vatican Museums & Sistine Chapel', type: 'Museum', description: 'World\'s greatest art collection' },
                            { name: 'Trevi Fountain', type: 'Fountain', description: 'Baroque masterpiece - throw a coin' },
                            { name: 'Roman Forum', type: 'Ancient', description: 'Heart of ancient Rome' },
                            { name: 'Pantheon', type: 'Ancient', description: 'Best-preserved Roman temple' }
                        ],
                        tips: [
                            'Book Vatican tickets weeks ahead',
                            'Roma Pass for transport and sites',
                            'Trastevere for authentic dinner',
                            'Free water from nasoni fountains'
                        ]
                    },
                    florence: {
                        id: 'florence',
                        name: 'Florence',
                        country: 'Italy',
                        region: 'Schengen',
                        description: 'Cradle of the Renaissance with world-class art and Tuscan beauty',
                        image: 'https://images.unsplash.com/photo-1543429258-d4db65e3c1fc?w=800',
                        population: '380,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 75, mid: 140, luxury: 380 },
                        attractions: [
                            { name: 'Uffizi Gallery', type: 'Museum', description: 'Botticelli, da Vinci, Michelangelo' },
                            { name: 'Duomo', type: 'Cathedral', description: 'Brunelleschi\'s iconic dome' },
                            { name: 'Ponte Vecchio', type: 'Bridge', description: 'Medieval bridge with jewelry shops' },
                            { name: 'Accademia Gallery', type: 'Museum', description: 'Michelangelo\'s David' },
                            { name: 'Piazzale Michelangelo', type: 'Viewpoint', description: 'Sunset panorama of Florence' }
                        ],
                        tips: [
                            'Book Uffizi and Accademia online',
                            'Try bistecca alla fiorentina',
                            'Climb Duomo dome for views',
                            'Day trip to Tuscan hill towns'
                        ]
                    },
                    venice: {
                        id: 'venice',
                        name: 'Venice',
                        country: 'Italy',
                        region: 'Schengen',
                        description: 'Floating city of canals, gondolas, palaces, and Carnival magic',
                        image: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800',
                        population: '55,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 90, mid: 170, luxury: 450 },
                        attractions: [
                            { name: 'St. Mark\'s Square', type: 'Square', description: 'Heart of Venice with basilica' },
                            { name: 'Grand Canal', type: 'Canal', description: 'Main waterway with palaces' },
                            { name: 'Doge\'s Palace', type: 'Palace', description: 'Gothic masterpiece of Venetian power' },
                            { name: 'Rialto Bridge', type: 'Bridge', description: 'Iconic stone arch bridge' },
                            { name: 'Murano & Burano', type: 'Islands', description: 'Glass-blowing and colorful houses' }
                        ],
                        tips: [
                            'Get lost - it\'s the best way',
                            'Vaporetto pass saves money',
                            'Expensive but worth one gondola ride',
                            'Avoid Carnival unless you book far ahead'
                        ]
                    },
                    milan: {
                        id: 'milan',
                        name: 'Milan',
                        country: 'Italy',
                        region: 'Schengen',
                        description: 'Fashion and design capital with Gothic cathedral and La Scala opera',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,400,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 85, mid: 160, luxury: 430 },
                        attractions: [
                            { name: 'Duomo di Milano', type: 'Cathedral', description: 'Largest Gothic cathedral in Italy' },
                            { name: 'The Last Supper', type: 'Art', description: 'Da Vinci\'s masterpiece (book months ahead)' },
                            { name: 'Galleria Vittorio Emanuele II', type: 'Shopping', description: 'Stunning 19th-century shopping arcade' },
                            { name: 'La Scala', type: 'Opera', description: 'World\'s most famous opera house' },
                            { name: 'Navigli', type: 'Neighborhood', description: 'Canal district with nightlife' }
                        ],
                        tips: [
                            'Book Last Supper 2+ months ahead',
                            'Aperitivo hour includes free food',
                            'Fashion Week makes hotels expensive',
                            'Day trip to Lake Como'
                        ]
                    },
                    naples: {
                        id: 'naples',
                        name: 'Naples',
                        country: 'Italy',
                        region: 'Schengen',
                        description: 'Chaotic southern city with best pizza, Pompeii access, and authentic Italy',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '960,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 55, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Pompeii', type: 'Ancient', description: 'Roman city preserved by Vesuvius' },
                            { name: 'Naples Archaeological Museum', type: 'Museum', description: 'Pompeii artifacts collection' },
                            { name: 'Spaccanapoli', type: 'Street', description: 'Ancient main street through old town' },
                            { name: 'Mount Vesuvius', type: 'Volcano', description: 'Hike the famous volcano' },
                            { name: 'Amalfi Coast', type: 'Coast', description: 'Stunning coastal drive and towns' }
                        ],
                        tips: [
                            'Pizza was invented here - eat lots',
                            'Loud, chaotic, authentic - embrace it',
                            'Watch for pickpockets',
                            'Base for Pompeii, Amalfi, Capri'
                        ]
                    },
                    amalfi: {
                        id: 'amalfi',
                        name: 'Amalfi Coast',
                        country: 'Italy',
                        region: 'Schengen',
                        description: 'Stunning UNESCO coastline with colorful cliffside villages',
                        image: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800',
                        population: '5,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 100, mid: 200, luxury: 550 },
                        attractions: [
                            { name: 'Positano', type: 'Town', description: 'Iconic cliffside pastel village' },
                            { name: 'Amalfi Cathedral', type: 'Religious', description: 'Stunning Arab-Norman cathedral' },
                            { name: 'Ravello', type: 'Town', description: 'Hilltop town with gardens and views' },
                            { name: 'Path of the Gods', type: 'Hiking', description: 'Spectacular coastal trail' },
                            { name: 'Capri', type: 'Island', description: 'Glamorous island day trip' }
                        ],
                        tips: [
                            'Drive is terrifying but worth it',
                            'Take the ferry between towns',
                            'Book accommodation far in advance',
                            'Very expensive in peak summer'
                        ]
                    },
                    palermo: {
                        id: 'palermo',
                        name: 'Palermo',
                        country: 'Italy',
                        region: 'Schengen',
                        description: 'Sicilian capital with Arab-Norman architecture and street food',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '675,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 55, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Palatine Chapel', type: 'Religious', description: 'Byzantine mosaics UNESCO site' },
                            { name: 'Teatro Massimo', type: 'Theatre', description: 'Third largest opera house in Europe' },
                            { name: 'BallarÃƒÆ’Ã‚Â² Market', type: 'Market', description: 'Chaotic, authentic street market' },
                            { name: 'Quattro Canti', type: 'Landmark', description: 'Baroque square intersection' },
                            { name: 'Monreale Cathedral', type: 'Religious', description: 'Norman cathedral with golden mosaics' }
                        ],
                        tips: [
                            'Street food tour is essential',
                            'Try arancini, panelle, and sfincione',
                            'Afternoons quiet for siesta',
                            'Day trip to Monreale and CefalÃƒÆ’Ã‚Â¹'
                        ]
                    },
                    capri: {
                        id: 'capri',
                        name: 'Capri',
                        country: 'Italy',
                        region: 'Schengen',
                        description: 'Glamorous island retreat with Blue Grotto and designer shopping',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '14,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 120, mid: 250, luxury: 700 },
                        attractions: [
                            { name: 'Blue Grotto', type: 'Nature', description: 'Famous sea cave with blue light' },
                            { name: 'Piazzetta', type: 'Square', description: 'Iconic glamorous square' },
                            { name: 'Gardens of Augustus', type: 'Garden', description: 'Terraced gardens with views' },
                            { name: 'Faraglioni', type: 'Nature', description: 'Iconic sea stacks' },
                            { name: 'Villa San Michele', type: 'Historic', description: 'Beautiful villa and gardens' }
                        ],
                        tips: [
                            'Day trip from Naples or Sorrento',
                            'Blue Grotto often closed for waves',
                            'Everything is very expensive',
                            'Visit Anacapri for quieter experience'
                        ]
                    },
                    tuscany: {
                        id: 'tuscany',
                        name: 'Tuscany',
                        country: 'Italy',
                        region: 'Schengen',
                        description: 'Rolling hills, medieval towns, world-class wine, and Renaissance art',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,700,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 80, mid: 160, luxury: 450 },
                        attractions: [
                            { name: 'Chianti Wine Region', type: 'Wine', description: 'Rolling vineyards and wine tasting' },
                            { name: 'Siena', type: 'City', description: 'Medieval city with famous Palio' },
                            { name: 'San Gimignano', type: 'Town', description: 'Medieval towers "Manhattan of Tuscany"' },
                            { name: 'Pisa', type: 'City', description: 'Leaning Tower and Campo dei Miracoli' },
                            { name: 'Val d\'Orcia', type: 'UNESCO', description: 'Iconic cypress-lined roads' }
                        ],
                        tips: [
                            'Rent a car - essential for exploration',
                            'Stay in agriturismos for authentic experience',
                            'Wine tours available everywhere',
                            'Avoid July-August heat'
                        ]
                    }
                }
            }
        }
    },
    scandinavia: {
        id: 'scandinavia',
        name: 'Scandinavia',
        emoji: '🏔️',
        description: 'Northern lights, fjords, design capitals, and Viking heritage',
        image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800',
        countries: {
            denmark: {
                id: 'denmark',
                name: 'Denmark',
                code: 'DK',
                flag: '🇩🇰',
                capital: 'Copenhagen',
                currency: 'Danish Krone (DKK)',
                language: 'Danish',
                description: 'Happiest country with hygge lifestyle, design, and Viking history',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    copenhagen: {
                        id: 'copenhagen',
                        name: 'Copenhagen',
                        country: 'Denmark',
                        region: 'Scandinavia',
                        description: 'Design capital with colorful Nyhavn, cycling culture, and Michelin restaurants',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '800,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Nyhavn', type: 'Waterfront', description: 'Colorful harbor houses and cafes' },
                            { name: 'Tivoli Gardens', type: 'Theme Park', description: 'Historic amusement park since 1843' },
                            { name: 'The Little Mermaid', type: 'Statue', description: 'Iconic bronze sculpture' },
                            { name: 'Christiansborg Palace', type: 'Palace', description: 'Parliament and royal palace' },
                            { name: 'Freetown Christiania', type: 'Neighborhood', description: 'Self-governed alternative community' }
                        ],
                        tips: [
                            'Very expensive - budget carefully',
                            'Rent bikes - everyone cycles',
                            'Try smÃƒÆ’Ã‚Â¸rrebrÃƒÆ’Ã‚Â¸d (open sandwiches)',
                            'Copenhagen Card for transport and museums'
                        ]
                    },
                    aarhus: {
                        id: 'aarhus',
                        name: 'Aarhus',
                        country: 'Denmark',
                        region: 'Scandinavia',
                        description: 'Denmark\'s second city with museums, Viking history, and youthful energy',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '350,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 90, mid: 180, luxury: 450 },
                        attractions: [
                            { name: 'ARoS Art Museum', type: 'Museum', description: 'Rainbow Panorama rooftop walkway' },
                            { name: 'Den Gamle By', type: 'Museum', description: 'Open-air old town museum' },
                            { name: 'Moesgaard Museum', type: 'Museum', description: 'Excellent Viking and prehistory museum' },
                            { name: 'Latin Quarter', type: 'Neighborhood', description: 'Historic streets with shops and cafes' },
                            { name: 'Aarhus Cathedral', type: 'Religious', description: 'Tallest church in Denmark' }
                        ],
                        tips: [
                            'European Capital of Culture 2017',
                            'University city with vibrant nightlife',
                            'Beaches nearby in summer',
                            'Good base for exploring Jutland'
                        ]
                    },
                    aalborg: {
                        id: 'aalborg',
                        name: 'Aalborg',
                        country: 'Denmark',
                        region: 'Scandinavia',
                        description: 'Northern Danish city with Viking burial sites and waterfront renewal',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '215,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 85, mid: 170, luxury: 420 },
                        attractions: [
                            { name: 'Lindholm HÃƒÆ’Ã‚Â¸je', type: 'Historic', description: 'Viking burial ground with ship stones' },
                            { name: 'Utzon Center', type: 'Architecture', description: 'Arts center by Sydney Opera architect' },
                            { name: 'Aalborg Waterfront', type: 'Waterfront', description: 'Revitalized harbor area' },
                            { name: 'Kunsten Museum', type: 'Museum', description: 'Modern art museum by Alvar Aalto' },
                            { name: 'Jomfru Ane Gade', type: 'Street', description: 'Famous bar and party street' }
                        ],
                        tips: [
                            'Gateway to northern Jutland',
                            'Famous for Aalborg Akvavit',
                            'Carnival in May is huge',
                            'More affordable than Copenhagen'
                        ]
                    }
                }
            },
            finland: {
                id: 'finland',
                name: 'Finland',
                code: 'FI',
                flag: '🇫🇮',
                capital: 'Helsinki',
                currency: 'Euro (€)',
                language: 'Finnish, Swedish',
                description: 'Land of a thousand lakes, saunas, Northern Lights, and Santa Claus',
                image: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=800',
                cities: {
                    helsinki: {
                        id: 'helsinki',
                        name: 'Helsinki',
                        country: 'Finland',
                        region: 'Scandinavia',
                        description: 'Design capital with stunning architecture, saunas, and Baltic seaside charm',
                        image: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=800',
                        population: '1,300,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 80, mid: 160, luxury: 400 },
                        attractions: [
                            { name: 'Helsinki Cathedral', type: 'Religious', description: 'Iconic white Lutheran cathedral on Senate Square' },
                            { name: 'Suomenlinna', type: 'Historic', description: 'UNESCO sea fortress on six islands' },
                            { name: 'Temppeliaukio Church', type: 'Religious', description: 'Rock church carved into bedrock' },
                            { name: 'Design District', type: 'Neighborhood', description: 'Shops, galleries, and Finnish design' },
                            { name: 'Market Square', type: 'Market', description: 'Waterfront market with local goods' }
                        ],
                        tips: [
                            'Try a traditional Finnish sauna',
                            'Day trip to Tallinn by ferry',
                            'White nights in summer - sun never fully sets',
                            'Visit in December for Christmas markets'
                        ]
                    },
                    turku: {
                        id: 'turku',
                        name: 'Turku',
                        country: 'Finland',
                        region: 'Scandinavia',
                        description: 'Finland\'s oldest city with medieval castle and vibrant riverfront',
                        image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800',
                        population: '330,000',
                        bestTime: 'June to August',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                            { name: 'Turku Castle', type: 'Historic', description: '13th-century medieval castle' },
                            { name: 'Turku Cathedral', type: 'Religious', description: 'Mother church of Finland' },
                            { name: 'Aura River', type: 'Waterfront', description: 'Riverbanks lined with boats and cafes' },
                            { name: 'Archipelago', type: 'Nature', description: 'World\'s largest archipelago nearby' },
                            { name: 'Forum Marinum', type: 'Museum', description: 'Maritime museum with historic ships' }
                        ],
                        tips: [
                            'Former capital of Finland',
                            'Gateway to the Archipelago Trail',
                            'River boats are restaurants and bars',
                            'Christmas City of Finland'
                        ]
                    },
                    rovaniemi: {
                        id: 'rovaniemi',
                        name: 'Rovaniemi',
                        country: 'Finland',
                        region: 'Scandinavia',
                        description: 'Arctic Circle city and official hometown of Santa Claus',
                        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
                        population: '63,000',
                        bestTime: 'December to March for winter, June to August for midnight sun',
                        avgBudget: { budget: 90, mid: 180, luxury: 450 },
                        attractions: [
                            { name: 'Santa Claus Village', type: 'Attraction', description: 'Meet Santa at the Arctic Circle' },
                            { name: 'Arktikum', type: 'Museum', description: 'Arctic science center and museum' },
                            { name: 'Northern Lights', type: 'Nature', description: 'Aurora viewing from September to March' },
                            { name: 'Ounasvaara', type: 'Nature', description: 'Ski resort and hiking area' },
                            { name: 'Arctic Circle Marking', type: 'Landmark', description: 'Cross the Arctic Circle line' }
                        ],
                        tips: [
                            'Book Northern Lights tours in winter',
                            'Husky and reindeer safaris available',
                            'Midnight sun from June to July',
                            'Very cold in winter - dress warmly'
                        ]
                    }
                }
            },
            iceland: {
                id: 'iceland',
                name: 'Iceland',
                code: 'IS',
                flag: '🇮🇸',
                capital: 'Reykjavik',
                currency: 'Icelandic KrÃƒÆ’Ã‚Â³na (ISK)',
                language: 'Icelandic',
                description: 'Land of fire and ice with volcanoes, geysers, glaciers, and Northern Lights',
                image: 'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=800',
                cities: {
                    reykjavik: {
                        id: 'reykjavik',
                        name: 'Reykjavik',
                        country: 'Iceland',
                        region: 'Scandinavia',
                        description: 'World\'s northernmost capital with colorful houses, geothermal pools, and epic landscapes',
                        image: 'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=800',
                        population: '230,000',
                        bestTime: 'June to August for midnight sun, September to March for Northern Lights',
                        avgBudget: { budget: 120, mid: 220, luxury: 550 },
                        attractions: [
                            { name: 'HallgrÃƒÆ’Ã‚Â­mskirkja', type: 'Religious', description: 'Iconic expressionist church' },
                            { name: 'Blue Lagoon', type: 'Spa', description: 'Famous geothermal spa' },
                            { name: 'Golden Circle', type: 'Tour', description: 'Geysir, Gullfoss, and ÃƒÆ’Ã…Â¾ingvellir' },
                            { name: 'Harpa Concert Hall', type: 'Architecture', description: 'Stunning glass concert hall' },
                            { name: 'Northern Lights', type: 'Nature', description: 'Aurora borealis viewing' }
                        ],
                        tips: [
                            'Iceland is very expensive - budget carefully',
                            'Book Blue Lagoon weeks in advance',
                            'Rent a car for Golden Circle',
                            'Try Icelandic hot dogs and lamb'
                        ]
                    },
                    vik: {
                        id: 'vik',
                        name: 'VÃƒÆ’Ã‚Â­k ÃƒÆ’Ã‚Â­ MÃƒÆ’Ã‚Â½rdal',
                        country: 'Iceland',
                        region: 'Scandinavia',
                        description: 'Tiny village on South Coast with black sand beaches and dramatic cliffs',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '750',
                        bestTime: 'June to August',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Reynisfjara Black Sand Beach', type: 'Beach', description: 'Dramatic basalt columns and black sand' },
                            { name: 'Reynisdrangar', type: 'Nature', description: 'Sea stacks rising from ocean' },
                            { name: 'DyrhÃƒÆ’Ã‚Â³laey', type: 'Viewpoint', description: 'Arch promontory with puffins' },
                            { name: 'VÃƒÆ’Ã‚Â­k Church', type: 'Religious', description: 'Iconic red-roofed church on hill' },
                            { name: 'South Coast Waterfalls', type: 'Nature', description: 'SkÃƒÆ’Ã‚Â³gafoss and Seljalandsfoss nearby' }
                        ],
                        tips: [
                            'Never turn your back on the waves',
                            'Puffins nest here in summer',
                            'Stop at SkÃƒÆ’Ã‚Â³gafoss and Seljalandsfoss',
                            'Fill up on gas when you can'
                        ]
                    }
                }
            },
            norway: {
                id: 'norway',
                name: 'Norway',
                code: 'NO',
                flag: '🇳🇴',
                capital: 'Oslo',
                currency: 'Norwegian Krone (NOK)',
                language: 'Norwegian',
                description: 'Dramatic fjords, Northern Lights, midnight sun, and Viking heritage',
                image: 'https://images.unsplash.com/photo-1520769669658-f07657d67c7c?w=800',
                cities: {
                    oslo: {
                        id: 'oslo',
                        name: 'Oslo',
                        country: 'Norway',
                        region: 'Scandinavia',
                        description: 'Waterfront capital with world-class museums and Nordic design',
                        image: 'https://images.unsplash.com/photo-1520769669658-f07657d67c7c?w=800',
                        population: '700,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Viking Ship Museum', type: 'Museum', description: 'Preserved Viking ships' },
                            { name: 'Opera House', type: 'Architecture', description: 'Walk on the sloped roof' },
                            { name: 'Vigeland Park', type: 'Park', description: 'Sculpture park with 200+ works' },
                            { name: 'Akershus Fortress', type: 'Castle', description: 'Medieval fortress on harbor' },
                            { name: 'Munch Museum', type: 'Museum', description: 'Home of The Scream' }
                        ],
                        tips: [
                            'Norway is expensive - budget carefully',
                            'Oslo Pass for transport and museums',
                            'Tap water is excellent',
                            'Everyone speaks English'
                        ]
                    },
                    bergen: {
                        id: 'bergen',
                        name: 'Bergen',
                        country: 'Norway',
                        region: 'Scandinavia',
                        description: 'Gateway to the fjords with colorful wooden wharf',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '285,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 95, mid: 190, luxury: 480 },
                        attractions: [
                            { name: 'Bryggen', type: 'Historic', description: 'UNESCO colorful wooden wharf' },
                            { name: 'FlÃƒÆ’Ã‚Â¸ibanen', type: 'Cable Car', description: 'Funicular to Mount FlÃƒÆ’Ã‚Â¸yen' },
                            { name: 'Fish Market', type: 'Market', description: 'Fresh seafood outdoors' },
                            { name: 'Fantoft Stave Church', type: 'Religious', description: 'Reconstructed medieval church' },
                            { name: 'Norway in a Nutshell', type: 'Tour', description: 'Famous fjord day trip' }
                        ],
                        tips: [
                            'It rains 240 days a year - bring rain gear',
                            'Gateway to Hardangerfjord and Sognefjord',
                            'Book Norway in a Nutshell ahead',
                            'Try fresh seafood at fish market'
                        ]
                    },
                    tromso: {
                        id: 'tromso',
                        name: 'TromsÃƒÆ’Ã‚Â¸',
                        country: 'Norway',
                        region: 'Scandinavia',
                        description: 'Arctic gateway for Northern Lights and midnight sun',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '75,000',
                        bestTime: 'September to March (Northern Lights), June to July (midnight sun)',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Northern Lights', type: 'Nature', description: 'Prime aurora viewing' },
                            { name: 'Arctic Cathedral', type: 'Religious', description: 'Iconic triangular church' },
                            { name: 'Fjellheisen Cable Car', type: 'Viewpoint', description: 'Panoramic Arctic views' },
                            { name: 'Polaria', type: 'Aquarium', description: 'Arctic experience center' },
                            { name: 'Dog Sledding', type: 'Activity', description: 'Arctic husky adventures' }
                        ],
                        tips: [
                            'Northern Lights not guaranteed - book multiple nights',
                            'Polar night December-January (no sun)',
                            'Midnight sun late May to late July',
                            'Dress in warm layers'
                        ]
                    }
                }
            },
            sweden: {
                id: 'sweden',
                name: 'Sweden',
                code: 'SE',
                flag: '🇸🇪',
                capital: 'Stockholm',
                currency: 'Swedish Krona (SEK)',
                language: 'Swedish',
                description: 'ABBA, IKEA, meatballs, archipelagos, and stunning design culture',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    stockholm: {
                        id: 'stockholm',
                        name: 'Stockholm',
                        country: 'Sweden',
                        region: 'Scandinavia',
                        description: 'Venice of the North spread across 14 islands with royal palaces and ABBA Museum',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,000,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Gamla Stan', type: 'Historic', description: 'Medieval old town on island' },
                            { name: 'Vasa Museum', type: 'Museum', description: 'Preserved 17th-century warship' },
                            { name: 'ABBA The Museum', type: 'Museum', description: 'Interactive ABBA experience' },
                            { name: 'Royal Palace', type: 'Palace', description: 'Changing of the guard' },
                            { name: 'DjurgÃƒÆ’Ã‚Â¥rden', type: 'Island', description: 'Museums and park island' }
                        ],
                        tips: [
                            'Vasa Museum is unmissable',
                            'Almost cashless society',
                            'Fika (coffee break) is sacred',
                            'Summer days are incredibly long'
                        ]
                    },
                    gothenburg: {
                        id: 'gothenburg',
                        name: 'Gothenburg',
                        country: 'Sweden',
                        region: 'Scandinavia',
                        description: 'Foodie capital with canal district, archipelago, and laid-back vibe',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '590,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 90, mid: 180, luxury: 450 },
                        attractions: [
                            { name: 'Haga', type: 'Neighborhood', description: 'Cobblestoned district with cafes' },
                            { name: 'Liseberg', type: 'Amusement Park', description: 'Scandinavia\'s largest theme park' },
                            { name: 'Archipelago', type: 'Nature', description: 'Island hopping by ferry' },
                            { name: 'FeskekÃƒÆ’Ã‚Â´rka', type: 'Market', description: 'Fish market in church building' },
                            { name: 'Universeum', type: 'Museum', description: 'Science center with rainforest' }
                        ],
                        tips: [
                            'More relaxed than Stockholm',
                            'Amazing seafood scene',
                            'Swedish West Coast oysters',
                            'Day trips to archipelago islands'
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
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
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
                            { name: 'Teatro ColÃƒÆ’Ã‚Â³n', type: 'Theater', description: 'World-renowned opera house' },
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
            },
            bolivia: {
                id: 'bolivia',
                name: 'Bolivia',
                code: 'BO',
                flag: '🇧🇴',
                capital: 'Sucre (constitutional), La Paz (administrative)',
                currency: 'Boliviano (BOB)',
                language: 'Spanish',
                description: 'High-altitude wonders from salt flats to ancient ruins and indigenous culture',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    laPaz: {
                        id: 'laPaz',
                        name: 'La Paz',
                        country: 'Bolivia',
                        region: 'South America',
                        description: 'World\'s highest capital city nestled in a canyon with dramatic landscapes',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,700,000',
                        bestTime: 'May to October (dry season)',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Mi TelefÃƒÆ’Ã‚Â©rico', type: 'Transport', description: 'World\'s highest cable car network' },
                            { name: 'Witches\' Market', type: 'Market', description: 'Traditional market with folk remedies' },
                            { name: 'Plaza Murillo', type: 'Square', description: 'Main square with government buildings' },
                            { name: 'Valley of the Moon', type: 'Nature', description: 'Lunar-like rock formations' },
                            { name: 'San Pedro Prison', type: 'Landmark', description: 'Infamous self-governed prison (exterior only)' }
                        ],
                        tips: [
                            'Take it easy - altitude is 3,600m+',
                            'Chew coca leaves for altitude sickness',
                            'Day trip to Tiwanaku ruins',
                            'Try salteÃƒÆ’Ã‚Â±as (Bolivian empanadas)'
                        ]
                    }
                }
            },
            brazil: {
                id: 'brazil',
                name: 'Brazil',
                code: 'BR',
                flag: '🇧🇷',
                capital: 'BrasÃƒÆ’Ã‚Â­lia',
                currency: 'Brazilian Real (BRL)',
                language: 'Portuguese',
                description: 'Land of samba, carnival, Amazon rainforest, and stunning beaches',
                image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800',
                cities: {
                    rioDeJaneiro: {
                        id: 'rioDeJaneiro',
                        name: 'Rio de Janeiro',
                        country: 'Brazil',
                        region: 'South America',
                        description: 'Marvelous city with iconic beaches, Christ the Redeemer, and vibrant nightlife',
                        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800',
                        population: '6,700,000',
                        bestTime: 'December to March (summer), but crowded during Carnival',
                        avgBudget: { budget: 50, mid: 100, luxury: 300 },
                        attractions: [
                            { name: 'Christ the Redeemer', type: 'Landmark', description: 'Iconic statue atop Corcovado mountain' },
                            { name: 'Sugarloaf Mountain', type: 'Landmark', description: 'Cable car ride with stunning views' },
                            { name: 'Copacabana Beach', type: 'Beach', description: 'World-famous crescent beach' },
                            { name: 'Ipanema Beach', type: 'Beach', description: 'Trendy beach with sunset views' },
                            { name: 'Escadaria SelarÃƒÆ’Ã‚Â³n', type: 'Art', description: 'Colorful tiled steps by artist SelarÃƒÆ’Ã‚Â³n' }
                        ],
                        tips: [
                            'Be aware of safety - avoid flashy jewelry',
                            'Visit favela tours with licensed guides only',
                            'Try aÃƒÆ’Ã‚Â§aÃƒÆ’Ã‚Â­ bowls and caipirinhas',
                            'Carnival is February/March - book ahead'
                        ]
                    },
                    saoPaulo: {
                        id: 'saoPaulo',
                        name: 'SÃƒÆ’Ã‚Â£o Paulo',
                        country: 'Brazil',
                        region: 'South America',
                        description: 'Massive metropolis with world-class dining, art scene, and business hub',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '12,300,000',
                        bestTime: 'March to May, August to November',
                        avgBudget: { budget: 55, mid: 110, luxury: 320 },
                        attractions: [
                            { name: 'Paulista Avenue', type: 'Street', description: 'Main avenue with museums and culture' },
                            { name: 'Ibirapuera Park', type: 'Park', description: 'Huge urban park with museums' },
                            { name: 'MASP', type: 'Museum', description: 'Art museum with iconic suspended building' },
                            { name: 'Liberdade', type: 'Neighborhood', description: 'Japanese district with great food' },
                            { name: 'Pinacoteca', type: 'Museum', description: 'Oldest art museum in SÃƒÆ’Ã‚Â£o Paulo' }
                        ],
                        tips: [
                            'Traffic is intense - use metro',
                            'Best food scene in South America',
                            'Paulista Avenue is car-free on Sundays',
                            'Many free museums on weekends'
                        ]
                    }
                }
            },
            colombia: {
                id: 'colombia',
                name: 'Colombia',
                code: 'CO',
                flag: '🇨🇴',
                capital: 'BogotÃƒÆ’Ã‚Â¡',
                currency: 'Colombian Peso (COP)',
                language: 'Spanish',
                description: 'Coffee, salsa, colorful colonial cities, and incredible biodiversity',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    bogota: {
                        id: 'bogota',
                        name: 'BogotÃƒÆ’Ã‚Â¡',
                        country: 'Colombia',
                        region: 'South America',
                        description: 'High-altitude capital with world-class museums and vibrant street art',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '8,000,000',
                        bestTime: 'December to March, July to August',
                        avgBudget: { budget: 35, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Gold Museum (Museo del Oro)', type: 'Museum', description: 'World\'s largest pre-Columbian gold collection' },
                            { name: 'La Candelaria', type: 'Historic', description: 'Colonial old town with street art' },
                            { name: 'Monserrate', type: 'Mountain', description: 'Mountain shrine with city views' },
                            { name: 'Botero Museum', type: 'Museum', description: 'Free museum with Botero\'s art' },
                            { name: 'Paloquemao Market', type: 'Market', description: 'Colorful fruit and flower market' }
                        ],
                        tips: [
                            'Altitude is 2,640m - take it easy initially',
                            'Uber is safer than taxis',
                            'Try ajiaco (chicken soup) and chocolate with cheese',
                            'Take free walking tours in La Candelaria'
                        ]
                    },
                    medellin: {
                        id: 'medellin',
                        name: 'MedellÃƒÆ’Ã‚Â­n',
                        country: 'Colombia',
                        region: 'South America',
                        description: 'City of Eternal Spring transformed from violent past to innovative present',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,500,000',
                        bestTime: 'December to February',
                        avgBudget: { budget: 35, mid: 70, luxury: 190 },
                        attractions: [
                            { name: 'Comuna 13', type: 'Neighborhood', description: 'Transformed favela with street art and escalators' },
                            { name: 'Plaza Botero', type: 'Square', description: 'Outdoor square with Botero sculptures' },
                            { name: 'Metrocable', type: 'Transport', description: 'Cable cars over the hillside barrios' },
                            { name: 'Parque ArvÃƒÆ’Ã‚Â­', type: 'Nature', description: 'Nature reserve via metrocable' },
                            { name: 'El Poblado', type: 'Neighborhood', description: 'Upscale neighborhood with nightlife' }
                        ],
                        tips: [
                            'Spring-like weather year-round',
                            'Join a graffiti tour in Comuna 13',
                            'Great digital nomad scene',
                            'Try bandeja paisa (hearty platter)'
                        ]
                    }
                }
            },
            ecuador: {
                id: 'ecuador',
                name: 'Ecuador',
                code: 'EC',
                flag: '🇪🇨',
                capital: 'Quito',
                currency: 'US Dollar (USD)',
                language: 'Spanish',
                description: 'Straddling the equator with the GalÃƒÆ’Ã‚Â¡pagos, Amazon, and colonial Quito',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    quito: {
                        id: 'quito',
                        name: 'Quito',
                        country: 'Ecuador',
                        region: 'South America',
                        description: 'UNESCO colonial old town at 2,850m with stunning churches and equator nearby',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,800,000',
                        bestTime: 'June to September (dry season)',
                        avgBudget: { budget: 35, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Historic Old Town', type: 'Historic', description: 'UNESCO best-preserved colonial center' },
                            { name: 'Mitad del Mundo', type: 'Landmark', description: 'Monument at the equator line' },
                            { name: 'TelefÃƒÆ’Ã‚Â©riQo', type: 'Cable Car', description: 'Ride to 4,100m on Pichincha volcano' },
                            { name: 'La CompaÃƒÆ’Ã‚Â±ÃƒÆ’Ã‚Â­a Church', type: 'Religious', description: 'Stunning baroque gold interior' },
                            { name: 'Mariscal District', type: 'Neighborhood', description: 'Backpacker hub with nightlife' }
                        ],
                        tips: [
                            'Altitude is high - acclimate slowly',
                            'Gateway to GalÃƒÆ’Ã‚Â¡pagos Islands',
                            'Uses US dollars - easy for Americans',
                            'Try ceviche and llapingachos'
                        ]
                    }
                }
            }
        }
    },
    americas: {
        id: 'americas',
        name: 'Americas',
        emoji: '🗽',
        description: 'From maple-covered Canada to tropical Central America',
        image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800',
        countries: {
            panama: {
                id: 'panama',
                name: 'Panama',
                code: 'PA',
                flag: '🇵🇦',
                capital: 'Panama City',
                currency: 'US Dollar (USD) / Balboa',
                language: 'Spanish',
                description: 'Famous canal, tropical beaches, rainforests, and booming modern capital',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    panamaCity: {
                        id: 'panamaCity',
                        name: 'Panama City',
                        country: 'Panama',
                        region: 'Americas',
                        description: 'Modern skyline meets colonial Casco Viejo and famous canal',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,500,000',
                        bestTime: 'December to April (dry season)',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Panama Canal', type: 'Landmark', description: 'Engineering marvel at Miraflores Locks' },
                            { name: 'Casco Viejo', type: 'Historic', description: 'UNESCO colonial old town' },
                            { name: 'BioMuseo', type: 'Museum', description: 'Gehry-designed biodiversity museum' },
                            { name: 'Panama Viejo', type: 'Ruins', description: 'Original Spanish settlement ruins' },
                            { name: 'Causeway', type: 'Waterfront', description: 'Islands connected at canal entrance' }
                        ],
                        tips: [
                            'US dollars accepted everywhere',
                            'Uber works well',
                            'Canal best visited morning',
                            'Banking hub - modern infrastructure'
                        ]
                    },
                    bocasDelToro: {
                        id: 'bocasDelToro',
                        name: 'Bocas del Toro',
                        country: 'Panama',
                        region: 'Americas',
                        description: 'Caribbean archipelago with backpacker vibes and beach parties',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '15,000',
                        bestTime: 'February to April, September to October',
                        avgBudget: { budget: 40, mid: 80, luxury: 220 },
                        attractions: [
                            { name: 'Starfish Beach', type: 'Beach', description: 'Shallow water with starfish' },
                            { name: 'Red Frog Beach', type: 'Beach', description: 'Famous beach on Isla Bastimentos' },
                            { name: 'Zapatilla Islands', type: 'Island', description: 'Pristine uninhabited islands' },
                            { name: 'Bocas Town', type: 'Town', description: 'Main town with nightlife' },
                            { name: 'Sloth Island', type: 'Wildlife', description: 'See sloths up close' }
                        ],
                        tips: [
                            'Party island vibes',
                            'Boat taxis between islands',
                            'Rain can happen anytime',
                            'More relaxed pace than Costa Rica'
                        ]
                    }
                }
            },
            peru: {
                id: 'peru',
                name: 'Peru',
                code: 'PE',
                flag: '🇵🇪',
                capital: 'Lima',
                currency: 'Peruvian Sol (PEN)',
                language: 'Spanish, Quechua',
                description: 'Machu Picchu, Nazca Lines, Amazon jungle, and world-class gastronomy',
                image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
                cities: {
                    lima: {
                        id: 'lima',
                        name: 'Lima',
                        country: 'Peru',
                        region: 'South America',
                        description: 'Gastronomic capital of South America with colonial center and coastal cliffs',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '10,000,000',
                        bestTime: 'December to April',
                        avgBudget: { budget: 40, mid: 80, luxury: 220 },
                        attractions: [
                            { name: 'Miraflores', type: 'Neighborhood', description: 'Upscale coastal district' },
                            { name: 'Historic Center', type: 'Historic', description: 'UNESCO colonial center' },
                            { name: 'Larco Museum', type: 'Museum', description: 'Pre-Columbian art and artifacts' },
                            { name: 'Barranco', type: 'Neighborhood', description: 'Bohemian district with street art' },
                            { name: 'Central Restaurant', type: 'Food', description: 'Among world\'s best restaurants' }
                        ],
                        tips: [
                            'Food scene is world-class - eat everything',
                            'Try ceviche for lunch',
                            'Coastal fog (garua) common winter',
                            'Gateway to rest of Peru'
                        ]
                    },
                    cusco: {
                        id: 'cusco',
                        name: 'Cusco',
                        country: 'Peru',
                        region: 'South America',
                        description: 'Ancient Inca capital and gateway to Machu Picchu at 3,400m altitude',
                        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
                        population: '430,000',
                        bestTime: 'May to October (dry season)',
                        avgBudget: { budget: 35, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Machu Picchu', type: 'Ancient', description: 'Iconic lost city of the Incas' },
                            { name: 'Plaza de Armas', type: 'Square', description: 'Main square with cathedral' },
                            { name: 'SacsayhuamÃƒÆ’Ã‚Â¡n', type: 'Ancient', description: 'Massive Inca fortress above city' },
                            { name: 'Sacred Valley', type: 'Valley', description: 'Inca sites along Urubamba River' },
                            { name: 'San Pedro Market', type: 'Market', description: 'Local food market' }
                        ],
                        tips: [
                            'Altitude 3,400m - acclimatize 2 days',
                            'Book Machu Picchu tickets months ahead',
                            'Coca tea helps with altitude',
                            'Trek or train to Machu Picchu'
                        ]
                    },
                    arequipa: {
                        id: 'arequipa',
                        name: 'Arequipa',
                        country: 'Peru',
                        region: 'South America',
                        description: 'White city with stunning colonial architecture and Colca Canyon access',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,000,000',
                        bestTime: 'May to November',
                        avgBudget: { budget: 30, mid: 60, luxury: 180 },
                        attractions: [
                            { name: 'Santa Catalina Monastery', type: 'Religious', description: 'City within a city - colorful monastery' },
                            { name: 'Plaza de Armas', type: 'Square', description: 'White volcanic stone architecture' },
                            { name: 'Colca Canyon', type: 'Nature', description: 'Twice as deep as Grand Canyon' },
                            { name: 'El Misti Volcano', type: 'Volcano', description: 'Iconic backdrop - can be climbed' },
                            { name: 'Juanita the Ice Maiden', type: 'Museum', description: 'Inca mummy at university museum' }
                        ],
                        tips: [
                            'White volcanic stone architecture',
                            'Colca Canyon for condor watching',
                            'Try rocoto relleno (stuffed pepper)',
                            'Second largest city in Peru'
                        ]
                    }
                }
            },
            venezuela: {
                id: 'venezuela',
                name: 'Venezuela',
                code: 'VE',
                flag: '🇻🇪',
                capital: 'Caracas',
                currency: 'Venezuelan BolÃƒÆ’Ã‚Â­var (VES)',
                language: 'Spanish',
                description: 'Angel Falls, Caribbean beaches, Andean peaks, and Amazon wilderness',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    caracas: {
                        id: 'caracas',
                        name: 'Caracas',
                        country: 'Venezuela',
                        region: 'South America',
                        description: 'Capital city in mountain valley with vibrant culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,900,000',
                        bestTime: 'December to April (dry season)',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'TelefÃƒÆ’Ã‚Â©rico de Caracas', type: 'Cable Car', description: 'Cable car to Mount ÃƒÆ’Ã‚Âvila' },
                            { name: 'Plaza BolÃƒÆ’Ã‚Â­var', type: 'Square', description: 'Historic central square' },
                            { name: 'Museo de Bellas Artes', type: 'Museum', description: 'Fine arts museum' },
                            { name: 'Parque Nacional El ÃƒÆ’Ã‚Âvila', type: 'Nature', description: 'Mountain park above city' },
                            { name: 'Las Mercedes', type: 'Neighborhood', description: 'Dining and nightlife area' }
                        ],
                        tips: [
                            'Check travel advisories carefully',
                            'Safety concerns - travel with local guide',
                            'USD widely accepted',
                            'Gateway to Angel Falls trips'
                        ]
                    },
                    canaima: {
                        id: 'canaima',
                        name: 'Canaima & Angel Falls',
                        country: 'Venezuela',
                        region: 'South America',
                        description: 'World\'s highest waterfall and stunning tepui table mountains',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,000',
                        bestTime: 'June to December (waterfalls at peak)',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Angel Falls', type: 'Nature', description: 'World\'s highest uninterrupted waterfall' },
                            { name: 'Canaima Lagoon', type: 'Nature', description: 'Pink sand beaches and waterfalls' },
                            { name: 'Tepuis', type: 'Nature', description: 'Ancient table-top mountains' },
                            { name: 'Pemn Indigenous Villages', type: 'Culture', description: 'Indigenous PemÃƒÆ’Ã‚Â³n communities' },
                            { name: 'Scenic Flights', type: 'Adventure', description: 'Fly over tepuis and falls' }
                        ],
                        tips: [
                            'Fly from Ciudad BolÃƒÆ’Ã‚Â­var or Puerto Ordaz',
                            'Multi-day tours recommended',
                            'Rainy season has best waterfalls',
                            'Incredibly remote and pristine'
                        ]
                    }
                }
            },
            canada: {
                id: 'canada',
                name: 'Canada',
                code: 'CA',
                flag: '🇨🇦',
                capital: 'Ottawa',
                currency: 'Canadian Dollar (CAD)',
                language: 'English, French',
                description: 'Vast wilderness, multicultural cities, and stunning natural beauty',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    toronto: {
                        id: 'toronto',
                        name: 'Toronto',
                        country: 'Canada',
                        region: 'Americas',
                        description: 'Multicultural metropolis with iconic CN Tower and diverse neighborhoods',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,900,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'CN Tower', type: 'Landmark', description: 'Iconic tower with glass floor and EdgeWalk' },
                            { name: 'Royal Ontario Museum', type: 'Museum', description: 'World cultures and natural history' },
                            { name: 'Kensington Market', type: 'Neighborhood', description: 'Bohemian market neighborhood' },
                            { name: 'Distillery District', type: 'Historic', description: 'Victorian industrial buildings turned arts district' },
                            { name: 'Toronto Islands', type: 'Nature', description: 'Ferry ride to car-free islands' }
                        ],
                        tips: [
                            'Day trip to Niagara Falls',
                            'PATH underground city for winter walking',
                            'Try poutine at Smoke\'s Poutinerie',
                            'Toronto Film Festival in September'
                        ]
                    },
                    montreal: {
                        id: 'montreal',
                        name: 'Montreal',
                        country: 'Canada',
                        region: 'Americas',
                        description: 'French-speaking city with European charm, jazz, and incredible food scene',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,800,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                            { name: 'Old Montreal', type: 'Historic', description: 'Cobblestone streets and 17th-century buildings' },
                            { name: 'Notre-Dame Basilica', type: 'Religious', description: 'Stunning Gothic Revival interior' },
                            { name: 'Mount Royal', type: 'Park', description: 'Park with city views' },
                            { name: 'Jean-Talon Market', type: 'Market', description: 'Vibrant farmers market' },
                            { name: 'Mile End', type: 'Neighborhood', description: 'Hipster neighborhood with bagels' }
                        ],
                        tips: [
                            'French is helpful but English widely spoken',
                            'Try Montreal smoked meat and bagels',
                            'Jazz Festival in July is amazing',
                            'BIXI bikes for summer exploration'
                        ]
                    },
                    vancouver: {
                        id: 'vancouver',
                        name: 'Vancouver',
                        country: 'Canada',
                        region: 'Americas',
                        description: 'Pacific coast gem with mountains, ocean, and year-round outdoor activities',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '675,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 90, mid: 170, luxury: 450 },
                        attractions: [
                            { name: 'Stanley Park', type: 'Park', description: 'Urban rainforest with seawall' },
                            { name: 'Granville Island', type: 'Market', description: 'Public market and arts hub' },
                            { name: 'Capilano Suspension Bridge', type: 'Nature', description: 'Bridge through old-growth forest' },
                            { name: 'Gastown', type: 'Historic', description: 'Oldest neighborhood with steam clock' },
                            { name: 'Grouse Mountain', type: 'Mountain', description: 'Skiing and views just 15min from downtown' }
                        ],
                        tips: [
                            'Rainy from October to March',
                            'Day trip to Whistler for skiing',
                            'Sushi scene rivals Japan',
                            'Bike the seawall around Stanley Park'
                        ]
                    },
                    calgary: {
                        id: 'calgary',
                        name: 'Calgary',
                        country: 'Canada',
                        region: 'Americas',
                        description: 'Gateway to the Rockies with cowboy culture and booming energy sector',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,300,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 85, mid: 160, luxury: 400 },
                        attractions: [
                            { name: 'Calgary Stampede', type: 'Festival', description: 'World-famous rodeo in July' },
                            { name: 'Banff National Park', type: 'Nature', description: 'Stunning Rocky Mountains park nearby' },
                            { name: 'Calgary Tower', type: 'Landmark', description: 'Observation deck with glass floor' },
                            { name: 'Heritage Park', type: 'Museum', description: 'Historical village and railway' },
                            { name: 'Prince\'s Island Park', type: 'Park', description: 'Urban park on Bow River' }
                        ],
                        tips: [
                            'Visit Banff and Lake Louise from here',
                            'Chinook winds can change weather rapidly',
                            'Oil industry means expensive accommodations',
                            'Try Alberta beef at any steakhouse'
                        ]
                    }
                }
            },
            costaRica: {
                id: 'costaRica',
                name: 'Costa Rica',
                code: 'CR',
                flag: '🇨🇷',
                capital: 'San JosÃƒÆ’Ã‚Â©',
                currency: 'Costa Rican ColÃƒÆ’Ã‚Â³n (CRC)',
                language: 'Spanish',
                description: 'Pura Vida lifestyle with rainforests, volcanoes, and incredible biodiversity',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    sanJose: {
                        id: 'sanJose',
                        name: 'San JosÃƒÆ’Ã‚Â©',
                        country: 'Costa Rica',
                        region: 'Americas',
                        description: 'Capital city gateway to Costa Rica\'s natural wonders',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '340,000',
                        bestTime: 'December to April (dry season)',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'National Theater', type: 'Theater', description: 'Ornate 1897 theater' },
                            { name: 'Gold Museum', type: 'Museum', description: 'Pre-Columbian gold artifacts' },
                            { name: 'Central Market', type: 'Market', description: 'Traditional market since 1880' },
                            { name: 'PoÃƒÆ’Ã‚Â¡s Volcano', type: 'Nature', description: 'Active volcano day trip' },
                            { name: 'La Paz Waterfall Gardens', type: 'Nature', description: 'Waterfalls and wildlife' }
                        ],
                        tips: [
                            'Most visitors use San JosÃƒÆ’Ã‚Â© as transit hub',
                            'US dollars widely accepted',
                            'Try gallo pinto for breakfast',
                            'Book adventure tours in advance'
                        ]
                    }
                }
            },
            guatemala: {
                id: 'guatemala',
                name: 'Guatemala',
                code: 'GT',
                flag: '🇬🇹',
                capital: 'Guatemala City',
                currency: 'Guatemalan Quetzal (GTQ)',
                language: 'Spanish',
                description: 'Heart of the Mayan world with ancient ruins, colorful markets, and volcanic landscapes',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    antiguaGuatemala: {
                        id: 'antiguaGuatemala',
                        name: 'Antigua Guatemala',
                        country: 'Guatemala',
                        region: 'Americas',
                        description: 'Colonial gem surrounded by volcanoes with cobblestone streets and Spanish ruins',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '45,000',
                        bestTime: 'November to April (dry season)',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Santa Catalina Arch', type: 'Landmark', description: 'Iconic yellow arch with Agua volcano backdrop' },
                            { name: 'Central Park', type: 'Square', description: 'Heart of the city with colonial buildings' },
                            { name: 'Church Ruins', type: 'Historic', description: 'Atmospheric earthquake-damaged churches' },
                            { name: 'Cerro de la Cruz', type: 'Viewpoint', description: 'Hilltop cross with city panorama' },
                            { name: 'Jade Museum', type: 'Museum', description: 'Mayan jade artifacts and jewelry' }
                        ],
                        tips: [
                            'Climb Pacaya Volcano at sunrise',
                            'Learn Spanish - excellent schools here',
                            'Semana Santa (Easter) is spectacular',
                            'Hire private shuttles for safety'
                        ]
                    }
                }
            },
            honduras: {
                id: 'honduras',
                name: 'Honduras',
                code: 'HN',
                flag: '🇭🇳',
                capital: 'Tegucigalpa',
                currency: 'Honduran Lempira (HNL)',
                language: 'Spanish',
                description: 'Caribbean islands, ancient Mayan ruins, and untouched rainforests',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    roatan: {
                        id: 'roatan',
                        name: 'RoatÃƒÆ’Ã‚Â¡n',
                        country: 'Honduras',
                        region: 'Americas',
                        description: 'Caribbean island paradise with world-class diving on Mesoamerican Barrier Reef',
                        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
                        population: '100,000',
                        bestTime: 'February to August',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'West Bay Beach', type: 'Beach', description: 'Stunning white sand beach with reef' },
                            { name: 'Diving', type: 'Activity', description: 'World-class affordable PADI certification' },
                            { name: 'Little French Key', type: 'Beach', description: 'Private island with beach and animals' },
                            { name: 'Gumbalimba Park', type: 'Nature', description: 'Jungle park with monkeys and ziplines' },
                            { name: 'Carambola Botanical Gardens', type: 'Garden', description: 'Tropical gardens with wildlife' }
                        ],
                        tips: [
                            'Cheapest diving certification in the world',
                            'Water taxis connect beaches',
                            'Try baleadas (Honduran tortillas)',
                            'Cruise ships bring crowds - avoid those days'
                        ]
                    }
                }
            },
            jamaica: {
                id: 'jamaica',
                name: 'Jamaica',
                code: 'JM',
                flag: '🇯🇲',
                capital: 'Kingston',
                currency: 'Jamaican Dollar (JMD)',
                language: 'English, Jamaican Patois',
                description: 'Caribbean vibes with reggae music, jerk cuisine, beaches, and Blue Mountains',
                image: 'https://images.unsplash.com/photo-1565949201467-c6c0cf2a1088?w=800',
                cities: {
                    montegoBay: {
                        id: 'montegoBay',
                        name: 'Montego Bay',
                        country: 'Jamaica',
                        region: 'Americas',
                        description: 'Jamaica\'s tourism capital with beaches, resorts, and hip strip nightlife',
                        image: 'https://images.unsplash.com/photo-1565949201467-c6c0cf2a1088?w=800',
                        population: '110,000',
                        bestTime: 'December to April',
                        avgBudget: { budget: 60, mid: 120, luxury: 350 },
                        attractions: [
                            { name: 'Doctor\'s Cave Beach', type: 'Beach', description: 'Famous white sand beach' },
                            { name: 'Hip Strip', type: 'Street', description: 'Main tourist area with shops and clubs' },
                            { name: 'Rose Hall Great House', type: 'Historic', description: 'Haunted plantation house tours' },
                            { name: 'Dunn\'s River Falls', type: 'Nature', description: 'Climb the iconic waterfall' },
                            { name: 'Luminous Lagoon', type: 'Nature', description: 'Bioluminescent night tour' }
                        ],
                        tips: [
                            'Stay resort or venture out carefully',
                            'Try authentic jerk chicken',
                            'Haggle at craft markets',
                            'Rain is brief in wet season'
                        ]
                    },
                    negril: {
                        id: 'negril',
                        name: 'Negril',
                        country: 'Jamaica',
                        region: 'Americas',
                        description: 'Laid-back beach town with 7-mile beach and legendary cliff-jumping',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '6,000',
                        bestTime: 'December to April',
                        avgBudget: { budget: 55, mid: 110, luxury: 320 },
                        attractions: [
                            { name: 'Seven Mile Beach', type: 'Beach', description: 'Famous long stretch of sand' },
                            { name: 'Rick\'s Cafe', type: 'Bar', description: 'Sunset cliff jumping spot' },
                            { name: 'West End Cliffs', type: 'Nature', description: 'Dramatic cliffside hotels and bars' },
                            { name: 'Negril Lighthouse', type: 'Landmark', description: 'Historic lighthouse at western tip' },
                            { name: 'Blue Hole Mineral Spring', type: 'Nature', description: 'Natural swimming hole' }
                        ],
                        tips: [
                            'Sunset at Rick\'s is legendary',
                            'West End for cliffs, beach side for sand',
                            'Very relaxed atmosphere',
                            'Book all-inclusive or eat local'
                        ]
                    }
                }
            },
            mexico: {
                id: 'mexico',
                name: 'Mexico',
                code: 'MX',
                flag: '🇲🇽',
                capital: 'Mexico City',
                currency: 'Mexican Peso (MXN)',
                language: 'Spanish',
                description: 'Ancient Mayan ruins, colonial cities, incredible cuisine, and Caribbean beaches',
                image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800',
                cities: {
                    mexicoCity: {
                        id: 'mexicoCity',
                        name: 'Mexico City',
                        country: 'Mexico',
                        region: 'Americas',
                        description: 'Massive capital built on Aztec ruins with world-class museums and food scene',
                        image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800',
                        population: '21,600,000',
                        bestTime: 'March to May',
                        avgBudget: { budget: 40, mid: 80, luxury: 220 },
                        attractions: [
                            { name: 'Zocalo', type: 'Square', description: 'Main square with cathedral and Aztec ruins' },
                            { name: 'National Museum of Anthropology', type: 'Museum', description: 'World\'s best collection of Mesoamerican artifacts' },
                            { name: 'Frida Kahlo Museum', type: 'Museum', description: 'Casa Azul - Frida\'s home' },
                            { name: 'Chapultepec Castle', type: 'Castle', description: 'Hilltop castle with city views' },
                            { name: 'CoyoacÃƒÆ’Ã‚Â¡n', type: 'Neighborhood', description: 'Bohemian neighborhood with markets' }
                        ],
                        tips: [
                            'Street food is incredible - trust busy stalls',
                            'Traffic is brutal - use Metro',
                            'Try tacos al pastor and tlacoyos',
                            'Altitude 2,240m - take it easy first day'
                        ]
                    },
                    cancun: {
                        id: 'cancun',
                        name: 'CancÃƒÆ’Ã‚Âºn',
                        country: 'Mexico',
                        region: 'Americas',
                        description: 'Caribbean resort city with turquoise waters and access to Mayan ruins',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '900,000',
                        bestTime: 'December to April',
                        avgBudget: { budget: 60, mid: 120, luxury: 350 },
                        attractions: [
                            { name: 'Hotel Zone Beaches', type: 'Beach', description: 'Stunning Caribbean beaches' },
                            { name: 'ChichÃƒÆ’Ã‚Â©n ItzÃƒÆ’Ã‚Â¡', type: 'Ancient', description: 'New Seven Wonders pyramids' },
                            { name: 'Cenotes', type: 'Nature', description: 'Sacred swimming holes' },
                            { name: 'Tulum', type: 'Ancient', description: 'Beachside Mayan ruins' },
                            { name: 'Isla Mujeres', type: 'Island', description: 'Laid-back island ferry trip' }
                        ],
                        tips: [
                            'Hotel Zone is touristy but safe',
                            'Downtown CancÃƒÆ’Ã‚Âºn is more authentic',
                            'Book ChichÃƒÆ’Ã‚Â©n ItzÃƒÆ’Ã‚Â¡ early morning tour',
                            'Hurricane season June to November'
                        ]
                    },
                    oaxaca: {
                        id: 'oaxaca',
                        name: 'Oaxaca',
                        country: 'Mexico',
                        region: 'Americas',
                        description: 'Colonial city with indigenous culture, mezcal, and world-famous cuisine',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '270,000',
                        bestTime: 'October to April',
                        avgBudget: { budget: 35, mid: 70, luxury: 190 },
                        attractions: [
                            { name: 'Monte AlbÃƒÆ’Ã‚Â¡n', type: 'Ancient', description: 'Zapotec ruins overlooking valley' },
                            { name: 'Santo Domingo Church', type: 'Religious', description: 'Baroque church with gold interior' },
                            { name: 'Mercado Benito JuÃƒÆ’Ã‚Â¡rez', type: 'Market', description: 'Food market with tlayudas' },
                            { name: 'Hierve el Agua', type: 'Nature', description: 'Petrified waterfalls with pools' },
                            { name: 'Mezcal Distilleries', type: 'Distillery', description: 'Traditional mezcal production' }
                        ],
                        tips: [
                            'Food scene rivals Mexico City',
                            'Day of the Dead celebrations huge',
                            'Mezcal is serious here - try many',
                            'Indigenous cultures very present'
                        ]
                    }
                }
            },
            unitedStates: {
                id: 'unitedStates',
                name: 'United States',
                code: 'US',
                flag: '🇺🇸',
                capital: 'Washington, D.C.',
                currency: 'US Dollar (USD)',
                language: 'English',
                description: 'Vast country with diverse landscapes from NYC to national parks to beaches',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    newYork: {
                        id: 'newYork',
                        name: 'New York City',
                        country: 'United States',
                        region: 'Americas',
                        description: 'The city that never sleeps with iconic skyline, Broadway, and world culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '8,300,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 120, mid: 250, luxury: 600 },
                        attractions: [
                            { name: 'Statue of Liberty', type: 'Landmark', description: 'Iconic symbol of freedom' },
                            { name: 'Central Park', type: 'Park', description: 'Iconic 843-acre urban oasis' },
                            { name: 'Times Square', type: 'Square', description: 'Neon-lit heart of Manhattan' },
                            { name: 'Empire State Building', type: 'Viewpoint', description: 'Art deco observation deck' },
                            { name: 'Metropolitan Museum', type: 'Museum', description: 'World\'s greatest art collection' }
                        ],
                        tips: [
                            'Walk everywhere in Manhattan',
                            'Get Broadway tickets at TKTS booth',
                            'Pizza slice is essential',
                            'Subway is 24/7'
                        ]
                    },
                    losAngeles: {
                        id: 'losAngeles',
                        name: 'Los Angeles',
                        country: 'United States',
                        region: 'Americas',
                        description: 'Hollywood, beaches, diverse culture, and year-round sunshine',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '4,000,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Hollywood Sign', type: 'Landmark', description: 'Iconic hillside letters' },
                            { name: 'Santa Monica Pier', type: 'Landmark', description: 'Beach boardwalk and Ferris wheel' },
                            { name: 'Griffith Observatory', type: 'Viewpoint', description: 'City views and planetarium' },
                            { name: 'Universal Studios', type: 'Theme Park', description: 'Movie-themed attractions' },
                            { name: 'Getty Center', type: 'Museum', description: 'Free world-class art museum' }
                        ],
                        tips: [
                            'You need a car in LA',
                            'Traffic is legendary - plan accordingly',
                            'Beach cities each have character',
                            'Great hiking in surrounding hills'
                        ]
                    },
                    lasVegas: {
                        id: 'lasVegas',
                        name: 'Las Vegas',
                        country: 'United States',
                        region: 'Americas',
                        description: 'Entertainment capital with casinos, shows, and gateway to national parks',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '650,000',
                        bestTime: 'March to May, September to November (avoid summer heat)',
                        avgBudget: { budget: 80, mid: 180, luxury: 500 },
                        attractions: [
                            { name: 'The Strip', type: 'Street', description: 'Famous casino boulevard' },
                            { name: 'Fremont Street', type: 'Street', description: 'Original downtown Vegas' },
                            { name: 'Shows', type: 'Entertainment', description: 'Cirque du Soleil and headliners' },
                            { name: 'Grand Canyon', type: 'Nature', description: 'Day trip to South or West Rim' },
                            { name: 'Hoover Dam', type: 'Landmark', description: 'Engineering marvel nearby' }
                        ],
                        tips: [
                            'Set a gambling budget and stick to it',
                            'Free shows and attractions on Strip',
                            'Buffets are worth it',
                            'Gateway to Grand Canyon and Utah parks'
                        ]
                    },
                    washingtonDC: {
                        id: 'washingtonDC',
                        name: 'Washington, D.C.',
                        country: 'United States',
                        region: 'Americas',
                        description: 'Nation\'s capital with free Smithsonian museums and iconic monuments',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '690,000',
                        bestTime: 'March to May (cherry blossoms), September to November',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'National Mall', type: 'Landmark', description: 'Lincoln Memorial to Capitol' },
                            { name: 'Smithsonian Museums', type: 'Museum', description: '19 free museums!' },
                            { name: 'White House', type: 'Landmark', description: 'Presidential residence' },
                            { name: 'Capitol Building', type: 'Landmark', description: 'U.S. Congress building' },
                            { name: 'Arlington Cemetery', type: 'Memorial', description: 'Military cemetery with JFK grave' }
                        ],
                        tips: [
                            'Most museums are FREE',
                            'Cherry Blossom Festival in March/April',
                            'Walk the Mall to see monuments',
                            'Book White House tours months ahead'
                        ]
                    },
                    sanFrancisco: {
                        id: 'sanFrancisco',
                        name: 'San Francisco',
                        country: 'United States',
                        region: 'Americas',
                        description: 'City by the Bay with Golden Gate, cable cars, and tech culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '880,000',
                        bestTime: 'September to November (warmest)',
                        avgBudget: { budget: 120, mid: 240, luxury: 600 },
                        attractions: [
                            { name: 'Golden Gate Bridge', type: 'Landmark', description: 'Iconic orange suspension bridge' },
                            { name: 'Alcatraz', type: 'Historic', description: 'Former prison island' },
                            { name: 'Fisherman\'s Wharf', type: 'Waterfront', description: 'Sea lions and seafood' },
                            { name: 'Cable Cars', type: 'Transport', description: 'Historic moving landmarks' },
                            { name: 'Chinatown', type: 'Neighborhood', description: 'Oldest Chinatown in North America' }
                        ],
                        tips: [
                            'Book Alcatraz weeks ahead',
                            'Mark Twain: coldest winter was SF summer',
                            'Bring layers - fog rolls in',
                            'Walk or use BART/Muni'
                        ]
                    },
                    orlando: {
                        id: 'orlando',
                        name: 'Orlando',
                        country: 'United States',
                        region: 'Americas',
                        description: 'Theme park capital of the world with Disney, Universal, and year-round sunshine',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '310,000',
                        bestTime: 'September to November (less crowds), February to March',
                        avgBudget: { budget: 100, mid: 250, luxury: 700 },
                        attractions: [
                            { name: 'Walt Disney World', type: 'Theme Park', description: '4 theme parks and more' },
                            { name: 'Universal Orlando', type: 'Theme Park', description: 'Wizarding World of Harry Potter' },
                            { name: 'SeaWorld', type: 'Theme Park', description: 'Marine life and coasters' },
                            { name: 'ICON Park', type: 'Entertainment', description: 'Observation wheel and attractions' },
                            { name: 'Kennedy Space Center', type: 'Museum', description: 'Space exploration - 1 hour away' }
                        ],
                        tips: [
                            'Summer is HOT and crowded',
                            'Buy park tickets in advance',
                            'Disney needs multiple days',
                            'Rent a car to get around'
                        ]
                    },
                    niagaraFalls: {
                        id: 'niagaraFalls',
                        name: 'Niagara Falls',
                        country: 'United States',
                        region: 'Americas',
                        description: 'Thundering waterfalls on US-Canada border with boat tours and casinos',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '50,000',
                        bestTime: 'June to August (boat tours), April to October',
                        avgBudget: { budget: 80, mid: 160, luxury: 400 },
                        attractions: [
                            { name: 'Niagara Falls', type: 'Nature', description: 'Three massive waterfalls' },
                            { name: 'Maid of the Mist', type: 'Tour', description: 'Boat ride to base of falls' },
                            { name: 'Cave of the Winds', type: 'Attraction', description: 'Walk under Bridal Veil Falls' },
                            { name: 'Observation Tower', type: 'Viewpoint', description: 'Aerial views of falls' },
                            { name: 'Canadian Side', type: 'Viewpoint', description: 'Better views from Canada' }
                        ],
                        tips: [
                            'Canadian side has better views',
                            'Bring passport to cross border',
                            'You will get wet - ponchos provided',
                            'Day trip from NYC or Toronto'
                        ]
                    }
                }
            },
            nicaragua: {
                id: 'nicaragua',
                name: 'Nicaragua',
                code: 'NI',
                flag: '🇳🇮',
                capital: 'Managua',
                currency: 'Nicaraguan CÃƒÆ’Ã‚Â³rdoba (NIO)',
                language: 'Spanish',
                description: 'Volcanoes, colonial cities, surf beaches, and off-the-beaten-path adventures',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    granada: {
                        id: 'granada',
                        name: 'Granada',
                        country: 'Nicaragua',
                        region: 'Americas',
                        description: 'Colorful colonial city on Lake Nicaragua with volcanic backdrop',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '130,000',
                        bestTime: 'November to April (dry season)',
                        avgBudget: { budget: 30, mid: 60, luxury: 160 },
                        attractions: [
                            { name: 'Central Park & Cathedral', type: 'Historic', description: 'Colonial center with yellow cathedral' },
                            { name: 'Las Isletas', type: 'Nature', description: 'Boat trip through volcanic islets' },
                            { name: 'VolcÃƒÆ’Ã‚Â¡n Mombacho', type: 'Volcano', description: 'Cloud forest hikes and zip lines' },
                            { name: 'La Calzada', type: 'Street', description: 'Restaurant and nightlife street' },
                            { name: 'Laguna de Apoyo', type: 'Nature', description: 'Volcanic crater lake for swimming' }
                        ],
                        tips: [
                            'Most tourist-friendly city in Nicaragua',
                            'Hostels have great social scenes',
                            'Volcano boarding at Cerro Negro',
                            'Very affordable destination'
                        ]
                    },
                    leon: {
                        id: 'leon',
                        name: 'LeÃƒÆ’Ã‚Â³n',
                        country: 'Nicaragua',
                        region: 'Americas',
                        description: 'University town with revolutionary history and volcano adventures',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '200,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 25, mid: 55, luxury: 140 },
                        attractions: [
                            { name: 'LeÃƒÆ’Ã‚Â³n Cathedral', type: 'Religious', description: 'UNESCO largest cathedral in Central America' },
                            { name: 'Cerro Negro', type: 'Volcano', description: 'Famous volcano boarding' },
                            { name: 'Mural Art', type: 'Art', description: 'Revolutionary murals throughout city' },
                            { name: 'Poneloya Beach', type: 'Beach', description: 'Nearby Pacific beach' },
                            { name: 'Ruins of LeÃƒÆ’Ã‚Â³n Viejo', type: 'Ruins', description: 'UNESCO Spanish colonial ruins' }
                        ],
                        tips: [
                            'Volcano boarding is a must-do',
                            'More local feel than Granada',
                            'Revolutionary history visible',
                            'Walk the cathedral roof'
                        ]
                    }
                }
            }
        }
    },
    centralAsia: {
        id: 'centralAsia',
        name: 'Central Asia',
        emoji: '🐪',
        description: 'Ancient Silk Road heritage with stunning mountain landscapes',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800',
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
                    },
                    sheki: {
                        id: 'sheki',
                        name: 'Sheki',
                        country: 'Azerbaijan',
                        region: 'Central Asia',
                        description: 'Ancient Silk Road city with stunning Khan\'s Palace and mountain scenery',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '65,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 35, mid: 70, luxury: 160 },
                        attractions: [
                            { name: 'Sheki Khan\'s Palace', type: 'Palace', description: 'UNESCO World Heritage with stunning stained glass' },
                            { name: 'Sheki Fortress', type: 'Historic', description: 'Ancient fortress walls surrounding old town' },
                            { name: 'Caravanserai', type: 'Historic', description: 'Historic Silk Road trading inn, now hotel' },
                            { name: 'Albanian Church', type: 'Religious', description: 'Ancient Caucasian Albanian church in Kish' },
                            { name: 'Sheki Bazaar', type: 'Market', description: 'Traditional market with local crafts' }
                        ],
                        tips: [
                            'Try famous Sheki halva and piti',
                            '5 hour drive from Baku',
                            'Stay in the historic caravanserai',
                            'Visit silk workshop for traditional crafts'
                        ]
                    },
                    ganja: {
                        id: 'ganja',
                        name: 'Ganja',
                        country: 'Azerbaijan',
                        region: 'Central Asia',
                        description: 'Azerbaijan\'s second city with rich history and poet Nizami\'s birthplace',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '335,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Nizami Mausoleum', type: 'Historic', description: 'Tomb of famous Persian poet Nizami Ganjavi' },
                            { name: 'Bottle House', type: 'Architecture', description: 'Unique house built from 48,000 glass bottles' },
                            { name: 'Javad Khan Street', type: 'Street', description: 'Central pedestrian promenade' },
                            { name: 'Shah Abbas Mosque', type: 'Religious', description: 'Historic 17th-century mosque' },
                            { name: 'Imamzadeh Complex', type: 'Religious', description: 'Blue-tiled mausoleum complex' }
                        ],
                        tips: [
                            '4 hour drive from Baku',
                            'Known for beautiful parks and gardens',
                            'Visit nearby Goygol Lake',
                            'Try local pakhlava sweets'
                        ]
                    },
                    lankaran: {
                        id: 'lankaran',
                        name: 'Lankaran',
                        country: 'Azerbaijan',
                        region: 'Central Asia',
                        description: 'Subtropical coastal city near Iran border with unique Talysh culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '85,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 30, mid: 55, luxury: 130 },
                        attractions: [
                            { name: 'Lankaran Lighthouse', type: 'Landmark', description: 'Historic lighthouse on Caspian Sea' },
                            { name: 'Khan\'s House', type: 'Historic', description: '19th-century Talysh Khan residence' },
                            { name: 'Hirkan National Park', type: 'Nature', description: 'UNESCO biosphere with subtropical forest' },
                            { name: 'Yanar Bulag', type: 'Nature', description: 'Burning water spring natural phenomenon' },
                            { name: 'Ballabur Fortress', type: 'Historic', description: 'Ancient fortress ruins' }
                        ],
                        tips: [
                            'Known for Lankaran tea and citrus fruits',
                            'Subtropical climate - warmer than Baku',
                            'Try Talysh cuisine - lavangi chicken',
                            'Near thermal springs in Masalli'
                        ]
                    }
                }
            },
            georgia: {
                id: 'georgia',
                name: 'Georgia',
                code: 'GE',
                flag: '🇬🇪',
                capital: 'Tbilisi',
                currency: 'Georgian Lari (GEL)',
                language: 'Georgian',
                description: 'Ancient wine country with stunning mountains, medieval churches, and legendary hospitality',
                image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800',
                cities: {
                    tbilisi: {
                        id: 'tbilisi',
                        name: 'Tbilisi',
                        country: 'Georgia',
                        region: 'Central Asia',
                        description: 'Charming capital with sulfur baths, colorful old town, and wine culture',
                        image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800',
                        population: '1,200,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                            { name: 'Old Town (Kala)', type: 'Historic', description: 'Winding streets with balconied houses' },
                            { name: 'Narikala Fortress', type: 'Fortress', description: 'Ancient fortress overlooking city' },
                            { name: 'Abanotubani', type: 'Landmark', description: 'Historic sulfur bath district' },
                            { name: 'Holy Trinity Cathedral', type: 'Religious', description: 'Largest Orthodox cathedral in Georgia' },
                            { name: 'Rustaveli Avenue', type: 'Street', description: 'Main boulevard with theaters and shops' }
                        ],
                        tips: [
                            'Try a sulfur bath experience',
                            'Georgian wine has 8000 year history',
                            'Khinkali dumplings and khachapuri cheese bread are must-tries',
                            'Cable car to Narikala for city views'
                        ]
                    },
                    batumi: {
                        id: 'batumi',
                        name: 'Batumi',
                        country: 'Georgia',
                        region: 'Central Asia',
                        description: 'Black Sea resort city with casinos, bold architecture, and subtropical climate',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '180,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Batumi Boulevard', type: 'Waterfront', description: '7km seaside promenade' },
                            { name: 'Ali and Nino Statue', type: 'Landmark', description: 'Moving sculpture of lovers' },
                            { name: 'Batumi Botanical Garden', type: 'Garden', description: 'Stunning hillside gardens' },
                            { name: 'Piazza Square', type: 'Square', description: 'Italian-style mosaic square' },
                            { name: 'Alphabet Tower', type: 'Landmark', description: 'Tower shaped like Georgian letters' }
                        ],
                        tips: [
                            'Casinos and nightlife hub',
                            'Beach season June to September',
                            'Day trip to Gonio Fortress',
                            'Try Adjarian khachapuri with egg'
                        ]
                    }
                }
            },
            kazakhstan: {
                id: 'kazakhstan',
                name: 'Kazakhstan',
                code: 'KZ',
                flag: '🇰🇿',
                capital: 'Astana',
                currency: 'Kazakhstani Tenge (KZT)',
                language: 'Kazakh, Russian',
                description: 'World\'s largest landlocked country with futuristic cities and vast steppes',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    astana: {
                        id: 'astana',
                        name: 'Astana',
                        country: 'Kazakhstan',
                        region: 'Central Asia',
                        description: 'Futuristic capital rising from the steppe with bold modern architecture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,200,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Baiterek Tower', type: 'Landmark', description: 'Iconic tree-shaped monument' },
                            { name: 'Khan Shatyr', type: 'Mall', description: 'World\'s largest tent structure' },
                            { name: 'Palace of Peace and Reconciliation', type: 'Landmark', description: 'Norman Foster\'s pyramid' },
                            { name: 'Nur-Astana Mosque', type: 'Religious', description: 'Central Asia\'s largest mosque' },
                            { name: 'Hazrat Sultan Mosque', type: 'Religious', description: 'Beautiful white and gold mosque' }
                        ],
                        tips: [
                            'Extreme temperatures - very hot summer, freezing winter',
                            'Visa-free for many nationalities',
                            'Try beshbarmak (national dish)',
                            'City is very spread out - use taxis'
                        ]
                    },
                    almaty: {
                        id: 'almaty',
                        name: 'Almaty',
                        country: 'Kazakhstan',
                        region: 'Central Asia',
                        description: 'Former capital nestled in Tian Shan mountains with Soviet and modern mix',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,000,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 45, mid: 90, luxury: 250 },
                        attractions: [
                            { name: 'Big Almaty Lake', type: 'Nature', description: 'Stunning turquoise mountain lake' },
                            { name: 'Zenkov Cathedral', type: 'Religious', description: 'Colorful wooden cathedral' },
                            { name: 'Shymbulak Ski Resort', type: 'Sports', description: 'Mountain resort with hiking and skiing' },
                            { name: 'Green Bazaar', type: 'Market', description: 'Central Asian spices and goods' },
                            { name: 'Kok-Tobe', type: 'Viewpoint', description: 'Hill with cable car and views' }
                        ],
                        tips: [
                            'More attractive than Astana',
                            'Great base for mountain adventures',
                            'Still feels like largest city',
                            'Apples originate from Almaty region'
                        ]
                    }
                }
            },
            kyrgyzstan: {
                id: 'kyrgyzstan',
                name: 'Kyrgyzstan',
                code: 'KG',
                flag: '🇰🇬',
                capital: 'Bishkek',
                currency: 'Kyrgyzstani Som (KGS)',
                language: 'Kyrgyz, Russian',
                description: 'Switzerland of Central Asia with epic mountains, nomadic culture, and yurt stays',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    bishkek: {
                        id: 'bishkek',
                        name: 'Bishkek',
                        country: 'Kyrgyzstan',
                        region: 'Central Asia',
                        description: 'Leafy capital with Soviet architecture and gateway to stunning mountains',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,100,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 25, mid: 50, luxury: 130 },
                        attractions: [
                            { name: 'Ala-Too Square', type: 'Square', description: 'Central square with monuments' },
                            { name: 'Osh Bazaar', type: 'Market', description: 'Huge traditional bazaar' },
                            { name: 'State Historical Museum', type: 'Museum', description: 'Soviet-era museum on main square' },
                            { name: 'Ala Archa National Park', type: 'Nature', description: 'Alpine park day trip' },
                            { name: 'Oak Park', type: 'Park', description: 'Central park with sculptures' }
                        ],
                        tips: [
                            'Gateway to Issyk-Kul lake trips',
                            'Book CBT (Community Based Tourism) treks',
                            'Visa-free for many nationalities',
                            'Learn basic Russian phrases'
                        ]
                    },
                    issykKul: {
                        id: 'issykKul',
                        name: 'Issyk-Kul',
                        country: 'Kyrgyzstan',
                        region: 'Central Asia',
                        description: 'World\'s second-largest alpine lake surrounded by snow-capped mountains',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '50,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Issyk-Kul Lake', type: 'Nature', description: 'Crystal clear alpine lake' },
                            { name: 'Karakol', type: 'Town', description: 'Base for trekking and skiing' },
                            { name: 'Jeti-ÃƒÆ’Ã¢â‚¬â€œgÃƒÆ’Ã‚Â¼z', type: 'Nature', description: 'Red rock formations' },
                            { name: 'Yurt Camps', type: 'Accommodation', description: 'Traditional nomad stays' },
                            { name: 'Eagle Hunting', type: 'Culture', description: 'Traditional Kyrgyz hunting practice' }
                        ],
                        tips: [
                            'Stay in a yurt for authentic experience',
                            'North shore more developed, south wilder',
                            'Lake never freezes despite altitude',
                            'Try kumys (fermented mare\'s milk)'
                        ]
                    }
                }
            },
            tajikistan: {
                id: 'tajikistan',
                name: 'Tajikistan',
                code: 'TJ',
                flag: '🇹🇯',
                capital: 'Dushanbe',
                currency: 'Tajikistani Somoni (TJS)',
                language: 'Tajik, Russian',
                description: 'Roof of the world with Pamir Mountains and ancient Silk Road heritage',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    dushanbe: {
                        id: 'dushanbe',
                        name: 'Dushanbe',
                        country: 'Tajikistan',
                        region: 'Central Asia',
                        description: 'Leafy capital with Soviet architecture and mountain backdrop',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '900,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 25, mid: 50, luxury: 130 },
                        attractions: [
                            { name: 'Rudaki Park', type: 'Park', description: 'Central park with fountains' },
                            { name: 'National Museum', type: 'Museum', description: 'Tajik history and culture' },
                            { name: 'Ismaili Centre', type: 'Landmark', description: 'Stunning modern center' },
                            { name: 'Hisor Fortress', type: 'Historic', description: 'Ancient fortress ruins nearby' },
                            { name: 'Green Bazaar', type: 'Market', description: 'Traditional Tajik market' }
                        ],
                        tips: [
                            'Gateway to Pamir Highway',
                            'Apply for GBAO permit for Pamirs',
                            'Very hospitable people',
                            'Learn basic Russian phrases'
                        ]
                    },
                    pamir: {
                        id: 'pamir',
                        name: 'Pamir Highway',
                        country: 'Tajikistan',
                        region: 'Central Asia',
                        description: 'One of world\'s most epic road trips through the Roof of the World',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '250,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Pamir Highway M41', type: 'Road', description: 'Second highest highway in world' },
                            { name: 'Khorog', type: 'Town', description: 'Main town of Gorno-Badakhshan' },
                            { name: 'Wakhan Valley', type: 'Valley', description: 'Ancient Silk Road with fortress ruins' },
                            { name: 'Lake Karakul', type: 'Nature', description: 'High altitude crater lake' },
                            { name: 'Yamg Village', type: 'Village', description: 'Mountain village homestays' }
                        ],
                        tips: [
                            'GBAO permit required - apply in Dushanbe',
                            'Altitude sickness risk - acclimatize',
                            '4WD recommended',
                            'Remote - bring supplies'
                        ]
                    }
                }
            },
            turkmenistan: {
                id: 'turkmenistan',
                name: 'Turkmenistan',
                code: 'TM',
                flag: '🇹🇲',
                capital: 'Ashgabat',
                currency: 'Turkmenistani Manat (TMT)',
                language: 'Turkmen',
                description: 'Isolated nation with marble cities, ancient ruins, and the Darvaza Gas Crater',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    ashgabat: {
                        id: 'ashgabat',
                        name: 'Ashgabat',
                        country: 'Turkmenistan',
                        region: 'Central Asia',
                        description: 'Surreal white marble capital with golden statues and personality cult',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,000,000',
                        bestTime: 'April to May, September to October',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                            { name: 'Arch of Neutrality', type: 'Monument', description: 'Golden rotating Turkmenbashi statue' },
                            { name: 'Turkmenistan Tower', type: 'Landmark', description: 'World\'s tallest indoor ferris wheel' },
                            { name: 'National Museum', type: 'Museum', description: 'History and propaganda' },
                            { name: 'Russian Bazaar', type: 'Market', description: 'Local market experience' },
                            { name: 'Wedding Palace', type: 'Landmark', description: '8-pointed star building' }
                        ],
                        tips: [
                            'One of world\'s most isolated countries',
                            'Visa requires letter of invitation',
                            'Photography restricted',
                            'Must book through tour agency'
                        ]
                    },
                    darvaza: {
                        id: 'darvaza',
                        name: 'Darvaza Gas Crater',
                        country: 'Turkmenistan',
                        region: 'Central Asia',
                        description: 'The Door to Hell - burning gas crater in the Karakum Desert',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '350',
                        bestTime: 'October to April (cooler weather)',
                        avgBudget: { budget: 80, mid: 150, luxury: 350 },
                        attractions: [
                            { name: 'Darvaza Crater', type: 'Nature', description: 'Burning since 1971' },
                            { name: 'Desert Camping', type: 'Accommodation', description: 'Camp near the crater' },
                            { name: 'Karakum Desert', type: 'Nature', description: 'Vast desert landscape' },
                            { name: 'Night Viewing', type: 'Experience', description: 'Best at night when flames glow' },
                            { name: 'Darvaza Village', type: 'Village', description: 'Remote desert settlement' }
                        ],
                        tips: [
                            'Truly otherworldly experience',
                            'Book with tour including transport',
                            'Bring warm clothes for desert nights',
                            'Most spectacular at night'
                        ]
                    }
                }
            },
            uzbekistan: {
                id: 'uzbekistan',
                name: 'Uzbekistan',
                code: 'UZ',
                flag: '🇺🇿',
                capital: 'Tashkent',
                currency: 'Uzbekistani Som (UZS)',
                language: 'Uzbek',
                description: 'Silk Road treasures with stunning blue-tiled mosques and ancient madrasas',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    tashkent: {
                        id: 'tashkent',
                        name: 'Tashkent',
                        country: 'Uzbekistan',
                        region: 'Central Asia',
                        description: 'Modern capital with Soviet metro and gateway to Silk Road',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,600,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 30, mid: 60, luxury: 160 },
                        attractions: [
                            { name: 'Tashkent Metro', type: 'Transport', description: 'Ornate Soviet-era stations' },
                            { name: 'Chorsu Bazaar', type: 'Market', description: 'Huge domed bazaar' },
                            { name: 'Khast Imam Complex', type: 'Religious', description: 'Oldest Quran in the world' },
                            { name: 'Amir Timur Square', type: 'Square', description: 'Central square with statue' },
                            { name: 'TV Tower', type: 'Landmark', description: 'Tallest structure in Central Asia' }
                        ],
                        tips: [
                            'Metro stations have unique Soviet designs',
                            'Visa-free for many nationalities now',
                            'Try plov (national dish)',
                            'Gateway to Samarkand and Bukhara'
                        ]
                    },
                    samarkand: {
                        id: 'samarkand',
                        name: 'Samarkand',
                        country: 'Uzbekistan',
                        region: 'Central Asia',
                        description: 'Timur\'s capital with jaw-dropping blue-tiled architecture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '530,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 25, mid: 55, luxury: 140 },
                        attractions: [
                            { name: 'Registan', type: 'Square', description: 'Most iconic sight in Central Asia' },
                            { name: 'Shah-i-Zinda', type: 'Religious', description: 'Avenue of mausoleums' },
                            { name: 'Gur-e-Amir', type: 'Mausoleum', description: 'Timur\'s tomb' },
                            { name: 'Bibi-Khanym Mosque', type: 'Religious', description: 'Once largest mosque in Islamic world' },
                            { name: 'Siab Bazaar', type: 'Market', description: 'Local market near Bibi-Khanym' }
                        ],
                        tips: [
                            'Registan is breathtaking',
                            'Visit at different times of day for light',
                            'High-speed train from Tashkent',
                            'Try Samarkand non bread'
                        ]
                    },
                    bukhara: {
                        id: 'bukhara',
                        name: 'Bukhara',
                        country: 'Uzbekistan',
                        region: 'Central Asia',
                        description: 'Living museum of 2,000 years of Silk Road history',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '280,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 25, mid: 50, luxury: 130 },
                        attractions: [
                            { name: 'Po-i-Kalyan', type: 'Complex', description: 'Minaret and mosque complex' },
                            { name: 'Ark Fortress', type: 'Historic', description: 'Ancient rulers\' citadel' },
                            { name: 'Lyab-i Hauz', type: 'Square', description: 'Shady pool and plaza' },
                            { name: 'Chor Minor', type: 'Landmark', description: 'Four-minaret gatehouse' },
                            { name: 'Trading Domes', type: 'Market', description: 'Covered bazaars' }
                        ],
                        tips: [
                            'More authentic than Samarkand',
                            'Walk between sights easily',
                            'Evening at Lyab-i Hauz is magical',
                            'Buy silk and ceramics'
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
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800',
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
            },
            fiji: {
                id: 'fiji',
                name: 'Fiji',
                code: 'FJ',
                flag: '🇫🇯',
                capital: 'Suva',
                currency: 'Fijian Dollar (FJD)',
                language: 'English, Fijian, Hindi',
                description: 'Tropical paradise with crystal-clear waters, friendly locals, and island hopping adventures',
                image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
                cities: {
                    suva: {
                        id: 'suva',
                        name: 'Suva',
                        country: 'Fiji',
                        region: 'Australia & Oceania',
                        description: 'Fiji\'s capital city with colonial architecture, markets, and cultural experiences',
                        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
                        population: '93,000',
                        bestTime: 'May to October (dry season)',
                        avgBudget: { budget: 60, mid: 120, luxury: 350 },
                        attractions: [
                            { name: 'Fiji Museum', type: 'Museum', description: 'Learn about Fiji\'s history and culture' },
                            { name: 'Suva Municipal Market', type: 'Market', description: 'Bustling local market with fresh produce' },
                            { name: 'Colo-i-Suva Forest Park', type: 'Nature', description: 'Rainforest trails and natural swimming pools' },
                            { name: 'Thurston Gardens', type: 'Garden', description: 'Botanical gardens with indigenous plants' },
                            { name: 'Sacred Heart Cathedral', type: 'Religious', description: 'Largest cathedral in the South Pacific' }
                        ],
                        tips: [
                            '"Bula" means hello - use it often',
                            'Kava drinking is a cultural experience',
                            'Respect village customs and dress modestly',
                            'Gateway to outer island resorts'
                        ]
                    }
                }
            },
            newZealand: {
                id: 'newZealand',
                name: 'New Zealand',
                code: 'NZ',
                flag: '🇳🇿',
                capital: 'Wellington',
                currency: 'New Zealand Dollar (NZD)',
                language: 'English, MÃƒâ€žÃ‚Âori',
                description: 'Dramatic Middle-earth landscapes with adventure sports and MÃƒâ€žÃ‚Âori culture',
                image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800',
                cities: {
                    queenstown: {
                        id: 'queenstown',
                        name: 'Queenstown',
                        country: 'New Zealand',
                        region: 'Australia & Oceania',
                        description: 'Adventure capital with bungee, skiing, and stunning lake setting',
                        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800',
                        population: '45,000',
                        bestTime: 'December to February (summer), June to August (ski)',
                        avgBudget: { budget: 80, mid: 160, luxury: 450 },
                        attractions: [
                            { name: 'Milford Sound', type: 'Nature', description: 'Dramatic fjord with waterfalls' },
                            { name: 'Bungee Jumping', type: 'Adventure', description: 'Birthplace of commercial bungee' },
                            { name: 'Skyline Gondola', type: 'Viewpoint', description: 'Gondola and luge rides' },
                            { name: 'Lake Wakatipu', type: 'Nature', description: 'Stunning mountain-ringed lake' },
                            { name: 'Remarkables', type: 'Ski Resort', description: 'Popular ski area' }
                        ],
                        tips: [
                            'Book Milford Sound well ahead',
                            'Adventure capital - try everything',
                            'Winter for skiing, summer for hiking',
                            'Fergburger queue is worth it'
                        ]
                    },
                    auckland: {
                        id: 'auckland',
                        name: 'Auckland',
                        country: 'New Zealand',
                        region: 'Australia & Oceania',
                        description: 'City of Sails with volcanic cones, harbors, and Polynesian culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,700,000',
                        bestTime: 'December to March',
                        avgBudget: { budget: 75, mid: 150, luxury: 380 },
                        attractions: [
                            { name: 'Sky Tower', type: 'Landmark', description: 'Iconic tower with sky jump' },
                            { name: 'Waiheke Island', type: 'Island', description: 'Wine and beaches by ferry' },
                            { name: 'Auckland War Memorial Museum', type: 'Museum', description: 'MÃƒâ€žÃ‚Âori culture and NZ history' },
                            { name: 'Mount Eden', type: 'Volcano', description: 'Volcanic cone with views' },
                            { name: 'Viaduct Harbour', type: 'Waterfront', description: 'Restaurants and America\'s Cup history' }
                        ],
                        tips: [
                            'Gateway for most visitors',
                            'Ferry to Waiheke for day trip',
                            'MÃƒâ€žÃ‚Âori cultural performances available',
                            'Drive to Hobbiton (2 hours)'
                        ]
                    },
                    rotorua: {
                        id: 'rotorua',
                        name: 'Rotorua',
                        country: 'New Zealand',
                        region: 'Australia & Oceania',
                        description: 'Geothermal wonderland with MÃƒâ€žÃ‚Âori culture and sulfur hot springs',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '75,000',
                        bestTime: 'Year-round (geothermal always active)',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                            { name: 'Te Puia', type: 'Geothermal', description: 'Geysers and MÃƒâ€žÃ‚Âori arts center' },
                            { name: 'Wai-O-Tapu', type: 'Geothermal', description: 'Colorful thermal pools' },
                            { name: 'Polynesian Spa', type: 'Hot Springs', description: 'Hot pools overlooking lake' },
                            { name: 'Redwood Forest', type: 'Nature', description: 'Treewalk and mountain biking' },
                            { name: 'Tamaki MÃƒâ€žÃ‚Âori Village', type: 'Culture', description: 'Traditional hangi feast' }
                        ],
                        tips: [
                            'Sulfur smell is normal',
                            'Book MÃƒâ€žÃ‚Âori cultural experience',
                            'Don\'t wear silver jewelry - tarnishes',
                            'Mountain biking is world-class'
                        ]
                    },
                    wellington: {
                        id: 'wellington',
                        name: 'Wellington',
                        country: 'New Zealand',
                        region: 'Australia & Oceania',
                        description: 'Coolest little capital with arts, craft beer, and film industry',
                        image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800',
                        population: '445,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 75, mid: 150, luxury: 380 },
                        attractions: [
                            { name: 'Te Papa Museum', type: 'Museum', description: 'World-class national museum' },
                            { name: 'Wellington Cable Car', type: 'Transport', description: 'Iconic ride to Botanic Gardens' },
                            { name: 'Weta Workshop', type: 'Studio', description: 'Lord of the Rings behind-the-scenes' },
                            { name: 'Cuba Street', type: 'Street', description: 'Bohemian cafes and bars' },
                            { name: 'Mount Victoria', type: 'Viewpoint', description: 'Panoramic city views' }
                        ],
                        tips: [
                            'Very windy - bring layers',
                            'Craft beer scene is excellent',
                            'Te Papa is free to enter',
                            'Walk to restaurants - compact city'
                        ]
                    },
                    christchurch: {
                        id: 'christchurch',
                        name: 'Christchurch',
                        country: 'New Zealand',
                        region: 'Australia & Oceania',
                        description: 'Rebuilt garden city and gateway to South Island adventure',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '380,000',
                        bestTime: 'October to April',
                        avgBudget: { budget: 65, mid: 130, luxury: 320 },
                        attractions: [
                            { name: 'Botanic Gardens', type: 'Park', description: 'Historic gardens on Avon River' },
                            { name: 'Transitional Cathedral', type: 'Architecture', description: 'Innovative cardboard cathedral' },
                            { name: 'Punting on the Avon', type: 'Activity', description: 'Traditional boat ride' },
                            { name: 'International Antarctic Centre', type: 'Museum', description: 'Antarctic experience' },
                            { name: 'Street Art', type: 'Art', description: 'Post-earthquake murals throughout city' }
                        ],
                        tips: [
                            'City still rebuilding after earthquakes',
                            'Gateway to Mount Cook and Queenstown',
                            'Hire a car for South Island exploring',
                            'Flat city - great for cycling'
                        ]
                    },
                    franzJosef: {
                        id: 'franzJosef',
                        name: 'Franz Josef',
                        country: 'New Zealand',
                        region: 'Australia & Oceania',
                        description: 'Glacier village with dramatic ice fields and rainforest',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '500',
                        bestTime: 'November to March',
                        avgBudget: { budget: 100, mid: 250, luxury: 600 },
                        attractions: [
                            { name: 'Franz Josef Glacier', type: 'Nature', description: 'Heli-hike onto the ice' },
                            { name: 'Glacier Hot Pools', type: 'Hot Springs', description: 'Rainforest pools' },
                            { name: 'Glacier Valley Walk', type: 'Hiking', description: 'Walk to terminal face viewpoint' },
                            { name: 'Skydiving', type: 'Adventure', description: 'Jump with glacier views' },
                            { name: 'Lake Matheson', type: 'Nature', description: 'Mirror lake reflecting mountains' }
                        ],
                        tips: [
                            'Heli-hike is the only way to walk on ice now',
                            'Weather can cancel glacier activities',
                            'Book accommodations ahead - small town',
                            'Sandflies are intense - bring repellent'
                        ]
                    }
                }
            },
            frenchPolynesia: {
                id: 'frenchPolynesia',
                name: 'French Polynesia',
                code: 'PF',
                flag: '🇵🇫',
                capital: 'Papeete',
                currency: 'CFP Franc (XPF)',
                language: 'French, Tahitian',
                description: 'Paradise islands with overwater bungalows, turquoise lagoons, and Polynesian culture',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    borabora: {
                        id: 'borabora',
                        name: 'Bora Bora',
                        country: 'French Polynesia',
                        region: 'Australia & Oceania',
                        description: 'Ultimate honeymoon destination with iconic overwater bungalows',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '10,000',
                        bestTime: 'May to October (dry season)',
                        avgBudget: { budget: 300, mid: 600, luxury: 2000 },
                        attractions: [
                            { name: 'Mount Otemanu', type: 'Nature', description: 'Iconic volcanic peak' },
                            { name: 'Overwater Bungalows', type: 'Accommodation', description: 'Iconic luxury stays' },
                            { name: 'Lagoon Tours', type: 'Tour', description: 'Snorkeling with sharks and rays' },
                            { name: 'Matira Beach', type: 'Beach', description: 'White sand public beach' },
                            { name: 'Coral Gardens', type: 'Nature', description: 'Snorkeling paradise' }
                        ],
                        tips: [
                            'Book resorts 6+ months ahead',
                            'Extremely expensive destination',
                            'Flight from Tahiti required',
                            'Once-in-a-lifetime experience'
                        ]
                    },
                    tahiti: {
                        id: 'tahiti',
                        name: 'Tahiti',
                        country: 'French Polynesia',
                        region: 'Australia & Oceania',
                        description: 'Main island and gateway with black sand beaches and Polynesian culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '190,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 150, mid: 300, luxury: 800 },
                        attractions: [
                            { name: 'Papeete Market', type: 'Market', description: 'Colorful Tahitian market' },
                            { name: 'Point Venus', type: 'Nature', description: 'Black sand beach and lighthouse' },
                            { name: 'Fautaua Waterfall', type: 'Nature', description: 'Scenic waterfall hike' },
                            { name: 'Museum of Tahiti', type: 'Museum', description: 'Polynesian culture and nature' },
                            { name: 'Roulottes', type: 'Food', description: 'Food trucks at the waterfront' }
                        ],
                        tips: [
                            'Gateway to other islands',
                            'Roulottes for affordable local food',
                            'More affordable than other islands',
                            'Learn some French phrases'
                        ]
                    },
                    moorea: {
                        id: 'moorea',
                        name: 'Moorea',
                        country: 'French Polynesia',
                        region: 'Australia & Oceania',
                        description: 'Tahiti\'s sister island with dramatic peaks and turquoise bays',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '17,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 180, mid: 350, luxury: 1000 },
                        attractions: [
                            { name: 'Belvedere Lookout', type: 'Viewpoint', description: 'Stunning views of both bays' },
                            { name: 'Magic Mountain', type: 'Viewpoint', description: 'Panoramic island views' },
                            { name: 'Stingray & Shark Tours', type: 'Wildlife', description: 'Swim with marine life' },
                            { name: 'Opunohu Bay', type: 'Nature', description: 'Dramatic bay with peaks' },
                            { name: 'Pineapple Plantations', type: 'Agriculture', description: 'Island\'s famous pineapples' }
                        ],
                        tips: [
                            'Ferry from Tahiti (30 mins)',
                            'Rent a car or scooter',
                            'More affordable than Bora Bora',
                            'Equally stunning scenery'
                        ]
                    }
                }
            },
            papuaNewGuinea: {
                id: 'papuaNewGuinea',
                name: 'Papua New Guinea',
                code: 'PG',
                flag: '🇵🇬',
                capital: 'Port Moresby',
                currency: 'Papua New Guinean Kina (PGK)',
                language: 'English, Tok Pisin, Hiri Motu',
                description: 'Untouched tribal cultures, incredible biodiversity, and WWII history',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    portMoresby: {
                        id: 'portMoresby',
                        name: 'Port Moresby',
                        country: 'Papua New Guinea',
                        region: 'Australia & Oceania',
                        description: 'Capital city and gateway with WWII history and cultural sites',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '400,000',
                        bestTime: 'May to October (dry season)',
                        avgBudget: { budget: 80, mid: 180, luxury: 400 },
                        attractions: [
                            { name: 'National Museum', type: 'Museum', description: 'PNG culture and artifacts' },
                            { name: 'Kokoda Trail', type: 'Trek', description: 'Famous WWII memorial trail' },
                            { name: 'Bomana War Cemetery', type: 'Memorial', description: 'WWII memorial site' },
                            { name: 'Parliament House', type: 'Landmark', description: 'Modern building with traditional design' },
                            { name: 'Adventure Park', type: 'Nature', description: 'Crocodile farm and wildlife' }
                        ],
                        tips: [
                            'Check travel advisories',
                            'Use guides and organized tours',
                            'Kokoda Trail requires serious fitness',
                            'Gateway to highlands and islands'
                        ]
                    }
                }
            }
        }
    },
    asia: {
        id: 'asia',
        name: 'Asia',
        emoji: '🏯',
        description: 'Ancient cultures, diverse cuisines, and breathtaking temples',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
        countries: {
            cambodia: {
                id: 'cambodia',
                name: 'Cambodia',
                code: 'KH',
                flag: '🇰🇭',
                capital: 'Phnom Penh',
                currency: 'Cambodian Riel (KHR) / USD',
                language: 'Khmer',
                description: 'Ancient Khmer temples, tragic history, and warm Cambodian smiles',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    phnomPenh: {
                        id: 'phnomPenh',
                        name: 'Phnom Penh',
                        country: 'Cambodia',
                        region: 'Asia',
                        description: 'Rapidly developing capital with royal palace, sobering history, and riverside charm',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,300,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 25, mid: 50, luxury: 150 },
                        attractions: [
                            { name: 'Royal Palace', type: 'Palace', description: 'Stunning royal residence with Silver Pagoda' },
                            { name: 'Tuol Sleng Genocide Museum', type: 'Museum', description: 'S-21 prison memorial - a sobering visit' },
                            { name: 'Killing Fields', type: 'Memorial', description: 'Choeung Ek memorial site outside city' },
                            { name: 'Central Market', type: 'Market', description: 'Art deco dome with local goods' },
                            { name: 'Riverside Promenade', type: 'Waterfront', description: 'Scenic walk along Tonle Sap and Mekong' }
                        ],
                        tips: [
                            'USD is widely accepted',
                            'Tuk-tuks are cheap and convenient',
                            'Dress respectfully at palace and temples',
                            'Try fish amok and lok lak'
                        ]
                    },
                    siemReap: {
                        id: 'siemReap',
                        name: 'Siem Reap',
                        country: 'Cambodia',
                        region: 'Asia',
                        description: 'Gateway to majestic Angkor Wat with vibrant night market scene',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '250,000',
                        bestTime: 'November to March',
                        avgBudget: { budget: 30, mid: 60, luxury: 180 },
                        attractions: [
                            { name: 'Angkor Wat', type: 'Temple', description: 'World\'s largest religious monument' },
                            { name: 'Angkor Thom', type: 'Temple', description: 'Ancient city with Bayon temple faces' },
                            { name: 'Ta Prohm', type: 'Temple', description: 'Temple overgrown by jungle trees' },
                            { name: 'Pub Street', type: 'Entertainment', description: 'Lively bar and restaurant street' },
                            { name: 'Tonle Sap Lake', type: 'Nature', description: 'Floating villages on the lake' }
                        ],
                        tips: [
                            'Get 3-day Angkor pass for best value',
                            'Sunrise at Angkor Wat is iconic but crowded',
                            'Hire a tuk-tuk driver for temple tour',
                            'Bring lots of water - it\'s hot!'
                        ]
                    }
                }
            },
            china: {
                id: 'china',
                name: 'China',
                code: 'CN',
                flag: '🇨🇳',
                capital: 'Beijing',
                currency: 'Chinese Yuan (CNY)',
                language: 'Mandarin',
                description: 'Ancient civilization with the Great Wall, terracotta warriors, and modern megacities',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    beijing: {
                        id: 'beijing',
                        name: 'Beijing',
                        country: 'China',
                        region: 'Asia',
                        description: 'Ancient capital with Forbidden City, Great Wall, and rich imperial history',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '21,500,000',
                        bestTime: 'September to October, April to May',
                        avgBudget: { budget: 50, mid: 100, luxury: 300 },
                        attractions: [
                            { name: 'Forbidden City', type: 'Palace', description: 'Massive imperial palace complex' },
                            { name: 'Great Wall at Mutianyu', type: 'Landmark', description: 'Less crowded restored section' },
                            { name: 'Temple of Heaven', type: 'Temple', description: 'Ming dynasty temple complex' },
                            { name: 'Summer Palace', type: 'Palace', description: 'Imperial garden and lake retreat' },
                            { name: 'Tiananmen Square', type: 'Square', description: 'World\'s largest public square' }
                        ],
                        tips: [
                            'VPN needed for Google, Facebook, etc.',
                            'Book Great Wall tour - avoid Badaling crowds',
                            'Try Peking duck at Quanjude',
                            'Download offline maps before arriving'
                        ]
                    },
                    shanghai: {
                        id: 'shanghai',
                        name: 'Shanghai',
                        country: 'China',
                        region: 'Asia',
                        description: 'Futuristic skyline meets colonial heritage on the Huangpu River',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '27,000,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 55, mid: 110, luxury: 350 },
                        attractions: [
                            { name: 'The Bund', type: 'Waterfront', description: 'Colonial architecture with skyline views' },
                            { name: 'Pudong Skyline', type: 'Landmark', description: 'Futuristic towers over the river' },
                            { name: 'Yu Garden', type: 'Garden', description: 'Classical Chinese garden and bazaar' },
                            { name: 'French Concession', type: 'Neighborhood', description: 'Tree-lined streets with cafes' },
                            { name: 'Shanghai Tower', type: 'Landmark', description: 'World\'s second tallest building' }
                        ],
                        tips: [
                            'Maglev train from airport is fastest',
                            'Walk the Bund at night for views',
                            'Try xiaolongbao (soup dumplings)',
                            'Metro is cheap and efficient'
                        ]
                    },
                    guangzhou: {
                        id: 'guangzhou',
                        name: 'Guangzhou',
                        country: 'China',
                        region: 'Asia',
                        description: 'Cantonese cuisine capital and ancient trading hub',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '18,700,000',
                        bestTime: 'October to December, March to April',
                        avgBudget: { budget: 45, mid: 90, luxury: 280 },
                        attractions: [
                            { name: 'Canton Tower', type: 'Landmark', description: '600m tower with observation deck' },
                            { name: 'Chen Clan Ancestral Hall', type: 'Temple', description: 'Traditional Cantonese architecture' },
                            { name: 'Shamian Island', type: 'Historic', description: 'Colonial European architecture' },
                            { name: 'Yuexiu Park', type: 'Park', description: 'Largest park with Five Rams statue' },
                            { name: 'Qingping Market', type: 'Market', description: 'Famous herbal medicine market' }
                        ],
                        tips: [
                            'Best city for Cantonese dim sum',
                            'Hop on Pearl River night cruise',
                            'Gateway to Hong Kong and Macau',
                            'Try morning yum cha at local restaurants'
                        ]
                    },
                    shenzhen: {
                        id: 'shenzhen',
                        name: 'Shenzhen',
                        country: 'China',
                        region: 'Asia',
                        description: 'Tech hub that transformed from fishing village to megacity in 40 years',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '17,500,000',
                        bestTime: 'October to December',
                        avgBudget: { budget: 50, mid: 100, luxury: 300 },
                        attractions: [
                            { name: 'Window of the World', type: 'Theme Park', description: 'Miniature world landmarks' },
                            { name: 'OCT Loft', type: 'Art District', description: 'Creative arts and design hub' },
                            { name: 'Dafen Oil Painting Village', type: 'Art', description: 'World\'s largest oil painting village' },
                            { name: 'Splendid China', type: 'Theme Park', description: 'Miniature Chinese landmarks' },
                            { name: 'Ping An Finance Centre', type: 'Landmark', description: 'Fourth tallest building in the world' }
                        ],
                        tips: [
                            'Cross to Hong Kong easily from here',
                            'Tech electronics at Huaqiangbei market',
                            'WeChat and Alipay essential for payment',
                            'Young, modern city with great nightlife'
                        ]
                    },
                    wuhan: {
                        id: 'wuhan',
                        name: 'Wuhan',
                        country: 'China',
                        region: 'Asia',
                        description: 'Central China hub where Yangtze and Han rivers meet',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '11,000,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 40, mid: 80, luxury: 220 },
                        attractions: [
                            { name: 'Yellow Crane Tower', type: 'Landmark', description: 'Ancient tower with city views' },
                            { name: 'East Lake', type: 'Nature', description: 'Largest urban lake in China' },
                            { name: 'Hubei Provincial Museum', type: 'Museum', description: 'Ancient bronze bells and artifacts' },
                            { name: 'Jianghan Road', type: 'Street', description: 'Historic pedestrian shopping street' },
                            { name: 'Guiyuan Temple', type: 'Temple', description: 'Famous Buddhist temple' }
                        ],
                        tips: [
                            'Famous for hot dry noodles (re gan mian)',
                            'Three cities in one - cross the rivers',
                            'Cherry blossoms at Wuhan University in March',
                            'Gateway to Three Gorges cruise'
                        ]
                    }
                }
            },
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
            brunei: {
                id: 'brunei',
                name: 'Brunei',
                code: 'BN',
                flag: '🇧🇳',
                capital: 'Bandar Seri Begawan',
                currency: 'Brunei Dollar (BND)',
                language: 'Malay',
                description: 'Oil-rich sultanate with magnificent mosques and pristine rainforests',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    bandarSeriBegawan: {
                        id: 'bandarSeriBegawan',
                        name: 'Bandar Seri Begawan',
                        country: 'Brunei',
                        region: 'Asia',
                        description: 'Quiet capital with stunning mosques, water villages, and royal palace',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '50,000',
                        bestTime: 'February to April',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                            { name: 'Sultan Omar Ali Saifuddien Mosque', type: 'Religious', description: 'Stunning marble and gold mosque on lagoon' },
                            { name: 'Kampong Ayer', type: 'Village', description: 'World\'s largest water village on stilts' },
                            { name: 'Royal Regalia Museum', type: 'Museum', description: 'Sultan\'s coronation regalia and gifts' },
                            { name: 'Jame\'Asr Hassanil Bolkiah Mosque', type: 'Religious', description: 'Grand mosque with 29 golden domes' },
                            { name: 'Ulu Temburong National Park', type: 'Nature', description: 'Pristine rainforest with canopy walk' }
                        ],
                        tips: [
                            'Alcohol is prohibited - bring duty free',
                            'Dress conservatively',
                            'Friday is the holy day - many places closed',
                            'Water taxis are the way to explore'
                        ]
                    }
                }
            },
            india: {
                id: 'india',
                name: 'India',
                code: 'IN',
                flag: '🇮🇳',
                capital: 'New Delhi',
                currency: 'Indian Rupee (INR)',
                language: 'Hindi, English',
                description: 'Ancient civilization with magnificent monuments, diverse cultures, and incredible cuisine',
                image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
                cities: {
                    delhi: {
                        id: 'delhi',
                        name: 'Delhi',
                        country: 'India',
                        region: 'Asia',
                        description: 'Historic capital blending Mughal grandeur with modern India',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '32,000,000',
                        bestTime: 'October to March',
                        avgBudget: { budget: 25, mid: 50, luxury: 180 },
                        attractions: [
                            { name: 'Red Fort', type: 'Fort', description: 'Mughal emperor\'s grand palace' },
                            { name: 'Qutub Minar', type: 'Monument', description: 'Tallest brick minaret in world' },
                            { name: 'India Gate', type: 'Monument', description: 'War memorial on grand avenue' },
                            { name: 'Humayun\'s Tomb', type: 'Tomb', description: 'Precursor to the Taj Mahal' },
                            { name: 'Chandni Chowk', type: 'Market', description: 'Old Delhi\'s bustling bazaar' }
                        ],
                        tips: [
                            'Old Delhi and New Delhi are very different',
                            'Use metro - cheap and air-conditioned',
                            'Try street food but choose busy stalls',
                            'Book train tickets well in advance'
                        ]
                    },
                    agra: {
                        id: 'agra',
                        name: 'Agra',
                        country: 'India',
                        region: 'Asia',
                        description: 'Home of the Taj Mahal and Mughal architectural treasures',
                        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
                        population: '2,100,000',
                        bestTime: 'October to March',
                        avgBudget: { budget: 20, mid: 45, luxury: 150 },
                        attractions: [
                            { name: 'Taj Mahal', type: 'Monument', description: 'UNESCO wonder of the world' },
                            { name: 'Agra Fort', type: 'Fort', description: 'Red sandstone Mughal fortress' },
                            { name: 'Fatehpur Sikri', type: 'Historic', description: 'Abandoned Mughal capital' },
                            { name: 'Mehtab Bagh', type: 'Garden', description: 'Sunset Taj Mahal views' },
                            { name: 'Itimad-ud-Daulah', type: 'Tomb', description: 'Baby Taj - ornate marble tomb' }
                        ],
                        tips: [
                            'Visit Taj at sunrise for best photos',
                            'Taj is closed on Fridays',
                            'Beware of aggressive touts',
                            'Stay overnight rather than day trip'
                        ]
                    },
                    jaipur: {
                        id: 'jaipur',
                        name: 'Jaipur',
                        country: 'India',
                        region: 'Asia',
                        description: 'Pink City with magnificent palaces, forts, and vibrant bazaars',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,100,000',
                        bestTime: 'October to March',
                        avgBudget: { budget: 25, mid: 50, luxury: 200 },
                        attractions: [
                            { name: 'Amber Fort', type: 'Fort', description: 'Hilltop palace with elephant rides' },
                            { name: 'Hawa Mahal', type: 'Palace', description: 'Palace of Winds honeycomb facade' },
                            { name: 'City Palace', type: 'Palace', description: 'Royal residence with museum' },
                            { name: 'Jantar Mantar', type: 'Observatory', description: 'Astronomical observation instruments' },
                            { name: 'Nahargarh Fort', type: 'Fort', description: 'Fort with sunset city views' }
                        ],
                        tips: [
                            'Part of Golden Triangle with Delhi and Agra',
                            'Bargain hard in bazaars',
                            'Best textiles and jewelry shopping',
                            'Hot in summer - visit Oct-Mar'
                        ]
                    },
                    mumbai: {
                        id: 'mumbai',
                        name: 'Mumbai',
                        country: 'India',
                        region: 'Asia',
                        description: 'India\'s financial capital and Bollywood home with colonial and modern vibes',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '21,000,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 30, mid: 60, luxury: 200 },
                        attractions: [
                            { name: 'Gateway of India', type: 'Monument', description: 'Iconic waterfront arch monument' },
                            { name: 'Elephanta Caves', type: 'Historic', description: 'Ancient rock-cut temples on island' },
                            { name: 'Marine Drive', type: 'Waterfront', description: 'Queen\'s Necklace seafront promenade' },
                            { name: 'Dharavi', type: 'Neighborhood', description: 'Vibrant slum (ethical tours available)' },
                            { name: 'CST Station', type: 'Architecture', description: 'UNESCO Victorian Gothic terminus' }
                        ],
                        tips: [
                            'Local trains are packed but efficient',
                            'Try vada pav (Mumbai burger)',
                            'Watch sunset at Marine Drive',
                            'Monsoon (Jun-Sep) - expect flooding'
                        ]
                    },
                    goa: {
                        id: 'goa',
                        name: 'Goa',
                        country: 'India',
                        region: 'Asia',
                        description: 'Beach paradise with Portuguese heritage, parties, and laid-back vibes',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,500,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 25, mid: 55, luxury: 180 },
                        attractions: [
                            { name: 'Beaches', type: 'Beach', description: 'Palolem, Anjuna, Vagator, Baga' },
                            { name: 'Old Goa Churches', type: 'Religious', description: 'UNESCO Portuguese colonial churches' },
                            { name: 'Dudhsagar Falls', type: 'Nature', description: 'Spectacular 4-tiered waterfall' },
                            { name: 'Spice Plantations', type: 'Tour', description: 'Aromatic spice garden tours' },
                            { name: 'Fontainhas', type: 'Neighborhood', description: 'Latin Quarter in Panaji' }
                        ],
                        tips: [
                            'Rent a scooter to explore',
                            'North Goa for parties, South for peace',
                            'Try Goan fish curry and bebinca',
                            'Peak season Dec-Jan is crowded'
                        ]
                    }
                }
            },
            indonesia: {
                id: 'indonesia',
                name: 'Indonesia',
                code: 'ID',
                flag: '🇮🇩',
                capital: 'Jakarta',
                currency: 'Indonesian Rupiah (IDR)',
                language: 'Indonesian',
                description: 'World\'s largest archipelago with temples, rice terraces, and paradise beaches',
                image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
                cities: {
                    bali: {
                        id: 'bali',
                        name: 'Bali',
                        country: 'Indonesia',
                        region: 'Asia',
                        description: 'Island of the Gods with temples, rice paddies, beaches, and spiritual culture',
                        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
                        population: '4,400,000',
                        bestTime: 'April to October (dry season)',
                        avgBudget: { budget: 35, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Ubud Rice Terraces', type: 'Nature', description: 'UNESCO Tegallalang rice paddies' },
                            { name: 'Uluwatu Temple', type: 'Temple', description: 'Clifftop temple with sunset kecak' },
                            { name: 'Tanah Lot', type: 'Temple', description: 'Iconic sea temple on rock' },
                            { name: 'Sacred Monkey Forest', type: 'Nature', description: 'Temple complex with monkeys' },
                            { name: 'Seminyak Beach', type: 'Beach', description: 'Trendy beach with clubs and shops' }
                        ],
                        tips: [
                            'Rent a scooter - best way to explore',
                            'Bargain at markets - start at 30%',
                            'Respect temples - wear sarong',
                            'Digital nomad hub - great wifi'
                        ]
                    },
                    jakarta: {
                        id: 'jakarta',
                        name: 'Jakarta',
                        country: 'Indonesia',
                        region: 'Asia',
                        description: 'Massive capital megacity with colonial history and modern skyline',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '34,000,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 30, mid: 60, luxury: 180 },
                        attractions: [
                            { name: 'National Monument (Monas)', type: 'Monument', description: 'Iconic independence monument' },
                            { name: 'Old Town (Kota Tua)', type: 'Historic', description: 'Dutch colonial quarter' },
                            { name: 'National Museum', type: 'Museum', description: 'Rich cultural collection' },
                            { name: 'SCBD', type: 'District', description: 'Modern business and nightlife hub' },
                            { name: 'Thousand Islands', type: 'Islands', description: 'Island getaway from city' }
                        ],
                        tips: [
                            'Traffic is legendary - use MRT or ojek',
                            'Malls are air-conditioned escapes',
                            'Try nasi goreng and satay',
                            'Most visitors transit to other islands'
                        ]
                    },
                    yogyakarta: {
                        id: 'yogyakarta',
                        name: 'Yogyakarta',
                        country: 'Indonesia',
                        region: 'Asia',
                        description: 'Cultural heart of Java with Borobudur, batik, and royal traditions',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '420,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 20, mid: 40, luxury: 120 },
                        attractions: [
                            { name: 'Borobudur', type: 'Temple', description: 'World\'s largest Buddhist temple' },
                            { name: 'Prambanan', type: 'Temple', description: 'Stunning Hindu temple complex' },
                            { name: 'Sultan\'s Palace (Kraton)', type: 'Palace', description: 'Active royal palace' },
                            { name: 'Malioboro Street', type: 'Street', description: 'Main shopping and food street' },
                            { name: 'Mount Merapi', type: 'Volcano', description: 'Active volcano sunrise hike' }
                        ],
                        tips: [
                            'Borobudur sunrise is magical',
                            'Watch traditional wayang puppet show',
                            'Batik workshops available',
                            'Very affordable destination'
                        ]
                    }
                }
            },
            japan: {
                id: 'japan',
                name: 'Japan',
                code: 'JP',
                flag: '🇯🇵',
                capital: 'Tokyo',
                currency: 'Japanese Yen (JPY)',
                language: 'Japanese',
                description: 'Ancient temples meet neon-lit cities with exquisite cuisine and culture',
                image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
                cities: {
                    tokyo: {
                        id: 'tokyo',
                        name: 'Tokyo',
                        country: 'Japan',
                        region: 'Asia',
                        description: 'Massive metropolis blending ancient tradition with cutting-edge technology',
                        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
                        population: '37,400,000',
                        bestTime: 'March to May (cherry blossom), September to November',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Senso-ji Temple', type: 'Temple', description: 'Tokyo\'s oldest and most famous temple' },
                            { name: 'Shibuya Crossing', type: 'Landmark', description: 'World\'s busiest pedestrian crossing' },
                            { name: 'Meiji Shrine', type: 'Shrine', description: 'Serene forest shrine in Harajuku' },
                            { name: 'TeamLab Borderless', type: 'Art', description: 'Immersive digital art museum' },
                            { name: 'Tsukiji Outer Market', type: 'Market', description: 'Fresh sushi and street food' }
                        ],
                        tips: [
                            'Get JR Pass before arriving',
                            'Cash is still king in many places',
                            'Convenience store food is excellent',
                            'Book popular restaurants in advance'
                        ]
                    },
                    kyoto: {
                        id: 'kyoto',
                        name: 'Kyoto',
                        country: 'Japan',
                        region: 'Asia',
                        description: 'Cultural heart of Japan with thousands of temples, shrines, and geisha districts',
                        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
                        population: '1,460,000',
                        bestTime: 'March to May, October to November',
                        avgBudget: { budget: 70, mid: 130, luxury: 380 },
                        attractions: [
                            { name: 'Fushimi Inari Shrine', type: 'Shrine', description: 'Thousands of vermillion torii gates' },
                            { name: 'Kinkaku-ji', type: 'Temple', description: 'Golden Pavilion temple' },
                            { name: 'Arashiyama Bamboo Grove', type: 'Nature', description: 'Towering bamboo forest' },
                            { name: 'Gion District', type: 'Neighborhood', description: 'Traditional geisha district' },
                            { name: 'Kiyomizu-dera', type: 'Temple', description: 'Hillside temple with views' }
                        ],
                        tips: [
                            'Visit Fushimi Inari at dawn to avoid crowds',
                            'Rent a bike to explore',
                            'Book machiya townhouse stay',
                            'Cherry blossom season is magical but crowded'
                        ]
                    },
                    osaka: {
                        id: 'osaka',
                        name: 'Osaka',
                        country: 'Japan',
                        region: 'Asia',
                        description: 'Japan\'s kitchen with street food paradise, castle, and neon-lit nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,750,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 65, mid: 120, luxury: 350 },
                        attractions: [
                            { name: 'Osaka Castle', type: 'Castle', description: 'Iconic castle with museum' },
                            { name: 'Dotonbori', type: 'Street', description: 'Neon-lit food and entertainment strip' },
                            { name: 'Shinsekai', type: 'Neighborhood', description: 'Retro neighborhood with kushikatsu' },
                            { name: 'Universal Studios Japan', type: 'Theme Park', description: 'Popular theme park' },
                            { name: 'Kuromon Market', type: 'Market', description: 'Osaka\'s kitchen market' }
                        ],
                        tips: [
                            'Try takoyaki, okonomiyaki, and kushikatsu',
                            'Locals more outgoing than Tokyo',
                            'Great base for Kyoto and Nara',
                            'Kansai airport connects to many Asia cities'
                        ]
                    },
                    hiroshima: {
                        id: 'hiroshima',
                        name: 'Hiroshima',
                        country: 'Japan',
                        region: 'Asia',
                        description: 'City of peace rebuilt from WWII, now vibrant with moving memorial',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,200,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 60, mid: 110, luxury: 300 },
                        attractions: [
                            { name: 'Peace Memorial Park', type: 'Memorial', description: 'UNESCO World Heritage site' },
                            { name: 'Atomic Bomb Dome', type: 'Historic', description: 'Preserved A-bomb ruins' },
                            { name: 'Itsukushima Shrine', type: 'Shrine', description: 'Floating torii gate on Miyajima' },
                            { name: 'Hiroshima Castle', type: 'Castle', description: 'Reconstructed castle' },
                            { name: 'Miyajima Island', type: 'Island', description: 'Sacred island day trip' }
                        ],
                        tips: [
                            'Peace Museum is deeply moving',
                            'Day trip to Miyajima Island',
                            'Try Hiroshima-style okonomiyaki',
                            'JR Pass covers ferry to Miyajima'
                        ]
                    },
                    yokohama: {
                        id: 'yokohama',
                        name: 'Yokohama',
                        country: 'Japan',
                        region: 'Asia',
                        description: 'Modern port city with Chinatown, ramen museum, and futuristic skyline',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,700,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 70, mid: 140, luxury: 380 },
                        attractions: [
                            { name: 'Yokohama Chinatown', type: 'Neighborhood', description: 'Largest Chinatown in Japan' },
                            { name: 'Cup Noodles Museum', type: 'Museum', description: 'Interactive instant noodle history' },
                            { name: 'Minato Mirai', type: 'District', description: 'Futuristic waterfront with Landmark Tower' },
                            { name: 'Sankeien Garden', type: 'Garden', description: 'Traditional Japanese garden' },
                            { name: 'Cosmo Clock 21', type: 'Landmark', description: 'Giant Ferris wheel icon' }
                        ],
                        tips: [
                            'Easy day trip from Tokyo (30 mins)',
                            'Make your own Cup Noodles',
                            'Great craft beer scene',
                            'Less crowded than Tokyo'
                        ]
                    },
                    kobe: {
                        id: 'kobe',
                        name: 'Kobe',
                        country: 'Japan',
                        region: 'Asia',
                        description: 'Cosmopolitan port city famous for beef, sake, and mountain views',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,500,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 75, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Kobe Beef', type: 'Food', description: 'World-famous marbled beef' },
                            { name: 'Mount Rokko', type: 'Nature', description: 'Cable car with city views' },
                            { name: 'Arima Onsen', type: 'Hot Springs', description: 'Ancient hot spring town' },
                            { name: 'Kobe Harborland', type: 'Waterfront', description: 'Shopping and dining area' },
                            { name: 'Nada Sake District', type: 'Food & Drink', description: 'Traditional sake breweries' }
                        ],
                        tips: [
                            'Real Kobe beef is expensive',
                            'Combine with Himeji Castle day trip',
                            'Arima Onsen is Japan\'s oldest spa',
                            'Night view from Rokko is stunning'
                        ]
                    }
                }
            },
            laos: {
                id: 'laos',
                name: 'Laos',
                code: 'LA',
                flag: '🇱🇦',
                capital: 'Vientiane',
                currency: 'Lao Kip (LAK)',
                language: 'Lao',
                description: 'Sleepy Southeast Asian gem with ancient temples, river life, and French colonial charm',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    luangPrabang: {
                        id: 'luangPrabang',
                        name: 'Luang Prabang',
                        country: 'Laos',
                        region: 'Asia',
                        description: 'UNESCO town of gilded temples, French cafes, and daily monk alms ceremony',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '55,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 25, mid: 50, luxury: 180 },
                        attractions: [
                            { name: 'Morning Alms Giving', type: 'Culture', description: 'Monks collecting daily offerings' },
                            { name: 'Royal Palace Museum', type: 'Museum', description: 'Former royal residence' },
                            { name: 'Kuang Si Falls', type: 'Nature', description: 'Turquoise tiered waterfall' },
                            { name: 'Mount Phousi', type: 'Viewpoint', description: 'Sunset views over town' },
                            { name: 'Night Market', type: 'Market', description: 'Handicraft market on main street' }
                        ],
                        tips: [
                            'Watch alms giving respectfully, don\'t participate unless Buddhist',
                            'Rent a bike to explore',
                            'French bakeries serve excellent croissants',
                            'Very laid-back pace of life'
                        ]
                    },
                    vientiane: {
                        id: 'vientiane',
                        name: 'Vientiane',
                        country: 'Laos',
                        region: 'Asia',
                        description: 'Chilled-out capital with French colonial architecture and Buddhist temples',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '950,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 20, mid: 40, luxury: 120 },
                        attractions: [
                            { name: 'Pha That Luang', type: 'Temple', description: 'Golden stupa - national symbol' },
                            { name: 'Patuxai', type: 'Monument', description: 'Victory gate with Laos twist' },
                            { name: 'Buddha Park', type: 'Park', description: 'Quirky sculpture park outside city' },
                            { name: 'Mekong Riverside', type: 'Waterfront', description: 'Sunset views to Thailand' },
                            { name: 'COPE Visitor Centre', type: 'Museum', description: 'UXO awareness center' }
                        ],
                        tips: [
                            'Most relaxed capital in Asia',
                            'Mekong sunset is beautiful',
                            'Day trip to Vang Vieng',
                            'Try Beerlao - national pride'
                        ]
                    }
                }
            },
            malaysia: {
                id: 'malaysia',
                name: 'Malaysia',
                code: 'MY',
                flag: '🇲🇾',
                capital: 'Kuala Lumpur',
                currency: 'Malaysian Ringgit (MYR)',
                language: 'Malay, English',
                description: 'Multicultural nation with tropical islands, ancient rainforests, and incredible food',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    kualaLumpur: {
                        id: 'kualaLumpur',
                        name: 'Kuala Lumpur',
                        country: 'Malaysia',
                        region: 'Asia',
                        description: 'Modern capital with iconic towers, diverse food scene, and cultural neighborhoods',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '7,800,000',
                        bestTime: 'December to February',
                        avgBudget: { budget: 35, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Petronas Twin Towers', type: 'Landmark', description: 'Iconic twin skyscrapers with skybridge' },
                            { name: 'Batu Caves', type: 'Temple', description: 'Hindu temple in limestone caves' },
                            { name: 'Jalan Alor', type: 'Food Street', description: 'Famous hawker street for street food' },
                            { name: 'Merdeka Square', type: 'Square', description: 'Independence square with colonial buildings' },
                            { name: 'KL Tower', type: 'Landmark', description: 'Communications tower with observation deck' }
                        ],
                        tips: [
                            'Food is amazing and cheap',
                            'Grab app for taxis',
                            'Dress modestly at mosques and temples',
                            'Air-conditioning is fierce - bring layers'
                        ]
                    },
                    penang: {
                        id: 'penang',
                        name: 'Penang',
                        country: 'Malaysia',
                        region: 'Asia',
                        description: 'Food capital of Asia with UNESCO George Town and diverse heritage',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '750,000',
                        bestTime: 'December to February',
                        avgBudget: { budget: 30, mid: 60, luxury: 160 },
                        attractions: [
                            { name: 'George Town', type: 'Historic', description: 'UNESCO World Heritage streets and murals' },
                            { name: 'Street Art', type: 'Art', description: 'Famous interactive street murals' },
                            { name: 'Kek Lok Si Temple', type: 'Temple', description: 'Largest Buddhist temple in Malaysia' },
                            { name: 'Penang Hill', type: 'Nature', description: 'Hill station with funicular railway' },
                            { name: 'Gurney Drive', type: 'Food Street', description: 'Hawker food by the sea' }
                        ],
                        tips: [
                            'Best food in Malaysia - many say Asia',
                            'Walk George Town for street art',
                            'Try char kway teow and laksa',
                            'Chinese-Malay-Indian cultural fusion'
                        ]
                    },
                    langkawi: {
                        id: 'langkawi',
                        name: 'Langkawi',
                        country: 'Malaysia',
                        region: 'Asia',
                        description: 'Duty-free island paradise with beaches, rainforest, and cable car',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '100,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 40, mid: 80, luxury: 220 },
                        attractions: [
                            { name: 'Langkawi Sky Bridge', type: 'Bridge', description: 'Curved pedestrian bridge above rainforest' },
                            { name: 'Pantai Cenang', type: 'Beach', description: 'Main beach strip with restaurants' },
                            { name: 'Mangrove Tour', type: 'Nature', description: 'Boat tour through mangrove forest' },
                            { name: 'Cable Car', type: 'Attraction', description: 'Steep cable car to Sky Bridge' },
                            { name: 'Underwater World', type: 'Aquarium', description: 'Large aquarium attraction' }
                        ],
                        tips: [
                            'Duty-free island - cheap alcohol',
                            'Rent a car or scooter',
                            'Beach quality varies by season',
                            'Quieter than Thai islands'
                        ]
                    },
                    genting: {
                        id: 'genting',
                        name: 'Genting Highlands',
                        country: 'Malaysia',
                        region: 'Asia',
                        description: 'Mountain resort with casino, theme parks, and cool climate',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '10,000',
                        bestTime: 'Year-round (cool weather)',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Resorts World Genting', type: 'Resort', description: 'Mega entertainment complex' },
                            { name: 'Skytropolis Indoor Theme Park', type: 'Theme Park', description: 'Indoor rides and attractions' },
                            { name: 'Awana Skyway', type: 'Cable Car', description: 'Scenic cable car ride' },
                            { name: 'Chin Swee Caves Temple', type: 'Religious', description: 'Temple with giant Buddha' },
                            { name: 'Genting Casino', type: 'Casino', description: 'Malaysia\'s only legal casino' }
                        ],
                        tips: [
                            'Bring jacket - much cooler than KL',
                            'Casino dress code enforced',
                            '1 hour from Kuala Lumpur',
                            'Weekends very crowded'
                        ]
                    },
                    malacca: {
                        id: 'malacca',
                        name: 'Malacca',
                        country: 'Malaysia',
                        region: 'Asia',
                        description: 'UNESCO historic city with colonial heritage and Peranakan culture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '500,000',
                        bestTime: 'Year-round',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Jonker Street', type: 'Street', description: 'Night market and antiques' },
                            { name: 'A Famosa Fort', type: 'Historic', description: 'Portuguese fortress ruins' },
                            { name: 'Christ Church', type: 'Religious', description: 'Red Dutch colonial church' },
                            { name: 'Peranakan Museum', type: 'Museum', description: 'Baba Nyonya heritage' },
                            { name: 'Melaka River Cruise', type: 'Activity', description: 'Night cruise on river' }
                        ],
                        tips: [
                            'Friday-Sunday night market at Jonker',
                            'Try Peranakan cuisine',
                            '2 hours from Kuala Lumpur',
                            'Very hot - explore early morning'
                        ]
                    },
                    johorBahru: {
                        id: 'johorBahru',
                        name: 'Johor Bahru',
                        country: 'Malaysia',
                        region: 'Asia',
                        description: 'Gateway city to Singapore with theme parks and shopping',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '500,000',
                        bestTime: 'Year-round',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Legoland Malaysia', type: 'Theme Park', description: 'Asia\'s first Legoland' },
                            { name: 'Angry Birds Activity Park', type: 'Theme Park', description: 'Indoor adventure park' },
                            { name: 'Sultan Abu Bakar Mosque', type: 'Religious', description: 'Beautiful Victorian-Moorish mosque' },
                            { name: 'KSL City Mall', type: 'Shopping', description: 'Large shopping complex' },
                            { name: 'Desaru Coast', type: 'Beach', description: 'Beach resort area nearby' }
                        ],
                        tips: [
                            'Much cheaper than Singapore',
                            'Causeway crossing can be slow',
                            'Popular with Singapore day-trippers',
                            'Many escape rooms and entertainment'
                        ]
                    },
                    kuching: {
                        id: 'kuching',
                        name: 'Kuching',
                        country: 'Malaysia',
                        region: 'Asia',
                        description: 'Charming Sarawak capital with orangutans, longhouses, and rainforest',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '600,000',
                        bestTime: 'April to September',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Semenggoh Wildlife Centre', type: 'Wildlife', description: 'Semi-wild orangutan sanctuary' },
                            { name: 'Bako National Park', type: 'Nature', description: 'Proboscis monkeys and wildlife' },
                            { name: 'Kuching Waterfront', type: 'Promenade', description: 'Scenic riverfront walk' },
                            { name: 'Sarawak Cultural Village', type: 'Culture', description: 'Living museum of ethnic groups' },
                            { name: 'Cat Museum', type: 'Museum', description: 'Quirky cat-themed museum' }
                        ],
                        tips: [
                            'Kuching means \"cat\" - cat statues everywhere',
                            'Try Sarawak laksa',
                            'Gateway to Borneo rainforest',
                            'Longhouse homestays available'
                        ]
                    }
                }
            },
            maldives: {
                id: 'maldives',
                name: 'Maldives',
                code: 'MV',
                flag: '🇲🇻',
                capital: 'MalÃƒÆ’Ã‚Â©',
                currency: 'Maldivian Rufiyaa (MVR)',
                language: 'Dhivehi',
                description: 'Paradise archipelago with overwater villas, white sand, and incredible diving',
                image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
                cities: {
                    male: {
                        id: 'male',
                        name: 'MalÃƒÆ’Ã‚Â©',
                        country: 'Maldives',
                        region: 'Asia',
                        description: 'Tiny densely packed capital - gateway to island resorts',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '250,000',
                        bestTime: 'November to April (dry season)',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Grand Friday Mosque', type: 'Religious', description: 'Golden-domed modern mosque' },
                            { name: 'Fish Market', type: 'Market', description: 'Fresh catch of the day' },
                            { name: 'Sultan Park', type: 'Park', description: 'Green space in crowded city' },
                            { name: 'National Museum', type: 'Museum', description: 'Maldivian history and artifacts' },
                            { name: 'Artificial Beach', type: 'Beach', description: 'City beach on the east side' }
                        ],
                        tips: [
                            'Most visitors transit to resorts',
                            'Alcohol prohibited except resorts',
                            'Guesthouses on local islands are budget option',
                            'Dress modestly on local islands'
                        ]
                    },
                    resortIslands: {
                        id: 'resortIslands',
                        name: 'Resort Islands',
                        country: 'Maldives',
                        region: 'Asia',
                        description: 'Luxury overwater villas on private island resorts',
                        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
                        population: '1,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 200, mid: 500, luxury: 2000 },
                        attractions: [
                            { name: 'Overwater Villas', type: 'Accommodation', description: 'Iconic Maldives experience' },
                            { name: 'Snorkeling', type: 'Activity', description: 'House reefs with tropical fish' },
                            { name: 'Diving', type: 'Activity', description: 'Manta rays, whale sharks, coral' },
                            { name: 'Spa Treatments', type: 'Spa', description: 'World-class spa experiences' },
                            { name: 'Sunset Cruises', type: 'Activity', description: 'Dolphin watching at sunset' }
                        ],
                        tips: [
                            'One island one resort concept',
                            'Book all-inclusive for best value',
                            'Seaplane transfers are pricey',
                            'Honeymoon destination - book far ahead'
                        ]
                    }
                }
            },
            mongolia: {
                id: 'mongolia',
                name: 'Mongolia',
                code: 'MN',
                flag: '🇲🇳',
                capital: 'Ulaanbaatar',
                currency: 'Mongolian TÃƒÆ’Ã‚Â¶grÃƒÆ’Ã‚Â¶g (MNT)',
                language: 'Mongolian',
                description: 'Vast steppes, nomadic culture, Genghis Khan legacy, and Gobi Desert',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    ulaanbaatar: {
                        id: 'ulaanbaatar',
                        name: 'Ulaanbaatar',
                        country: 'Mongolia',
                        region: 'Asia',
                        description: 'Modern capital gateway to endless steppes and nomadic adventures',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,500,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                            { name: 'Gandantegchinlen Monastery', type: 'Religious', description: 'Largest Buddhist monastery in Mongolia' },
                            { name: 'Genghis Khan Statue Complex', type: 'Landmark', description: 'Massive equestrian statue' },
                            { name: 'National Museum', type: 'Museum', description: 'Mongolian history and culture' },
                            { name: 'Sukhbaatar Square', type: 'Square', description: 'Main central square' },
                            { name: 'Bogd Khan Palace', type: 'Palace', description: 'Last Mongolian king\'s winter palace' }
                        ],
                        tips: [
                            'Base for ger camp and steppe tours',
                            'Winters are brutally cold (-40Ãƒâ€šÃ‚Â°C)',
                            'Book tours through local agencies',
                            'Try buuz (dumplings) and airag (fermented mare\'s milk)'
                        ]
                    },
                    gobiDesert: {
                        id: 'gobiDesert',
                        name: 'Gobi Desert',
                        country: 'Mongolia',
                        region: 'Asia',
                        description: 'Legendary desert with dinosaur fossils, dunes, and camel herders',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '0',
                        bestTime: 'May to October',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                            { name: 'Khongoryn Els', type: 'Nature', description: 'Singing dunes up to 300m high' },
                            { name: 'Flaming Cliffs (Bayanzag)', type: 'Nature', description: 'Dinosaur fossil site' },
                            { name: 'Yolyn Am', type: 'Nature', description: 'Ice canyon in the desert' },
                            { name: 'Camel Riding', type: 'Activity', description: 'Bactrian camel experiences' },
                            { name: 'Ger Camps', type: 'Accommodation', description: 'Traditional nomad tent stays' }
                        ],
                        tips: [
                            'Multi-day tours essential',
                            'Extreme temperature swings',
                            'Bring layers and sun protection',
                            'True wilderness - basic facilities'
                        ]
                    }
                }
            },
            myanmar: {
                id: 'myanmar',
                name: 'Myanmar',
                code: 'MM',
                flag: '🇲🇲',
                capital: 'Naypyidaw',
                currency: 'Myanmar Kyat (MMK)',
                language: 'Burmese',
                description: 'Golden pagodas, ancient cities, and traditional Buddhist culture',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    bagan: {
                        id: 'bagan',
                        name: 'Bagan',
                        country: 'Myanmar',
                        region: 'Asia',
                        description: 'Ancient city with over 2,000 Buddhist temples and pagodas',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '50,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 30, mid: 60, luxury: 180 },
                        attractions: [
                            { name: 'Shwesandaw Pagoda', type: 'Religious', description: 'Popular sunset viewpoint' },
                            { name: 'Ananda Temple', type: 'Religious', description: 'Best-preserved temple' },
                            { name: 'Dhammayangyi Temple', type: 'Religious', description: 'Largest temple in Bagan' },
                            { name: 'Hot Air Balloons', type: 'Activity', description: 'Sunrise balloon flights over temples' },
                            { name: 'Irrawaddy River', type: 'River', description: 'Sunset boat cruises' }
                        ],
                        tips: [
                            'E-bike is best way to explore',
                            'Sunrise and sunset are magical',
                            'Book balloon rides months ahead',
                            'Respect temples - remove shoes'
                        ]
                    },
                    yangon: {
                        id: 'yangon',
                        name: 'Yangon',
                        country: 'Myanmar',
                        region: 'Asia',
                        description: 'Former capital with golden Shwedagon Pagoda and colonial architecture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '5,200,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 25, mid: 55, luxury: 150 },
                        attractions: [
                            { name: 'Shwedagon Pagoda', type: 'Religious', description: 'Glittering golden pagoda - Myanmar\'s most sacred' },
                            { name: 'Bogyoke Market', type: 'Market', description: 'Colonial-era market with crafts' },
                            { name: 'Sule Pagoda', type: 'Religious', description: 'Central downtown pagoda' },
                            { name: 'Colonial District', type: 'Historic', description: 'Faded British colonial buildings' },
                            { name: 'Kandawgyi Lake', type: 'Nature', description: 'City lake with Karaweik floating restaurant' }
                        ],
                        tips: [
                            'Shwedagon at sunset is unmissable',
                            'Dress modestly at pagodas',
                            'Tea houses are social hubs',
                            'Try mohinga (fish noodle soup) for breakfast'
                        ]
                    }
                }
            },
            nepal: {
                id: 'nepal',
                name: 'Nepal',
                code: 'NP',
                flag: '🇳🇵',
                capital: 'Kathmandu',
                currency: 'Nepalese Rupee (NPR)',
                language: 'Nepali',
                description: 'Himalayan kingdom with Everest, ancient temples, and trekking paradise',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    kathmandu: {
                        id: 'kathmandu',
                        name: 'Kathmandu',
                        country: 'Nepal',
                        region: 'Asia',
                        description: 'Ancient capital with stupas, temples, and Himalayan gateway experiences',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,400,000',
                        bestTime: 'October to November, March to April',
                        avgBudget: { budget: 25, mid: 50, luxury: 150 },
                        attractions: [
                            { name: 'Boudhanath Stupa', type: 'Religious', description: 'Massive Buddhist stupa with prayer wheels' },
                            { name: 'Swayambhunath', type: 'Religious', description: 'Monkey Temple with city views' },
                            { name: 'Durbar Square', type: 'Historic', description: 'Royal palace and temples (earthquake damaged)' },
                            { name: 'Pashupatinath', type: 'Religious', description: 'Sacred Hindu cremation site' },
                            { name: 'Thamel', type: 'Neighborhood', description: 'Tourist hub for gear and restaurants' }
                        ],
                        tips: [
                            'Altitude 1,400m - acclimatize if trekking',
                            'Traffic and pollution challenging',
                            'Book treks through agencies',
                            'Try dal bhat - it powers you up'
                        ]
                    },
                    pokhara: {
                        id: 'pokhara',
                        name: 'Pokhara',
                        country: 'Nepal',
                        region: 'Asia',
                        description: 'Lakeside town with Annapurna views and adventure activities',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '430,000',
                        bestTime: 'October to November, March to April',
                        avgBudget: { budget: 20, mid: 45, luxury: 130 },
                        attractions: [
                            { name: 'Phewa Lake', type: 'Nature', description: 'Boating with Annapurna reflections' },
                            { name: 'Sarangkot', type: 'Viewpoint', description: 'Sunrise views of Himalayan range' },
                            { name: 'World Peace Pagoda', type: 'Religious', description: 'Buddhist stupa with panoramic views' },
                            { name: 'Davis Falls', type: 'Waterfall', description: 'Underground waterfall' },
                            { name: 'International Mountain Museum', type: 'Museum', description: 'Climbing and Himalayan history' }
                        ],
                        tips: [
                            'Base for Annapurna treks',
                            'Paragliding is popular and cheap',
                            'More relaxed than Kathmandu',
                            'Lakeside has best restaurants and views'
                        ]
                    },
                    everestRegion: {
                        id: 'everestRegion',
                        name: 'Everest Region',
                        country: 'Nepal',
                        region: 'Asia',
                        description: 'World\'s highest peak with legendary Everest Base Camp trek',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '10,000',
                        bestTime: 'October to November, March to May',
                        avgBudget: { budget: 60, mid: 100, luxury: 250 },
                        attractions: [
                            { name: 'Everest Base Camp', type: 'Trekking', description: 'Ultimate high-altitude trek' },
                            { name: 'Namche Bazaar', type: 'Town', description: 'Sherpa capital and acclimatization stop' },
                            { name: 'Tengboche Monastery', type: 'Religious', description: 'Monastery with Everest views' },
                            { name: 'Kala Patthar', type: 'Viewpoint', description: 'Best Everest viewpoint' },
                            { name: 'Lukla Airport', type: 'Airport', description: 'World\'s most dangerous airport' }
                        ],
                        tips: [
                            'Acclimatization crucial - don\'t rush',
                            'Hire guide and porter for safety',
                            'TIMS and park permits required'
                        ]
                    }
                }
            },
            pakistan: {
                id: 'pakistan',
                name: 'Pakistan',
                code: 'PK',
                flag: '🇵🇰',
                capital: 'Islamabad',
                currency: 'Pakistani Rupee (PKR)',
                language: 'Urdu, English',
                description: 'Himalayan peaks, ancient civilizations, Sufi shrines, and incredible hospitality',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    lahore: {
                        id: 'lahore',
                        name: 'Lahore',
                        country: 'Pakistan',
                        region: 'Asia',
                        description: 'Cultural capital with Mughal heritage, food paradise, and Sufi music',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '13,000,000',
                        bestTime: 'October to March',
                        avgBudget: { budget: 25, mid: 50, luxury: 130 },
                        attractions: [
                            { name: 'Badshahi Mosque', type: 'Religious', description: 'Iconic Mughal mosque' },
                            { name: 'Lahore Fort', type: 'Historic', description: 'UNESCO Mughal citadel' },
                            { name: 'Shalimar Gardens', type: 'Garden', description: 'UNESCO Mughal gardens' },
                            { name: 'Food Street', type: 'Food', description: 'Famous Pakistani cuisine' },
                            { name: 'Wagah Border', type: 'Event', description: 'Daily flag ceremony with India' }
                        ],
                        tips: [
                            'Food scene is incredible - try everything',
                            'Wagah border ceremony at sunset',
                            'Women dress conservatively',
                            'People are extremely hospitable'
                        ]
                    },
                    hunza: {
                        id: 'hunza',
                        name: 'Hunza Valley',
                        country: 'Pakistan',
                        region: 'Asia',
                        description: 'Stunning Himalayan valley with Karakoram peaks and ancient forts',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '90,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Karimabad Views', type: 'Viewpoint', description: 'Views of Rakaposhi and Ultar' },
                            { name: 'Baltit Fort', type: 'Historic', description: '700-year-old restored fort' },
                            { name: 'Attabad Lake', type: 'Nature', description: 'Turquoise landslide lake' },
                            { name: 'Eagles Nest', type: 'Viewpoint', description: 'Panoramic valley viewpoint' },
                            { name: 'Khunjerab Pass', type: 'Border', description: 'China border at 4,693m' }
                        ],
                        tips: [
                            'Karakoram Highway is an adventure',
                            'Spring cherry blossoms spectacular',
                            'Very safe region for tourists',
                            'Permit needed for Khunjerab Pass'
                        ]
                    }
                }
            },
            philippines: {
                id: 'philippines',
                name: 'Philippines',
                code: 'PH',
                flag: '🇵🇭',
                capital: 'Manila',
                currency: 'Philippine Peso (PHP)',
                language: 'Filipino, English',
                description: '7,000+ islands with white beaches, rice terraces, and warm Filipino hospitality',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    manila: {
                        id: 'manila',
                        name: 'Manila',
                        country: 'Philippines',
                        region: 'Asia',
                        description: 'Chaotic capital with Spanish colonial history and vibrant nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '14,000,000',
                        bestTime: 'December to May (dry season)',
                        avgBudget: { budget: 30, mid: 60, luxury: 180 },
                        attractions: [
                            { name: 'Intramuros', type: 'Historic', description: 'Spanish walled city' },
                            { name: 'San Agustin Church', type: 'Religious', description: 'UNESCO baroque church' },
                            { name: 'Rizal Park', type: 'Park', description: 'National hero\'s memorial' },
                            { name: 'Binondo', type: 'Neighborhood', description: 'World\'s oldest Chinatown' },
                            { name: 'National Museum', type: 'Museum', description: 'Free museums complex' }
                        ],
                        tips: [
                            'Traffic is brutal - allow extra time',
                            'Grab app for taxis',
                            'Most Filipinos speak excellent English',
                            'Try halo-halo and adobo'
                        ]
                    },
                    palawan: {
                        id: 'palawan',
                        name: 'Palawan',
                        country: 'Philippines',
                        region: 'Asia',
                        description: 'Island paradise with El Nido lagoons, underground river, and pristine beaches',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '900,000',
                        bestTime: 'December to May',
                        avgBudget: { budget: 40, mid: 80, luxury: 250 },
                        attractions: [
                            { name: 'El Nido', type: 'Beach', description: 'Island hopping paradise with lagoons' },
                            { name: 'Puerto Princesa Underground River', type: 'Nature', description: 'UNESCO cave river cruise' },
                            { name: 'Coron', type: 'Diving', description: 'WWII shipwreck diving' },
                            { name: 'Nacpan Beach', type: 'Beach', description: 'Twin beaches near El Nido' },
                            { name: 'Big Lagoon', type: 'Nature', description: 'Iconic turquoise lagoon' }
                        ],
                        tips: [
                            'Book island hopping tours',
                            'Fly to Puerto Princesa or El Nido',
                            'Peak season December-January busy',
                            'Voted best island in the world'
                        ]
                    },
                    bohol: {
                        id: 'bohol',
                        name: 'Bohol',
                        country: 'Philippines',
                        region: 'Asia',
                        description: 'Chocolate Hills, tiny tarsiers, and diving paradise',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,400,000',
                        bestTime: 'December to May',
                        avgBudget: { budget: 35, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Chocolate Hills', type: 'Nature', description: '1,200+ conical hills' },
                            { name: 'Tarsier Sanctuary', type: 'Wildlife', description: 'See world\'s smallest primates' },
                            { name: 'Panglao Island', type: 'Beach', description: 'White sand beaches and diving' },
                            { name: 'Loboc River Cruise', type: 'Cruise', description: 'Floating restaurant cruise' },
                            { name: 'Baclayon Church', type: 'Religious', description: 'Oldest stone church in Philippines' }
                        ],
                        tips: [
                            'Tarsiers are nocturnal - be quiet',
                            'Countryside tour for Chocolate Hills',
                            'Stay on Panglao for beaches',
                            'Ferry from Cebu'
                        ]
                    },
                    cebu: {
                        id: 'cebu',
                        name: 'Cebu',
                        country: 'Philippines',
                        region: 'Asia',
                        description: 'Queen City of the South with history, beaches, and diving',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,000,000',
                        bestTime: 'December to May',
                        avgBudget: { budget: 35, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Magellan\'s Cross', type: 'Historic', description: 'Site of first Christian conversion' },
                            { name: 'Oslob Whale Sharks', type: 'Wildlife', description: 'Swim with whale sharks' },
                            { name: 'Kawasan Falls', type: 'Nature', description: 'Turquoise multi-tier waterfall' },
                            { name: 'Moalboal', type: 'Diving', description: 'Sardine run and coral diving' },
                            { name: 'Basilica del Santo NiÃƒÆ’Ã‚Â±o', type: 'Religious', description: 'Oldest church in Philippines' }
                        ],
                        tips: [
                            'Whale shark watching is controversial',
                            'Lechon (roast pig) is famous here',
                            'Gateway to Bohol',
                            'International airport hub'
                        ]
                    },
                    boracay: {
                        id: 'boracay',
                        name: 'Boracay',
                        country: 'Philippines',
                        region: 'Asia',
                        description: 'Famous party island with pristine White Beach and water sports',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '40,000',
                        bestTime: 'November to May',
                        avgBudget: { budget: 45, mid: 90, luxury: 280 },
                        attractions: [
                            { name: 'White Beach', type: 'Beach', description: '4km of powder white sand' },
                            { name: 'D\'Mall', type: 'Shopping', description: 'Main shopping and dining area' },
                            { name: 'Puka Shell Beach', type: 'Beach', description: 'Quieter north beach' },
                            { name: 'Ariel\'s Point', type: 'Activity', description: 'Cliff diving and party' },
                            { name: 'Island Hopping', type: 'Tour', description: 'Visit surrounding islands' }
                        ],
                        tips: [
                            'Closed 2018 for cleanup - now better regulated',
                            'Fly to Caticlan (closest) or Kalibo',
                            'Party scene on Station 2',
                            'Sunset sailing is popular'
                        ]
                    },
                    angelesCity: {
                        id: 'angelesCity',
                        name: 'Angeles City',
                        country: 'Philippines',
                        region: 'Asia',
                        description: 'Former US Air Force base town with history and entertainment',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '450,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Nayong Pilipino', type: 'Culture', description: 'Cultural theme park' },
                            { name: 'Mount Pinatubo', type: 'Nature', description: 'Trek to famous volcano crater' },
                            { name: 'Fields Avenue', type: 'Entertainment', description: 'Main entertainment strip' },
                            { name: 'Clark Museum', type: 'Museum', description: 'Air Force and local history' },
                            { name: 'Zoocobia', type: 'Zoo', description: 'Adventure theme park' }
                        ],
                        tips: [
                            'Pinatubo trek is highlight',
                            'Clark International Airport nearby',
                            'Golf courses available',
                            'Known for entertainment district'
                        ]
                    }
                }
            },
            russia: {
                id: 'russia',
                name: 'Russia',
                code: 'RU',
                flag: 'ÃƒÂ°Ã…Â¸Ã¢â‚¬Â¡Ã‚Â·ÃƒÂ°Ã…Â¸Ã¢â‚¬Â¡Ã‚Âº',
                capital: 'Moscow',
                currency: 'Russian Ruble (RUB)',
                language: 'Russian',
                description: 'Vast nation spanning Europe to Asia with imperial palaces and Orthodox cathedrals',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    moscow: {
                        id: 'moscow',
                        name: 'Moscow',
                        country: 'Russia',
                        region: 'Europe',
                        description: 'Capital of the Russian empire with Red Square, Kremlin, and opulent metro',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '12,500,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 50, mid: 100, luxury: 300 },
                        attractions: [
                            { name: 'Red Square', type: 'Square', description: 'Iconic square with St. Basil\'s Cathedral' },
                            { name: 'Kremlin', type: 'Fortress', description: 'Historic fortress and government seat' },
                            { name: 'Moscow Metro', type: 'Transport', description: 'Underground palace with art stations' },
                            { name: 'Bolshoi Theatre', type: 'Theatre', description: 'World-famous ballet and opera' },
                            { name: 'Tretyakov Gallery', type: 'Museum', description: 'Russian art collection' }
                        ],
                        tips: [
                            'Metro is a destination itself',
                            'Visa requirements vary - check current rules',
                            'Learn Cyrillic basics',
                            'Winter is magical but freezing'
                        ]
                    },
                    stPetersburg: {
                        id: 'stPetersburg',
                        name: 'St. Petersburg',
                        country: 'Russia',
                        region: 'Europe',
                        description: 'Venice of the North with Hermitage, palaces, and white nights in summer',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '5,400,000',
                        bestTime: 'May to July (White Nights)',
                        avgBudget: { budget: 45, mid: 90, luxury: 280 },
                        attractions: [
                            { name: 'Hermitage Museum', type: 'Museum', description: 'One of world\'s largest art museums' },
                            { name: 'Church of the Savior on Spilled Blood', type: 'Religious', description: 'Colorful onion domes' },
                            { name: 'Peterhof Palace', type: 'Palace', description: 'Russian Versailles with fountains' },
                            { name: 'Catherine Palace', type: 'Palace', description: 'Amber Room and baroque beauty' },
                            { name: 'Nevsky Prospekt', type: 'Street', description: 'Main avenue with cafes and shops' }
                        ],
                        tips: [
                            'White Nights in June - sun never sets',
                            'Hermitage takes days to see',
                            'Book Palace visits in advance',
                            'More European feel than Moscow'
                        ]
                    }
                }
            },
            singapore: {
                id: 'singapore',
                name: 'Singapore',
                code: 'SG',
                flag: '🇸🇬',
                capital: 'Singapore',
                currency: 'Singapore Dollar (SGD)',
                language: 'English, Mandarin, Malay, Tamil',
                description: 'Futuristic city-state with hawker food, gardens, and multicultural heritage',
                image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
                cities: {
                    singapore: {
                        id: 'singapore',
                        name: 'Singapore',
                        country: 'Singapore',
                        region: 'Asia',
                        description: 'Ultra-modern city with iconic Marina Bay, hawker centers, and Garden City greenery',
                        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
                        population: '5,900,000',
                        bestTime: 'February to April (driest)',
                        avgBudget: { budget: 80, mid: 160, luxury: 450 },
                        attractions: [
                            { name: 'Marina Bay Sands', type: 'Landmark', description: 'Iconic hotel with infinity pool' },
                            { name: 'Gardens by the Bay', type: 'Garden', description: 'Futuristic Supertree Grove' },
                            { name: 'Hawker Centers', type: 'Food', description: 'World\'s best street food' },
                            { name: 'Sentosa Island', type: 'Island', description: 'Beaches and Universal Studios' },
                            { name: 'Chinatown', type: 'Neighborhood', description: 'Heritage district with temples' }
                        ],
                        tips: [
                            'Hawker food is UNESCO-listed',
                            'Very strict laws - no gum, littering fines',
                            'MRT is excellent and cheap',
                            'Great hub for SE Asia travel'
                        ]
                    },
                    changiAirport: {
                        id: 'changiAirport',
                        name: 'Changi Jewel',
                        country: 'Singapore',
                        region: 'Asia',
                        description: 'World\'s best airport with indoor waterfall, forest, and entertainment',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '0',
                        bestTime: 'Year-round',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Rain Vortex', type: 'Landmark', description: 'World\'s tallest indoor waterfall' },
                            { name: 'Canopy Park', type: 'Park', description: 'Rooftop garden and mazes' },
                            { name: 'Shiseido Forest Valley', type: 'Garden', description: 'Indoor forest' },
                            { name: 'Butterfly Garden', type: 'Nature', description: 'Terminal 3 live butterflies' },
                            { name: 'Free Singapore Tour', type: 'Tour', description: 'Airport-run city tours for layovers' }
                        ],
                        tips: [
                            'World\'s best airport',
                            'Free city tours for 5+ hour layover',
                            'Transit hotels for long layovers',
                            'Jewel connected to Terminal 1'
                        ]
                    }
                }
            },
            southKorea: {
                id: 'southKorea',
                name: 'South Korea',
                code: 'KR',
                flag: '🇰🇷',
                capital: 'Seoul',
                currency: 'South Korean Won (KRW)',
                language: 'Korean',
                description: 'K-pop, ancient temples, cutting-edge tech, and incredible food culture',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    seoul: {
                        id: 'seoul',
                        name: 'Seoul',
                        country: 'South Korea',
                        region: 'Asia',
                        description: 'Dynamic capital blending ancient palaces with K-pop and neon nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '9,700,000',
                        bestTime: 'April to May (cherry blossoms), September to November (fall)',
                        avgBudget: { budget: 60, mid: 120, luxury: 320 },
                        attractions: [
                            { name: 'Gyeongbokgung Palace', type: 'Palace', description: 'Grand Joseon dynasty palace' },
                            { name: 'Bukchon Hanok Village', type: 'Historic', description: 'Traditional Korean houses' },
                            { name: 'Myeongdong', type: 'Shopping', description: 'K-beauty and shopping district' },
                            { name: 'N Seoul Tower', type: 'Viewpoint', description: 'Iconic tower with love locks' },
                            { name: 'Hongdae', type: 'Neighborhood', description: 'Youth culture and nightlife' }
                        ],
                        tips: [
                            'T-money card for transport',
                            'Korean BBQ is a must',
                            'Rent hanbok for palace entry discounts',
                            'Subway is excellent'
                        ]
                    },
                    busan: {
                        id: 'busan',
                        name: 'Busan',
                        country: 'South Korea',
                        region: 'Asia',
                        description: 'Coastal city with beaches, seafood markets, and colorful villages',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,400,000',
                        bestTime: 'May to June, September to October',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Gamcheon Culture Village', type: 'Neighborhood', description: 'Colorful hillside art village' },
                            { name: 'Haeundae Beach', type: 'Beach', description: 'Korea\'s most famous beach' },
                            { name: 'Jagalchi Fish Market', type: 'Market', description: 'Largest seafood market in Korea' },
                            { name: 'Haedong Yonggungsa', type: 'Temple', description: 'Seaside Buddhist temple' },
                            { name: 'Gwangalli Beach', type: 'Beach', description: 'Night views of Diamond Bridge' }
                        ],
                        tips: [
                            'Fresh seafood is incredible',
                            'KTX from Seoul (2.5 hours)',
                            'Busan International Film Festival in October',
                            'More relaxed than Seoul'
                        ]
                    }
                }
            },
            sriLanka: {
                id: 'sriLanka',
                name: 'Sri Lanka',
                code: 'LK',
                flag: '🇱🇰',
                capital: 'Colombo (Sri Jayawardenepura Kotte)',
                currency: 'Sri Lankan Rupee (LKR)',
                language: 'Sinhala, Tamil, English',
                description: 'Teardrop island with ancient temples, tea country, elephants, and beaches',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    colombo: {
                        id: 'colombo',
                        name: 'Colombo',
                        country: 'Sri Lanka',
                        region: 'Asia',
                        description: 'Commercial capital with colonial heritage, temples, and buzzing markets',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '750,000',
                        bestTime: 'December to March (west coast)',
                        avgBudget: { budget: 30, mid: 60, luxury: 180 },
                        attractions: [
                            { name: 'Galle Face Green', type: 'Waterfront', description: 'Ocean-front promenade' },
                            { name: 'Gangaramaya Temple', type: 'Religious', description: 'Eclectic Buddhist temple' },
                            { name: 'Pettah Market', type: 'Market', description: 'Chaotic bazaar district' },
                            { name: 'National Museum', type: 'Museum', description: 'Sri Lankan history and art' },
                            { name: 'Colombo Fort', type: 'Historic', description: 'Colonial business district' }
                        ],
                        tips: [
                            'Gateway to rest of Sri Lanka',
                            'Short stop is enough',
                            'Try kottu rotti street food',
                            'Tuk-tuks everywhere'
                        ]
                    },
                    kandy: {
                        id: 'kandy',
                        name: 'Kandy',
                        country: 'Sri Lanka',
                        region: 'Asia',
                        description: 'Hill capital with sacred Temple of the Tooth and scenic train rides',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '125,000',
                        bestTime: 'December to April',
                        avgBudget: { budget: 25, mid: 50, luxury: 150 },
                        attractions: [
                            { name: 'Temple of the Tooth', type: 'Religious', description: 'Buddha\'s tooth relic' },
                            { name: 'Kandy Lake', type: 'Nature', description: 'Scenic lake in city center' },
                            { name: 'Train to Ella', type: 'Scenic', description: 'World\'s most beautiful train ride' },
                            { name: 'Royal Botanical Gardens', type: 'Garden', description: 'Beautiful Peradeniya gardens' },
                            { name: 'Kandyan Dance', type: 'Culture', description: 'Traditional cultural show' }
                        ],
                        tips: [
                            'Train to Ella is unmissable',
                            'Book train tickets in advance',
                            'Esala Perahera festival in August',
                            'Cooler than coastal areas'
                        ]
                    },
                    ella: {
                        id: 'ella',
                        name: 'Ella',
                        country: 'Sri Lanka',
                        region: 'Asia',
                        description: 'Hill country gem with waterfalls, tea plantations, and iconic bridge',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '50,000',
                        bestTime: 'January to March',
                        avgBudget: { budget: 20, mid: 45, luxury: 120 },
                        attractions: [
                            { name: 'Nine Arch Bridge', type: 'Landmark', description: 'Iconic colonial railway bridge' },
                            { name: 'Little Adam\'s Peak', type: 'Hike', description: 'Easy sunrise hike with views' },
                            { name: 'Ella Rock', type: 'Hike', description: 'More challenging hike with views' },
                            { name: 'Ravana Falls', type: 'Waterfall', description: 'Popular waterfall stop' },
                            { name: 'Tea Factory Tours', type: 'Tour', description: 'Ceylon tea production' }
                        ],
                        tips: [
                            'Nine Arch Bridge train times vary',
                            'Get there early for sunrise hikes',
                            'Backpacker vibe town',
                            'Affordable and beautiful'
                        ]
                    },
                    galle: {
                        id: 'galle',
                        name: 'Galle',
                        country: 'Sri Lanka',
                        region: 'Asia',
                        description: 'UNESCO Dutch fort city with boutique hotels and beachside charm',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '100,000',
                        bestTime: 'December to April',
                        avgBudget: { budget: 30, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Galle Fort', type: 'UNESCO', description: 'Dutch colonial fort with boutiques' },
                            { name: 'Dutch Reformed Church', type: 'Religious', description: 'Historic church from 1755' },
                            { name: 'Lighthouse', type: 'Landmark', description: 'Iconic fort lighthouse' },
                            { name: 'Maritime Museum', type: 'Museum', description: 'Nautical history exhibits' },
                            { name: 'Unawatuna Beach', type: 'Beach', description: 'Popular nearby beach' }
                        ],
                        tips: [
                            'Walk the fort walls at sunset',
                            'Great boutique shopping',
                            'Base for south coast beaches',
                            'Quieter than Colombo'
                        ]
                    },
                    bentota: {
                        id: 'bentota',
                        name: 'Bentota',
                        country: 'Sri Lanka',
                        region: 'Asia',
                        description: 'Beach resort town with water sports and river safaris',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '25,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 35, mid: 80, luxury: 220 },
                        attractions: [
                            { name: 'Bentota Beach', type: 'Beach', description: 'Golden sand beach resort area' },
                            { name: 'Bentota River', type: 'Nature', description: 'Mangrove boat safaris' },
                            { name: 'Brief Garden', type: 'Garden', description: 'Landscape artist\'s former home' },
                            { name: 'Sea Turtle Conservation', type: 'Wildlife', description: 'Turtle hatchery visits' },
                            { name: 'Water Sports', type: 'Activity', description: 'Jet skiing and wakeboarding' }
                        ],
                        tips: [
                            'Popular resort destination',
                            'Great for water sports',
                            'Ayurvedic spa treatments available',
                            '2 hours from Colombo'
                        ]
                    },
                    yala: {
                        id: 'yala',
                        name: 'Yala',
                        country: 'Sri Lanka',
                        region: 'Asia',
                        description: 'Premier wildlife safari destination with leopards and elephants',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '5,000',
                        bestTime: 'February to July',
                        avgBudget: { budget: 80, mid: 180, luxury: 450 },
                        attractions: [
                            { name: 'Yala National Park', type: 'Safari', description: 'Highest leopard density in world' },
                            { name: 'Wild Elephants', type: 'Wildlife', description: 'Herds of Asian elephants' },
                            { name: 'Bird Watching', type: 'Nature', description: '200+ bird species' },
                            { name: 'Sithulpawwa', type: 'Temple', description: 'Ancient rock temple' },
                            { name: 'Scenic Drives', type: 'Nature', description: 'Beautiful coastal landscapes' }
                        ],
                        tips: [
                            'Early morning safaris best',
                            'Book safari jeep in advance',
                            'Park closed September-October',
                            'Stay in tented camps nearby'
                        ]
                    },
                    jaffna: {
                        id: 'jaffna',
                        name: 'Jaffna',
                        country: 'Sri Lanka',
                        region: 'Asia',
                        description: 'Tamil cultural capital with Hindu temples and post-war resilience',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '90,000',
                        bestTime: 'January to September',
                        avgBudget: { budget: 20, mid: 45, luxury: 120 },
                        attractions: [
                            { name: 'Nallur Kandaswamy Temple', type: 'Religious', description: 'Iconic Hindu kovil' },
                            { name: 'Jaffna Fort', type: 'Historic', description: 'Dutch star-shaped fort' },
                            { name: 'Jaffna Library', type: 'Culture', description: 'Rebuilt iconic library' },
                            { name: 'Nagadeepa Island', type: 'Religious', description: 'Buddhist temple on island' },
                            { name: 'Casuarina Beach', type: 'Beach', description: 'Beautiful northern beach' }
                        ],
                        tips: [
                            'Tamil Hindu culture distinct from south',
                            'Try Jaffna crab curry',
                            'Still rebuilding after civil war',
                            'Less touristy - authentic experience'
                        ]
                    }
                }
            },
            taiwan: {
                id: 'taiwan',
                name: 'Taiwan',
                code: 'TW',
                flag: '🇹🇼',
                capital: 'Taipei',
                currency: 'New Taiwan Dollar (TWD)',
                language: 'Mandarin, Taiwanese',
                description: 'Night markets, bubble tea, mountain trails, and high-tech culture',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    taipei: {
                        id: 'taipei',
                        name: 'Taipei',
                        country: 'Taiwan',
                        region: 'Asia',
                        description: 'Modern capital with incredible night markets and mountain accessibility',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,600,000',
                        bestTime: 'October to December',
                        avgBudget: { budget: 45, mid: 90, luxury: 250 },
                        attractions: [
                            { name: 'Taipei 101', type: 'Landmark', description: 'Iconic bamboo-shaped tower' },
                            { name: 'Shilin Night Market', type: 'Market', description: 'Famous night market' },
                            { name: 'National Palace Museum', type: 'Museum', description: 'World\'s largest Chinese art collection' },
                            { name: 'Jiufen', type: 'Town', description: 'Spirited Away-inspiring hillside town' },
                            { name: 'Elephant Mountain', type: 'Hike', description: 'Taipei 101 viewpoint hike' }
                        ],
                        tips: [
                            'MRT is excellent and cheap',
                            'Night markets are essential',
                            'Bubble tea paradise',
                            'Very safe city'
                        ]
                    },
                    taroko: {
                        id: 'taroko',
                        name: 'Taroko Gorge',
                        country: 'Taiwan',
                        region: 'Asia',
                        description: 'Stunning marble gorge with dramatic hiking trails',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '5,000',
                        bestTime: 'October to April (dry season)',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Shakadang Trail', type: 'Hike', description: 'Easy riverside trail' },
                            { name: 'Swallow Grotto', type: 'Nature', description: 'Dramatic marble cliffs' },
                            { name: 'Eternal Spring Shrine', type: 'Religious', description: 'Buddhist shrine by waterfall' },
                            { name: 'Zhuilu Old Trail', type: 'Hike', description: 'Dramatic cliff trail (permit needed)' },
                            { name: 'Qingshui Cliff', type: 'Nature', description: 'Sea cliffs on coastal road' }
                        ],
                        tips: [
                            'Taiwan\'s most spectacular scenery',
                            'Base in Hualien city',
                            'Zhuilu trail needs advance permit',
                            'Watch for landslides after rain'
                        ]
                    }
                }
            },
            thailand: {
                id: 'thailand',
                name: 'Thailand',
                code: 'TH',
                flag: '🇹🇭',
                capital: 'Bangkok',
                currency: 'Thai Baht (THB)',
                language: 'Thai',
                description: 'Temples, beaches, street food paradise, and the Land of Smiles',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    bangkok: {
                        id: 'bangkok',
                        name: 'Bangkok',
                        country: 'Thailand',
                        region: 'Asia',
                        description: 'Chaotic capital with ornate temples, incredible street food, and legendary nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '10,500,000',
                        bestTime: 'November to February (cool, dry)',
                        avgBudget: { budget: 35, mid: 75, luxury: 220 },
                        attractions: [
                            { name: 'Grand Palace', type: 'Palace', description: 'Royal palace with Emerald Buddha' },
                            { name: 'Wat Pho', type: 'Temple', description: 'Reclining Buddha temple' },
                            { name: 'Chatuchak Market', type: 'Market', description: 'World\'s largest weekend market' },
                            { name: 'Khao San Road', type: 'Street', description: 'Backpacker hub' },
                            { name: 'Floating Markets', type: 'Market', description: 'Traditional canal markets' }
                        ],
                        tips: [
                            'Street food is safe and incredible',
                            'BTS Skytrain beats traffic',
                            'Dress modestly for temples',
                            'Tuk-tuk scams - agree price first'
                        ]
                    },
                    chiangMai: {
                        id: 'chiangMai',
                        name: 'Chiang Mai',
                        country: 'Thailand',
                        region: 'Asia',
                        description: 'Northern cultural capital with temples, mountains, and Lanna heritage',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '130,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 25, mid: 55, luxury: 160 },
                        attractions: [
                            { name: 'Doi Suthep', type: 'Temple', description: 'Sacred mountain temple' },
                            { name: 'Old City Temples', type: 'Temple', description: 'Dozens of ancient temples' },
                            { name: 'Night Bazaar', type: 'Market', description: 'Evening craft and food market' },
                            { name: 'Elephant Sanctuaries', type: 'Wildlife', description: 'Ethical elephant experiences' },
                            { name: 'Cooking Classes', type: 'Activity', description: 'Learn Thai cuisine' }
                        ],
                        tips: [
                            'Avoid elephant riding - visit sanctuaries',
                            'Rent a scooter to explore',
                            'Yi Peng lantern festival in November',
                            'Digital nomad hub'
                        ]
                    },
                    krabi: {
                        id: 'krabi',
                        name: 'Krabi',
                        country: 'Thailand',
                        region: 'Asia',
                        description: 'Dramatic limestone karsts, island hopping, and stunning beaches',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '30,000',
                        bestTime: 'November to April (dry season)',
                        avgBudget: { budget: 30, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Railay Beach', type: 'Beach', description: 'Iconic peninsula with climbing' },
                            { name: 'Phi Phi Islands', type: 'Island', description: 'Famous day trip islands' },
                            { name: 'Four Islands Tour', type: 'Tour', description: 'Snorkeling and beach hopping' },
                            { name: 'Tiger Cave Temple', type: 'Temple', description: '1,260 steps to summit' },
                            { name: 'Ao Nang', type: 'Beach', description: 'Main tourist beach town' }
                        ],
                        tips: [
                            'Railay only accessible by boat',
                            'Krabi town is mainland gateway',
                            'Long-tail boats are iconic',
                            'Peak season December-January'
                        ]
                    },
                    phuket: {
                        id: 'phuket',
                        name: 'Phuket',
                        country: 'Thailand',
                        region: 'Asia',
                        description: 'Thailand\'s largest island with diverse beaches and vibrant nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '420,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 40, mid: 90, luxury: 300 },
                        attractions: [
                            { name: 'Patong Beach', type: 'Beach', description: 'Main tourist beach with nightlife' },
                            { name: 'Old Phuket Town', type: 'Historic', description: 'Sino-Portuguese architecture' },
                            { name: 'Big Buddha', type: 'Religious', description: '45m white marble Buddha' },
                            { name: 'Phi Phi Islands', type: 'Island', description: 'Day trip to famous islands' },
                            { name: 'Phang Nga Bay', type: 'Nature', description: 'James Bond Island tours' }
                        ],
                        tips: [
                            'Rainy season May-October',
                            'Rent a scooter for exploring',
                            'Kata and Karon quieter than Patong',
                            'Gateway to islands'
                        ]
                    },
                    pattaya: {
                        id: 'pattaya',
                        name: 'Pattaya',
                        country: 'Thailand',
                        region: 'Asia',
                        description: 'Beach resort close to Bangkok with water parks and nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '120,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 35, mid: 80, luxury: 220 },
                        attractions: [
                            { name: 'Walking Street', type: 'Nightlife', description: 'Famous pedestrian strip' },
                            { name: 'Sanctuary of Truth', type: 'Religious', description: 'Carved wooden temple' },
                            { name: 'Koh Larn', type: 'Island', description: 'Day trip island with beaches' },
                            { name: 'Nong Nooch Garden', type: 'Garden', description: 'Tropical garden attraction' },
                            { name: 'Jomtien Beach', type: 'Beach', description: 'Quieter beach alternative' }
                        ],
                        tips: [
                            '2 hours from Bangkok',
                            'Jomtien for families',
                            'Known for nightlife scene',
                            'Weekends very crowded'
                        ]
                    },
                    kohSamui: {
                        id: 'kohSamui',
                        name: 'Koh Samui',
                        country: 'Thailand',
                        region: 'Asia',
                        description: 'Gulf island with palm-fringed beaches, luxury resorts, and Big Buddha',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '70,000',
                        bestTime: 'December to April',
                        avgBudget: { budget: 45, mid: 100, luxury: 350 },
                        attractions: [
                            { name: 'Big Buddha', type: 'Religious', description: '12m golden seated Buddha' },
                            { name: 'Chaweng Beach', type: 'Beach', description: 'Main beach and nightlife' },
                            { name: 'Ang Thong Marine Park', type: 'Nature', description: 'Archipelago day trip' },
                            { name: 'Fisherman\'s Village', type: 'Neighborhood', description: 'Bophut beach area' },
                            { name: 'Na Muang Waterfalls', type: 'Nature', description: 'Jungle waterfalls' }
                        ],
                        tips: [
                            'Airport island - easy access',
                            'More upscale than Phangan',
                            'Ferry to Koh Phangan and Koh Tao',
                            'Friday night market in Fisherman\'s Village'
                        ]
                    },
                    kohPhangan: {
                        id: 'kohPhangan',
                        name: 'Koh Phangan',
                        country: 'Thailand',
                        region: 'Asia',
                        description: 'Full Moon Party island with quieter beaches and yoga retreats',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '15,000',
                        bestTime: 'December to March',
                        avgBudget: { budget: 30, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Full Moon Party', type: 'Nightlife', description: 'World-famous beach party' },
                            { name: 'Haad Rin', type: 'Beach', description: 'Full moon party beach' },
                            { name: 'Bottle Beach', type: 'Beach', description: 'Secluded paradise' },
                            { name: 'Than Sadet Waterfall', type: 'Nature', description: 'Royal waterfall' },
                            { name: 'Yoga Retreats', type: 'Wellness', description: 'Many yoga and detox retreats' }
                        ],
                        tips: [
                            'Full moon party dates vary monthly',
                            'North is quieter and spiritual',
                            'Ferry from Samui or Surat Thani',
                            'Check moon calendar for party dates'
                        ]
                    },
                    chiangRai: {
                        id: 'chiangRai',
                        name: 'Chiang Rai',
                        country: 'Thailand',
                        region: 'Asia',
                        description: 'Northern Thailand gem with White Temple and Golden Triangle',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '75,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 25, mid: 55, luxury: 150 },
                        attractions: [
                            { name: 'White Temple (Wat Rong Khun)', type: 'Temple', description: 'Stunning contemporary temple' },
                            { name: 'Blue Temple', type: 'Temple', description: 'Beautiful blue interior' },
                            { name: 'Black House (Baan Dam)', type: 'Museum', description: 'Dark art collection' },
                            { name: 'Golden Triangle', type: 'Historic', description: 'Where Thailand, Laos, Myanmar meet' },
                            { name: 'Hill Tribe Villages', type: 'Culture', description: 'Indigenous communities' }
                        ],
                        tips: [
                            'White Temple is most photographed',
                            'Day trip from Chiang Mai possible',
                            '3 hours north of Chiang Mai',
                            'Base for trekking'
                        ]
                    }
                }
            },
            vietnam: {
                id: 'vietnam',
                name: 'Vietnam',
                code: 'VN',
                flag: '🇻🇳',
                capital: 'Hanoi',
                currency: 'Vietnamese Dong (VND)',
                language: 'Vietnamese',
                description: 'Ancient temples, Ha Long Bay karsts, incredible cuisine, and rich history',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    hanoi: {
                        id: 'hanoi',
                        name: 'Hanoi',
                        country: 'Vietnam',
                        region: 'Asia',
                        description: 'Ancient capital with French colonial architecture and legendary street food',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '8,000,000',
                        bestTime: 'October to December, March to April',
                        avgBudget: { budget: 25, mid: 55, luxury: 150 },
                        attractions: [
                            { name: 'Old Quarter', type: 'Historic', description: '36 streets of ancient trading' },
                            { name: 'Ho Chi Minh Mausoleum', type: 'Historic', description: 'Resting place of Uncle Ho' },
                            { name: 'Temple of Literature', type: 'Temple', description: 'Vietnam\'s first university' },
                            { name: 'Hoan Kiem Lake', type: 'Nature', description: 'Sacred lake in city center' },
                            { name: 'Water Puppet Theatre', type: 'Culture', description: 'Traditional Vietnamese art' }
                        ],
                        tips: [
                            'Pho for breakfast is tradition',
                            'Crossing streets - walk slowly, steadily',
                            'Bia hoi (fresh beer) is 25 cents',
                            'Gateway to Ha Long Bay'
                        ]
                    },
                    hoChiMinh: {
                        id: 'hoChiMinh',
                        name: 'Ho Chi Minh City',
                        country: 'Vietnam',
                        region: 'Asia',
                        description: 'Dynamic southern metropolis with war history and modern buzz',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '9,000,000',
                        bestTime: 'December to April (dry season)',
                        avgBudget: { budget: 25, mid: 55, luxury: 160 },
                        attractions: [
                            { name: 'Cu Chi Tunnels', type: 'Historic', description: 'Vietnam War underground network' },
                            { name: 'War Remnants Museum', type: 'Museum', description: 'Moving Vietnam War exhibits' },
                            { name: 'Ben Thanh Market', type: 'Market', description: 'Iconic city market' },
                            { name: 'Notre-Dame Cathedral', type: 'Religious', description: 'French colonial landmark' },
                            { name: 'Mekong Delta', type: 'Nature', description: 'Day trip to river delta' }
                        ],
                        tips: [
                            'Still called Saigon by locals',
                            'Cu Chi Tunnels are unmissable',
                            'Coffee culture is amazing',
                            'Motorbike traffic is intense'
                        ]
                    },
                    hoi_an: {
                        id: 'hoi_an',
                        name: 'Hoi An',
                        country: 'Vietnam',
                        region: 'Asia',
                        description: 'Ancient trading port with lanterns, tailors, and UNESCO heritage',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '120,000',
                        bestTime: 'February to April',
                        avgBudget: { budget: 20, mid: 50, luxury: 140 },
                        attractions: [
                            { name: 'Japanese Covered Bridge', type: 'Landmark', description: 'Iconic 400-year-old bridge' },
                            { name: 'Ancient Town', type: 'Historic', description: 'UNESCO World Heritage streets' },
                            { name: 'Lantern Evening', type: 'Culture', description: 'Full moon lantern festival' },
                            { name: 'Tailors', type: 'Shopping', description: 'Custom clothing in 24 hours' },
                            { name: 'An Bang Beach', type: 'Beach', description: 'Nearby beach escape' }
                        ],
                        tips: [
                            'Get clothes tailored - it\'s the thing',
                            'Evening lanterns are magical',
                            'Rent a bicycle',
                            'Try cao láÃ‚ÂºÃ‚Â§u (local noodles)'
                        ]
                    },
                    daNang: {
                        id: 'daNang',
                        name: 'Da Nang',
                        country: 'Vietnam',
                        region: 'Asia',
                        description: 'Modern beach city with Marble Mountains and Ba Na Hills',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,200,000',
                        bestTime: 'February to May',
                        avgBudget: { budget: 30, mid: 65, luxury: 180 },
                        attractions: [
                            { name: 'Ba Na Hills', type: 'Theme Park', description: 'Golden Bridge and cable car' },
                            { name: 'Marble Mountains', type: 'Nature', description: 'Buddhist caves and pagodas' },
                            { name: 'My Khe Beach', type: 'Beach', description: 'Top urban beach' },
                            { name: 'Dragon Bridge', type: 'Landmark', description: 'Fire-breathing dragon bridge' },
                            { name: 'Son Tra Peninsula', type: 'Nature', description: 'Lady Buddha and monkeys' }
                        ],
                        tips: [
                            'Dragon Bridge breathes fire Sat/Sun 9PM',
                            'Base for Hoi An day trips',
                            'Great seafood restaurants',
                            'Growing digital nomad hub'
                        ]
                    },
                    sapa: {
                        id: 'sapa',
                        name: 'Sapa',
                        country: 'Vietnam',
                        region: 'Asia',
                        description: 'Mountain town with rice terraces and ethnic minority villages',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '50,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 25, mid: 55, luxury: 150 },
                        attractions: [
                            { name: 'Rice Terraces', type: 'UNESCO', description: 'Stunning carved mountainsides' },
                            { name: 'Fansipan', type: 'Mountain', description: 'Indochina\'s highest peak' },
                            { name: 'Cat Cat Village', type: 'Culture', description: 'H\'mong ethnic village' },
                            { name: 'Ham Rong Mountain', type: 'Nature', description: 'Gardens and viewpoint' },
                            { name: 'Muong Hoa Valley', type: 'Nature', description: 'Beautiful valley trekking' }
                        ],
                        tips: [
                            'Best rice terrace views Sept-Oct',
                            'Trek with local guides',
                            'Cold in winter - bring layers',
                            'Overnight train from Hanoi'
                        ]
                    },
                    phuQuoc: {
                        id: 'phuQuoc',
                        name: 'Phu Quoc',
                        country: 'Vietnam',
                        region: 'Asia',
                        description: 'Tropical island paradise with beaches, seafood, and fish sauce',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '180,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 35, mid: 75, luxury: 220 },
                        attractions: [
                            { name: 'Long Beach', type: 'Beach', description: 'Main beach strip' },
                            { name: 'Phu Quoc Night Market', type: 'Market', description: 'Seafood and local food' },
                            { name: 'Vinpearl Safari', type: 'Zoo', description: 'Open-range safari park' },
                            { name: 'Hon Thom Cable Car', type: 'Activity', description: 'World\'s longest cable car' },
                            { name: 'Fish Sauce Factory', type: 'Tour', description: 'Famous Phu Quoc fish sauce' }
                        ],
                        tips: [
                            'Visa-free for 30 days',
                            'Rent a motorbike to explore',
                            'Seafood is incredibly fresh',
                            'Developing rapidly'
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
            },
            hongKong: {
                id: 'hongKong',
                name: 'Hong Kong',
                code: 'HK',
                flag: '🇭🇰',
                capital: 'Hong Kong (SAR)',
                currency: 'Hong Kong Dollar (HKD)',
                language: 'Cantonese, English, Mandarin',
                description: 'Dynamic metropolis where East meets West with stunning skyline and dim sum',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    hongKongCity: {
                        id: 'hongKongCity',
                        name: 'Hong Kong',
                        country: 'Hong Kong',
                        region: 'Asia',
                        description: 'Vertical city with iconic skyline, street food, and hiking trails',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '7,500,000',
                        bestTime: 'October to December',
                        avgBudget: { budget: 80, mid: 160, luxury: 450 },
                        attractions: [
                            { name: 'Victoria Peak', type: 'Viewpoint', description: 'Iconic skyline views' },
                            { name: 'Victoria Harbour', type: 'Waterfront', description: 'Symphony of Lights show' },
                            { name: 'Tian Tan Buddha', type: 'Religious', description: 'Giant Buddha on Lantau' },
                            { name: 'Temple Street Night Market', type: 'Market', description: 'Fortune tellers and street food' },
                            { name: 'Star Ferry', type: 'Transport', description: 'Classic harbour crossing' }
                        ],
                        tips: [
                            'Octopus card for all transport',
                            'Dim sum for breakfast',
                            'Excellent hiking on city doorstep',
                            'Typhoon season June to September'
                        ]
                    },
                    lantau: {
                        id: 'lantau',
                        name: 'Lantau Island',
                        country: 'Hong Kong',
                        region: 'Asia',
                        description: 'Largest outlying island with Big Buddha and traditional fishing villages',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '100,000',
                        bestTime: 'October to March',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                            { name: 'Ngong Ping 360', type: 'Cable Car', description: 'Crystal cabin cable car' },
                            { name: 'Po Lin Monastery', type: 'Religious', description: 'Buddhist monastery with Big Buddha' },
                            { name: 'Tai O', type: 'Village', description: 'Traditional stilt fishing village' },
                            { name: 'Wisdom Path', type: 'Trail', description: 'Wooden columns with Heart Sutra' },
                            { name: 'Lantau Peak', type: 'Hike', description: 'Second highest peak in HK' }
                        ],
                        tips: [
                            'Crystal cabin upgrade for glass floor',
                            'Tai O ferry or hiking trails',
                            'Try Tai O dried seafood',
                            'Combined with Disneyland possible'
                        ]
                    }
                }
            },
            iraq: {
                id: 'iraq',
                name: 'Iraq',
                code: 'IQ',
                flag: '🇮🇶',
                capital: 'Baghdad',
                currency: 'Iraqi Dinar (IQD)',
                language: 'Arabic, Kurdish',
                description: 'Cradle of civilization with ancient Mesopotamian heritage and religious sites',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    baghdad: {
                        id: 'baghdad',
                        name: 'Baghdad',
                        country: 'Iraq',
                        region: 'Asia',
                        description: 'Historic capital on the Tigris, once center of the Islamic Golden Age',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '8,100,000',
                        bestTime: 'October to April (avoid summer heat)',
                        avgBudget: { budget: 50, mid: 100, luxury: 250 },
                        attractions: [
                            { name: 'Iraq Museum', type: 'Museum', description: 'Mesopotamian artifacts' },
                            { name: 'Al-Mutanabbi Street', type: 'Street', description: 'Historic book market street' },
                            { name: 'Al-Kadhimiya Mosque', type: 'Religious', description: 'Major Shia pilgrimage site' },
                            { name: 'Tigris River', type: 'Nature', description: 'Historic river through city' },
                            { name: 'Baghdad Tower', type: 'Landmark', description: 'City viewpoint' }
                        ],
                        tips: [
                            'Check travel advisories carefully',
                            'Visa required in advance',
                            'Local guide strongly recommended',
                            'Incredible hospitality when safe'
                        ]
                    },
                    erbil: {
                        id: 'erbil',
                        name: 'Erbil',
                        country: 'Iraq',
                        region: 'Asia',
                        description: 'Capital of Kurdistan with one of world\'s oldest continuously inhabited citadels',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,500,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 45, mid: 90, luxury: 220 },
                        attractions: [
                            { name: 'Citadel of Erbil', type: 'Historic', description: '6,000+ years of continuous habitation' },
                            { name: 'Kurdish Textile Museum', type: 'Museum', description: 'Traditional Kurdish crafts' },
                            { name: 'Shanidar Park', type: 'Park', description: 'Central park and fountains' },
                            { name: 'Bazaar', type: 'Market', description: 'Traditional qaysari bazaar' },
                            { name: 'Minaret Park', type: 'Park', description: 'Modern park with views' }
                        ],
                        tips: [
                            'Kurdistan region is safer than rest of Iraq',
                            'Visa on arrival for many nationalities',
                            'People extremely welcoming',
                            'Base for Hamilton Road drive'
                        ]
                    }
                }
            },
            macau: {
                id: 'macau',
                name: 'Macau',
                code: 'MO',
                flag: 'ÃƒÂ°Ã…Â¸Ã¢â‚¬Â¡Ã‚Â²ÃƒÂ°Ã…Â¸Ã¢â‚¬Â¡Ã‚Â´',
                capital: 'Macau (SAR)',
                currency: 'Macanese Pataca (MOP)',
                language: 'Cantonese, Portuguese',
                description: 'Vegas of the East meets Portuguese colonial heritage',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    macauCity: {
                        id: 'macauCity',
                        name: 'Macau',
                        country: 'Macau',
                        region: 'Asia',
                        description: 'Unique blend of Portuguese colonial charm and casino glamour',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '680,000',
                        bestTime: 'October to December',
                        avgBudget: { budget: 70, mid: 150, luxury: 500 },
                        attractions: [
                            { name: 'Ruins of St. Paul\'s', type: 'Historic', description: 'Iconic church facade' },
                            { name: 'Senado Square', type: 'Square', description: 'Portuguese colonial architecture' },
                            { name: 'Venetian Macau', type: 'Casino', description: 'World\'s largest casino' },
                            { name: 'A-Ma Temple', type: 'Religious', description: 'Oldest temple in Macau' },
                            { name: 'Macau Tower', type: 'Landmark', description: 'Bungy jump and views' }
                        ],
                        tips: [
                            'Day trip from Hong Kong easily',
                            'Try Portuguese egg tarts',
                            'Free casino shuttles from ferry',
                            'UNESCO Historic Centre worth exploring'
                        ]
                    },
                    cotaiStrip: {
                        id: 'cotaiStrip',
                        name: 'Cotai Strip',
                        country: 'Macau',
                        region: 'Asia',
                        description: 'Las Vegas-style mega resort strip on reclaimed land',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '0',
                        bestTime: 'October to March',
                        avgBudget: { budget: 100, mid: 250, luxury: 800 },
                        attractions: [
                            { name: 'Venetian Macao', type: 'Resort', description: 'Replica Venice canals' },
                            { name: 'City of Dreams', type: 'Resort', description: 'House of Dancing Water show' },
                            { name: 'Parisian Macao', type: 'Resort', description: 'Half-scale Eiffel Tower' },
                            { name: 'Galaxy Macau', type: 'Resort', description: 'Wave pool and luxury shopping' },
                            { name: 'Wynn Palace', type: 'Resort', description: 'Cable car and fountain show' }
                        ],
                        tips: [
                            'Free shows and attractions at casinos',
                            'Shuttle buses connect all resorts',
                            'World-class dining options',
                            'Non-gamblers have plenty to do'
                        ]
                    }
                }
            }
        }
    },
    africa: {
        id: 'africa',
        name: 'Africa',
        emoji: '🦁',
        description: 'Ancient civilizations, diverse wildlife, and breathtaking natural wonders',
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
        countries: {
            egypt: {
                id: 'egypt',
                name: 'Egypt',
                code: 'EG',
                flag: '🇪🇬',
                capital: 'Cairo',
                currency: 'Egyptian Pound (EGP)',
                language: 'Arabic',
                description: 'Land of pharaohs, pyramids, and the mighty Nile River',
                image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800',
                cities: {
                    cairo: {
                        id: 'cairo',
                        name: 'Cairo',
                        country: 'Egypt',
                        region: 'Africa',
                        description: 'Chaotic megacity with ancient pyramids, Islamic treasures, and bustling bazaars',
                        image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800',
                        population: '21,000,000',
                        bestTime: 'October to April',
                        avgBudget: { budget: 35, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Pyramids of Giza', type: 'Ancient', description: 'Last surviving ancient world wonder' },
                            { name: 'Sphinx', type: 'Ancient', description: 'Iconic limestone statue' },
                            { name: 'Egyptian Museum', type: 'Museum', description: 'World\'s largest collection of ancient Egyptian artifacts' },
                            { name: 'Khan el-Khalili', type: 'Market', description: 'Famous medieval bazaar' },
                            { name: 'Islamic Cairo', type: 'Historic', description: 'Medieval mosques and madrasas' }
                        ],
                        tips: [
                            'Book pyramid tours early morning to avoid heat',
                            'Bargain hard in the bazaars',
                            'Dress modestly for mosque visits',
                            'Friday is the weekend - some places closed'
                        ]
                    },
                    aswan: {
                        id: 'aswan',
                        name: 'Aswan',
                        country: 'Egypt',
                        region: 'Africa',
                        description: 'Tranquil Nile city with Nubian culture, felucca rides, and ancient temples',
                        image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800',
                        population: '350,000',
                        bestTime: 'October to April',
                        avgBudget: { budget: 30, mid: 60, luxury: 180 },
                        attractions: [
                            { name: 'Philae Temple', type: 'Temple', description: 'Island temple dedicated to Isis' },
                            { name: 'Aswan High Dam', type: 'Landmark', description: 'Massive engineering marvel' },
                            { name: 'Nubian Villages', type: 'Culture', description: 'Colorful traditional villages' },
                            { name: 'Felucca Sailing', type: 'Activity', description: 'Traditional sailboat on the Nile' },
                            { name: 'Unfinished Obelisk', type: 'Ancient', description: 'Largest known ancient obelisk' }
                        ],
                        tips: [
                            'Take a felucca ride at sunset',
                            'Day trip to Abu Simbel highly recommended',
                            'Walk through Nubian villages',
                            'Cooler in winter than rest of Egypt'
                        ]
                    },
                    alexandria: {
                        id: 'alexandria',
                        name: 'Alexandria',
                        country: 'Egypt',
                        region: 'Africa',
                        description: 'Mediterranean port city founded by Alexander the Great with rich history',
                        image: 'https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?w=800',
                        population: '5,200,000',
                        bestTime: 'September to November, March to May',
                        avgBudget: { budget: 30, mid: 65, luxury: 170 },
                        attractions: [
                            { name: 'Bibliotheca Alexandrina', type: 'Library', description: 'Modern library honoring the ancient Library of Alexandria' },
                            { name: 'Qaitbay Citadel', type: 'Fort', description: '15th-century fortress on Lighthouse site' },
                            { name: 'Corniche', type: 'Waterfront', description: 'Seaside promenade along the Mediterranean' },
                            { name: 'Catacombs of Kom el Shoqafa', type: 'Ancient', description: 'Roman burial chambers with Egyptian influence' },
                            { name: 'Montaza Palace Gardens', type: 'Gardens', description: 'Royal gardens and beaches' }
                        ],
                        tips: [
                            'More relaxed than Cairo',
                            'Fresh seafood is excellent here',
                            'Cooler Mediterranean climate',
                            'Visit on weekdays to avoid crowds'
                        ]
                    },
                    giza: {
                        id: 'giza',
                        name: 'Giza',
                        country: 'Egypt',
                        region: 'Africa',
                        description: 'Home to the Great Pyramids and Sphinx on the outskirts of Cairo',
                        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800',
                        population: '9,000,000',
                        bestTime: 'October to April',
                        avgBudget: { budget: 40, mid: 80, luxury: 220 },
                        attractions: [
                            { name: 'Great Pyramid of Khufu', type: 'Ancient', description: 'Largest of the three pyramids' },
                            { name: 'Pyramid of Khafre', type: 'Ancient', description: 'Second pyramid with original cap' },
                            { name: 'Pyramid of Menkaure', type: 'Ancient', description: 'Smallest of the three main pyramids' },
                            { name: 'Solar Boat Museum', type: 'Museum', description: 'Ancient ship for pharaoh\'s afterlife journey' },
                            { name: 'Sound and Light Show', type: 'Show', description: 'Evening spectacle at the pyramids' }
                        ],
                        tips: [
                            'Arrive at opening time to beat crowds',
                            'Camel rides are tourist traps - negotiate hard',
                            'Hire an official guide',
                            'Sound and Light show in multiple languages'
                        ]
                    }
                }
            },
            ethiopia: {
                id: 'ethiopia',
                name: 'Ethiopia',
                code: 'ET',
                flag: '🇪🇹',
                capital: 'Addis Ababa',
                currency: 'Ethiopian Birr (ETB)',
                language: 'Amharic',
                description: 'Ancient kingdom with rock-hewn churches, unique cuisine, and the birthplace of coffee',
                image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
                cities: {
                    addisAbaba: {
                        id: 'addisAbaba',
                        name: 'Addis Ababa',
                        country: 'Ethiopia',
                        region: 'Africa',
                        description: 'Ethiopia\'s capital with coffee culture, ancient history, and vibrant markets',
                        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
                        population: '5,200,000',
                        bestTime: 'October to May',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'National Museum', type: 'Museum', description: 'Home of Lucy, the famous hominid fossil' },
                            { name: 'Holy Trinity Cathedral', type: 'Religious', description: 'Largest Orthodox cathedral in Ethiopia' },
                            { name: 'Merkato', type: 'Market', description: 'Largest open-air market in Africa' },
                            { name: 'Entoto Hill', type: 'Nature', description: 'Mountain with panoramic city views' },
                            { name: 'Red Terror Martyrs Memorial', type: 'Memorial', description: 'Museum documenting Ethiopian history' }
                        ],
                        tips: [
                            'Try traditional coffee ceremony',
                            'Sample injera with various wats (stews)',
                            'Ethiopia uses its own calendar - 7 years behind',
                            'Gateway to historic northern circuit'
                        ]
                    }
                }
            },
            ghana: {
                id: 'ghana',
                name: 'Ghana',
                code: 'GH',
                flag: '🇬🇭',
                capital: 'Accra',
                currency: 'Ghanaian Cedi (GHS)',
                language: 'English',
                description: 'Gateway to West Africa with vibrant culture, historic forts, and warm hospitality',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    accra: {
                        id: 'accra',
                        name: 'Accra',
                        country: 'Ghana',
                        region: 'Africa',
                        description: 'Vibrant capital with historic sites, beaches, and thriving arts scene',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '4,000,000',
                        bestTime: 'November to March (dry season)',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                            { name: 'Jamestown Lighthouse', type: 'Landmark', description: 'Historic lighthouse in old quarter' },
                            { name: 'Kwame Nkrumah Mausoleum', type: 'Memorial', description: 'Memorial to Ghana\'s first president' },
                            { name: 'Makola Market', type: 'Market', description: 'Bustling open-air market' },
                            { name: 'Labadi Beach', type: 'Beach', description: 'Popular city beach' },
                            { name: 'W.E.B. Du Bois Center', type: 'Museum', description: 'Pan-African heritage center' }
                        ],
                        tips: [
                            '"Akwaaba" means welcome',
                            'Try jollof rice and fufu',
                            'Cape Coast slave castles day trip essential',
                            'Tro-tros are cheap local transport'
                        ]
                    }
                }
            },
            kenya: {
                id: 'kenya',
                name: 'Kenya',
                code: 'KE',
                flag: '🇰🇪',
                capital: 'Nairobi',
                currency: 'Kenyan Shilling (KES)',
                language: 'Swahili, English',
                description: 'Safari paradise with Big Five, Great Migration, and stunning landscapes',
                image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
                cities: {
                    nairobi: {
                        id: 'nairobi',
                        name: 'Nairobi',
                        country: 'Kenya',
                        region: 'Africa',
                        description: 'East Africa\'s capital with urban safari and gateway to national parks',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '4,400,000',
                        bestTime: 'January to March, July to October',
                        avgBudget: { budget: 45, mid: 90, luxury: 280 },
                        attractions: [
                            { name: 'Nairobi National Park', type: 'Nature', description: 'Safari with city skyline backdrop' },
                            { name: 'David Sheldrick Wildlife Trust', type: 'Conservation', description: 'Baby elephant orphanage' },
                            { name: 'Giraffe Centre', type: 'Conservation', description: 'Feed endangered Rothschild giraffes' },
                            { name: 'Karen Blixen Museum', type: 'Museum', description: 'Out of Africa author\'s home' },
                            { name: 'Kazuri Beads', type: 'Shopping', description: 'Women\'s cooperative ceramics' }
                        ],
                        tips: [
                            'Elephant orphanage opens 11am only',
                            'Don\'t walk around after dark',
                            'Uber is reliable and safe',
                            'Book safaris from Nairobi'
                        ]
                    },
                    masaiMara: {
                        id: 'masaiMara',
                        name: 'Masai Mara',
                        country: 'Kenya',
                        region: 'Africa',
                        description: 'World\'s greatest wildlife spectacle with Big Five and Great Migration',
                        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
                        population: '0',
                        bestTime: 'July to October (Great Migration), year-round for wildlife',
                        avgBudget: { budget: 200, mid: 400, luxury: 1200 },
                        attractions: [
                            { name: 'Great Migration', type: 'Wildlife', description: 'Millions of wildebeest crossing' },
                            { name: 'Big Five Safari', type: 'Wildlife', description: 'Lions, elephants, leopards, rhinos, buffalo' },
                            { name: 'Hot Air Balloon Safari', type: 'Experience', description: 'Dawn balloon over savannah' },
                            { name: 'Masai Village Visit', type: 'Culture', description: 'Traditional Masai culture' },
                            { name: 'Mara River Crossing', type: 'Wildlife', description: 'Dramatic wildebeest crossings' }
                        ],
                        tips: [
                            'Book luxury camp months ahead',
                            'Migration timing varies each year',
                            'Balloon safari is unforgettable but pricey',
                            'July-Oct is peak season - book early'
                        ]
                    }
                }
            },
            morocco: {
                id: 'morocco',
                name: 'Morocco',
                code: 'MA',
                flag: '🇲🇦',
                capital: 'Rabat',
                currency: 'Moroccan Dirham (MAD)',
                language: 'Arabic, Berber, French',
                description: 'Maze-like medinas, Sahara dunes, vibrant souks, and tagine cuisine',
                image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
                cities: {
                    marrakech: {
                        id: 'marrakech',
                        name: 'Marrakech',
                        country: 'Morocco',
                        region: 'Africa',
                        description: 'Red city with labyrinthine medina, snake charmers, and spice souks',
                        image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
                        population: '980,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 40, mid: 80, luxury: 250 },
                        attractions: [
                            { name: 'Djemaa el-Fna', type: 'Square', description: 'Famous night market and street performers' },
                            { name: 'Bahia Palace', type: 'Palace', description: '19th-century palace with courtyards' },
                            { name: 'Jardin Majorelle', type: 'Garden', description: 'Blue art deco garden, Yves Saint Laurent museum' },
                            { name: 'Medina Souks', type: 'Market', description: 'Maze of traditional markets' },
                            { name: 'Koutoubia Mosque', type: 'Religious', description: 'Landmark minaret visible citywide' }
                        ],
                        tips: [
                            'Bargain hard in souks - start at 30%',
                            'Stay in a riad for authentic experience',
                            'Watch for scams in Djemaa el-Fna',
                            'Eat at night food stalls for cheap eats'
                        ]
                    },
                    fes: {
                        id: 'fes',
                        name: 'Fes',
                        country: 'Morocco',
                        region: 'Africa',
                        description: 'World\'s largest car-free medina with medieval crafts and tanneries',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,200,000',
                        bestTime: 'April to May, October to November',
                        avgBudget: { budget: 35, mid: 70, luxury: 220 },
                        attractions: [
                            { name: 'Fes el Bali', type: 'Historic', description: 'UNESCO medieval medina' },
                            { name: 'Chouara Tannery', type: 'Craft', description: 'Ancient leather dyeing vats' },
                            { name: 'Al-Qarawiyyin University', type: 'Historic', description: 'World\'s oldest university' },
                            { name: 'Bou Inania Madrasa', type: 'Religious', description: 'Stunning Islamic school' },
                            { name: 'Mellah', type: 'Historic', description: 'Historic Jewish quarter' }
                        ],
                        tips: [
                            'Hire guide for medina - you will get lost',
                            'Tannery visit - take mint for smell',
                            'More authentic than Marrakech',
                            'Cooler temperatures due to altitude'
                        ]
                    },
                    chefchaouen: {
                        id: 'chefchaouen',
                        name: 'Chefchaouen',
                        country: 'Morocco',
                        region: 'Africa',
                        description: 'Stunning blue-painted mountain town in the Rif Mountains',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '45,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 30, mid: 60, luxury: 160 },
                        attractions: [
                            { name: 'Blue Medina', type: 'Historic', description: 'Famous blue-washed streets' },
                            { name: 'Kasbah', type: 'Castle', description: 'Fortress with garden and museum' },
                            { name: 'Plaza Uta el-Hammam', type: 'Square', description: 'Main square with cafes' },
                            { name: 'Spanish Mosque', type: 'Viewpoint', description: 'Sunset views over town' },
                            { name: 'Ras El Maa', type: 'Nature', description: 'Waterfall and local washhouses' }
                        ],
                        tips: [
                            'Most photogenic town in Morocco',
                            'Relaxed vibe - stay 2-3 days',
                            'Cannabis tourism but still illegal',
                            'Great hiking nearby'
                        ]
                    },
                    rabat: {
                        id: 'rabat',
                        name: 'Rabat',
                        country: 'Morocco',
                        region: 'Africa',
                        description: 'Elegant capital with UNESCO medina, royal palaces, and Atlantic coast',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '580,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 35, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Kasbah of the Udayas', type: 'Historic', description: 'Blue and white fortress quarter' },
                            { name: 'Hassan Tower', type: 'Landmark', description: 'Unfinished minaret landmark' },
                            { name: 'Mohammed V Mausoleum', type: 'Monument', description: 'Royal tomb with stunning interior' },
                            { name: 'Chellah', type: 'Ruins', description: 'Roman and medieval ruins with storks' },
                            { name: 'Royal Palace', type: 'Palace', description: 'Working royal palace gates' }
                        ],
                        tips: [
                            'Calmer than Marrakech or Fez',
                            'Good base for Casablanca day trip',
                            'Beach at Rabat-SalÃƒÆ’Ã‚Â©',
                            'Less tourist pressure'
                        ]
                    },
                    casablanca: {
                        id: 'casablanca',
                        name: 'Casablanca',
                        country: 'Morocco',
                        region: 'Africa',
                        description: 'Modern commercial capital with stunning Hassan II Mosque',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,700,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 45, mid: 90, luxury: 250 },
                        attractions: [
                            { name: 'Hassan II Mosque', type: 'Religious', description: 'Third largest mosque - on the ocean' },
                            { name: 'Corniche', type: 'Waterfront', description: 'Beach promenade and restaurants' },
                            { name: 'Old Medina', type: 'Historic', description: 'Small but atmospheric' },
                            { name: 'Morocco Mall', type: 'Shopping', description: 'Largest mall in Africa' },
                            { name: 'Rick\'s CafÃƒÆ’Ã‚Â©', type: 'Restaurant', description: 'Casablanca movie-inspired bar' }
                        ],
                        tips: [
                            'Hassan II Mosque only mosque non-Muslims can enter',
                            'Not as touristy as other Moroccan cities',
                            'Modern business city feel',
                            'Main international airport hub'
                        ]
                    },
                    tangier: {
                        id: 'tangier',
                        name: 'Tangier',
                        country: 'Morocco',
                        region: 'Africa',
                        description: 'Gateway to Africa where Mediterranean meets Atlantic',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '950,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 35, mid: 70, luxury: 190 },
                        attractions: [
                            { name: 'Kasbah', type: 'Historic', description: 'Fortress with museum and views' },
                            { name: 'Caves of Hercules', type: 'Nature', description: 'Legendary sea caves' },
                            { name: 'Cape Spartel', type: 'Viewpoint', description: 'Where two seas meet' },
                            { name: 'Petit Socco', type: 'Square', description: 'Historic cafe-lined square' },
                            { name: 'American Legation Museum', type: 'Museum', description: 'First US public property abroad' }
                        ],
                        tips: [
                            'Ferry from Spain (30 mins)',
                            'Lots of touts - stay firm',
                            'Bohemian history - writers and artists',
                            'Good starting point for Morocco'
                        ]
                    }
                }
            },
            nigeria: {
                id: 'nigeria',
                name: 'Nigeria',
                code: 'NG',
                flag: '🇳🇬',
                capital: 'Abuja',
                currency: 'Nigerian Naira (NGN)',
                language: 'English',
                description: 'Africa\'s most populous nation with vibrant music, Nollywood, and diverse cultures',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    lagos: {
                        id: 'lagos',
                        name: 'Lagos',
                        country: 'Nigeria',
                        region: 'Africa',
                        description: 'Megacity of Africa with Afrobeats, nightlife, and entrepreneurial energy',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '15,000,000',
                        bestTime: 'November to March (dry season)',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Lekki Conservation Centre', type: 'Nature', description: 'Canopy walkway and wildlife' },
                            { name: 'Nike Art Gallery', type: 'Gallery', description: 'Largest art gallery in West Africa' },
                            { name: 'Freedom Park', type: 'Historic', description: 'Former colonial prison, now arts venue' },
                            { name: 'Elegushi Beach', type: 'Beach', description: 'Popular Lagos beach scene' },
                            { name: 'New Afrika Shrine', type: 'Music', description: 'Fela Kuti\'s legendary music venue' }
                        ],
                        tips: [
                            'Traffic (go-slow) is legendary - plan ahead',
                            'Afrobeats nightlife is world-famous',
                            'Use Bolt/Uber for transport',
                            'Lagos Island vs Mainland - know the difference'
                        ]
                    },
                    abuja: {
                        id: 'abuja',
                        name: 'Abuja',
                        country: 'Nigeria',
                        region: 'Africa',
                        description: 'Purpose-built capital with modern architecture and natural surroundings',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,500,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 45, mid: 90, luxury: 250 },
                        attractions: [
                            { name: 'Aso Rock', type: 'Nature', description: 'Iconic rock formation' },
                            { name: 'Nigerian National Mosque', type: 'Religious', description: 'Golden-domed mosque' },
                            { name: 'Nigerian National Christian Centre', type: 'Religious', description: 'Opposite the mosque symbolically' },
                            { name: 'Millennium Park', type: 'Park', description: 'Largest park in city' },
                            { name: 'Gurara Falls', type: 'Waterfall', description: 'Waterfall day trip' }
                        ],
                        tips: [
                            'More organized than Lagos',
                            'Less tourist infrastructure',
                            'Government and embassy district',
                            'Good base for north Nigeria'
                        ]
                    }
                }
            },
            senegal: {
                id: 'senegal',
                name: 'Senegal',
                code: 'SN',
                flag: '🇸🇳',
                capital: 'Dakar',
                currency: 'West African CFA Franc (XOF)',
                language: 'French, Wolof',
                description: 'Gateway to West Africa with vibrant culture, music, and GorÃƒÆ’Ã‚Â©e Island history',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    dakar: {
                        id: 'dakar',
                        name: 'Dakar',
                        country: 'Senegal',
                        region: 'Africa',
                        description: 'Vibrant capital on Atlantic peninsula with music, markets, and slave trade history',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,100,000',
                        bestTime: 'November to May (dry season)',
                        avgBudget: { budget: 45, mid: 90, luxury: 250 },
                        attractions: [
                            { name: 'GorÃƒÆ’Ã‚Â©e Island', type: 'Historic', description: 'UNESCO slave trade memorial' },
                            { name: 'African Renaissance Monument', type: 'Landmark', description: 'Massive 49m bronze statue' },
                            { name: 'Sandaga Market', type: 'Market', description: 'Bustling central market' },
                            { name: 'Lake Retba (Pink Lake)', type: 'Nature', description: 'Pink-colored salt lake' },
                            { name: 'N\'Gor Island', type: 'Beach', description: 'Beach and surfing spot' }
                        ],
                        tips: [
                            'French is main language',
                            'Wolof greeting: "Nanga def"',
                            'Teranga (hospitality) is real',
                            'Try thieboudienne (fish and rice)'
                        ]
                    },
                    saintLouis: {
                        id: 'saintLouis',
                        name: 'Saint-Louis',
                        country: 'Senegal',
                        region: 'Africa',
                        description: 'UNESCO colonial town on river island with faded French architecture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '180,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                            { name: 'Saint-Louis Island', type: 'Historic', description: 'UNESCO colonial town center' },
                            { name: 'Faidherbe Bridge', type: 'Landmark', description: 'Iconic metal bridge' },
                            { name: 'Djoudj National Bird Sanctuary', type: 'Nature', description: 'UNESCO wetland bird reserve' },
                            { name: 'Langue de Barbarie', type: 'Nature', description: 'Sandy peninsula and fishing villages' },
                            { name: 'Colonial Architecture', type: 'Historic', description: 'Crumbling French colonial buildings' }
                        ],
                        tips: [
                            'Former capital of French West Africa',
                            'Jazz festival in May',
                            'More relaxed than Dakar',
                            'Hot in summer - visit winter'
                        ]
                    }
                }
            },
            southAfrica: {
                id: 'southAfrica',
                name: 'South Africa',
                code: 'ZA',
                flag: '🇿🇦',
                capital: 'Pretoria (Tshwane)',
                currency: 'South African Rand (ZAR)',
                language: 'English, Afrikaans, Zulu, and 8 others',
                description: 'Rainbow nation with safaris, wine country, Cape Town beauty, and complex history',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    capeTown: {
                        id: 'capeTown',
                        name: 'Cape Town',
                        country: 'South Africa',
                        region: 'Africa',
                        description: 'Stunning city beneath Table Mountain with wine, beaches, and penguins',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '4,700,000',
                        bestTime: 'November to March (summer)',
                        avgBudget: { budget: 50, mid: 100, luxury: 300 },
                        attractions: [
                            { name: 'Table Mountain', type: 'Nature', description: 'Iconic flat-topped mountain' },
                            { name: 'Cape of Good Hope', type: 'Nature', description: 'Where two oceans meet' },
                            { name: 'Boulders Beach Penguins', type: 'Wildlife', description: 'African penguin colony' },
                            { name: 'Robben Island', type: 'Historic', description: 'Mandela\'s prison island' },
                            { name: 'Winelands', type: 'Wine', description: 'Stellenbosch and Franschhoek' }
                        ],
                        tips: [
                            'Book Table Mountain cable car online',
                            'Rent a car for Cape Peninsula',
                            'Winelands are world-class',
                            'Be aware of safety in certain areas'
                        ]
                    },
                    johannesburg: {
                        id: 'johannesburg',
                        name: 'Johannesburg',
                        country: 'South Africa',
                        region: 'Africa',
                        description: 'Economic hub with apartheid history, arts scene, and gateway to Kruger',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '5,800,000',
                        bestTime: 'April to October (dry winter)',
                        avgBudget: { budget: 45, mid: 90, luxury: 260 },
                        attractions: [
                            { name: 'Apartheid Museum', type: 'Museum', description: 'Moving history of apartheid' },
                            { name: 'Soweto', type: 'Township', description: 'Historic township tours' },
                            { name: 'Maboneng', type: 'Neighborhood', description: 'Arts and culture precinct' },
                            { name: 'Constitution Hill', type: 'Historic', description: 'Prison turned human rights site' },
                            { name: 'Lion & Safari Park', type: 'Wildlife', description: 'Day safari near city' }
                        ],
                        tips: [
                            'Use Uber - don\'t walk at night',
                            'Gateway to Kruger safaris',
                            'Soweto tour is essential',
                            'Altitude 1,750m - sunny and dry'
                        ]
                    },
                    kruger: {
                        id: 'kruger',
                        name: 'Kruger National Park',
                        country: 'South Africa',
                        region: 'Africa',
                        description: 'Africa\'s premier safari park with Big Five and self-drive options',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '0',
                        bestTime: 'May to September (dry season - best wildlife)',
                        avgBudget: { budget: 80, mid: 200, luxury: 800 },
                        attractions: [
                            { name: 'Big Five Safaris', type: 'Wildlife', description: 'Lion, elephant, buffalo, leopard, rhino' },
                            { name: 'Self-Drive Safari', type: 'Safari', description: 'Drive yourself through the park' },
                            { name: 'Bush Walks', type: 'Adventure', description: 'Guided walking safaris' },
                            { name: 'Rest Camps', type: 'Accommodation', description: 'SANParks accommodation' },
                            { name: 'Private Reserves', type: 'Luxury', description: 'Sabi Sands and other luxury reserves' }
                        ],
                        tips: [
                            'Self-drive is budget-friendly',
                            'Book SANParks camps months ahead',
                            'Private reserves for guaranteed sightings',
                            'Malaria risk - take precautions'
                        ]
                    }
                }
            },
            tanzania: {
                id: 'tanzania',
                name: 'Tanzania',
                code: 'TZ',
                flag: '🇹🇿',
                capital: 'Dodoma',
                currency: 'Tanzanian Shilling (TZS)',
                language: 'Swahili, English',
                description: 'Serengeti migration, Kilimanjaro, Zanzibar beaches, and incredible wildlife',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    serengeti: {
                        id: 'serengeti',
                        name: 'Serengeti',
                        country: 'Tanzania',
                        region: 'Africa',
                        description: 'Africa\'s most famous safari park with the Great Migration',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '0',
                        bestTime: 'June to October (migration), January to February (calving)',
                        avgBudget: { budget: 200, mid: 400, luxury: 1200 },
                        attractions: [
                            { name: 'Great Migration', type: 'Wildlife', description: 'Millions of wildebeest crossing' },
                            { name: 'Big Five Safaris', type: 'Wildlife', description: 'All big five present' },
                            { name: 'Balloon Safari', type: 'Adventure', description: 'Hot air balloon over savannah' },
                            { name: 'Ngorongoro Crater', type: 'Nature', description: 'Volcanic caldera with wildlife' },
                            { name: 'Olduvai Gorge', type: 'Historic', description: 'Cradle of mankind' }
                        ],
                        tips: [
                            'Migration timing varies by month',
                            'Book safari months in advance',
                            'Mid-range tented camps offer value',
                            'Combine with Ngorongoro Crater'
                        ]
                    },
                    zanzibar: {
                        id: 'zanzibar',
                        name: 'Zanzibar',
                        country: 'Tanzania',
                        region: 'Africa',
                        description: 'Spice island with Stone Town heritage and pristine beaches',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,300,000',
                        bestTime: 'June to October, December to February',
                        avgBudget: { budget: 50, mid: 100, luxury: 350 },
                        attractions: [
                            { name: 'Stone Town', type: 'Historic', description: 'UNESCO World Heritage old town' },
                            { name: 'Nungwi Beach', type: 'Beach', description: 'Paradise white sand beaches' },
                            { name: 'Spice Tour', type: 'Tour', description: 'Visit spice plantations' },
                            { name: 'Prison Island', type: 'Island', description: 'Giant tortoises and history' },
                            { name: 'Forodhani Night Market', type: 'Market', description: 'Seafood street food at sunset' }
                        ],
                        tips: [
                            'Stone Town is Muslim - dress modestly',
                            'Beach areas are more relaxed',
                            'Combine safari with beach',
                            'Try Zanzibar pizza at night market'
                        ]
                    },
                    kilimanjaro: {
                        id: 'kilimanjaro',
                        name: 'Kilimanjaro',
                        country: 'Tanzania',
                        region: 'Africa',
                        description: 'Africa\'s highest peak and world\'s tallest freestanding mountain',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '0',
                        bestTime: 'January to March, June to October',
                        avgBudget: { budget: 150, mid: 250, luxury: 500 },
                        attractions: [
                            { name: 'Summit Climb', type: 'Adventure', description: 'Trek to Uhuru Peak (5,895m)' },
                            { name: 'Marangu Route', type: 'Trek', description: 'Coca-Cola route with huts' },
                            { name: 'Machame Route', type: 'Trek', description: 'Whiskey route - most scenic' },
                            { name: 'Lemosho Route', type: 'Trek', description: 'Quieter route with acclimatization' },
                            { name: 'Day Hikes', type: 'Hike', description: 'Lower slopes without summit' }
                        ],
                        tips: [
                            '5-9 days depending on route',
                            'Acclimatization is key',
                            'Book reputable operator',
                            'Physical preparation essential'
                        ]
                    }
                }
            },
            tunisia: {
                id: 'tunisia',
                name: 'Tunisia',
                code: 'TN',
                flag: '🇹🇳',
                capital: 'Tunis',
                currency: 'Tunisian Dinar (TND)',
                language: 'Arabic, French',
                description: 'Roman ruins, Saharan oases, Star Wars film locations, and Mediterranean coast',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    tunis: {
                        id: 'tunis',
                        name: 'Tunis',
                        country: 'Tunisia',
                        region: 'Africa',
                        description: 'Capital with ancient medina and Carthage ruins nearby',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,700,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Medina of Tunis', type: 'Historic', description: 'UNESCO World Heritage old town' },
                            { name: 'Carthage', type: 'Ancient', description: 'Ruins of ancient Carthage' },
                            { name: 'Bardo Museum', type: 'Museum', description: 'World\'s best Roman mosaics' },
                            { name: 'Sidi Bou Said', type: 'Town', description: 'Blue and white clifftop village' },
                            { name: 'Zitouna Mosque', type: 'Religious', description: 'Ancient mosque in medina' }
                        ],
                        tips: [
                            'Sidi Bou Said is magical',
                            'Combine Carthage and Bardo Museum',
                            'Haggle in the medina',
                            'French widely spoken'
                        ]
                    },
                    tozeur: {
                        id: 'tozeur',
                        name: 'Tozeur',
                        country: 'Tunisia',
                        region: 'Africa',
                        description: 'Desert oasis with Star Wars filming locations',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '40,000',
                        bestTime: 'October to April (avoid summer heat)',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Chott el Jerid', type: 'Nature', description: 'Vast salt lake with mirages' },
                            { name: 'Star Wars Locations', type: 'Film', description: 'Mos Espa and other sets' },
                            { name: 'Oasis Palms', type: 'Nature', description: 'Date palm groves' },
                            { name: 'Old Town', type: 'Historic', description: 'Traditional brick architecture' },
                            { name: 'Sahara Desert Tours', type: 'Adventure', description: 'Camel rides and camping' }
                        ],
                        tips: [
                            'Star Wars fans must visit',
                            'Extremely hot in summer',
                            'Gateway to Sahara adventures',
                            'Try fresh dates'
                        ]
                    }
                }
            },
            uganda: {
                id: 'uganda',
                name: 'Uganda',
                code: 'UG',
                flag: '🇺🇬',
                capital: 'Kampala',
                currency: 'Ugandan Shilling (UGX)',
                language: 'English, Swahili',
                description: 'Pearl of Africa with mountain gorillas, Nile source, and diverse wildlife',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    bwindi: {
                        id: 'bwindi',
                        name: 'Bwindi Impenetrable Forest',
                        country: 'Uganda',
                        region: 'Africa',
                        description: 'Home to half the world\'s mountain gorillas',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '0',
                        bestTime: 'June to August, December to February (dry seasons)',
                        avgBudget: { budget: 150, mid: 300, luxury: 800 },
                        attractions: [
                            { name: 'Gorilla Trekking', type: 'Wildlife', description: 'Hour with mountain gorilla family' },
                            { name: 'Batwa Trail', type: 'Culture', description: 'Indigenous forest people' },
                            { name: 'Forest Walks', type: 'Nature', description: 'Ancient rainforest hiking' },
                            { name: 'Bird Watching', type: 'Wildlife', description: '350+ bird species' },
                            { name: 'Gorilla Habituation', type: 'Wildlife', description: 'Full day with researchers' }
                        ],
                        tips: [
                            'Gorilla permits $700 USD - book months ahead',
                            'Physically demanding trek',
                            'Worth every penny',
                            'Combine with Queen Elizabeth NP'
                        ]
                    },
                    kampala: {
                        id: 'kampala',
                        name: 'Kampala',
                        country: 'Uganda',
                        region: 'Africa',
                        description: 'Bustling capital on seven hills with markets and nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,700,000',
                        bestTime: 'December to February, June to August',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Kasubi Tombs', type: 'Historic', description: 'Buganda kings burial site' },
                            { name: 'Uganda Museum', type: 'Museum', description: 'National history and culture' },
                            { name: 'Owino Market', type: 'Market', description: 'East Africa\'s largest market' },
                            { name: 'Ndere Cultural Centre', type: 'Culture', description: 'Traditional music and dance' },
                            { name: 'Jinja Day Trip', type: 'Nature', description: 'Source of the Nile' }
                        ],
                        tips: [
                            'Traffic can be intense',
                            'Rolex (egg and chapati) is must-try',
                            'Nightlife scene is vibrant',
                            'Gateway to gorilla treks'
                        ]
                    }
                }
            },
            zimbabwe: {
                id: 'zimbabwe',
                name: 'Zimbabwe',
                code: 'ZW',
                flag: '🇿🇼',
                capital: 'Harare',
                currency: 'Multiple currencies (USD common)',
                language: 'English, Shona, Ndebele',
                description: 'Victoria Falls, ancient ruins, and excellent safari experiences',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    victoriaFalls: {
                        id: 'victoriaFalls',
                        name: 'Victoria Falls',
                        country: 'Zimbabwe',
                        region: 'Africa',
                        description: 'The Smoke that Thunders - world\'s largest waterfall',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '35,000',
                        bestTime: 'February to May (high water), August to January (low water)',
                        avgBudget: { budget: 60, mid: 150, luxury: 500 },
                        attractions: [
                            { name: 'Victoria Falls', type: 'Nature', description: '1.7km wide, 108m tall waterfall' },
                            { name: 'Devil\'s Pool', type: 'Adventure', description: 'Swim at the edge (low water)' },
                            { name: 'Zambezi Sunset Cruise', type: 'Cruise', description: 'Sundowners on the river' },
                            { name: 'Bungee Jump', type: 'Adventure', description: '111m jump from bridge' },
                            { name: 'Helicopter Flight', type: 'Adventure', description: 'Flight of Angels over falls' }
                        ],
                        tips: [
                            'High water = more spray, less visibility',
                            'Low water = Devil\'s Pool accessible',
                            'Easy to combine with Zambia side',
                            'Adventure capital of Africa'
                        ]
                    },
                    hwange: {
                        id: 'hwange',
                        name: 'Hwange National Park',
                        country: 'Zimbabwe',
                        region: 'Africa',
                        description: 'Zimbabwe\'s largest park with massive elephant herds',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '0',
                        bestTime: 'July to October (dry season)',
                        avgBudget: { budget: 80, mid: 200, luxury: 600 },
                        attractions: [
                            { name: 'Elephant Herds', type: 'Wildlife', description: 'One of Africa\'s largest populations' },
                            { name: 'Big Five Safari', type: 'Wildlife', description: 'All big five present' },
                            { name: 'The Hide', type: 'Lodge', description: 'Waterhole viewing platform' },
                            { name: 'Night Drives', type: 'Safari', description: 'Nocturnal wildlife viewing' },
                            { name: 'Walking Safaris', type: 'Adventure', description: 'Guided bush walks' }
                        ],
                        tips: [
                            'Dry season waterholes concentrate wildlife',
                            'Combine with Victoria Falls',
                            'Less crowded than some parks',
                            'Painted dog (wild dog) sightings common'
                        ]
                    }
                }
            },
            seychelles: {
                id: 'seychelles',
                name: 'Seychelles',
                code: 'SC',
                flag: '🇸🇨',
                capital: 'Victoria',
                currency: 'Seychellois Rupee (SCR)',
                language: 'Seychellois Creole, English, French',
                description: 'Paradise islands with giant tortoises, unique granite boulders, and pristine beaches',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    mahe: {
                        id: 'mahe',
                        name: 'MahÃƒÆ’Ã‚Â© Island',
                        country: 'Seychelles',
                        region: 'Africa',
                        description: 'Main island with capital Victoria and stunning beaches',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '88,000',
                        bestTime: 'April to May, October to November',
                        avgBudget: { budget: 100, mid: 200, luxury: 600 },
                        attractions: [
                            { name: 'Victoria Market', type: 'Market', description: 'Colorful Creole market' },
                            { name: 'Morne Seychellois', type: 'Nature', description: 'Highest peak with hiking' },
                            { name: 'Beau Vallon Beach', type: 'Beach', description: 'Most popular beach' },
                            { name: 'Eden Island', type: 'Marina', description: 'Luxury marina development' },
                            { name: 'Botanical Gardens', type: 'Garden', description: 'Giant tortoises and tropical plants' }
                        ],
                        tips: [
                            'Gateway to all islands',
                            'Rent a car to explore beaches',
                            'Creole cuisine is delicious',
                            'Book ferries to other islands'
                        ]
                    },
                    praslin: {
                        id: 'praslin',
                        name: 'Praslin Island',
                        country: 'Seychelles',
                        region: 'Africa',
                        description: 'Home to UNESCO VallÃƒÆ’Ã‚Â©e de Mai with coco de mer palms',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '8,000',
                        bestTime: 'April to May, October to November',
                        avgBudget: { budget: 120, mid: 250, luxury: 800 },
                        attractions: [
                            { name: 'VallÃƒÆ’Ã‚Â©e de Mai', type: 'Nature', description: 'UNESCO prehistoric forest' },
                            { name: 'Anse Lazio', type: 'Beach', description: 'One of world\'s best beaches' },
                            { name: 'Anse Georgette', type: 'Beach', description: 'Pristine hidden beach' },
                            { name: 'Coco de Mer', type: 'Nature', description: 'Largest seed in the world' },
                            { name: 'Fond Ferdinand', type: 'Nature', description: 'Forest reserve with views' }
                        ],
                        tips: [
                            'Don\'t miss VallÃƒÆ’Ã‚Â©e de Mai',
                            'Beaches are world-class',
                            'Ferry or flight from MahÃƒÆ’Ã‚Â©',
                            'Base for La Digue day trips'
                        ]
                    },
                    laDigue: {
                        id: 'laDigue',
                        name: 'La Digue',
                        country: 'Seychelles',
                        region: 'Africa',
                        description: 'Car-free island with iconic Anse Source d\'Argent beach',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,000',
                        bestTime: 'April to May, October to November',
                        avgBudget: { budget: 100, mid: 200, luxury: 600 },
                        attractions: [
                            { name: 'Anse Source d\'Argent', type: 'Beach', description: 'Most photographed beach' },
                            { name: 'Giant Tortoises', type: 'Wildlife', description: 'Free-roaming Aldabra tortoises' },
                            { name: 'L\'Union Estate', type: 'Historic', description: 'Copra mill and vanilla' },
                            { name: 'Grand Anse', type: 'Beach', description: 'Wild and untouched beach' },
                            { name: 'Nid d\'Aigle', type: 'Viewpoint', description: 'Eagle\'s Nest viewpoint' }
                        ],
                        tips: [
                            'Rent a bicycle - no cars',
                            'Anse Source d\'Argent entry fee',
                            'Most romantic island',
                            'Book ahead in peak season'
                        ]
                    }
                }
            }
        }
    },
    middleEast: {
        id: 'middleEast',
        name: 'Middle East',
        emoji: '🕌',
        description: 'Ancient civilizations, religious sites, and modern marvels in the desert',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
        countries: {
            iran: {
                id: 'iran',
                name: 'Iran',
                code: 'IR',
                flag: '🇮🇷',
                capital: 'Tehran',
                currency: 'Iranian Rial (IRR)',
                language: 'Persian (Farsi)',
                description: 'Ancient Persia with stunning mosques, bazaars, and legendary hospitality',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    isfahan: {
                        id: 'isfahan',
                        name: 'Isfahan',
                        country: 'Iran',
                        region: 'Middle East',
                        description: 'Half the world - stunning Persian architecture and turquoise-tiled mosques',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,200,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 25, mid: 50, luxury: 130 },
                        attractions: [
                            { name: 'Naqsh-e Jahan Square', type: 'Square', description: 'UNESCO World Heritage square' },
                            { name: 'Shah Mosque', type: 'Mosque', description: 'Stunning blue-tiled masterpiece' },
                            { name: 'Si-o-se-pol Bridge', type: 'Bridge', description: 'Historic 33-arch bridge' },
                            { name: 'Grand Bazaar', type: 'Market', description: 'One of world\'s oldest bazaars' },
                            { name: 'Ali Qapu Palace', type: 'Palace', description: 'Royal palace with music room' }
                        ],
                        tips: [
                            'Isfahan nesf-e jahan (half the world)',
                            'Dress conservatively - women cover hair',
                            'People incredibly welcoming',
                            'Cash only - no international cards'
                        ]
                    },
                    shiraz: {
                        id: 'shiraz',
                        name: 'Shiraz',
                        country: 'Iran',
                        region: 'Middle East',
                        description: 'City of poets, gardens, and gateway to ancient Persepolis',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,900,000',
                        bestTime: 'March to May, October to November',
                        avgBudget: { budget: 25, mid: 50, luxury: 120 },
                        attractions: [
                            { name: 'Persepolis', type: 'Ancient', description: 'Ruins of ancient Persian capital' },
                            { name: 'Nasir ol-Molk Mosque', type: 'Mosque', description: 'Pink mosque with rainbow light' },
                            { name: 'Eram Garden', type: 'Garden', description: 'UNESCO Persian garden' },
                            { name: 'Tomb of Hafez', type: 'Shrine', description: 'Beloved poet\'s memorial' },
                            { name: 'Vakil Bazaar', type: 'Market', description: 'Historic bazaar complex' }
                        ],
                        tips: [
                            'Pink Mosque best at sunrise',
                            'Persepolis day trip essential',
                            'City of poets - Hafez and Saadi',
                            'Try Shirazi salad and faloodeh'
                        ]
                    }
                }
            },
            oman: {
                id: 'oman',
                name: 'Oman',
                code: 'OM',
                flag: '🇴🇲',
                capital: 'Muscat',
                currency: 'Omani Rial (OMR)',
                language: 'Arabic',
                description: 'Dramatic wadis, desert dunes, traditional souks, and friendly hospitality',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    muscat: {
                        id: 'muscat',
                        name: 'Muscat',
                        country: 'Oman',
                        region: 'Middle East',
                        description: 'Elegant capital with grand mosque, souks, and mountain backdrop',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,500,000',
                        bestTime: 'October to April',
                        avgBudget: { budget: 70, mid: 140, luxury: 380 },
                        attractions: [
                            { name: 'Sultan Qaboos Grand Mosque', type: 'Religious', description: 'Stunning modern mosque open to visitors' },
                            { name: 'Mutrah Souq', type: 'Market', description: 'Traditional Arabian market' },
                            { name: 'Royal Opera House', type: 'Arts', description: 'World-class opera venue' },
                            { name: 'Al Alam Palace', type: 'Palace', description: 'Ceremonial palace with forts' },
                            { name: 'Mutrah Corniche', type: 'Waterfront', description: 'Scenic harbor promenade' }
                        ],
                        tips: [
                            'Most welcoming Gulf country',
                            'Dress modestly - conservative culture',
                            'Rent car for wadis and desert',
                            'Safer than most Western cities'
                        ]
                    },
                    wahiba: {
                        id: 'wahiba',
                        name: 'Wahiba Sands',
                        country: 'Oman',
                        region: 'Middle East',
                        description: 'Golden desert dunes with Bedouin camps and adventure activities',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '0',
                        bestTime: 'October to April',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Desert Camps', type: 'Accommodation', description: 'Traditional Bedouin camp stays' },
                            { name: 'Dune Bashing', type: 'Adventure', description: '4x4 desert driving' },
                            { name: 'Camel Rides', type: 'Activity', description: 'Sunset camel treks' },
                            { name: 'Stargazing', type: 'Nature', description: 'Clear desert night skies' },
                            { name: 'Bedouin Culture', type: 'Culture', description: 'Traditional hospitality' }
                        ],
                        tips: [
                            'Book desert camp in advance',
                            '4x4 required for dunes',
                            'Combine with Wadi Bani Khalid',
                            'Summer too hot - visit winter'
                        ]
                    }
                }
            },
            qatar: {
                id: 'qatar',
                name: 'Qatar',
                code: 'QA',
                flag: '🇶🇦',
                capital: 'Doha',
                currency: 'Qatari Riyal (QAR)',
                language: 'Arabic',
                description: 'Ultra-modern skyline, world-class museums, and desert adventures',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    doha: {
                        id: 'doha',
                        name: 'Doha',
                        country: 'Qatar',
                        region: 'Middle East',
                        description: 'Futuristic capital with stunning museums and pearl-diving heritage',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,400,000',
                        bestTime: 'November to March',
                        avgBudget: { budget: 100, mid: 200, luxury: 550 },
                        attractions: [
                            { name: 'Museum of Islamic Art', type: 'Museum', description: 'IM Pei-designed masterpiece' },
                            { name: 'Souq Waqif', type: 'Market', description: 'Restored traditional market' },
                            { name: 'The Pearl', type: 'District', description: 'Artificial island luxury district' },
                            { name: 'National Museum of Qatar', type: 'Museum', description: 'Desert rose-shaped building' },
                            { name: 'Katara Cultural Village', type: 'Culture', description: 'Arts and cultural district' }
                        ],
                        tips: [
                            'Alcohol only in licensed hotels',
                            'Dress modestly in public',
                            'Great for layovers',
                            'Desert safari to inland sea'
                        ]
                    }
                }
            },
            saudiArabia: {
                id: 'saudiArabia',
                name: 'Saudi Arabia',
                code: 'SA',
                flag: '🇸🇦',
                capital: 'Riyadh',
                currency: 'Saudi Riyal (SAR)',
                language: 'Arabic',
                description: 'Opening to tourism with ancient sites, Red Sea diving, and Islamic heritage',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    riyadh: {
                        id: 'riyadh',
                        name: 'Riyadh',
                        country: 'Saudi Arabia',
                        region: 'Middle East',
                        description: 'Capital rapidly modernizing with entertainment and cultural attractions',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '7,500,000',
                        bestTime: 'November to February',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'Kingdom Centre Tower', type: 'Landmark', description: 'Iconic skybridge skyscraper' },
                            { name: 'Diriyah', type: 'Historic', description: 'UNESCO birthplace of Saudi kingdom' },
                            { name: 'National Museum', type: 'Museum', description: 'Saudi history and culture' },
                            { name: 'Edge of the World', type: 'Nature', description: 'Dramatic cliff escarpment' },
                            { name: 'Boulevard Riyadh', type: 'Entertainment', description: 'Massive entertainment zone' }
                        ],
                        tips: [
                            'Rapidly changing for tourists',
                            'Women no longer need abaya (2023)',
                            'Weekend is Friday-Saturday',
                            'Alcohol is prohibited'
                        ]
                    },
                    alUla: {
                        id: 'alUla',
                        name: 'AlUla',
                        country: 'Saudi Arabia',
                        region: 'Middle East',
                        description: 'Ancient Nabataean tombs in dramatic desert landscape - Saudi\'s hidden gem',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '5,000',
                        bestTime: 'October to March',
                        avgBudget: { budget: 100, mid: 200, luxury: 600 },
                        attractions: [
                            { name: 'Hegra (Mada\'in Salih)', type: 'Ancient', description: 'UNESCO Nabataean tombs like Petra' },
                            { name: 'Elephant Rock', type: 'Nature', description: 'Iconic elephant-shaped rock' },
                            { name: 'Old Town AlUla', type: 'Historic', description: 'Abandoned mud-brick village' },
                            { name: 'Mirror Concert Hall', type: 'Architecture', description: 'Mirrored building in desert' },
                            { name: 'Stargazing', type: 'Nature', description: 'Dark skies preserve' }
                        ],
                        tips: [
                            'Saudi\'s top tourist destination',
                            'Book Hegra tickets in advance',
                            'Luxury resorts opening rapidly',
                            'Similar to Petra but less crowded'
                        ]
                    },
                    makkah: {
                        id: 'makkah',
                        name: 'Makkah (Mecca)',
                        country: 'Saudi Arabia',
                        region: 'Middle East',
                        description: 'Islam\'s holiest city - birthplace of Prophet Muhammad and home of the Kaaba',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,000,000',
                        bestTime: 'Year-round (avoid Hajj unless on pilgrimage)',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Masjid al-Haram', type: 'Religious', description: 'Sacred Mosque surrounding Kaaba' },
                            { name: 'Kaaba', type: 'Religious', description: 'Most sacred site in Islam' },
                            { name: 'Jabal al-Nour', type: 'Religious', description: 'Mountain with Cave of Hira' },
                            { name: 'Makkah Clock Tower', type: 'Landmark', description: 'Tallest clock tower in world' },
                            { name: 'Mina', type: 'Religious', description: 'Tent city for Hajj rituals' }
                        ],
                        tips: [
                            'MUSLIMS ONLY - non-Muslims prohibited',
                            'Hajj is fifth pillar of Islam',
                            'Umrah can be performed year-round',
                            'Extremely crowded during Hajj season'
                        ]
                    },
                    medina: {
                        id: 'medina',
                        name: 'Medina',
                        country: 'Saudi Arabia',
                        region: 'Middle East',
                        description: 'Islam\'s second holiest city with Prophet Muhammad\'s mosque and tomb',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,500,000',
                        bestTime: 'Year-round',
                        avgBudget: { budget: 80, mid: 160, luxury: 400 },
                        attractions: [
                            { name: 'Al-Masjid an-Nabawi', type: 'Religious', description: 'Prophet\'s Mosque with green dome' },
                            { name: 'Quba Mosque', type: 'Religious', description: 'First mosque built in Islam' },
                            { name: 'Mount Uhud', type: 'Religious', description: 'Site of historic battle' },
                            { name: 'Qiblatain Mosque', type: 'Religious', description: 'Mosque of two qiblas' },
                            { name: 'Date Farms', type: 'Agriculture', description: 'Famous Ajwa dates' }
                        ],
                        tips: [
                            'MUSLIMS ONLY - non-Muslims prohibited in sacred areas',
                            'Peaceful compared to Makkah',
                            'Try Medina dates',
                            'Combine with Makkah for Umrah'
                        ]
                    },
                    jeddah: {
                        id: 'jeddah',
                        name: 'Jeddah',
                        country: 'Saudi Arabia',
                        region: 'Middle East',
                        description: 'Red Sea port city with UNESCO old town and gateway to Makkah',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '4,700,000',
                        bestTime: 'November to March',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                            { name: 'Al-Balad', type: 'Historic', description: 'UNESCO historic old town' },
                            { name: 'King Fahd Fountain', type: 'Landmark', description: 'World\'s tallest fountain' },
                            { name: 'Red Sea Corniche', type: 'Waterfront', description: '30km coastal promenade' },
                            { name: 'Floating Mosque', type: 'Religious', description: 'Mosque built over Red Sea' },
                            { name: 'Red Sea Diving', type: 'Adventure', description: 'World-class diving sites' }
                        ],
                        tips: [
                            'Gateway for Hajj and Umrah pilgrims',
                            'More liberal than other Saudi cities',
                            'Al-Balad at night is magical',
                            'Great Red Sea diving and snorkeling'
                        ]
                    },
                    abha: {
                        id: 'abha',
                        name: 'Abha',
                        country: 'Saudi Arabia',
                        region: 'Middle East',
                        description: 'Cool mountain city in Asir region with mist and unique architecture',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '240,000',
                        bestTime: 'Year-round (escape summer heat)',
                        avgBudget: { budget: 60, mid: 120, luxury: 280 },
                        attractions: [
                            { name: 'Jabal Sawda', type: 'Nature', description: 'Saudi Arabia\'s highest peak' },
                            { name: 'Habala Village', type: 'Historic', description: 'Hanging village on cliff' },
                            { name: 'Asir National Park', type: 'Nature', description: 'Mountains and forests' },
                            { name: 'Rijal Almaa', type: 'Village', description: 'UNESCO painted stone village' },
                            { name: 'Cable Car', type: 'Transport', description: 'Views over misty mountains' }
                        ],
                        tips: [
                            'Coolest climate in Saudi',
                            'Try Asiri honey',
                            'Colorful Asiri architecture',
                            'Popular with Saudi tourists'
                        ]
                    },
                    dammam: {
                        id: 'dammam',
                        name: 'Dammam & Khobar',
                        country: 'Saudi Arabia',
                        region: 'Middle East',
                        description: 'Eastern Province cities with oil heritage and Gulf beaches',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,200,000',
                        bestTime: 'November to March',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                            { name: 'Corniche', type: 'Waterfront', description: 'Arabian Gulf waterfront' },
                            { name: 'King Fahd Causeway', type: 'Landmark', description: 'Bridge to Bahrain' },
                            { name: 'Half Moon Bay', type: 'Beach', description: 'Popular beach destination' },
                            { name: 'Tarout Island', type: 'Historic', description: 'Ancient island with fort' },
                            { name: 'Scitech Museum', type: 'Museum', description: 'Science and technology' }
                        ],
                        tips: [
                            'Cross to Bahrain via causeway',
                            'Oil industry center',
                            'Khobar is more modern/upscale',
                            'Beach destination for Saudis'
                        ]
                    },
                    taif: {
                        id: 'taif',
                        name: 'Taif',
                        country: 'Saudi Arabia',
                        region: 'Middle East',
                        description: 'Mountain resort city famous for roses, honey, and cool climate',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '690,000',
                        bestTime: 'March to October',
                        avgBudget: { budget: 50, mid: 100, luxury: 250 },
                        attractions: [
                            { name: 'Rose Farms', type: 'Agriculture', description: 'Taif rose cultivation' },
                            { name: 'Shubra Palace', type: 'Historic', description: 'Historic regional museum' },
                            { name: 'Souq Okaz', type: 'Historic', description: 'Ancient poetry market' },
                            { name: 'Al Hada Mountain', type: 'Nature', description: 'Scenic mountain with cable car' },
                            { name: 'Rudaf Park', type: 'Park', description: 'Rose gardens' }
                        ],
                        tips: [
                            'City of Roses - April is rose season',
                            'Famous Taif honey',
                            'Summer escape for Saudis',
                            'Near Makkah - non-Muslims welcome'
                        ]
                    }
                }
            },
            israel: {
                id: 'israel',
                name: 'Israel',
                code: 'IL',
                flag: '🇮🇱',
                capital: 'Jerusalem',
                currency: 'Israeli New Shekel (ILS)',
                language: 'Hebrew, Arabic',
                description: 'Holy Land with ancient religious sites, Mediterranean beaches, and vibrant culture',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    jerusalem: {
                        id: 'jerusalem',
                        name: 'Jerusalem',
                        country: 'Israel',
                        region: 'Middle East',
                        description: 'Holy city for three religions with ancient walls and spiritual significance',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '950,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                            { name: 'Western Wall', type: 'Religious', description: 'Judaism\'s holiest site' },
                            { name: 'Church of the Holy Sepulchre', type: 'Religious', description: 'Christianity\'s holiest site' },
                            { name: 'Dome of the Rock', type: 'Religious', description: 'Iconic golden-domed shrine' },
                            { name: 'Old City', type: 'Historic', description: 'Four quarters within ancient walls' },
                            { name: 'Yad Vashem', type: 'Memorial', description: 'Holocaust memorial museum' }
                        ],
                        tips: [
                            'Dress modestly at religious sites',
                            'Shabbat (Sat) - limited transport/shops',
                            'Security checks are normal - be patient',
                            'Walk the ramparts for city views'
                        ]
                    },
                    telAviv: {
                        id: 'telAviv',
                        name: 'Tel Aviv',
                        country: 'Israel',
                        region: 'Middle East',
                        description: 'Mediterranean party city with Bauhaus architecture, beaches, and nightlife',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '460,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                            { name: 'White City', type: 'Architecture', description: 'UNESCO Bauhaus buildings' },
                            { name: 'Jaffa', type: 'Historic', description: 'Ancient port city, now trendy' },
                            { name: 'Carmel Market', type: 'Market', description: 'Vibrant shuk with food and goods' },
                            { name: 'Gordon Beach', type: 'Beach', description: 'Popular city beach' },
                            { name: 'Rothschild Boulevard', type: 'Street', description: 'Cafes, Bauhaus, and nightlife' }
                        ],
                        tips: [
                            'Nightlife starts very late',
                            'Friday afternoon to Saturday is Shabbat',
                            'Try shakshuka and hummus everywhere',
                            'Very LGBTQ+ friendly'
                        ]
                    }
                }
            },
            jordan: {
                id: 'jordan',
                name: 'Jordan',
                code: 'JO',
                flag: '🇯🇴',
                capital: 'Amman',
                currency: 'Jordanian Dinar (JOD)',
                language: 'Arabic',
                description: 'Ancient Petra, Dead Sea floating, and warm Bedouin hospitality',
                image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=800',
                cities: {
                    petra: {
                        id: 'petra',
                        name: 'Petra',
                        country: 'Jordan',
                        region: 'Middle East',
                        description: 'Lost city carved from rose-red cliffs - one of the New Seven Wonders',
                        image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=800',
                        population: '35,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 60, mid: 120, luxury: 350 },
                        attractions: [
                            { name: 'The Treasury (Al-Khazneh)', type: 'Ancient', description: 'Iconic facade carved from rock' },
                            { name: 'The Monastery (Ad-Deir)', type: 'Ancient', description: 'Larger facade - 800 steps up' },
                            { name: 'The Siq', type: 'Nature', description: 'Dramatic canyon entrance' },
                            { name: 'Royal Tombs', type: 'Ancient', description: 'Impressive rock-cut facades' },
                            { name: 'Petra by Night', type: 'Experience', description: 'Candlelit Treasury visit' }
                        ],
                        tips: [
                            'Get 2-day pass - Petra is huge',
                            'Start early to beat heat and crowds',
                            'Wear good walking shoes',
                            'Book Petra by Night in advance'
                        ]
                    },
                    amman: {
                        id: 'amman',
                        name: 'Amman',
                        country: 'Jordan',
                        region: 'Middle East',
                        description: 'Modern capital with Roman ruins, citadel views, and excellent cuisine',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '4,300,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 45, mid: 90, luxury: 250 },
                        attractions: [
                            { name: 'Citadel', type: 'Ancient', description: 'Ancient hilltop with Roman Temple' },
                            { name: 'Roman Theatre', type: 'Ancient', description: '6000-seat Roman amphitheater' },
                            { name: 'Rainbow Street', type: 'Street', description: 'Trendy cafes and shops' },
                            { name: 'King Abdullah Mosque', type: 'Religious', description: 'Blue-domed modern mosque' },
                            { name: 'Jordan Museum', type: 'Museum', description: 'Dead Sea Scrolls and history' }
                        ],
                        tips: [
                            'Fridays most things close until evening',
                            'Try mansaf (national dish)',
                            'Downtown souks for shopping',
                            'Uber works well here'
                        ]
                    },
                    deadSea: {
                        id: 'deadSea',
                        name: 'Dead Sea',
                        country: 'Jordan',
                        region: 'Middle East',
                        description: 'Earth\'s lowest point where you float effortlessly in mineral-rich waters',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '5,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 70, mid: 140, luxury: 400 },
                        attractions: [
                            { name: 'Dead Sea Floating', type: 'Experience', description: 'Float in the hypersaline water' },
                            { name: 'Mud Treatment', type: 'Spa', description: 'Mineral-rich mud body treatment' },
                            { name: 'Spa Resorts', type: 'Spa', description: 'Luxury spa hotels along shore' },
                            { name: 'Panoramic Complex', type: 'Viewpoint', description: 'Views of Dead Sea' },
                            { name: 'Wadi Mujib', type: 'Nature', description: 'Canyon water hiking adventure' }
                        ],
                        tips: [
                            'Don\'t shave before floating - it stings',
                            'Avoid getting water in eyes',
                            'Dead Sea is shrinking - visit now',
                            'Resorts are expensive - consider day trip'
                        ]
                    }
                }
            },
            lebanon: {
                id: 'lebanon',
                name: 'Lebanon',
                code: 'LB',
                flag: '🇱🇧',
                capital: 'Beirut',
                currency: 'Lebanese Pound (LBP)',
                language: 'Arabic, French',
                description: 'Phoenician ruins, Mediterranean coast, cedars, and legendary cuisine and nightlife',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    beirut: {
                        id: 'beirut',
                        name: 'Beirut',
                        country: 'Lebanon',
                        region: 'Middle East',
                        description: 'Resilient Mediterranean capital with ancient ruins, vibrant nightlife, and amazing food',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,400,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 50, mid: 100, luxury: 300 },
                        attractions: [
                            { name: 'National Museum', type: 'Museum', description: 'Archaeological treasures' },
                            { name: 'Pigeon Rocks', type: 'Nature', description: 'Iconic sea stacks at Raouche' },
                            { name: 'Gemmayzeh', type: 'Neighborhood', description: 'Trendy bars and nightlife' },
                            { name: 'Downtown Beirut', type: 'Historic', description: 'Rebuilt historic center' },
                            { name: 'Hamra', type: 'Neighborhood', description: 'Intellectual hub with cafes' }
                        ],
                        tips: [
                            'Check travel advisories before visiting',
                            'Lebanese food is world-class',
                            'Day trips to Byblos, Baalbek, Jeita Grotto',
                            'Nightlife is legendary'
                        ]
                    },
                    byblos: {
                        id: 'byblos',
                        name: 'Byblos',
                        country: 'Lebanon',
                        region: 'Middle East',
                        description: 'One of world\'s oldest continuously inhabited cities with Phoenician ruins',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '40,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 45, mid: 90, luxury: 250 },
                        attractions: [
                            { name: 'Byblos Castle', type: 'Castle', description: 'Crusader castle with views' },
                            { name: 'Ancient Ruins', type: 'Ancient', description: 'Phoenician, Roman, Crusader layers' },
                            { name: 'Old Souk', type: 'Market', description: 'Charming old market streets' },
                            { name: 'Byblos Harbor', type: 'Harbor', description: 'Picturesque fishing harbor' },
                            { name: 'St. John the Baptist Church', type: 'Religious', description: 'Crusader-era church' }
                        ],
                        tips: [
                            'Word \'Bible\' comes from Byblos',
                            'Perfect half-day trip from Beirut',
                            'Fresh fish at the harbor restaurants',
                            'Summer music festival is world-famous'
                        ]
                    }
                }
            },
            turkey: {
                id: 'turkey',
                name: 'Turkey',
                code: 'TR',
                flag: '🇹🇷',
                capital: 'Ankara',
                currency: 'Turkish Lira (TRY)',
                language: 'Turkish',
                description: 'Where East meets West with Byzantine, Ottoman heritage and stunning landscapes',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    istanbul: {
                        id: 'istanbul',
                        name: 'Istanbul',
                        country: 'Turkey',
                        region: 'Middle East',
                        description: 'Transcontinental city spanning Europe and Asia with Byzantine and Ottoman wonders',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '15,500,000',
                        bestTime: 'April to May, September to November',
                        avgBudget: { budget: 45, mid: 90, luxury: 280 },
                        attractions: [
                            { name: 'Hagia Sophia', type: 'Religious', description: 'Byzantine masterpiece turned mosque' },
                            { name: 'Blue Mosque', type: 'Religious', description: 'Sultan Ahmed Mosque with blue tiles' },
                            { name: 'Grand Bazaar', type: 'Market', description: 'One of world\'s oldest covered markets' },
                            { name: 'Topkapi Palace', type: 'Palace', description: 'Ottoman sultans\' residence' },
                            { name: 'Bosphorus Cruise', type: 'Cruise', description: 'Ferry between two continents' }
                        ],
                        tips: [
                            'Istanbulkart for all transport',
                            'Dress modestly for mosques',
                            'Haggle in Grand Bazaar',
                            'Turkish breakfast is epic'
                        ]
                    },
                    cappadocia: {
                        id: 'cappadocia',
                        name: 'Cappadocia',
                        country: 'Turkey',
                        region: 'Middle East',
                        description: 'Surreal landscape of fairy chimneys, cave hotels, and hot air balloons',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '50,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 50, mid: 100, luxury: 350 },
                        attractions: [
                            { name: 'Hot Air Balloon', type: 'Adventure', description: 'Iconic sunrise balloon flight' },
                            { name: 'Goreme Open Air Museum', type: 'Historic', description: 'Rock-cut churches with frescoes' },
                            { name: 'Underground Cities', type: 'Historic', description: 'Derinkuyu and Kaymakli' },
                            { name: 'Rose Valley', type: 'Nature', description: 'Hiking among fairy chimneys' },
                            { name: 'Cave Hotels', type: 'Accommodation', description: 'Stay in a cave room' }
                        ],
                        tips: [
                            'Book balloon ride well ahead',
                            'Flights cancel in bad weather',
                            'Stay in a cave hotel',
                            'Visit Red and Rose Valleys hiking'
                        ]
                    },
                    ephesus: {
                        id: 'ephesus',
                        name: 'Ephesus',
                        country: 'Turkey',
                        region: 'Middle East',
                        description: 'One of the best-preserved ancient cities with Library of Celsus',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '30,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Library of Celsus', type: 'Ancient', description: 'Iconic two-story facade' },
                            { name: 'Great Theatre', type: 'Ancient', description: '25,000-seat Roman theatre' },
                            { name: 'Terrace Houses', type: 'Ancient', description: 'Luxury Roman homes with mosaics' },
                            { name: 'House of Virgin Mary', type: 'Religious', description: 'Believed final home of Mary' },
                            { name: 'Temple of Artemis', type: 'Ancient', description: 'One of Seven Wonders remnant' }
                        ],
                        tips: [
                            'Base in Selcuk or Kusadasi',
                            'Arrive early to beat cruise crowds',
                            'Terrace Houses worth extra fee',
                            'Combine with Pamukkale'
                        ]
                    },
                    antalya: {
                        id: 'antalya',
                        name: 'Antalya',
                        country: 'Turkey',
                        region: 'Middle East',
                        description: 'Turkish Riviera hub with Roman harbor, beaches, and gateway to coast',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,500,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 40, mid: 80, luxury: 220 },
                        attractions: [
                            { name: 'KaleiÃƒÆ’Ã‚Â§i', type: 'Historic', description: 'Charming old quarter with Roman harbor' },
                            { name: 'Hadrian\'s Gate', type: 'Ancient', description: 'Roman triumphal arch' },
                            { name: 'Antalya Museum', type: 'Museum', description: 'One of Turkey\'s best' },
                            { name: 'DÃƒÆ’Ã‚Â¼den Waterfalls', type: 'Nature', description: 'Waterfall dropping into sea' },
                            { name: 'KonyaaltÃƒâ€žÃ‚Â± Beach', type: 'Beach', description: 'Main city beach' }
                        ],
                        tips: [
                            'Gateway to Turkish Riviera',
                            'All-inclusive resorts popular',
                            'Day trips to Perge, Aspendos, Side',
                            'Hot summers - peak season busy'
                        ]
                    },
                    ankara: {
                        id: 'ankara',
                        name: 'Ankara',
                        country: 'Turkey',
                        region: 'Middle East',
                        description: 'Modern capital with AtatÃƒÆ’Ã‚Â¼rk\'s mausoleum and ancient Anatolian history',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '5,700,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'AnÃƒâ€žÃ‚Â±tkabir', type: 'Memorial', description: 'AtatÃƒÆ’Ã‚Â¼rk\'s impressive mausoleum' },
                            { name: 'Museum of Anatolian Civilizations', type: 'Museum', description: 'Best archaeology in Turkey' },
                            { name: 'Ankara Castle', type: 'Castle', description: 'Historic citadel with views' },
                            { name: 'Kocatepe Mosque', type: 'Religious', description: 'Largest mosque in Ankara' },
                            { name: 'Atakule Tower', type: 'Landmark', description: 'Rotating restaurant with views' }
                        ],
                        tips: [
                            'Capital since 1923',
                            'Less touristy than Istanbul',
                            'Continental climate - cold winters',
                            'Important for understanding modern Turkey'
                        ]
                    },
                    izmir: {
                        id: 'izmir',
                        name: 'Izmir',
                        country: 'Turkey',
                        region: 'Middle East',
                        description: 'Liberal coastal city with waterfront promenade and gateway to ancient sites',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '4,400,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 35, mid: 75, luxury: 200 },
                        attractions: [
                            { name: 'Kordon', type: 'Waterfront', description: 'Sea-front promenade' },
                            { name: 'KemeraltÃƒâ€žÃ‚Â± Bazaar', type: 'Market', description: 'Historic covered market' },
                            { name: 'Agora of Smyrna', type: 'Ancient', description: 'Roman market ruins' },
                            { name: 'Clock Tower', type: 'Landmark', description: 'Iconic Konak Square landmark' },
                            { name: 'Elevator (AsansÃƒÆ’Ã‚Â¶r)', type: 'Landmark', description: 'Historic lift to Jewish quarter' }
                        ],
                        tips: [
                            'Turkey\'s third largest city',
                            'Most liberal city in Turkey',
                            'Gateway to Ephesus and ÃƒÆ’Ã¢â‚¬Â¡eÃƒâ€¦Ã…Â¸me',
                            'Great seafood along Kordon'
                        ]
                    },
                    kusadasi: {
                        id: 'kusadasi',
                        name: 'KuÃƒâ€¦Ã…Â¸adasÃƒâ€žÃ‚Â±',
                        country: 'Turkey',
                        region: 'Middle East',
                        description: 'Popular cruise port and beach resort near Ephesus',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '115,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Ladies Beach', type: 'Beach', description: 'Popular beach with facilities' },
                            { name: 'Pigeon Island', type: 'Historic', description: 'Castle on small peninsula' },
                            { name: 'Grand Bazaar', type: 'Market', description: 'Leather and souvenirs' },
                            { name: 'Dilek Peninsula', type: 'Nature', description: 'National park with beaches' },
                            { name: 'Ephesus Day Trip', type: 'Tour', description: 'Ancient city 30 mins away' }
                        ],
                        tips: [
                            'Busy when cruise ships in port',
                            'Base for Ephesus visits',
                            'All-inclusive resorts popular',
                            'Good nightlife in summer'
                        ]
                    },
                    bursa: {
                        id: 'bursa',
                        name: 'Bursa',
                        country: 'Turkey',
                        region: 'Middle East',
                        description: 'First Ottoman capital with thermal baths, silk, and mountain skiing',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,100,000',
                        bestTime: 'April to October (winter for skiing)',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Green Mosque', type: 'Religious', description: 'Beautiful early Ottoman mosque' },
                            { name: 'Grand Mosque (Ulu Cami)', type: 'Religious', description: '20-domed Ottoman masterpiece' },
                            { name: 'Koza Han', type: 'Market', description: 'Historic silk bazaar' },
                            { name: 'UludaÃƒâ€žÃ…Â¸', type: 'Nature', description: 'Mountain resort and ski area' },
                            { name: 'CumalÃƒâ€žÃ‚Â±kÃƒâ€žÃ‚Â±zÃƒâ€žÃ‚Â±k', type: 'Village', description: 'UNESCO Ottoman village' }
                        ],
                        tips: [
                            'Try Ãƒâ€žÃ‚Â°skender kebab - invented here',
                            'Day trip from Istanbul by ferry',
                            'Thermal baths for relaxation',
                            'Skiing in winter at UludaÃƒâ€žÃ…Â¸'
                        ]
                    }
                }
            },
            kuwait: {
                id: 'kuwait',
                name: 'Kuwait',
                code: 'KW',
                flag: '🇰🇼',
                capital: 'Kuwait City',
                currency: 'Kuwaiti Dinar (KWD)',
                language: 'Arabic',
                description: 'Oil-rich Gulf state with modern towers and traditional souks',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    kuwaitCity: {
                        id: 'kuwaitCity',
                        name: 'Kuwait City',
                        country: 'Kuwait',
                        region: 'Middle East',
                        description: 'Modern Gulf capital with iconic towers and traditional markets',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,400,000',
                        bestTime: 'November to April (avoid summer heat)',
                        avgBudget: { budget: 80, mid: 160, luxury: 400 },
                        attractions: [
                            { name: 'Kuwait Towers', type: 'Landmark', description: 'Iconic blue-tiled water towers' },
                            { name: 'Souk Mubarakiya', type: 'Market', description: 'Traditional market' },
                            { name: 'Grand Mosque', type: 'Religious', description: 'Largest mosque in Kuwait' },
                            { name: 'Liberation Tower', type: 'Landmark', description: 'Telecommunications tower' },
                            { name: 'Scientific Center', type: 'Museum', description: 'Aquarium and discovery center' }
                        ],
                        tips: [
                            'Extreme summer heat - 50Ãƒâ€šÃ‚Â°C possible',
                            'Dry country - no alcohol',
                            'Kuwaiti dinar is world\'s highest-valued currency',
                            'Friday brunch is popular'
                        ]
                    }
                }
            },
            syria: {
                id: 'syria',
                name: 'Syria',
                code: 'SY',
                flag: '🇸🇾',
                capital: 'Damascus',
                currency: 'Syrian Pound (SYP)',
                language: 'Arabic',
                description: 'Ancient civilization with Damascus old city and incredible historical sites',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    damascus: {
                        id: 'damascus',
                        name: 'Damascus',
                        country: 'Syria',
                        region: 'Middle East',
                        description: 'One of world\'s oldest continuously inhabited cities',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '2,100,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 25, mid: 50, luxury: 120 },
                        attractions: [
                            { name: 'Old City', type: 'Historic', description: 'UNESCO World Heritage old town' },
                            { name: 'Umayyad Mosque', type: 'Religious', description: 'One of largest and oldest mosques' },
                            { name: 'Souq al-Hamidiyya', type: 'Market', description: 'Covered historic bazaar' },
                            { name: 'Azm Palace', type: 'Palace', description: 'Ottoman-era palace' },
                            { name: 'Straight Street', type: 'Historic', description: 'Biblical street mentioned in Acts' }
                        ],
                        tips: [
                            'CHECK TRAVEL ADVISORIES - conflict zone',
                            'Travel currently extremely dangerous',
                            'Pre-war was incredible destination',
                            'Hopefully peace returns'
                        ]
                    }
                }
            },
            uae: {
                id: 'uae',
                name: 'United Arab Emirates',
                code: 'AE',
                flag: '🇦🇪',
                capital: 'Abu Dhabi',
                currency: 'UAE Dirham (AED)',
                language: 'Arabic',
                description: 'Futuristic cities, desert adventures, and luxury shopping',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                cities: {
                    dubai: {
                        id: 'dubai',
                        name: 'Dubai',
                        country: 'UAE',
                        region: 'Middle East',
                        description: 'Futuristic playground with world\'s tallest building and artificial islands',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '3,400,000',
                        bestTime: 'November to March',
                        avgBudget: { budget: 100, mid: 200, luxury: 600 },
                        attractions: [
                            { name: 'Burj Khalifa', type: 'Landmark', description: 'World\'s tallest building' },
                            { name: 'Palm Jumeirah', type: 'Landmark', description: 'Iconic artificial island' },
                            { name: 'Dubai Mall', type: 'Shopping', description: 'World\'s largest mall' },
                            { name: 'Burj Al Arab', type: 'Hotel', description: 'Iconic sail-shaped hotel' },
                            { name: 'Dubai Creek', type: 'Historic', description: 'Traditional area with abras' }
                        ],
                        tips: [
                            'Book Burj Khalifa in advance',
                            'Alcohol in licensed venues only',
                            'Dress modestly outside resorts',
                            'Friday is weekend'
                        ]
                    },
                    abuDhabi: {
                        id: 'abuDhabi',
                        name: 'Abu Dhabi',
                        country: 'UAE',
                        region: 'Middle East',
                        description: 'Capital city with stunning mosque and cultural district',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,500,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 90, mid: 180, luxury: 500 },
                        attractions: [
                            { name: 'Sheikh Zayed Grand Mosque', type: 'Religious', description: 'Stunning white marble mosque' },
                            { name: 'Louvre Abu Dhabi', type: 'Museum', description: 'World-class art museum' },
                            { name: 'Yas Island', type: 'Entertainment', description: 'Ferrari World and beaches' },
                            { name: 'Emirates Palace', type: 'Hotel', description: 'Iconic luxury hotel' },
                            { name: 'Corniche', type: 'Waterfront', description: '8km waterfront promenade' }
                        ],
                        tips: [
                            'Grand Mosque is free but dress code strict',
                            'More cultural than Dubai',
                            'Ferrari World for thrill rides',
                            'Day trip from Dubai possible'
                        ]
                    },
                    sharjah: {
                        id: 'sharjah',
                        name: 'Sharjah',
                        country: 'UAE',
                        region: 'Middle East',
                        description: 'Cultural capital with museums, heritage areas, and Islamic art',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '1,400,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                            { name: 'Sharjah Museum of Islamic Civilization', type: 'Museum', description: 'Islamic art and artifacts' },
                            { name: 'Heart of Sharjah', type: 'Historic', description: 'Restored heritage area' },
                            { name: 'Al Noor Island', type: 'Park', description: 'Art installations and butterfly house' },
                            { name: 'Souk Al Arsah', type: 'Market', description: 'Oldest souk in UAE' },
                            { name: 'Blue Souk', type: 'Market', description: 'Central market for carpets' }
                        ],
                        tips: [
                            'Dry emirate - no alcohol',
                            'More conservative than Dubai',
                            'Much cheaper accommodation than Dubai',
                            '20 mins to Dubai by car'
                        ]
                    },
                    rasAlKhaimah: {
                        id: 'rasAlKhaimah',
                        name: 'Ras Al Khaimah',
                        country: 'UAE',
                        region: 'Middle East',
                        description: 'Adventure emirate with mountains, desert, and world\'s longest zipline',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '350,000',
                        bestTime: 'October to April',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                            { name: 'Jebel Jais', type: 'Mountain', description: 'UAE\'s highest peak with zipline' },
                            { name: 'Jais Flight', type: 'Adventure', description: 'World\'s longest zipline' },
                            { name: 'Bear Grylls Explorers Camp', type: 'Adventure', description: 'Survival experience' },
                            { name: 'Desert Safari', type: 'Adventure', description: 'Dune bashing and camping' },
                            { name: 'Al Marjan Island', type: 'Beach', description: 'Man-made resort island' }
                        ],
                        tips: [
                            'Adventure alternative to Dubai',
                            'More affordable than Dubai',
                            'Jebel Jais zipline is incredible',
                            'Growing tourism destination'
                        ]
                    },
                    alAin: {
                        id: 'alAin',
                        name: 'Al Ain',
                        country: 'UAE',
                        region: 'Middle East',
                        description: 'Garden city and UNESCO oasis on Oman border',
                        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                        population: '800,000',
                        bestTime: 'October to April',
                        avgBudget: { budget: 50, mid: 100, luxury: 250 },
                        attractions: [
                            { name: 'Al Ain Oasis', type: 'Nature', description: 'UNESCO World Heritage palm oasis' },
                            { name: 'Jebel Hafeet', type: 'Mountain', description: 'Mountain drive with views' },
                            { name: 'Al Ain Zoo', type: 'Zoo', description: 'Large zoo with safari' },
                            { name: 'Al Jahili Fort', type: 'Historic', description: 'Historic fort and gardens' },
                            { name: 'Camel Market', type: 'Market', description: 'Traditional camel trading' }
                        ],
                        tips: [
                            'Known as Garden City',
                            'Cooler than coastal cities',
                            'Day trip from Abu Dhabi or Dubai',
                            'Cross to Oman (Buraimi) easily'
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
        code: country.code,
        flag: country.flag,
        capital: country.capital,
        currency: country.currency,
        language: country.language,
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
        avgBudget: city.avgBudget?.mid || city.avgBudget || 100,
        bestTime: city.bestTime || 'Year-round',
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

