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
                image: 'https://images.unsplash.com/photo-1528563066973-f5e4230fc89f?w=800',
                cities: {
                    tirana: {
                        id: 'tirana',
                        name: 'Tirana',
                        country: 'Albania',
                        region: 'Schengen',
                        description: 'Tirana, Albania\'s vibrant capital, is a city of fascinating contrasts where Ottoman-era mosques sit alongside Soviet-era architecture and colorful modern buildings. Once one of Europe\'s most isolated cities, Tirana has transformed into a lively cultural hub with bustling bazaars, innovative restaurants, and a thriving café culture centered around Skanderbeg Square. The city serves as an excellent base for exploring Albania\'s stunning Adriatic coastline and ancient Illyrian ruins, offering travelers an authentic and affordable European experience that remains refreshingly off the beaten path.',
                        image: 'https://images.unsplash.com/photo-1528563066973-f5e4230fc89f?w=800',
                        population: '520,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                    { name: 'Skanderbeg Square Walking Tour', type: 'Walking Tour', description: 'Guided exploration of Tirana\'s grand central square, National History Museum, and Et\'hem Bey Mosque' },
                    { name: 'Bunk\'Art Museum Experience', type: 'Museum', description: 'Tour of Cold War-era nuclear bunker turned contemporary art and history museum' },
                    { name: 'Mount Dajti Cable Car & Nature Walk', type: 'Adventure', description: 'Scenic cable car ride to Mount Dajti National Park with panoramic views of Tirana' },
                    { name: 'Tirana Street Art & Culture Tour', type: 'Cultural Tour', description: 'Discover Tirana\'s famous colorful buildings and vibrant street art scene with a local guide' },
                    { name: 'Grand Park & Artificial Lake Visit', type: 'Nature', description: 'Relaxing visit to Tirana\'s largest green space with boating on the artificial lake' },
                    { name: 'Krujë Castle & Bazaar Day Trip', type: 'Day Trip', description: 'Full-day excursion to the medieval castle of Albanian hero Skanderbeg and traditional bazaar' },
                    { name: 'Albanian Food Tasting Tour', type: 'Food Tour', description: 'Sample traditional Albanian cuisine including byrek, tavë kosi, and raki at local eateries' },
                    { name: 'Blloku Neighborhood Nightlife Tour', type: 'Nightlife', description: 'Evening walking tour through Tirana\'s trendy former communist elite district' },
                    { name: 'National Art Gallery Visit', type: 'Museum', description: 'Guided tour of Albania\'s premier art collection spanning socialist realism to contemporary works' },
                    { name: 'Petrela Castle & Wine Tasting', type: 'Day Trip', description: 'Visit the ancient Petrela Castle ruins followed by wine tasting at local vineyards' },
                    { name: 'Communist History Walking Tour', type: 'Historical Tour', description: 'In-depth exploration of Tirana\'s communist past including the Pyramid and government buildings' },
                    { name: 'Durrës & Adriatic Coast Day Trip', type: 'Day Trip', description: 'Beach day and Roman amphitheater visit in Albania\'s ancient port city of Durrës' }
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
                image: 'https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=800',
                cities: {
                    vienna: {
                        id: 'vienna',
                        name: 'Vienna',
                        country: 'Austria',
                        region: 'Schengen',
                        description: 'Vienna, the imperial capital of Austria, is a city where magnificent Baroque palaces, world-class opera houses, and legendary coffeehouse culture create an atmosphere of timeless elegance. As the former seat of the Habsburg Empire, Vienna boasts an extraordinary concentration of architectural masterpieces including Schönbrunn Palace, St. Stephen\'s Cathedral, and the grand Ringstrasse boulevard lined with monumental buildings. The city is synonymous with classical music — home to Mozart, Beethoven, and Strauss — and its vibrant arts scene, Michelin-starred dining, and innovative museum quarter make it one of Europe\'s most culturally rich destinations.',
                        image: 'https://images.unsplash.com/photo-1756831465093-b44fc49a5a7a?w=800',
                        population: '1,900,000',
                        bestTime: 'April to May, September to October',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                    { name: 'Schönbrunn Palace Skip-the-Line Tour', type: 'Palace Tour', description: 'Priority access tour of the stunning 1,441-room imperial summer residence with gardens' },
                    { name: 'Vienna Classical Concert at Musikverein', type: 'Concert', description: 'Evening of Mozart and Strauss performed in one of the world\'s finest concert halls' },
                    { name: 'Hofburg Imperial Palace Tour', type: 'Palace Tour', description: 'Explore the Habsburg winter residence including the Imperial Apartments, Sisi Museum, and Silver Collection' },
                    { name: 'Belvedere Museum & Gardens Visit', type: 'Museum', description: 'View Klimt\'s \'The Kiss\' and Austrian art masterpieces in this stunning Baroque palace' },
                    { name: 'Vienna Coffee House Culture Tour', type: 'Food Tour', description: 'Visit legendary Viennese coffeehouses and sample Sachertorte, strudel, and melange coffee' },
                    { name: 'St. Stephen\'s Cathedral & Old Town Walk', type: 'Walking Tour', description: 'Guided walk through Vienna\'s medieval core including the iconic Gothic cathedral' },
                    { name: 'Naschmarkt Food & Wine Tour', type: 'Food Tour', description: 'Taste your way through Vienna\'s largest and most popular open-air market' },
                    { name: 'Spanish Riding School Performance', type: 'Cultural Show', description: 'Watch the famous Lipizzaner stallions perform classical dressage at the Winter Riding School' },
                    { name: 'Danube River Cruise', type: 'River Cruise', description: 'Scenic boat trip along the Danube with views of Vienna\'s skyline and vineyards' },
                    { name: 'Vienna Woods & Heuriger Wine Tavern', type: 'Day Trip', description: 'Half-day trip to the Vienna Woods with wine tasting at a traditional Heuriger tavern' },
                    { name: 'Albertina Museum Guided Tour', type: 'Museum', description: 'Expert-led tour of one of the world\'s greatest graphic art collections with Monet and Picasso' },
                    { name: 'Prater Park & Giant Ferris Wheel', type: 'Amusement', description: 'Ride the iconic Riesenrad Ferris wheel and enjoy the historic Prater amusement park' },
                    { name: 'Vienna State Opera House Tour', type: 'Guided Tour', description: 'Behind-the-scenes tour of one of the world\'s most prestigious opera houses' }
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
                        description: 'Salzburg, the birthplace of Mozart and the filming location of The Sound of Music, is a fairy-tale city nestled between the Alps and the Salzach River. Its UNESCO-listed Old Town features stunning Baroque architecture, the imposing Hohensalzburg Fortress perched high above the city, and charming narrow streets filled with artisan shops and traditional beer gardens. The city\'s world-renowned music festivals, breathtaking Alpine scenery, and proximity to the Austrian Lake District make it a year-round destination for culture lovers and outdoor enthusiasts alike.',
                        image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800',
                        population: '155,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                    { name: 'Hohensalzburg Fortress Tour', type: 'Castle Tour', description: 'Visit Central Europe\'s largest fully preserved castle with panoramic Alpine views' },
                    { name: 'Sound of Music Film Locations Tour', type: 'Film Tour', description: 'Visit iconic filming locations including Mirabell Gardens, Mondsee, and Leopoldskron Palace' },
                    { name: 'Mozart\'s Birthplace Museum', type: 'Museum', description: 'Explore the house where Wolfgang Amadeus Mozart was born in 1756 on Getreidegasse' },
                    { name: 'Salzburg Old Town Walking Tour', type: 'Walking Tour', description: 'Guided stroll through the UNESCO-listed Baroque center including Cathedral and Residenzplatz' },
                    { name: 'Eagle\'s Nest & Berchtesgaden Day Trip', type: 'Day Trip', description: 'Visit Hitler\'s mountain retreat with stunning views of the Bavarian and Austrian Alps' },
                    { name: 'Salt Mines Adventure Tour', type: 'Adventure', description: 'Descend into the ancient Hallein Salt Mines with underground slides and boat rides' },
                    { name: 'Austrian Lake District Tour', type: 'Day Trip', description: 'Visit the stunning Salzkammergut region including Hallstatt, St. Wolfgang, and alpine lakes' },
                    { name: 'Salzburg Beer & Food Tour', type: 'Food Tour', description: 'Sample local specialties including Salzburger Nockerl and craft beers at traditional breweries' },
                    { name: 'Mirabell Palace & Gardens Visit', type: 'Garden Tour', description: 'Explore the magnificent Baroque gardens and palace featured in The Sound of Music' },
                    { name: 'Hellbrunn Palace & Trick Fountains', type: 'Palace Tour', description: 'Delight in the playful trick water fountains of this 17th-century pleasure palace' },
                    { name: 'Ice Caves at Werfen Day Trip', type: 'Adventure', description: 'Explore the world\'s largest accessible ice cave, Eisriesenwelt, near Salzburg' },
                    { name: 'Mozart Dinner Concert', type: 'Dinner Show', description: 'Candlelit dinner with live Mozart performance in the historic Stiftskeller St. Peter' }
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
                        description: 'Innsbruck, the capital of Austria\'s Tyrol region, is a spectacular Alpine city where medieval Old Town charm meets world-class winter sports facilities. Surrounded by dramatic mountain peaks, the city has twice hosted the Winter Olympics and offers year-round outdoor adventures from skiing and snowboarding to hiking and mountain biking. Its famous Golden Roof, Imperial Palace, and colorful riverside houses create a picturesque cityscape, while the Nordkette cable car whisks visitors from the city center to 2,300 meters altitude in just 20 minutes.',
                        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800',
                        population: '132,000',
                        bestTime: 'December to March (skiing), June to September (hiking)',
                        avgBudget: { budget: 75, mid: 140, luxury: 380 },
                        attractions: [
                    { name: 'Nordkette Cable Car to Alpine Summit', type: 'Adventure', description: 'Ride from city center to 2,334m Hafelekar peak for breathtaking panoramic views' },
                    { name: 'Golden Roof & Old Town Walking Tour', type: 'Walking Tour', description: 'Explore the medieval Altstadt with its iconic gold-tiled roof and colorful buildings' },
                    { name: 'Swarovski Crystal Worlds Visit', type: 'Attraction', description: 'Dazzling art and crystal experience at the famous Swarovski headquarters in Wattens' },
                    { name: 'Ambras Castle Tour', type: 'Castle Tour', description: 'Renaissance castle with Habsburg portrait gallery and stunning hillside gardens' },
                    { name: 'Imperial Palace (Hofburg) Tour', type: 'Palace Tour', description: 'Guided tour of the former Habsburg imperial residence and its lavish state rooms' },
                    { name: 'Alpine Zoo & Nature Experience', type: 'Nature', description: 'Europe\'s highest-altitude zoo featuring Alpine wildlife including bears, wolves, and eagles' },
                    { name: 'Bergisel Ski Jump & Olympic Museum', type: 'Sports Attraction', description: 'Visit the striking Zaha Hadid-designed ski jump with panoramic café and Olympic history' },
                    { name: 'Tyrolean Evening with Folk Show', type: 'Cultural Show', description: 'Traditional dinner with yodeling, Schuhplattler dancing, and alphorn performances' },
                    { name: 'Stubai Glacier Day Trip', type: 'Adventure', description: 'Visit Austria\'s largest glacier ski area with ice cave and panoramic viewing platform' },
                    { name: 'Innsbruck Bike Tour Along the Inn River', type: 'Bike Tour', description: 'Guided cycling tour along the scenic Inn River with mountain backdrop' },
                    { name: 'Tyrolean Food & Market Tour', type: 'Food Tour', description: 'Sample regional specialties including Tiroler Gröstl, Kaspressknödel, and schnapps' },
                    { name: 'Hall in Tirol & Mint Tower Day Trip', type: 'Day Trip', description: 'Visit the medieval salt-trading town and climb the historic Münzerturm mint tower' }
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
                        description: 'Graz, Austria\'s second-largest city and a UNESCO World Heritage Site, is a captivating blend of medieval, Renaissance, and contemporary architecture crowned by the iconic Schlossberg clock tower. The city\'s remarkably well-preserved Old Town features red-roofed houses, elegant courtyards, and Italy-influenced arcaded buildings reflecting centuries of cultural exchange. As a designated UNESCO City of Design, Graz boasts cutting-edge landmarks like the Kunsthaus art museum alongside traditional Styrian wine taverns, making it a dynamic destination where culinary innovation meets deep-rooted Austrian tradition.',
                        image: 'https://images.unsplash.com/photo-1700852014793-0ea22b02e794?w=800',
                        population: '290,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 65, mid: 120, luxury: 300 },
                        attractions: [
                    { name: 'Schlossberg Hill & Clock Tower Tour', type: 'Walking Tour', description: 'Climb or ride the funicular to the iconic clock tower for panoramic city views' },
                    { name: 'Graz Old Town UNESCO Walking Tour', type: 'Walking Tour', description: 'Guided exploration of the beautifully preserved Renaissance and Gothic city center' },
                    { name: 'Kunsthaus Graz Modern Art Museum', type: 'Museum', description: 'Visit the striking \'Friendly Alien\' blob-shaped contemporary art museum' },
                    { name: 'Eggenberg Palace & Gardens Tour', type: 'Palace Tour', description: 'Baroque palace with 365 windows, 24 state rooms, and beautiful landscaped gardens' },
                    { name: 'Styrian Wine Road Day Trip', type: 'Wine Tour', description: 'Visit picturesque vineyards along the South Styrian Wine Road with tastings' },
                    { name: 'Murinsel Island & Riverside Walk', type: 'Attraction', description: 'Visit the unique floating island platform on the Mur River designed by Vito Acconci' },
                    { name: 'Graz Farmers Market & Food Tour', type: 'Food Tour', description: 'Taste Styrian pumpkin seed oil, local cheeses, and traditional dishes at Kaiser-Josef-Platz' },
                    { name: 'Landeszeughaus Armory Museum', type: 'Museum', description: 'World\'s largest historic armory with 32,000 weapons and suits of armor' },
                    { name: 'Lurgrotte Cave Adventure', type: 'Adventure', description: 'Explore Austria\'s largest water-bearing cave system near Graz' },
                    { name: 'Austrian Open-Air Museum Stübing', type: 'Museum', description: 'Open-air museum showcasing traditional Austrian farmhouses from 6 centuries' },
                    { name: 'Graz Cathedral & Mausoleum Visit', type: 'Religious', description: 'Gothic cathedral with frescoes and the ornate Renaissance mausoleum of Emperor Ferdinand II' },
                    { name: 'Riegersburg Castle Day Trip', type: 'Day Trip', description: 'Visit the spectacular hilltop castle and birds of prey show in eastern Styria' }
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
                        description: 'Linz, Austria\'s third-largest city straddling the Danube River, has undergone a remarkable transformation from an industrial center to a European Capital of Culture celebrated for its innovative arts and technology scene. The city is home to the Ars Electronica Center, a world-leading museum of future technology, and the striking Lentos Art Museum along the illuminated Danube waterfront. With its charming Baroque main square — one of Europe\'s largest enclosed squares — excellent Linzer Torte (the world\'s oldest known cake recipe), and proximity to the scenic Danube Valley, Linz offers an unexpectedly rewarding cultural experience.',
                        image: 'https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=800',
                        population: '205,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 60, mid: 110, luxury: 280 },
                        attractions: [
                    { name: 'Ars Electronica Center Tour', type: 'Museum', description: 'Immersive experience at the world-renowned Museum of the Future with interactive exhibits' },
                    { name: 'Linz Old Town & Main Square Walk', type: 'Walking Tour', description: 'Explore one of Europe\'s largest enclosed Baroque squares and the charming old town' },
                    { name: 'Lentos Art Museum Visit', type: 'Museum', description: 'Modern art museum on the Danube featuring Klimt, Schiele, and Warhol works' },
                    { name: 'Pöstlingberg Railway & Fairy Tale Grotto', type: 'Attraction', description: 'Ride the steepest adhesion railway in Europe to a hilltop church and fairy tale caves' },
                    { name: 'Linzer Torte Baking Workshop', type: 'Cooking Class', description: 'Learn to make the world\'s oldest known cake recipe at a traditional Linz bakery' },
                    { name: 'Danube River Cruise from Linz', type: 'River Cruise', description: 'Scenic cruise through the picturesque Schlögener Schlinge Danube bend' },
                    { name: 'New Cathedral & Mariendom Tour', type: 'Religious', description: 'Visit Austria\'s largest church with stunning stained glass windows and neo-Gothic architecture' },
                    { name: 'Mauthausen Memorial Day Trip', type: 'Historical Tour', description: 'Sobering visit to the WWII concentration camp memorial and education center' },
                    { name: 'Linz Street Art & Mural Walk', type: 'Art Walk', description: 'Discover vibrant street art and murals throughout Linz\'s creative quarters' },
                    { name: 'St. Florian Monastery & Bruckner Tour', type: 'Day Trip', description: 'Visit the magnificent Augustinian monastery and tomb of composer Anton Bruckner' },
                    { name: 'Voestalpine Stahlwelt Steel Museum', type: 'Museum', description: 'Interactive museum showcasing steel production in a striking modern building' },
                    { name: 'Cycling the Danube Bike Path', type: 'Bike Tour', description: 'Ride one of Europe\'s most popular cycling routes along the scenic Danube Valley' }
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
                image: 'https://images.unsplash.com/photo-1758881884169-cc8ab5a6c9dd?w=800',
                cities: {
                    minsk: {
                        id: 'minsk',
                        name: 'Minsk',
                        country: 'Belarus',
                        region: 'Schengen',
                        description: 'Minsk, the capital of Belarus, is a city of grand Stalinist architecture and wide Soviet-era boulevards that tell the story of a nation rebuilt almost entirely from ruins after World War II. Independence Avenue, one of Europe\'s longest avenues, is lined with imposing neoclassical buildings, while the Upper Town preserves pockets of pre-war charm with Baroque churches and cobblestone squares. Despite its serious exterior, Minsk surprises visitors with a thriving underground culture scene, excellent craft beer bars, affordable Belarusian cuisine, and warm hospitality that makes it one of Eastern Europe\'s most intriguing and underrated capitals.',
                        image: 'https://images.unsplash.com/photo-1673734818521-0d4599b763d5?w=800',
                        population: '2,000,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                    { name: 'Independence Avenue Walking Tour', type: 'Walking Tour', description: 'Stroll Europe\'s longest avenue showcasing monumental Stalinist architecture' },
                    { name: 'Upper Town & Trinity Hill Historical Tour', type: 'Historical Tour', description: 'Explore Minsk\'s oldest districts with Baroque churches and pre-war cobblestone streets' },
                    { name: 'Museum of the Great Patriotic War', type: 'Museum', description: 'Powerful WWII museum with interactive exhibits in a striking modern building' },
                    { name: 'National Library Diamond Building', type: 'Attraction', description: 'Visit the iconic rhombicuboctahedron-shaped library with rooftop observation deck' },
                    { name: 'Belarusian Cuisine Food Tour', type: 'Food Tour', description: 'Sample draniki potato pancakes, machanka, and kvass at traditional restaurants' },
                    { name: 'Island of Tears Memorial Visit', type: 'Memorial', description: 'Visit the poignant memorial on the Svisloch River dedicated to fallen soldiers' },
                    { name: 'Mir Castle & Nesvizh Palace Day Trip', type: 'Day Trip', description: 'UNESCO World Heritage castles with medieval fortifications and Renaissance gardens' },
                    { name: 'Victory Square & Soviet Minsk Tour', type: 'Historical Tour', description: 'Discover the Soviet legacy of Minsk including monuments, mosaics, and metro stations' },
                    { name: 'Minsk Metro Art Tour', type: 'Art Tour', description: 'Explore the beautifully decorated Soviet-era metro stations with mosaics and sculptures' },
                    { name: 'Loshitsa Park & Manor Estate', type: 'Nature', description: 'Peaceful estate with historic manor house, gardens, and walking trails' },
                    { name: 'Belarusian State Circus Performance', type: 'Entertainment', description: 'Enjoy a spectacular circus performance at one of the former USSR\'s finest circus venues' },
                    { name: 'Dudutki Folk Museum Day Trip', type: 'Day Trip', description: 'Interactive open-air museum showcasing traditional Belarusian crafts and rural life' }
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
                        description: 'Brussels, the capital of Belgium and the de facto capital of the European Union, is a cosmopolitan city where ornate Art Nouveau architecture, medieval guild houses, and gleaming EU institutions create a unique urban landscape. The Grand Place, widely considered one of the world\'s most beautiful squares, dazzles visitors with its gilded Baroque facades, while the Royal Quarter impresses with grand palaces and world-class museums. Brussels is equally famous for its gastronomic excellence — from handcrafted praline chocolates and crispy Belgian waffles to mussels with frites and Trappist monastery beers — making it a paradise for food lovers.',
                        image: 'https://images.unsplash.com/photo-1559113202-c916b8e44373?w=800',
                        population: '1,200,000',
                        bestTime: 'April to September',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                    { name: 'Grand Place & Historical Center Tour', type: 'Walking Tour', description: 'Guided tour of Brussels\' UNESCO-listed main square with gilded guild houses and Town Hall' },
                    { name: 'Belgian Chocolate Making Workshop', type: 'Cooking Class', description: 'Learn to craft artisan pralines with a master chocolatier in the chocolate capital' },
                    { name: 'Belgian Beer Tasting Experience', type: 'Beer Tour', description: 'Sample Trappist ales, lambics, and craft beers at iconic Brussels beer bars' },
                    { name: 'Atomium & Mini-Europe Visit', type: 'Attraction', description: 'Tour the iconic 1958 World\'s Fair structure and miniature reproductions of European landmarks' },
                    { name: 'Art Nouveau Architecture Walking Tour', type: 'Architecture Tour', description: 'Discover Victor Horta\'s masterpieces and Brussels\' stunning Art Nouveau heritage' },
                    { name: 'Royal Palace & Museums Quarter Tour', type: 'Cultural Tour', description: 'Visit the Royal Palace, Magritte Museum, and Belgian Royal Museum of Fine Arts' },
                    { name: 'Waffle, Chocolate & Beer Food Tour', type: 'Food Tour', description: 'Ultimate Brussels tasting experience with artisan waffles, pralines, and craft beers' },
                    { name: 'European Parliament Quarter Tour', type: 'Political Tour', description: 'Visit the EU Parliament, Council of Europe, and learn about European governance' },
                    { name: 'Manneken Pis & Old Town Legends Walk', type: 'Walking Tour', description: 'Discover the stories behind Brussels\' famous bronze statue and hidden city legends' },
                    { name: 'Comic Strip Mural Walking Tour', type: 'Art Walk', description: 'Follow the comic strip murals trail featuring Tintin, Smurfs, and Lucky Luke' },
                    { name: 'Bruges Day Trip from Brussels', type: 'Day Trip', description: 'Full-day excursion to the fairy-tale medieval city of Bruges with canal cruise' },
                    { name: 'Sablon Antiques & Gourmet Quarter', type: 'Shopping Tour', description: 'Explore the upscale Sablon neighborhood with antique shops and luxury chocolatiers' }
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
                        description: 'Antwerp, Belgium\'s second city and the diamond capital of the world, is a dynamic port city where Renaissance splendor meets cutting-edge fashion and contemporary art. The city\'s medieval cathedral houses Rubens masterpieces, while the MAS museum and DIVA diamond museum represent its modern cultural ambitions. As the birthplace of Flemish painting and a current hub of avant-garde fashion — home to the legendary Antwerp Six designers — the city offers an irresistible combination of artistic heritage, trendy neighborhoods, excellent dining, and some of Europe\'s best shopping.',
                        image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800',
                        population: '530,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 65, mid: 130, luxury: 320 },
                        attractions: [
                    { name: 'Diamond District & DIVA Museum Tour', type: 'Museum', description: 'Explore the world\'s diamond capital and the interactive Diamond, Jewelry & Silver museum' },
                    { name: 'Cathedral of Our Lady & Rubens Tour', type: 'Art Tour', description: 'View Rubens\' masterpieces in this magnificent Gothic cathedral, Antwerp\'s tallest building' },
                    { name: 'MAS Museum Rooftop Experience', type: 'Museum', description: 'Visit the striking Museum aan de Stroom with free rooftop panoramic city views' },
                    { name: 'Antwerp Fashion & Design Walk', type: 'Shopping Tour', description: 'Explore the fashion district and boutiques of the famous Antwerp Six designers' },
                    { name: 'Rubens House Museum Visit', type: 'Museum', description: 'Tour the impressive home and studio of Baroque master Peter Paul Rubens' },
                    { name: 'Grote Markt & Old Town Walking Tour', type: 'Walking Tour', description: 'Guided walk through Antwerp\'s Renaissance main square with ornate guild houses' },
                    { name: 'Belgian Beer & Pub Crawl Antwerp', type: 'Beer Tour', description: 'Sample local De Koninck Bolleke beer and Belgian ales at historic Antwerp bars' },
                    { name: 'Het Eilandje Harbor & Yacht Marina', type: 'Walking Tour', description: 'Explore the trendy revitalized harbor district with waterfront dining' },
                    { name: 'Antwerp Central Station Architecture Tour', type: 'Architecture Tour', description: 'Marvel at one of the world\'s most beautiful railway stations and its grand interior' },
                    { name: 'Plantin-Moretus Printing Museum', type: 'Museum', description: 'UNESCO-listed museum showcasing the world\'s oldest printing presses' },
                    { name: 'Antwerp Zoo Visit', type: 'Zoo', description: 'One of the world\'s oldest zoos, located right next to Central Station' },
                    { name: 'Chocolate & Waffle Tasting Tour', type: 'Food Tour', description: 'Visit artisan chocolatiers and waffle shops in Antwerp\'s charming old quarters' }
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
                        description: 'Ghent, often called Belgium\'s best-kept secret, is a stunning medieval city where three rivers converge beneath the towers of ancient churches and a formidable castle. Less touristy than Bruges but equally beautiful, Ghent boasts the breathtaking Ghent Altarpiece by the Van Eyck brothers, a vibrant student-driven nightlife, and the picturesque Graslei waterfront lined with guild houses dating back to the 12th century. The city has reinvented itself as a culinary hotspot and Europe\'s largest car-free city center, offering an authentic Flemish experience with world-class museums, cozy brown cafés, and a creative arts scene.',
                        image: 'https://images.unsplash.com/photo-1676930891777-dc31c9f01610?w=800',
                        population: '265,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                    { name: 'Ghent Altarpiece & St. Bavo\'s Cathedral', type: 'Art Tour', description: 'View the Van Eyck brothers\' Adoration of the Mystic Lamb, one of the world\'s most important artworks' },
                    { name: 'Gravensteen Castle Tour', type: 'Castle Tour', description: 'Explore the imposing medieval Castle of the Counts with its torture museum and ramparts' },
                    { name: 'Graslei & Korenlei Waterfront Walk', type: 'Walking Tour', description: 'Stroll along Ghent\'s most photogenic medieval waterfront with stunning guild houses' },
                    { name: 'Ghent Canal Boat Tour', type: 'Boat Tour', description: 'Scenic boat cruise through Ghent\'s medieval waterways and under historic bridges' },
                    { name: 'Belgian Craft Beer Tour Ghent', type: 'Beer Tour', description: 'Visit local breweries and iconic Ghent beer bars including the famous Dulle Griet' },
                    { name: 'Ghent Street Art Walking Tour', type: 'Art Walk', description: 'Discover vibrant murals and graffiti in Ghent\'s creative Werregarenstraat alley' },
                    { name: 'STAM City Museum Visit', type: 'Museum', description: 'Interactive museum telling the story of Ghent from medieval powerhouse to modern city' },
                    { name: 'Patershol Medieval Quarter Tour', type: 'Walking Tour', description: 'Wander the atmospheric cobblestone alleys of Ghent\'s oldest medieval neighborhood' },
                    { name: 'Ghent Food Tour: Flemish Specialties', type: 'Food Tour', description: 'Sample waterzooi stew, cuberdons candies, and Gentse Mokken at local spots' },
                    { name: 'Belfry Tower Climb for Panoramic Views', type: 'Landmark', description: 'Climb the UNESCO-listed 91-meter Belfry for spectacular views over three towers' },
                    { name: 'Design Museum Gent', type: 'Museum', description: 'Explore Flemish and international design from the 17th century to contemporary' },
                    { name: 'Evening Illuminated Ghent Tour', type: 'Night Tour', description: 'See Ghent\'s medieval skyline beautifully illuminated on an atmospheric evening walk' }
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
                image: 'https://images.unsplash.com/photo-1761910932573-006c294a75cb?w=800',
                cities: {
                    sarajevo: {
                        id: 'sarajevo',
                        name: 'Sarajevo',
                        country: 'Bosnia and Herzegovina',
                        region: 'Schengen',
                        description: 'Sarajevo, the capital of Bosnia and Herzegovina, is where East meets West in the most literal sense — a city where Ottoman mosques, Austro-Hungarian boulevards, and socialist-era buildings coexist within walking distance. Known as the \'Jerusalem of Europe\' for its religious diversity, Sarajevo\'s Baščaršija old bazaar quarter transports visitors to an Ottoman-era world of copper workshops, ćevapi grills, and steaming coffee served in traditional džezvas. The city\'s complex 20th-century history, including the assassination that sparked World War I and the 1990s siege, adds profound depth to a destination that impresses with its resilience, warmth, and unique cultural heritage.',
                        image: 'https://images.unsplash.com/photo-1690323027535-d5fc4dc4f72f?w=800',
                        population: '420,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                    { name: 'Baščaršija Old Bazaar Walking Tour', type: 'Walking Tour', description: 'Explore the charming Ottoman-era marketplace with copper workshops and Sebilj fountain' },
                    { name: 'Tunnel of Hope War Museum', type: 'Museum', description: 'Visit the underground tunnel used to survive the 1992-95 siege of Sarajevo' },
                    { name: 'Ćevapi & Bosnian Food Tour', type: 'Food Tour', description: 'Taste Sarajevo\'s famous ćevapi, burek, and Bosnian coffee at legendary local spots' },
                    { name: 'Sarajevo War & History Tour', type: 'Historical Tour', description: 'Comprehensive tour covering the 1914 assassination site, siege history, and Sniper Alley' },
                    { name: 'Latin Bridge & Assassination Site', type: 'Historical Site', description: 'Visit where Archduke Franz Ferdinand was assassinated, triggering World War I' },
                    { name: 'Bobsled Track at Trebević Mountain', type: 'Adventure', description: 'Hike to the abandoned 1984 Winter Olympics bobsled track on Mount Trebević' },
                    { name: 'Gazi Husrev-beg Mosque & Madrasah', type: 'Religious', description: 'Tour the magnificent 16th-century Ottoman mosque and Islamic cultural center' },
                    { name: 'Vrelo Bosne Nature Excursion', type: 'Nature', description: 'Visit the beautiful spring of the Bosna River with horse-drawn carriage rides' },
                    { name: 'Mostar & Stari Most Bridge Day Trip', type: 'Day Trip', description: 'Full-day trip to see the iconic reconstructed Ottoman bridge and dive into the Neretva' },
                    { name: 'Jewish Museum & Multi-Faith Tour', type: 'Cultural Tour', description: 'Explore Sarajevo\'s remarkable religious coexistence across four faiths in one city' },
                    { name: 'Yellow Fortress Sunset Viewpoint', type: 'Scenic', description: 'Watch the sunset over Sarajevo\'s valley from this historic Ottoman fortress' },
                    { name: 'Bosnian Coffee Ceremony Experience', type: 'Cultural Experience', description: 'Learn the traditional art of preparing and serving Bosnian coffee in a copper pot' }
                ],
                        tips: [
                            'Try ćevapi at Baščaršija',
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
                image: 'https://images.unsplash.com/photo-1592489499886-8e923ae813e1?w=800',
                cities: {
                    sofia: {
                        id: 'sofia',
                        name: 'Sofia',
                        country: 'Bulgaria',
                        region: 'Schengen',
                        description: 'Sofia, Bulgaria\'s ancient capital, is one of Europe\'s oldest cities with a history spanning over 7,000 years, from Thracian settlements to Roman ruins now visible beneath modern streets. The city\'s compact center features an extraordinary mix of architectural styles — Byzantine churches, Ottoman mosques, Soviet-era monuments, and contemporary glass towers all within blocks of each other. With the stunning Mount Vitosha as its backdrop, Sofia offers an authentic Balkan experience at a fraction of Western European prices, with excellent cuisine, vibrant nightlife, natural hot springs, and some of the continent\'s most impressive Eastern Orthodox churches.',
                        image: 'https://images.unsplash.com/photo-1519429753079-3b0f0a95dea8?w=800',
                        population: '1,300,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                    { name: 'Alexander Nevsky Cathedral Tour', type: 'Religious', description: 'Visit one of the largest Eastern Orthodox cathedrals in the world with stunning golden domes' },
                    { name: 'Sofia Free Walking Tour & History', type: 'Walking Tour', description: 'Explore Sofia\'s 7,000-year history from Thracian ruins to communist-era landmarks' },
                    { name: 'Boyana Church UNESCO Site Visit', type: 'Religious', description: 'See extraordinary medieval frescoes predating the Italian Renaissance by a century' },
                    { name: 'Vitosha Mountain Hiking Tour', type: 'Adventure', description: 'Half-day hike on Mount Vitosha with panoramic views over Sofia and the Balkans' },
                    { name: 'Roman Ruins & Serdica Complex Tour', type: 'Historical Tour', description: 'Explore ancient Roman ruins discovered beneath Sofia\'s modern streets' },
                    { name: 'Bulgarian Food & Rakia Tasting', type: 'Food Tour', description: 'Sample shopska salad, banitsa, kebapche, and traditional Bulgarian rakia liquor' },
                    { name: 'National Palace of Culture Visit', type: 'Cultural Tour', description: 'Tour Bulgaria\'s largest cultural complex surrounded by scenic gardens' },
                    { name: 'Rila Monastery UNESCO Day Trip', type: 'Day Trip', description: 'Visit Bulgaria\'s most famous monastery with stunning frescoes in the Rila Mountains' },
                    { name: 'Sofia Street Art & Alternative Tour', type: 'Art Walk', description: 'Discover Sofia\'s vibrant street art scene and underground culture' },
                    { name: 'St. George Rotunda Church Visit', type: 'Religious', description: 'See Bulgaria\'s oldest surviving building — a 4th-century Roman church with medieval frescoes' },
                    { name: 'Ivan Vazov National Theatre Tour', type: 'Cultural Tour', description: 'Visit Bulgaria\'s grandest theater and explore the surrounding cultural quarter' },
                    { name: 'Sofia Mineral Baths & Hot Springs Tour', type: 'Wellness', description: 'Visit the historic Central Mineral Baths building and taste Sofia\'s natural hot spring water' }
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
                image: 'https://images.unsplash.com/photo-1742052549897-7221bf15fe50?w=800',
                cities: {
                    zagreb: {
                        id: 'zagreb',
                        name: 'Zagreb',
                        country: 'Croatia',
                        region: 'Schengen',
                        description: 'Zagreb, Croatia\'s underrated capital, is a charming Central European city where medieval Upper Town cobblestones lead to grand Austro-Hungarian Lower Town boulevards and a vibrant cafe culture rivals that of Vienna or Prague. The city\'s iconic blue-tiled roof of St. Mark\'s Church, the atmospheric Dolac farmers market, and the quirky Museum of Broken Relationships are just a few reasons travelers are discovering this hidden gem. With excellent food, affordable prices, and a lively arts scene, Zagreb serves as a perfect gateway to Croatia\'s stunning coastline while offering its own compelling reasons to linger.',
                        image: 'https://images.unsplash.com/photo-1563708848350-2b7f37174b94?w=800',
                        population: '800,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 45, mid: 90, luxury: 220 },
                        attractions: [
                    { name: 'Upper Town & St. Mark\'s Walking Tour', type: 'Walking Tour', description: 'Explore Zagreb\'s medieval core with the iconic tiled-roof church and Stone Gate' },
                    { name: 'Museum of Broken Relationships Visit', type: 'Museum', description: 'Tour the world-famous collection of objects from failed love stories' },
                    { name: 'Dolac Market & Croatian Food Tour', type: 'Food Tour', description: 'Taste štrukli, kulen sausage, and rakija at Zagreb\'s vibrant rooftop market' },
                    { name: 'Mirogoj Cemetery Walking Tour', type: 'Walking Tour', description: 'Visit one of Europe\'s most beautiful cemeteries with arcaded walkways and monuments' },
                    { name: 'Zagreb Funicular & Lotrščak Tower', type: 'Attraction', description: 'Ride the world\'s shortest funicular and hear the daily cannon firing from the tower' },
                    { name: 'Croatian Naive Art Museum Tour', type: 'Museum', description: 'Discover Croatia\'s unique naive art movement in this charming Upper Town gallery' },
                    { name: 'Zagreb Craft Beer & Bar Hopping', type: 'Beer Tour', description: 'Sample Croatia\'s booming craft beer scene at Tkalčićeva street\'s best bars' },
                    { name: 'Plitvice Lakes National Park Day Trip', type: 'Day Trip', description: 'UNESCO World Heritage site with 16 cascading turquoise lakes and waterfalls' },
                    { name: 'Maksimir Park & Zagreb Zoo Visit', type: 'Nature', description: 'Explore Zagreb\'s oldest public park with lakes, forests, and the city zoo' },
                    { name: 'Zagreb Cathedral & Kaptol Quarter Tour', type: 'Walking Tour', description: 'Visit Croatia\'s tallest building and the historic ecclesiastical quarter' },
                    { name: 'Croatian Wine Tasting Experience', type: 'Wine Tour', description: 'Sample premium Croatian wines including Graševina and Plavac Mali' },
                    { name: 'Tkalčićeva Street Evening Walk', type: 'Night Tour', description: 'Experience Zagreb\'s buzzing cafe and nightlife street in the city center' }
                ],
                        tips: [
                            'Take funicular to Upper Town',
                            'Try štrukli (cheese pastry)',
                            'Advent in Zagreb is magical',
                            'Day trip to Plitvice Lakes'
                        ]
                    },
                    split: {
                        id: 'split',
                        name: 'Split',
                        country: 'Croatia',
                        region: 'Schengen',
                        description: 'Split, Croatia\'s second-largest city, is built in and around the spectacular ruins of Roman Emperor Diocletian\'s 4th-century palace — a living ancient monument where locals have made their homes for 1,700 years. The UNESCO-listed palace complex is a labyrinth of marble walkways, underground chambers, and medieval structures, while outside the ancient walls, a buzzing Riva waterfront promenade stretches along the stunning Adriatic coast. Split perfectly combines ancient history with Mediterranean lifestyle, offering excellent seafood restaurants, lively beach bars, and easy access to the gorgeous islands of Hvar, Brač, and Vis.',
                        image: 'https://images.unsplash.com/photo-1628502301579-bf8b22d3c685?w=800',
                        population: '180,000',
                        bestTime: 'May to June, September',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                    { name: 'Diocletian\'s Palace Guided Tour', type: 'Historical Tour', description: 'Expert-led tour of the 1,700-year-old Roman palace complex, a UNESCO World Heritage Site' },
                    { name: 'Game of Thrones Filming Locations', type: 'Film Tour', description: 'Visit Split\'s GOT filming spots including the cellars used as Meereen\'s dungeons' },
                    { name: 'Split Old Town & Riva Walking Tour', type: 'Walking Tour', description: 'Explore the charming streets within the palace walls and the waterfront promenade' },
                    { name: 'Hvar Island Day Trip by Speedboat', type: 'Day Trip', description: 'Fast boat to the glamorous island of Hvar with lavender fields and beach stops' },
                    { name: 'Blue Cave & Five Islands Boat Tour', type: 'Boat Tour', description: 'Visit the famous Blue Cave on Biševo and swim at five stunning island locations' },
                    { name: 'Krka Waterfalls National Park Trip', type: 'Day Trip', description: 'Full-day trip to swim beneath the spectacular cascading waterfalls of Krka' },
                    { name: 'Split Food & Wine Walking Tour', type: 'Food Tour', description: 'Taste Dalmatian peka, fresh seafood, and local wines in old town restaurants' },
                    { name: 'Marjan Hill Hiking & Beach Tour', type: 'Adventure', description: 'Hike through Marjan Forest Park to panoramic viewpoints and hidden beaches' },
                    { name: 'Cathedral of St. Domnius Tower Climb', type: 'Landmark', description: 'Climb the Romanesque bell tower for stunning views over Split and the islands' },
                    { name: 'Underground Palace Cellars Tour', type: 'Historical Tour', description: 'Explore the remarkably preserved underground cellars of Diocletian\'s Palace' },
                    { name: 'Dalmatian Cooking Class', type: 'Cooking Class', description: 'Learn to prepare traditional Dalmatian dishes with local ingredients' },
                    { name: 'Sunset Sailing Cruise on the Adriatic', type: 'Sailing', description: 'Evening catamaran cruise along Split\'s coastline with wine and snacks' }
                ],
                        tips: [
                            'Ferry hub for islands - Hvar, Brač, Vis',
                            'Game of Thrones filming location',
                            'Swim at Bačvice Beach',
                            'Night tours of Diocletian\'s cellars'
                        ]
                    },
                    dubrovnik: {
                        id: 'dubrovnik',
                        name: 'Dubrovnik',
                        country: 'Croatia',
                        region: 'Schengen',
                        description: 'Dubrovnik, the \'Pearl of the Adriatic,\' is a breathtaking medieval walled city perched on dramatic cliffs above the crystal-clear Adriatic Sea. Its UNESCO World Heritage Old Town, encircled by imposing 13th-century walls, contains marble-paved streets, Baroque churches, elegant palaces, and Europe\'s third-oldest pharmacy. Famously used as King\'s Landing in Game of Thrones, Dubrovnik has captured the world\'s imagination, but beyond the screen, it offers world-class gastronomy, stunning island escapes, and one of the most scenic cable car rides in the Mediterranean.',
                        image: 'https://images.unsplash.com/photo-1414862625453-d87604a607e4?w=800',
                        population: '42,000',
                        bestTime: 'May to June, September to October',
                        avgBudget: { budget: 70, mid: 140, luxury: 400 },
                        attractions: [
                    { name: 'Dubrovnik City Walls Walk', type: 'Walking Tour', description: 'Walk the complete circuit of the iconic 2km medieval walls with spectacular sea views' },
                    { name: 'Game of Thrones Complete Tour', type: 'Film Tour', description: 'Visit all major filming locations from King\'s Landing including the Walk of Shame' },
                    { name: 'Elafiti Islands & Blue Sea Cruise', type: 'Boat Tour', description: 'Island-hopping cruise to Koločep, Lopud, and Šipan with swimming and lunch' },
                    { name: 'Stradun & Old Town Walking Tour', type: 'Walking Tour', description: 'Guided stroll along Dubrovnik\'s famous marble main street and hidden courtyards' },
                    { name: 'Cable Car to Mount Srđ', type: 'Scenic', description: 'Panoramic cable car ride to the summit for breathtaking views over the old town and islands' },
                    { name: 'Kayaking Around the City Walls', type: 'Adventure', description: 'Sea kayaking tour around Dubrovnik\'s walls with cave exploration and Lokrum stop' },
                    { name: 'Lokrum Island Nature Excursion', type: 'Day Trip', description: 'Visit the forested island with a botanical garden, Dead Sea lake, and peacocks' },
                    { name: 'Dubrovnik Oysters & Wine Tour', type: 'Food Tour', description: 'Boat trip to Ston for oyster tasting at Europe\'s oldest salt pans and wine in Pelješac' },
                    { name: 'Rector\'s Palace Museum Tour', type: 'Museum', description: 'Explore the Gothic-Renaissance palace and the Cultural History Museum collection' },
                    { name: 'Buža Bar Cliff Swimming Experience', type: 'Beach', description: 'Swim from the famous cliff bar built into Dubrovnik\'s outer walls' },
                    { name: 'Montenegro Day Trip from Dubrovnik', type: 'Day Trip', description: 'Visit Kotor Bay, Perast, and Our Lady of the Rocks in neighboring Montenegro' },
                    { name: 'Sunset Panoramic Sailing Cruise', type: 'Sailing', description: 'Luxury catamaran cruise around Old Town with champagne and Adriatic sunset' }
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
                image: 'https://images.unsplash.com/photo-1746458538203-99ea09efb194?w=800',
                cities: {
                    nicosia: {
                        id: 'nicosia',
                        name: 'Nicosia (Lefkosia)',
                        country: 'Cyprus',
                        region: 'Schengen',
                        description: 'Nicosia is the world\'s last divided capital, split between the Republic of Cyprus and Northern Cyprus by the UN-controlled Green Line. The city\'s old quarter is encircled by well-preserved Venetian walls and is home to a captivating mix of Byzantine churches, Gothic cathedrals, and Ottoman mosques. Stroll down Ledra Street to cross between two cultures, explore excellent museums, and savor Cypriot meze at traditional tavernas. Nicosia\'s vibrant arts scene makes it an unmissable Mediterranean gem.',
                        image: 'https://images.unsplash.com/photo-1689169585936-229e6c1ccca4?w=800',
                        population: '350,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                    { name: 'Old Nicosia Walking Tour & Green Line Crossing', type: 'Walking Tour', description: 'Explore the divided capital\'s old quarter, cross the UN buffer zone, and discover centuries of history on both sides' },
                    { name: 'Cypriot Meze & Wine Tasting Experience', type: 'Food Tour', description: 'Sample traditional Cypriot meze dishes paired with local wines from the Troodos mountain vineyards' },
                    { name: 'Troodos Mountains & Painted Churches Day Trip', type: 'Day Trip', description: 'Visit UNESCO-listed Byzantine painted churches and charming mountain villages in the Troodos range' },
                    { name: 'Cyprus Museum & Archaeological Treasures Tour', type: 'Museum', description: 'Discover 9,000 years of Cypriot civilization through world-class archaeological collections' },
                    { name: 'Venetian Walls & Famagusta Gate Cultural Walk', type: 'Cultural Tour', description: 'Walk along the impressive 16th-century Venetian fortifications and visit the restored Famagusta Gate arts center' },
                    { name: 'Lefkara Village & Traditional Lace-Making Tour', type: 'Day Trip', description: 'Visit the picturesque village of Lefkara famous for its UNESCO-recognized lace and silver craftsmanship' },
                    { name: 'Buyuk Han & North Nicosia Ottoman Heritage Tour', type: 'Historical Tour', description: 'Explore the beautifully restored Ottoman caravanserai and historic mosques of North Nicosia' },
                    { name: 'Nicosia Street Art & Contemporary Culture Walk', type: 'Walking Tour', description: 'Discover vibrant murals and galleries in the creative neighborhoods near the buffer zone' },
                    { name: 'Commandaria Wine Route & Village Experience', type: 'Wine Tour', description: 'Tour the region producing the world\'s oldest named wine and taste the legendary sweet Commandaria' },
                    { name: 'Kourion Ancient City & Seaside Ruins Day Trip', type: 'Day Trip', description: 'Explore the spectacular Greco-Roman ruins of Kourion perched on dramatic coastal cliffs' },
                    { name: 'Hamam Omerye Ottoman Bath Experience', type: 'Cultural Tour', description: 'Relax in a beautifully restored 14th-century Ottoman bathhouse in the heart of old Nicosia' },
                    { name: 'Nicosia Cycling Tour Through Old & New City', type: 'Bike Tour', description: 'Pedal through the contrast of ancient walled city streets and modern Nicosia\'s tree-lined boulevards' }
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
                image: 'https://images.unsplash.com/photo-1694092773326-0ad0d102b2e3?w=800',
                cities: {
                    prague: {
                        id: 'prague',
                        name: 'Prague',
                        country: 'Czech Republic',
                        region: 'Schengen',
                        description: 'Prague, the City of a Hundred Spires, enchants visitors with its fairy-tale skyline of Gothic towers, baroque domes, and art nouveau facades reflected in the Vltava River. Charles Bridge, Prague Castle, and the medieval Old Town Square with its famous Astronomical Clock form one of Europe\'s most photogenic cityscapes. The city boasts a thriving beer culture, world-class classical music performances, and a labyrinth of cobblestone lanes hiding cozy pubs and galleries. Prague\'s affordability and beauty make it one of Central Europe\'s most beloved destinations.',
                        image: 'https://images.unsplash.com/photo-1444388204584-7d0da8506291?w=800',
                        population: '1,300,000',
                        bestTime: 'April to May, September to October',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                    { name: 'Prague Castle & St. Vitus Cathedral Guided Tour', type: 'Historical Tour', description: 'Explore the world\'s largest ancient castle complex and the stunning Gothic cathedral overlooking the city' },
                    { name: 'Old Town, Jewish Quarter & Charles Bridge Walk', type: 'Walking Tour', description: 'Stroll through centuries of history from the Astronomical Clock to the storied Charles Bridge and Jewish Quarter' },
                    { name: 'Czech Beer Tasting & Historic Pubs Tour', type: 'Food Tour', description: 'Sample world-famous Czech lagers and craft brews at legendary Prague pubs and microbreweries' },
                    { name: 'Vltava River Dinner Cruise with Live Music', type: 'Boat Tour', description: 'Glide past illuminated landmarks on an evening river cruise with Czech cuisine and jazz or classical music' },
                    { name: 'Kutná Hora & Bone Church Day Trip', type: 'Day Trip', description: 'Visit the UNESCO-listed medieval silver-mining town and the hauntingly decorated Sedlec Ossuary' },
                    { name: 'Prague Jewish Heritage & Synagogues Tour', type: 'Cultural Tour', description: 'Discover the remarkably preserved Jewish Quarter with its historic synagogues and Old Jewish Cemetery' },
                    { name: 'Czech Cuisine Cooking Class & Market Visit', type: 'Food Tour', description: 'Shop at local markets and learn to prepare traditional dishes like svíčková and trdelník' },
                    { name: 'Petřín Hill & Lesser Town Walking Tour', type: 'Walking Tour', description: 'Climb Petřín Tower for panoramic views and wander the charming baroque streets of Malá Strana' },
                    { name: 'Classical Concert at Municipal House or Church', type: 'Cultural Tour', description: 'Enjoy a world-class classical performance in one of Prague\'s magnificent art nouveau or baroque venues' },
                    { name: 'Český Krumlov Fairytale Town Day Trip', type: 'Day Trip', description: 'Explore the UNESCO-listed medieval town with its stunning castle, riverside setting, and Renaissance theater' },
                    { name: 'Communist History & Cold War Bunker Tour', type: 'Historical Tour', description: 'Uncover Prague\'s communist-era past with visits to Cold War bunkers and the Museum of Communism' },
                    { name: 'Prague by Night Guided Photography Walk', type: 'Walking Tour', description: 'Capture the magical atmosphere of illuminated spires and bridges on an evening photography tour' }
                ],
                        tips: [
                            'Czech beer is cheaper than water',
                            'Visit Charles Bridge at sunrise',
                            'Try trdelník (chimney cake)',
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
                image: 'https://images.unsplash.com/photo-1723623568881-4773b11b461a?w=800',
                cities: {
                    tallinn: {
                        id: 'tallinn',
                        name: 'Tallinn',
                        country: 'Estonia',
                        region: 'Schengen',
                        description: 'Tallinn is a captivating blend of medieval grandeur and cutting-edge digital innovation, boasting one of Europe\'s best-preserved old towns wrapped in 13th-century limestone walls and watchtowers. The UNESCO-listed Old Town features winding cobblestone lanes, Gothic spires, and enchanting merchant houses that transport visitors back to Hanseatic trading days. Beyond the ancient walls, Tallinn surprises with a vibrant startup scene, trendy Kalamaja neighborhood, and the futuristic Telliskivi Creative City. Estonian cuisine, featuring rye bread, smoked fish, and craft spirits, adds delicious depth to any visit.',
                        image: 'https://images.unsplash.com/photo-1727076641950-b0f418da0a4b?w=800',
                        population: '450,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                    { name: 'Medieval Old Town Walking Tour', type: 'Walking Tour', description: 'Wander through Tallinn\'s fairy-tale UNESCO quarter with its Gothic churches, guild halls, and secret courtyards' },
                    { name: 'Estonian Food & Craft Beer Tasting Tour', type: 'Food Tour', description: 'Sample traditional Estonian dishes like black bread, smoked eel, and local craft beers in Old Town taverns' },
                    { name: 'Kadriorg Palace & KUMU Art Museum Visit', type: 'Museum', description: 'Explore Peter the Great\'s baroque palace and Estonia\'s premier art museum set in beautiful parklands' },
                    { name: 'Tallinn\'s KGB & Soviet History Walking Tour', type: 'Historical Tour', description: 'Uncover Cold War secrets at the former KGB headquarters and learn about Estonia\'s path to independence' },
                    { name: 'Lahemaa National Park & Manor Houses Day Trip', type: 'Day Trip', description: 'Discover pristine Estonian nature, coastal bogs, and elegant Baltic German manor estates' },
                    { name: 'Telliskivi Creative City & Kalamaja Hipster Tour', type: 'Cultural Tour', description: 'Explore Tallinn\'s trendiest neighborhoods filled with street art, design shops, and artisan cafés' },
                    { name: 'Medieval Dining Experience at Olde Hansa', type: 'Food Tour', description: 'Feast on authentic medieval recipes by candlelight in a faithfully recreated Hanseatic merchant\'s house' },
                    { name: 'Tallinn City Walls & Towers Exploration', type: 'Walking Tour', description: 'Walk along the remarkably intact medieval ramparts and climb ancient watchtowers for panoramic views' },
                    { name: 'Estonian Sauna & Wellness Ritual Experience', type: 'Cultural Tour', description: 'Experience the cherished Estonian tradition of smoke sauna rituals followed by local herbal teas' },
                    { name: 'Day Trip to Pärnu & Estonian Riviera', type: 'Day Trip', description: 'Visit Estonia\'s charming summer capital with its sandy beach, spa culture, and art nouveau villas' },
                    { name: 'Tallinn Sea Fortress & Patarei Prison Tour', type: 'Historical Tour', description: 'Explore the haunting seaside fortress that served as a prison through both Nazi and Soviet occupations' },
                    { name: 'E-Estonia Digital Society & Innovation Tour', type: 'Cultural Tour', description: 'Discover how Tallinn became the world\'s most digitally advanced society with e-residency and digital governance' }
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
                image: 'https://images.unsplash.com/photo-1725731220989-40f2e262ab30?w=800',
                cities: {
                    riga: {
                        id: 'riga',
                        name: 'Riga',
                        country: 'Latvia',
                        region: 'Schengen',
                        description: 'Riga, Latvia\'s vibrant capital on the Daugava River, dazzles visitors with Europe\'s finest collection of art nouveau architecture, featuring over 800 ornately decorated building facades. The UNESCO-listed Old Town is a medieval treasure of cobblestone streets, the soaring St. Peter\'s Church, and the iconic House of the Blackheads. Riga\'s Central Market, housed in former Zeppelin hangars, is one of Europe\'s largest and most colorful. The city\'s thriving cultural scene, acclaimed restaurants, and lively nightlife make it one of the Baltic\'s most exciting destinations.',
                        image: 'https://images.unsplash.com/photo-1683730796330-06e60e3438d8?w=800',
                        population: '630,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 50, mid: 100, luxury: 260 },
                        attractions: [
                    { name: 'Art Nouveau Architecture Walking Tour', type: 'Walking Tour', description: 'Marvel at Riga\'s unrivaled collection of ornate Jugendstil facades in the Alberta and Elizabetes street district' },
                    { name: 'Riga Central Market & Latvian Food Tasting', type: 'Food Tour', description: 'Explore massive Zeppelin hangars transformed into Europe\'s largest market and sample smoked fish, rye bread, and more' },
                    { name: 'Old Riga Medieval Heritage Walking Tour', type: 'Walking Tour', description: 'Discover the UNESCO-listed Old Town with its Gothic churches, guild houses, and the iconic Blackheads House' },
                    { name: 'Day Trip to Jūrmala Beach & Spa Resort', type: 'Day Trip', description: 'Visit Latvia\'s beloved seaside resort town with its long white-sand beach and charming wooden villas' },
                    { name: 'Latvian Black Balsam & Cocktail Experience', type: 'Food Tour', description: 'Learn the story of Latvia\'s legendary herbal liqueur and enjoy creative cocktails in Old Riga\'s best bars' },
                    { name: 'Rundale Palace & Baroque Gardens Excursion', type: 'Day Trip', description: 'Visit the stunning \'Versailles of the Baltics,\' a masterpiece of baroque and rococo architecture' },
                    { name: 'KGB Building & Soviet Occupation Museum Tour', type: 'Historical Tour', description: 'Explore the chilling former KGB headquarters known as the Corner House and learn about Soviet-era Latvia' },
                    { name: 'Riga Canal Boat Tour & City Parks Cruise', type: 'Boat Tour', description: 'Glide through Riga\'s scenic canal past parks, bridges, and the National Opera on a relaxing boat tour' },
                    { name: 'Sigulda & Gauja National Park Adventure', type: 'Adventure', description: 'Discover Latvia\'s \'Switzerland\' with its medieval castles, sandstone caves, and cable car over the Gauja Valley' },
                    { name: 'Latvian Cooking Class & Traditional Dinner', type: 'Food Tour', description: 'Learn to prepare classic Latvian dishes like grey peas with bacon, potato pancakes, and layered rye bread' },
                    { name: 'St. Peter\'s Church Tower & Panoramic Views', type: 'Historical Tour', description: 'Ascend the tower of this 13th-century Gothic masterpiece for breathtaking 360-degree views of Riga' },
                    { name: 'Riga\'s Wooden Architecture & Kalnciema Quarter', type: 'Cultural Tour', description: 'Explore the charming wooden neighborhood of Kalnciema with its artisan markets and traditional Latvian crafts' }
                ],
                        tips: [
                            'Alberta Street for best Art Nouveau',
                            'Riga Black Balsam is local liqueur',
                            'Day trip to Jūrmala beach resort',
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
                image: 'https://images.unsplash.com/photo-1768148596167-f8d2a6f763c4?w=800',
                cities: {
                    vaduz: {
                        id: 'vaduz',
                        name: 'Vaduz',
                        country: 'Liechtenstein',
                        region: 'Schengen',
                        description: 'Vaduz, the tiny capital of Liechtenstein, is nestled in the Rhine Valley between Switzerland and Austria, overshadowed dramatically by the hilltop Vaduz Castle, residence of the reigning princely family. Despite being one of Europe\'s smallest capitals, Vaduz punches above its weight with world-class museums, including the Kunstmuseum Liechtenstein and the Postage Stamp Museum. The surrounding Alpine scenery offers superb hiking and skiing, while the pedestrian-friendly city center features excellent restaurants and duty-free shopping. This microstate gem offers a unique blend of royal heritage and mountain charm.',
                        image: 'https://images.unsplash.com/photo-1657750861879-09fac2abb93a?w=800',
                        population: '5,700',
                        bestTime: 'May to September',
                        avgBudget: { budget: 100, mid: 180, luxury: 400 },
                        attractions: [
                    { name: 'Vaduz Castle & Royal Heritage Walking Tour', type: 'Walking Tour', description: 'Walk up to the iconic hilltop castle and learn about the princely family\'s 300-year rule of Liechtenstein' },
                    { name: 'Kunstmuseum Liechtenstein Modern Art Visit', type: 'Museum', description: 'Explore the striking black cube museum housing the princely family\'s impressive international art collection' },
                    { name: 'Liechtenstein Postage Stamp Museum Tour', type: 'Museum', description: 'Discover the fascinating philatelic history of this tiny nation, famous worldwide for its collectible stamps' },
                    { name: 'Rhine Valley Wine Trail & Tasting', type: 'Wine Tour', description: 'Sample the prince\'s own wines and other local vintages along Liechtenstein\'s scenic vineyard trails' },
                    { name: 'Malbun Alpine Village & Mountain Hiking', type: 'Adventure', description: 'Hike through pristine Alpine meadows in Liechtenstein\'s mountain resort with panoramic peak views' },
                    { name: 'Three Countries Bike Tour: Liechtenstein-Austria-Switzerland', type: 'Bike Tour', description: 'Cycle through three countries in one day along the scenic Rhine River cycling path' },
                    { name: 'Treasure Chamber & National Museum Visit', type: 'Museum', description: 'View the princely family\'s priceless treasures including moon rocks, Fabergé eggs, and rare artworks' },
                    { name: 'Vaduz to Malbun Scenic Mountain Drive', type: 'Day Trip', description: 'Wind through spectacular Alpine scenery from the capital to the charming mountain village of Malbun' },
                    { name: 'Liechtenstein Passport Stamp & City Exploration', type: 'Walking Tour', description: 'Get the famous souvenir passport stamp and explore Vaduz\'s compact pedestrian center and public art' },
                    { name: 'Gutenberg Castle & Balzers Village Tour', type: 'Historical Tour', description: 'Visit the medieval hilltop castle in Balzers and explore the charming southern Liechtenstein village' },
                    { name: 'Fürstensteig Ridge Trail Alpine Hike', type: 'Adventure', description: 'Tackle Liechtenstein\'s most famous mountain trail along dramatic ridgelines with breathtaking valley views' },
                    { name: 'Liechtenstein Culinary Experience & Local Cuisine', type: 'Food Tour', description: 'Savor hearty Alpine cuisine including käsknöpfle, ribel, and locally produced cheese and wine' }
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
                image: 'https://images.unsplash.com/photo-1573591561609-226317f8372c?w=800',
                cities: {
                    vilnius: {
                        id: 'vilnius',
                        name: 'Vilnius',
                        country: 'Lithuania',
                        region: 'Schengen',
                        description: 'Vilnius boasts one of Europe\'s largest and best-preserved baroque old towns, a UNESCO World Heritage site brimming with ornate churches, cobblestone streets, and hidden courtyards. The city\'s bohemian Užupis district famously declared itself an independent republic, complete with its own constitution and quirky artistic spirit. Vilnius surprises with its rich multicultural heritage spanning Lithuanian, Polish, Jewish, and Russian influences, visible in its architecture, cuisine, and traditions. From the hilltop Gediminas Tower to cutting-edge street art, Vilnius is the Baltic\'s most underrated capital.',
                        image: 'https://images.unsplash.com/photo-1754338036891-c4e0876e6051?w=800',
                        population: '590,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 45, mid: 90, luxury: 240 },
                        attractions: [
                    { name: 'Vilnius Old Town & Baroque Churches Tour', type: 'Walking Tour', description: 'Explore Europe\'s largest baroque old town with its stunning churches, university courtyards, and Gates of Dawn' },
                    { name: 'Užupis Republic & Street Art Walking Tour', type: 'Cultural Tour', description: 'Visit the self-declared bohemian republic, read its playful constitution, and discover vibrant street art' },
                    { name: 'Gediminas Tower & Castle Hill Panoramic Tour', type: 'Historical Tour', description: 'Climb to the iconic hilltop tower for sweeping views and learn about Lithuania\'s grand ducal history' },
                    { name: 'Lithuanian Cepelinai Cooking Class', type: 'Food Tour', description: 'Learn to make Lithuania\'s beloved national dish of stuffed potato dumplings and other traditional recipes' },
                    { name: 'Trakai Island Castle & Lake Day Trip', type: 'Day Trip', description: 'Visit the fairy-tale red-brick castle on an island in Lake Galvė and taste Karaite pastries' },
                    { name: 'Vilnius Jewish Heritage & Holocaust Memorial Tour', type: 'Historical Tour', description: 'Trace the history of the \'Jerusalem of the North\' through its remaining synagogue, memorials, and stories' },
                    { name: 'Lithuanian Craft Beer & Pub Crawl', type: 'Food Tour', description: 'Discover Lithuania\'s thriving craft beer scene with tastings of unique farmhouse ales and modern brews' },
                    { name: 'Hill of Crosses & Šiauliai Day Trip', type: 'Day Trip', description: 'Visit the extraordinary pilgrimage site covered in over 200,000 crosses, a powerful symbol of Lithuanian faith' },
                    { name: 'KGB Museum & Soviet Bunker Experience', type: 'Historical Tour', description: 'Explore the former KGB prison and visit a Cold War nuclear bunker for an immersive Soviet-era experience' },
                    { name: 'Vilnius Food Market & Local Gastronomy Tour', type: 'Food Tour', description: 'Taste your way through Halės Market and modern Vilnius eateries featuring smoked meats, cheeses, and šakotis' },
                    { name: 'Kernavė Archaeological Site Day Trip', type: 'Day Trip', description: 'Explore the UNESCO-listed ancient capital of Lithuania with its impressive hillfort mounds and museum' },
                    { name: 'Hot Air Balloon Flight Over Vilnius Old Town', type: 'Adventure', description: 'Soar above the baroque spires and red rooftops of Vilnius on a magical hot air balloon ride' }
                ],
                        tips: [
                            'Užupis declares itself an independent republic',
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
                image: 'https://images.unsplash.com/photo-1767709043325-df6c0eecb1ec?w=800',
                cities: {
                    luxembourgCity: {
                        id: 'luxembourgCity',
                        name: 'Luxembourg City',
                        country: 'Luxembourg',
                        region: 'Schengen',
                        description: 'Luxembourg City is a striking fortress capital perched on dramatic gorges and cliffs, where medieval casemates and ancient ramparts blend seamlessly with the gleaming glass towers of Europe\'s financial hub. The UNESCO-listed old quarters of the Ville Haute and the lower Grund district, connected by spectacular viaducts and elevators, create one of Europe\'s most dramatically situated cities. Despite its small size, Luxembourg City offers world-class museums, Michelin-starred dining, and a remarkably multicultural atmosphere with residents from over 170 nationalities. The surrounding countryside of the Müllerthal region provides stunning hiking through Luxembourg\'s Little Switzerland.',
                        image: 'https://images.unsplash.com/photo-1717940895981-a5dc7658a967?w=800',
                        population: '130,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 90, mid: 170, luxury: 420 },
                        attractions: [
                    { name: 'Bock Casemates & Fortress Walking Tour', type: 'Historical Tour', description: 'Explore the UNESCO-listed underground tunnels carved into the cliff that once sheltered thousands of soldiers' },
                    { name: 'Ville Haute Old Town & Grand Ducal Palace Walk', type: 'Walking Tour', description: 'Stroll through the elegant upper city past the Grand Duke\'s palace, Notre-Dame Cathedral, and Place d\'Armes' },
                    { name: 'Grund Valley & Alzette River Quarter Tour', type: 'Walking Tour', description: 'Descend to the charming lower city along the Alzette River with its abbey, gardens, and riverside cafés' },
                    { name: 'Müllerthal Trail & Little Switzerland Hike', type: 'Adventure', description: 'Hike through dramatic sandstone rock formations, lush forests, and cascading waterfalls in Luxembourg\'s countryside' },
                    { name: 'Luxembourg Wine & Moselle Valley Day Trip', type: 'Wine Tour', description: 'Tour vineyards along the scenic Moselle River and taste Luxembourg\'s excellent Riesling and crémant wines' },
                    { name: 'MUDAM Modern Art & Philharmonie Culture Tour', type: 'Museum', description: 'Visit the I.M. Pei-designed modern art museum and the world-class Philharmonie concert hall' },
                    { name: 'Luxembourg City Culinary & Market Tour', type: 'Food Tour', description: 'Discover the multicultural food scene with tastings of judd mat gaardebounen, kniddelen, and French-influenced cuisine' },
                    { name: 'Vianden Castle & Our River Valley Excursion', type: 'Day Trip', description: 'Visit one of Europe\'s most beautiful feudal castles perched above the picturesque town of Vianden' },
                    { name: 'Chemin de la Corniche Panoramic Walk', type: 'Walking Tour', description: 'Walk along \'Europe\'s most beautiful balcony,\' offering spectacular views over the Alzette Valley and Grund' },
                    { name: 'Luxembourg American Cemetery & WWII Memorial', type: 'Historical Tour', description: 'Pay respects at General Patton\'s final resting place and learn about Luxembourg\'s liberation in WWII' },
                    { name: 'Echternach Abbey & Dancing Procession Tour', type: 'Cultural Tour', description: 'Visit Luxembourg\'s oldest town with its ancient abbey and learn about the UNESCO-listed dancing procession' },
                    { name: 'Luxembourg by Night Illumination Walk', type: 'Walking Tour', description: 'Experience the dramatically lit fortress walls, bridges, and spires of Luxembourg City after dark' }
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
                image: 'https://images.unsplash.com/photo-1769538516461-fc76a857ccf8?w=800',
                cities: {
                    valletta: {
                        id: 'valletta',
                        name: 'Valletta',
                        country: 'Malta',
                        region: 'Schengen',
                        description: 'Valletta, the fortress capital of Malta built by the Knights of St. John, is a UNESCO World Heritage city packed with baroque masterpieces, grand palaces, and dramatic harbor fortifications on a compact peninsula. Despite being one of Europe\'s smallest capitals, Valletta is extraordinarily rich in art and history, with Caravaggio paintings in St. John\'s Co-Cathedral and 16th-century auberges lining its grid-pattern streets. The city has undergone a vibrant renaissance with Renzo Piano\'s striking Parliament building and the restored Royal Opera House. Honey-colored limestone facades, panoramic harbor views, and warm Mediterranean hospitality make Valletta utterly unforgettable.',
                        image: 'https://images.unsplash.com/photo-1669294841689-0ceb34ad40c1?w=800',
                        population: '6,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 60, mid: 120, luxury: 320 },
                        attractions: [
                    { name: 'St. John\'s Co-Cathedral & Caravaggio Tour', type: 'Historical Tour', description: 'Marvel at the lavishly decorated cathedral housing two original Caravaggio masterpieces and ornate knight\'s chapels' },
                    { name: 'Grand Master\'s Palace & State Rooms Visit', type: 'Palace Tour', description: 'Tour the magnificent palace of the Knights of Malta with its armory, tapestries, and painted corridors' },
                    { name: 'Valletta Grand Harbour Boat Tour', type: 'Boat Tour', description: 'Cruise the spectacular fortified harbors that have shaped Malta\'s history from the Phoenicians to WWII' },
                    { name: 'Malta\'s Three Cities & Vittoriosa Walking Tour', type: 'Walking Tour', description: 'Cross the harbor to explore the atmospheric medieval cities of Birgu, Senglea, and Cospicua' },
                    { name: 'Maltese Food & Pastizzi Tasting Tour', type: 'Food Tour', description: 'Sample traditional pastizzi, rabbit stew, and Maltese wines in Valletta\'s characterful eateries and bakeries' },
                    { name: 'Upper Barrakka Gardens & Saluting Battery', type: 'Cultural Tour', description: 'Watch the daily cannon salute from the stunning terraced gardens with panoramic Grand Harbour views' },
                    { name: 'Malta at War Museum & WWII Shelter Tour', type: 'Museum', description: 'Descend into underground wartime shelters and learn about Malta\'s heroic resistance during the WWII siege' },
                    { name: 'Mdina Ancient Capital & Rabat Day Trip', type: 'Day Trip', description: 'Explore the \'Silent City\' of Mdina with its medieval walls, palaces, and catacombs in nearby Rabat' },
                    { name: 'Hypogeum & Megalithic Temples Prehistoric Tour', type: 'Historical Tour', description: 'Visit the extraordinary UNESCO-listed underground temple and Malta\'s ancient megalithic structures' },
                    { name: 'Blue Grotto & Marsaxlokk Fishing Village Trip', type: 'Day Trip', description: 'Boat through the luminous Blue Grotto sea caves and visit the colorful traditional fishing village' },
                    { name: 'Fort St. Elmo & National War Museum', type: 'Museum', description: 'Explore the star-shaped fortress that bore the brunt of the Great Siege of 1565 and its military collections' },
                    { name: 'Valletta Sunset Wine & Dine Experience', type: 'Food Tour', description: 'Enjoy Maltese wines and Mediterranean cuisine at a rooftop restaurant as the sun sets over the Grand Harbour' }
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
                        description: 'Gozo, Malta\'s smaller sister island, is a tranquil rural paradise of terraced hillsides, ancient temples, and dramatic coastal scenery that feels a world away from busy Malta. The island\'s crown jewel is the Citadella in Victoria, a fortified hilltop city with cathedral views stretching across the entire island to the sea. Gozo is home to the megalithic Ġgantija Temples, among the world\'s oldest freestanding structures, predating Stonehenge and the Egyptian pyramids. Crystal-clear bays, excellent diving, traditional farmhouses, and some of the Mediterranean\'s finest artisanal cheese make Gozo an enchanting escape.',
                        image: 'https://images.unsplash.com/photo-1564948612967-076ea84cffc4?w=800',
                        population: '37,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 55, mid: 110, luxury: 280 },
                        attractions: [
                    { name: 'Citadella & Victoria Fortified City Tour', type: 'Historical Tour', description: 'Explore the ancient fortified hilltop citadel with its cathedral, museums, and panoramic island views' },
                    { name: 'Ġgantija Temples & Prehistoric Heritage Visit', type: 'Historical Tour', description: 'Marvel at 5,600-year-old megalithic temples that predate Stonehenge and the pyramids of Giza' },
                    { name: 'Gozo Coastal Cliffs & Blue Hole Diving', type: 'Adventure', description: 'Dive or snorkel at the famous Blue Hole and Inland Sea, among the Mediterranean\'s best dive sites' },
                    { name: 'Gozo Island Jeep Safari & Hidden Gems Tour', type: 'Adventure', description: 'Discover Gozo\'s secret bays, remote chapels, and dramatic landscapes on an off-road island adventure' },
                    { name: 'Ramla Bay & Calypso\'s Cave Beach Excursion', type: 'Day Trip', description: 'Visit Gozo\'s most beautiful red-sand beach and the legendary cave linked to Homer\'s Odyssey' },
                    { name: 'Gozo Farmhouse Cheese & Wine Tasting', type: 'Food Tour', description: 'Visit traditional farmhouses to taste handmade ġbejna cheese, sundried tomatoes, and local Gozitan wines' },
                    { name: 'Xlendi Bay & Dwejra Coastal Walking Tour', type: 'Walking Tour', description: 'Hike along spectacular coastal paths from the charming inlet of Xlendi to the dramatic Dwejra coastline' },
                    { name: 'Gozo Boat Tour & Sea Caves Exploration', type: 'Boat Tour', description: 'Circle the island by boat discovering hidden caves, secluded bays, and the stunning Fungus Rock' },
                    { name: 'Ta\' Pinu Basilica & Spiritual Heritage Tour', type: 'Cultural Tour', description: 'Visit the magnificent national shrine basilica set amid rural countryside, a major pilgrimage destination' },
                    { name: 'Gozo Salt Pans & Traditional Crafts Tour', type: 'Cultural Tour', description: 'See centuries-old salt harvesting at Marsalforn and explore traditional Gozitan lace and glass-blowing' },
                    { name: 'Comino Blue Lagoon Day Trip from Gozo', type: 'Boat Tour', description: 'Take a short boat ride to the stunning turquoise Blue Lagoon of tiny Comino island for swimming' },
                    { name: 'Gozo Sunset Kayaking & Cliff Adventure', type: 'Adventure', description: 'Paddle along Gozo\'s dramatic coastline at sunset, exploring sea caves and hidden coves by kayak' }
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
                capital: 'Chișinău',
                currency: 'Moldovan Leu (MDL)',
                language: 'Romanian',
                description: 'Wine country of Eastern Europe with monasteries and Soviet legacy',
                image: 'https://images.unsplash.com/photo-1762375163836-9f13469f1acc?w=800',
                cities: {
                    chisinau: {
                        id: 'chisinau',
                        name: 'Chișinău',
                        country: 'Moldova',
                        region: 'Europe',
                        description: 'Chișinău, Moldova\'s leafy capital, is an intriguing blend of Soviet-era grandeur, bustling markets, and an emerging wine and food scene that rewards adventurous travelers. The city\'s wide boulevards are lined with parks, Orthodox cathedrals, and a fascinating mix of neoclassical and brutalist architecture that tells the story of Moldova\'s complex history. Moldova is Europe\'s hidden wine powerhouse, home to the Guinness-record Mileștii Mici wine cellars, and Chișinău serves as the gateway to extraordinary vineyard experiences. Off the usual tourist trail, Chișinău offers authentic Eastern European charm and incredible value.',
                        image: 'https://images.unsplash.com/photo-1631611411148-73449966fde0?w=800',
                        population: '670,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                    { name: 'Chișinău Soviet Architecture & History Tour', type: 'Walking Tour', description: 'Explore the city\'s grand Soviet-era boulevards, monuments, and brutalist buildings with a local historian guide' },
                    { name: 'Mileștii Mici Underground Wine City Tour', type: 'Wine Tour', description: 'Descend into the world\'s largest wine cellar, a vast underground city holding nearly two million bottles' },
                    { name: 'Cricova Winery Sparkling Wine Experience', type: 'Wine Tour', description: 'Tour another legendary underground wine city and taste award-winning sparkling wines in decorated tunnels' },
                    { name: 'Chișinău Central Market & Moldovan Food Tour', type: 'Food Tour', description: 'Browse the vibrant Piața Centrală and taste traditional mămăligă, plăcinte, and Moldovan charcuterie' },
                    { name: 'Orheiul Vechi Cave Monastery Day Trip', type: 'Day Trip', description: 'Visit the stunning open-air archaeological complex with its cliff-carved Orthodox monastery above the Răut River' },
                    { name: 'Transnistria & Tiraspol Soviet Time Capsule Tour', type: 'Day Trip', description: 'Cross into the breakaway region frozen in Soviet time, with Lenin statues, hammer-and-sickle emblems, and unique culture' },
                    { name: 'National Museum of Ethnography & Folk Art', type: 'Museum', description: 'Discover Moldova\'s rich folk traditions through textiles, ceramics, woodcarving, and traditional costumes' },
                    { name: 'Moldovan Monastery Trail & Painted Churches', type: 'Cultural Tour', description: 'Visit beautifully frescoed Orthodox monasteries including Căpriana, Hâncu, and Curchi in the countryside' },
                    { name: 'Chișinău Parks & Cathedral Walking Tour', type: 'Walking Tour', description: 'Stroll through Chișinău\'s green heart past the Nativity Cathedral, Triumphal Arch, and Ștefan cel Mare Park' },
                    { name: 'Traditional Moldovan Cooking & Wine Pairing', type: 'Food Tour', description: 'Learn to cook authentic Moldovan dishes like sarmale and zeamă paired with local wines at a village home' },
                    { name: 'Gagauzia Autonomous Region Cultural Excursion', type: 'Day Trip', description: 'Explore the unique Turkic-speaking autonomous region with its distinct culture, cuisine, and wine traditions' },
                    { name: 'Chișinău Nightlife & Wine Bar Crawl', type: 'Cultural Tour', description: 'Experience Chișinău\'s lively evening scene from sophisticated wine bars to vibrant local nightclubs' }
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
                image: 'https://images.unsplash.com/photo-1702390849292-7848ee97970e?w=800',
                cities: {
                    monteCarlo: {
                        id: 'monteCarlo',
                        name: 'Monte Carlo',
                        country: 'Monaco',
                        region: 'Schengen',
                        description: 'Monte Carlo, the glamorous jewel of Monaco, exudes luxury and sophistication from its legendary casino square to its yacht-filled harbor, all set against a stunning Riviera backdrop. This tiny principality packs extraordinary experiences into just two square kilometers, from the ornate Monte Carlo Casino and the Oceanographic Museum to the winding streets of the old Le Rocher quarter. Monte Carlo is synonymous with the Formula One Grand Prix, whose circuit runs through the city streets, and with a lifestyle of elegant hotels, Michelin-starred restaurants, and exclusive boutiques. Despite its opulent reputation, Monaco\'s public gardens, coastal paths, and rich cultural offerings are accessible to all visitors.',
                        image: 'https://images.unsplash.com/photo-1588193263421-389147656e41?w=800',
                        population: '15,000',
                        bestTime: 'May to September (Grand Prix late May)',
                        avgBudget: { budget: 100, mid: 250, luxury: 800 },
                        attractions: [
                    { name: 'Monte Carlo Casino & Belle Époque Tour', type: 'Cultural Tour', description: 'Explore the legendary casino\'s ornate salons designed by Charles Garnier and learn its glamorous history' },
                    { name: 'Prince\'s Palace & Old Town Le Rocher Walk', type: 'Palace Tour', description: 'Watch the changing of the guard and tour the hilltop palace, then wander the charming medieval old quarter' },
                    { name: 'Oceanographic Museum & Aquarium Visit', type: 'Museum', description: 'Discover the world-class marine museum founded by Prince Albert I, perched dramatically on a clifftop' },
                    { name: 'Monaco Grand Prix Circuit Walking Tour', type: 'Walking Tour', description: 'Walk the legendary F1 street circuit through the famous tunnel, hairpin, and harbor chicane' },
                    { name: 'Monaco Harbor & Luxury Yacht Cruise', type: 'Boat Tour', description: 'Cruise past billionaires\' superyachts and admire Monaco\'s spectacular skyline from the Mediterranean' },
                    { name: 'Monte Carlo Food & Gourmet Tasting Tour', type: 'Food Tour', description: 'Taste Monegasque specialties like barbagiuan, socca, and refined French-Italian cuisine in elegant settings' },
                    { name: 'Exotic Garden & Prehistoric Cave Visit', type: 'Adventure', description: 'Explore the clifftop botanical garden of rare succulents and descend into an ancient stalactite cave' },
                    { name: 'Èze Village & French Riviera Day Trip', type: 'Day Trip', description: 'Visit the stunning medieval hilltop village of Èze with its exotic garden and panoramic sea views' },
                    { name: 'Monaco Japanese Garden & Seaside Promenade', type: 'Walking Tour', description: 'Stroll through the serene zen garden and along the beautiful Larvotto Beach promenade' },
                    { name: 'Monte Carlo Shopping & Luxury Experience Tour', type: 'Cultural Tour', description: 'Browse the Carré d\'Or golden square featuring the world\'s most prestigious fashion and jewelry boutiques' },
                    { name: 'Nice & Monaco Coastal Helicopter Transfer', type: 'Adventure', description: 'Experience a thrilling seven-minute helicopter flight between Nice and Monaco along the stunning coastline' },
                    { name: 'Monaco Wine & Champagne Evening Experience', type: 'Wine Tour', description: 'Indulge in a guided champagne and fine wine tasting at an elegant Monte Carlo venue with harbor views' }
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
                image: 'https://images.unsplash.com/photo-1630769741727-e5fed3e2ad56?w=800',
                cities: {
                    kotor: {
                        id: 'kotor',
                        name: 'Kotor',
                        country: 'Montenegro',
                        region: 'Europe',
                        description: 'Kotor is a breathtaking medieval town nestled at the head of Europe\'s southernmost fjord-like bay, enclosed by dramatic mountain walls and remarkably intact 12th-century fortifications. The UNESCO-listed Old Town is a labyrinth of narrow limestone streets, hidden squares, Romanesque churches, and Venetian palaces that evoke centuries of maritime tradition. Climbing the 1,350 steps of the ancient fortress walls to the Castle of San Giovanni rewards with one of the most spectacular panoramic views in all of Europe. Kotor\'s stunning Bay of Kotor setting, vibrant café culture, and accessibility to pristine Montenegrin nature make it an unmissable Adriatic destination.',
                        image: 'https://images.unsplash.com/photo-1614122027743-50a9e6e8002f?w=800',
                        population: '13,000',
                        bestTime: 'May to June, September to October',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                    { name: 'Old Town Walls & San Giovanni Fortress Climb', type: 'Adventure', description: 'Climb 1,350 ancient steps up the mountainside fortifications for jaw-dropping views over the Bay of Kotor' },
                    { name: 'Kotor Old Town Medieval Walking Tour', type: 'Walking Tour', description: 'Navigate the atmospheric labyrinth of medieval squares, Venetian palaces, and Romanesque churches' },
                    { name: 'Bay of Kotor Boat Tour & Our Lady of the Rocks', type: 'Boat Tour', description: 'Cruise the stunning fjord-like bay and visit the iconic island church built on an artificial reef' },
                    { name: 'Perast Village & Baroque Palaces Excursion', type: 'Day Trip', description: 'Explore the enchanting former maritime town with its elegant stone palaces and waterfront promenades' },
                    { name: 'Montenegrin Food & Wine Tasting Tour', type: 'Food Tour', description: 'Sample local specialties including smoked ham, cheese, seafood, and robust Montenegrin Vranac wines' },
                    { name: 'Lovćen National Park & Mausoleum Day Trip', type: 'Day Trip', description: 'Drive the serpentine road to the mountaintop mausoleum of Petar II Petrović-Njegoš for epic panoramas' },
                    { name: 'Kotor Cats Walking Tour & Cat Museum', type: 'Cultural Tour', description: 'Discover Kotor\'s beloved cat culture through its famous feline residents, cat shops, and quirky museum' },
                    { name: 'Kayaking the Bay of Kotor at Sunset', type: 'Adventure', description: 'Paddle through the tranquil waters of Europe\'s southernmost fjord as the mountains glow at sunset' },
                    { name: 'Blue Cave & Submarine Tunnel Boat Adventure', type: 'Boat Tour', description: 'Visit the luminous Blue Cave at Luštica peninsula and explore a secret Yugoslav-era submarine tunnel' },
                    { name: 'Durmitor National Park & Tara Canyon Day Trip', type: 'Day Trip', description: 'Journey to Montenegro\'s dramatic mountain park with Europe\'s deepest canyon and pristine glacial lakes' },
                    { name: 'Maritime Museum & Kotor Naval Heritage Tour', type: 'Museum', description: 'Explore centuries of Kotor\'s seafaring history in a historic palace overlooking the Old Town square' },
                    { name: 'Kotor to Cetinje Old Royal Capital Scenic Drive', type: 'Day Trip', description: 'Drive the legendary 25-hairpin-turn road over the mountain to Montenegro\'s former royal capital' }
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
                        description: 'Budva is the crown jewel of the Montenegrin Riviera, combining a beautifully preserved medieval Old Town with lively beaches, vibrant nightlife, and a stunning Adriatic coastline. The fortified Stari Grad perches on a rocky peninsula, its terracotta rooftops and stone churches creating a postcard-perfect scene against azure waters. Budva\'s coastline features some of the Adriatic\'s finest beaches, from the bustling Mogren Beach to the iconic Sveti Stefan island resort nearby. Known as the \'Montenegrin Miami,\' Budva comes alive in summer with open-air festivals, beach clubs, and a lively restaurant and bar scene.',
                        image: 'https://images.unsplash.com/photo-1736786723066-40b171486a12?w=800',
                        population: '20,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 55, mid: 110, luxury: 300 },
                        attractions: [
                    { name: 'Budva Old Town & Citadela Walking Tour', type: 'Walking Tour', description: 'Explore the 2,500-year-old fortified old town with its medieval churches, citadel, and charming squares' },
                    { name: 'Sveti Stefan Island & Royal Beach Excursion', type: 'Day Trip', description: 'Visit the iconic fortified island village and relax on the pristine beaches of the Aman resort coastline' },
                    { name: 'Budva Riviera Beach Hopping Boat Tour', type: 'Boat Tour', description: 'Cruise along the stunning coastline stopping at hidden coves, Jaz Beach, and secluded swimming spots' },
                    { name: 'Montenegrin Seafood & Wine Waterfront Dinner', type: 'Food Tour', description: 'Feast on fresh Adriatic seafood and local Montenegrin wines at a traditional konoba by the harbor' },
                    { name: 'Mogren Beach & Coastal Cave Walk', type: 'Adventure', description: 'Walk the scenic cliffside path to the beautiful Mogren beaches and explore a natural coastal cave' },
                    { name: 'Budva Sunset Kayaking & Paddleboarding', type: 'Adventure', description: 'Paddle along the medieval walls at golden hour, exploring sea caves and hidden beaches by kayak or SUP' },
                    { name: 'Cetinje Royal Capital & Ostrog Monastery Trip', type: 'Day Trip', description: 'Visit Montenegro\'s historic royal capital and the spectacular cliff-embedded Ostrog Monastery' },
                    { name: 'Skadar Lake National Park & Wine Day Trip', type: 'Day Trip', description: 'Cruise the Balkans\' largest lake spotting pelicans and visit family wineries in the Crmnica valley' },
                    { name: 'Budva Nightlife & Beach Club Experience', type: 'Cultural Tour', description: 'Experience Budva\'s legendary summer nightlife scene at top beach bars and open-air clubs' },
                    { name: 'Kotor Bay & Blue Cave Boat Adventure', type: 'Boat Tour', description: 'Full-day boat trip through the Bay of Kotor with stops at the Blue Cave, Perast, and Our Lady of the Rocks' },
                    { name: 'Budva Old Town Sunset & Photography Tour', type: 'Walking Tour', description: 'Capture the golden light on medieval walls and Adriatic waters with expert photography guidance' },
                    { name: 'Zip Line & Adventure Park at Ivanova Korita', type: 'Adventure', description: 'Soar across the longest zip line in Montenegro and tackle treetop obstacle courses in Lovćen\'s forests' }
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
                        description: 'Amsterdam, the enchanting Dutch capital, weaves together Golden Age canal houses, world-class museums, and a famously progressive culture into one of Europe\'s most compelling cities. The UNESCO-listed canal ring is lined with over 1,500 monumental buildings, while the Museumplein houses the Rijksmuseum, Van Gogh Museum, and Stedelijk Museum within steps of each other. Beyond the museums, Amsterdam thrives with diverse neighborhoods from the bohemian Jordaan to the multicultural De Pijp, each offering unique markets, cafés, and street life. The city\'s flat geography and excellent cycling infrastructure make it the world\'s most bike-friendly capital.',
                        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
                        population: '1,200,000',
                        bestTime: 'April to May (tulip season), September',
                        avgBudget: { budget: 80, mid: 160, luxury: 400 },
                        attractions: [
                    { name: 'Anne Frank House & Jewish Heritage Tour', type: 'Historical Tour', description: 'Visit the poignant secret annex where Anne Frank hid during WWII and explore Amsterdam\'s Jewish history' },
                    { name: 'Rijksmuseum & Dutch Masters Guided Tour', type: 'Museum', description: 'Discover Rembrandt\'s Night Watch, Vermeer\'s Milkmaid, and other Golden Age masterpieces with an expert guide' },
                    { name: 'Van Gogh Museum Skip-the-Line Experience', type: 'Museum', description: 'Explore the world\'s largest collection of Van Gogh\'s paintings, drawings, and letters' },
                    { name: 'Amsterdam Canal Cruise & City Highlights', type: 'Boat Tour', description: 'Glide through the UNESCO-listed canal ring past Golden Age mansions, houseboats, and historic bridges' },
                    { name: 'Jordaan Neighborhood Food & Culture Walk', type: 'Food Tour', description: 'Taste Dutch specialties like stroopwafels, bitterballen, and aged Gouda in Amsterdam\'s most charming quarter' },
                    { name: 'Keukenhof Tulip Gardens Day Trip (Seasonal)', type: 'Day Trip', description: 'Visit the world\'s most famous flower garden with seven million tulips, daffodils, and hyacinths in bloom' },
                    { name: 'Amsterdam Bike Tour Along Canals & Parks', type: 'Bike Tour', description: 'Cycle like a local through Vondelpark, the canal ring, and hidden neighborhoods on a guided bike tour' },
                    { name: 'Heineken Experience & Dutch Beer Tasting', type: 'Cultural Tour', description: 'Tour the original Heineken brewery and enjoy interactive exhibits and beer tastings in the tasting rooms' },
                    { name: 'Zaanse Schans Windmills & Volendam Day Trip', type: 'Day Trip', description: 'Visit iconic Dutch windmills, traditional wooden houses, a cheese farm, and the picturesque fishing village' },
                    { name: 'Red Light District History & Culture Walk', type: 'Walking Tour', description: 'Explore the oldest part of Amsterdam with a guide explaining the neighborhood\'s complex history and culture' },
                    { name: 'Albert Cuyp Market & De Pijp Quarter Tour', type: 'Food Tour', description: 'Browse Amsterdam\'s largest and liveliest street market in the multicultural De Pijp neighborhood' },
                    { name: 'A\'DAM Tower Swing & Amsterdam North Exploration', type: 'Adventure', description: 'Ride Europe\'s highest swing over the IJ river and explore the hip creative spaces of Amsterdam North' }
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
                        description: 'Rotterdam is Europe\'s most architecturally daring city, rebuilt from WWII devastation into a showcase of bold modern design featuring Cubic Houses, the Markthal, and the striking Erasmus Bridge. Home to Europe\'s largest port, Rotterdam pulses with a gritty, creative energy completely distinct from Amsterdam, attracting innovators, foodies, and architecture enthusiasts from around the world. The city\'s diverse neighborhoods like Katendrecht and Delfshaven offer world-class street food, cutting-edge galleries, and a thriving multicultural food scene. Rotterdam\'s ambitious skyline continues to evolve, making it a living laboratory of contemporary urban design.',
                        image: 'https://images.unsplash.com/photo-1707002271424-0d6f29b7039e?w=800',
                        population: '650,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                    { name: 'Rotterdam Architecture Walking Tour', type: 'Walking Tour', description: 'Explore the city\'s bold modern landmarks including Cube Houses, Markthal, and the Central Station' },
                    { name: 'Markthal Food Hall & Dutch Tasting Tour', type: 'Food Tour', description: 'Browse the spectacular horseshoe-shaped market hall and taste Dutch and international street food delicacies' },
                    { name: 'Kinderdijk Windmills UNESCO Day Trip', type: 'Day Trip', description: 'Visit the iconic network of 19 historic windmills at the Netherlands\' most famous UNESCO World Heritage site' },
                    { name: 'Erasmus Bridge & Water Taxi Harbor Tour', type: 'Boat Tour', description: 'Cruise Rotterdam\'s massive harbor past the iconic swan-shaped bridge and Europe\'s busiest port facilities' },
                    { name: 'Kunsthal & Museum Boijmans Van Beuningen Art Tour', type: 'Museum', description: 'Explore world-class art collections and the groundbreaking publicly accessible Depot art storage facility' },
                    { name: 'Delfshaven Historic Quarter Walking Tour', type: 'Walking Tour', description: 'Discover Rotterdam\'s only surviving pre-war neighborhood where the Pilgrims departed for America in 1620' },
                    { name: 'Katendrecht Food & Fenix Food Factory Tour', type: 'Food Tour', description: 'Explore the hip former docklands neighborhood and its artisanal food hall in a converted warehouse' },
                    { name: 'Euromast Tower Panoramic & Abseil Experience', type: 'Adventure', description: 'Ascend Rotterdam\'s 185-meter observation tower and optionally abseil or zipline down for an adrenaline rush' },
                    { name: 'Delft Blue Pottery & Historic Delft Day Trip', type: 'Day Trip', description: 'Visit the charming canal town of Delft, tour the Royal Delft pottery factory, and see Vermeer\'s hometown' },
                    { name: 'Rotterdam Street Art & Graffiti Culture Tour', type: 'Cultural Tour', description: 'Discover massive murals and cutting-edge street art across Rotterdam\'s diverse creative neighborhoods' },
                    { name: 'SS Rotterdam Ship Tour & History Experience', type: 'Historical Tour', description: 'Board the beautifully restored former flagship of the Holland-America Line for a maritime heritage tour' },
                    { name: 'Rotterdam by Bike & Kralingse Plas Lake Tour', type: 'Bike Tour', description: 'Cycle through Rotterdam\'s innovative architecture, waterfront promenades, and peaceful urban parklands' }
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
                image: 'https://images.unsplash.com/photo-1770144516579-f02e03a34e39?w=800',
                cities: {
                    skopje: {
                        id: 'skopje',
                        name: 'Skopje',
                        country: 'North Macedonia',
                        region: 'Europe',
                        description: 'Skopje, the capital of North Macedonia, is a fascinatingly eclectic city where ancient Ottoman bazaars sit alongside neoclassical statues and brutalist landmarks rebuilt after the devastating 1963 earthquake. The Old Bazaar, one of the largest and oldest in the Balkans, is a vibrant maze of artisan workshops, mosques, and traditional eateries serving kebapi and tavče gravče. Across the Stone Bridge, the Skopje 2014 project transformed the city center with monumental statues, fountains, and grand government buildings that spark lively debate. Skopje serves as a gateway to stunning Lake Ohrid, Matka Canyon, and the rich heritage of ancient Macedonia.',
                        image: 'https://images.unsplash.com/photo-1770144409342-3cf623e31de6?w=800',
                        population: '550,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                    { name: 'Old Bazaar & Ottoman Heritage Walking Tour', type: 'Walking Tour', description: 'Explore one of the Balkans\' oldest and largest bazaars with its mosques, hammams, and artisan workshops' },
                    { name: 'Skopje Fortress Kale & City Panoramic Tour', type: 'Historical Tour', description: 'Climb the ancient hilltop fortress for sweeping city views and learn about Skopje\'s layered history' },
                    { name: 'Matka Canyon Boat Ride & Cave Exploration', type: 'Adventure', description: 'Cruise through the breathtaking Matka Canyon gorge and explore the stalactite-filled Vrelo Cave' },
                    { name: 'Macedonian Food Tour & Rakija Tasting', type: 'Food Tour', description: 'Taste traditional kebapi, tavče gravče, ajvar, and fiery homemade rakija in the Old Bazaar and beyond' },
                    { name: 'Lake Ohrid UNESCO Day Trip', type: 'Day Trip', description: 'Visit one of Europe\'s oldest and deepest lakes with its medieval churches, fortress, and crystal-clear waters' },
                    { name: 'Skopje 2014 Monuments & Modern City Walk', type: 'Walking Tour', description: 'Discover the controversial neoclassical makeover of Skopje\'s center with its grand statues and fountains' },
                    { name: 'Mother Teresa Memorial House & Legacy Tour', type: 'Cultural Tour', description: 'Visit the memorial museum honoring Skopje\'s most famous daughter, Nobel Peace Prize laureate Mother Teresa' },
                    { name: 'Museum of the Macedonian Struggle & History', type: 'Museum', description: 'Explore the dramatic wax-figure museum chronicling North Macedonia\'s fight for independence and identity' },
                    { name: 'Macedonian Wine Route & Tikveš Winery Tour', type: 'Wine Tour', description: 'Tour the famous Tikveš wine region and taste award-winning Vranec and other Macedonian varietals' },
                    { name: 'Kokino Megalithic Observatory Day Trip', type: 'Day Trip', description: 'Visit the remarkable 3,800-year-old astronomical observatory recognized by NASA as an ancient sacred site' },
                    { name: 'Stone Bridge & City Center Night Illumination', type: 'Walking Tour', description: 'Experience Skopje\'s dramatically lit monuments, fountains, and bridges on an evening city walk' },
                    { name: 'Mavrovo National Park & Monastery Excursion', type: 'Day Trip', description: 'Discover North Macedonia\'s largest national park with its mountain scenery and the lakeside St. Naum Monastery' }
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
                        description: 'Ohrid is a jewel of the Balkans, nestled on the shores of one of Europe\'s oldest and deepest lakes. This UNESCO World Heritage city boasts over 365 churches, earning it the title "Jerusalem of the Balkans." Wander through cobblestone streets lined with traditional architecture, explore ancient amphitheaters, and relax on pristine lakeside beaches. The shimmering turquoise waters and surrounding mountains create a breathtaking backdrop for history, culture, and natural beauty.',
                        image: 'https://images.unsplash.com/photo-1607807221613-e45e9130432c?w=800',
                        population: '42,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                    { name: 'Ohrid Old Town Walking Tour with Local Guide', type: 'Walking Tour', description: 'Explore cobblestone streets, medieval churches, and Ottoman architecture in this UNESCO-listed old town.' },
                    { name: 'Lake Ohrid Boat Cruise with Swimming Stops', type: 'Boat Tour', description: 'Cruise the crystal-clear waters of ancient Lake Ohrid with stops at hidden beaches and caves.' },
                    { name: 'Bay of Bones Museum on Water Visit', type: 'Museum', description: 'Discover a reconstructed prehistoric pile dwelling settlement built over the lake on wooden stilts.' },
                    { name: 'Church of St. John at Kaneo Guided Tour', type: 'Cultural Tour', description: 'Visit the iconic clifftop church with stunning panoramic views over Lake Ohrid and mountains.' },
                    { name: 'Samuel\'s Fortress Historical Exploration', type: 'Historical Tour', description: 'Climb the impressive 10th-century fortress walls for sweeping views of the city and lake.' },
                    { name: 'Ohrid Traditional Food and Wine Tasting', type: 'Food Tour', description: 'Sample local Macedonian cuisine including Ohrid trout, tavche gravche, and regional wines.' },
                    { name: 'Galichica National Park Day Hike', type: 'Adventure', description: 'Hike through stunning alpine meadows with panoramic views of both Lake Ohrid and Lake Prespa.' },
                    { name: 'Ancient Theatre of Ohrid Cultural Visit', type: 'Historical Tour', description: 'Explore the Hellenistic-era amphitheater dating to 200 BC, still used for summer performances.' },
                    { name: 'St. Naum Monastery Day Trip by Boat', type: 'Day Trip', description: 'Sail to the serene 10th-century St. Naum Monastery with its peacock gardens and natural springs.' },
                    { name: 'Ohrid Pearl Workshop Experience', type: 'Cultural Tour', description: 'Learn the centuries-old craft of making Ohrid pearls from fish scales at a traditional workshop.' },
                    { name: 'Kayaking Adventure on Lake Ohrid', type: 'Adventure', description: 'Paddle through pristine waters, explore hidden coves, and enjoy lakeside cliffs up close.' },
                    { name: 'Struga and Black Drim Springs Day Trip', type: 'Day Trip', description: 'Visit the nearby town of Struga and the stunning natural springs where Black Drim River begins.' }
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
                currency: 'Polish Złoty (PLN)',
                language: 'Polish',
                description: 'Medieval cities, tragic WWII history, pierogi cuisine, and vibrant culture',
                image: 'https://images.unsplash.com/photo-1704788227958-91b8ac5e011d?w=800',
                cities: {
                    krakow: {
                        id: 'krakow',
                        name: 'Kraków',
                        country: 'Poland',
                        region: 'Schengen',
                        description: 'Kraków is Poland\'s cultural capital, a city where medieval grandeur meets vibrant modern life. The stunning Main Market Square, Europe\'s largest medieval town square, pulses with energy day and night. From the royal Wawel Castle to the somber history of nearby Auschwitz, Kraków offers profound depth and beauty. Its thriving arts scene, legendary pierogi, and the bohemian Kazimierz district make it one of Europe\'s most captivating destinations.',
                        image: 'https://images.unsplash.com/photo-1524514419275-fa942a023c92?w=800',
                        population: '780,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                    { name: 'Kraków Old Town and Wawel Castle Walking Tour', type: 'Walking Tour', description: 'Discover the Royal Route from Main Market Square to majestic Wawel Castle with expert guide.' },
                    { name: 'Auschwitz-Birkenau Memorial Full-Day Tour', type: 'Day Trip', description: 'Visit the preserved WWII concentration camp with licensed guide for a deeply moving experience.' },
                    { name: 'Wieliczka Salt Mine Underground Tour', type: 'Day Trip', description: 'Descend into centuries-old salt mines featuring underground chapels, lakes, and stunning carved chambers.' },
                    { name: 'Kazimierz Jewish Quarter Food Tour', type: 'Food Tour', description: 'Taste traditional Polish and Jewish cuisine while exploring the historic Kazimierz neighborhood streets.' },
                    { name: 'Schindler\'s Factory Museum Guided Visit', type: 'Museum', description: 'Explore the interactive WWII museum housed in Oskar Schindler\'s actual enamel factory building.' },
                    { name: 'Kraków Pub Crawl Through Hidden Cellars', type: 'Walking Tour', description: 'Experience Kraków\'s legendary nightlife through atmospheric medieval cellar bars and craft beer spots.' },
                    { name: 'Zakopane and Tatra Mountains Day Trip', type: 'Day Trip', description: 'Journey to the stunning Tatra Mountains and charming highland town of Zakopane for scenery and culture.' },
                    { name: 'Kraków Street Art and Alternative Culture Tour', type: 'Cultural Tour', description: 'Discover vibrant murals, underground galleries, and creative spaces in Kraków\'s alternative art scene.' },
                    { name: 'Vistula River Evening Cruise with Dinner', type: 'Boat Tour', description: 'Cruise the Vistula River at sunset with panoramic views of Wawel Castle and traditional Polish dinner.' },
                    { name: 'Polish Cooking Class: Pierogi and More', type: 'Food Tour', description: 'Learn to make authentic pierogi, bigos, and other Polish classics in a hands-on cooking workshop.' },
                    { name: 'Nowa Huta Communist Quarter Bike Tour', type: 'Bike Tour', description: 'Cycle through the fascinating Soviet-planned district and learn about life under communist rule.' },
                    { name: 'Rynek Underground Museum Experience', type: 'Museum', description: 'Explore the high-tech underground museum beneath Main Market Square revealing medieval Kraków\'s secrets.' }
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
                        description: 'Warsaw is a city of remarkable resilience, rebuilt from near-total destruction after World War II into a dynamic European capital. The meticulously reconstructed Old Town, a UNESCO World Heritage Site, stands as a testament to Polish determination. Modern skyscrapers contrast with baroque palaces and socialist-realist architecture, creating a uniquely layered cityscape. Warsaw\'s thriving food scene, world-class museums, and buzzing nightlife make it an increasingly popular destination.',
                        image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800',
                        population: '1,800,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 45, mid: 90, luxury: 220 },
                        attractions: [
                    { name: 'Warsaw Old Town and Royal Route Walking Tour', type: 'Walking Tour', description: 'Explore the beautifully reconstructed UNESCO Old Town and the historic Royal Route with local guide.' },
                    { name: 'Warsaw Rising Museum Guided Visit', type: 'Museum', description: 'Experience the powerful interactive museum dedicated to the heroic 1944 Warsaw Uprising against Nazi occupation.' },
                    { name: 'Royal Łazienki Park and Palace Tour', type: 'Palace Tour', description: 'Stroll through Warsaw\'s most beautiful park and visit the stunning Palace on the Isle.' },
                    { name: 'POLIN Museum of Polish Jewish History', type: 'Museum', description: 'Discover a thousand years of Jewish heritage in Poland through immersive multimedia exhibitions.' },
                    { name: 'Warsaw Communist Heritage Tour by Retro Bus', type: 'Historical Tour', description: 'Ride a vintage bus through socialist-era landmarks and hear stories of life behind the Iron Curtain.' },
                    { name: 'Polish Vodka Tasting Experience', type: 'Food Tour', description: 'Sample premium Polish vodkas paired with traditional snacks in historic Praga district distilleries.' },
                    { name: 'Wilanów Palace and Gardens Half-Day Tour', type: 'Palace Tour', description: 'Visit the magnificent baroque "Polish Versailles" surrounded by beautifully manicured formal gardens.' },
                    { name: 'Warsaw Street Food and Market Tour', type: 'Food Tour', description: 'Taste pierogi, zapiekanka, and more at bustling markets and hidden local food spots.' },
                    { name: 'Chopin Heritage Tour with Concert', type: 'Cultural Tour', description: 'Follow Frédéric Chopin\'s footsteps through Warsaw and enjoy a live piano recital performance.' },
                    { name: 'Praga District Alternative Art Walk', type: 'Walking Tour', description: 'Discover street art, hip cafés, and authentic pre-war architecture in Warsaw\'s edgiest neighborhood.' },
                    { name: 'Warsaw Rooftop and Observation Deck Tour', type: 'Walking Tour', description: 'Visit the best panoramic viewpoints including the Palace of Culture observation deck at sunset.' },
                    { name: 'Day Trip to Żelazowa Wola: Chopin\'s Birthplace', type: 'Day Trip', description: 'Journey to the countryside estate where Chopin was born, set amid beautiful parkland gardens.' }
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
                        name: 'Gdańsk',
                        country: 'Poland',
                        region: 'Schengen',
                        description: 'Gdańsk is a stunning Baltic port city where colorful merchant houses line cobblestoned streets along the Motława River. This historic Hanseatic trading hub played a pivotal role in modern history as the birthplace of the Solidarity movement that helped end communism. Its painstakingly rebuilt Old Town showcases magnificent Gothic and Renaissance architecture. Amber shops glitter on every corner, earning Gdańsk its reputation as the world\'s amber capital.',
                        image: 'https://images.unsplash.com/photo-1682261897890-7149592dc5c4?w=800',
                        population: '470,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                    { name: 'Gdańsk Old Town Highlights Walking Tour', type: 'Walking Tour', description: 'Walk the Royal Way past Neptune\'s Fountain, Golden Gate, and colorful Long Market merchant houses.' },
                    { name: 'European Solidarity Centre Museum Visit', type: 'Museum', description: 'Explore the history of the Solidarity movement and its role in ending communism in Europe.' },
                    { name: 'Malbork Castle Full-Day Excursion', type: 'Day Trip', description: 'Visit the world\'s largest brick castle, a stunning 13th-century Teutonic Knights fortress.' },
                    { name: 'Gdańsk Amber Workshop and Museum Tour', type: 'Cultural Tour', description: 'Discover the world of Baltic amber with hands-on jewelry making and museum exhibits.' },
                    { name: 'Westerplatte WWII Battlefield Tour by Boat', type: 'Boat Tour', description: 'Sail to where World War II began and explore the memorial and fortifications at Westerplatte.' },
                    { name: 'Tri-City Bike Tour: Gdańsk, Sopot, and Gdynia', type: 'Bike Tour', description: 'Cycle the scenic coastal route connecting three unique cities along the beautiful Baltic coast.' },
                    { name: 'Gdańsk Craft Beer and Local Food Crawl', type: 'Food Tour', description: 'Sample Polish craft beers and traditional Kashubian cuisine at hidden local spots.' },
                    { name: 'St. Mary\'s Church Tower Climb and Old Town Tour', type: 'Historical Tour', description: 'Ascend 400 steps for breathtaking panoramic views from the world\'s largest brick church.' },
                    { name: 'Motława River Evening Cruise', type: 'Boat Tour', description: 'Enjoy a relaxing evening cruise past illuminated waterfront buildings and the historic harbor crane.' },
                    { name: 'Sopot Pier and Beach Day Trip', type: 'Day Trip', description: 'Visit Europe\'s longest wooden pier and relax on the beautiful sandy beaches of Sopot.' },
                    { name: 'Gdańsk WWII and Post-War History Tour', type: 'Historical Tour', description: 'Trace the city\'s dramatic wartime destruction and incredible post-war reconstruction with expert guide.' },
                    { name: 'Hel Peninsula Nature and Beach Excursion', type: 'Day Trip', description: 'Explore the narrow sandy peninsula with pristine beaches, seal sanctuary, and charming fishing villages.' }
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
                        description: 'Lisbon captivates visitors with its sun-drenched hills, pastel-colored buildings, and melancholic fado music drifting through narrow alleyways. The Portuguese capital effortlessly blends centuries of maritime heritage with contemporary creativity and a thriving culinary scene. Ride the iconic Tram 28 through historic neighborhoods, feast on custard tarts in Belém, and watch the sunset paint the Tagus River golden. Lisbon\'s warmth, affordability, and authentic charm make it one of Europe\'s most beloved cities.',
                        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
                        population: '545,000',
                        bestTime: 'March to May, September to October',
                        avgBudget: { budget: 55, mid: 110, luxury: 300 },
                        attractions: [
                    { name: 'Lisbon Hills and Alfama Walking Tour', type: 'Walking Tour', description: 'Wind through Alfama\'s ancient Moorish streets and climb to stunning miradouro viewpoints.' },
                    { name: 'Sintra Royal Palaces Full-Day Tour', type: 'Day Trip', description: 'Visit the fairytale Pena Palace and mysterious Quinta da Regaleira in enchanting Sintra hills.' },
                    { name: 'Belém Tower, Monastery, and Pastéis Tasting', type: 'Historical Tour', description: 'Explore Manueline monuments of the Age of Discovery and taste the original pastéis de nata.' },
                    { name: 'Lisbon Food Tour Through Local Neighborhoods', type: 'Food Tour', description: 'Sample bacalhau, ginjinha, and petiscos at family-run tascas and bustling market stalls.' },
                    { name: 'Fado Night Experience in Alfama', type: 'Cultural Tour', description: 'Enjoy an intimate evening of traditional Portuguese fado music with dinner in historic Alfama.' },
                    { name: 'Tram 28 Route and Hidden Gems Tour', type: 'Walking Tour', description: 'Follow the iconic tram route on foot discovering hidden churches, gardens, and neighborhood secrets.' },
                    { name: 'Lisbon Street Art and LX Factory Tour', type: 'Cultural Tour', description: 'Discover vibrant murals, creative spaces, and trendy shops in Lisbon\'s thriving art districts.' },
                    { name: 'Arrábida Natural Park and Setúbal Day Trip', type: 'Day Trip', description: 'Explore stunning coastal cliffs, pristine beaches, and taste fresh seafood in charming Setúbal.' },
                    { name: 'Tagus River Sunset Sailing Cruise', type: 'Boat Tour', description: 'Sail past Belém Tower and the 25 de Abril Bridge while watching a spectacular Lisbon sunset.' },
                    { name: 'Cascais and Estoril Coastal Tour', type: 'Day Trip', description: 'Visit the charming seaside towns of Cascais and Estoril along the beautiful Portuguese Riviera.' },
                    { name: 'Portuguese Wine and Cheese Tasting', type: 'Wine Tour', description: 'Taste exceptional Portuguese wines from diverse regions paired with artisanal cheeses and charcuterie.' },
                    { name: 'Oceanário de Lisboa and Parque das Nações', type: 'Museum', description: 'Visit Europe\'s best aquarium and explore the modern waterfront district of Parque das Nações.' }
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
                        description: 'Porto enchants visitors with its dramatic riverside setting, blue-tiled churches, and world-famous port wine cellars lining the Douro River. This UNESCO-listed city cascades down steep hillsides to the waterfront Ribeira district, where colorful buildings create one of Europe\'s most photographed scenes. Cross the iconic Dom Luís I Bridge for sweeping views and dive into the Vila Nova de Gaia wine lodges. Porto\'s honest character, superb seafood, and artistic soul make it utterly irresistible.',
                        image: 'https://images.unsplash.com/photo-1555881400-69a2384edcd4?w=800',
                        population: '250,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                    { name: 'Porto Historic Center Walking Tour', type: 'Walking Tour', description: 'Discover the Ribeira district, São Bento Station\'s tiles, and iconic Clérigos Tower on foot.' },
                    { name: 'Port Wine Cellar Tour and Premium Tasting', type: 'Wine Tour', description: 'Visit historic port wine lodges in Vila Nova de Gaia with guided tastings of premium vintages.' },
                    { name: 'Douro Valley Wine Tour with River Cruise', type: 'Day Trip', description: 'Journey through terraced vineyards, taste wines at quintas, and cruise the stunning Douro River.' },
                    { name: 'Porto Food Tour: Francesinha and Beyond', type: 'Food Tour', description: 'Taste Porto\'s iconic francesinha, fresh seafood, and pastries at beloved local establishments.' },
                    { name: 'Six Bridges Douro River Cruise', type: 'Boat Tour', description: 'Cruise beneath Porto\'s six stunning bridges and admire the city\'s riverside panorama from the water.' },
                    { name: 'Livraria Lello and Porto\'s Hidden Gems Tour', type: 'Cultural Tour', description: 'Visit the stunning Lello Bookshop and discover Porto\'s secret gardens, tiles, and viewpoints.' },
                    { name: 'Porto Azulejo Tile Art Walking Tour', type: 'Walking Tour', description: 'Explore the city\'s magnificent blue-and-white ceramic tile heritage across churches and train stations.' },
                    { name: 'Braga and Guimarães Medieval Day Trip', type: 'Day Trip', description: 'Visit Portugal\'s birthplace in Guimarães and the stunning Bom Jesus sanctuary in Braga.' },
                    { name: 'Porto Street Art and Contemporary Culture Tour', type: 'Cultural Tour', description: 'Discover Porto\'s vibrant street art scene and contemporary galleries in up-and-coming neighborhoods.' },
                    { name: 'Porto Bike Tour Along the Atlantic Coast', type: 'Bike Tour', description: 'Cycle from the city center to the Atlantic beaches along scenic riverside and coastal paths.' },
                    { name: 'Aveiro Day Trip: Portugal\'s Little Venice', type: 'Day Trip', description: 'Explore colorful canal-side houses and ride traditional moliceiro boats in charming Aveiro.' },
                    { name: 'Porto Sunset and Fado Evening Experience', type: 'Cultural Tour', description: 'Watch the sunset from a miradouro and enjoy an authentic Porto fado performance with wine.' }
                ],
                        tips: [
                            'Port wine tastings essential',
                            'Livraria Lello - buy ticket online',
                            'Francesinha is the local sandwich',
                            'Walk across Dom Luís I Bridge'
                        ]
                    },
                    algarve: {
                        id: 'algarve',
                        name: 'Algarve',
                        country: 'Portugal',
                        region: 'Schengen',
                        description: 'The Algarve is Portugal\'s sun-soaked southern coast, famous for its dramatic golden cliffs, hidden sea caves, and some of Europe\'s finest beaches. From the iconic Benagil Cave to the rugged beauty of Cape St. Vincent, the westernmost point of continental Europe, the landscape is breathtaking. Charming whitewashed towns like Lagos and Tavira offer rich Moorish heritage and outstanding fresh seafood. With over 300 days of sunshine, the Algarve is a year-round paradise for beach lovers and adventurers.',
                        image: 'https://images.unsplash.com/photo-1584451655678-61594db5f728?w=800',
                        population: '440,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 50, mid: 100, luxury: 300 },
                        attractions: [
                    { name: 'Benagil Cave and Coastline Boat Tour', type: 'Boat Tour', description: 'Sail to the spectacular Benagil Sea Cave and explore hidden grottos along golden clifftops.' },
                    { name: 'Ponta da Piedade Kayak Adventure', type: 'Adventure', description: 'Paddle through towering rock formations, sea arches, and hidden grottoes near Lagos coastline.' },
                    { name: 'Lagos Old Town and Cliff Walk', type: 'Walking Tour', description: 'Explore the historic old town and walk dramatic cliff trails with stunning Atlantic Ocean views.' },
                    { name: 'Algarve Seafood and Wine Tasting Tour', type: 'Food Tour', description: 'Feast on cataplana, grilled sardines, and fresh seafood paired with regional Algarve wines.' },
                    { name: 'Ria Formosa Nature Reserve Boat Trip', type: 'Boat Tour', description: 'Cruise through the stunning lagoon reserve, visit desert islands, and spot flamingos and wildlife.' },
                    { name: 'Seven Hanging Valleys Cliff Trail Hike', type: 'Adventure', description: 'Hike the Algarve\'s most famous trail along dramatic cliff edges above turquoise waters.' },
                    { name: 'Silves Moorish Castle and Town Day Trip', type: 'Day Trip', description: 'Visit the impressive red sandstone Moorish castle and explore the historic former capital of Algarve.' },
                    { name: 'Tavira Island Beach and Old Town Tour', type: 'Day Trip', description: 'Ferry to pristine Tavira Island beach and explore the charming historic town of Tavira.' },
                    { name: 'Cape St. Vincent Sunset Tour', type: 'Day Trip', description: 'Journey to Europe\'s southwestern tip for spectacular sunset views atop windswept sea cliffs.' },
                    { name: 'Algarve Dolphin Watching Cruise', type: 'Boat Tour', description: 'Search for dolphins and marine life on a thrilling cruise along the beautiful Algarve coast.' },
                    { name: 'Stand-Up Paddleboard Coastal Exploration', type: 'Adventure', description: 'Glide over crystal-clear waters exploring sea caves, rock formations, and secret beaches by SUP.' },
                    { name: 'Monchique Mountain and Thermal Springs Trip', type: 'Day Trip', description: 'Escape to the Serra de Monchique mountains for hiking, panoramic views, and natural hot springs.' }
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
                image: 'https://images.unsplash.com/photo-1754837103464-9fbda56cd5bc?w=800',
                cities: {
                    bucharest: {
                        id: 'bucharest',
                        name: 'Bucharest',
                        country: 'Romania',
                        region: 'Schengen',
                        description: 'Bucharest is a city of fascinating contrasts, where Belle Époque elegance coexists with brutal communist-era architecture and a pulsating modern energy. Once known as "Little Paris," the Romanian capital still boasts grand boulevards, ornate palaces, and leafy parks. The massive Palace of Parliament, the world\'s heaviest building, dominates the skyline as a monument to excess. Today, Bucharest thrives with creative neighborhoods, vibrant nightlife, and some of Eastern Europe\'s best dining.',
                        image: 'https://images.unsplash.com/photo-1695314620864-b551fd6574ef?w=800',
                        population: '2,100,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                    { name: 'Palace of Parliament Guided Tour', type: 'Palace Tour', description: 'Explore the world\'s heaviest building with over 1,000 ornate rooms of marble and crystal.' },
                    { name: 'Bucharest Old Town Walking Tour', type: 'Walking Tour', description: 'Stroll through the Lipscani district discovering Belle Époque architecture, churches, and hidden courtyards.' },
                    { name: 'Romanian Food Tour with Traditional Lunch', type: 'Food Tour', description: 'Taste sarmale, mici, and cozonac while learning about Romania\'s diverse culinary heritage.' },
                    { name: 'Communist Bucharest and Revolution Tour', type: 'Historical Tour', description: 'Discover the city\'s communist past and pivotal 1989 Revolution sites with a knowledgeable guide.' },
                    { name: 'Village Museum Open-Air Experience', type: 'Museum', description: 'Explore authentic rural Romanian houses and traditions at this remarkable open-air ethnographic museum.' },
                    { name: 'Bucharest Street Art and Creative Quarter Walk', type: 'Cultural Tour', description: 'Discover vibrant murals and creative spaces in Bucharest\'s emerging contemporary art neighborhoods.' },
                    { name: 'Snagov Monastery and Dracula Legend Day Trip', type: 'Day Trip', description: 'Visit the island monastery said to hold Vlad the Impaler\'s tomb on serene Snagov Lake.' },
                    { name: 'Romanian Athenaeum Concert and Tour', type: 'Cultural Tour', description: 'Attend a classical performance in the stunning Romanian Athenaeum, Bucharest\'s most beautiful building.' },
                    { name: 'Therme Bucharest Spa and Wellness Experience', type: 'Adventure', description: 'Relax in Europe\'s largest thermal wellness center with pools, saunas, and botanical gardens.' },
                    { name: 'Bucharest Craft Beer and Nightlife Tour', type: 'Food Tour', description: 'Sample Romanian craft beers and explore the legendary nightlife of the Old Town district.' },
                    { name: 'Mogoșoaia Palace and Gardens Excursion', type: 'Day Trip', description: 'Visit the elegant Brâncovenesc-style palace surrounded by beautiful gardens and lakeside scenery.' },
                    { name: 'Bucharest by Night: Illuminated Landmarks Tour', type: 'Walking Tour', description: 'See Bucharest\'s grandest buildings beautifully lit up on an atmospheric evening walking tour.' }
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
                        name: 'Brașov',
                        country: 'Romania',
                        region: 'Schengen',
                        description: 'Brașov is a stunning medieval Saxon city nestled in a valley surrounded by the forested Carpathian Mountains. Its beautifully preserved old town features the imposing Black Church, colorful baroque facades, and the iconic Hollywood-style BRAȘOV sign on Tampa Mountain. As the gateway to Transylvania, Brașov offers easy access to Dracula\'s castle at Bran and fairytale Peleș Castle in Sinaia. The city perfectly blends medieval charm, mountain adventure, and Romanian hospitality.',
                        image: 'https://images.unsplash.com/photo-1754836982329-92ff4ac13d77?w=800',
                        population: '290,000',
                        bestTime: 'May to September, December (skiing)',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                    { name: 'Brașov Old Town and Black Church Walking Tour', type: 'Walking Tour', description: 'Explore the medieval Council Square, Black Church, and narrow Rope Street with local guide.' },
                    { name: 'Bran Castle: Dracula\'s Fortress Day Trip', type: 'Day Trip', description: 'Visit the legendary castle associated with Dracula perched dramatically on a rocky hilltop.' },
                    { name: 'Peleș Castle and Sinaia Mountain Excursion', type: 'Day Trip', description: 'Tour the fairytale Neo-Renaissance Peleș Castle, one of Europe\'s most beautiful royal residences.' },
                    { name: 'Tampa Mountain Hike and Panoramic Views', type: 'Adventure', description: 'Hike or take the cable car to Tampa Peak for stunning panoramic views of Brașov.' },
                    { name: 'Transylvanian Food Tour and Cooking Class', type: 'Food Tour', description: 'Taste traditional Transylvanian dishes like bulz, sarmale, and kürtőskalács with local hosts.' },
                    { name: 'Râșnov Fortress and Dinosaur Park Visit', type: 'Day Trip', description: 'Explore the impressive hilltop peasant fortress and nearby Dino Park in charming Râșnov village.' },
                    { name: 'Bear Watching in the Carpathian Mountains', type: 'Adventure', description: 'Observe European brown bears in their natural habitat at a guided wildlife observation hide.' },
                    { name: 'Fortified Saxon Churches of Transylvania Tour', type: 'Historical Tour', description: 'Visit UNESCO-listed medieval fortified churches in picturesque Saxon villages near Brașov.' },
                    { name: 'Brașov by Night: Legends and Ghost Stories', type: 'Walking Tour', description: 'Discover dark legends and ghost stories as you explore Brașov\'s atmospheric medieval streets at night.' },
                    { name: 'Poiana Brașov Mountain Biking Adventure', type: 'Bike Tour', description: 'Mountain bike through stunning Carpathian forest trails departing from popular Poiana Brașov resort.' },
                    { name: 'Zărnești Gorge and Piatra Craiului Hike', type: 'Adventure', description: 'Hike through dramatic limestone gorges and explore the wild Piatra Craiului mountain range.' },
                    { name: 'Romanian Wine Tasting in Transylvania', type: 'Wine Tour', description: 'Sample excellent Transylvanian wines including unique local varietals at boutique regional wineries.' }
                ],
                        tips: [
                            'Best base for Transylvania',
                            'Bran Castle overrated but fun',
                            'Peleș Castle is more impressive',
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
                image: 'https://images.unsplash.com/photo-1613601740367-410ae03b2ec7?w=800',
                cities: {
                    belgrade: {
                        id: 'belgrade',
                        name: 'Belgrade',
                        country: 'Serbia',
                        region: 'Europe',
                        description: 'Belgrade is a city of raw energy and enduring spirit, standing proudly at the confluence of the Danube and Sava rivers. The Serbian capital\'s turbulent history is written in the walls of the ancient Kalemegdan Fortress, while its legendary nightlife pulses through floating river clubs called splavovi. Bohemian Skadarlija Street echoes with live music and the aroma of grilled ćevapi. Belgrade\'s authentic, unpolished charm and warm hospitality create an unforgettable Balkan experience.',
                        image: 'https://images.unsplash.com/photo-1652641785173-09234a808fc1?w=800',
                        population: '1,400,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                    { name: 'Kalemegdan Fortress and Belgrade Walking Tour', type: 'Walking Tour', description: 'Explore the ancient fortress and stroll through Belgrade\'s historic core with an expert guide.' },
                    { name: 'Skadarlija Bohemian Quarter Food and Music Tour', type: 'Food Tour', description: 'Feast on Serbian cuisine with live traditional music in Belgrade\'s charming bohemian street.' },
                    { name: 'Belgrade Floating River Club Night Experience', type: 'Cultural Tour', description: 'Experience Belgrade\'s legendary nightlife on the famous splavovi floating clubs on the rivers.' },
                    { name: 'Nikola Tesla Museum Interactive Visit', type: 'Museum', description: 'Discover the genius of Nikola Tesla through hands-on exhibits and original artifacts and documents.' },
                    { name: 'Yugoslav History and Tito\'s Mausoleum Tour', type: 'Historical Tour', description: 'Visit Tito\'s final resting place and explore the complex history of Yugoslavia and its dissolution.' },
                    { name: 'Belgrade Street Art and Underground Culture Walk', type: 'Cultural Tour', description: 'Discover hidden murals, alternative venues, and creative spaces in Belgrade\'s urban art scene.' },
                    { name: 'Serbian Cooking Class: Ćevapi and Rakija', type: 'Food Tour', description: 'Learn to prepare authentic Serbian dishes and distill or taste traditional homemade rakija brandy.' },
                    { name: 'Zemun Quarter Walking Tour and Danube Views', type: 'Walking Tour', description: 'Explore the charming Austro-Hungarian town of Zemun with its Gardoš Tower and Danube promenade.' },
                    { name: 'Danube and Sava Rivers Sightseeing Cruise', type: 'Boat Tour', description: 'Cruise the meeting point of two great rivers with views of Kalemegdan and Belgrade skyline.' },
                    { name: 'Novi Beograd Socialist Architecture Tour', type: 'Historical Tour', description: 'Explore brutalist buildings and socialist-era monuments in Belgrade\'s fascinating New Belgrade district.' },
                    { name: 'Topčider Park and Royal Compound Visit', type: 'Walking Tour', description: 'Stroll through Belgrade\'s loveliest park and visit the Royal White Palace and compound grounds.' },
                    { name: 'Fruška Gora Monasteries and Wine Day Trip', type: 'Day Trip', description: 'Visit medieval Orthodox monasteries and taste Fruška Gora wines in Serbia\'s scenic national park.' }
                ],
                        tips: [
                            'Nightlife is legendary - starts late',
                            'Try ćevapi and pljeskavica',
                            'Rakija is the national drink',
                            'Very affordable destination'
                        ]
                    },
                    noviSad: {
                        id: 'noviSad',
                        name: 'Novi Sad',
                        country: 'Serbia',
                        region: 'Europe',
                        description: 'Novi Sad is Serbia\'s charming second city, known as the "Athens of Serbia" for its rich cultural life and intellectual heritage. The mighty Petrovaradin Fortress overlooks the Danube, hosting the famous EXIT music festival each summer. Strolling through the elegant city center reveals Habsburg-era architecture, cozy cafés, and a relaxed Mediterranean-like atmosphere. As the 2022 European Capital of Culture, Novi Sad has blossomed into a vibrant destination blending history with contemporary creativity.',
                        image: 'https://images.unsplash.com/photo-1653127179142-1aaa70bbb836?w=800',
                        population: '290,000',
                        bestTime: 'May to September (EXIT in July)',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                    { name: 'Petrovaradin Fortress and Underground Tunnels Tour', type: 'Historical Tour', description: 'Explore the massive Danube fortress and its mysterious underground military tunnels with expert guide.' },
                    { name: 'Novi Sad Old Town Walking Tour', type: 'Walking Tour', description: 'Discover elegant Zmaj Jovina Street, Liberty Square, and beautiful Austro-Hungarian architecture on foot.' },
                    { name: 'Fruška Gora Wine Route Day Trip', type: 'Wine Tour', description: 'Visit hilltop wineries for tastings of Bermet and other unique Fruška Gora regional wines.' },
                    { name: 'Serbian Food Tour in Novi Sad', type: 'Food Tour', description: 'Taste authentic Serbian specialties including kajmak, pljeskavica, and local cheeses at hidden gems.' },
                    { name: 'Fruška Gora Monasteries Cultural Excursion', type: 'Day Trip', description: 'Visit centuries-old Serbian Orthodox monasteries nestled in the forested hills of Fruška Gora.' },
                    { name: 'Danube River Sunset Cruise from Novi Sad', type: 'Boat Tour', description: 'Cruise the Danube at golden hour with views of Petrovaradin Fortress and the city skyline.' },
                    { name: 'Sremski Karlovci Wine Town Day Trip', type: 'Day Trip', description: 'Explore the baroque wine town famous for its Bermet wine, honey, and peaceful café culture.' },
                    { name: 'Novi Sad Street Art and Gallery Walk', type: 'Cultural Tour', description: 'Discover vibrant murals and contemporary galleries throughout Novi Sad\'s creative neighborhoods and spaces.' },
                    { name: 'Novi Sad Bike Tour Along the Danube', type: 'Bike Tour', description: 'Cycle scenic riverside paths with views of the fortress, bridges, and Vojvodina countryside.' },
                    { name: 'Museum of Vojvodina Cultural Visit', type: 'Museum', description: 'Explore Vojvodina\'s diverse multicultural heritage through archaeological finds and ethnographic exhibitions.' },
                    { name: 'Novi Sad Coffee Culture and Café Crawl', type: 'Food Tour', description: 'Experience the city\'s beloved café culture visiting the best specialty coffee houses and patisseries.' },
                    { name: 'EXIT Festival Site and Music Heritage Tour', type: 'Cultural Tour', description: 'Walk the legendary EXIT Festival grounds and learn about Serbia\'s vibrant music festival culture.' }
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
                image: 'https://images.unsplash.com/photo-1764816417683-f09f5bd5438b?w=800',
                cities: {
                    bratislava: {
                        id: 'bratislava',
                        name: 'Bratislava',
                        country: 'Slovakia',
                        region: 'Schengen',
                        description: 'Bratislava is a compact and charming capital perched on the banks of the Danube, where Central European elegance meets a youthful, unpretentious vibe. The fairy-tale castle overlooks a pastel-colored old town filled with quirky statues, cozy wine bars, and excellent restaurants. As a former coronation city of the Kingdom of Hungary, Bratislava boasts a rich Habsburg heritage hidden behind its modest exterior. Its proximity to Vienna makes it perfect for a day trip, though it richly rewards a longer stay.',
                        image: 'https://images.unsplash.com/photo-1747679451448-8369441622f3?w=800',
                        population: '440,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 45, mid: 90, luxury: 220 },
                        attractions: [
                    { name: 'Bratislava Old Town Walking Tour', type: 'Walking Tour', description: 'Explore the charming pedestrian old town with its quirky statues, elegant squares, and medieval gates.' },
                    { name: 'Bratislava Castle and City Panorama Visit', type: 'Palace Tour', description: 'Tour the iconic hilltop castle and enjoy sweeping views over the Danube and old town.' },
                    { name: 'Slovak Wine Tasting in Historic Cellars', type: 'Wine Tour', description: 'Discover excellent Slovak wines in atmospheric medieval wine cellars beneath the old town streets.' },
                    { name: 'Devín Castle Ruins and Danube Day Trip', type: 'Day Trip', description: 'Visit the dramatic clifftop castle ruins where the Danube and Morava rivers meet at the border.' },
                    { name: 'Bratislava Communist Era Walking Tour', type: 'Historical Tour', description: 'Explore socialist-era monuments and hear personal stories of life under communist Czechoslovakia.' },
                    { name: 'Slovak Food Tour: Bryndzové Halušky and More', type: 'Food Tour', description: 'Taste Slovakia\'s national dish and other traditional delicacies at authentic local restaurants.' },
                    { name: 'Danube River Cruise to Devín Castle', type: 'Boat Tour', description: 'Cruise the Danube from Bratislava to the romantic ruins of Devín Castle with commentary.' },
                    { name: 'Blue Church and Art Nouveau Architecture Walk', type: 'Walking Tour', description: 'Visit the whimsical Blue Church and discover Bratislava\'s stunning Art Nouveau architectural treasures.' },
                    { name: 'St. Martin\'s Cathedral and Coronation Tour', type: 'Historical Tour', description: 'Explore the Gothic cathedral where Hungarian kings were crowned and learn coronation history.' },
                    { name: 'Bratislava Beer and Pub Crawl', type: 'Food Tour', description: 'Sample Slovak craft beers and visit characterful pubs in the vibrant old town nightlife scene.' },
                    { name: 'UFO Bridge Observation Deck Sunset Visit', type: 'Walking Tour', description: 'Ascend the iconic UFO-shaped tower for spectacular sunset views over Bratislava and the Danube.' },
                    { name: 'Day Trip to Vienna from Bratislava', type: 'Day Trip', description: 'Take a quick journey to nearby Vienna for a day exploring the Austrian imperial capital.' }
                ],
                        tips: [
                            'Day trip from Vienna (1 hour)',
                            'Very walkable old town',
                            'Much cheaper than Vienna',
                            'Try bryndzové halušky (sheep cheese dumplings)'
                        ]
                    },
                    highTatras: {
                        id: 'highTatras',
                        name: 'High Tatras',
                        country: 'Slovakia',
                        region: 'Schengen',
                        description: 'The High Tatras are the smallest alpine mountain range in the world, offering dramatic peaks, glacial lakes, and pristine wilderness within a remarkably compact area. Often called "the smallest big mountains," these stunning peaks along the Slovak-Polish border rise sharply to nearly 2,700 meters. Crystal-clear mountain lakes, cascading waterfalls, and well-marked hiking trails make this a paradise for outdoor enthusiasts year-round. Charming mountain villages provide cozy bases for skiing, hiking, and reconnecting with nature.',
                        image: 'https://images.unsplash.com/photo-1677008358716-d08fb543eec9?w=800',
                        population: '10,000',
                        bestTime: 'June to September (hiking), December to March (skiing)',
                        avgBudget: { budget: 40, mid: 80, luxury: 200 },
                        attractions: [
                    { name: 'Štrbské Pleso Lake and Mountain Hike', type: 'Adventure', description: 'Hike around the stunning glacial lake surrounded by dramatic High Tatra peaks and forests.' },
                    { name: 'Lomnický Štít Cable Car Summit Experience', type: 'Adventure', description: 'Ride the cable car to 2,634 meters for breathtaking panoramic views across Slovakia and Poland.' },
                    { name: 'Five Tatras Lakes Valley Hiking Tour', type: 'Adventure', description: 'Trek through the spectacular valley of five glacial lakes set among towering granite peaks.' },
                    { name: 'Tatranská Lomnica to Skalnaté Pleso Trek', type: 'Adventure', description: 'Hike from the village to the alpine lake station with stunning mountain scenery throughout.' },
                    { name: 'Belianska Cave Underground Tour', type: 'Cultural Tour', description: 'Explore the only public cave in the High Tatras with stunning stalactites and underground formations.' },
                    { name: 'Tatra Mountain E-Bike Adventure', type: 'Bike Tour', description: 'Ride electric bikes through mountain valleys and forests with stops at scenic viewpoints.' },
                    { name: 'High Tatras Wildlife and Nature Walk', type: 'Walking Tour', description: 'Spot chamois, marmots, and eagles on a guided nature walk through pristine mountain habitats.' },
                    { name: 'Hrebienok Waterfall and Funicular Excursion', type: 'Adventure', description: 'Take the funicular railway to Hrebienok and hike to the stunning Cold Stream waterfalls.' },
                    { name: 'Traditional Slovak Mountain Hut Dinner', type: 'Food Tour', description: 'Enjoy authentic highland cuisine including bryndzové halušky at a traditional mountain shepherd\'s hut.' },
                    { name: 'Stary Smokovec Heritage Village Walk', type: 'Walking Tour', description: 'Explore the charming historic mountain resort town with its grand hotels and alpine architecture.' },
                    { name: 'Winter Skiing and Snowboarding Day Pass', type: 'Adventure', description: 'Hit the slopes at High Tatras ski resorts with well-groomed runs and stunning mountain scenery.' },
                    { name: 'Poprad Old Town and Spa Day Trip', type: 'Day Trip', description: 'Visit the medieval town of Poprad and relax in the AquaCity thermal spa complex.' }
                ],
                        tips: [
                            'World\'s smallest high mountains',
                            'Excellent hiking without crowds',
                            'Affordable ski resorts',
                            'Base in Tatranská Lomnica or Starý Smokovec'
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
                image: 'https://images.unsplash.com/photo-1769203906145-694e57b886b8?w=800',
                cities: {
                    kyiv: {
                        id: 'kyiv',
                        name: 'Kyiv',
                        country: 'Ukraine',
                        region: 'Europe',
                        description: 'Kyiv is a city of golden domes, ancient monasteries, and indomitable spirit, standing proudly on the banks of the Dnieper River. The Ukrainian capital\'s rich heritage spans over 1,500 years, from the founding of Kyivan Rus to its modern rebirth as a dynamic European city. The UNESCO-listed Kyiv Pechersk Lavra monastery complex and the magnificent St. Sophia\'s Cathedral showcase extraordinary Byzantine art and architecture. Kyiv\'s creative energy, emerging food scene, and resilient character leave a lasting impression.',
                        image: 'https://images.unsplash.com/photo-1686902318140-c8ba4f3812b8?w=800',
                        population: '3,000,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                    { name: 'Kyiv Pechersk Lavra Monastery Complex Tour', type: 'Historical Tour', description: 'Explore the UNESCO-listed cave monastery with its golden domes, underground catacombs, and treasures.' },
                    { name: 'St. Sophia\'s Cathedral and Old Kyiv Walking Tour', type: 'Walking Tour', description: 'Visit the magnificent 11th-century cathedral with stunning mosaics and frescoes in ancient Kyiv.' },
                    { name: 'Maidan Nezalezhnosti and Revolution of Dignity Tour', type: 'Historical Tour', description: 'Walk the historic Independence Square and learn about Ukraine\'s pivotal revolutionary moments.' },
                    { name: 'Kyiv Food Tour: Borscht and Beyond', type: 'Food Tour', description: 'Taste authentic Ukrainian borscht, varenyky, and salo at traditional restaurants and market halls.' },
                    { name: 'Andriyivskyy Descent Art and Culture Walk', type: 'Cultural Tour', description: 'Stroll the historic cobblestoned street lined with galleries, street art, and Bulgakov\'s house.' },
                    { name: 'Chernobyl Exclusion Zone Day Trip', type: 'Day Trip', description: 'Visit the hauntingly abandoned city of Pripyat and the Chernobyl nuclear disaster site.' },
                    { name: 'National Museum of the History of Ukraine', type: 'Museum', description: 'Trace Ukraine\'s rich history from ancient Scythian gold to modern independence movements.' },
                    { name: 'Dnieper River Cruise and City Views', type: 'Boat Tour', description: 'Cruise the mighty Dnieper River with panoramic views of Kyiv\'s golden domes and green hills.' },
                    { name: 'Kyiv Street Art and Murals Tour', type: 'Cultural Tour', description: 'Discover powerful murals and street art that tell stories of Ukrainian identity and resilience.' },
                    { name: 'Pyrohovo Folk Architecture Open-Air Museum', type: 'Museum', description: 'Explore traditional Ukrainian village life at this expansive open-air museum with historic wooden buildings.' },
                    { name: 'Golden Gate and Medieval Kyiv Heritage Tour', type: 'Historical Tour', description: 'Visit the reconstructed Golden Gate and medieval landmarks from the era of Kyivan Rus.' },
                    { name: 'Ukrainian Cooking Class and Market Visit', type: 'Food Tour', description: 'Shop at Bessarabsky Market and learn to cook traditional Ukrainian dishes with a local chef.' }
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
                        description: 'Lviv is Western Ukraine\'s cultural gem, a UNESCO-listed city where Habsburg grandeur meets Ukrainian soul. Its enchanting old town abounds with ornate churches, atmospheric coffee houses, and cobblestoned squares that evoke a bygone Central European elegance. Known as Ukraine\'s coffee capital, Lviv takes its café culture seriously, with themed coffee houses hidden behind mysterious doorways. The city\'s thriving arts scene, chocolate workshops, and legendary hospitality make it a captivating off-the-beaten-path destination.',
                        image: 'https://images.unsplash.com/photo-1514988087702-e07ced4a2d52?w=800',
                        population: '720,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                    { name: 'Lviv Old Town UNESCO Walking Tour', type: 'Walking Tour', description: 'Explore Rynok Square, Armenian Quarter, and Baroque churches in the stunning UNESCO old town.' },
                    { name: 'Lviv Coffee and Chocolate Tasting Tour', type: 'Food Tour', description: 'Visit hidden coffee houses and artisan chocolate workshops in Ukraine\'s coffee capital.' },
                    { name: 'Lychakiv Cemetery Historical Tour', type: 'Historical Tour', description: 'Walk through one of Europe\'s most beautiful cemeteries with stunning sculptures and poignant stories.' },
                    { name: 'Lviv Underground Mystery Tour', type: 'Walking Tour', description: 'Descend into hidden underground passages and cellars beneath Lviv\'s medieval old town streets.' },
                    { name: 'High Castle Hill Panoramic Walk', type: 'Walking Tour', description: 'Climb to the ruins of High Castle for the best panoramic views over Lviv\'s rooftops.' },
                    { name: 'Ukrainian Traditional Cuisine Food Tour', type: 'Food Tour', description: 'Taste traditional Galician dishes including borscht, deruny, and pampushky at local favorites.' },
                    { name: 'Lviv Opera House Guided Tour and Performance', type: 'Cultural Tour', description: 'Tour the magnificent neo-Renaissance opera house and attend a world-class ballet or opera performance.' },
                    { name: 'Olesko and Pidhirtsi Castles Day Trip', type: 'Day Trip', description: 'Visit two magnificent Renaissance castles set in the rolling hills of Western Ukraine.' },
                    { name: 'Lviv Craft Beer and Pub Crawl', type: 'Food Tour', description: 'Sample Ukrainian craft beers at themed pubs and secret bars throughout Lviv\'s nightlife scene.' },
                    { name: 'Armenian Cathedral and Multicultural Heritage Tour', type: 'Cultural Tour', description: 'Discover Lviv\'s diverse religious heritage visiting Armenian, Catholic, and Orthodox sacred landmarks.' },
                    { name: 'Shevchenko Scientific Society and Bookish Lviv Tour', type: 'Cultural Tour', description: 'Explore Lviv\'s literary heritage through historic bookshops, libraries, and cultural institutions.' },
                    { name: 'Lviv Handcrafts Workshop Experience', type: 'Cultural Tour', description: 'Create traditional Ukrainian crafts including pysanky eggs or ceramic painting with master artisans.' }
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
                image: 'https://images.unsplash.com/photo-1766999708150-cb718446bb2b?w=800',
                cities: {
                    london: {
                        id: 'london',
                        name: 'London',
                        country: 'United Kingdom',
                        region: 'Europe',
                        description: 'London is a world capital of culture, history, and innovation, where ancient royal traditions blend seamlessly with cutting-edge modernity. From the Tower of London to the Tate Modern, from Buckingham Palace to Borough Market, every corner tells a story spanning two millennia. The city\'s extraordinary diversity fuels one of the world\'s greatest food scenes and a cultural calendar that never stops. London\'s iconic skyline, world-class museums, and vibrant neighborhoods make every visit uniquely rewarding.',
                        image: 'https://images.unsplash.com/photo-1755197899480-c73a3fa3ea4b?w=800',
                        population: '8,900,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                    { name: 'Tower of London and Crown Jewels Tour', type: 'Historical Tour', description: 'Explore the 1,000-year-old fortress, see the dazzling Crown Jewels, and meet the Beefeaters.' },
                    { name: 'Buckingham Palace and Royal London Walk', type: 'Walking Tour', description: 'Watch the Changing of the Guard and explore the grandeur of London\'s royal landmarks.' },
                    { name: 'Harry Potter Warner Bros Studio Tour', type: 'Day Trip', description: 'Step into the magical world of Harry Potter at the incredible Leavesden studio experience.' },
                    { name: 'Borough Market and Southbank Food Tour', type: 'Food Tour', description: 'Taste artisanal cheeses, fresh oysters, and global street food at London\'s finest food market.' },
                    { name: 'Westminster Abbey and Houses of Parliament Tour', type: 'Historical Tour', description: 'Visit the coronation church of British monarchs and the iconic seat of Parliament.' },
                    { name: 'British Museum Highlights Guided Tour', type: 'Museum', description: 'Discover the Rosetta Stone, Egyptian mummies, and Parthenon Marbles with an expert guide.' },
                    { name: 'Thames River Cruise to Greenwich', type: 'Boat Tour', description: 'Cruise past Tower Bridge, the O2, and Canary Wharf to historic maritime Greenwich.' },
                    { name: 'Stonehenge and Bath Full-Day Excursion', type: 'Day Trip', description: 'Visit the prehistoric stone circle and the elegant Georgian city of Bath in one day.' },
                    { name: 'East London Street Art and Shoreditch Tour', type: 'Walking Tour', description: 'Discover Banksy works and vibrant murals in London\'s creative East End neighborhoods.' },
                    { name: 'London Eye and Southbank Evening Experience', type: 'Cultural Tour', description: 'Ride the iconic London Eye at sunset and stroll the vibrant South Bank cultural mile.' },
                    { name: 'Afternoon Tea at a Historic London Hotel', type: 'Food Tour', description: 'Enjoy the quintessentially British tradition of afternoon tea with scones, sandwiches, and prosecco.' },
                    { name: 'Camden and Notting Hill Neighborhood Tour', type: 'Walking Tour', description: 'Explore London\'s most colorful neighborhoods visiting markets, music venues, and Portobello Road.' }
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
                        description: 'Edinburgh is a city of dramatic beauty, where a medieval Old Town and elegant Georgian New Town perch upon volcanic hills overlooking the Firth of Forth. The Scottish capital\'s skyline is dominated by the imposing Edinburgh Castle, while the atmospheric Royal Mile cascades down to the Palace of Holyroodhouse below. As the birthplace of the world\'s largest arts festival, Edinburgh pulses with creative energy year-round. Its rich literary heritage, whisky tradition, and stunning natural setting make it endlessly enchanting.',
                        image: 'https://images.unsplash.com/photo-1698422339223-bf1ba718bed4?w=800',
                        population: '540,000',
                        bestTime: 'May to September (August for Festival)',
                        avgBudget: { budget: 80, mid: 160, luxury: 400 },
                        attractions: [
                    { name: 'Edinburgh Castle Skip-the-Line Tour', type: 'Historical Tour', description: 'Explore Scotland\'s most iconic fortress with its crown jewels, Stone of Destiny, and panoramic views.' },
                    { name: 'Royal Mile Walking Tour: Castle to Palace', type: 'Walking Tour', description: 'Walk the historic Royal Mile discovering closes, kirks, and stories of Edinburgh\'s colorful past.' },
                    { name: 'Scotch Whisky Experience and Tasting', type: 'Food Tour', description: 'Journey through the whisky-making process and taste premium single malts from Scotland\'s regions.' },
                    { name: 'Scottish Highlands and Loch Ness Day Trip', type: 'Day Trip', description: 'Journey through stunning Highland scenery to legendary Loch Ness and the Caledonian Canal.' },
                    { name: 'Edinburgh Ghost Tour: Vaults and Graveyards', type: 'Walking Tour', description: 'Descend into haunted underground vaults and explore spooky graveyards after dark in Edinburgh.' },
                    { name: 'Arthur\'s Seat Sunrise Hiking Experience', type: 'Adventure', description: 'Climb the ancient volcanic peak for breathtaking sunrise views over Edinburgh and the sea.' },
                    { name: 'Harry Potter Edinburgh Walking Tour', type: 'Walking Tour', description: 'Visit the real locations that inspired J.K. Rowling while writing Harry Potter in Edinburgh.' },
                    { name: 'Palace of Holyroodhouse Royal Tour', type: 'Palace Tour', description: 'Tour the official Scottish residence of the monarchy and its dramatic ruined medieval abbey.' },
                    { name: 'Edinburgh Food Tour: Haggis to Cranachan', type: 'Food Tour', description: 'Taste traditional Scottish dishes and modern cuisine at Edinburgh\'s best restaurants and shops.' },
                    { name: 'St Andrews and the Kingdom of Fife Tour', type: 'Day Trip', description: 'Visit the home of golf, medieval university town, and beautiful Fife coastal villages.' },
                    { name: 'National Museum of Scotland Guided Visit', type: 'Museum', description: 'Explore Scotland\'s story from prehistoric times to the present in this stunning museum.' },
                    { name: 'Edinburgh New Town and Georgian Architecture Walk', type: 'Walking Tour', description: 'Discover the elegant 18th-century New Town, a masterpiece of Georgian urban planning and design.' }
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
                        description: 'The Cotswolds is England\'s most enchanting countryside region, a rolling landscape of honey-colored stone villages, thatched cottages, and gentle hills designated as an Area of Outstanding Natural Beauty. Quintessentially English villages like Bibury, Castle Combe, and Bourton-on-the-Water look as though they\'ve stepped from a storybook. Ancient churches, charming tea rooms, and winding country lanes invite leisurely exploration. The Cotswolds offers a timeless escape into pastoral beauty just a short journey from London.',
                        image: 'https://images.unsplash.com/photo-1629203329370-1f5084576ad8?w=800',
                        population: '150,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                    { name: 'Classic Cotswolds Village Tour', type: 'Day Trip', description: 'Visit Bibury, Bourton-on-the-Water, and Stow-on-the-Wold in the picture-perfect Cotswold countryside.' },
                    { name: 'Cotswolds Walking Tour Through Rolling Hills', type: 'Walking Tour', description: 'Walk scenic footpaths through golden meadows, ancient woodlands, and honey-stone village lanes.' },
                    { name: 'Blenheim Palace and Gardens Tour', type: 'Palace Tour', description: 'Tour Winston Churchill\'s birthplace, a magnificent baroque palace surrounded by stunning Capability Brown gardens.' },
                    { name: 'Cotswolds Afternoon Tea and Cream Scones', type: 'Food Tour', description: 'Enjoy a traditional English afternoon tea in a charming Cotswold village tearoom setting.' },
                    { name: 'Castle Combe and Lacock Film Locations Tour', type: 'Day Trip', description: 'Visit filming locations for Downton Abbey, Harry Potter, and other beloved British productions.' },
                    { name: 'Cotswolds Bike Tour Through Country Lanes', type: 'Bike Tour', description: 'Cycle through quintessential English countryside passing thatched cottages and ancient stone churches.' },
                    { name: 'Cotswold Lavender Farm Experience', type: 'Cultural Tour', description: 'Stroll through fields of fragrant purple lavender and shop for handmade lavender products.' },
                    { name: 'Broadway Tower and Cotswolds Edge Walk', type: 'Adventure', description: 'Hike to the iconic Broadway Tower for panoramic views across up to sixteen counties.' },
                    { name: 'Stratford-upon-Avon: Shakespeare\'s Birthplace Tour', type: 'Day Trip', description: 'Visit Shakespeare\'s hometown exploring his birthplace, Anne Hathaway\'s cottage, and the Royal Theatre.' },
                    { name: 'Cotswolds Farm and Local Produce Tour', type: 'Food Tour', description: 'Visit working farms, sample artisanal cheeses, and taste locally produced ciders and meats.' },
                    { name: 'Sudeley Castle and Gardens Visit', type: 'Historical Tour', description: 'Explore the castle where Queen Katherine Parr lived, featuring stunning gardens and exhibitions.' },
                    { name: 'Cotswolds Gin Distillery Tour and Tasting', type: 'Food Tour', description: 'Tour a boutique Cotswolds gin distillery and taste award-winning craft gins with botanicals.' }
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
                        description: 'Manchester is a city of pioneering spirit, from the Industrial Revolution to splitting the atom, from the birth of the computer to the explosion of Britpop. This energetic northern powerhouse boasts world-class football stadiums, a legendary music heritage, and a creative quarter in the Northern Quarter that buzzes with independent shops and street art. The city\'s ambitious regeneration has transformed its Victorian warehouses into trendy restaurants, galleries, and bars. Manchester\'s friendly character and cultural dynamism make it quintessentially compelling.',
                        image: 'https://images.unsplash.com/photo-1661215042460-c73efbfe8b8d?w=800',
                        population: '550,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                    { name: 'Manchester Music Heritage Walking Tour', type: 'Walking Tour', description: 'Trace the legendary music history from The Smiths to Oasis through iconic Manchester venues.' },
                    { name: 'Old Trafford Stadium Tour: Theatre of Dreams', type: 'Museum', description: 'Go behind the scenes at Manchester United\'s iconic stadium with access to the players\' tunnel.' },
                    { name: 'Etihad Stadium: Manchester City FC Tour', type: 'Museum', description: 'Explore Manchester City\'s state-of-the-art stadium and trophy room with behind-the-scenes access.' },
                    { name: 'Northern Quarter Street Art and Culture Walk', type: 'Cultural Tour', description: 'Discover vibrant murals, indie shops, and creative spaces in Manchester\'s hippest neighborhood.' },
                    { name: 'Manchester Food and Drink Tour', type: 'Food Tour', description: 'Taste curry mile dishes, craft beers, and artisan street food across Manchester\'s diverse food scene.' },
                    { name: 'Science and Industry Museum Visit', type: 'Museum', description: 'Explore the birthplace of the Industrial Revolution through interactive science and technology exhibits.' },
                    { name: 'Manchester Ship Canal Cruise', type: 'Boat Tour', description: 'Cruise the historic ship canal learning about Manchester\'s transformation from industrial powerhouse to today.' },
                    { name: 'Peak District National Park Day Trip', type: 'Day Trip', description: 'Escape to stunning moorlands, limestone dales, and picturesque villages in the nearby Peak District.' },
                    { name: 'John Rylands Library and Hidden Gems Walk', type: 'Walking Tour', description: 'Visit the stunning neo-Gothic library and discover Manchester\'s lesser-known architectural treasures.' },
                    { name: 'Manchester Craft Brewery Tour and Tasting', type: 'Food Tour', description: 'Tour independent breweries and taste Manchester\'s thriving craft beer scene with expert guides.' },
                    { name: 'MediaCityUK and Salford Quays Tour', type: 'Cultural Tour', description: 'Explore the BBC and ITV studios complex and The Lowry arts center at Salford Quays.' },
                    { name: 'Chester Roman City Day Trip', type: 'Day Trip', description: 'Visit the beautiful walled city of Chester with its Roman amphitheatre and medieval Rows.' }
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
                        description: 'Liverpool is a city of extraordinary cultural richness, famous worldwide as the birthplace of The Beatles and home to one of Europe\'s most impressive waterfronts, a UNESCO World Heritage Site. The Royal Albert Dock houses world-class museums including Tate Liverpool, while the iconic Liver Building watches over the Mersey. Liverpool\'s passionate sporting culture, witty locals, and thriving arts scene create an atmosphere unlike anywhere else in Britain. This is a city that wears its heart proudly on its sleeve.',
                        image: 'https://images.unsplash.com/photo-1737380277699-329c575cbb9e?w=800',
                        population: '500,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 65, mid: 130, luxury: 320 },
                        attractions: [
                    { name: 'Beatles Story and Magical Mystery Tour', type: 'Cultural Tour', description: 'Visit the award-winning Beatles Story museum and tour iconic Fab Four locations by bus.' },
                    { name: 'Royal Albert Dock Walking Tour', type: 'Walking Tour', description: 'Explore the stunning UNESCO waterfront dock with its museums, galleries, and maritime heritage.' },
                    { name: 'Cavern Club Quarter Music Heritage Walk', type: 'Walking Tour', description: 'Walk the famous Mathew Street and discover where The Beatles performed their legendary early gigs.' },
                    { name: 'Anfield Stadium Tour: Liverpool FC', type: 'Museum', description: 'Experience the magic of Anfield with access to the dugout, tunnel, and the famous Kop.' },
                    { name: 'Mersey Ferry River Cruise', type: 'Boat Tour', description: 'Take the iconic ferry across the Mersey for stunning views of Liverpool\'s world-famous waterfront.' },
                    { name: 'Liverpool Cathedral Quarter Walking Tour', type: 'Walking Tour', description: 'Visit the two magnificent cathedrals and explore the creative Georgian Quarter between them.' },
                    { name: 'Tate Liverpool Modern Art Visit', type: 'Museum', description: 'Explore world-class modern and contemporary art exhibitions in this stunning dockside gallery.' },
                    { name: 'Liverpool Street Food and Market Tour', type: 'Food Tour', description: 'Taste diverse cuisines at Baltic Market, Bold Street eateries, and independent food vendors.' },
                    { name: 'Beatles\' Childhood Homes National Trust Tour', type: 'Cultural Tour', description: 'Visit John Lennon\'s and Paul McCartney\'s actual childhood homes preserved by the National Trust.' },
                    { name: 'Merseyside Maritime Museum and Slavery Gallery', type: 'Museum', description: 'Explore Liverpool\'s maritime history and the International Slavery Museum at Albert Dock.' },
                    { name: 'Liverpool Street Art and Baltic Triangle Tour', type: 'Cultural Tour', description: 'Discover vibrant street art and creative spaces in Liverpool\'s trendy Baltic Triangle district.' },
                    { name: 'North Wales Castles Day Trip from Liverpool', type: 'Day Trip', description: 'Visit stunning medieval castles in Conwy and Caernarfon amid beautiful North Welsh scenery.' }
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
                        description: 'Glasgow is Scotland\'s largest city and a powerhouse of art, architecture, and irrepressible character. The city\'s Victorian and Art Nouveau heritage, shaped by visionaries like Charles Rennie Mackintosh, creates a stunning architectural tapestry. World-class museums including the Kelvingrove and Riverside Museum are completely free, while the West End\'s leafy lanes overflow with independent cafés and vintage shops. Glasgow\'s legendary friendliness, vibrant music scene, and bold creative spirit make it one of Britain\'s most exciting cities.',
                        image: 'https://images.unsplash.com/photo-1624194026996-d731fe51437f?w=800',
                        population: '635,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                    { name: 'Glasgow City Center Architecture Walking Tour', type: 'Walking Tour', description: 'Discover Victorian grandeur, Art Nouveau masterpieces, and modern landmarks in Glasgow\'s stunning center.' },
                    { name: 'Kelvingrove Art Gallery and Museum Tour', type: 'Museum', description: 'Explore one of Europe\'s great free museums with works by Dalí, Mackintosh, and more.' },
                    { name: 'Charles Rennie Mackintosh Heritage Trail', type: 'Cultural Tour', description: 'Visit iconic Mackintosh buildings including the Lighthouse, Willow Tea Rooms, and House for an Art Lover.' },
                    { name: 'Glasgow Music Scene and Live Venue Tour', type: 'Cultural Tour', description: 'Explore the legendary live music venues that earned Glasgow its UNESCO City of Music title.' },
                    { name: 'Loch Lomond and Trossachs Day Trip', type: 'Day Trip', description: 'Journey to the bonnie banks of Loch Lomond and the stunning Trossachs National Park.' },
                    { name: 'Glasgow West End Food and Drink Tour', type: 'Food Tour', description: 'Taste Glasgow\'s diverse culinary scene through Ashton Lane, Byres Road, and Finnieston restaurants.' },
                    { name: 'Riverside Museum and Tall Ship Visit', type: 'Museum', description: 'Explore the Zaha Hadid-designed transport museum and climb aboard the historic Tall Ship Glenlee.' },
                    { name: 'Glasgow Street Art and Murals Trail', type: 'Walking Tour', description: 'Follow the city\'s famous mural trail discovering large-scale artworks across Glasgow\'s buildings.' },
                    { name: 'Glasgow Cathedral and Necropolis Tour', type: 'Historical Tour', description: 'Visit Scotland\'s finest medieval cathedral and the atmospheric Victorian cemetery on the hill above.' },
                    { name: 'Scotch Whisky Distillery Tour from Glasgow', type: 'Day Trip', description: 'Visit working whisky distilleries in the scenic countryside surrounding Glasgow for tastings.' },
                    { name: 'Pollok House and Burrell Collection', type: 'Museum', description: 'Explore the Edwardian mansion and the recently renovated Burrell Collection in beautiful Pollok Park.' },
                    { name: 'Glasgow Rangers or Celtic Stadium Tour', type: 'Cultural Tour', description: 'Go behind the scenes at Ibrox or Celtic Park and experience Glasgow\'s passionate football culture.' }
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
                        description: 'Birmingham is Britain\'s second city and a vibrant multicultural metropolis at the heart of England. More miles of canals than Venice wind through a cityscape mixing Victorian industrial heritage with bold contemporary architecture like the Bullring and Library of Birmingham. The Jewellery Quarter preserves centuries of craft tradition, while the Balti Triangle serves some of the finest South Asian cuisine in Europe. Birmingham\'s central location, diverse communities, and ambitious cultural renaissance make it a rewarding urban destination.',
                        image: 'https://images.unsplash.com/photo-1630334760120-0927c5529801?w=800',
                        population: '1,150,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 60, mid: 120, luxury: 300 },
                        attractions: [
                    { name: 'Birmingham Canals and Jewellery Quarter Walk', type: 'Walking Tour', description: 'Stroll Victorian canal towpaths and explore the historic Jewellery Quarter\'s workshops and museums.' },
                    { name: 'Cadbury World Chocolate Factory Tour', type: 'Day Trip', description: 'Discover the history of chocolate at Cadbury\'s Bournville factory with tastings and interactive zones.' },
                    { name: 'Balti Triangle Authentic Curry Tour', type: 'Food Tour', description: 'Taste Birmingham\'s legendary balti cuisine in the restaurants where this iconic dish was invented.' },
                    { name: 'Library of Birmingham and City Center Walk', type: 'Walking Tour', description: 'Visit Europe\'s largest public library and explore Birmingham\'s mix of modern and Victorian architecture.' },
                    { name: 'Black Country Living Museum Visit', type: 'Museum', description: 'Step back in time at this open-air museum recreating life during the Industrial Revolution.' },
                    { name: 'Birmingham Back to Backs: Historic Homes Tour', type: 'Historical Tour', description: 'Tour the last surviving court of back-to-back houses showing 200 years of Birmingham life.' },
                    { name: 'Warwick Castle Full-Day Excursion', type: 'Day Trip', description: 'Explore the magnificent medieval castle with its towers, dungeons, and spectacular grounds.' },
                    { name: 'Birmingham Street Art and Digbeth Tour', type: 'Cultural Tour', description: 'Discover vibrant street art and creative studios in Birmingham\'s coolest creative quarter, Digbeth.' },
                    { name: 'Peaky Blinders Filming Locations Tour', type: 'Walking Tour', description: 'Visit real filming locations from the hit TV series set in 1920s Birmingham.' },
                    { name: 'Birmingham Museum and Art Gallery Visit', type: 'Museum', description: 'Explore the world\'s largest collection of Pre-Raphaelite paintings and the Staffordshire Hoard.' },
                    { name: 'Stratford-upon-Avon Shakespeare Day Trip', type: 'Day Trip', description: 'Visit Shakespeare\'s birthplace, Anne Hathaway\'s cottage, and attend a Royal Shakespeare Company show.' },
                    { name: 'Birmingham Craft Beer and Real Ale Trail', type: 'Food Tour', description: 'Tour independent breweries and traditional pubs sampling Birmingham\'s thriving craft beer scene.' }
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
                image: 'https://images.unsplash.com/photo-1722978308023-fa4893f80cfe?w=800',
                cities: {
                    ljubljana: {
                        id: 'ljubljana',
                        name: 'Ljubljana',
                        country: 'Slovenia',
                        region: 'Schengen',
                        description: 'Ljubljana is one of Europe\'s most charming small capitals, a green and pedestrian-friendly city where a fairy-tale castle crowns a forested hill above a picturesque old town. The Ljubljanica River winds past café-lined embankments, crossed by the iconic Triple Bridge and the whimsical Dragon Bridge. Architect Jože Plečnik\'s unique vision shaped much of the city\'s distinctive character, blending Art Nouveau, baroque, and classical influences. Ljubljana\'s vibrant food scene, open-air markets, and warm atmosphere make it utterly delightful.',
                        image: 'https://images.unsplash.com/photo-1602619025915-073b0594d662?w=800',
                        population: '290,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 50, mid: 100, luxury: 260 },
                        attractions: [
                    { name: 'Ljubljana Castle Funicular and Old Town Tour', type: 'Walking Tour', description: 'Ride the funicular to the hilltop castle and explore the charming medieval old town below.' },
                    { name: 'Ljubljana Dragon Bridge and City Legends Walk', type: 'Walking Tour', description: 'Discover the dragon legend, Triple Bridge, and Plečnik\'s architectural masterpieces along the river.' },
                    { name: 'Lake Bled and Vintgar Gorge Day Trip', type: 'Day Trip', description: 'Visit the iconic alpine lake with its island church and walk the stunning Vintgar Gorge.' },
                    { name: 'Slovenian Food Tour at Central Market', type: 'Food Tour', description: 'Taste local cheeses, štruklji, and potica at Ljubljana\'s bustling Central Market and beyond.' },
                    { name: 'Postojna Cave and Predjama Castle Tour', type: 'Day Trip', description: 'Ride through spectacular underground caves and visit the dramatic cliff-embedded Predjama Castle.' },
                    { name: 'Ljubljana Wine and Craft Beer Tasting', type: 'Wine Tour', description: 'Sample excellent Slovenian wines and local craft beers in atmospheric old town wine bars.' },
                    { name: 'Metelkova City Alternative Art Tour', type: 'Cultural Tour', description: 'Explore Ljubljana\'s vibrant autonomous art zone with street art, galleries, and creative spaces.' },
                    { name: 'Ljubljanica River SUP and Kayak Tour', type: 'Adventure', description: 'Paddle through the heart of Ljubljana on the gentle Ljubljanica River past historic landmarks.' },
                    { name: 'Ljubljana Street Food and Night Market Walk', type: 'Food Tour', description: 'Experience Open Kitchen, Ljubljana\'s famous Friday street food market on the riverfront.' },
                    { name: 'Plečnik\'s Ljubljana Architecture Tour', type: 'Cultural Tour', description: 'Follow the visionary architect\'s trail through his most iconic buildings, bridges, and urban designs.' },
                    { name: 'Škocjan Caves UNESCO World Heritage Visit', type: 'Day Trip', description: 'Explore the breathtaking underground canyon system at the UNESCO-listed Škocjan Caves.' },
                    { name: 'Ljubljana Bike Tour Through Green Capital', type: 'Bike Tour', description: 'Cycle through Europe\'s Green Capital visiting Tivoli Park, riverside paths, and hidden neighborhoods.' }
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
                        description: 'Lake Bled is Slovenia\'s most iconic destination, a breathtaking alpine lake with an enchanting island church rising from its emerald-green waters. The medieval Bled Castle perches dramatically on a cliff above the lake, offering sweeping views of the Julian Alps backdrop. A traditional pletna boat ride to Bled Island, where you can ring the wishing bell, is a magical experience. Whether hiking the surrounding trails, tasting the famous Bled cream cake, or simply soaking in the views, Lake Bled is pure fairy-tale perfection.',
                        image: 'https://images.unsplash.com/photo-1663050891405-287645cf0775?w=800',
                        population: '8,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 55, mid: 110, luxury: 300 },
                        attractions: [
                    { name: 'Bled Castle and Lake Panoramic Tour', type: 'Walking Tour', description: 'Visit the clifftop medieval castle with museum and stunning panoramic views over the lake.' },
                    { name: 'Traditional Pletna Boat Ride to Bled Island', type: 'Boat Tour', description: 'Glide across the lake in a traditional wooden pletna boat and ring the island\'s wishing bell.' },
                    { name: 'Vintgar Gorge Wooden Walkway Hike', type: 'Adventure', description: 'Walk the dramatic wooden boardwalks through the stunning Vintgar Gorge to a thundering waterfall.' },
                    { name: 'Lake Bled Kremšnita Cream Cake Tasting', type: 'Food Tour', description: 'Taste the famous Bled cream cake at the original Park Hotel pastry shop lakeside.' },
                    { name: 'Lake Bohinj and Savica Waterfall Day Trip', type: 'Day Trip', description: 'Visit the pristine glacial Lake Bohinj and hike to the spectacular Savica Waterfall.' },
                    { name: 'Julian Alps E-Bike Mountain Tour', type: 'Bike Tour', description: 'Explore the stunning Julian Alps on electric bikes with mountain views and alpine meadows.' },
                    { name: 'Triglav National Park Hiking Adventure', type: 'Adventure', description: 'Hike through Slovenia\'s only national park with dramatic peaks, valleys, and alpine flora.' },
                    { name: 'Lake Bled Stand-Up Paddleboard Experience', type: 'Adventure', description: 'Glide across the calm emerald waters of Lake Bled on a stand-up paddleboard at sunrise.' },
                    { name: 'Slovenian Farm-to-Table Lunch Experience', type: 'Food Tour', description: 'Enjoy a traditional Slovenian multi-course lunch at an authentic alpine farmstead near Bled.' },
                    { name: 'Canyoning in the Soča Valley', type: 'Adventure', description: 'Abseil, jump, and slide through crystal-clear canyon pools in the stunning emerald Soča Valley.' },
                    { name: 'Bled Rowing and Lake Circuit Walk', type: 'Walking Tour', description: 'Walk the scenic 6km path around Lake Bled with stops at viewpoints and the spa park.' },
                    { name: 'Radovljica Chocolate and Medieval Town Tour', type: 'Day Trip', description: 'Visit a charming medieval town and its chocolate museum with artisan chocolate tastings.' }
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
                image: 'https://images.unsplash.com/photo-1728329549768-373643c0b29b?w=800',
                cities: {
                    barcelona: {
                        id: 'barcelona',
                        name: 'Barcelona',
                        country: 'Spain',
                        region: 'Schengen',
                        description: 'Barcelona is a city that dazzles with Gaudí\'s surreal architecture, golden Mediterranean beaches, and an infectious creative energy that fills every barrio. The unfinished Sagrada Família basilica soars skyward as one of the world\'s most extraordinary buildings, while Park Güell offers whimsical mosaics and sweeping city views. Las Ramblas buzzes with life day and night, and the Gothic Quarter hides medieval treasures around every corner. Barcelona\'s world-class cuisine, vibrant nightlife, and Catalan cultural pride make it endlessly captivating.',
                        image: 'https://images.unsplash.com/photo-1593368858664-a7fe556ab936?w=800',
                        population: '1,600,000',
                        bestTime: 'May to June, September to October',
                        avgBudget: { budget: 70, mid: 140, luxury: 380 },
                        attractions: [
                    { name: 'Sagrada Família Skip-the-Line Guided Tour', type: 'Walking Tour', description: 'Marvel at Gaudí\'s unfinished masterpiece with tower access and expert guide explaining its symbolism.' },
                    { name: 'Park Güell and Gaudí Architecture Tour', type: 'Walking Tour', description: 'Explore Gaudí\'s fantastical mosaic park and visit Casa Batlló and Casa Milà on Passeig de Gràcia.' },
                    { name: 'Gothic Quarter and Born District Walking Tour', type: 'Walking Tour', description: 'Wander through medieval streets discovering Roman ruins, hidden plazas, and Gothic cathedral.' },
                    { name: 'Barcelona Tapas and Wine Evening Tour', type: 'Food Tour', description: 'Bar-hop through authentic tapas bars tasting patatas bravas, jamón ibérico, and Catalan wines.' },
                    { name: 'Montserrat Monastery Half-Day Trip', type: 'Day Trip', description: 'Visit the sacred mountain monastery with stunning views and hear the famous boys\' choir sing.' },
                    { name: 'La Boqueria Market and Cooking Class', type: 'Food Tour', description: 'Shop for fresh ingredients at the iconic market and cook traditional Catalan dishes hands-on.' },
                    { name: 'Barcelona Sailing Cruise Along the Coast', type: 'Boat Tour', description: 'Sail the Mediterranean coastline with views of Barcelona\'s skyline, beaches, and Port Olímpic.' },
                    { name: 'Flamenco Show in the Gothic Quarter', type: 'Cultural Tour', description: 'Experience an intimate and passionate flamenco performance in an atmospheric Gothic Quarter venue.' },
                    { name: 'Montjuïc Castle, Gardens, and Fountain Tour', type: 'Walking Tour', description: 'Explore the hilltop fortress, botanical gardens, and the spectacular Magic Fountain evening show.' },
                    { name: 'Barcelona Bike Tour: Beach to Barceloneta', type: 'Bike Tour', description: 'Cycle through the city\'s waterfront, Ciutadella Park, and lively Barceloneta beach neighborhood.' },
                    { name: 'Picasso Museum and El Born Art Walk', type: 'Museum', description: 'View Picasso\'s formative works and explore the trendy galleries and boutiques of El Born.' },
                    { name: 'Costa Brava and Dalí Museum Day Trip', type: 'Day Trip', description: 'Visit the surreal Dalí Theatre-Museum in Figueres and explore the stunning Costa Brava coastline.' }
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
                        description: 'Madrid, Spain\'s majestic capital, pulses with an irresistible energy that draws visitors into its grand boulevards, world-renowned museums, and sun-drenched plazas. Home to the legendary Prado Museum, the Royal Palace, and the sprawling Retiro Park, the city seamlessly blends imperial grandeur with a modern cosmopolitan spirit. Madrid\'s culinary scene is extraordinary — from bustling tapas bars in La Latina to Michelin-starred dining rooms — and its legendary nightlife keeps the city alive well past midnight, making it one of Europe\'s most vibrant and rewarding destinations.',
                        image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
                        population: '3,300,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 65, mid: 130, luxury: 350 },
                        attractions: [
                    { name: 'Prado Museum Skip-the-Line Guided Tour', type: 'Museum', description: 'Priority access to Spain\'s premier art museum featuring Velázquez, Goya, and El Greco masterpieces' },
                    { name: 'Royal Palace of Madrid Tour', type: 'Palace Tour', description: 'Explore Europe\'s largest functioning royal palace with its opulent throne room and armoury' },
                    { name: 'Madrid Tapas & Wine Evening Tour', type: 'Food Tour', description: 'Taste authentic tapas and local wines at hidden gems in La Latina and Cava Baja' },
                    { name: 'Retiro Park & Crystal Palace Walk', type: 'Walking Tour', description: 'Stroll through Madrid\'s beloved park, visit the Crystal Palace, and enjoy the boating lake' },
                    { name: 'Reina Sofía Museum: Picasso\'s Guernica', type: 'Museum', description: 'Guided tour of Spain\'s modern art museum centered around Picasso\'s iconic anti-war masterpiece' },
                    { name: 'Toledo Full-Day Excursion', type: 'Day Trip', description: 'Visit the medieval \'City of Three Cultures\' with its cathedral, synagogues, and El Greco art' },
                    { name: 'Flamenco Show with Dinner in Madrid', type: 'Cultural Show', description: 'Authentic tablao flamenco performance paired with traditional Spanish dinner and sangria' },
                    { name: 'Santiago Bernabéu Stadium Tour', type: 'Guided Tour', description: 'Behind-the-scenes tour of Real Madrid\'s legendary stadium including trophy room and pitch' },
                    { name: 'Madrid Street Art & Malasaña Tour', type: 'Walking Tour', description: 'Discover Madrid\'s alternative side through the bohemian Malasaña neighborhood and street art' },
                    { name: 'Segovia & Ávila Day Trip', type: 'Day Trip', description: 'Visit Segovia\'s Roman aqueduct and Ávila\'s medieval walled city on a guided excursion' },
                    { name: 'Mercado de San Miguel Food Tour', type: 'Food Tour', description: 'Sample gourmet Spanish delicacies at Madrid\'s stunning iron-and-glass market near Plaza Mayor' },
                    { name: 'Madrid Sunset Bike Tour', type: 'Bike Tour', description: 'Cycle through Madrid\'s historic center and parks as the golden hour lights up the city' }
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
                        description: 'Seville, the passionate heart of Andalusia, enchants visitors with its intoxicating blend of Moorish architecture, flamenco rhythms, and orange blossom-scented streets. The city\'s crown jewels — the magnificent Alcázar Palace, the soaring Gothic cathedral housing Columbus\'s tomb, and the iconic Plaza de España — showcase centuries of artistic and cultural splendor. Seville\'s lively barrios buzz with tapas bars, sherry bodegas, and impromptu flamenco performances, while the banks of the Guadalquivir River provide a romantic backdrop for evening paseos that capture the very essence of Spanish life.',
                        image: 'https://images.unsplash.com/photo-1656596297359-7cfc62018427?w=800',
                        population: '690,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 55, mid: 110, luxury: 300 },
                        attractions: [
                    { name: 'Royal Alcázar Skip-the-Line Tour', type: 'Palace Tour', description: 'Priority access to Seville\'s stunning Mudéjar palace with its intricate tilework and lush gardens' },
                    { name: 'Seville Cathedral & Giralda Tower Tour', type: 'Historical Tour', description: 'Explore the world\'s largest Gothic cathedral and climb the iconic Giralda bell tower' },
                    { name: 'Flamenco Show in Triana Quarter', type: 'Cultural Show', description: 'Authentic flamenco performance in the birthplace of this passionate Andalusian art form' },
                    { name: 'Tapas & Sherry Walking Tour', type: 'Food Tour', description: 'Taste traditional Sevillian tapas and fino sherry at local bars in Santa Cruz quarter' },
                    { name: 'Plaza de España & María Luisa Park', type: 'Walking Tour', description: 'Guided walk through Seville\'s breathtaking Renaissance Revival plaza and tranquil park gardens' },
                    { name: 'Guadalquivir River Cruise at Sunset', type: 'Boat Tour', description: 'Scenic evening boat ride along the Guadalquivir with views of Torre del Oro and Triana' },
                    { name: 'Córdoba & Mezquita Day Trip', type: 'Day Trip', description: 'Full-day excursion to Córdoba\'s mesmerizing Mosque-Cathedral and the Jewish Quarter' },
                    { name: 'Seville Bike Tour: Hidden Gems', type: 'Bike Tour', description: 'Cycle through charming barrios discovering secret plazas, convents, and local street art' },
                    { name: 'Metropol Parasol & Rooftop Views', type: 'Walking Tour', description: 'Visit the striking Las Setas wooden structure and enjoy panoramic views of historic Seville' },
                    { name: 'Andalusian Cooking Class', type: 'Cooking Class', description: 'Learn to prepare gazpacho, salmorejo, and traditional Andalusian dishes with a local chef' },
                    { name: 'Ronda & White Villages Day Trip', type: 'Day Trip', description: 'Journey to the dramatic clifftop town of Ronda and picturesque pueblos blancos' },
                    { name: 'Horse-Drawn Carriage Tour of Seville', type: 'City Tour', description: 'Classic horse-drawn carriage ride past Seville\'s major landmarks and scenic gardens' }
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
                        description: 'Valencia, Spain\'s third-largest city, is a dazzling Mediterranean gem where futuristic architecture meets ancient traditions along a sun-kissed coastline. The City of Arts and Sciences — a breathtaking complex of gleaming white buildings designed by Santiago Calatrava — stands as one of Europe\'s most stunning modern landmarks, while the historic old town reveals Gothic churches, lively markets, and the magnificent Silk Exchange. As the birthplace of paella, Valencia offers an extraordinary culinary scene, and its wide sandy beaches, vibrant Barrio del Carmen nightlife, and the reclaimed Turia Gardens make it an endlessly rewarding destination.',
                        image: 'https://images.unsplash.com/photo-1725208179317-c5e56702816a?w=800',
                        population: '800,000',
                        bestTime: 'March to November',
                        avgBudget: { budget: 60, mid: 110, luxury: 300 },
                        attractions: [
                    { name: 'City of Arts & Sciences Guided Tour', type: 'Guided Tour', description: 'Explore Calatrava\'s futuristic complex including the Oceanogràfic aquarium and Science Museum' },
                    { name: 'Valencia Paella Cooking Class', type: 'Cooking Class', description: 'Master the art of authentic Valencian paella with fresh local ingredients and saffron' },
                    { name: 'Central Market & Old Town Food Tour', type: 'Food Tour', description: 'Taste horchata, buñuelos, and local delicacies at Europe\'s largest fresh food market' },
                    { name: 'Turia Gardens Bike Tour', type: 'Bike Tour', description: 'Cycle through the stunning 9km park built in a former riverbed crossing the city' },
                    { name: 'La Lonja de la Seda Tour', type: 'Historical Tour', description: 'Visit the UNESCO-listed Gothic Silk Exchange, a masterpiece of Valencian civil architecture' },
                    { name: 'Albufera Natural Park Boat Trip', type: 'Boat Tour', description: 'Sunset boat ride through the tranquil lagoon and rice paddies south of Valencia' },
                    { name: 'Valencia Street Art Tour in El Carmen', type: 'Walking Tour', description: 'Discover vibrant murals and graffiti art in Valencia\'s bohemian Barrio del Carmen quarter' },
                    { name: 'Oceanogràfic Aquarium Visit', type: 'Aquarium', description: 'Explore Europe\'s largest aquarium with dolphins, sharks, and Mediterranean marine habitats' },
                    { name: 'Valencia Cathedral & Holy Grail Tour', type: 'Historical Tour', description: 'Visit the cathedral said to house the Holy Grail and climb the Miguelete bell tower' },
                    { name: 'Malvarrosa Beach & Seaside Promenade', type: 'Walking Tour', description: 'Leisurely walk along Valencia\'s golden beach and lively seafront promenade with tapas stops' },
                    { name: 'Xàtiva Castle Day Trip', type: 'Day Trip', description: 'Excursion to the dramatic hilltop castle with sweeping views of the Valencian countryside' },
                    { name: 'Las Fallas Museum & Traditions Tour', type: 'Cultural Tour', description: 'Learn about Valencia\'s spectacular Fallas festival through preserved ninots and interactive displays' }
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
                        description: 'Zaragoza, the capital of Aragón, is a captivating yet often-overlooked Spanish city where two thousand years of history unfold along the banks of the Ebro River. The breathtaking Basilica del Pilar, with its soaring domes and Goya frescoes, dominates the skyline and stands as one of Spain\'s most revered pilgrimage sites. From Roman ruins at Caesaraugusta to the ornate Moorish Aljafería Palace and a buzzing tapas scene centered around El Tubo quarter, Zaragoza delivers an authentic Spanish experience without the tourist crowds of larger cities.',
                        image: 'https://images.unsplash.com/photo-1709727992229-0c3ee5c230e2?w=800',
                        population: '680,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 55, mid: 100, luxury: 280 },
                        attractions: [
                    { name: 'Basilica del Pilar Guided Tour', type: 'Historical Tour', description: 'Explore Zaragoza\'s iconic baroque basilica with Goya ceiling frescoes and rooftop tower views' },
                    { name: 'Aljafería Palace Moorish Heritage Tour', type: 'Palace Tour', description: 'Discover the exquisite 11th-century Islamic palace, one of Spain\'s finest Mudéjar monuments' },
                    { name: 'El Tubo Tapas Crawl', type: 'Food Tour', description: 'Sample Aragonese tapas and local Garnacha wines through Zaragoza\'s legendary narrow bar streets' },
                    { name: 'Roman Caesaraugusta Route Tour', type: 'Historical Tour', description: 'Visit underground Roman forum, thermal baths, river port, and theater ruins beneath the city' },
                    { name: 'Zaragoza Goya Walking Tour', type: 'Cultural Tour', description: 'Follow in the footsteps of Francisco de Goya visiting key sites linked to the master painter' },
                    { name: 'La Seo Cathedral & Tapestry Museum', type: 'Museum', description: 'Tour the magnificent cathedral blending Romanesque, Gothic, Mudéjar, and Baroque architecture' },
                    { name: 'Ebro River Bike Tour', type: 'Bike Tour', description: 'Cycle along the scenic Ebro riverbanks past bridges, parks, and Zaragoza\'s Expo 2008 site' },
                    { name: 'Monasterio de Piedra Day Trip', type: 'Day Trip', description: 'Full-day excursion to a stunning natural park with waterfalls set around a medieval monastery' },
                    { name: 'Zaragoza Street Art & Modern Culture Tour', type: 'Walking Tour', description: 'Explore Zaragoza\'s thriving contemporary art scene and vibrant neighborhood murals' },
                    { name: 'Pablo Gargallo Museum Visit', type: 'Museum', description: 'Guided tour of the avant-garde sculptor\'s works housed in a beautiful Renaissance palace' },
                    { name: 'Wine Tasting in Campo de Borja', type: 'Wine Tour', description: 'Sample award-winning Garnacha wines at boutique bodegas in the surrounding wine region' },
                    { name: 'Belchite Ghost Town Excursion', type: 'Day Trip', description: 'Haunting visit to the abandoned Spanish Civil War village preserved as a memorial site' }
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
                image: 'https://images.unsplash.com/photo-1734973567491-d2bfd78b4100?w=800',
                cities: {
                    zurich: {
                        id: 'zurich',
                        name: 'Zurich',
                        country: 'Switzerland',
                        region: 'Schengen',
                        description: 'Zurich, Switzerland\'s largest city, is a sophisticated metropolis where cutting-edge finance and fashion meet centuries of culture along the shimmering shores of Lake Zurich. The charming Altstadt old town, with its medieval guild houses, cobblestone lanes, and the twin-towered Grossmünster church, offers a picturesque contrast to the city\'s sleek modern galleries and Michelin-starred restaurants. Surrounded by the snow-capped Alps and pristine lakes, Zurich blends urban elegance with easy access to breathtaking natural landscapes, making it a year-round destination for culture lovers and outdoor enthusiasts alike.',
                        image: 'https://images.unsplash.com/photo-1685950527843-2725241f4f39?w=800',
                        population: '420,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 120, mid: 220, luxury: 550 },
                        attractions: [
                    { name: 'Zurich Old Town Walking Tour', type: 'Walking Tour', description: 'Guided stroll through the medieval Altstadt visiting Grossmünster, Fraumünster, and Lindenhof hill' },
                    { name: 'Lake Zurich Boat Cruise', type: 'Boat Tour', description: 'Scenic cruise on crystal-clear Lake Zurich with views of Alps and lakeside villages' },
                    { name: 'Swiss National Museum Visit', type: 'Museum', description: 'Explore Switzerland\'s cultural history from prehistoric times to the present in a castle-like building' },
                    { name: 'Bahnhofstrasse Shopping & Chocolate Tour', type: 'Food Tour', description: 'Walk Zurich\'s famous luxury boulevard with tastings at Sprüngli and artisan chocolatiers' },
                    { name: 'Uetliberg Mountain Panorama Hike', type: 'Adventure', description: 'Train ride and hike to Zurich\'s local mountain for stunning 360-degree views of city and Alps' },
                    { name: 'Kunsthaus Zurich Art Museum Tour', type: 'Museum', description: 'Guided tour of one of Switzerland\'s most important art collections from medieval to contemporary' },
                    { name: 'Rhine Falls & Stein am Rhein Day Trip', type: 'Day Trip', description: 'Visit Europe\'s largest waterfall and the perfectly preserved medieval town of Stein am Rhein' },
                    { name: 'Zurich Fondue & Swiss Cuisine Tour', type: 'Food Tour', description: 'Savor traditional cheese fondue, raclette, and rösti at the city\'s best Swiss restaurants' },
                    { name: 'FIFA World Football Museum', type: 'Museum', description: 'Interactive museum celebrating the history and passion of football with rare memorabilia' },
                    { name: 'Zurich West & Viadukt Market Tour', type: 'Walking Tour', description: 'Explore Zurich\'s trendy industrial district with boutique shops under historic railway arches' },
                    { name: 'Rapperswil Castle & Rose Garden Day Trip', type: 'Day Trip', description: 'Boat trip to the \'Town of Roses\' with its medieval castle and lakeside promenade' },
                    { name: 'Zurich Craft Beer & Nightlife Tour', type: 'Nightlife', description: 'Evening tour of Zurich\'s booming craft brewery scene and vibrant Langstrasse nightlife district' }
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
                        description: 'Zermatt, nestled at the foot of the iconic Matterhorn, is Switzerland\'s most legendary alpine resort and a paradise for mountaineers, skiers, and nature lovers. This car-free village exudes old-world charm with its timber chalets, horse-drawn carriages, and crisp mountain air at 1,620 meters above sea level. The town offers year-round skiing on Europe\'s highest summer ski slopes, over 400 kilometers of hiking trails with jaw-dropping panoramas, and the spectacular Glacier Express railway journey, cementing its status as one of the world\'s most breathtaking mountain destinations.',
                        image: 'https://images.unsplash.com/photo-1605750454112-f2f3f696eeb0?w=800',
                        population: '6,000',
                        bestTime: 'July to September (hiking), December to April (skiing)',
                        avgBudget: { budget: 150, mid: 280, luxury: 700 },
                        attractions: [
                    { name: 'Gornergrat Railway & Matterhorn Views', type: 'Adventure', description: 'Scenic cogwheel train ride to 3,089m for spectacular close-up views of the Matterhorn' },
                    { name: 'Matterhorn Glacier Paradise Cable Car', type: 'Adventure', description: 'Ascend to Europe\'s highest cable car station at 3,883m with panoramic Alpine views' },
                    { name: 'Five Lakes Hiking Trail', type: 'Adventure', description: 'Iconic alpine hike past five crystal-clear mountain lakes reflecting the mighty Matterhorn' },
                    { name: 'Zermatt Village Heritage Walking Tour', type: 'Walking Tour', description: 'Guided stroll through the car-free village discovering traditional Valais chalets and mountaineering history' },
                    { name: 'Glacier Express Scenic Train Journey', type: 'Day Trip', description: 'Legendary panoramic rail journey through 291 bridges and 91 tunnels across the Swiss Alps' },
                    { name: 'Matterhorn Museum: Zermatlantis', type: 'Museum', description: 'Underground museum telling the dramatic story of the first Matterhorn ascent in 1865' },
                    { name: 'Sunnegga & Rothorn Cable Car Adventure', type: 'Adventure', description: 'Ride to the sun-drenched Sunnegga plateau and continue to Rothorn for paragliding options' },
                    { name: 'Swiss Alpine Cheese & Fondue Experience', type: 'Food Tour', description: 'Taste artisan Valais cheeses and enjoy traditional fondue in a cozy mountain restaurant' },
                    { name: 'Gorner Gorge Nature Walk', type: 'Nature', description: 'Walk through the dramatic narrow gorge carved by glacial meltwater with wooden walkways' },
                    { name: 'Zermatt Ski & Snowboard Experience', type: 'Adventure', description: 'World-class skiing on 360km of pistes with year-round glacier skiing and snowboarding' },
                    { name: 'Schwarzsee Chapel Hike', type: 'Adventure', description: 'Scenic hike to the charming lakeside chapel at Schwarzsee with stunning Matterhorn backdrop' },
                    { name: 'Zermatt Sunset Photography Tour', type: 'Guided Tour', description: 'Capture the legendary alpenglow on the Matterhorn with expert photography guidance at golden hour' }
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
                        description: 'Lucerne, cradled between the sparkling waters of Lake Lucerne and the majestic peaks of Mount Pilatus and Rigi, is the quintessential Swiss postcard town. Its beautifully preserved medieval old town features the iconic Chapel Bridge — the world\'s oldest covered wooden bridge — colorful frescoed buildings, and charming cobblestone squares alive with street musicians. Whether riding a vintage paddle steamer across the lake, ascending snow-dusted peaks by cable car, or exploring world-class museums like the Rosengart Collection, Lucerne offers an enchanting blend of natural beauty, cultural richness, and alpine adventure.',
                        image: 'https://images.unsplash.com/photo-1706400053771-5483dc9125ae?w=800',
                        population: '82,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 110, mid: 200, luxury: 500 },
                        attractions: [
                    { name: 'Chapel Bridge & Old Town Walking Tour', type: 'Walking Tour', description: 'Guided tour of Lucerne\'s iconic covered bridge, Water Tower, and medieval painted buildings' },
                    { name: 'Mount Pilatus Golden Round Trip', type: 'Day Trip', description: 'Boat, cogwheel railway, and cable car loop to the 2,132m summit with breathtaking views' },
                    { name: 'Lake Lucerne Steamboat Cruise', type: 'Boat Tour', description: 'Scenic cruise on a vintage paddle steamer past dramatic mountain scenery and lakeside villages' },
                    { name: 'Mount Rigi Queen of the Mountains Tour', type: 'Day Trip', description: 'Cruise and cogwheel train to Rigi summit for panoramic views of Alps and lakes' },
                    { name: 'Lion Monument & Glacier Garden Visit', type: 'Historical Tour', description: 'See the poignant Lion Monument and explore the Ice Age Glacier Garden with mirror maze' },
                    { name: 'Swiss Museum of Transport', type: 'Museum', description: 'Interactive museum showcasing the history of transport from trains to space exploration' },
                    { name: 'Lucerne Chocolate & Cheese Tasting', type: 'Food Tour', description: 'Sample premium Swiss chocolates and aged cheeses at artisan shops throughout the old town' },
                    { name: 'Lucerne Festival Concert Experience', type: 'Concert', description: 'World-class classical music performance at the stunning lakeside KKL Lucerne concert hall' },
                    { name: 'Stanserhorn CabriO Open-Top Cable Car', type: 'Adventure', description: 'Ride the world\'s first open-top cable car to the summit for 360-degree Alpine panoramas' },
                    { name: 'Engelberg & Mount Titlis Day Trip', type: 'Day Trip', description: 'Excursion to the glacier-topped Mount Titlis with rotating cable car and cliff walk' },
                    { name: 'Rosengart Collection Museum Tour', type: 'Museum', description: 'Intimate gallery featuring major works by Picasso and Paul Klee in the heart of Lucerne' },
                    { name: 'Lucerne E-Bike Lake & Countryside Tour', type: 'Bike Tour', description: 'Electric bike ride along Lake Lucerne\'s shores through charming villages and alpine meadows' }
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
                        description: 'Geneva, the cosmopolitan jewel of French-speaking Switzerland, sits majestically at the southwestern tip of Lake Geneva with the snow-capped Mont Blanc as its backdrop. As the European headquarters of the United Nations and the birthplace of the Red Cross, this elegant city carries an unmistakable air of international prestige, complemented by world-class museums, luxury watchmaking boutiques, and refined lakeside promenades. From the iconic Jet d\'Eau fountain soaring 140 meters into the sky to the charming cobbled streets of the Old Town and the cutting-edge science at CERN, Geneva is a sophisticated blend of diplomacy, culture, and natural beauty.',
                        image: 'https://images.unsplash.com/photo-1573108037329-37aa135a142e?w=800',
                        population: '515,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 120, mid: 220, luxury: 550 },
                        attractions: [
                    { name: 'Jet d\'Eau & Lake Geneva Walking Tour', type: 'Walking Tour', description: 'Guided walk along Geneva\'s stunning lakefront promenade visiting the iconic 140-meter fountain' },
                    { name: 'CERN Particle Physics Tour', type: 'Guided Tour', description: 'Fascinating guided visit to the world\'s largest particle physics laboratory and antimatter exhibits' },
                    { name: 'Geneva Old Town & St. Pierre Cathedral', type: 'Walking Tour', description: 'Explore Geneva\'s charming hilltop old town and climb the cathedral towers for panoramic views' },
                    { name: 'United Nations Palais des Nations Tour', type: 'Guided Tour', description: 'Guided tour of the European UN headquarters with its Assembly Hall and Ariana Park' },
                    { name: 'Lake Geneva Cruise to Montreux', type: 'Boat Tour', description: 'Scenic boat journey across Lake Geneva passing vineyards, castles, and the Swiss Riviera' },
                    { name: 'Swiss Watchmaking Workshop', type: 'Cultural Tour', description: 'Hands-on workshop discovering the art of Swiss watchmaking with a master horologist' },
                    { name: 'Carouge Artisan Quarter Food Tour', type: 'Food Tour', description: 'Taste Genevan specialties and artisan treats in the bohemian \'Greenwich Village of Geneva\'' },
                    { name: 'Patek Philippe Museum Visit', type: 'Museum', description: 'Explore five centuries of watchmaking history at one of the world\'s finest horological museums' },
                    { name: 'Chamonix & Mont Blanc Day Trip', type: 'Day Trip', description: 'Full-day excursion to the French Alps with Aiguille du Midi cable car and glacier views' },
                    { name: 'International Red Cross Museum Tour', type: 'Museum', description: 'Moving and interactive museum dedicated to humanitarian action and the history of the Red Cross' },
                    { name: 'Geneva Wine & Vineyard Tour', type: 'Wine Tour', description: 'Visit Geneva\'s lesser-known vineyards along the lake for tastings of local Chasselas wines' },
                    { name: 'Jardin Anglais & Flower Clock Photo Tour', type: 'Walking Tour', description: 'Visit Geneva\'s iconic floral clock and beautiful English Garden with Mont Blanc views' }
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
                        description: 'Lausanne, the dynamic Olympic capital perched on the steep shores of Lake Geneva, is a city of culture, academia, and breathtaking natural beauty. Home to the International Olympic Committee and its superb museum, this vibrant university city enchants visitors with its Gothic cathedral crowning the hilltop old town, terraced vineyards of the UNESCO-listed Lavaux region just minutes away, and a thriving arts and nightlife scene. With its efficient metro connecting the lakeside Ouchy promenade to the lively Flon district, Lausanne delivers a perfect balance of Swiss sophistication, French-speaking charm, and outdoor adventure.',
                        image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
                        population: '420,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 110, mid: 200, luxury: 480 },
                        attractions: [
                    { name: 'Olympic Museum Lausanne Tour', type: 'Museum', description: 'Interactive museum celebrating the Olympic Games with memorabilia, simulators, and lakeside sculpture park' },
                    { name: 'Lausanne Cathedral & Old Town Walk', type: 'Walking Tour', description: 'Explore the finest Gothic cathedral in Switzerland and wander through the charming medieval quarter' },
                    { name: 'Lavaux Vineyard Terraces Wine Tour', type: 'Wine Tour', description: 'Walk through UNESCO-listed terraced vineyards tasting exquisite Chasselas wines above Lake Geneva' },
                    { name: 'Lake Geneva Cruise from Ouchy', type: 'Boat Tour', description: 'Scenic lakeside cruise departing from Lausanne\'s charming Ouchy waterfront district' },
                    { name: 'Collection de l\'Art Brut Museum', type: 'Museum', description: 'Unique museum showcasing outsider art created by self-taught and visionary artists worldwide' },
                    { name: 'Flon District Food & Nightlife Tour', type: 'Food Tour', description: 'Explore Lausanne\'s trendiest neighborhood with craft cocktails, street food, and live music' },
                    { name: 'Château de Chillon Day Trip', type: 'Day Trip', description: 'Visit Switzerland\'s most visited castle on Lake Geneva\'s shores near Montreux' },
                    { name: 'Rochers-de-Naye Mountain Excursion', type: 'Day Trip', description: 'Scenic cogwheel train ascent to 2,042m summit with Alpine garden and marmot sanctuary' },
                    { name: 'Lausanne Chocolate Walking Tour', type: 'Food Tour', description: 'Taste premium Swiss chocolates at artisan boutiques throughout Lausanne\'s elegant streets' },
                    { name: 'MUDAC Design & Contemporary Art Museum', type: 'Museum', description: 'Cutting-edge museum of contemporary design and applied arts in Lausanne\'s cultural quarter' },
                    { name: 'Lausanne to Gruyères Cheese Day Trip', type: 'Day Trip', description: 'Visit the medieval town of Gruyères with cheese factory tour and fondue tasting' },
                    { name: 'Sauvabelin Tower & Forest Walk', type: 'Nature', description: 'Hike through Sauvabelin forest to the wooden observation tower with panoramic lake views' }
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
                        description: 'Bern, Switzerland\'s understated capital, is a UNESCO World Heritage city where six kilometers of medieval arcaded streets, sandstone facades, and whimsical fountains create one of Europe\'s most beautifully preserved old towns. The city\'s iconic Zytglogge clock tower, the bear park along the turquoise Aare River, and the towering Gothic Münster cathedral with its panoramic terrace offer visitors a deeply atmospheric experience. Despite its political importance as the seat of Swiss government, Bern retains a relaxed, intimate charm, with locals swimming in the swift Aare in summer and the nearby Emmental and Bernese Oberland providing stunning day trip opportunities.',
                        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800',
                        population: '420,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 100, mid: 190, luxury: 450 },
                        attractions: [
                    { name: 'Bern Old Town UNESCO Walking Tour', type: 'Walking Tour', description: 'Guided tour of Bern\'s medieval arcaded streets, ornate fountains, and historic Zytglogge clock tower' },
                    { name: 'Zytglogge Clock Tower Interior Tour', type: 'Historical Tour', description: 'Rare access inside Bern\'s iconic 13th-century astronomical clock to see its medieval mechanism' },
                    { name: 'Bern Münster Cathedral & Tower Climb', type: 'Historical Tour', description: 'Visit Switzerland\'s tallest cathedral and climb 344 steps for sweeping views of the Alps' },
                    { name: 'Einstein House & Museum Visit', type: 'Museum', description: 'Tour the apartment where Albert Einstein developed his theory of relativity in 1905' },
                    { name: 'BärenPark Bear Park & Aare River Walk', type: 'Walking Tour', description: 'Visit Bern\'s famous bears in their riverside habitat and stroll along the turquoise Aare' },
                    { name: 'Zentrum Paul Klee Museum Tour', type: 'Museum', description: 'Explore the world\'s largest collection of Paul Klee\'s works in Renzo Piano\'s wave-shaped building' },
                    { name: 'Aare River Swimming Experience', type: 'Adventure', description: 'Join locals for a thrilling summer swim down the crystal-clear turquoise Aare River rapids' },
                    { name: 'Swiss Parliament Building Guided Tour', type: 'Guided Tour', description: 'Free guided tour of Switzerland\'s Federal Palace with its impressive domed assembly hall' },
                    { name: 'Emmental Cheese & Countryside Day Trip', type: 'Day Trip', description: 'Visit the famous Emmental Show Dairy and explore the rolling green hills of Emmental valley' },
                    { name: 'Bern Food Market & Culinary Tour', type: 'Food Tour', description: 'Taste Bernese specialties including Berner Platte, Zibelechueche, and Toblerone chocolate' },
                    { name: 'Gurten Mountain Funicular & Park', type: 'Adventure', description: 'Ride the funicular to Bern\'s local mountain for panoramic Alpine views and family-friendly activities' },
                    { name: 'Thun & Lake Thun Day Trip', type: 'Day Trip', description: 'Excursion to the charming lakeside town of Thun with its castle and Alpine lake cruises' }
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
                        description: 'Paris, the luminous City of Light, stands as the world\'s most romantic and culturally rich capital, where iconic landmarks like the Eiffel Tower, the Louvre, and Notre-Dame Cathedral define the very essence of Western civilization. Each arrondissement reveals a distinct character — from the bohemian charm of Montmartre to the elegant boulevards of Saint-Germain-des-Prés — while world-class patisseries, Michelin-starred bistros, and legendary cafés elevate the art of living to an unmatched level. With its Seine-side bookstalls, magnificent museums housing humanity\'s greatest masterpieces, and an electric energy that has inspired artists for centuries, Paris remains an eternal destination that rewards every visit.',
                        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
                        population: '12,000,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 100, mid: 180, luxury: 500 },
                        attractions: [
                    { name: 'Eiffel Tower Summit Skip-the-Line Tour', type: 'Guided Tour', description: 'Priority access to the Eiffel Tower\'s summit level with expert guide and panoramic Paris views' },
                    { name: 'Louvre Museum Masterpieces Guided Tour', type: 'Museum', description: 'Expert-led tour of the Mona Lisa, Venus de Milo, and Louvre\'s greatest treasures' },
                    { name: 'Montmartre & Sacré-Cœur Walking Tour', type: 'Walking Tour', description: 'Stroll through the artistic hilltop village visiting Sacré-Cœur, Place du Tertre, and Moulin Rouge' },
                    { name: 'Seine River Dinner Cruise', type: 'Boat Tour', description: 'Gourmet dinner aboard a glass-roofed boat gliding past illuminated Paris landmarks at night' },
                    { name: 'Versailles Palace & Gardens Day Trip', type: 'Day Trip', description: 'Full-day excursion to the opulent Palace of Versailles with Hall of Mirrors and royal gardens' },
                    { name: 'Paris Patisserie & Chocolate Tour', type: 'Food Tour', description: 'Taste croissants, macarons, and artisan chocolates at Paris\'s finest pâtisseries and chocolatiers' },
                    { name: 'Musée d\'Orsay Impressionist Art Tour', type: 'Museum', description: 'Guided tour of the world\'s premier Impressionist collection featuring Monet, Renoir, and Van Gogh' },
                    { name: 'Le Marais Historical Walking Tour', type: 'Walking Tour', description: 'Explore Paris\'s trendiest district with its medieval architecture, Jewish quarter, and chic boutiques' },
                    { name: 'Giverny: Monet\'s Garden Day Trip', type: 'Day Trip', description: 'Visit Claude Monet\'s enchanting home and the water lily gardens that inspired his masterpieces' },
                    { name: 'Paris Bike Tour Along the Seine', type: 'Bike Tour', description: 'Cycle past Notre-Dame, the Louvre, and Tuileries Gardens along the scenic Seine riverbanks' },
                    { name: 'Moulin Rouge Cabaret Show', type: 'Cultural Show', description: 'Legendary Parisian cabaret with dazzling costumes, can-can dancers, and champagne service' },
                    { name: 'Catacombs of Paris Underground Tour', type: 'Historical Tour', description: 'Descend into the eerie underground ossuary holding the remains of six million Parisians' }
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
                        description: 'Lyon, France\'s gastronomic capital, is a magnificent city where two thousand years of history converge at the confluence of the Rhône and Saône rivers. The UNESCO-listed old town of Vieux Lyon, with its Renaissance traboules (secret passageways), the ancient Roman amphitheaters of Fourvière, and the vibrant silk-weaving heritage of the Croix-Rousse district create an extraordinarily layered urban landscape. Renowned worldwide for its bouchon restaurants serving quintessential Lyonnaise cuisine and its proximity to the Beaujolais and Rhône Valley wine regions, Lyon is a paradise for food and wine lovers seeking authentic French culture.',
                        image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800',
                        population: '2,300,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                    { name: 'Vieux Lyon & Traboules Walking Tour', type: 'Walking Tour', description: 'Explore Renaissance old town and secret traboule passageways with an expert local guide' },
                    { name: 'Lyon Bouchon Food Tour', type: 'Food Tour', description: 'Taste authentic Lyonnaise cuisine including quenelles, andouillette, and praline tart at traditional bouchons' },
                    { name: 'Fourvière Basilica & Roman Theaters Tour', type: 'Historical Tour', description: 'Visit the hilltop basilica and explore two-thousand-year-old Roman amphitheaters with panoramic city views' },
                    { name: 'Beaujolais Wine & Village Day Trip', type: 'Wine Tour', description: 'Full-day excursion through rolling Beaujolais vineyards with tastings and charming village visits' },
                    { name: 'Les Halles de Lyon Paul Bocuse Tour', type: 'Food Tour', description: 'Guided tasting tour of Lyon\'s legendary indoor food market named after the famous chef' },
                    { name: 'Croix-Rousse Silk Heritage Walk', type: 'Cultural Tour', description: 'Discover the historic silk-weaving quarter with its murals, workshops, and bohemian atmosphere' },
                    { name: 'Confluence Museum Visit', type: 'Museum', description: 'Explore the striking Musée des Confluences covering science, anthropology, and world civilizations' },
                    { name: 'Lyon by Night Illumination Tour', type: 'Walking Tour', description: 'Evening guided walk showcasing Lyon\'s spectacular permanent light installations across the city' },
                    { name: 'Cooking Class: Lyonnaise Cuisine', type: 'Cooking Class', description: 'Hands-on class preparing classic Lyonnaise dishes with market-fresh ingredients and wine pairing' },
                    { name: 'Pérouges Medieval Village Day Trip', type: 'Day Trip', description: 'Visit one of France\'s most beautiful medieval villages famous for its galette de Pérouges' },
                    { name: 'Presqu\'île & Place Bellecour Bike Tour', type: 'Bike Tour', description: 'Cycle through Lyon\'s elegant peninsula district past grand squares and boutique-lined streets' },
                    { name: 'Rhône Valley Wine Tasting Tour', type: 'Wine Tour', description: 'Sample Côtes du Rhône, Condrieu, and Côte-Rôtie wines at acclaimed domaines south of Lyon' }
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
                        description: 'Marseille, France\'s oldest and most multicultural city, is a raw and captivating Mediterranean port where ancient Greek heritage, North African influences, and Provençal soul collide in a kaleidoscope of flavors, colors, and stories. The stunning Vieux-Port harbor, crowned by the golden Notre-Dame de la Garde basilica high on the hilltop, remains the beating heart of the city, while the dramatic limestone Calanques cliffs plunging into turquoise waters provide some of Europe\'s most spectacular coastal scenery. With its bouillabaisse tradition, vibrant Le Panier quarter, and the bold MuCEM museum, Marseille offers an authentic and electrifying alternative to the polished French Riviera.',
                        image: 'https://images.unsplash.com/photo-1589810264340-0ce27bfbf751?w=800',
                        population: '1,600,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                    { name: 'Calanques National Park Boat Tour', type: 'Boat Tour', description: 'Cruise along Marseille\'s stunning limestone cliffs and swim in crystal-clear turquoise calanque coves' },
                    { name: 'Vieux-Port & Le Panier Walking Tour', type: 'Walking Tour', description: 'Guided walk through Marseille\'s historic old port and colorful hilltop Le Panier district' },
                    { name: 'Notre-Dame de la Garde Basilica Visit', type: 'Historical Tour', description: 'Visit Marseille\'s iconic hilltop basilica with breathtaking 360-degree views over the city and sea' },
                    { name: 'Marseille Bouillabaisse Tasting Tour', type: 'Food Tour', description: 'Sample authentic bouillabaisse and Provençal seafood at Marseille\'s finest waterfront restaurants' },
                    { name: 'MuCEM Museum & Fort Saint-Jean Tour', type: 'Museum', description: 'Explore the striking Museum of European and Mediterranean Civilisations and connected historic fort' },
                    { name: 'Calanques Hiking: Sormiou & Morgiou', type: 'Adventure', description: 'Guided hike through the dramatic Calanques National Park to secluded beaches and viewpoints' },
                    { name: 'Château d\'If Island Excursion', type: 'Day Trip', description: 'Boat trip to the legendary island fortress immortalized in The Count of Monte Cristo' },
                    { name: 'Marseille Street Art & Culture Tour', type: 'Cultural Tour', description: 'Discover Marseille\'s vibrant street art scene in the Cours Julien and Le Panier neighborhoods' },
                    { name: 'Aix-en-Provence & Cézanne Day Trip', type: 'Day Trip', description: 'Visit elegant Aix-en-Provence exploring Cézanne\'s studio, markets, and tree-lined boulevards' },
                    { name: 'Frioul Islands Kayaking Adventure', type: 'Adventure', description: 'Sea kayak to the pristine Frioul archipelago with snorkeling in Mediterranean waters' },
                    { name: 'Marseille Pastis & Apéro Tour', type: 'Food Tour', description: 'Learn about Marseille\'s pastis heritage and enjoy a traditional apéritif with local specialties' },
                    { name: 'Cassis Village & Wine Tasting', type: 'Day Trip', description: 'Visit the charming fishing village of Cassis with white wine tasting and coastal views' }
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
                        description: 'Nice, the dazzling queen of the French Riviera, captivates visitors with its legendary Promenade des Anglais, azure Mediterranean waters, and a beguiling blend of French and Italian influences. The colorful old town of Vieux Nice, with its labyrinthine lanes, bustling Cours Saleya flower market, and baroque churches, gives way to elegant Belle Époque architecture along the seafront and world-class art museums dedicated to Matisse and Chagall. Bathed in over 300 days of sunshine per year, Nice offers an intoxicating mix of beach life, hilltop panoramas from Castle Hill, and Niçoise cuisine that makes it the undisputed jewel of the Côte d\'Azur.',
                        image: 'https://images.unsplash.com/photo-1586168574850-38dfa4d603f0?w=800',
                        population: '940,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                    { name: 'Vieux Nice & Cours Saleya Market Tour', type: 'Walking Tour', description: 'Guided stroll through Nice\'s colorful old town and vibrant flower and food market' },
                    { name: 'Castle Hill Panoramic Walking Tour', type: 'Walking Tour', description: 'Climb to the hilltop park for breathtaking views over Nice\'s Baie des Anges coastline' },
                    { name: 'Nice Food Tour: Niçoise Cuisine', type: 'Food Tour', description: 'Sample socca, pissaladière, salade niçoise, and local rosé at authentic Niçois establishments' },
                    { name: 'Èze Village & Monaco Day Trip', type: 'Day Trip', description: 'Visit the stunning hilltop village of Èze and explore glamorous Monte Carlo and its casino' },
                    { name: 'Matisse & Chagall Museums Tour', type: 'Museum', description: 'Guided visit to both Nice\'s Matisse Museum and the stunning Marc Chagall Biblical Message museum' },
                    { name: 'Promenade des Anglais E-Bike Tour', type: 'Bike Tour', description: 'Electric bike ride along the iconic seaside promenade and into the hills above Nice' },
                    { name: 'Saint-Paul-de-Vence Art Village Tour', type: 'Day Trip', description: 'Visit the medieval hilltop village beloved by artists, home to the Maeght Foundation gallery' },
                    { name: 'Nice Sailing & Snorkeling Excursion', type: 'Boat Tour', description: 'Half-day sailing trip along the Riviera coast with swimming and snorkeling in hidden bays' },
                    { name: 'Antibes & Juan-les-Pins Day Trip', type: 'Day Trip', description: 'Explore Antibes\' Picasso Museum, old town ramparts, and the famous Cap d\'Antibes coastal path' },
                    { name: 'Nice Riviera Wine Tasting', type: 'Wine Tour', description: 'Taste Bellet AOC wines from Nice\'s own hillside vineyards with stunning Mediterranean views' },
                    { name: 'Cours Saleya Cooking Class', type: 'Cooking Class', description: 'Market-to-table cooking class preparing Niçoise specialties with ingredients from Cours Saleya' },
                    { name: 'Nice Old Town Night Tour & Apéro', type: 'Nightlife', description: 'Evening walking tour through atmospheric Vieux Nice with stops for local wine and nibbles' }
                ],
                        tips: [
                            'Beaches are pebbly, not sandy',
                            'Try socca (chickpea pancake)',
                            'Day trip to Monaco and Èze',
                            'Nice Carnival in February'
                        ]
                    },
                    bordeaux: {
                        id: 'bordeaux',
                        name: 'Bordeaux',
                        country: 'France',
                        region: 'Schengen',
                        description: 'Bordeaux, the undisputed wine capital of the world, is an elegant 18th-century port city on the Garonne River whose limestone facades have earned it the nickname \'La Belle Endormie\' — the Sleeping Beauty, now fully awakened. The UNESCO-listed city center dazzles with its grand neoclassical architecture, particularly the magnificent Place de la Bourse and its mesmerizing Miroir d\'Eau water mirror. Beyond the extraordinary wine culture — with legendary châteaux of Saint-Émilion, Médoc, and Pauillac at its doorstep — Bordeaux offers a vibrant culinary scene, the innovative Cité du Vin museum, and a youthful energy fueled by its large student population.',
                        image: 'https://images.unsplash.com/photo-1493564738392-d148cfbd6eda?w=800',
                        population: '1,200,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 75, mid: 140, luxury: 380 },
                        attractions: [
                    { name: 'Saint-Émilion Wine Tour & Tasting', type: 'Wine Tour', description: 'Full-day tour of prestigious Saint-Émilion châteaux with grand cru tastings and village visit' },
                    { name: 'Cité du Vin Museum Experience', type: 'Museum', description: 'Interactive wine museum exploring global wine culture with panoramic tasting on the 8th floor' },
                    { name: 'Bordeaux Old Town Walking Tour', type: 'Walking Tour', description: 'Guided walk past Place de la Bourse, Grand Théâtre, and the stunning Miroir d\'Eau' },
                    { name: 'Médoc Château Wine Tour', type: 'Wine Tour', description: 'Visit legendary Médoc wine estates including Margaux and Pauillac with cellar tours and tastings' },
                    { name: 'Bordeaux River Cruise on the Garonne', type: 'Boat Tour', description: 'Scenic cruise along the Garonne River with views of Bordeaux\'s magnificent UNESCO-listed waterfront' },
                    { name: 'Bordeaux Food & Market Tour', type: 'Food Tour', description: 'Taste canelés, oysters, duck confit, and local cheeses at Marché des Capucins and beyond' },
                    { name: 'Arcachon Bay & Dune du Pilat Day Trip', type: 'Day Trip', description: 'Visit Europe\'s tallest sand dune and taste fresh oysters in the charming Arcachon Bay' },
                    { name: 'Bordeaux Bike Tour Along the Garonne', type: 'Bike Tour', description: 'Cycle along the scenic riverside paths past Pont de Pierre and through riverside parklands' },
                    { name: 'Darwin Ecosystem & Street Art Tour', type: 'Cultural Tour', description: 'Explore Bordeaux\'s alternative eco-district with street art, skatepark, and organic food hall' },
                    { name: 'Bordeaux Cooking Class with Wine Pairing', type: 'Cooking Class', description: 'Learn to prepare Bordelaise cuisine and master food-wine pairing with a sommelier chef' },
                    { name: 'Graves & Sauternes Sweet Wine Tour', type: 'Wine Tour', description: 'Discover the birthplace of Bordeaux wines with Sauternes dessert wine tastings at top châteaux' },
                    { name: 'Place de la Bourse Night Photography Tour', type: 'Guided Tour', description: 'Capture Bordeaux\'s stunning illuminated landmarks reflected in the Miroir d\'Eau at night' }
                ],
                        tips: [
                            'Book wine tours in advance',
                            'Miroir d\'eau best at sunset',
                            'Rent a bike - city is very bike-friendly',
                            'Canelé pastry is the local specialty'
                        ]
                    },
                    cannes: {
                        id: 'cannes',
                        name: 'Cannes',
                        country: 'France',
                        region: 'Schengen',
                        description: 'Cannes, the glamorous jewel of the French Riviera, is synonymous with the world-famous film festival, designer boutiques, and sun-drenched Mediterranean luxury. Beyond the red carpet of the Palais des Festivals and the legendary Boulevard de la Croisette lined with luxury hotels, Cannes reveals charming hidden depths — the medieval hilltop quarter of Le Suquet, the fragrant Provençal markets of Forville, and the pristine Lérins Islands just a short boat ride offshore. With its golden sandy beaches, yacht-filled harbor, and proximity to perfume capital Grasse and the stunning Esterel massif, Cannes offers far more than celebrity glamour.',
                        image: 'https://images.unsplash.com/photo-1659642081573-ac1a040d2e50?w=800',
                        population: '75,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 100, mid: 200, luxury: 600 },
                        attractions: [
                    { name: 'La Croisette & Palais des Festivals Walk', type: 'Walking Tour', description: 'Guided stroll along Cannes\' legendary boulevard past luxury hotels and the famous festival palace' },
                    { name: 'Lérins Islands Boat Trip', type: 'Boat Tour', description: 'Ferry to Île Sainte-Marguerite to explore the fort, eucalyptus forests, and crystal waters' },
                    { name: 'Le Suquet Old Quarter Walking Tour', type: 'Walking Tour', description: 'Climb through Cannes\' charming medieval hilltop quarter with panoramic views of the bay' },
                    { name: 'Grasse Perfume Factory Day Trip', type: 'Day Trip', description: 'Visit the world capital of perfume and create your own fragrance at a historic parfumerie' },
                    { name: 'Cannes Food Tour & Forville Market', type: 'Food Tour', description: 'Taste fresh Provençal produce, socca, and local specialties at Cannes\' vibrant covered market' },
                    { name: 'Esterel Massif Coastal Hike', type: 'Adventure', description: 'Hike through the dramatic red porphyry cliffs of the Esterel along the Mediterranean coast' },
                    { name: 'Cannes Yacht Charter & Coastal Cruise', type: 'Boat Tour', description: 'Private or shared yacht cruise along the Riviera coastline with swimming and champagne' },
                    { name: 'Antibes & Cap d\'Antibes Day Trip', type: 'Day Trip', description: 'Explore Antibes\' Picasso Museum and walk the spectacular coastal path around Cap d\'Antibes' },
                    { name: 'Cannes Wine & Cheese Tasting Evening', type: 'Wine Tour', description: 'Sample Provençal rosé wines and artisan cheeses at an elegant Cannes wine bar' },
                    { name: 'Cannes Film Festival Locations Tour', type: 'Cultural Tour', description: 'Visit iconic film festival sites and learn behind-the-scenes stories of Cannes\' cinematic history' },
                    { name: 'Gorges du Verdon Day Trip', type: 'Day Trip', description: 'Full-day excursion to Europe\'s Grand Canyon with turquoise waters and dramatic cliff scenery' },
                    { name: 'Cannes Beach Club & Water Sports', type: 'Adventure', description: 'Jet skiing, paddleboarding, and parasailing at Cannes\' premium private beach clubs' }
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
                        description: 'Toulouse, the rosy-hued capital of southwestern France, enchants visitors with its distinctive pink brick architecture, vibrant student energy, and deep-rooted aerospace heritage as the home of Airbus. Known as \'La Ville Rose,\' the city glows at sunset when its terracotta buildings bathe in warm golden light, particularly along the majestic Place du Capitole and the tree-lined banks of the Canal du Midi. Toulouse\'s rich culinary scene — famous for cassoulet, foie gras, and violet-flavored confections — its thriving arts quarter, and proximity to the Pyrenees and Cathar castles make it an unmissable destination in the French southwest.',
                        image: 'https://images.unsplash.com/photo-1650707199496-b02442055332?w=800',
                        population: '1,300,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                    { name: 'Place du Capitole & Old Town Tour', type: 'Walking Tour', description: 'Guided walk through Toulouse\'s magnificent main square and pink-brick Renaissance old quarter' },
                    { name: 'Cité de l\'Espace: Space Adventure', type: 'Museum', description: 'Interactive space theme park with full-size Ariane 5 rocket, Mir station, and planetarium' },
                    { name: 'Canal du Midi Bike & Boat Tour', type: 'Bike Tour', description: 'Cycle or cruise along the UNESCO-listed Canal du Midi through plane tree-lined towpaths' },
                    { name: 'Toulouse Cassoulet Cooking Class', type: 'Cooking Class', description: 'Learn to prepare the legendary slow-cooked cassoulet and other southwestern French specialties' },
                    { name: 'Basilique Saint-Sernin Tour', type: 'Historical Tour', description: 'Visit the largest remaining Romanesque church in Europe on the Santiago de Compostela pilgrimage route' },
                    { name: 'Airbus Factory Tour', type: 'Guided Tour', description: 'Behind-the-scenes visit to the Airbus A380 assembly line at Europe\'s aerospace capital' },
                    { name: 'Toulouse Food & Market Tour', type: 'Food Tour', description: 'Taste foie gras, saucisse de Toulouse, violet candies, and pastis at Marché Victor Hugo' },
                    { name: 'Carcassonne Medieval Citadel Day Trip', type: 'Day Trip', description: 'Full-day excursion to the spectacular walled city of Carcassonne, a UNESCO World Heritage site' },
                    { name: 'Musée des Augustins Art Tour', type: 'Museum', description: 'Explore Toulouse\'s fine arts museum housed in a magnificent Gothic Augustinian monastery' },
                    { name: 'Albi & Toulouse-Lautrec Day Trip', type: 'Day Trip', description: 'Visit the red-brick cathedral city of Albi and the Toulouse-Lautrec museum collection' },
                    { name: 'Garonne River Evening Cruise', type: 'Boat Tour', description: 'Sunset cruise along the Garonne River with views of Toulouse\'s illuminated pink-brick skyline' },
                    { name: 'Toulouse Violet Experience', type: 'Cultural Tour', description: 'Discover Toulouse\'s unique violet tradition with visits to violet gardens, shops, and tastings' }
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
                        description: 'Berlin, Germany\'s bold and creative capital, is a city where a tumultuous history and boundless artistic energy collide to create one of Europe\'s most dynamic and culturally electric metropolises. From the haunting remnants of the Berlin Wall and the solemn Holocaust Memorial to the magnificent Brandenburg Gate and the treasure-filled Museum Island, the city wears its complex past with unflinching honesty. Today, Berlin thrives as a global hub for contemporary art, underground music, and culinary innovation, with its legendary nightlife, sprawling flea markets, and diverse multicultural neighborhoods offering an endlessly fascinating urban experience.',
                        image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800',
                        population: '3,700,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                    { name: 'Berlin Wall & Cold War History Tour', type: 'Historical Tour', description: 'Guided walk along the East Side Gallery, Checkpoint Charlie, and key Cold War sites' },
                    { name: 'Museum Island Skip-the-Line Tour', type: 'Museum', description: 'Priority access to the UNESCO-listed museum complex including Pergamon and Neues Museum treasures' },
                    { name: 'Brandenburg Gate & Reichstag Tour', type: 'Historical Tour', description: 'Explore Berlin\'s iconic landmarks with a visit to the Reichstag\'s stunning glass dome' },
                    { name: 'Berlin Street Food & Craft Beer Tour', type: 'Food Tour', description: 'Sample currywurst, döner kebab, and craft beers at Berlin\'s best street food hotspots' },
                    { name: 'Sachsenhausen Concentration Camp Memorial', type: 'Day Trip', description: 'Sobering guided tour of the former concentration camp north of Berlin with expert historian' },
                    { name: 'Berlin Street Art & Alternative Culture Tour', type: 'Cultural Tour', description: 'Discover Berlin\'s vibrant street art scene in Kreuzberg and Friedrichshain with a local artist' },
                    { name: 'Potsdam & Sanssouci Palace Day Trip', type: 'Day Trip', description: 'Visit Frederick the Great\'s stunning rococo palace and UNESCO-listed gardens in Potsdam' },
                    { name: 'Berlin Bike Tour: Highlights & Hidden Gems', type: 'Bike Tour', description: 'Cycle through Berlin\'s diverse neighborhoods covering major landmarks and local favorites' },
                    { name: 'Jewish Heritage Walking Tour', type: 'Historical Tour', description: 'Moving tour of Berlin\'s Jewish history including the Holocaust Memorial and synagogues' },
                    { name: 'Charlottenburg Palace & Gardens Tour', type: 'Palace Tour', description: 'Explore Berlin\'s grandest baroque palace with its opulent royal apartments and formal gardens' },
                    { name: 'Berlin Underground Bunker Tour', type: 'Historical Tour', description: 'Descend into WWII-era bunkers and Cold War tunnels beneath Berlin\'s streets' },
                    { name: 'Spree River Sightseeing Cruise', type: 'Boat Tour', description: 'Relaxing boat cruise along the Spree River past government quarter, cathedral, and Museum Island' }
                ],
                        tips: [
                            'Book Reichstag dome visit in advance',
                            'Nightlife starts late - clubs open at midnight',
                            'Excellent public transport system',
                            'Try currywurst and döner kebab'
                        ]
                    },
                    munich: {
                        id: 'munich',
                        name: 'Munich',
                        country: 'Germany',
                        region: 'Schengen',
                        description: 'Munich, the sophisticated capital of Bavaria, is a city where centuries-old beer hall traditions, royal palaces, and alpine proximity create a uniquely exhilarating German experience. The grand Marienplatz with its famous Glockenspiel, the sprawling English Garden where surfers ride the Eisbach wave, and the magnificent Nymphenburg Palace reflect the city\'s rich heritage, while world-class museums like the Alte Pinakothek and BMW Welt showcase both artistic and engineering excellence. As the home of Oktoberfest and legendary beer gardens like the Hofbräuhaus, Munich offers a warm Bavarian welcome where Weisswurst, pretzels, and wheat beer flow freely year-round.',
                        image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800',
                        population: '1,500,000',
                        bestTime: 'June to September, December for markets',
                        avgBudget: { budget: 80, mid: 150, luxury: 400 },
                        attractions: [
                    { name: 'Marienplatz & Glockenspiel Walking Tour', type: 'Walking Tour', description: 'Guided tour of Munich\'s historic heart including the New Town Hall\'s famous mechanical clock show' },
                    { name: 'Neuschwanstein Castle Day Trip', type: 'Day Trip', description: 'Full-day excursion to King Ludwig II\'s fairy-tale castle in the Bavarian Alps' },
                    { name: 'Munich Beer Hall & Brewery Tour', type: 'Food Tour', description: 'Visit the legendary Hofbräuhaus and Augustiner brewery with beer tastings and Bavarian snacks' },
                    { name: 'Nymphenburg Palace & Gardens Tour', type: 'Palace Tour', description: 'Explore the stunning baroque summer residence of Bavarian royalty with its vast parklands' },
                    { name: 'Dachau Memorial Site Guided Tour', type: 'Day Trip', description: 'Guided visit to the former concentration camp memorial with in-depth historical commentary' },
                    { name: 'English Garden Bike Tour', type: 'Bike Tour', description: 'Cycle through Munich\'s massive urban park visiting the Chinese Tower beer garden and Eisbach surfers' },
                    { name: 'BMW Welt & Museum Experience', type: 'Museum', description: 'Explore BMW\'s futuristic showroom and museum showcasing a century of automotive innovation' },
                    { name: 'Munich Food Tour: Bavarian Delicacies', type: 'Food Tour', description: 'Taste Weisswurst, Schweinshaxe, pretzels, and Bavarian cream at traditional Munich eateries' },
                    { name: 'Alte Pinakothek Art Museum Tour', type: 'Museum', description: 'Guided tour of one of the world\'s oldest galleries with masterpieces by Dürer and Rubens' },
                    { name: 'Salzburg Day Trip from Munich', type: 'Day Trip', description: 'Cross into Austria to explore Mozart\'s birthplace with its fortress, gardens, and old town' },
                    { name: 'Viktualienmarkt Gourmet Food Tour', type: 'Food Tour', description: 'Taste artisan cheeses, sausages, and Bavarian specialties at Munich\'s famous outdoor food market' },
                    { name: 'Residenz Palace & Treasury Tour', type: 'Palace Tour', description: 'Explore the former Wittelsbach royal palace with its ornate rooms, treasury, and court garden' }
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
                        description: 'Frankfurt, Germany\'s gleaming financial powerhouse on the Main River, surprises visitors with a compelling mix of cutting-edge skyscrapers, lovingly reconstructed medieval architecture, and a world-class cultural scene along the renowned Museumsufer museum embankment. The city\'s dramatic skyline — unique in Europe and nicknamed \'Mainhattan\' — towers over the charming half-timbered houses of the reconstructed Römerberg square, creating a striking visual contrast that defines Frankfurt\'s character. Beyond banking, Frankfurt shines as the birthplace of Goethe, a hub for Ebbelwoi apple wine culture in the Sachsenhausen quarter, and a gateway to the romantic Rhine Valley and its castle-crowned hillsides.',
                        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
                        population: '750,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 75, mid: 140, luxury: 380 },
                        attractions: [
                    { name: 'Römerberg & Old Town Walking Tour', type: 'Walking Tour', description: 'Guided walk through Frankfurt\'s reconstructed medieval square and the stunning New Old Town quarter' },
                    { name: 'Main Tower Observation Deck Visit', type: 'Guided Tour', description: 'Ascend Frankfurt\'s only public skyscraper observation platform for panoramic city and skyline views' },
                    { name: 'Museumsufer Art & Culture Tour', type: 'Museum', description: 'Visit the world-renowned museum embankment featuring Städel Museum and German Film Museum' },
                    { name: 'Sachsenhausen Ebbelwoi Pub Tour', type: 'Food Tour', description: 'Sample traditional Frankfurt apple wine and local dishes in atmospheric Sachsenhausen taverns' },
                    { name: 'Rhine Valley Castle Cruise Day Trip', type: 'Day Trip', description: 'Scenic cruise through the UNESCO-listed Upper Middle Rhine Valley past fairytale castles and vineyards' },
                    { name: 'Goethe House & Museum Visit', type: 'Museum', description: 'Tour the birthplace of Germany\'s greatest writer with original furnishings and literary exhibits' },
                    { name: 'Frankfurt Food Tour: German Classics', type: 'Food Tour', description: 'Taste Grüne Soße, Handkäs mit Musik, Frankfurter sausages, and Bethmännchen at local spots' },
                    { name: 'Palmengarten Botanical Gardens Visit', type: 'Nature', description: 'Explore Frankfurt\'s stunning botanical garden with tropical greenhouses and seasonal flower displays' },
                    { name: 'Heidelberg Castle & Old Town Day Trip', type: 'Day Trip', description: 'Full-day excursion to romantic Heidelberg with its castle ruins and university town charm' },
                    { name: 'Frankfurt Bike Tour Along the Main', type: 'Bike Tour', description: 'Cycle along the scenic Main River path connecting bridges, parks, and riverside promenades' },
                    { name: 'Kleinmarkthalle Gourmet Food Tour', type: 'Food Tour', description: 'Explore Frankfurt\'s beloved indoor market with international delicacies and local wine tastings' },
                    { name: 'Frankfurt Skyline Photography Tour', type: 'Guided Tour', description: 'Capture Mainhattan\'s dramatic skyline from the best vantage points with photography guidance' }
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
                        description: 'Hamburg, Germany\'s gateway to the world, is a maritime powerhouse and cultural dynamo where Europe\'s second-largest port meets an extraordinary wealth of music, architecture, and nightlife. The spectacular Elbphilharmonie concert hall, rising like a glass wave above a historic warehouse, has become the city\'s architectural icon, while the UNESCO-listed Speicherstadt warehouse district and the vibrant HafenCity neighborhood showcase Hamburg\'s remarkable transformation. From the legendary Reeperbahn entertainment strip in St. Pauli to the elegant Alster lakes, the bustling Fish Market, and the innovative culinary scene, Hamburg pulses with a confident, cosmopolitan energy that rivals any European capital.',
                        image: 'https://images.unsplash.com/photo-1685113349417-2f2e20a94782?w=800',
                        population: '1,900,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 75, mid: 140, luxury: 370 },
                        attractions: [
                    { name: 'Elbphilharmonie & HafenCity Tour', type: 'Walking Tour', description: 'Visit Hamburg\'s stunning concert hall plaza and explore the cutting-edge HafenCity waterfront district' },
                    { name: 'Speicherstadt & Miniatur Wunderland', type: 'Museum', description: 'Explore the UNESCO warehouse district and the world\'s largest model railway exhibition' },
                    { name: 'Hamburg Harbor Boat Tour', type: 'Boat Tour', description: 'Scenic cruise through Europe\'s second-largest port past container ships and historic warehouses' },
                    { name: 'Reeperbahn & St. Pauli Night Tour', type: 'Nightlife', description: 'Evening walking tour of Hamburg\'s legendary entertainment district and Beatles history sites' },
                    { name: 'Hamburg Fish Market Sunday Morning', type: 'Food Tour', description: 'Experience the famous early-morning Altona Fish Market with fresh seafood and live entertainment' },
                    { name: 'Alster Lake Cruise & Parks Tour', type: 'Boat Tour', description: 'Relaxing boat trip on Hamburg\'s beautiful inner and outer Alster lakes past grand villas' },
                    { name: 'Hamburg Food Tour: Maritime Flavors', type: 'Food Tour', description: 'Taste Fischbrötchen, Labskaus, Franzbrötchen, and craft beers at Hamburg\'s best local spots' },
                    { name: 'Kunsthalle Hamburg Art Museum Tour', type: 'Museum', description: 'Explore seven centuries of European art from medieval altarpieces to contemporary installations' },
                    { name: 'Hamburg Street Art & Sternschanze Tour', type: 'Cultural Tour', description: 'Discover Hamburg\'s vibrant street art and alternative culture in the trendy Schanzenviertel' },
                    { name: 'Lübeck Medieval Town Day Trip', type: 'Day Trip', description: 'Visit the UNESCO-listed Hanseatic city of Lübeck famous for its marzipan and brick Gothic architecture' },
                    { name: 'Hamburg Bike Tour: Harbor to Altona', type: 'Bike Tour', description: 'Cycle from the historic harbor through riverside parks to the vibrant Altona neighborhood' },
                    { name: 'Hamburg Dungeon & Old Town History Tour', type: 'Historical Tour', description: 'Thrilling interactive experience bringing Hamburg\'s dark maritime history to life with live actors' }
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
                        description: 'Cologne, the vibrant Rhineland metropolis, is dominated by its awe-inspiring Gothic cathedral — a UNESCO World Heritage masterpiece whose twin spires soar 157 meters above the city and took over six centuries to complete. Beyond this magnificent icon, Cologne reveals a city of contrasts: ancient Roman ruins beneath modern streets, world-class museums along the Rhine, a legendary Karneval celebration rivaling Rio, and a distinctive Kölsch beer culture served in tiny 200ml glasses in atmospheric brewhouses. The city\'s warm and welcoming spirit, its thriving LGBTQ+ scene, vibrant Belgian Quarter, and the fragrant legacy of Eau de Cologne make it one of Germany\'s most endearing destinations.',
                        image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800',
                        population: '1,100,000',
                        bestTime: 'May to October, November for Carnival',
                        avgBudget: { budget: 70, mid: 130, luxury: 350 },
                        attractions: [
                    { name: 'Cologne Cathedral Skip-the-Line Tour', type: 'Historical Tour', description: 'Guided tour of Germany\'s most visited landmark including tower climb with Rhine panorama views' },
                    { name: 'Cologne Old Town & Kölsch Beer Tour', type: 'Food Tour', description: 'Walk through the Altstadt sampling Kölsch beer at traditional brewhouses with local snacks' },
                    { name: 'Rhine River Panorama Cruise', type: 'Boat Tour', description: 'Scenic boat trip along the Rhine past the old town, Great St. Martin, and cathedral skyline' },
                    { name: 'Roman-Germanic Museum Visit', type: 'Museum', description: 'Explore Cologne\'s ancient Roman heritage including the stunning Dionysus mosaic and Roman artifacts' },
                    { name: 'Museum Ludwig Modern Art Tour', type: 'Museum', description: 'Guided tour of one of Europe\'s foremost collections of modern art including Pop Art masterpieces' },
                    { name: 'Cologne Chocolate Museum Experience', type: 'Museum', description: 'Interactive museum tracing chocolate from cocoa bean to bar with a flowing chocolate fountain' },
                    { name: 'Belgian Quarter Food & Shopping Tour', type: 'Walking Tour', description: 'Explore Cologne\'s trendiest neighborhood with independent boutiques, cafés, and gourmet food stops' },
                    { name: 'Drachenfels & Rhine Valley Day Trip', type: 'Day Trip', description: 'Visit the legendary Dragon\'s Rock castle ruins with panoramic views over the Rhine Valley' },
                    { name: 'Eau de Cologne Fragrance Workshop', type: 'Cultural Tour', description: 'Create your own signature perfume at the birthplace of Eau de Cologne with a perfumer' },
                    { name: 'Cologne Bike Tour Along the Rhine', type: 'Bike Tour', description: 'Cycle along the scenic Rhine riverbanks past parks, bridges, and Cologne\'s main landmarks' },
                    { name: 'Brühl Augustusburg Palace Day Trip', type: 'Day Trip', description: 'Visit the stunning UNESCO-listed rococo palace and Falkenlust hunting lodge near Cologne' },
                    { name: 'Cologne Street Art & Ehrenfeld Tour', type: 'Cultural Tour', description: 'Discover Cologne\'s vibrant urban art scene and multicultural energy in the Ehrenfeld district' }
                ],
                        tips: [
                            'Kölsch beer served in small 0.2L glasses',
                            'Carnival (Karneval) is huge - February',
                            'Cathedral climb has 533 steps',
                            'Christmas markets are world-famous'
                        ]
                    },
                    dusseldorf: {
                        id: 'dusseldorf',
                        name: 'Düsseldorf',
                        country: 'Germany',
                        region: 'Schengen',
                        description: 'Düsseldorf, the elegant Rhine metropolis and capital of North Rhine-Westphalia, seamlessly blends high fashion, innovative architecture, and a legendary old town pub culture into one of Germany\'s most stylish cities. The Königsallee boulevard — known simply as the \'Kö\' — is lined with luxury designer boutiques and shaded by plane trees along a picturesque canal, while the MedienHafen district dazzles with avant-garde buildings by Frank Gehry and other starchitects. With the longest bar in the world in the Altstadt\'s 260 pubs and breweries, a vibrant Japanese quarter, and world-class art institutions, Düsseldorf offers a sophisticated yet unpretentious urban experience.',
                        image: 'https://images.unsplash.com/photo-1655208291826-0e145d1811e7?w=800',
                        population: '640,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 75, mid: 140, luxury: 380 },
                        attractions: [
                    { name: 'Altstadt \'Longest Bar\' Pub Crawl', type: 'Food Tour', description: 'Sample Altbier at legendary brewpubs along Düsseldorf\'s famous old town bar mile' },
                    { name: 'Königsallee & Luxury Shopping Tour', type: 'Walking Tour', description: 'Stroll the elegant \'Kö\' boulevard lined with designer flagship stores and canalside cafés' },
                    { name: 'MedienHafen Architecture Tour', type: 'Walking Tour', description: 'Explore Frank Gehry\'s dancing buildings and cutting-edge architecture in the redeveloped harbor district' },
                    { name: 'Rhine Tower & Panorama Views', type: 'Guided Tour', description: 'Ascend the 240-meter Rheinturm for 360-degree views with a drink at the revolving restaurant' },
                    { name: 'K20 & K21 Art Museums Tour', type: 'Museum', description: 'Visit Düsseldorf\'s world-class modern art museums featuring Klee, Picasso, and contemporary German art' },
                    { name: 'Japanese Quarter & Ramen Tour', type: 'Food Tour', description: 'Explore Europe\'s largest Japanese community with authentic ramen, sushi, and Japanese grocery shops' },
                    { name: 'Rhine River Cycle Tour', type: 'Bike Tour', description: 'Bike along the scenic Rhine riverbanks through parks and past Düsseldorf\'s iconic skyline' },
                    { name: 'Düsseldorf Craft Beer & Altbier Tour', type: 'Food Tour', description: 'Deep dive into Düsseldorf\'s unique Altbier brewing tradition at historic and craft breweries' },
                    { name: 'Schloss Benrath Palace & Gardens', type: 'Palace Tour', description: 'Tour the exquisite pink rococo palace with its French formal gardens and natural history museum' },
                    { name: 'Cologne & Bonn Day Trip', type: 'Day Trip', description: 'Visit neighboring Cologne\'s cathedral and Beethoven\'s birthplace in Bonn on a combined excursion' },
                    { name: 'Kaiserswerth Old Town & Ruins Walk', type: 'Historical Tour', description: 'Explore the charming riverside village of Kaiserswerth with its medieval imperial palace ruins' },
                    { name: 'Düsseldorf Carnival Experience Tour', type: 'Cultural Tour', description: 'Learn about Düsseldorf\'s legendary Karneval traditions with costume history and celebration highlights' }
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
                        description: 'Stuttgart, nestled in a lush valley surrounded by vine-covered hills and forested ridges, is the powerhouse of German engineering and the birthplace of the automobile. Home to both the Mercedes-Benz and Porsche museums — two of the world\'s most spectacular automotive showcases — the city pulses with innovation while honoring its rich Swabian heritage through hearty cuisine, world-class ballet, and the magnificent Baroque palace of Ludwigsburg nearby. Stuttgart\'s vibrant Bohnenviertel quarter, its bustling Markthalle food hall, and the surrounding wine country with its Besenwirtschaften seasonal wine taverns offer visitors a deeply satisfying blend of culture, cuisine, and cutting-edge engineering.',
                        image: 'https://images.unsplash.com/photo-1642669217127-e38c8c0b9423?w=800',
                        population: '635,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 70, mid: 135, luxury: 360 },
                        attractions: [
                    { name: 'Mercedes-Benz Museum Tour', type: 'Museum', description: 'Journey through 130 years of automotive history with 160 vehicles in a stunning spiral building' },
                    { name: 'Porsche Museum Experience', type: 'Museum', description: 'Explore Porsche\'s legendary sports cars and racing heritage in a striking modernist museum' },
                    { name: 'Stuttgart Old Town & Market Tour', type: 'Walking Tour', description: 'Guided walk through Stuttgart\'s center visiting Schillerplatz, Stiftskirche, and the Art Nouveau Markthalle' },
                    { name: 'Stuttgart Wine Hike & Tasting', type: 'Wine Tour', description: 'Hike through inner-city vineyards with tastings of local Trollinger and Riesling wines' },
                    { name: 'Ludwigsburg Palace & Gardens Day Trip', type: 'Day Trip', description: 'Visit Germany\'s largest baroque palace with its magnificent Blühendes Barock flower gardens' },
                    { name: 'Swabian Cooking Class', type: 'Cooking Class', description: 'Learn to make Spätzle, Maultaschen, and other beloved Swabian specialties with a local chef' },
                    { name: 'Staatsgalerie Art Museum Tour', type: 'Museum', description: 'Guided tour of Stuttgart\'s premier art museum with old masters and modern art collections' },
                    { name: 'Stuttgart TV Tower & Forest Walk', type: 'Adventure', description: 'Visit the world\'s first TV tower and hike through the surrounding Stuttgart forest trails' },
                    { name: 'Esslingen Medieval Town Day Trip', type: 'Day Trip', description: 'Explore the perfectly preserved half-timbered medieval town of Esslingen with its wine festival heritage' },
                    { name: 'Wilhelma Zoo & Botanical Gardens', type: 'Nature', description: 'Europe\'s only combined zoological-botanical garden set in a stunning Moorish-style palace complex' },
                    { name: 'Stuttgart Beer & Brewery Tour', type: 'Food Tour', description: 'Sample local Swabian beers at Stuttgart\'s best breweries from traditional to craft' },
                    { name: 'Black Forest Day Trip from Stuttgart', type: 'Day Trip', description: 'Full-day excursion to the Black Forest with cuckoo clock workshops, waterfalls, and cake' }
                ],
                        tips: [
                            'Both car museums are must-visits',
                            'Stuttgart 21 construction everywhere',
                            'Gateway to Black Forest',
                            'Swabian cuisine - Spätzle and Maultaschen'
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
                        description: 'Athens, the cradle of Western civilization, is a city where the shadows of ancient temples fall across buzzing modern neighborhoods in a thrilling collision of past and present. The mighty Acropolis and its crowning Parthenon temple gaze down upon a vibrant metropolis of street art-covered alleyways, rooftop cocktail bars, and the atmospheric Pláka and Monastiráki quarters brimming with tavernas and flea markets. With world-class archaeological museums, the striking Stavros Niarchos cultural center, and a culinary renaissance celebrating Greek mezes, fresh seafood, and fine regional wines, Athens rewards visitors with an energy and depth that far exceeds its ancient reputation.',
                        image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
                        population: '3,200,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 60, mid: 110, luxury: 300 },
                        attractions: [
                    { name: 'Acropolis & Parthenon Skip-the-Line Tour', type: 'Historical Tour', description: 'Priority access guided tour of the iconic Acropolis hilltop including the Parthenon and Erechtheion' },
                    { name: 'Acropolis Museum Guided Tour', type: 'Museum', description: 'Explore the stunning modern museum housing original Parthenon sculptures and ancient Greek artifacts' },
                    { name: 'Athens Food Tour in Pláka & Monastiráki', type: 'Food Tour', description: 'Taste souvlaki, loukoumades, Greek cheeses, and ouzo at hidden gems in the old quarter' },
                    { name: 'Ancient Agora & Roman Forum Walk', type: 'Historical Tour', description: 'Explore the birthplace of democracy at the ancient marketplace and Temple of Hephaestus' },
                    { name: 'Cape Sounion & Temple of Poseidon Sunset', type: 'Day Trip', description: 'Drive along the Athens Riviera to the clifftop Temple of Poseidon for a legendary sunset' },
                    { name: 'Athens Street Art & Alternative Tour', type: 'Cultural Tour', description: 'Discover Athens\' vibrant street art scene in Exarcheia and Psiri with a local artist guide' },
                    { name: 'Delphi Full-Day Excursion', type: 'Day Trip', description: 'Visit the ancient Oracle of Delphi, the \'navel of the world,\' set in dramatic mountain scenery' },
                    { name: 'Athens Riviera Sailing Trip', type: 'Boat Tour', description: 'Half-day sailing along the Athenian coastline with swimming stops in crystal-clear Saronic waters' },
                    { name: 'National Archaeological Museum Tour', type: 'Museum', description: 'Guided visit to one of the world\'s great museums with Mycenaean gold and ancient Greek sculptures' },
                    { name: 'Athens by Night: Rooftop Bar Tour', type: 'Nightlife', description: 'Evening tour of Athens\' best rooftop bars with Acropolis views and craft cocktails' },
                    { name: 'Cooking Class: Greek Mezes & Wine', type: 'Cooking Class', description: 'Hands-on class preparing traditional Greek dishes with market-fresh ingredients and wine tasting' },
                    { name: 'Athens Bike Tour: Landmarks & Neighborhoods', type: 'Bike Tour', description: 'Cycle through Athens\' historic center, parks, and vibrant neighborhoods with a local guide' }
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
                        description: 'Santorini, the crown jewel of the Greek Cyclades, is a breathtaking volcanic island where whitewashed villages cascade down dramatic caldera cliffs above the deep blue Aegean Sea. The iconic blue-domed churches of Oia, the legendary sunsets that paint the sky in fiery oranges and purples, and the unique volcanic beaches of red, black, and white sand create one of the world\'s most photographed and romantic landscapes. Beyond its stunning beauty, Santorini offers exceptional volcanic wines from ancient Assyrtiko vines, fascinating archaeological sites at Akrotiri — the \'Minoan Pompeii\' — and a culinary scene that transforms fresh Aegean seafood into unforgettable Mediterranean cuisine.',
                        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800',
                        population: '15,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 90, mid: 180, luxury: 500 },
                        attractions: [
                    { name: 'Oia Sunset & Village Walking Tour', type: 'Walking Tour', description: 'Guided walk through Santorini\'s most iconic village to the perfect sunset viewing spot' },
                    { name: 'Santorini Catamaran Cruise & BBQ', type: 'Boat Tour', description: 'Sail the caldera visiting hot springs, Red Beach, and volcanic island with onboard BBQ' },
                    { name: 'Akrotiri Archaeological Site Tour', type: 'Historical Tour', description: 'Explore the remarkably preserved 3,600-year-old Minoan city buried by volcanic eruption' },
                    { name: 'Santorini Wine Tasting Tour', type: 'Wine Tour', description: 'Visit volcanic vineyards and taste unique Assyrtiko and Vinsanto wines with caldera views' },
                    { name: 'Volcano & Hot Springs Boat Trip', type: 'Adventure', description: 'Hike the active Nea Kameni volcano crater and swim in natural hot springs' },
                    { name: 'Fira to Oia Caldera Hiking Trail', type: 'Adventure', description: 'Stunning 10km clifftop hike between Santorini\'s two main villages with dramatic caldera panoramas' },
                    { name: 'Santorini Cooking Class & Farm Visit', type: 'Cooking Class', description: 'Cook traditional Santorinian dishes using local cherry tomatoes, capers, and fava beans' },
                    { name: 'Red Beach & Perissa Black Beach Tour', type: 'Adventure', description: 'Visit Santorini\'s unique volcanic beaches with dramatic red and black sand cliff formations' },
                    { name: 'Santorini Photography Tour at Golden Hour', type: 'Guided Tour', description: 'Capture Santorini\'s iconic blue domes, caldera views, and sunset with expert photography guidance' },
                    { name: 'Ancient Thera Hilltop Ruins Visit', type: 'Historical Tour', description: 'Hike to the ruins of Ancient Thera on Mesa Vouno mountain with sweeping coastal views' },
                    { name: 'Pyrgos Village & Sunset Wine Experience', type: 'Wine Tour', description: 'Explore the medieval hilltop village of Pyrgos followed by wine tasting at sunset' },
                    { name: 'Santorini Private Speedboat Tour', type: 'Boat Tour', description: 'Private speedboat exploring hidden sea caves, secluded beaches, and the caldera\'s volcanic formations' }
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
                        description: 'Crete, Greece\'s largest and most diverse island, is a magnificent Mediterranean world unto itself, where the ancient Minoan civilization of Knossos, dramatic Samariá Gorge, and pristine turquoise lagoons create an island of extraordinary depth and beauty. The vibrant Venetian harbor of Chania, the atmospheric old town of Rethymno, and the bustling capital Heraklion each offer distinct flavors of Cretan life, while the island\'s legendary cuisine — built on olive oil, wild greens, fresh seafood, and fiery raki — is considered the healthiest in the Mediterranean. From the pink-sand paradise of Elafonisi Beach to the rugged White Mountains and the laid-back southern coast, Crete rewards explorers with endless discoveries.',
                        image: 'https://images.unsplash.com/photo-1575237402880-4b496a83ae04?w=800',
                        population: '630,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 60, mid: 120, luxury: 320 },
                        attractions: [
                    { name: 'Knossos Palace & Heraklion Museum Tour', type: 'Historical Tour', description: 'Explore the legendary Minoan palace and the world\'s finest collection of Minoan artifacts' },
                    { name: 'Samariá Gorge Full-Day Hike', type: 'Adventure', description: 'Trek through Europe\'s longest gorge — 16km of dramatic canyon scenery to the Libyan Sea' },
                    { name: 'Elafonisi Pink Sand Beach Day Trip', type: 'Day Trip', description: 'Visit Crete\'s stunning pink-sand lagoon beach with crystal-clear shallow turquoise waters' },
                    { name: 'Chania Old Town & Venetian Harbor Walk', type: 'Walking Tour', description: 'Wander through the atmospheric Venetian harbor, lighthouse, and charming old town lanes' },
                    { name: 'Cretan Cooking Class & Farm Visit', type: 'Cooking Class', description: 'Cook traditional Cretan dishes using farm-fresh ingredients with olive oil tasting and raki' },
                    { name: 'Balos Lagoon & Gramvousa Island Cruise', type: 'Boat Tour', description: 'Boat excursion to the stunning Balos Lagoon and the Venetian fortress of Gramvousa Island' },
                    { name: 'Rethymno Old Town & Fortezza Tour', type: 'Walking Tour', description: 'Explore Rethymno\'s Venetian-Ottoman old town and massive Renaissance fortress overlooking the sea' },
                    { name: 'Cretan Wine & Olive Oil Tasting Tour', type: 'Wine Tour', description: 'Visit local wineries and olive groves tasting indigenous grape varieties and premium olive oils' },
                    { name: 'Spinalonga Island & Elounda Day Trip', type: 'Day Trip', description: 'Boat to the historic island fortress and former leper colony made famous by \'The Island\'' },
                    { name: 'Preveli Beach & Palm Forest Hike', type: 'Adventure', description: 'Hike through a gorge to the exotic Preveli Beach with its unique palm forest and river' },
                    { name: 'Heraklion Food Tour: Cretan Flavors', type: 'Food Tour', description: 'Taste dakos, kalitsounia, snails, and raki at authentic Heraklion eateries and markets' },
                    { name: 'Lasithi Plateau & Zeus Cave Tour', type: 'Day Trip', description: 'Visit the birthplace cave of Zeus and the windmill-dotted Lasithi Plateau high in the mountains' }
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
                        description: 'Thessaloniki, Greece\'s vibrant second city, is a captivating Aegean port where Byzantine churches, Ottoman hammams, Roman monuments, and modernist waterfront promenades weave together 2,300 years of unbroken history. The city\'s iconic White Tower gazes over a lively seafront where locals gather for their evening volta, while the atmospheric Ano Poli upper town, with its wooden Ottoman houses and panoramic fortress views, preserves a village-like charm above the cosmopolitan bustle. Renowned as Greece\'s culinary capital — offering everything from bougatsa pastries at dawn to creative neo-Greek dining by night — Thessaloniki pulses with a youthful energy fueled by its large university population and legendary nightlife.',
                        image: 'https://images.unsplash.com/photo-1641758136107-6f1364766ccd?w=800',
                        population: '1,100,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                    { name: 'White Tower & Waterfront Walking Tour', type: 'Walking Tour', description: 'Guided walk along Thessaloniki\'s iconic seafront from the White Tower to the concert hall' },
                    { name: 'Byzantine Churches UNESCO Tour', type: 'Historical Tour', description: 'Visit Thessaloniki\'s UNESCO-listed Byzantine churches with stunning mosaics spanning a millennium' },
                    { name: 'Thessaloniki Food Tour: Greek Flavors', type: 'Food Tour', description: 'Taste bougatsa, koulouri, meze, and ouzo at the city\'s best tavernas and street food spots' },
                    { name: 'Ano Poli Upper Town Walking Tour', type: 'Walking Tour', description: 'Explore the charming Ottoman-era upper town with Byzantine walls and panoramic city views' },
                    { name: 'Archaeological Museum of Thessaloniki', type: 'Museum', description: 'Guided tour of Macedonia\'s finest archaeological collection including Vergina golden treasures' },
                    { name: 'Modiano & Kapani Market Food Walk', type: 'Food Tour', description: 'Wander through Thessaloniki\'s buzzing covered markets sampling spices, olives, halva, and seafood' },
                    { name: 'Meteora Monasteries Full-Day Trip', type: 'Day Trip', description: 'Visit the breathtaking cliff-top monasteries of Meteora perched on dramatic sandstone pillars' },
                    { name: 'Thessaloniki Bar Hopping & Nightlife Tour', type: 'Nightlife', description: 'Experience Thessaloniki\'s legendary bar scene in the Ladadika and Valaoritou entertainment districts' },
                    { name: 'Vergina Royal Tombs Day Trip', type: 'Day Trip', description: 'Visit the extraordinary tomb of Alexander the Great\'s father, Philip II, with golden artifacts' },
                    { name: 'Thessaloniki Street Art & Culture Tour', type: 'Cultural Tour', description: 'Discover the city\'s vibrant street art scene and creative quarter with a local artist' },
                    { name: 'Halkidiki Beach Day Trip', type: 'Day Trip', description: 'Escape to the turquoise waters and pine-fringed beaches of the Halkidiki peninsula' },
                    { name: 'Thessaloniki Sunset Boat Cruise', type: 'Boat Tour', description: 'Evening cruise along the Thermaic Gulf with views of the city skyline and Mount Olympus' }
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
                        description: 'Mykonos, the cosmopolitan darling of the Cyclades, is a sun-drenched Aegean island where dazzling whitewashed streets, iconic hilltop windmills, and world-famous beach clubs create the ultimate Greek island experience. The labyrinthine lanes of Mykonos Town — known as Chora — reveal charming boutiques, waterfront cocktail bars in Little Venice, and the photogenic Panagia Paraportiani church, while the island\'s golden-sand beaches from Paradise to Super Paradise pulse with DJ sets and international energy. Beyond the glamour, Mykonos offers exceptional seafood tavernas, the nearby sacred island of Delos — birthplace of Apollo — and a warm Cycladic charm that has captivated artists and travelers for generations.',
                        image: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800',
                        population: '10,000',
                        bestTime: 'May to October',
                        avgBudget: { budget: 100, mid: 200, luxury: 600 },
                        attractions: [
                    { name: 'Mykonos Town & Windmills Walking Tour', type: 'Walking Tour', description: 'Guided walk through Chora\'s charming lanes, Little Venice, and the iconic hilltop windmills' },
                    { name: 'Delos Island Archaeological Day Trip', type: 'Day Trip', description: 'Boat trip to the sacred birthplace of Apollo with guided tour of the ancient sanctuary ruins' },
                    { name: 'Mykonos Catamaran Sunset Cruise', type: 'Boat Tour', description: 'Sail the Aegean at sunset with swimming, snorkeling, and BBQ dinner on a luxury catamaran' },
                    { name: 'Mykonos Beach Hopping Tour', type: 'Adventure', description: 'Visit the island\'s best beaches from family-friendly Ornos to legendary Paradise Beach by boat' },
                    { name: 'Greek Cooking Class in Mykonos', type: 'Cooking Class', description: 'Learn to prepare traditional Mykonian dishes using fresh local ingredients with wine pairing' },
                    { name: 'Little Venice Sunset & Wine Tasting', type: 'Wine Tour', description: 'Watch the famous Mykonos sunset from Little Venice with a curated Greek wine tasting' },
                    { name: 'Mykonos Food Tour: Island Flavors', type: 'Food Tour', description: 'Taste kopanisti cheese, louza cured pork, and fresh seafood at authentic local tavernas' },
                    { name: 'Mykonos Scuba Diving Adventure', type: 'Adventure', description: 'Discover underwater caves and marine life at top dive sites around Mykonos and Dragonisi' },
                    { name: 'Ano Mera Village & Monastery Visit', type: 'Cultural Tour', description: 'Visit the peaceful inland village of Ano Mera and the historic Panagia Tourliani monastery' },
                    { name: 'Mykonos Quad Bike Island Tour', type: 'Adventure', description: 'Explore the island\'s hidden coves, hilltop chapels, and rural trails by off-road quad bike' },
                    { name: 'Rhenia Island & Delos Cruise', type: 'Boat Tour', description: 'Swim at pristine Rhenia Island beaches and explore ancient Delos on a combined boat excursion' },
                    { name: 'Mykonos Nightlife & DJ Experience', type: 'Nightlife', description: 'Evening tour of Mykonos\' world-famous bars, beach clubs, and legendary late-night dance spots' }
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
                        description: 'Budapest, the majestic \'Pearl of the Danube,\' is a city of breathtaking grandeur where the medieval Buda Castle district and the elegant Art Nouveau boulevards of Pest face each other across the river, connected by the iconic Chain Bridge. The city\'s extraordinary thermal bath culture — from the Ottoman-era Rudas Baths to the palatial Széchenyi complex — offers a uniquely relaxing experience, while the soaring Hungarian Parliament Building, the historic Jewish Quarter\'s ruin bars, and the stunning Fisherman\'s Bastion create a cityscape of unmatched drama. With its vibrant culinary scene blending traditional goulash and chimney cake with innovative modern dining, Budapest delivers world-class experiences at remarkably affordable prices.',
                        image: 'https://images.unsplash.com/photo-1551867633-194f125bddfa?w=800',
                        population: '1,750,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                    { name: 'Buda Castle & Fisherman\'s Bastion Tour', type: 'Walking Tour', description: 'Guided walk through the historic Castle District with panoramic Danube views from Fisherman\'s Bastion' },
                    { name: 'Hungarian Parliament Building Tour', type: 'Guided Tour', description: 'Interior tour of Europe\'s third-largest parliament with its stunning neo-Gothic dome and crown jewels' },
                    { name: 'Széchenyi Thermal Bath Experience', type: 'Relaxation', description: 'Soak in Europe\'s largest medicinal bath complex housed in a grand neo-baroque palace' },
                    { name: 'Danube River Evening Cruise', type: 'Boat Tour', description: 'Romantic evening cruise past illuminated Parliament, Chain Bridge, and Buda Castle skyline' },
                    { name: 'Budapest Ruin Bar Pub Crawl', type: 'Nightlife', description: 'Tour the legendary ruin bars of the Jewish Quarter including Szimpla Kert and Instant' },
                    { name: 'Budapest Food Tour: Hungarian Flavors', type: 'Food Tour', description: 'Taste goulash, lángos, chimney cake, and Tokaji wine at authentic Budapest eateries' },
                    { name: 'Great Market Hall & Culinary Tour', type: 'Food Tour', description: 'Explore Budapest\'s stunning 19th-century market hall sampling paprika, sausages, and strudel' },
                    { name: 'Jewish Quarter Heritage Walking Tour', type: 'Historical Tour', description: 'Visit the Great Synagogue, Shoes on the Danube memorial, and the quarter\'s poignant history' },
                    { name: 'Gellért Hill & Cave Church Tour', type: 'Walking Tour', description: 'Hike to the Citadella for panoramic views and visit the unique underground cave church' },
                    { name: 'Danube Bend: Visegrád & Szentendre Day Trip', type: 'Day Trip', description: 'Boat excursion to the charming artist town of Szentendre and Visegrád\'s hilltop citadel' },
                    { name: 'Budapest Bike Tour: Pest Side Highlights', type: 'Bike Tour', description: 'Cycle through Pest\'s grand boulevards, Heroes\' Square, City Park, and Andrássy Avenue' },
                    { name: 'Hungarian Folk Show & Dinner', type: 'Cultural Show', description: 'Traditional Hungarian folk music and dance performance with a four-course dinner and wine' }
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
                        image: 'https://images.unsplash.com/photo-1705697140157-5f155b31d039?w=800',
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
                            'Try Egri Bikavér (Bull\'s Blood wine)',
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
                        image: 'https://images.unsplash.com/photo-1585334644725-e0b49aa6cdce?w=800',
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
                        image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800',
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
                        image: 'https://images.unsplash.com/photo-1706286997196-d541025ac6cc?w=800',
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
                        image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800',
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
                        image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800',
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
                        image: 'https://images.unsplash.com/photo-1696773605964-16f6abbef9de?w=800',
                        population: '675,000',
                        bestTime: 'April to June, September to October',
                        avgBudget: { budget: 55, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'Palatine Chapel', type: 'Religious', description: 'Byzantine mosaics UNESCO site' },
                            { name: 'Teatro Massimo', type: 'Theatre', description: 'Third largest opera house in Europe' },
                            { name: 'Ballarò Market', type: 'Market', description: 'Chaotic, authentic street market' },
                            { name: 'Quattro Canti', type: 'Landmark', description: 'Baroque square intersection' },
                            { name: 'Monreale Cathedral', type: 'Religious', description: 'Norman cathedral with golden mosaics' }
                        ],
                        tips: [
                            'Street food tour is essential',
                            'Try arancini, panelle, and sfincione',
                            'Afternoons quiet for siesta',
                            'Day trip to Monreale and Cefalù'
                        ]
                    },
                    capri: {
                        id: 'capri',
                        name: 'Capri',
                        country: 'Italy',
                        region: 'Schengen',
                        description: 'Glamorous island retreat with Blue Grotto and designer shopping',
                        image: 'https://images.unsplash.com/photo-1523365154888-8a758819b722?w=800',
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
                        image: 'https://images.unsplash.com/photo-1651309259727-99b5f13f3a1a?w=800',
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
                image: 'https://images.unsplash.com/photo-1760992180090-0c2a8530ff0c?w=800',
                cities: {
                    copenhagen: {
                        id: 'copenhagen',
                        name: 'Copenhagen',
                        country: 'Denmark',
                        region: 'Scandinavia',
                        description: 'Design capital with colorful Nyhavn, cycling culture, and Michelin restaurants',
                        image: 'https://images.unsplash.com/photo-1611515905024-d6530366c87c?w=800',
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
                            'Try smørrebrød (open sandwiches)',
                            'Copenhagen Card for transport and museums'
                        ]
                    },
                    aarhus: {
                        id: 'aarhus',
                        name: 'Aarhus',
                        country: 'Denmark',
                        region: 'Scandinavia',
                        description: 'Denmark\'s second city with museums, Viking history, and youthful energy',
                        image: 'https://images.unsplash.com/photo-1566241832378-917a0f30db2c?w=800',
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
                        image: 'https://images.unsplash.com/photo-1581513766902-d3eefb52d99b?w=800',
                        population: '215,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 85, mid: 170, luxury: 420 },
                        attractions: [
                            { name: 'Lindholm Høje', type: 'Historic', description: 'Viking burial ground with ship stones' },
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
                currency: 'Icelandic Króna (ISK)',
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
                            { name: 'Hallgrímskirkja', type: 'Religious', description: 'Iconic expressionist church' },
                            { name: 'Blue Lagoon', type: 'Spa', description: 'Famous geothermal spa' },
                            { name: 'Golden Circle', type: 'Tour', description: 'Geysir, Gullfoss, and Þingvellir' },
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
                        name: 'Vík í Mýrdal',
                        country: 'Iceland',
                        region: 'Scandinavia',
                        description: 'Tiny village on South Coast with black sand beaches and dramatic cliffs',
                        image: 'https://images.unsplash.com/photo-1607219368664-d8aca202d6f7?w=800',
                        population: '750',
                        bestTime: 'June to August',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Reynisfjara Black Sand Beach', type: 'Beach', description: 'Dramatic basalt columns and black sand' },
                            { name: 'Reynisdrangar', type: 'Nature', description: 'Sea stacks rising from ocean' },
                            { name: 'Dyrhólaey', type: 'Viewpoint', description: 'Arch promontory with puffins' },
                            { name: 'Vík Church', type: 'Religious', description: 'Iconic red-roofed church on hill' },
                            { name: 'South Coast Waterfalls', type: 'Nature', description: 'Skógafoss and Seljalandsfoss nearby' }
                        ],
                        tips: [
                            'Never turn your back on the waves',
                            'Puffins nest here in summer',
                            'Stop at Skógafoss and Seljalandsfoss',
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
                image: 'https://images.unsplash.com/photo-1740168177790-9ee3cb3c59ed?w=800',
                cities: {
                    oslo: {
                        id: 'oslo',
                        name: 'Oslo',
                        country: 'Norway',
                        region: 'Scandinavia',
                        description: 'Waterfront capital with world-class museums and Nordic design',
                        image: 'https://images.unsplash.com/photo-1740168177790-9ee3cb3c59ed?w=800',
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
                        image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?w=800',
                        population: '285,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 95, mid: 190, luxury: 480 },
                        attractions: [
                            { name: 'Bryggen', type: 'Historic', description: 'UNESCO colorful wooden wharf' },
                            { name: 'Fløibanen', type: 'Cable Car', description: 'Funicular to Mount Fløyen' },
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
                        name: 'Tromsø',
                        country: 'Norway',
                        region: 'Scandinavia',
                        description: 'Arctic gateway for Northern Lights and midnight sun',
                        image: 'https://images.unsplash.com/photo-1704268638217-37659c2e434d?w=800',
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
                image: 'https://images.unsplash.com/photo-1685885323091-97cb14950f10?w=800',
                cities: {
                    stockholm: {
                        id: 'stockholm',
                        name: 'Stockholm',
                        country: 'Sweden',
                        region: 'Scandinavia',
                        description: 'Venice of the North spread across 14 islands with royal palaces and ABBA Museum',
                        image: 'https://images.unsplash.com/photo-1580339841933-f06ca55842d0?w=800',
                        population: '1,000,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Gamla Stan', type: 'Historic', description: 'Medieval old town on island' },
                            { name: 'Vasa Museum', type: 'Museum', description: 'Preserved 17th-century warship' },
                            { name: 'ABBA The Museum', type: 'Museum', description: 'Interactive ABBA experience' },
                            { name: 'Royal Palace', type: 'Palace', description: 'Changing of the guard' },
                            { name: 'Djurgården', type: 'Island', description: 'Museums and park island' }
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
                        image: 'https://images.unsplash.com/photo-1548194128-2e8440ccd6d7?w=800',
                        population: '590,000',
                        bestTime: 'May to September',
                        avgBudget: { budget: 90, mid: 180, luxury: 450 },
                        attractions: [
                            { name: 'Haga', type: 'Neighborhood', description: 'Cobblestoned district with cafes' },
                            { name: 'Liseberg', type: 'Amusement Park', description: 'Scandinavia\'s largest theme park' },
                            { name: 'Archipelago', type: 'Nature', description: 'Island hopping by ferry' },
                            { name: 'Feskekôrka', type: 'Market', description: 'Fish market in church building' },
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
                image: 'https://images.unsplash.com/photo-1682314625544-f7c15889d84c?w=800',
                cities: {
                    laPaz: {
                        id: 'laPaz',
                        name: 'La Paz',
                        country: 'Bolivia',
                        region: 'South America',
                        description: 'World\'s highest capital city nestled in a canyon with dramatic landscapes',
                        image: 'https://images.unsplash.com/photo-1685110485605-aecb3e4892df?w=800',
                        population: '2,700,000',
                        bestTime: 'May to October (dry season)',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Mi Teleférico', type: 'Transport', description: 'World\'s highest cable car network' },
                            { name: 'Witches\' Market', type: 'Market', description: 'Traditional market with folk remedies' },
                            { name: 'Plaza Murillo', type: 'Square', description: 'Main square with government buildings' },
                            { name: 'Valley of the Moon', type: 'Nature', description: 'Lunar-like rock formations' },
                            { name: 'San Pedro Prison', type: 'Landmark', description: 'Infamous self-governed prison (exterior only)' }
                        ],
                        tips: [
                            'Take it easy - altitude is 3,600m+',
                            'Chew coca leaves for altitude sickness',
                            'Day trip to Tiwanaku ruins',
                            'Try salteñas (Bolivian empanadas)'
                        ]
                    }
                }
            },
            brazil: {
                id: 'brazil',
                name: 'Brazil',
                code: 'BR',
                flag: '🇧🇷',
                capital: 'Brasília',
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
                            { name: 'Escadaria Selarón', type: 'Art', description: 'Colorful tiled steps by artist Selarón' }
                        ],
                        tips: [
                            'Be aware of safety - avoid flashy jewelry',
                            'Visit favela tours with licensed guides only',
                            'Try açaí bowls and caipirinhas',
                            'Carnival is February/March - book ahead'
                        ]
                    },
                    saoPaulo: {
                        id: 'saoPaulo',
                        name: 'São Paulo',
                        country: 'Brazil',
                        region: 'South America',
                        description: 'Massive metropolis with world-class dining, art scene, and business hub',
                        image: 'https://images.unsplash.com/photo-1696708430962-d303db58fbc6?w=800',
                        population: '12,300,000',
                        bestTime: 'March to May, August to November',
                        avgBudget: { budget: 55, mid: 110, luxury: 320 },
                        attractions: [
                            { name: 'Paulista Avenue', type: 'Street', description: 'Main avenue with museums and culture' },
                            { name: 'Ibirapuera Park', type: 'Park', description: 'Huge urban park with museums' },
                            { name: 'MASP', type: 'Museum', description: 'Art museum with iconic suspended building' },
                            { name: 'Liberdade', type: 'Neighborhood', description: 'Japanese district with great food' },
                            { name: 'Pinacoteca', type: 'Museum', description: 'Oldest art museum in São Paulo' }
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
                capital: 'Bogotá',
                currency: 'Colombian Peso (COP)',
                language: 'Spanish',
                description: 'Coffee, salsa, colorful colonial cities, and incredible biodiversity',
                image: 'https://images.unsplash.com/photo-1759375194481-24fedf4777ed?w=800',
                cities: {
                    bogota: {
                        id: 'bogota',
                        name: 'Bogotá',
                        country: 'Colombia',
                        region: 'South America',
                        description: 'High-altitude capital with world-class museums and vibrant street art',
                        image: 'https://images.unsplash.com/photo-1738474429346-3fbef4ab70dd?w=800',
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
                        name: 'Medellín',
                        country: 'Colombia',
                        region: 'South America',
                        description: 'City of Eternal Spring transformed from violent past to innovative present',
                        image: 'https://images.unsplash.com/photo-1641343011907-641e1378d8da?w=800',
                        population: '2,500,000',
                        bestTime: 'December to February',
                        avgBudget: { budget: 35, mid: 70, luxury: 190 },
                        attractions: [
                            { name: 'Comuna 13', type: 'Neighborhood', description: 'Transformed favela with street art and escalators' },
                            { name: 'Plaza Botero', type: 'Square', description: 'Outdoor square with Botero sculptures' },
                            { name: 'Metrocable', type: 'Transport', description: 'Cable cars over the hillside barrios' },
                            { name: 'Parque Arví', type: 'Nature', description: 'Nature reserve via metrocable' },
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
                description: 'Straddling the equator with the Galápagos, Amazon, and colonial Quito',
                image: 'https://images.unsplash.com/photo-1767065856515-b754f9953dc2?w=800',
                cities: {
                    quito: {
                        id: 'quito',
                        name: 'Quito',
                        country: 'Ecuador',
                        region: 'South America',
                        description: 'UNESCO colonial old town at 2,850m with stunning churches and equator nearby',
                        image: 'https://images.unsplash.com/photo-1610226977124-9fd2755d09f2?w=800',
                        population: '2,800,000',
                        bestTime: 'June to September (dry season)',
                        avgBudget: { budget: 35, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Historic Old Town', type: 'Historic', description: 'UNESCO best-preserved colonial center' },
                            { name: 'Mitad del Mundo', type: 'Landmark', description: 'Monument at the equator line' },
                            { name: 'TelefériQo', type: 'Cable Car', description: 'Ride to 4,100m on Pichincha volcano' },
                            { name: 'La Compañía Church', type: 'Religious', description: 'Stunning baroque gold interior' },
                            { name: 'Mariscal District', type: 'Neighborhood', description: 'Backpacker hub with nightlife' }
                        ],
                        tips: [
                            'Altitude is high - acclimate slowly',
                            'Gateway to Galápagos Islands',
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
                image: 'https://images.unsplash.com/photo-1684362260152-ec37c294e06a?w=800',
                cities: {
                    panamaCity: {
                        id: 'panamaCity',
                        name: 'Panama City',
                        country: 'Panama',
                        region: 'Americas',
                        description: 'Modern skyline meets colonial Casco Viejo and famous canal',
                        image: 'https://images.unsplash.com/photo-1540610410855-b4c8877b761c?w=800',
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
                        image: 'https://images.unsplash.com/photo-1517154868524-c6b5fbd62a1c?w=800',
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
                        image: 'https://images.unsplash.com/photo-1577587230708-187fdbef4d91?w=800',
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
                            { name: 'Sacsayhuamán', type: 'Ancient', description: 'Massive Inca fortress above city' },
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
                        image: 'https://images.unsplash.com/photo-1590545651636-f0e7f151239f?w=800',
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
                currency: 'Venezuelan Bolívar (VES)',
                language: 'Spanish',
                description: 'Angel Falls, Caribbean beaches, Andean peaks, and Amazon wilderness',
                image: 'https://images.unsplash.com/photo-1770024466639-f8337992a184?w=800',
                cities: {
                    caracas: {
                        id: 'caracas',
                        name: 'Caracas',
                        country: 'Venezuela',
                        region: 'South America',
                        description: 'Capital city in mountain valley with vibrant culture',
                        image: 'https://images.unsplash.com/photo-1714594923299-e915b7d71701?w=800',
                        population: '2,900,000',
                        bestTime: 'December to April (dry season)',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Teleférico de Caracas', type: 'Cable Car', description: 'Cable car to Mount Ávila' },
                            { name: 'Plaza Bolívar', type: 'Square', description: 'Historic central square' },
                            { name: 'Museo de Bellas Artes', type: 'Museum', description: 'Fine arts museum' },
                            { name: 'Parque Nacional El Ávila', type: 'Nature', description: 'Mountain park above city' },
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
                        image: 'https://images.unsplash.com/photo-1687892564936-2afe81e0ac93?w=800',
                        population: '2,000',
                        bestTime: 'June to December (waterfalls at peak)',
                        avgBudget: { budget: 100, mid: 200, luxury: 500 },
                        attractions: [
                            { name: 'Angel Falls', type: 'Nature', description: 'World\'s highest uninterrupted waterfall' },
                            { name: 'Canaima Lagoon', type: 'Nature', description: 'Pink sand beaches and waterfalls' },
                            { name: 'Tepuis', type: 'Nature', description: 'Ancient table-top mountains' },
                            { name: 'Pemn Indigenous Villages', type: 'Culture', description: 'Indigenous Pemón communities' },
                            { name: 'Scenic Flights', type: 'Adventure', description: 'Fly over tepuis and falls' }
                        ],
                        tips: [
                            'Fly from Ciudad Bolívar or Puerto Ordaz',
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
                image: 'https://images.unsplash.com/photo-1708392310993-feac72ff1dae?w=800',
                cities: {
                    toronto: {
                        id: 'toronto',
                        name: 'Toronto',
                        country: 'Canada',
                        region: 'Americas',
                        description: 'Multicultural metropolis with iconic CN Tower and diverse neighborhoods',
                        image: 'https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?w=800',
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
                        image: 'https://images.unsplash.com/photo-1470181942237-78ce33fec141?w=800',
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
                        image: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800',
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
                        image: 'https://images.unsplash.com/photo-1526863336296-fac32d550655?w=800',
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
                capital: 'San José',
                currency: 'Costa Rican Colón (CRC)',
                language: 'Spanish',
                description: 'Pura Vida lifestyle with rainforests, volcanoes, and incredible biodiversity',
                image: 'https://images.unsplash.com/photo-1768519126747-1f4b88ead43d?w=800',
                cities: {
                    sanJose: {
                        id: 'sanJose',
                        name: 'San José',
                        country: 'Costa Rica',
                        region: 'Americas',
                        description: 'Capital city gateway to Costa Rica\'s natural wonders',
                        image: 'https://images.unsplash.com/photo-1682963847132-1923d1e7928a?w=800',
                        population: '340,000',
                        bestTime: 'December to April (dry season)',
                        avgBudget: { budget: 50, mid: 100, luxury: 280 },
                        attractions: [
                            { name: 'National Theater', type: 'Theater', description: 'Ornate 1897 theater' },
                            { name: 'Gold Museum', type: 'Museum', description: 'Pre-Columbian gold artifacts' },
                            { name: 'Central Market', type: 'Market', description: 'Traditional market since 1880' },
                            { name: 'Poás Volcano', type: 'Nature', description: 'Active volcano day trip' },
                            { name: 'La Paz Waterfall Gardens', type: 'Nature', description: 'Waterfalls and wildlife' }
                        ],
                        tips: [
                            'Most visitors use San José as transit hub',
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
                image: 'https://images.unsplash.com/photo-1769565979248-3fd0135049c1?w=800',
                cities: {
                    antiguaGuatemala: {
                        id: 'antiguaGuatemala',
                        name: 'Antigua Guatemala',
                        country: 'Guatemala',
                        region: 'Americas',
                        description: 'Colonial gem surrounded by volcanoes with cobblestone streets and Spanish ruins',
                        image: 'https://images.unsplash.com/photo-1709505815627-b4123347cc89?w=800',
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
                image: 'https://images.unsplash.com/photo-1681264013717-0f23ada20c38?w=800',
                cities: {
                    roatan: {
                        id: 'roatan',
                        name: 'Roatán',
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
                image: 'https://images.unsplash.com/photo-1504982692992-f66b2dbd2f95?w=800',
                cities: {
                    montegoBay: {
                        id: 'montegoBay',
                        name: 'Montego Bay',
                        country: 'Jamaica',
                        region: 'Americas',
                        description: 'Jamaica\'s tourism capital with beaches, resorts, and hip strip nightlife',
                        image: 'https://images.unsplash.com/photo-1504982692992-f66b2dbd2f95?w=800',
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
                        image: 'https://images.unsplash.com/photo-1707571854070-72028840176b?w=800',
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
                            { name: 'Coyoacán', type: 'Neighborhood', description: 'Bohemian neighborhood with markets' }
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
                        name: 'Cancún',
                        country: 'Mexico',
                        region: 'Americas',
                        description: 'Caribbean resort city with turquoise waters and access to Mayan ruins',
                        image: 'https://images.unsplash.com/photo-1676074841885-98294f273ddb?w=800',
                        population: '900,000',
                        bestTime: 'December to April',
                        avgBudget: { budget: 60, mid: 120, luxury: 350 },
                        attractions: [
                            { name: 'Hotel Zone Beaches', type: 'Beach', description: 'Stunning Caribbean beaches' },
                            { name: 'Chichén Itzá', type: 'Ancient', description: 'New Seven Wonders pyramids' },
                            { name: 'Cenotes', type: 'Nature', description: 'Sacred swimming holes' },
                            { name: 'Tulum', type: 'Ancient', description: 'Beachside Mayan ruins' },
                            { name: 'Isla Mujeres', type: 'Island', description: 'Laid-back island ferry trip' }
                        ],
                        tips: [
                            'Hotel Zone is touristy but safe',
                            'Downtown Cancún is more authentic',
                            'Book Chichén Itzá early morning tour',
                            'Hurricane season June to November'
                        ]
                    },
                    oaxaca: {
                        id: 'oaxaca',
                        name: 'Oaxaca',
                        country: 'Mexico',
                        region: 'Americas',
                        description: 'Colonial city with indigenous culture, mezcal, and world-famous cuisine',
                        image: 'https://images.unsplash.com/photo-1530455235907-0a59ea1e04ea?w=800',
                        population: '270,000',
                        bestTime: 'October to April',
                        avgBudget: { budget: 35, mid: 70, luxury: 190 },
                        attractions: [
                            { name: 'Monte Albán', type: 'Ancient', description: 'Zapotec ruins overlooking valley' },
                            { name: 'Santo Domingo Church', type: 'Religious', description: 'Baroque church with gold interior' },
                            { name: 'Mercado Benito Juárez', type: 'Market', description: 'Food market with tlayudas' },
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
                image: 'https://images.unsplash.com/photo-1767977014907-64f00b8f5e93?w=800',
                cities: {
                    newYork: {
                        id: 'newYork',
                        name: 'New York City',
                        country: 'United States',
                        region: 'Americas',
                        description: 'The city that never sleeps with iconic skyline, Broadway, and world culture',
                        image: 'https://images.unsplash.com/photo-1695189993006-975fb45964de?w=800',
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
                        image: 'https://images.unsplash.com/photo-1608444507355-c506572a24f8?w=800',
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
                        image: 'https://images.unsplash.com/photo-1553018421-c04f668c55e6?w=800',
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
                        image: 'https://images.unsplash.com/photo-1507995340052-601c4e433c4d?w=800',
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
                        image: 'https://images.unsplash.com/photo-1726250763981-f8b84cb9f8b3?w=800',
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
                        image: 'https://images.unsplash.com/photo-1604420033224-ab46e450d5c6?w=800',
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
                        image: 'https://images.unsplash.com/photo-1701472921754-3e83ebb3628b?w=800',
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
                currency: 'Nicaraguan Córdoba (NIO)',
                language: 'Spanish',
                description: 'Volcanoes, colonial cities, surf beaches, and off-the-beaten-path adventures',
                image: 'https://images.unsplash.com/photo-1675701142610-5d40c754a3b6?w=800',
                cities: {
                    granada: {
                        id: 'granada',
                        name: 'Granada',
                        country: 'Nicaragua',
                        region: 'Americas',
                        description: 'Colorful colonial city on Lake Nicaragua with volcanic backdrop',
                        image: 'https://images.unsplash.com/photo-1630773899830-15ae96bbd777?w=800',
                        population: '130,000',
                        bestTime: 'November to April (dry season)',
                        avgBudget: { budget: 30, mid: 60, luxury: 160 },
                        attractions: [
                            { name: 'Central Park & Cathedral', type: 'Historic', description: 'Colonial center with yellow cathedral' },
                            { name: 'Las Isletas', type: 'Nature', description: 'Boat trip through volcanic islets' },
                            { name: 'Volcán Mombacho', type: 'Volcano', description: 'Cloud forest hikes and zip lines' },
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
                        name: 'León',
                        country: 'Nicaragua',
                        region: 'Americas',
                        description: 'University town with revolutionary history and volcano adventures',
                        image: 'https://images.unsplash.com/photo-1549038281-29bba1500022?w=800',
                        population: '200,000',
                        bestTime: 'November to April',
                        avgBudget: { budget: 25, mid: 55, luxury: 140 },
                        attractions: [
                            { name: 'León Cathedral', type: 'Religious', description: 'UNESCO largest cathedral in Central America' },
                            { name: 'Cerro Negro', type: 'Volcano', description: 'Famous volcano boarding' },
                            { name: 'Mural Art', type: 'Art', description: 'Revolutionary murals throughout city' },
                            { name: 'Poneloya Beach', type: 'Beach', description: 'Nearby Pacific beach' },
                            { name: 'Ruins of León Viejo', type: 'Ruins', description: 'UNESCO Spanish colonial ruins' }
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
                image: 'https://images.unsplash.com/photo-1758811570149-5f78d28baa58?w=800',
                cities: {
                    yerevan: {
                        id: 'yerevan',
                        name: 'Yerevan',
                        country: 'Armenia',
                        region: 'Central Asia',
                        description: 'Pink city with views of Mount Ararat, ancient history, and vibrant cafe culture',
                        image: 'https://images.unsplash.com/photo-1589537368054-6a9c11ba1eac?w=800',
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
                image: 'https://images.unsplash.com/photo-1753706874051-718700368d6b?w=800',
                cities: {
                    baku: {
                        id: 'baku',
                        name: 'Baku',
                        country: 'Azerbaijan',
                        region: 'Central Asia',
                        description: 'Futuristic Caspian Sea capital with UNESCO Old City and Flame Towers',
                        image: 'https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?w=800',
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
                        image: 'https://images.unsplash.com/photo-1749546870688-ba993cef4bf8?w=800',
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
                        image: 'https://images.unsplash.com/photo-1590588875980-dc6f453e57c9?w=800',
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
                        image: 'https://images.unsplash.com/photo-1581940616509-93333dea735c?w=800',
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
                        image: 'https://images.unsplash.com/photo-1690400163449-e498e866e399?w=800',
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
                        image: 'https://images.unsplash.com/photo-1625566360146-918001e76064?w=800',
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
                image: 'https://images.unsplash.com/photo-1759167631532-fbd52fb070d7?w=800',
                cities: {
                    astana: {
                        id: 'astana',
                        name: 'Astana',
                        country: 'Kazakhstan',
                        region: 'Central Asia',
                        description: 'Futuristic capital rising from the steppe with bold modern architecture',
                        image: 'https://images.unsplash.com/photo-1666975823342-3b755b3784d4?w=800',
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
                        image: 'https://images.unsplash.com/photo-1757430289583-2410bc23fd2e?w=800',
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
                image: 'https://images.unsplash.com/photo-1673200448868-f9fcfe852c85?w=800',
                cities: {
                    bishkek: {
                        id: 'bishkek',
                        name: 'Bishkek',
                        country: 'Kyrgyzstan',
                        region: 'Central Asia',
                        description: 'Leafy capital with Soviet architecture and gateway to stunning mountains',
                        image: 'https://images.unsplash.com/photo-1728977571861-fa12369bb5a0?w=800',
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
                        image: 'https://images.unsplash.com/photo-1551189783-e226306fd8a1?w=800',
                        population: '50,000',
                        bestTime: 'June to September',
                        avgBudget: { budget: 30, mid: 60, luxury: 150 },
                        attractions: [
                            { name: 'Issyk-Kul Lake', type: 'Nature', description: 'Crystal clear alpine lake' },
                            { name: 'Karakol', type: 'Town', description: 'Base for trekking and skiing' },
                            { name: 'Jeti-Ögüz', type: 'Nature', description: 'Red rock formations' },
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
                image: 'https://images.unsplash.com/photo-1723582218495-4aeab623faeb?w=800',
                cities: {
                    dushanbe: {
                        id: 'dushanbe',
                        name: 'Dushanbe',
                        country: 'Tajikistan',
                        region: 'Central Asia',
                        description: 'Leafy capital with Soviet architecture and mountain backdrop',
                        image: 'https://images.unsplash.com/photo-1666562680677-50ef7ebbaf0c?w=800',
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
                        image: 'https://images.unsplash.com/photo-1621425022689-308a7b7691a3?w=800',
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
                image: 'https://images.unsplash.com/photo-1764505879412-bc7e77ad1bde?w=800',
                cities: {
                    ashgabat: {
                        id: 'ashgabat',
                        name: 'Ashgabat',
                        country: 'Turkmenistan',
                        region: 'Central Asia',
                        description: 'Surreal white marble capital with golden statues and personality cult',
                        image: 'https://images.unsplash.com/photo-1764505878518-00e3ed563d6f?w=800',
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
                        image: 'https://images.unsplash.com/photo-1448772917253-74bbbe249b30?w=800',
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
                image: 'https://images.unsplash.com/photo-1727354484581-677b786ce608?w=800',
                cities: {
                    tashkent: {
                        id: 'tashkent',
                        name: 'Tashkent',
                        country: 'Uzbekistan',
                        region: 'Central Asia',
                        description: 'Modern capital with Soviet metro and gateway to Silk Road',
                        image: 'https://images.unsplash.com/photo-1663963116089-d56986ea8d8b?w=800',
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
                        image: 'https://images.unsplash.com/photo-1715457727257-7c8da4ea8aea?w=800',
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
                        image: 'https://images.unsplash.com/photo-1662468698401-fa4c8a1b91cd?w=800',
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
                        image: 'https://images.unsplash.com/photo-1566734904496-9309bb1798ae?w=800',
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
                        image: 'https://images.unsplash.com/photo-1607309843659-f4ad95cf3277?w=800',
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
                        image: 'https://images.unsplash.com/photo-1580014942344-ce423d2b885a?w=800',
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
                        image: 'https://images.unsplash.com/photo-1688337707006-64d5a1f6582c?w=800',
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
                        image: 'https://images.unsplash.com/photo-1510546020578-a35ae9fcfb0f?w=800',
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
                language: 'English, Māori',
                description: 'Dramatic Middle-earth landscapes with adventure sports and Māori culture',
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
                        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800',
                        population: '1,700,000',
                        bestTime: 'December to March',
                        avgBudget: { budget: 75, mid: 150, luxury: 380 },
                        attractions: [
                            { name: 'Sky Tower', type: 'Landmark', description: 'Iconic tower with sky jump' },
                            { name: 'Waiheke Island', type: 'Island', description: 'Wine and beaches by ferry' },
                            { name: 'Auckland War Memorial Museum', type: 'Museum', description: 'Māori culture and NZ history' },
                            { name: 'Mount Eden', type: 'Volcano', description: 'Volcanic cone with views' },
                            { name: 'Viaduct Harbour', type: 'Waterfront', description: 'Restaurants and America\'s Cup history' }
                        ],
                        tips: [
                            'Gateway for most visitors',
                            'Ferry to Waiheke for day trip',
                            'Māori cultural performances available',
                            'Drive to Hobbiton (2 hours)'
                        ]
                    },
                    rotorua: {
                        id: 'rotorua',
                        name: 'Rotorua',
                        country: 'New Zealand',
                        region: 'Australia & Oceania',
                        description: 'Geothermal wonderland with Māori culture and sulfur hot springs',
                        image: 'https://images.unsplash.com/photo-1680180730599-61216c165c96?w=800',
                        population: '75,000',
                        bestTime: 'Year-round (geothermal always active)',
                        avgBudget: { budget: 70, mid: 140, luxury: 350 },
                        attractions: [
                            { name: 'Te Puia', type: 'Geothermal', description: 'Geysers and Māori arts center' },
                            { name: 'Wai-O-Tapu', type: 'Geothermal', description: 'Colorful thermal pools' },
                            { name: 'Polynesian Spa', type: 'Hot Springs', description: 'Hot pools overlooking lake' },
                            { name: 'Redwood Forest', type: 'Nature', description: 'Treewalk and mountain biking' },
                            { name: 'Tamaki Māori Village', type: 'Culture', description: 'Traditional hangi feast' }
                        ],
                        tips: [
                            'Sulfur smell is normal',
                            'Book Māori cultural experience',
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
                        image: 'https://images.unsplash.com/photo-1634348407697-393e5b24a52d?w=800',
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
                        image: 'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?w=800',
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
                image: 'https://images.unsplash.com/photo-1738763073249-3d3f3f072062?w=800',
                cities: {
                    borabora: {
                        id: 'borabora',
                        name: 'Bora Bora',
                        country: 'French Polynesia',
                        region: 'Australia & Oceania',
                        description: 'Ultimate honeymoon destination with iconic overwater bungalows',
                        image: 'https://images.unsplash.com/photo-1756373525330-174879b460f1?w=800',
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
                        image: 'https://images.unsplash.com/photo-1666055043779-bd81e9518d0d?w=800',
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
                        image: 'https://images.unsplash.com/photo-1665904640593-e397a72dee9f?w=800',
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
                image: 'https://images.unsplash.com/photo-1600891407163-0613dd5f85c5?w=800',
                cities: {
                    portMoresby: {
                        id: 'portMoresby',
                        name: 'Port Moresby',
                        country: 'Papua New Guinea',
                        region: 'Australia & Oceania',
                        description: 'Capital city and gateway with WWII history and cultural sites',
                        image: 'https://images.unsplash.com/photo-1642738561061-1aa402079281?w=800',
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
                image: 'https://images.unsplash.com/photo-1707912258684-b925bcfa8568?w=800',
                cities: {
                    phnomPenh: {
                        id: 'phnomPenh',
                        name: 'Phnom Penh',
                        country: 'Cambodia',
                        region: 'Asia',
                        description: 'Rapidly developing capital with royal palace, sobering history, and riverside charm',
                        image: 'https://images.unsplash.com/photo-1669064696219-0ebcaaa530ef?w=800',
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
                        image: 'https://images.unsplash.com/photo-1650777697569-6c57268a5800?w=800',
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
                image: 'https://images.unsplash.com/photo-1718749742771-d33cd3719fab?w=800',
                cities: {
                    beijing: {
                        id: 'beijing',
                        name: 'Beijing',
                        country: 'China',
                        region: 'Asia',
                        description: 'Ancient capital with Forbidden City, Great Wall, and rich imperial history',
                        image: 'https://images.unsplash.com/photo-1708224001641-7f00fe744148?w=800',
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
                        image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800',
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
                        image: 'https://images.unsplash.com/photo-1589018416907-6d320b722c62?w=800',
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
                        image: 'https://images.unsplash.com/photo-1522614288668-a697127e9b21?w=800',
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
                        image: 'https://images.unsplash.com/photo-1663036544372-554683bf0d57?w=800',
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
                image: 'https://images.unsplash.com/photo-1770308144171-77831cf9130a?w=800',
                cities: {
                    manama: {
                        id: 'manama',
                        name: 'Manama',
                        country: 'Bahrain',
                        region: 'Asia',
                        description: 'Modern capital with ancient fort, pearl diving heritage, and F1 circuit',
                        image: 'https://images.unsplash.com/photo-1587128230596-721e689a63aa?w=800',
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
                image: 'https://images.unsplash.com/photo-1705583855040-3c25b4a9eab9?w=800',
                cities: {
                    bandarSeriBegawan: {
                        id: 'bandarSeriBegawan',
                        name: 'Bandar Seri Begawan',
                        country: 'Brunei',
                        region: 'Asia',
                        description: 'Quiet capital with stunning mosques, water villages, and royal palace',
                        image: 'https://images.unsplash.com/photo-1709808972524-a4ad69939bb2?w=800',
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
                        image: 'https://images.unsplash.com/photo-1614101104576-32c2f908bd77?w=800',
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
                        image: 'https://images.unsplash.com/photo-1572915062279-a4005142a6e5?w=800',
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
                        image: 'https://images.unsplash.com/photo-1641122098360-13e4442bb539?w=800',
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
                        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
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
                        image: 'https://images.unsplash.com/photo-1741682739932-4a39f39ef8ab?w=800',
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
                        image: 'https://images.unsplash.com/photo-1611087802810-046bb671e644?w=800',
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
                        image: 'https://images.unsplash.com/photo-1542210940661-5f91cb7afe02?w=800',
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
                        image: 'https://images.unsplash.com/photo-1753544998757-8d4a0d76a5ba?w=800',
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
                        image: 'https://images.unsplash.com/photo-1711791243390-3f637ab6d79b?w=800',
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
                        image: 'https://images.unsplash.com/photo-1607586355793-34ab20949e28?w=800',
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
                image: 'https://images.unsplash.com/photo-1686120552846-7caf1a345876?w=800',
                cities: {
                    luangPrabang: {
                        id: 'luangPrabang',
                        name: 'Luang Prabang',
                        country: 'Laos',
                        region: 'Asia',
                        description: 'UNESCO town of gilded temples, French cafes, and daily monk alms ceremony',
                        image: 'https://images.unsplash.com/photo-1714253306311-4d2864fbd30c?w=800',
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
                        image: 'https://images.unsplash.com/photo-1704212685546-3086abc1e6a1?w=800',
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
                image: 'https://images.unsplash.com/photo-1552618964-d82464bde956?w=800',
                cities: {
                    kualaLumpur: {
                        id: 'kualaLumpur',
                        name: 'Kuala Lumpur',
                        country: 'Malaysia',
                        region: 'Asia',
                        description: 'Modern capital with iconic towers, diverse food scene, and cultural neighborhoods',
                        image: 'https://images.unsplash.com/photo-1512580687892-1b04e29ea66f?w=800',
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
                        image: 'https://images.unsplash.com/photo-1620488212381-dea91f7dd69a?w=800',
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
                        image: 'https://images.unsplash.com/photo-1727884872102-dd7b173c7a46?w=800',
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
                        image: 'https://images.unsplash.com/photo-1593328311557-17af518e0649?w=800',
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
                        image: 'https://images.unsplash.com/photo-1605986152687-c31d1372d560?w=800',
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
                        image: 'https://images.unsplash.com/photo-1518354976790-1e2feeac3f4d?w=800',
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
                        image: 'https://images.unsplash.com/photo-1743328255534-3d23f0427070?w=800',
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
                capital: 'Malé',
                currency: 'Maldivian Rufiyaa (MVR)',
                language: 'Dhivehi',
                description: 'Paradise archipelago with overwater villas, white sand, and incredible diving',
                image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
                cities: {
                    male: {
                        id: 'male',
                        name: 'Malé',
                        country: 'Maldives',
                        region: 'Asia',
                        description: 'Tiny densely packed capital - gateway to island resorts',
                        image: 'https://images.unsplash.com/photo-1679656952793-023c511f46de?w=800',
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
                currency: 'Mongolian Tögrög (MNT)',
                language: 'Mongolian',
                description: 'Vast steppes, nomadic culture, Genghis Khan legacy, and Gobi Desert',
                image: 'https://images.unsplash.com/photo-1555089826-040d0a9c1b04?w=800',
                cities: {
                    ulaanbaatar: {
                        id: 'ulaanbaatar',
                        name: 'Ulaanbaatar',
                        country: 'Mongolia',
                        region: 'Asia',
                        description: 'Modern capital gateway to endless steppes and nomadic adventures',
                        image: 'https://images.unsplash.com/photo-1585218225329-fbac29c1c926?w=800',
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
                            'Winters are brutally cold (-40°C)',
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
                        image: 'https://images.unsplash.com/photo-1580824074099-ecf9707a3bb3?w=800',
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
                image: 'https://images.unsplash.com/photo-1764581199162-f6ac121d795d?w=800',
                cities: {
                    bagan: {
                        id: 'bagan',
                        name: 'Bagan',
                        country: 'Myanmar',
                        region: 'Asia',
                        description: 'Ancient city with over 2,000 Buddhist temples and pagodas',
                        image: 'https://images.unsplash.com/photo-1662657080109-d531980fd806?w=800',
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
                        image: 'https://images.unsplash.com/photo-1515832730975-869da433df66?w=800',
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
                image: 'https://images.unsplash.com/photo-1709537058982-79582c246829?w=800',
                cities: {
                    kathmandu: {
                        id: 'kathmandu',
                        name: 'Kathmandu',
                        country: 'Nepal',
                        region: 'Asia',
                        description: 'Ancient capital with stupas, temples, and Himalayan gateway experiences',
                        image: 'https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?w=800',
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
                        image: 'https://images.unsplash.com/photo-1610997686651-98492fd08108?w=800',
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
                        image: 'https://images.unsplash.com/photo-1754464431273-06d8f50c8b0c?w=800',
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
                image: 'https://images.unsplash.com/photo-1759323050196-8afd2b91bc12?w=800',
                cities: {
                    lahore: {
                        id: 'lahore',
                        name: 'Lahore',
                        country: 'Pakistan',
                        region: 'Asia',
                        description: 'Cultural capital with Mughal heritage, food paradise, and Sufi music',
                        image: 'https://images.unsplash.com/photo-1622546758596-f1f06ba11f58?w=800',
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
                        image: 'https://images.unsplash.com/photo-1715338385730-2329158cf659?w=800',
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
                image: 'https://images.unsplash.com/photo-1736147936459-8cb73ff9d8d4?w=800',
                cities: {
                    manila: {
                        id: 'manila',
                        name: 'Manila',
                        country: 'Philippines',
                        region: 'Asia',
                        description: 'Chaotic capital with Spanish colonial history and vibrant nightlife',
                        image: 'https://images.unsplash.com/photo-1607282729548-e1d13feae36f?w=800',
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
                        image: 'https://images.unsplash.com/photo-1746260948448-d741c5838c16?w=800',
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
                        image: 'https://images.unsplash.com/photo-1728042743743-e2a2abf35c47?w=800',
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
                        image: 'https://images.unsplash.com/photo-1545509703-506872a296cb?w=800',
                        population: '2,000,000',
                        bestTime: 'December to May',
                        avgBudget: { budget: 35, mid: 70, luxury: 200 },
                        attractions: [
                            { name: 'Magellan\'s Cross', type: 'Historic', description: 'Site of first Christian conversion' },
                            { name: 'Oslob Whale Sharks', type: 'Wildlife', description: 'Swim with whale sharks' },
                            { name: 'Kawasan Falls', type: 'Nature', description: 'Turquoise multi-tier waterfall' },
                            { name: 'Moalboal', type: 'Diving', description: 'Sardine run and coral diving' },
                            { name: 'Basilica del Santo Niño', type: 'Religious', description: 'Oldest church in Philippines' }
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
                        image: 'https://images.unsplash.com/photo-1639526473371-e68e5336df56?w=800',
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
                        image: 'https://images.unsplash.com/photo-1651571718636-13c51234e9e0?w=800',
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
                flag: '🇷🇺',
                capital: 'Moscow',
                currency: 'Russian Ruble (RUB)',
                language: 'Russian',
                description: 'Vast nation spanning Europe to Asia with imperial palaces and Orthodox cathedrals',
                image: 'https://images.unsplash.com/photo-1737460097655-5fdf3f0eb2a8?w=800',
                cities: {
                    moscow: {
                        id: 'moscow',
                        name: 'Moscow',
                        country: 'Russia',
                        region: 'Europe',
                        description: 'Capital of the Russian empire with Red Square, Kremlin, and opulent metro',
                        image: 'https://images.unsplash.com/photo-1690140733600-500682577f1d?w=800',
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
                        image: 'https://images.unsplash.com/photo-1559939337-a790c86724cc?w=800',
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
                        image: 'https://images.unsplash.com/photo-1695191996205-9a3dce26227d?w=800',
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
                image: 'https://images.unsplash.com/photo-1540998145333-e2eef1a9822d?w=800',
                cities: {
                    seoul: {
                        id: 'seoul',
                        name: 'Seoul',
                        country: 'South Korea',
                        region: 'Asia',
                        description: 'Dynamic capital blending ancient palaces with K-pop and neon nightlife',
                        image: 'https://images.unsplash.com/photo-1724416823399-a4ca50ebfe62?w=800',
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
                        image: 'https://images.unsplash.com/photo-1578724007989-43f1c0f5f3c7?w=800',
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
                image: 'https://images.unsplash.com/photo-1714412953594-ce00b0d43467?w=800',
                cities: {
                    colombo: {
                        id: 'colombo',
                        name: 'Colombo',
                        country: 'Sri Lanka',
                        region: 'Asia',
                        description: 'Commercial capital with colonial heritage, temples, and buzzing markets',
                        image: 'https://images.unsplash.com/photo-1546656495-fc838de15e5c?w=800',
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
                        image: 'https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?w=800',
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
                        image: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=800',
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
                        image: 'https://images.unsplash.com/photo-1547818832-470a7998a99a?w=800',
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
                        image: 'https://images.unsplash.com/photo-1709753173665-1c45072f277b?w=800',
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
                        image: 'https://images.unsplash.com/photo-1705936981588-a4192f66fcfb?w=800',
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
                        image: 'https://images.unsplash.com/photo-1591410448119-1b49cbb3b83e?w=800',
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
                image: 'https://images.unsplash.com/photo-1661262745674-39c64785229f?w=800',
                cities: {
                    taipei: {
                        id: 'taipei',
                        name: 'Taipei',
                        country: 'Taiwan',
                        region: 'Asia',
                        description: 'Modern capital with incredible night markets and mountain accessibility',
                        image: 'https://images.unsplash.com/photo-1692667651678-b989e9ae7bc2?w=800',
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
                        image: 'https://images.unsplash.com/photo-1722695503110-87a0879862e7?w=800',
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
                image: 'https://images.unsplash.com/photo-1741245472266-c1736ecb2381?w=800',
                cities: {
                    bangkok: {
                        id: 'bangkok',
                        name: 'Bangkok',
                        country: 'Thailand',
                        region: 'Asia',
                        description: 'Chaotic capital with ornate temples, incredible street food, and legendary nightlife',
                        image: 'https://images.unsplash.com/photo-1613672803979-a6edfc5a179b?w=800',
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
                        image: 'https://images.unsplash.com/photo-1599576838688-8a6c11263108?w=800',
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
                        image: 'https://images.unsplash.com/photo-1691430312264-553021370070?w=800',
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
                        image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800',
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
                        image: 'https://images.unsplash.com/photo-1652346637723-83799b99ea87?w=800',
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
                        image: 'https://images.unsplash.com/photo-1733470252664-ce515758631d?w=800',
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
                        image: 'https://images.unsplash.com/photo-1540110234959-2b69b1ffd2c8?w=800',
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
                        image: 'https://images.unsplash.com/photo-1697944944442-bc82e56e6e5a?w=800',
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
                image: 'https://images.unsplash.com/photo-1723411266945-a8ce50dcfff6?w=800',
                cities: {
                    hanoi: {
                        id: 'hanoi',
                        name: 'Hanoi',
                        country: 'Vietnam',
                        region: 'Asia',
                        description: 'Ancient capital with French colonial architecture and legendary street food',
                        image: 'https://images.unsplash.com/photo-1533497394934-b33cd9695ba9?w=800',
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
                        image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
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
                        image: 'https://images.unsplash.com/photo-1712580415180-6ef0a0a7a3a7?w=800',
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
                            'Try cao lầu (local noodles)'
                        ]
                    },
                    daNang: {
                        id: 'daNang',
                        name: 'Da Nang',
                        country: 'Vietnam',
                        region: 'Asia',
                        description: 'Modern beach city with Marble Mountains and Ba Na Hills',
                        image: 'https://images.unsplash.com/photo-1505018620898-92616e1849cc?w=800',
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
                        image: 'https://images.unsplash.com/photo-1665905905591-fb66b0496481?w=800',
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
                        image: 'https://images.unsplash.com/photo-1693282814784-649be45a459b?w=800',
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
                image: 'https://images.unsplash.com/photo-1761048802719-6bbb68373037?w=800',
                cities: {
                    thimphu: {
                        id: 'thimphu',
                        name: 'Thimphu',
                        country: 'Bhutan',
                        region: 'Asia',
                        description: 'World\'s only capital without traffic lights, blending tradition and modernity',
                        image: 'https://images.unsplash.com/photo-1584003734930-b12779f66351?w=800',
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
                        image: 'https://images.unsplash.com/photo-1637825987997-6e6d117b81b1?w=800',
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
                        image: 'https://images.unsplash.com/photo-1580649851649-992b28f56e98?w=800',
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
                        image: 'https://images.unsplash.com/photo-1761048167001-a4fb913809a0?w=800',
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
                image: 'https://images.unsplash.com/photo-1691068013163-ee5c76c30c14?w=800',
                cities: {
                    hongKongCity: {
                        id: 'hongKongCity',
                        name: 'Hong Kong',
                        country: 'Hong Kong',
                        region: 'Asia',
                        description: 'Vertical city with iconic skyline, street food, and hiking trails',
                        image: 'https://images.unsplash.com/photo-1491914045721-6f2dd87cf09d?w=800',
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
                        image: 'https://images.unsplash.com/photo-1737039222331-ea5e1a9be109?w=800',
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
                image: 'https://images.unsplash.com/photo-1737314404810-759da9338ebe?w=800',
                cities: {
                    baghdad: {
                        id: 'baghdad',
                        name: 'Baghdad',
                        country: 'Iraq',
                        region: 'Asia',
                        description: 'Historic capital on the Tigris, once center of the Islamic Golden Age',
                        image: 'https://images.unsplash.com/photo-1608925086961-dbcd276a0e71?w=800',
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
                        image: 'https://images.unsplash.com/photo-1608766165910-468f03c32896?w=800',
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
                flag: '🇲🇴',
                capital: 'Macau (SAR)',
                currency: 'Macanese Pataca (MOP)',
                language: 'Cantonese, Portuguese',
                description: 'Vegas of the East meets Portuguese colonial heritage',
                image: 'https://images.unsplash.com/photo-1758913313672-3c516325a45a?w=800',
                cities: {
                    macauCity: {
                        id: 'macauCity',
                        name: 'Macau',
                        country: 'Macau',
                        region: 'Asia',
                        description: 'Unique blend of Portuguese colonial charm and casino glamour',
                        image: 'https://images.unsplash.com/photo-1611297887039-458d50dbf800?w=800',
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
                        image: 'https://images.unsplash.com/photo-1664356667613-aa7c2f550aa5?w=800',
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
                image: 'https://images.unsplash.com/photo-1770721666606-102254a29fff?w=800',
                cities: {
                    accra: {
                        id: 'accra',
                        name: 'Accra',
                        country: 'Ghana',
                        region: 'Africa',
                        description: 'Vibrant capital with historic sites, beaches, and thriving arts scene',
                        image: 'https://images.unsplash.com/photo-1630386226447-af0a955c1009?w=800',
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
                        image: 'https://images.unsplash.com/photo-1643913224222-17cc6adb2dfc?w=800',
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
                        image: 'https://images.unsplash.com/photo-1546989411-fdd94c3c5ebe?w=800',
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
                        image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800',
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
                        image: 'https://images.unsplash.com/photo-1598022124758-26d09adcb7b6?w=800',
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
                            'Beach at Rabat-Salé',
                            'Less tourist pressure'
                        ]
                    },
                    casablanca: {
                        id: 'casablanca',
                        name: 'Casablanca',
                        country: 'Morocco',
                        region: 'Africa',
                        description: 'Modern commercial capital with stunning Hassan II Mosque',
                        image: 'https://images.unsplash.com/photo-1538230575309-59dfc388ae36?w=800',
                        population: '3,700,000',
                        bestTime: 'March to May, September to November',
                        avgBudget: { budget: 45, mid: 90, luxury: 250 },
                        attractions: [
                            { name: 'Hassan II Mosque', type: 'Religious', description: 'Third largest mosque - on the ocean' },
                            { name: 'Corniche', type: 'Waterfront', description: 'Beach promenade and restaurants' },
                            { name: 'Old Medina', type: 'Historic', description: 'Small but atmospheric' },
                            { name: 'Morocco Mall', type: 'Shopping', description: 'Largest mall in Africa' },
                            { name: 'Rick\'s Café', type: 'Restaurant', description: 'Casablanca movie-inspired bar' }
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
                        image: 'https://images.unsplash.com/photo-1582919534700-acf2374f10d3?w=800',
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
                image: 'https://images.unsplash.com/photo-1554457606-ed16c39db884?w=800',
                cities: {
                    lagos: {
                        id: 'lagos',
                        name: 'Lagos',
                        country: 'Nigeria',
                        region: 'Africa',
                        description: 'Megacity of Africa with Afrobeats, nightlife, and entrepreneurial energy',
                        image: 'https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=800',
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
                        image: 'https://images.unsplash.com/photo-1707406534088-09c4b6958cfa?w=800',
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
                description: 'Gateway to West Africa with vibrant culture, music, and Gorée Island history',
                image: 'https://images.unsplash.com/photo-1648504735618-6b60e3651a2a?w=800',
                cities: {
                    dakar: {
                        id: 'dakar',
                        name: 'Dakar',
                        country: 'Senegal',
                        region: 'Africa',
                        description: 'Vibrant capital on Atlantic peninsula with music, markets, and slave trade history',
                        image: 'https://images.unsplash.com/photo-1648504735627-6af97e8337a9?w=800',
                        population: '3,100,000',
                        bestTime: 'November to May (dry season)',
                        avgBudget: { budget: 45, mid: 90, luxury: 250 },
                        attractions: [
                            { name: 'Gorée Island', type: 'Historic', description: 'UNESCO slave trade memorial' },
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
                        image: 'https://images.unsplash.com/photo-1709305361635-3355851b75d1?w=800',
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
                image: 'https://images.unsplash.com/photo-1770553129426-0718de6eb19c?w=800',
                cities: {
                    capeTown: {
                        id: 'capeTown',
                        name: 'Cape Town',
                        country: 'South Africa',
                        region: 'Africa',
                        description: 'Stunning city beneath Table Mountain with wine, beaches, and penguins',
                        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
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
                        image: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=800',
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
                        image: 'https://images.unsplash.com/photo-1652093481762-bcd4800228f8?w=800',
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
                image: 'https://images.unsplash.com/photo-1741771034079-3d142c11d913?w=800',
                cities: {
                    serengeti: {
                        id: 'serengeti',
                        name: 'Serengeti',
                        country: 'Tanzania',
                        region: 'Africa',
                        description: 'Africa\'s most famous safari park with the Great Migration',
                        image: 'https://images.unsplash.com/photo-1728891386152-8cf2f86add34?w=800',
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
                        image: 'https://images.unsplash.com/photo-1585659546433-bf1894c938d8?w=800',
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
                        image: 'https://images.unsplash.com/photo-1677519917377-118338dd2ed1?w=800',
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
                image: 'https://images.unsplash.com/photo-1667732599532-c5067712496d?w=800',
                cities: {
                    tunis: {
                        id: 'tunis',
                        name: 'Tunis',
                        country: 'Tunisia',
                        region: 'Africa',
                        description: 'Capital with ancient medina and Carthage ruins nearby',
                        image: 'https://images.unsplash.com/photo-1696759259572-80a2ddb1843e?w=800',
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
                        image: 'https://images.unsplash.com/photo-1660081350101-c74622df5fbb?w=800',
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
                image: 'https://images.unsplash.com/photo-1693473280107-58d8237bd7d0?w=800',
                cities: {
                    bwindi: {
                        id: 'bwindi',
                        name: 'Bwindi Impenetrable Forest',
                        country: 'Uganda',
                        region: 'Africa',
                        description: 'Home to half the world\'s mountain gorillas',
                        image: 'https://images.unsplash.com/photo-1711198617874-e86cedbf3707?w=800',
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
                        image: 'https://images.unsplash.com/photo-1709549442654-1be5faa19bb8?w=800',
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
                image: 'https://images.unsplash.com/photo-1759170880339-5b91ad6076f1?w=800',
                cities: {
                    victoriaFalls: {
                        id: 'victoriaFalls',
                        name: 'Victoria Falls',
                        country: 'Zimbabwe',
                        region: 'Africa',
                        description: 'The Smoke that Thunders - world\'s largest waterfall',
                        image: 'https://images.unsplash.com/photo-1627347456206-d3df7d8484b0?w=800',
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
                        image: 'https://images.unsplash.com/photo-1570514333268-bbeb6012772f?w=800',
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
                image: 'https://images.unsplash.com/photo-1706088773588-98152aabeb81?w=800',
                cities: {
                    mahe: {
                        id: 'mahe',
                        name: 'Mahé Island',
                        country: 'Seychelles',
                        region: 'Africa',
                        description: 'Main island with capital Victoria and stunning beaches',
                        image: 'https://images.unsplash.com/photo-1615880325038-4140d19e0bf9?w=800',
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
                        description: 'Home to UNESCO Vallée de Mai with coco de mer palms',
                        image: 'https://images.unsplash.com/photo-1693741446310-6df38cb15670?w=800',
                        population: '8,000',
                        bestTime: 'April to May, October to November',
                        avgBudget: { budget: 120, mid: 250, luxury: 800 },
                        attractions: [
                            { name: 'Vallée de Mai', type: 'Nature', description: 'UNESCO prehistoric forest' },
                            { name: 'Anse Lazio', type: 'Beach', description: 'One of world\'s best beaches' },
                            { name: 'Anse Georgette', type: 'Beach', description: 'Pristine hidden beach' },
                            { name: 'Coco de Mer', type: 'Nature', description: 'Largest seed in the world' },
                            { name: 'Fond Ferdinand', type: 'Nature', description: 'Forest reserve with views' }
                        ],
                        tips: [
                            'Don\'t miss Vallée de Mai',
                            'Beaches are world-class',
                            'Ferry or flight from Mahé',
                            'Base for La Digue day trips'
                        ]
                    },
                    laDigue: {
                        id: 'laDigue',
                        name: 'La Digue',
                        country: 'Seychelles',
                        region: 'Africa',
                        description: 'Car-free island with iconic Anse Source d\'Argent beach',
                        image: 'https://images.unsplash.com/photo-1706088843591-77d9f1fcb584?w=800',
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
                image: 'https://images.unsplash.com/photo-1759435175619-d8f6309de55b?w=800',
                cities: {
                    isfahan: {
                        id: 'isfahan',
                        name: 'Isfahan',
                        country: 'Iran',
                        region: 'Middle East',
                        description: 'Half the world - stunning Persian architecture and turquoise-tiled mosques',
                        image: 'https://images.unsplash.com/photo-1657086002136-7e08e17ef08e?w=800',
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
                        image: 'https://images.unsplash.com/photo-1610916687735-25db73d4410a?w=800',
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
                image: 'https://images.unsplash.com/photo-1708417589176-cfc0bb426f75?w=800',
                cities: {
                    muscat: {
                        id: 'muscat',
                        name: 'Muscat',
                        country: 'Oman',
                        region: 'Middle East',
                        description: 'Elegant capital with grand mosque, souks, and mountain backdrop',
                        image: 'https://images.unsplash.com/photo-1621680696874-edd80ce57b72?w=800',
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
                        image: 'https://images.unsplash.com/photo-1680180645260-cf8fc26789c7?w=800',
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
                image: 'https://images.unsplash.com/photo-1735852504731-9770f4a0c6d5?w=800',
                cities: {
                    doha: {
                        id: 'doha',
                        name: 'Doha',
                        country: 'Qatar',
                        region: 'Middle East',
                        description: 'Futuristic capital with stunning museums and pearl-diving heritage',
                        image: 'https://images.unsplash.com/photo-1647252262017-582a7dbb73d0?w=800',
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
                image: 'https://images.unsplash.com/photo-1770230942350-645a24ee802a?w=800',
                cities: {
                    riyadh: {
                        id: 'riyadh',
                        name: 'Riyadh',
                        country: 'Saudi Arabia',
                        region: 'Middle East',
                        description: 'Capital rapidly modernizing with entertainment and cultural attractions',
                        image: 'https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?w=800',
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
                        image: 'https://images.unsplash.com/photo-1710555331394-6f096f01f213?w=800',
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
                        image: 'https://images.unsplash.com/photo-1629120865048-6d6ef3193997?w=800',
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
                        image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800',
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
                        image: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?w=800',
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
                        image: 'https://images.unsplash.com/photo-1655911153461-d511211b6772?w=800',
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
                        image: 'https://images.unsplash.com/photo-1656498933234-fcfbd7f46eca?w=800',
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
                        image: 'https://images.unsplash.com/photo-1656158113009-c8f5b3268aca?w=800',
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
                image: 'https://images.unsplash.com/photo-1768134044210-f0a14cb93fd5?w=800',
                cities: {
                    jerusalem: {
                        id: 'jerusalem',
                        name: 'Jerusalem',
                        country: 'Israel',
                        region: 'Middle East',
                        description: 'Holy city for three religions with ancient walls and spiritual significance',
                        image: 'https://images.unsplash.com/photo-1644718847156-6259c4bcd5d7?w=800',
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
                        image: 'https://images.unsplash.com/photo-1656528103507-478969190cd4?w=800',
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
                image: 'https://images.unsplash.com/photo-1694694911257-60f57d138d0e?w=800',
                cities: {
                    petra: {
                        id: 'petra',
                        name: 'Petra',
                        country: 'Jordan',
                        region: 'Middle East',
                        description: 'Lost city carved from rose-red cliffs - one of the New Seven Wonders',
                        image: 'https://images.unsplash.com/photo-1694694911257-60f57d138d0e?w=800',
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
                        image: 'https://images.unsplash.com/photo-1671209088974-1ae6f8c95c50?w=800',
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
                        image: 'https://images.unsplash.com/photo-1743943932415-947f79353387?w=800',
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
                image: 'https://images.unsplash.com/photo-1696938342621-4ca7338d5a67?w=800',
                cities: {
                    beirut: {
                        id: 'beirut',
                        name: 'Beirut',
                        country: 'Lebanon',
                        region: 'Middle East',
                        description: 'Resilient Mediterranean capital with ancient ruins, vibrant nightlife, and amazing food',
                        image: 'https://images.unsplash.com/photo-1596607808481-495f70aa5b26?w=800',
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
                        image: 'https://images.unsplash.com/photo-1571249246946-f0fc69085ef5?w=800',
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
                image: 'https://images.unsplash.com/photo-1769543502255-7d784339cfbf?w=800',
                cities: {
                    istanbul: {
                        id: 'istanbul',
                        name: 'Istanbul',
                        country: 'Turkey',
                        region: 'Middle East',
                        description: 'Transcontinental city spanning Europe and Asia with Byzantine and Ottoman wonders',
                        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
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
                        image: 'https://images.unsplash.com/photo-1604156789095-3348604c0f43?w=800',
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
                        image: 'https://images.unsplash.com/photo-1675095598574-280da301ae65?w=800',
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
                        image: 'https://images.unsplash.com/photo-1582030826675-8b596001240a?w=800',
                        population: '2,500,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 40, mid: 80, luxury: 220 },
                        attractions: [
                            { name: 'Kaleiçi', type: 'Historic', description: 'Charming old quarter with Roman harbor' },
                            { name: 'Hadrian\'s Gate', type: 'Ancient', description: 'Roman triumphal arch' },
                            { name: 'Antalya Museum', type: 'Museum', description: 'One of Turkey\'s best' },
                            { name: 'Düden Waterfalls', type: 'Nature', description: 'Waterfall dropping into sea' },
                            { name: 'Konyaaltı Beach', type: 'Beach', description: 'Main city beach' }
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
                        description: 'Modern capital with Atatürk\'s mausoleum and ancient Anatolian history',
                        image: 'https://images.unsplash.com/photo-1664909699381-2f66fe8612b0?w=800',
                        population: '5,700,000',
                        bestTime: 'April to June, September to November',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Anıtkabir', type: 'Memorial', description: 'Atatürk\'s impressive mausoleum' },
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
                        image: 'https://images.unsplash.com/photo-1676845720835-0f01a82c7295?w=800',
                        population: '4,400,000',
                        bestTime: 'April to October',
                        avgBudget: { budget: 35, mid: 75, luxury: 200 },
                        attractions: [
                            { name: 'Kordon', type: 'Waterfront', description: 'Sea-front promenade' },
                            { name: 'Kemeraltı Bazaar', type: 'Market', description: 'Historic covered market' },
                            { name: 'Agora of Smyrna', type: 'Ancient', description: 'Roman market ruins' },
                            { name: 'Clock Tower', type: 'Landmark', description: 'Iconic Konak Square landmark' },
                            { name: 'Elevator (Asansör)', type: 'Landmark', description: 'Historic lift to Jewish quarter' }
                        ],
                        tips: [
                            'Turkey\'s third largest city',
                            'Most liberal city in Turkey',
                            'Gateway to Ephesus and Çeşme',
                            'Great seafood along Kordon'
                        ]
                    },
                    kusadasi: {
                        id: 'kusadasi',
                        name: 'Kuşadası',
                        country: 'Turkey',
                        region: 'Middle East',
                        description: 'Popular cruise port and beach resort near Ephesus',
                        image: 'https://images.unsplash.com/photo-1550406038-5709bfebef63?w=800',
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
                        image: 'https://images.unsplash.com/photo-1647122290702-d26706aa5903?w=800',
                        population: '3,100,000',
                        bestTime: 'April to October (winter for skiing)',
                        avgBudget: { budget: 35, mid: 70, luxury: 180 },
                        attractions: [
                            { name: 'Green Mosque', type: 'Religious', description: 'Beautiful early Ottoman mosque' },
                            { name: 'Grand Mosque (Ulu Cami)', type: 'Religious', description: '20-domed Ottoman masterpiece' },
                            { name: 'Koza Han', type: 'Market', description: 'Historic silk bazaar' },
                            { name: 'Uludağ', type: 'Nature', description: 'Mountain resort and ski area' },
                            { name: 'Cumalıkızık', type: 'Village', description: 'UNESCO Ottoman village' }
                        ],
                        tips: [
                            'Try İskender kebab - invented here',
                            'Day trip from Istanbul by ferry',
                            'Thermal baths for relaxation',
                            'Skiing in winter at Uludağ'
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
                image: 'https://images.unsplash.com/photo-1650563401244-12028cd7ee4e?w=800',
                cities: {
                    kuwaitCity: {
                        id: 'kuwaitCity',
                        name: 'Kuwait City',
                        country: 'Kuwait',
                        region: 'Middle East',
                        description: 'Modern Gulf capital with iconic towers and traditional markets',
                        image: 'https://images.unsplash.com/photo-1621647017805-7d08d0a38c8a?w=800',
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
                            'Extreme summer heat - 50°C possible',
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
                image: 'https://images.unsplash.com/photo-1622301254919-93fcfbc82ea6?w=800',
                cities: {
                    damascus: {
                        id: 'damascus',
                        name: 'Damascus',
                        country: 'Syria',
                        region: 'Middle East',
                        description: 'One of world\'s oldest continuously inhabited cities',
                        image: 'https://images.unsplash.com/photo-1713252910663-f24f4ab7c10e?w=800',
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
                image: 'https://images.unsplash.com/photo-1696621461185-a0c41453d40b?w=800',
                cities: {
                    dubai: {
                        id: 'dubai',
                        name: 'Dubai',
                        country: 'UAE',
                        region: 'Middle East',
                        description: 'Futuristic playground with world\'s tallest building and artificial islands',
                        image: 'https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=800',
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
                        image: 'https://images.unsplash.com/photo-1624317937315-0ced8736c9e9?w=800',
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
                        image: 'https://images.unsplash.com/photo-1637987897990-e660edd0af44?w=800',
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
                        image: 'https://images.unsplash.com/photo-1620767996534-ba882b75e971?w=800',
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
                        image: 'https://images.unsplash.com/photo-1623972858553-f7b7b74693f5?w=800',
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
// Popularity rankings based on international tourism arrivals data (higher = more travelled)
const countryPopularity = {
    // Schengen / Europe
    'France': 100, 'Spain': 97, 'Italy': 95, 'United Kingdom': 92, 'Germany': 90,
    'Greece': 87, 'Austria': 85, 'Portugal': 83, 'Netherlands': 80, 'Switzerland': 78,
    'Poland': 75, 'Croatia': 72, 'Czech Republic': 70, 'Hungary': 68, 'Ireland': 66,
    'Belgium': 64, 'Romania': 60, 'Bulgaria': 58, 'Montenegro': 55, 'Malta': 52,
    'Cyprus': 50, 'Slovenia': 48, 'Slovakia': 46, 'Serbia': 44, 'Albania': 42,
    'North Macedonia': 40, 'Luxembourg': 38, 'Estonia': 36, 'Latvia': 34, 'Lithuania': 32,
    'Monaco': 30, 'Liechtenstein': 28, 'Ukraine': 26, 'Moldova': 24,
    'Bosnia and Herzegovina': 22, 'Belarus': 20,
    // Scandinavia
    'Denmark': 90, 'Norway': 85, 'Sweden': 80, 'Finland': 75, 'Iceland': 70,
    // South America
    'Brazil': 95, 'Argentina': 85, 'Colombia': 75, 'Ecuador': 60, 'Bolivia': 50,
    // Americas
    'United States': 100, 'Mexico': 92, 'Canada': 88, 'Costa Rica': 75, 'Jamaica': 70,
    'Peru': 68, 'Panama': 60, 'Guatemala': 55, 'Nicaragua': 50, 'Honduras': 45, 'Venezuela': 40,
    // Central Asia
    'Georgia': 85, 'Uzbekistan': 75, 'Azerbaijan': 70, 'Kazakhstan': 65, 'Armenia': 60,
    'Kyrgyzstan': 55, 'Turkmenistan': 45, 'Tajikistan': 40,
    // Australia & Oceania
    'Australia': 95, 'New Zealand': 88, 'Fiji': 75, 'French Polynesia': 65, 'Papua New Guinea': 50,
    // Asia
    'Thailand': 98, 'Japan': 96, 'China': 92, 'Malaysia': 88, 'Singapore': 86,
    'Indonesia': 84, 'India': 82, 'Vietnam': 80, 'South Korea': 78, 'Hong Kong': 76,
    'Philippines': 74, 'Cambodia': 72, 'Taiwan': 70, 'Sri Lanka': 68, 'Nepal': 66,
    'Maldives': 64, 'Russia': 62, 'Macau': 60, 'Myanmar': 55, 'Mongolia': 52,
    'Laos': 50, 'Bhutan': 48, 'Pakistan': 45, 'Bahrain': 42, 'Brunei': 40, 'Iraq': 35,
    // Africa
    'Morocco': 92, 'Egypt': 90, 'South Africa': 85, 'Kenya': 80, 'Tanzania': 75,
    'Tunisia': 70, 'Seychelles': 68, 'Ethiopia': 60, 'Ghana': 55, 'Nigeria': 50,
    'Uganda': 48, 'Zimbabwe': 45, 'Senegal': 42,
    // Middle East
    'Turkey': 95, 'United Arab Emirates': 92, 'Saudi Arabia': 85, 'Qatar': 80,
    'Israel': 78, 'Jordan': 75, 'Oman': 70, 'Lebanon': 65, 'Kuwait': 58, 'Iran': 52, 'Syria': 40
};

function getCountriesByRegion(regionId) {
    const region = regionsData[regionId];
    if (!region) return [];
    return Object.values(region.countries).map(country => {
        const cities = Object.values(country.cities);
        const cityNames = cities.map(c => c.name).join(', ');
        const activities = cities.flatMap(c => (c.attractions || []).map(a => a.name + ' ' + (a.type || ''))).join(', ');
        return {
            id: country.id,
            name: country.name,
            code: country.code,
            flag: country.flag,
            capital: country.capital,
            currency: country.currency,
            language: country.language,
            description: country.description,
            image: country.image,
            cityCount: cities.length,
            regionId: regionId,
            popularity: countryPopularity[country.name] || 0,
            cityNames: cityNames,
            activities: activities
        };
    }).sort((a, b) => b.popularity - a.popularity);
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

