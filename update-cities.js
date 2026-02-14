// Script to update all 340 cities with elaborate descriptions and 10-15 Viator-style activities
const fs = require('fs');

// ============================================================
// CITY DATA: Elaborate descriptions + Viator-referenced activities
// Format: regionId.countryId.cityId = { description, attractions }
// ============================================================
const cityUpdates = {

// ===================== SCHENGEN / EUROPE =====================

// ALBANIA
'schengen.albania.tirana': {
  description: "Tirana, Albania's vibrant capital, is a city of fascinating contrasts where Ottoman-era mosques sit alongside Soviet-era architecture and colorful modern buildings. Once one of Europe's most isolated cities, Tirana has transformed into a lively cultural hub with bustling bazaars, innovative restaurants, and a thriving café culture centered around Skanderbeg Square. The city serves as an excellent base for exploring Albania's stunning Adriatic coastline and ancient Illyrian ruins, offering travelers an authentic and affordable European experience that remains refreshingly off the beaten path.",
  attractions: [
    { name: "Skanderbeg Square Walking Tour", type: "Walking Tour", description: "Guided exploration of Tirana's grand central square, National History Museum, and Et'hem Bey Mosque" },
    { name: "Bunk'Art Museum Experience", type: "Museum", description: "Tour of Cold War-era nuclear bunker turned contemporary art and history museum" },
    { name: "Mount Dajti Cable Car & Nature Walk", type: "Adventure", description: "Scenic cable car ride to Mount Dajti National Park with panoramic views of Tirana" },
    { name: "Tirana Street Art & Culture Tour", type: "Cultural Tour", description: "Discover Tirana's famous colorful buildings and vibrant street art scene with a local guide" },
    { name: "Grand Park & Artificial Lake Visit", type: "Nature", description: "Relaxing visit to Tirana's largest green space with boating on the artificial lake" },
    { name: "Krujë Castle & Bazaar Day Trip", type: "Day Trip", description: "Full-day excursion to the medieval castle of Albanian hero Skanderbeg and traditional bazaar" },
    { name: "Albanian Food Tasting Tour", type: "Food Tour", description: "Sample traditional Albanian cuisine including byrek, tavë kosi, and raki at local eateries" },
    { name: "Blloku Neighborhood Nightlife Tour", type: "Nightlife", description: "Evening walking tour through Tirana's trendy former communist elite district" },
    { name: "National Art Gallery Visit", type: "Museum", description: "Guided tour of Albania's premier art collection spanning socialist realism to contemporary works" },
    { name: "Petrela Castle & Wine Tasting", type: "Day Trip", description: "Visit the ancient Petrela Castle ruins followed by wine tasting at local vineyards" },
    { name: "Communist History Walking Tour", type: "Historical Tour", description: "In-depth exploration of Tirana's communist past including the Pyramid and government buildings" },
    { name: "Durrës & Adriatic Coast Day Trip", type: "Day Trip", description: "Beach day and Roman amphitheater visit in Albania's ancient port city of Durrës" }
  ]
},

// AUSTRIA
'schengen.austria.vienna': {
  description: "Vienna, the imperial capital of Austria, is a city where magnificent Baroque palaces, world-class opera houses, and legendary coffeehouse culture create an atmosphere of timeless elegance. As the former seat of the Habsburg Empire, Vienna boasts an extraordinary concentration of architectural masterpieces including Schönbrunn Palace, St. Stephen's Cathedral, and the grand Ringstrasse boulevard lined with monumental buildings. The city is synonymous with classical music — home to Mozart, Beethoven, and Strauss — and its vibrant arts scene, Michelin-starred dining, and innovative museum quarter make it one of Europe's most culturally rich destinations.",
  attractions: [
    { name: "Schönbrunn Palace Skip-the-Line Tour", type: "Palace Tour", description: "Priority access tour of the stunning 1,441-room imperial summer residence with gardens" },
    { name: "Vienna Classical Concert at Musikverein", type: "Concert", description: "Evening of Mozart and Strauss performed in one of the world's finest concert halls" },
    { name: "Hofburg Imperial Palace Tour", type: "Palace Tour", description: "Explore the Habsburg winter residence including the Imperial Apartments, Sisi Museum, and Silver Collection" },
    { name: "Belvedere Museum & Gardens Visit", type: "Museum", description: "View Klimt's 'The Kiss' and Austrian art masterpieces in this stunning Baroque palace" },
    { name: "Vienna Coffee House Culture Tour", type: "Food Tour", description: "Visit legendary Viennese coffeehouses and sample Sachertorte, strudel, and melange coffee" },
    { name: "St. Stephen's Cathedral & Old Town Walk", type: "Walking Tour", description: "Guided walk through Vienna's medieval core including the iconic Gothic cathedral" },
    { name: "Naschmarkt Food & Wine Tour", type: "Food Tour", description: "Taste your way through Vienna's largest and most popular open-air market" },
    { name: "Spanish Riding School Performance", type: "Cultural Show", description: "Watch the famous Lipizzaner stallions perform classical dressage at the Winter Riding School" },
    { name: "Danube River Cruise", type: "River Cruise", description: "Scenic boat trip along the Danube with views of Vienna's skyline and vineyards" },
    { name: "Vienna Woods & Heuriger Wine Tavern", type: "Day Trip", description: "Half-day trip to the Vienna Woods with wine tasting at a traditional Heuriger tavern" },
    { name: "Albertina Museum Guided Tour", type: "Museum", description: "Expert-led tour of one of the world's greatest graphic art collections with Monet and Picasso" },
    { name: "Prater Park & Giant Ferris Wheel", type: "Amusement", description: "Ride the iconic Riesenrad Ferris wheel and enjoy the historic Prater amusement park" },
    { name: "Vienna State Opera House Tour", type: "Guided Tour", description: "Behind-the-scenes tour of one of the world's most prestigious opera houses" }
  ]
},
'schengen.austria.salzburg': {
  description: "Salzburg, the birthplace of Mozart and the filming location of The Sound of Music, is a fairy-tale city nestled between the Alps and the Salzach River. Its UNESCO-listed Old Town features stunning Baroque architecture, the imposing Hohensalzburg Fortress perched high above the city, and charming narrow streets filled with artisan shops and traditional beer gardens. The city's world-renowned music festivals, breathtaking Alpine scenery, and proximity to the Austrian Lake District make it a year-round destination for culture lovers and outdoor enthusiasts alike.",
  attractions: [
    { name: "Hohensalzburg Fortress Tour", type: "Castle Tour", description: "Visit Central Europe's largest fully preserved castle with panoramic Alpine views" },
    { name: "Sound of Music Film Locations Tour", type: "Film Tour", description: "Visit iconic filming locations including Mirabell Gardens, Mondsee, and Leopoldskron Palace" },
    { name: "Mozart's Birthplace Museum", type: "Museum", description: "Explore the house where Wolfgang Amadeus Mozart was born in 1756 on Getreidegasse" },
    { name: "Salzburg Old Town Walking Tour", type: "Walking Tour", description: "Guided stroll through the UNESCO-listed Baroque center including Cathedral and Residenzplatz" },
    { name: "Eagle's Nest & Berchtesgaden Day Trip", type: "Day Trip", description: "Visit Hitler's mountain retreat with stunning views of the Bavarian and Austrian Alps" },
    { name: "Salt Mines Adventure Tour", type: "Adventure", description: "Descend into the ancient Hallein Salt Mines with underground slides and boat rides" },
    { name: "Austrian Lake District Tour", type: "Day Trip", description: "Visit the stunning Salzkammergut region including Hallstatt, St. Wolfgang, and alpine lakes" },
    { name: "Salzburg Beer & Food Tour", type: "Food Tour", description: "Sample local specialties including Salzburger Nockerl and craft beers at traditional breweries" },
    { name: "Mirabell Palace & Gardens Visit", type: "Garden Tour", description: "Explore the magnificent Baroque gardens and palace featured in The Sound of Music" },
    { name: "Hellbrunn Palace & Trick Fountains", type: "Palace Tour", description: "Delight in the playful trick water fountains of this 17th-century pleasure palace" },
    { name: "Ice Caves at Werfen Day Trip", type: "Adventure", description: "Explore the world's largest accessible ice cave, Eisriesenwelt, near Salzburg" },
    { name: "Mozart Dinner Concert", type: "Dinner Show", description: "Candlelit dinner with live Mozart performance in the historic Stiftskeller St. Peter" }
  ]
},
'schengen.austria.innsbruck': {
  description: "Innsbruck, the capital of Austria's Tyrol region, is a spectacular Alpine city where medieval Old Town charm meets world-class winter sports facilities. Surrounded by dramatic mountain peaks, the city has twice hosted the Winter Olympics and offers year-round outdoor adventures from skiing and snowboarding to hiking and mountain biking. Its famous Golden Roof, Imperial Palace, and colorful riverside houses create a picturesque cityscape, while the Nordkette cable car whisks visitors from the city center to 2,300 meters altitude in just 20 minutes.",
  attractions: [
    { name: "Nordkette Cable Car to Alpine Summit", type: "Adventure", description: "Ride from city center to 2,334m Hafelekar peak for breathtaking panoramic views" },
    { name: "Golden Roof & Old Town Walking Tour", type: "Walking Tour", description: "Explore the medieval Altstadt with its iconic gold-tiled roof and colorful buildings" },
    { name: "Swarovski Crystal Worlds Visit", type: "Attraction", description: "Dazzling art and crystal experience at the famous Swarovski headquarters in Wattens" },
    { name: "Ambras Castle Tour", type: "Castle Tour", description: "Renaissance castle with Habsburg portrait gallery and stunning hillside gardens" },
    { name: "Imperial Palace (Hofburg) Tour", type: "Palace Tour", description: "Guided tour of the former Habsburg imperial residence and its lavish state rooms" },
    { name: "Alpine Zoo & Nature Experience", type: "Nature", description: "Europe's highest-altitude zoo featuring Alpine wildlife including bears, wolves, and eagles" },
    { name: "Bergisel Ski Jump & Olympic Museum", type: "Sports Attraction", description: "Visit the striking Zaha Hadid-designed ski jump with panoramic café and Olympic history" },
    { name: "Tyrolean Evening with Folk Show", type: "Cultural Show", description: "Traditional dinner with yodeling, Schuhplattler dancing, and alphorn performances" },
    { name: "Stubai Glacier Day Trip", type: "Adventure", description: "Visit Austria's largest glacier ski area with ice cave and panoramic viewing platform" },
    { name: "Innsbruck Bike Tour Along the Inn River", type: "Bike Tour", description: "Guided cycling tour along the scenic Inn River with mountain backdrop" },
    { name: "Tyrolean Food & Market Tour", type: "Food Tour", description: "Sample regional specialties including Tiroler Gröstl, Kaspressknödel, and schnapps" },
    { name: "Hall in Tirol & Mint Tower Day Trip", type: "Day Trip", description: "Visit the medieval salt-trading town and climb the historic Münzerturm mint tower" }
  ]
},
'schengen.austria.graz': {
  description: "Graz, Austria's second-largest city and a UNESCO World Heritage Site, is a captivating blend of medieval, Renaissance, and contemporary architecture crowned by the iconic Schlossberg clock tower. The city's remarkably well-preserved Old Town features red-roofed houses, elegant courtyards, and Italy-influenced arcaded buildings reflecting centuries of cultural exchange. As a designated UNESCO City of Design, Graz boasts cutting-edge landmarks like the Kunsthaus art museum alongside traditional Styrian wine taverns, making it a dynamic destination where culinary innovation meets deep-rooted Austrian tradition.",
  attractions: [
    { name: "Schlossberg Hill & Clock Tower Tour", type: "Walking Tour", description: "Climb or ride the funicular to the iconic clock tower for panoramic city views" },
    { name: "Graz Old Town UNESCO Walking Tour", type: "Walking Tour", description: "Guided exploration of the beautifully preserved Renaissance and Gothic city center" },
    { name: "Kunsthaus Graz Modern Art Museum", type: "Museum", description: "Visit the striking 'Friendly Alien' blob-shaped contemporary art museum" },
    { name: "Eggenberg Palace & Gardens Tour", type: "Palace Tour", description: "Baroque palace with 365 windows, 24 state rooms, and beautiful landscaped gardens" },
    { name: "Styrian Wine Road Day Trip", type: "Wine Tour", description: "Visit picturesque vineyards along the South Styrian Wine Road with tastings" },
    { name: "Murinsel Island & Riverside Walk", type: "Attraction", description: "Visit the unique floating island platform on the Mur River designed by Vito Acconci" },
    { name: "Graz Farmers Market & Food Tour", type: "Food Tour", description: "Taste Styrian pumpkin seed oil, local cheeses, and traditional dishes at Kaiser-Josef-Platz" },
    { name: "Landeszeughaus Armory Museum", type: "Museum", description: "World's largest historic armory with 32,000 weapons and suits of armor" },
    { name: "Lurgrotte Cave Adventure", type: "Adventure", description: "Explore Austria's largest water-bearing cave system near Graz" },
    { name: "Austrian Open-Air Museum Stübing", type: "Museum", description: "Open-air museum showcasing traditional Austrian farmhouses from 6 centuries" },
    { name: "Graz Cathedral & Mausoleum Visit", type: "Religious", description: "Gothic cathedral with frescoes and the ornate Renaissance mausoleum of Emperor Ferdinand II" },
    { name: "Riegersburg Castle Day Trip", type: "Day Trip", description: "Visit the spectacular hilltop castle and birds of prey show in eastern Styria" }
  ]
},
'schengen.austria.linz': {
  description: "Linz, Austria's third-largest city straddling the Danube River, has undergone a remarkable transformation from an industrial center to a European Capital of Culture celebrated for its innovative arts and technology scene. The city is home to the Ars Electronica Center, a world-leading museum of future technology, and the striking Lentos Art Museum along the illuminated Danube waterfront. With its charming Baroque main square — one of Europe's largest enclosed squares — excellent Linzer Torte (the world's oldest known cake recipe), and proximity to the scenic Danube Valley, Linz offers an unexpectedly rewarding cultural experience.",
  attractions: [
    { name: "Ars Electronica Center Tour", type: "Museum", description: "Immersive experience at the world-renowned Museum of the Future with interactive exhibits" },
    { name: "Linz Old Town & Main Square Walk", type: "Walking Tour", description: "Explore one of Europe's largest enclosed Baroque squares and the charming old town" },
    { name: "Lentos Art Museum Visit", type: "Museum", description: "Modern art museum on the Danube featuring Klimt, Schiele, and Warhol works" },
    { name: "Pöstlingberg Railway & Fairy Tale Grotto", type: "Attraction", description: "Ride the steepest adhesion railway in Europe to a hilltop church and fairy tale caves" },
    { name: "Linzer Torte Baking Workshop", type: "Cooking Class", description: "Learn to make the world's oldest known cake recipe at a traditional Linz bakery" },
    { name: "Danube River Cruise from Linz", type: "River Cruise", description: "Scenic cruise through the picturesque Schlögener Schlinge Danube bend" },
    { name: "New Cathedral & Mariendom Tour", type: "Religious", description: "Visit Austria's largest church with stunning stained glass windows and neo-Gothic architecture" },
    { name: "Mauthausen Memorial Day Trip", type: "Historical Tour", description: "Sobering visit to the WWII concentration camp memorial and education center" },
    { name: "Linz Street Art & Mural Walk", type: "Art Walk", description: "Discover vibrant street art and murals throughout Linz's creative quarters" },
    { name: "St. Florian Monastery & Bruckner Tour", type: "Day Trip", description: "Visit the magnificent Augustinian monastery and tomb of composer Anton Bruckner" },
    { name: "Voestalpine Stahlwelt Steel Museum", type: "Museum", description: "Interactive museum showcasing steel production in a striking modern building" },
    { name: "Cycling the Danube Bike Path", type: "Bike Tour", description: "Ride one of Europe's most popular cycling routes along the scenic Danube Valley" }
  ]
},

// BELARUS
'schengen.belarus.minsk': {
  description: "Minsk, the capital of Belarus, is a city of grand Stalinist architecture and wide Soviet-era boulevards that tell the story of a nation rebuilt almost entirely from ruins after World War II. Independence Avenue, one of Europe's longest avenues, is lined with imposing neoclassical buildings, while the Upper Town preserves pockets of pre-war charm with Baroque churches and cobblestone squares. Despite its serious exterior, Minsk surprises visitors with a thriving underground culture scene, excellent craft beer bars, affordable Belarusian cuisine, and warm hospitality that makes it one of Eastern Europe's most intriguing and underrated capitals.",
  attractions: [
    { name: "Independence Avenue Walking Tour", type: "Walking Tour", description: "Stroll Europe's longest avenue showcasing monumental Stalinist architecture" },
    { name: "Upper Town & Trinity Hill Historical Tour", type: "Historical Tour", description: "Explore Minsk's oldest districts with Baroque churches and pre-war cobblestone streets" },
    { name: "Museum of the Great Patriotic War", type: "Museum", description: "Powerful WWII museum with interactive exhibits in a striking modern building" },
    { name: "National Library Diamond Building", type: "Attraction", description: "Visit the iconic rhombicuboctahedron-shaped library with rooftop observation deck" },
    { name: "Belarusian Cuisine Food Tour", type: "Food Tour", description: "Sample draniki potato pancakes, machanka, and kvass at traditional restaurants" },
    { name: "Island of Tears Memorial Visit", type: "Memorial", description: "Visit the poignant memorial on the Svisloch River dedicated to fallen soldiers" },
    { name: "Mir Castle & Nesvizh Palace Day Trip", type: "Day Trip", description: "UNESCO World Heritage castles with medieval fortifications and Renaissance gardens" },
    { name: "Victory Square & Soviet Minsk Tour", type: "Historical Tour", description: "Discover the Soviet legacy of Minsk including monuments, mosaics, and metro stations" },
    { name: "Minsk Metro Art Tour", type: "Art Tour", description: "Explore the beautifully decorated Soviet-era metro stations with mosaics and sculptures" },
    { name: "Loshitsa Park & Manor Estate", type: "Nature", description: "Peaceful estate with historic manor house, gardens, and walking trails" },
    { name: "Belarusian State Circus Performance", type: "Entertainment", description: "Enjoy a spectacular circus performance at one of the former USSR's finest circus venues" },
    { name: "Dudutki Folk Museum Day Trip", type: "Day Trip", description: "Interactive open-air museum showcasing traditional Belarusian crafts and rural life" }
  ]
},

// BELGIUM
'schengen.belgium.brussels': {
  description: "Brussels, the capital of Belgium and the de facto capital of the European Union, is a cosmopolitan city where ornate Art Nouveau architecture, medieval guild houses, and gleaming EU institutions create a unique urban landscape. The Grand Place, widely considered one of the world's most beautiful squares, dazzles visitors with its gilded Baroque facades, while the Royal Quarter impresses with grand palaces and world-class museums. Brussels is equally famous for its gastronomic excellence — from handcrafted praline chocolates and crispy Belgian waffles to mussels with frites and Trappist monastery beers — making it a paradise for food lovers.",
  attractions: [
    { name: "Grand Place & Historical Center Tour", type: "Walking Tour", description: "Guided tour of Brussels' UNESCO-listed main square with gilded guild houses and Town Hall" },
    { name: "Belgian Chocolate Making Workshop", type: "Cooking Class", description: "Learn to craft artisan pralines with a master chocolatier in the chocolate capital" },
    { name: "Belgian Beer Tasting Experience", type: "Beer Tour", description: "Sample Trappist ales, lambics, and craft beers at iconic Brussels beer bars" },
    { name: "Atomium & Mini-Europe Visit", type: "Attraction", description: "Tour the iconic 1958 World's Fair structure and miniature reproductions of European landmarks" },
    { name: "Art Nouveau Architecture Walking Tour", type: "Architecture Tour", description: "Discover Victor Horta's masterpieces and Brussels' stunning Art Nouveau heritage" },
    { name: "Royal Palace & Museums Quarter Tour", type: "Cultural Tour", description: "Visit the Royal Palace, Magritte Museum, and Belgian Royal Museum of Fine Arts" },
    { name: "Waffle, Chocolate & Beer Food Tour", type: "Food Tour", description: "Ultimate Brussels tasting experience with artisan waffles, pralines, and craft beers" },
    { name: "European Parliament Quarter Tour", type: "Political Tour", description: "Visit the EU Parliament, Council of Europe, and learn about European governance" },
    { name: "Manneken Pis & Old Town Legends Walk", type: "Walking Tour", description: "Discover the stories behind Brussels' famous bronze statue and hidden city legends" },
    { name: "Comic Strip Mural Walking Tour", type: "Art Walk", description: "Follow the comic strip murals trail featuring Tintin, Smurfs, and Lucky Luke" },
    { name: "Bruges Day Trip from Brussels", type: "Day Trip", description: "Full-day excursion to the fairy-tale medieval city of Bruges with canal cruise" },
    { name: "Sablon Antiques & Gourmet Quarter", type: "Shopping Tour", description: "Explore the upscale Sablon neighborhood with antique shops and luxury chocolatiers" }
  ]
},
'schengen.belgium.antwerp': {
  description: "Antwerp, Belgium's second city and the diamond capital of the world, is a dynamic port city where Renaissance splendor meets cutting-edge fashion and contemporary art. The city's medieval cathedral houses Rubens masterpieces, while the MAS museum and DIVA diamond museum represent its modern cultural ambitions. As the birthplace of Flemish painting and a current hub of avant-garde fashion — home to the legendary Antwerp Six designers — the city offers an irresistible combination of artistic heritage, trendy neighborhoods, excellent dining, and some of Europe's best shopping.",
  attractions: [
    { name: "Diamond District & DIVA Museum Tour", type: "Museum", description: "Explore the world's diamond capital and the interactive Diamond, Jewelry & Silver museum" },
    { name: "Cathedral of Our Lady & Rubens Tour", type: "Art Tour", description: "View Rubens' masterpieces in this magnificent Gothic cathedral, Antwerp's tallest building" },
    { name: "MAS Museum Rooftop Experience", type: "Museum", description: "Visit the striking Museum aan de Stroom with free rooftop panoramic city views" },
    { name: "Antwerp Fashion & Design Walk", type: "Shopping Tour", description: "Explore the fashion district and boutiques of the famous Antwerp Six designers" },
    { name: "Rubens House Museum Visit", type: "Museum", description: "Tour the impressive home and studio of Baroque master Peter Paul Rubens" },
    { name: "Grote Markt & Old Town Walking Tour", type: "Walking Tour", description: "Guided walk through Antwerp's Renaissance main square with ornate guild houses" },
    { name: "Belgian Beer & Pub Crawl Antwerp", type: "Beer Tour", description: "Sample local De Koninck Bolleke beer and Belgian ales at historic Antwerp bars" },
    { name: "Het Eilandje Harbor & Yacht Marina", type: "Walking Tour", description: "Explore the trendy revitalized harbor district with waterfront dining" },
    { name: "Antwerp Central Station Architecture Tour", type: "Architecture Tour", description: "Marvel at one of the world's most beautiful railway stations and its grand interior" },
    { name: "Plantin-Moretus Printing Museum", type: "Museum", description: "UNESCO-listed museum showcasing the world's oldest printing presses" },
    { name: "Antwerp Zoo Visit", type: "Zoo", description: "One of the world's oldest zoos, located right next to Central Station" },
    { name: "Chocolate & Waffle Tasting Tour", type: "Food Tour", description: "Visit artisan chocolatiers and waffle shops in Antwerp's charming old quarters" }
  ]
},
'schengen.belgium.ghent': {
  description: "Ghent, often called Belgium's best-kept secret, is a stunning medieval city where three rivers converge beneath the towers of ancient churches and a formidable castle. Less touristy than Bruges but equally beautiful, Ghent boasts the breathtaking Ghent Altarpiece by the Van Eyck brothers, a vibrant student-driven nightlife, and the picturesque Graslei waterfront lined with guild houses dating back to the 12th century. The city has reinvented itself as a culinary hotspot and Europe's largest car-free city center, offering an authentic Flemish experience with world-class museums, cozy brown cafés, and a creative arts scene.",
  attractions: [
    { name: "Ghent Altarpiece & St. Bavo's Cathedral", type: "Art Tour", description: "View the Van Eyck brothers' Adoration of the Mystic Lamb, one of the world's most important artworks" },
    { name: "Gravensteen Castle Tour", type: "Castle Tour", description: "Explore the imposing medieval Castle of the Counts with its torture museum and ramparts" },
    { name: "Graslei & Korenlei Waterfront Walk", type: "Walking Tour", description: "Stroll along Ghent's most photogenic medieval waterfront with stunning guild houses" },
    { name: "Ghent Canal Boat Tour", type: "Boat Tour", description: "Scenic boat cruise through Ghent's medieval waterways and under historic bridges" },
    { name: "Belgian Craft Beer Tour Ghent", type: "Beer Tour", description: "Visit local breweries and iconic Ghent beer bars including the famous Dulle Griet" },
    { name: "Ghent Street Art Walking Tour", type: "Art Walk", description: "Discover vibrant murals and graffiti in Ghent's creative Werregarenstraat alley" },
    { name: "STAM City Museum Visit", type: "Museum", description: "Interactive museum telling the story of Ghent from medieval powerhouse to modern city" },
    { name: "Patershol Medieval Quarter Tour", type: "Walking Tour", description: "Wander the atmospheric cobblestone alleys of Ghent's oldest medieval neighborhood" },
    { name: "Ghent Food Tour: Flemish Specialties", type: "Food Tour", description: "Sample waterzooi stew, cuberdons candies, and Gentse Mokken at local spots" },
    { name: "Belfry Tower Climb for Panoramic Views", type: "Landmark", description: "Climb the UNESCO-listed 91-meter Belfry for spectacular views over three towers" },
    { name: "Design Museum Gent", type: "Museum", description: "Explore Flemish and international design from the 17th century to contemporary" },
    { name: "Evening Illuminated Ghent Tour", type: "Night Tour", description: "See Ghent's medieval skyline beautifully illuminated on an atmospheric evening walk" }
  ]
},

// BOSNIA AND HERZEGOVINA
'schengen.bosniaHerzegovina.sarajevo': {
  description: "Sarajevo, the capital of Bosnia and Herzegovina, is where East meets West in the most literal sense — a city where Ottoman mosques, Austro-Hungarian boulevards, and socialist-era buildings coexist within walking distance. Known as the 'Jerusalem of Europe' for its religious diversity, Sarajevo's Baščaršija old bazaar quarter transports visitors to an Ottoman-era world of copper workshops, ćevapi grills, and steaming coffee served in traditional džezvas. The city's complex 20th-century history, including the assassination that sparked World War I and the 1990s siege, adds profound depth to a destination that impresses with its resilience, warmth, and unique cultural heritage.",
  attractions: [
    { name: "Baščaršija Old Bazaar Walking Tour", type: "Walking Tour", description: "Explore the charming Ottoman-era marketplace with copper workshops and Sebilj fountain" },
    { name: "Tunnel of Hope War Museum", type: "Museum", description: "Visit the underground tunnel used to survive the 1992-95 siege of Sarajevo" },
    { name: "Ćevapi & Bosnian Food Tour", type: "Food Tour", description: "Taste Sarajevo's famous ćevapi, burek, and Bosnian coffee at legendary local spots" },
    { name: "Sarajevo War & History Tour", type: "Historical Tour", description: "Comprehensive tour covering the 1914 assassination site, siege history, and Sniper Alley" },
    { name: "Latin Bridge & Assassination Site", type: "Historical Site", description: "Visit where Archduke Franz Ferdinand was assassinated, triggering World War I" },
    { name: "Bobsled Track at Trebević Mountain", type: "Adventure", description: "Hike to the abandoned 1984 Winter Olympics bobsled track on Mount Trebević" },
    { name: "Gazi Husrev-beg Mosque & Madrasah", type: "Religious", description: "Tour the magnificent 16th-century Ottoman mosque and Islamic cultural center" },
    { name: "Vrelo Bosne Nature Excursion", type: "Nature", description: "Visit the beautiful spring of the Bosna River with horse-drawn carriage rides" },
    { name: "Mostar & Stari Most Bridge Day Trip", type: "Day Trip", description: "Full-day trip to see the iconic reconstructed Ottoman bridge and dive into the Neretva" },
    { name: "Jewish Museum & Multi-Faith Tour", type: "Cultural Tour", description: "Explore Sarajevo's remarkable religious coexistence across four faiths in one city" },
    { name: "Yellow Fortress Sunset Viewpoint", type: "Scenic", description: "Watch the sunset over Sarajevo's valley from this historic Ottoman fortress" },
    { name: "Bosnian Coffee Ceremony Experience", type: "Cultural Experience", description: "Learn the traditional art of preparing and serving Bosnian coffee in a copper pot" }
  ]
},

// BULGARIA
'schengen.bulgaria.sofia': {
  description: "Sofia, Bulgaria's ancient capital, is one of Europe's oldest cities with a history spanning over 7,000 years, from Thracian settlements to Roman ruins now visible beneath modern streets. The city's compact center features an extraordinary mix of architectural styles — Byzantine churches, Ottoman mosques, Soviet-era monuments, and contemporary glass towers all within blocks of each other. With the stunning Mount Vitosha as its backdrop, Sofia offers an authentic Balkan experience at a fraction of Western European prices, with excellent cuisine, vibrant nightlife, natural hot springs, and some of the continent's most impressive Eastern Orthodox churches.",
  attractions: [
    { name: "Alexander Nevsky Cathedral Tour", type: "Religious", description: "Visit one of the largest Eastern Orthodox cathedrals in the world with stunning golden domes" },
    { name: "Sofia Free Walking Tour & History", type: "Walking Tour", description: "Explore Sofia's 7,000-year history from Thracian ruins to communist-era landmarks" },
    { name: "Boyana Church UNESCO Site Visit", type: "Religious", description: "See extraordinary medieval frescoes predating the Italian Renaissance by a century" },
    { name: "Vitosha Mountain Hiking Tour", type: "Adventure", description: "Half-day hike on Mount Vitosha with panoramic views over Sofia and the Balkans" },
    { name: "Roman Ruins & Serdica Complex Tour", type: "Historical Tour", description: "Explore ancient Roman ruins discovered beneath Sofia's modern streets" },
    { name: "Bulgarian Food & Rakia Tasting", type: "Food Tour", description: "Sample shopska salad, banitsa, kebapche, and traditional Bulgarian rakia liquor" },
    { name: "National Palace of Culture Visit", type: "Cultural Tour", description: "Tour Bulgaria's largest cultural complex surrounded by scenic gardens" },
    { name: "Rila Monastery UNESCO Day Trip", type: "Day Trip", description: "Visit Bulgaria's most famous monastery with stunning frescoes in the Rila Mountains" },
    { name: "Sofia Street Art & Alternative Tour", type: "Art Walk", description: "Discover Sofia's vibrant street art scene and underground culture" },
    { name: "St. George Rotunda Church Visit", type: "Religious", description: "See Bulgaria's oldest surviving building — a 4th-century Roman church with medieval frescoes" },
    { name: "Ivan Vazov National Theatre Tour", type: "Cultural Tour", description: "Visit Bulgaria's grandest theater and explore the surrounding cultural quarter" },
    { name: "Sofia Mineral Baths & Hot Springs Tour", type: "Wellness", description: "Visit the historic Central Mineral Baths building and taste Sofia's natural hot spring water" }
  ]
},

// CROATIA
'schengen.croatia.zagreb': {
  description: "Zagreb, Croatia's underrated capital, is a charming Central European city where medieval Upper Town cobblestones lead to grand Austro-Hungarian Lower Town boulevards and a vibrant cafe culture rivals that of Vienna or Prague. The city's iconic blue-tiled roof of St. Mark's Church, the atmospheric Dolac farmers market, and the quirky Museum of Broken Relationships are just a few reasons travelers are discovering this hidden gem. With excellent food, affordable prices, and a lively arts scene, Zagreb serves as a perfect gateway to Croatia's stunning coastline while offering its own compelling reasons to linger.",
  attractions: [
    { name: "Upper Town & St. Mark's Walking Tour", type: "Walking Tour", description: "Explore Zagreb's medieval core with the iconic tiled-roof church and Stone Gate" },
    { name: "Museum of Broken Relationships Visit", type: "Museum", description: "Tour the world-famous collection of objects from failed love stories" },
    { name: "Dolac Market & Croatian Food Tour", type: "Food Tour", description: "Taste štrukli, kulen sausage, and rakija at Zagreb's vibrant rooftop market" },
    { name: "Mirogoj Cemetery Walking Tour", type: "Walking Tour", description: "Visit one of Europe's most beautiful cemeteries with arcaded walkways and monuments" },
    { name: "Zagreb Funicular & Lotrščak Tower", type: "Attraction", description: "Ride the world's shortest funicular and hear the daily cannon firing from the tower" },
    { name: "Croatian Naive Art Museum Tour", type: "Museum", description: "Discover Croatia's unique naive art movement in this charming Upper Town gallery" },
    { name: "Zagreb Craft Beer & Bar Hopping", type: "Beer Tour", description: "Sample Croatia's booming craft beer scene at Tkalčićeva street's best bars" },
    { name: "Plitvice Lakes National Park Day Trip", type: "Day Trip", description: "UNESCO World Heritage site with 16 cascading turquoise lakes and waterfalls" },
    { name: "Maksimir Park & Zagreb Zoo Visit", type: "Nature", description: "Explore Zagreb's oldest public park with lakes, forests, and the city zoo" },
    { name: "Zagreb Cathedral & Kaptol Quarter Tour", type: "Walking Tour", description: "Visit Croatia's tallest building and the historic ecclesiastical quarter" },
    { name: "Croatian Wine Tasting Experience", type: "Wine Tour", description: "Sample premium Croatian wines including Graševina and Plavac Mali" },
    { name: "Tkalčićeva Street Evening Walk", type: "Night Tour", description: "Experience Zagreb's buzzing cafe and nightlife street in the city center" }
  ]
},
'schengen.croatia.split': {
  description: "Split, Croatia's second-largest city, is built in and around the spectacular ruins of Roman Emperor Diocletian's 4th-century palace — a living ancient monument where locals have made their homes for 1,700 years. The UNESCO-listed palace complex is a labyrinth of marble walkways, underground chambers, and medieval structures, while outside the ancient walls, a buzzing Riva waterfront promenade stretches along the stunning Adriatic coast. Split perfectly combines ancient history with Mediterranean lifestyle, offering excellent seafood restaurants, lively beach bars, and easy access to the gorgeous islands of Hvar, Brač, and Vis.",
  attractions: [
    { name: "Diocletian's Palace Guided Tour", type: "Historical Tour", description: "Expert-led tour of the 1,700-year-old Roman palace complex, a UNESCO World Heritage Site" },
    { name: "Game of Thrones Filming Locations", type: "Film Tour", description: "Visit Split's GOT filming spots including the cellars used as Meereen's dungeons" },
    { name: "Split Old Town & Riva Walking Tour", type: "Walking Tour", description: "Explore the charming streets within the palace walls and the waterfront promenade" },
    { name: "Hvar Island Day Trip by Speedboat", type: "Day Trip", description: "Fast boat to the glamorous island of Hvar with lavender fields and beach stops" },
    { name: "Blue Cave & Five Islands Boat Tour", type: "Boat Tour", description: "Visit the famous Blue Cave on Biševo and swim at five stunning island locations" },
    { name: "Krka Waterfalls National Park Trip", type: "Day Trip", description: "Full-day trip to swim beneath the spectacular cascading waterfalls of Krka" },
    { name: "Split Food & Wine Walking Tour", type: "Food Tour", description: "Taste Dalmatian peka, fresh seafood, and local wines in old town restaurants" },
    { name: "Marjan Hill Hiking & Beach Tour", type: "Adventure", description: "Hike through Marjan Forest Park to panoramic viewpoints and hidden beaches" },
    { name: "Cathedral of St. Domnius Tower Climb", type: "Landmark", description: "Climb the Romanesque bell tower for stunning views over Split and the islands" },
    { name: "Underground Palace Cellars Tour", type: "Historical Tour", description: "Explore the remarkably preserved underground cellars of Diocletian's Palace" },
    { name: "Dalmatian Cooking Class", type: "Cooking Class", description: "Learn to prepare traditional Dalmatian dishes with local ingredients" },
    { name: "Sunset Sailing Cruise on the Adriatic", type: "Sailing", description: "Evening catamaran cruise along Split's coastline with wine and snacks" }
  ]
},
'schengen.croatia.dubrovnik': {
  description: "Dubrovnik, the 'Pearl of the Adriatic,' is a breathtaking medieval walled city perched on dramatic cliffs above the crystal-clear Adriatic Sea. Its UNESCO World Heritage Old Town, encircled by imposing 13th-century walls, contains marble-paved streets, Baroque churches, elegant palaces, and Europe's third-oldest pharmacy. Famously used as King's Landing in Game of Thrones, Dubrovnik has captured the world's imagination, but beyond the screen, it offers world-class gastronomy, stunning island escapes, and one of the most scenic cable car rides in the Mediterranean.",
  attractions: [
    { name: "Dubrovnik City Walls Walk", type: "Walking Tour", description: "Walk the complete circuit of the iconic 2km medieval walls with spectacular sea views" },
    { name: "Game of Thrones Complete Tour", type: "Film Tour", description: "Visit all major filming locations from King's Landing including the Walk of Shame" },
    { name: "Elafiti Islands & Blue Sea Cruise", type: "Boat Tour", description: "Island-hopping cruise to Koločep, Lopud, and Šipan with swimming and lunch" },
    { name: "Stradun & Old Town Walking Tour", type: "Walking Tour", description: "Guided stroll along Dubrovnik's famous marble main street and hidden courtyards" },
    { name: "Cable Car to Mount Srđ", type: "Scenic", description: "Panoramic cable car ride to the summit for breathtaking views over the old town and islands" },
    { name: "Kayaking Around the City Walls", type: "Adventure", description: "Sea kayaking tour around Dubrovnik's walls with cave exploration and Lokrum stop" },
    { name: "Lokrum Island Nature Excursion", type: "Day Trip", description: "Visit the forested island with a botanical garden, Dead Sea lake, and peacocks" },
    { name: "Dubrovnik Oysters & Wine Tour", type: "Food Tour", description: "Boat trip to Ston for oyster tasting at Europe's oldest salt pans and wine in Pelješac" },
    { name: "Rector's Palace Museum Tour", type: "Museum", description: "Explore the Gothic-Renaissance palace and the Cultural History Museum collection" },
    { name: "Buža Bar Cliff Swimming Experience", type: "Beach", description: "Swim from the famous cliff bar built into Dubrovnik's outer walls" },
    { name: "Montenegro Day Trip from Dubrovnik", type: "Day Trip", description: "Visit Kotor Bay, Perast, and Our Lady of the Rocks in neighboring Montenegro" },
    { name: "Sunset Panoramic Sailing Cruise", type: "Sailing", description: "Luxury catamaran cruise around Old Town with champagne and Adriatic sunset" }
  ]
},

// CYPRUS
'schengen.cyprus.nicosia': {
  description: "Nicosia is the world's last divided capital, split between the Republic of Cyprus and Northern Cyprus by the UN-controlled Green Line. The city's old quarter is encircled by well-preserved Venetian walls and is home to a captivating mix of Byzantine churches, Gothic cathedrals, and Ottoman mosques. Stroll down Ledra Street to cross between two cultures, explore excellent museums, and savor Cypriot meze at traditional tavernas. Nicosia's vibrant arts scene makes it an unmissable Mediterranean gem.",
  attractions: [
    { name: "Old Nicosia Walking Tour & Green Line Crossing", type: "Walking Tour", description: "Explore the divided capital's old quarter, cross the UN buffer zone, and discover centuries of history on both sides" },
    { name: "Cypriot Meze & Wine Tasting Experience", type: "Food Tour", description: "Sample traditional Cypriot meze dishes paired with local wines from the Troodos mountain vineyards" },
    { name: "Troodos Mountains & Painted Churches Day Trip", type: "Day Trip", description: "Visit UNESCO-listed Byzantine painted churches and charming mountain villages in the Troodos range" },
    { name: "Cyprus Museum & Archaeological Treasures Tour", type: "Museum", description: "Discover 9,000 years of Cypriot civilization through world-class archaeological collections" },
    { name: "Venetian Walls & Famagusta Gate Cultural Walk", type: "Cultural Tour", description: "Walk along the impressive 16th-century Venetian fortifications and visit the restored Famagusta Gate arts center" },
    { name: "Lefkara Village & Traditional Lace-Making Tour", type: "Day Trip", description: "Visit the picturesque village of Lefkara famous for its UNESCO-recognized lace and silver craftsmanship" },
    { name: "Buyuk Han & North Nicosia Ottoman Heritage Tour", type: "Historical Tour", description: "Explore the beautifully restored Ottoman caravanserai and historic mosques of North Nicosia" },
    { name: "Nicosia Street Art & Contemporary Culture Walk", type: "Walking Tour", description: "Discover vibrant murals and galleries in the creative neighborhoods near the buffer zone" },
    { name: "Commandaria Wine Route & Village Experience", type: "Wine Tour", description: "Tour the region producing the world's oldest named wine and taste the legendary sweet Commandaria" },
    { name: "Kourion Ancient City & Seaside Ruins Day Trip", type: "Day Trip", description: "Explore the spectacular Greco-Roman ruins of Kourion perched on dramatic coastal cliffs" },
    { name: "Hamam Omerye Ottoman Bath Experience", type: "Cultural Tour", description: "Relax in a beautifully restored 14th-century Ottoman bathhouse in the heart of old Nicosia" },
    { name: "Nicosia Cycling Tour Through Old & New City", type: "Bike Tour", description: "Pedal through the contrast of ancient walled city streets and modern Nicosia's tree-lined boulevards" }
  ]
},

// CZECH REPUBLIC
'schengen.czechRepublic.prague': {
  description: "Prague, the City of a Hundred Spires, enchants visitors with its fairy-tale skyline of Gothic towers, baroque domes, and art nouveau facades reflected in the Vltava River. Charles Bridge, Prague Castle, and the medieval Old Town Square with its famous Astronomical Clock form one of Europe's most photogenic cityscapes. The city boasts a thriving beer culture, world-class classical music performances, and a labyrinth of cobblestone lanes hiding cozy pubs and galleries. Prague's affordability and beauty make it one of Central Europe's most beloved destinations.",
  attractions: [
    { name: "Prague Castle & St. Vitus Cathedral Guided Tour", type: "Historical Tour", description: "Explore the world's largest ancient castle complex and the stunning Gothic cathedral overlooking the city" },
    { name: "Old Town, Jewish Quarter & Charles Bridge Walk", type: "Walking Tour", description: "Stroll through centuries of history from the Astronomical Clock to the storied Charles Bridge and Jewish Quarter" },
    { name: "Czech Beer Tasting & Historic Pubs Tour", type: "Food Tour", description: "Sample world-famous Czech lagers and craft brews at legendary Prague pubs and microbreweries" },
    { name: "Vltava River Dinner Cruise with Live Music", type: "Boat Tour", description: "Glide past illuminated landmarks on an evening river cruise with Czech cuisine and jazz or classical music" },
    { name: "Kutná Hora & Bone Church Day Trip", type: "Day Trip", description: "Visit the UNESCO-listed medieval silver-mining town and the hauntingly decorated Sedlec Ossuary" },
    { name: "Prague Jewish Heritage & Synagogues Tour", type: "Cultural Tour", description: "Discover the remarkably preserved Jewish Quarter with its historic synagogues and Old Jewish Cemetery" },
    { name: "Czech Cuisine Cooking Class & Market Visit", type: "Food Tour", description: "Shop at local markets and learn to prepare traditional dishes like svíčková and trdelník" },
    { name: "Petřín Hill & Lesser Town Walking Tour", type: "Walking Tour", description: "Climb Petřín Tower for panoramic views and wander the charming baroque streets of Malá Strana" },
    { name: "Classical Concert at Municipal House or Church", type: "Cultural Tour", description: "Enjoy a world-class classical performance in one of Prague's magnificent art nouveau or baroque venues" },
    { name: "Český Krumlov Fairytale Town Day Trip", type: "Day Trip", description: "Explore the UNESCO-listed medieval town with its stunning castle, riverside setting, and Renaissance theater" },
    { name: "Communist History & Cold War Bunker Tour", type: "Historical Tour", description: "Uncover Prague's communist-era past with visits to Cold War bunkers and the Museum of Communism" },
    { name: "Prague by Night Guided Photography Walk", type: "Walking Tour", description: "Capture the magical atmosphere of illuminated spires and bridges on an evening photography tour" }
  ]
},

// ESTONIA
'schengen.estonia.tallinn': {
  description: "Tallinn is a captivating blend of medieval grandeur and cutting-edge digital innovation, boasting one of Europe's best-preserved old towns wrapped in 13th-century limestone walls and watchtowers. The UNESCO-listed Old Town features winding cobblestone lanes, Gothic spires, and enchanting merchant houses that transport visitors back to Hanseatic trading days. Beyond the ancient walls, Tallinn surprises with a vibrant startup scene, trendy Kalamaja neighborhood, and the futuristic Telliskivi Creative City. Estonian cuisine, featuring rye bread, smoked fish, and craft spirits, adds delicious depth to any visit.",
  attractions: [
    { name: "Medieval Old Town Walking Tour", type: "Walking Tour", description: "Wander through Tallinn's fairy-tale UNESCO quarter with its Gothic churches, guild halls, and secret courtyards" },
    { name: "Estonian Food & Craft Beer Tasting Tour", type: "Food Tour", description: "Sample traditional Estonian dishes like black bread, smoked eel, and local craft beers in Old Town taverns" },
    { name: "Kadriorg Palace & KUMU Art Museum Visit", type: "Museum", description: "Explore Peter the Great's baroque palace and Estonia's premier art museum set in beautiful parklands" },
    { name: "Tallinn's KGB & Soviet History Walking Tour", type: "Historical Tour", description: "Uncover Cold War secrets at the former KGB headquarters and learn about Estonia's path to independence" },
    { name: "Lahemaa National Park & Manor Houses Day Trip", type: "Day Trip", description: "Discover pristine Estonian nature, coastal bogs, and elegant Baltic German manor estates" },
    { name: "Telliskivi Creative City & Kalamaja Hipster Tour", type: "Cultural Tour", description: "Explore Tallinn's trendiest neighborhoods filled with street art, design shops, and artisan cafés" },
    { name: "Medieval Dining Experience at Olde Hansa", type: "Food Tour", description: "Feast on authentic medieval recipes by candlelight in a faithfully recreated Hanseatic merchant's house" },
    { name: "Tallinn City Walls & Towers Exploration", type: "Walking Tour", description: "Walk along the remarkably intact medieval ramparts and climb ancient watchtowers for panoramic views" },
    { name: "Estonian Sauna & Wellness Ritual Experience", type: "Cultural Tour", description: "Experience the cherished Estonian tradition of smoke sauna rituals followed by local herbal teas" },
    { name: "Day Trip to Pärnu & Estonian Riviera", type: "Day Trip", description: "Visit Estonia's charming summer capital with its sandy beach, spa culture, and art nouveau villas" },
    { name: "Tallinn Sea Fortress & Patarei Prison Tour", type: "Historical Tour", description: "Explore the haunting seaside fortress that served as a prison through both Nazi and Soviet occupations" },
    { name: "E-Estonia Digital Society & Innovation Tour", type: "Cultural Tour", description: "Discover how Tallinn became the world's most digitally advanced society with e-residency and digital governance" }
  ]
},

// LATVIA
'schengen.latvia.riga': {
  description: "Riga, Latvia's vibrant capital on the Daugava River, dazzles visitors with Europe's finest collection of art nouveau architecture, featuring over 800 ornately decorated building facades. The UNESCO-listed Old Town is a medieval treasure of cobblestone streets, the soaring St. Peter's Church, and the iconic House of the Blackheads. Riga's Central Market, housed in former Zeppelin hangars, is one of Europe's largest and most colorful. The city's thriving cultural scene, acclaimed restaurants, and lively nightlife make it one of the Baltic's most exciting destinations.",
  attractions: [
    { name: "Art Nouveau Architecture Walking Tour", type: "Walking Tour", description: "Marvel at Riga's unrivaled collection of ornate Jugendstil facades in the Alberta and Elizabetes street district" },
    { name: "Riga Central Market & Latvian Food Tasting", type: "Food Tour", description: "Explore massive Zeppelin hangars transformed into Europe's largest market and sample smoked fish, rye bread, and more" },
    { name: "Old Riga Medieval Heritage Walking Tour", type: "Walking Tour", description: "Discover the UNESCO-listed Old Town with its Gothic churches, guild houses, and the iconic Blackheads House" },
    { name: "Day Trip to Jūrmala Beach & Spa Resort", type: "Day Trip", description: "Visit Latvia's beloved seaside resort town with its long white-sand beach and charming wooden villas" },
    { name: "Latvian Black Balsam & Cocktail Experience", type: "Food Tour", description: "Learn the story of Latvia's legendary herbal liqueur and enjoy creative cocktails in Old Riga's best bars" },
    { name: "Rundale Palace & Baroque Gardens Excursion", type: "Day Trip", description: "Visit the stunning 'Versailles of the Baltics,' a masterpiece of baroque and rococo architecture" },
    { name: "KGB Building & Soviet Occupation Museum Tour", type: "Historical Tour", description: "Explore the chilling former KGB headquarters known as the Corner House and learn about Soviet-era Latvia" },
    { name: "Riga Canal Boat Tour & City Parks Cruise", type: "Boat Tour", description: "Glide through Riga's scenic canal past parks, bridges, and the National Opera on a relaxing boat tour" },
    { name: "Sigulda & Gauja National Park Adventure", type: "Adventure", description: "Discover Latvia's 'Switzerland' with its medieval castles, sandstone caves, and cable car over the Gauja Valley" },
    { name: "Latvian Cooking Class & Traditional Dinner", type: "Food Tour", description: "Learn to prepare classic Latvian dishes like grey peas with bacon, potato pancakes, and layered rye bread" },
    { name: "St. Peter's Church Tower & Panoramic Views", type: "Historical Tour", description: "Ascend the tower of this 13th-century Gothic masterpiece for breathtaking 360-degree views of Riga" },
    { name: "Riga's Wooden Architecture & Kalnciema Quarter", type: "Cultural Tour", description: "Explore the charming wooden neighborhood of Kalnciema with its artisan markets and traditional Latvian crafts" }
  ]
},

// LIECHTENSTEIN
'schengen.liechtenstein.vaduz': {
  description: "Vaduz, the tiny capital of Liechtenstein, is nestled in the Rhine Valley between Switzerland and Austria, overshadowed dramatically by the hilltop Vaduz Castle, residence of the reigning princely family. Despite being one of Europe's smallest capitals, Vaduz punches above its weight with world-class museums, including the Kunstmuseum Liechtenstein and the Postage Stamp Museum. The surrounding Alpine scenery offers superb hiking and skiing, while the pedestrian-friendly city center features excellent restaurants and duty-free shopping. This microstate gem offers a unique blend of royal heritage and mountain charm.",
  attractions: [
    { name: "Vaduz Castle & Royal Heritage Walking Tour", type: "Walking Tour", description: "Walk up to the iconic hilltop castle and learn about the princely family's 300-year rule of Liechtenstein" },
    { name: "Kunstmuseum Liechtenstein Modern Art Visit", type: "Museum", description: "Explore the striking black cube museum housing the princely family's impressive international art collection" },
    { name: "Liechtenstein Postage Stamp Museum Tour", type: "Museum", description: "Discover the fascinating philatelic history of this tiny nation, famous worldwide for its collectible stamps" },
    { name: "Rhine Valley Wine Trail & Tasting", type: "Wine Tour", description: "Sample the prince's own wines and other local vintages along Liechtenstein's scenic vineyard trails" },
    { name: "Malbun Alpine Village & Mountain Hiking", type: "Adventure", description: "Hike through pristine Alpine meadows in Liechtenstein's mountain resort with panoramic peak views" },
    { name: "Three Countries Bike Tour: Liechtenstein-Austria-Switzerland", type: "Bike Tour", description: "Cycle through three countries in one day along the scenic Rhine River cycling path" },
    { name: "Treasure Chamber & National Museum Visit", type: "Museum", description: "View the princely family's priceless treasures including moon rocks, Fabergé eggs, and rare artworks" },
    { name: "Vaduz to Malbun Scenic Mountain Drive", type: "Day Trip", description: "Wind through spectacular Alpine scenery from the capital to the charming mountain village of Malbun" },
    { name: "Liechtenstein Passport Stamp & City Exploration", type: "Walking Tour", description: "Get the famous souvenir passport stamp and explore Vaduz's compact pedestrian center and public art" },
    { name: "Gutenberg Castle & Balzers Village Tour", type: "Historical Tour", description: "Visit the medieval hilltop castle in Balzers and explore the charming southern Liechtenstein village" },
    { name: "Fürstensteig Ridge Trail Alpine Hike", type: "Adventure", description: "Tackle Liechtenstein's most famous mountain trail along dramatic ridgelines with breathtaking valley views" },
    { name: "Liechtenstein Culinary Experience & Local Cuisine", type: "Food Tour", description: "Savor hearty Alpine cuisine including käsknöpfle, ribel, and locally produced cheese and wine" }
  ]
},

// LITHUANIA
'schengen.lithuania.vilnius': {
  description: "Vilnius boasts one of Europe's largest and best-preserved baroque old towns, a UNESCO World Heritage site brimming with ornate churches, cobblestone streets, and hidden courtyards. The city's bohemian Užupis district famously declared itself an independent republic, complete with its own constitution and quirky artistic spirit. Vilnius surprises with its rich multicultural heritage spanning Lithuanian, Polish, Jewish, and Russian influences, visible in its architecture, cuisine, and traditions. From the hilltop Gediminas Tower to cutting-edge street art, Vilnius is the Baltic's most underrated capital.",
  attractions: [
    { name: "Vilnius Old Town & Baroque Churches Tour", type: "Walking Tour", description: "Explore Europe's largest baroque old town with its stunning churches, university courtyards, and Gates of Dawn" },
    { name: "Užupis Republic & Street Art Walking Tour", type: "Cultural Tour", description: "Visit the self-declared bohemian republic, read its playful constitution, and discover vibrant street art" },
    { name: "Gediminas Tower & Castle Hill Panoramic Tour", type: "Historical Tour", description: "Climb to the iconic hilltop tower for sweeping views and learn about Lithuania's grand ducal history" },
    { name: "Lithuanian Cepelinai Cooking Class", type: "Food Tour", description: "Learn to make Lithuania's beloved national dish of stuffed potato dumplings and other traditional recipes" },
    { name: "Trakai Island Castle & Lake Day Trip", type: "Day Trip", description: "Visit the fairy-tale red-brick castle on an island in Lake Galvė and taste Karaite pastries" },
    { name: "Vilnius Jewish Heritage & Holocaust Memorial Tour", type: "Historical Tour", description: "Trace the history of the 'Jerusalem of the North' through its remaining synagogue, memorials, and stories" },
    { name: "Lithuanian Craft Beer & Pub Crawl", type: "Food Tour", description: "Discover Lithuania's thriving craft beer scene with tastings of unique farmhouse ales and modern brews" },
    { name: "Hill of Crosses & Šiauliai Day Trip", type: "Day Trip", description: "Visit the extraordinary pilgrimage site covered in over 200,000 crosses, a powerful symbol of Lithuanian faith" },
    { name: "KGB Museum & Soviet Bunker Experience", type: "Historical Tour", description: "Explore the former KGB prison and visit a Cold War nuclear bunker for an immersive Soviet-era experience" },
    { name: "Vilnius Food Market & Local Gastronomy Tour", type: "Food Tour", description: "Taste your way through Halės Market and modern Vilnius eateries featuring smoked meats, cheeses, and šakotis" },
    { name: "Kernavė Archaeological Site Day Trip", type: "Day Trip", description: "Explore the UNESCO-listed ancient capital of Lithuania with its impressive hillfort mounds and museum" },
    { name: "Hot Air Balloon Flight Over Vilnius Old Town", type: "Adventure", description: "Soar above the baroque spires and red rooftops of Vilnius on a magical hot air balloon ride" }
  ]
},

// LUXEMBOURG
'schengen.luxembourg.luxembourgCity': {
  description: "Luxembourg City is a striking fortress capital perched on dramatic gorges and cliffs, where medieval casemates and ancient ramparts blend seamlessly with the gleaming glass towers of Europe's financial hub. The UNESCO-listed old quarters of the Ville Haute and the lower Grund district, connected by spectacular viaducts and elevators, create one of Europe's most dramatically situated cities. Despite its small size, Luxembourg City offers world-class museums, Michelin-starred dining, and a remarkably multicultural atmosphere with residents from over 170 nationalities. The surrounding countryside of the Müllerthal region provides stunning hiking through Luxembourg's Little Switzerland.",
  attractions: [
    { name: "Bock Casemates & Fortress Walking Tour", type: "Historical Tour", description: "Explore the UNESCO-listed underground tunnels carved into the cliff that once sheltered thousands of soldiers" },
    { name: "Ville Haute Old Town & Grand Ducal Palace Walk", type: "Walking Tour", description: "Stroll through the elegant upper city past the Grand Duke's palace, Notre-Dame Cathedral, and Place d'Armes" },
    { name: "Grund Valley & Alzette River Quarter Tour", type: "Walking Tour", description: "Descend to the charming lower city along the Alzette River with its abbey, gardens, and riverside cafés" },
    { name: "Müllerthal Trail & Little Switzerland Hike", type: "Adventure", description: "Hike through dramatic sandstone rock formations, lush forests, and cascading waterfalls in Luxembourg's countryside" },
    { name: "Luxembourg Wine & Moselle Valley Day Trip", type: "Wine Tour", description: "Tour vineyards along the scenic Moselle River and taste Luxembourg's excellent Riesling and crémant wines" },
    { name: "MUDAM Modern Art & Philharmonie Culture Tour", type: "Museum", description: "Visit the I.M. Pei-designed modern art museum and the world-class Philharmonie concert hall" },
    { name: "Luxembourg City Culinary & Market Tour", type: "Food Tour", description: "Discover the multicultural food scene with tastings of judd mat gaardebounen, kniddelen, and French-influenced cuisine" },
    { name: "Vianden Castle & Our River Valley Excursion", type: "Day Trip", description: "Visit one of Europe's most beautiful feudal castles perched above the picturesque town of Vianden" },
    { name: "Chemin de la Corniche Panoramic Walk", type: "Walking Tour", description: "Walk along 'Europe's most beautiful balcony,' offering spectacular views over the Alzette Valley and Grund" },
    { name: "Luxembourg American Cemetery & WWII Memorial", type: "Historical Tour", description: "Pay respects at General Patton's final resting place and learn about Luxembourg's liberation in WWII" },
    { name: "Echternach Abbey & Dancing Procession Tour", type: "Cultural Tour", description: "Visit Luxembourg's oldest town with its ancient abbey and learn about the UNESCO-listed dancing procession" },
    { name: "Luxembourg by Night Illumination Walk", type: "Walking Tour", description: "Experience the dramatically lit fortress walls, bridges, and spires of Luxembourg City after dark" }
  ]
},

// MALTA
'schengen.malta.valletta': {
  description: "Valletta, the fortress capital of Malta built by the Knights of St. John, is a UNESCO World Heritage city packed with baroque masterpieces, grand palaces, and dramatic harbor fortifications on a compact peninsula. Despite being one of Europe's smallest capitals, Valletta is extraordinarily rich in art and history, with Caravaggio paintings in St. John's Co-Cathedral and 16th-century auberges lining its grid-pattern streets. The city has undergone a vibrant renaissance with Renzo Piano's striking Parliament building and the restored Royal Opera House. Honey-colored limestone facades, panoramic harbor views, and warm Mediterranean hospitality make Valletta utterly unforgettable.",
  attractions: [
    { name: "St. John's Co-Cathedral & Caravaggio Tour", type: "Historical Tour", description: "Marvel at the lavishly decorated cathedral housing two original Caravaggio masterpieces and ornate knight's chapels" },
    { name: "Grand Master's Palace & State Rooms Visit", type: "Palace Tour", description: "Tour the magnificent palace of the Knights of Malta with its armory, tapestries, and painted corridors" },
    { name: "Valletta Grand Harbour Boat Tour", type: "Boat Tour", description: "Cruise the spectacular fortified harbors that have shaped Malta's history from the Phoenicians to WWII" },
    { name: "Malta's Three Cities & Vittoriosa Walking Tour", type: "Walking Tour", description: "Cross the harbor to explore the atmospheric medieval cities of Birgu, Senglea, and Cospicua" },
    { name: "Maltese Food & Pastizzi Tasting Tour", type: "Food Tour", description: "Sample traditional pastizzi, rabbit stew, and Maltese wines in Valletta's characterful eateries and bakeries" },
    { name: "Upper Barrakka Gardens & Saluting Battery", type: "Cultural Tour", description: "Watch the daily cannon salute from the stunning terraced gardens with panoramic Grand Harbour views" },
    { name: "Malta at War Museum & WWII Shelter Tour", type: "Museum", description: "Descend into underground wartime shelters and learn about Malta's heroic resistance during the WWII siege" },
    { name: "Mdina Ancient Capital & Rabat Day Trip", type: "Day Trip", description: "Explore the 'Silent City' of Mdina with its medieval walls, palaces, and catacombs in nearby Rabat" },
    { name: "Hypogeum & Megalithic Temples Prehistoric Tour", type: "Historical Tour", description: "Visit the extraordinary UNESCO-listed underground temple and Malta's ancient megalithic structures" },
    { name: "Blue Grotto & Marsaxlokk Fishing Village Trip", type: "Day Trip", description: "Boat through the luminous Blue Grotto sea caves and visit the colorful traditional fishing village" },
    { name: "Fort St. Elmo & National War Museum", type: "Museum", description: "Explore the star-shaped fortress that bore the brunt of the Great Siege of 1565 and its military collections" },
    { name: "Valletta Sunset Wine & Dine Experience", type: "Food Tour", description: "Enjoy Maltese wines and Mediterranean cuisine at a rooftop restaurant as the sun sets over the Grand Harbour" }
  ]
},
'schengen.malta.gozo': {
  description: "Gozo, Malta's smaller sister island, is a tranquil rural paradise of terraced hillsides, ancient temples, and dramatic coastal scenery that feels a world away from busy Malta. The island's crown jewel is the Citadella in Victoria, a fortified hilltop city with cathedral views stretching across the entire island to the sea. Gozo is home to the megalithic Ġgantija Temples, among the world's oldest freestanding structures, predating Stonehenge and the Egyptian pyramids. Crystal-clear bays, excellent diving, traditional farmhouses, and some of the Mediterranean's finest artisanal cheese make Gozo an enchanting escape.",
  attractions: [
    { name: "Citadella & Victoria Fortified City Tour", type: "Historical Tour", description: "Explore the ancient fortified hilltop citadel with its cathedral, museums, and panoramic island views" },
    { name: "Ġgantija Temples & Prehistoric Heritage Visit", type: "Historical Tour", description: "Marvel at 5,600-year-old megalithic temples that predate Stonehenge and the pyramids of Giza" },
    { name: "Gozo Coastal Cliffs & Blue Hole Diving", type: "Adventure", description: "Dive or snorkel at the famous Blue Hole and Inland Sea, among the Mediterranean's best dive sites" },
    { name: "Gozo Island Jeep Safari & Hidden Gems Tour", type: "Adventure", description: "Discover Gozo's secret bays, remote chapels, and dramatic landscapes on an off-road island adventure" },
    { name: "Ramla Bay & Calypso's Cave Beach Excursion", type: "Day Trip", description: "Visit Gozo's most beautiful red-sand beach and the legendary cave linked to Homer's Odyssey" },
    { name: "Gozo Farmhouse Cheese & Wine Tasting", type: "Food Tour", description: "Visit traditional farmhouses to taste handmade ġbejna cheese, sundried tomatoes, and local Gozitan wines" },
    { name: "Xlendi Bay & Dwejra Coastal Walking Tour", type: "Walking Tour", description: "Hike along spectacular coastal paths from the charming inlet of Xlendi to the dramatic Dwejra coastline" },
    { name: "Gozo Boat Tour & Sea Caves Exploration", type: "Boat Tour", description: "Circle the island by boat discovering hidden caves, secluded bays, and the stunning Fungus Rock" },
    { name: "Ta' Pinu Basilica & Spiritual Heritage Tour", type: "Cultural Tour", description: "Visit the magnificent national shrine basilica set amid rural countryside, a major pilgrimage destination" },
    { name: "Gozo Salt Pans & Traditional Crafts Tour", type: "Cultural Tour", description: "See centuries-old salt harvesting at Marsalforn and explore traditional Gozitan lace and glass-blowing" },
    { name: "Comino Blue Lagoon Day Trip from Gozo", type: "Boat Tour", description: "Take a short boat ride to the stunning turquoise Blue Lagoon of tiny Comino island for swimming" },
    { name: "Gozo Sunset Kayaking & Cliff Adventure", type: "Adventure", description: "Paddle along Gozo's dramatic coastline at sunset, exploring sea caves and hidden coves by kayak" }
  ]
},

// MOLDOVA
'schengen.moldova.chisinau': {
  description: "Chișinău, Moldova's leafy capital, is an intriguing blend of Soviet-era grandeur, bustling markets, and an emerging wine and food scene that rewards adventurous travelers. The city's wide boulevards are lined with parks, Orthodox cathedrals, and a fascinating mix of neoclassical and brutalist architecture that tells the story of Moldova's complex history. Moldova is Europe's hidden wine powerhouse, home to the Guinness-record Mileștii Mici wine cellars, and Chișinău serves as the gateway to extraordinary vineyard experiences. Off the usual tourist trail, Chișinău offers authentic Eastern European charm and incredible value.",
  attractions: [
    { name: "Chișinău Soviet Architecture & History Tour", type: "Walking Tour", description: "Explore the city's grand Soviet-era boulevards, monuments, and brutalist buildings with a local historian guide" },
    { name: "Mileștii Mici Underground Wine City Tour", type: "Wine Tour", description: "Descend into the world's largest wine cellar, a vast underground city holding nearly two million bottles" },
    { name: "Cricova Winery Sparkling Wine Experience", type: "Wine Tour", description: "Tour another legendary underground wine city and taste award-winning sparkling wines in decorated tunnels" },
    { name: "Chișinău Central Market & Moldovan Food Tour", type: "Food Tour", description: "Browse the vibrant Piața Centrală and taste traditional mămăligă, plăcinte, and Moldovan charcuterie" },
    { name: "Orheiul Vechi Cave Monastery Day Trip", type: "Day Trip", description: "Visit the stunning open-air archaeological complex with its cliff-carved Orthodox monastery above the Răut River" },
    { name: "Transnistria & Tiraspol Soviet Time Capsule Tour", type: "Day Trip", description: "Cross into the breakaway region frozen in Soviet time, with Lenin statues, hammer-and-sickle emblems, and unique culture" },
    { name: "National Museum of Ethnography & Folk Art", type: "Museum", description: "Discover Moldova's rich folk traditions through textiles, ceramics, woodcarving, and traditional costumes" },
    { name: "Moldovan Monastery Trail & Painted Churches", type: "Cultural Tour", description: "Visit beautifully frescoed Orthodox monasteries including Căpriana, Hâncu, and Curchi in the countryside" },
    { name: "Chișinău Parks & Cathedral Walking Tour", type: "Walking Tour", description: "Stroll through Chișinău's green heart past the Nativity Cathedral, Triumphal Arch, and Ștefan cel Mare Park" },
    { name: "Traditional Moldovan Cooking & Wine Pairing", type: "Food Tour", description: "Learn to cook authentic Moldovan dishes like sarmale and zeamă paired with local wines at a village home" },
    { name: "Gagauzia Autonomous Region Cultural Excursion", type: "Day Trip", description: "Explore the unique Turkic-speaking autonomous region with its distinct culture, cuisine, and wine traditions" },
    { name: "Chișinău Nightlife & Wine Bar Crawl", type: "Cultural Tour", description: "Experience Chișinău's lively evening scene from sophisticated wine bars to vibrant local nightclubs" }
  ]
},

// MONACO
'schengen.monaco.monteCarlo': {
  description: "Monte Carlo, the glamorous jewel of Monaco, exudes luxury and sophistication from its legendary casino square to its yacht-filled harbor, all set against a stunning Riviera backdrop. This tiny principality packs extraordinary experiences into just two square kilometers, from the ornate Monte Carlo Casino and the Oceanographic Museum to the winding streets of the old Le Rocher quarter. Monte Carlo is synonymous with the Formula One Grand Prix, whose circuit runs through the city streets, and with a lifestyle of elegant hotels, Michelin-starred restaurants, and exclusive boutiques. Despite its opulent reputation, Monaco's public gardens, coastal paths, and rich cultural offerings are accessible to all visitors.",
  attractions: [
    { name: "Monte Carlo Casino & Belle Époque Tour", type: "Cultural Tour", description: "Explore the legendary casino's ornate salons designed by Charles Garnier and learn its glamorous history" },
    { name: "Prince's Palace & Old Town Le Rocher Walk", type: "Palace Tour", description: "Watch the changing of the guard and tour the hilltop palace, then wander the charming medieval old quarter" },
    { name: "Oceanographic Museum & Aquarium Visit", type: "Museum", description: "Discover the world-class marine museum founded by Prince Albert I, perched dramatically on a clifftop" },
    { name: "Monaco Grand Prix Circuit Walking Tour", type: "Walking Tour", description: "Walk the legendary F1 street circuit through the famous tunnel, hairpin, and harbor chicane" },
    { name: "Monaco Harbor & Luxury Yacht Cruise", type: "Boat Tour", description: "Cruise past billionaires' superyachts and admire Monaco's spectacular skyline from the Mediterranean" },
    { name: "Monte Carlo Food & Gourmet Tasting Tour", type: "Food Tour", description: "Taste Monegasque specialties like barbagiuan, socca, and refined French-Italian cuisine in elegant settings" },
    { name: "Exotic Garden & Prehistoric Cave Visit", type: "Adventure", description: "Explore the clifftop botanical garden of rare succulents and descend into an ancient stalactite cave" },
    { name: "Èze Village & French Riviera Day Trip", type: "Day Trip", description: "Visit the stunning medieval hilltop village of Èze with its exotic garden and panoramic sea views" },
    { name: "Monaco Japanese Garden & Seaside Promenade", type: "Walking Tour", description: "Stroll through the serene zen garden and along the beautiful Larvotto Beach promenade" },
    { name: "Monte Carlo Shopping & Luxury Experience Tour", type: "Cultural Tour", description: "Browse the Carré d'Or golden square featuring the world's most prestigious fashion and jewelry boutiques" },
    { name: "Nice & Monaco Coastal Helicopter Transfer", type: "Adventure", description: "Experience a thrilling seven-minute helicopter flight between Nice and Monaco along the stunning coastline" },
    { name: "Monaco Wine & Champagne Evening Experience", type: "Wine Tour", description: "Indulge in a guided champagne and fine wine tasting at an elegant Monte Carlo venue with harbor views" }
  ]
},

// MONTENEGRO
'schengen.montenegro.kotor': {
  description: "Kotor is a breathtaking medieval town nestled at the head of Europe's southernmost fjord-like bay, enclosed by dramatic mountain walls and remarkably intact 12th-century fortifications. The UNESCO-listed Old Town is a labyrinth of narrow limestone streets, hidden squares, Romanesque churches, and Venetian palaces that evoke centuries of maritime tradition. Climbing the 1,350 steps of the ancient fortress walls to the Castle of San Giovanni rewards with one of the most spectacular panoramic views in all of Europe. Kotor's stunning Bay of Kotor setting, vibrant café culture, and accessibility to pristine Montenegrin nature make it an unmissable Adriatic destination.",
  attractions: [
    { name: "Old Town Walls & San Giovanni Fortress Climb", type: "Adventure", description: "Climb 1,350 ancient steps up the mountainside fortifications for jaw-dropping views over the Bay of Kotor" },
    { name: "Kotor Old Town Medieval Walking Tour", type: "Walking Tour", description: "Navigate the atmospheric labyrinth of medieval squares, Venetian palaces, and Romanesque churches" },
    { name: "Bay of Kotor Boat Tour & Our Lady of the Rocks", type: "Boat Tour", description: "Cruise the stunning fjord-like bay and visit the iconic island church built on an artificial reef" },
    { name: "Perast Village & Baroque Palaces Excursion", type: "Day Trip", description: "Explore the enchanting former maritime town with its elegant stone palaces and waterfront promenades" },
    { name: "Montenegrin Food & Wine Tasting Tour", type: "Food Tour", description: "Sample local specialties including smoked ham, cheese, seafood, and robust Montenegrin Vranac wines" },
    { name: "Lovćen National Park & Mausoleum Day Trip", type: "Day Trip", description: "Drive the serpentine road to the mountaintop mausoleum of Petar II Petrović-Njegoš for epic panoramas" },
    { name: "Kotor Cats Walking Tour & Cat Museum", type: "Cultural Tour", description: "Discover Kotor's beloved cat culture through its famous feline residents, cat shops, and quirky museum" },
    { name: "Kayaking the Bay of Kotor at Sunset", type: "Adventure", description: "Paddle through the tranquil waters of Europe's southernmost fjord as the mountains glow at sunset" },
    { name: "Blue Cave & Submarine Tunnel Boat Adventure", type: "Boat Tour", description: "Visit the luminous Blue Cave at Luštica peninsula and explore a secret Yugoslav-era submarine tunnel" },
    { name: "Durmitor National Park & Tara Canyon Day Trip", type: "Day Trip", description: "Journey to Montenegro's dramatic mountain park with Europe's deepest canyon and pristine glacial lakes" },
    { name: "Maritime Museum & Kotor Naval Heritage Tour", type: "Museum", description: "Explore centuries of Kotor's seafaring history in a historic palace overlooking the Old Town square" },
    { name: "Kotor to Cetinje Old Royal Capital Scenic Drive", type: "Day Trip", description: "Drive the legendary 25-hairpin-turn road over the mountain to Montenegro's former royal capital" }
  ]
},
'schengen.montenegro.budva': {
  description: "Budva is the crown jewel of the Montenegrin Riviera, combining a beautifully preserved medieval Old Town with lively beaches, vibrant nightlife, and a stunning Adriatic coastline. The fortified Stari Grad perches on a rocky peninsula, its terracotta rooftops and stone churches creating a postcard-perfect scene against azure waters. Budva's coastline features some of the Adriatic's finest beaches, from the bustling Mogren Beach to the iconic Sveti Stefan island resort nearby. Known as the 'Montenegrin Miami,' Budva comes alive in summer with open-air festivals, beach clubs, and a lively restaurant and bar scene.",
  attractions: [
    { name: "Budva Old Town & Citadela Walking Tour", type: "Walking Tour", description: "Explore the 2,500-year-old fortified old town with its medieval churches, citadel, and charming squares" },
    { name: "Sveti Stefan Island & Royal Beach Excursion", type: "Day Trip", description: "Visit the iconic fortified island village and relax on the pristine beaches of the Aman resort coastline" },
    { name: "Budva Riviera Beach Hopping Boat Tour", type: "Boat Tour", description: "Cruise along the stunning coastline stopping at hidden coves, Jaz Beach, and secluded swimming spots" },
    { name: "Montenegrin Seafood & Wine Waterfront Dinner", type: "Food Tour", description: "Feast on fresh Adriatic seafood and local Montenegrin wines at a traditional konoba by the harbor" },
    { name: "Mogren Beach & Coastal Cave Walk", type: "Adventure", description: "Walk the scenic cliffside path to the beautiful Mogren beaches and explore a natural coastal cave" },
    { name: "Budva Sunset Kayaking & Paddleboarding", type: "Adventure", description: "Paddle along the medieval walls at golden hour, exploring sea caves and hidden beaches by kayak or SUP" },
    { name: "Cetinje Royal Capital & Ostrog Monastery Trip", type: "Day Trip", description: "Visit Montenegro's historic royal capital and the spectacular cliff-embedded Ostrog Monastery" },
    { name: "Skadar Lake National Park & Wine Day Trip", type: "Day Trip", description: "Cruise the Balkans' largest lake spotting pelicans and visit family wineries in the Crmnica valley" },
    { name: "Budva Nightlife & Beach Club Experience", type: "Cultural Tour", description: "Experience Budva's legendary summer nightlife scene at top beach bars and open-air clubs" },
    { name: "Kotor Bay & Blue Cave Boat Adventure", type: "Boat Tour", description: "Full-day boat trip through the Bay of Kotor with stops at the Blue Cave, Perast, and Our Lady of the Rocks" },
    { name: "Budva Old Town Sunset & Photography Tour", type: "Walking Tour", description: "Capture the golden light on medieval walls and Adriatic waters with expert photography guidance" },
    { name: "Zip Line & Adventure Park at Ivanova Korita", type: "Adventure", description: "Soar across the longest zip line in Montenegro and tackle treetop obstacle courses in Lovćen's forests" }
  ]
},

// NETHERLANDS
'schengen.netherlands.amsterdam': {
  description: "Amsterdam, the enchanting Dutch capital, weaves together Golden Age canal houses, world-class museums, and a famously progressive culture into one of Europe's most compelling cities. The UNESCO-listed canal ring is lined with over 1,500 monumental buildings, while the Museumplein houses the Rijksmuseum, Van Gogh Museum, and Stedelijk Museum within steps of each other. Beyond the museums, Amsterdam thrives with diverse neighborhoods from the bohemian Jordaan to the multicultural De Pijp, each offering unique markets, cafés, and street life. The city's flat geography and excellent cycling infrastructure make it the world's most bike-friendly capital.",
  attractions: [
    { name: "Anne Frank House & Jewish Heritage Tour", type: "Historical Tour", description: "Visit the poignant secret annex where Anne Frank hid during WWII and explore Amsterdam's Jewish history" },
    { name: "Rijksmuseum & Dutch Masters Guided Tour", type: "Museum", description: "Discover Rembrandt's Night Watch, Vermeer's Milkmaid, and other Golden Age masterpieces with an expert guide" },
    { name: "Van Gogh Museum Skip-the-Line Experience", type: "Museum", description: "Explore the world's largest collection of Van Gogh's paintings, drawings, and letters" },
    { name: "Amsterdam Canal Cruise & City Highlights", type: "Boat Tour", description: "Glide through the UNESCO-listed canal ring past Golden Age mansions, houseboats, and historic bridges" },
    { name: "Jordaan Neighborhood Food & Culture Walk", type: "Food Tour", description: "Taste Dutch specialties like stroopwafels, bitterballen, and aged Gouda in Amsterdam's most charming quarter" },
    { name: "Keukenhof Tulip Gardens Day Trip (Seasonal)", type: "Day Trip", description: "Visit the world's most famous flower garden with seven million tulips, daffodils, and hyacinths in bloom" },
    { name: "Amsterdam Bike Tour Along Canals & Parks", type: "Bike Tour", description: "Cycle like a local through Vondelpark, the canal ring, and hidden neighborhoods on a guided bike tour" },
    { name: "Heineken Experience & Dutch Beer Tasting", type: "Cultural Tour", description: "Tour the original Heineken brewery and enjoy interactive exhibits and beer tastings in the tasting rooms" },
    { name: "Zaanse Schans Windmills & Volendam Day Trip", type: "Day Trip", description: "Visit iconic Dutch windmills, traditional wooden houses, a cheese farm, and the picturesque fishing village" },
    { name: "Red Light District History & Culture Walk", type: "Walking Tour", description: "Explore the oldest part of Amsterdam with a guide explaining the neighborhood's complex history and culture" },
    { name: "Albert Cuyp Market & De Pijp Quarter Tour", type: "Food Tour", description: "Browse Amsterdam's largest and liveliest street market in the multicultural De Pijp neighborhood" },
    { name: "A'DAM Tower Swing & Amsterdam North Exploration", type: "Adventure", description: "Ride Europe's highest swing over the IJ river and explore the hip creative spaces of Amsterdam North" }
  ]
},
'schengen.netherlands.rotterdam': {
  description: "Rotterdam is Europe's most architecturally daring city, rebuilt from WWII devastation into a showcase of bold modern design featuring Cubic Houses, the Markthal, and the striking Erasmus Bridge. Home to Europe's largest port, Rotterdam pulses with a gritty, creative energy completely distinct from Amsterdam, attracting innovators, foodies, and architecture enthusiasts from around the world. The city's diverse neighborhoods like Katendrecht and Delfshaven offer world-class street food, cutting-edge galleries, and a thriving multicultural food scene. Rotterdam's ambitious skyline continues to evolve, making it a living laboratory of contemporary urban design.",
  attractions: [
    { name: "Rotterdam Architecture Walking Tour", type: "Walking Tour", description: "Explore the city's bold modern landmarks including Cube Houses, Markthal, and the Central Station" },
    { name: "Markthal Food Hall & Dutch Tasting Tour", type: "Food Tour", description: "Browse the spectacular horseshoe-shaped market hall and taste Dutch and international street food delicacies" },
    { name: "Kinderdijk Windmills UNESCO Day Trip", type: "Day Trip", description: "Visit the iconic network of 19 historic windmills at the Netherlands' most famous UNESCO World Heritage site" },
    { name: "Erasmus Bridge & Water Taxi Harbor Tour", type: "Boat Tour", description: "Cruise Rotterdam's massive harbor past the iconic swan-shaped bridge and Europe's busiest port facilities" },
    { name: "Kunsthal & Museum Boijmans Van Beuningen Art Tour", type: "Museum", description: "Explore world-class art collections and the groundbreaking publicly accessible Depot art storage facility" },
    { name: "Delfshaven Historic Quarter Walking Tour", type: "Walking Tour", description: "Discover Rotterdam's only surviving pre-war neighborhood where the Pilgrims departed for America in 1620" },
    { name: "Katendrecht Food & Fenix Food Factory Tour", type: "Food Tour", description: "Explore the hip former docklands neighborhood and its artisanal food hall in a converted warehouse" },
    { name: "Euromast Tower Panoramic & Abseil Experience", type: "Adventure", description: "Ascend Rotterdam's 185-meter observation tower and optionally abseil or zipline down for an adrenaline rush" },
    { name: "Delft Blue Pottery & Historic Delft Day Trip", type: "Day Trip", description: "Visit the charming canal town of Delft, tour the Royal Delft pottery factory, and see Vermeer's hometown" },
    { name: "Rotterdam Street Art & Graffiti Culture Tour", type: "Cultural Tour", description: "Discover massive murals and cutting-edge street art across Rotterdam's diverse creative neighborhoods" },
    { name: "SS Rotterdam Ship Tour & History Experience", type: "Historical Tour", description: "Board the beautifully restored former flagship of the Holland-America Line for a maritime heritage tour" },
    { name: "Rotterdam by Bike & Kralingse Plas Lake Tour", type: "Bike Tour", description: "Cycle through Rotterdam's innovative architecture, waterfront promenades, and peaceful urban parklands" }
  ]
},

// NORTH MACEDONIA
'schengen.northMacedonia.skopje': {
  description: "Skopje, the capital of North Macedonia, is a fascinatingly eclectic city where ancient Ottoman bazaars sit alongside neoclassical statues and brutalist landmarks rebuilt after the devastating 1963 earthquake. The Old Bazaar, one of the largest and oldest in the Balkans, is a vibrant maze of artisan workshops, mosques, and traditional eateries serving kebapi and tavče gravče. Across the Stone Bridge, the Skopje 2014 project transformed the city center with monumental statues, fountains, and grand government buildings that spark lively debate. Skopje serves as a gateway to stunning Lake Ohrid, Matka Canyon, and the rich heritage of ancient Macedonia.",
  attractions: [
    { name: "Old Bazaar & Ottoman Heritage Walking Tour", type: "Walking Tour", description: "Explore one of the Balkans' oldest and largest bazaars with its mosques, hammams, and artisan workshops" },
    { name: "Skopje Fortress Kale & City Panoramic Tour", type: "Historical Tour", description: "Climb the ancient hilltop fortress for sweeping city views and learn about Skopje's layered history" },
    { name: "Matka Canyon Boat Ride & Cave Exploration", type: "Adventure", description: "Cruise through the breathtaking Matka Canyon gorge and explore the stalactite-filled Vrelo Cave" },
    { name: "Macedonian Food Tour & Rakija Tasting", type: "Food Tour", description: "Taste traditional kebapi, tavče gravče, ajvar, and fiery homemade rakija in the Old Bazaar and beyond" },
    { name: "Lake Ohrid UNESCO Day Trip", type: "Day Trip", description: "Visit one of Europe's oldest and deepest lakes with its medieval churches, fortress, and crystal-clear waters" },
    { name: "Skopje 2014 Monuments & Modern City Walk", type: "Walking Tour", description: "Discover the controversial neoclassical makeover of Skopje's center with its grand statues and fountains" },
    { name: "Mother Teresa Memorial House & Legacy Tour", type: "Cultural Tour", description: "Visit the memorial museum honoring Skopje's most famous daughter, Nobel Peace Prize laureate Mother Teresa" },
    { name: "Museum of the Macedonian Struggle & History", type: "Museum", description: "Explore the dramatic wax-figure museum chronicling North Macedonia's fight for independence and identity" },
    { name: "Macedonian Wine Route & Tikveš Winery Tour", type: "Wine Tour", description: "Tour the famous Tikveš wine region and taste award-winning Vranec and other Macedonian varietals" },
    { name: "Kokino Megalithic Observatory Day Trip", type: "Day Trip", description: "Visit the remarkable 3,800-year-old astronomical observatory recognized by NASA as an ancient sacred site" },
    { name: "Stone Bridge & City Center Night Illumination", type: "Walking Tour", description: "Experience Skopje's dramatically lit monuments, fountains, and bridges on an evening city walk" },
    { name: "Mavrovo National Park & Monastery Excursion", type: "Day Trip", description: "Discover North Macedonia's largest national park with its mountain scenery and the lakeside St. Naum Monastery" }
  ]
}
,
'schengen.northMacedonia.ohrid': {
  description: 'Ohrid is a jewel of the Balkans, nestled on the shores of one of Europe\'s oldest and deepest lakes. This UNESCO World Heritage city boasts over 365 churches, earning it the title "Jerusalem of the Balkans." Wander through cobblestone streets lined with traditional architecture, explore ancient amphitheaters, and relax on pristine lakeside beaches. The shimmering turquoise waters and surrounding mountains create a breathtaking backdrop for history, culture, and natural beauty.',
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
  ]
},
'schengen.poland.krakow': {
  description: 'Kraków is Poland\'s cultural capital, a city where medieval grandeur meets vibrant modern life. The stunning Main Market Square, Europe\'s largest medieval town square, pulses with energy day and night. From the royal Wawel Castle to the somber history of nearby Auschwitz, Kraków offers profound depth and beauty. Its thriving arts scene, legendary pierogi, and the bohemian Kazimierz district make it one of Europe\'s most captivating destinations.',
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
  ]
},
'schengen.poland.warsaw': {
  description: 'Warsaw is a city of remarkable resilience, rebuilt from near-total destruction after World War II into a dynamic European capital. The meticulously reconstructed Old Town, a UNESCO World Heritage Site, stands as a testament to Polish determination. Modern skyscrapers contrast with baroque palaces and socialist-realist architecture, creating a uniquely layered cityscape. Warsaw\'s thriving food scene, world-class museums, and buzzing nightlife make it an increasingly popular destination.',
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
  ]
},
'schengen.poland.gdansk': {
  description: 'Gdańsk is a stunning Baltic port city where colorful merchant houses line cobblestoned streets along the Motława River. This historic Hanseatic trading hub played a pivotal role in modern history as the birthplace of the Solidarity movement that helped end communism. Its painstakingly rebuilt Old Town showcases magnificent Gothic and Renaissance architecture. Amber shops glitter on every corner, earning Gdańsk its reputation as the world\'s amber capital.',
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
  ]
},
'schengen.portugal.lisbon': {
  description: 'Lisbon captivates visitors with its sun-drenched hills, pastel-colored buildings, and melancholic fado music drifting through narrow alleyways. The Portuguese capital effortlessly blends centuries of maritime heritage with contemporary creativity and a thriving culinary scene. Ride the iconic Tram 28 through historic neighborhoods, feast on custard tarts in Belém, and watch the sunset paint the Tagus River golden. Lisbon\'s warmth, affordability, and authentic charm make it one of Europe\'s most beloved cities.',
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
  ]
},
'schengen.portugal.porto': {
  description: 'Porto enchants visitors with its dramatic riverside setting, blue-tiled churches, and world-famous port wine cellars lining the Douro River. This UNESCO-listed city cascades down steep hillsides to the waterfront Ribeira district, where colorful buildings create one of Europe\'s most photographed scenes. Cross the iconic Dom Luís I Bridge for sweeping views and dive into the Vila Nova de Gaia wine lodges. Porto\'s honest character, superb seafood, and artistic soul make it utterly irresistible.',
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
  ]
},
'schengen.portugal.algarve': {
  description: 'The Algarve is Portugal\'s sun-soaked southern coast, famous for its dramatic golden cliffs, hidden sea caves, and some of Europe\'s finest beaches. From the iconic Benagil Cave to the rugged beauty of Cape St. Vincent, the westernmost point of continental Europe, the landscape is breathtaking. Charming whitewashed towns like Lagos and Tavira offer rich Moorish heritage and outstanding fresh seafood. With over 300 days of sunshine, the Algarve is a year-round paradise for beach lovers and adventurers.',
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
  ]
},
'schengen.romania.bucharest': {
  description: 'Bucharest is a city of fascinating contrasts, where Belle Époque elegance coexists with brutal communist-era architecture and a pulsating modern energy. Once known as "Little Paris," the Romanian capital still boasts grand boulevards, ornate palaces, and leafy parks. The massive Palace of Parliament, the world\'s heaviest building, dominates the skyline as a monument to excess. Today, Bucharest thrives with creative neighborhoods, vibrant nightlife, and some of Eastern Europe\'s best dining.',
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
  ]
},
'schengen.romania.brasov': {
  description: 'Brașov is a stunning medieval Saxon city nestled in a valley surrounded by the forested Carpathian Mountains. Its beautifully preserved old town features the imposing Black Church, colorful baroque facades, and the iconic Hollywood-style BRAȘOV sign on Tampa Mountain. As the gateway to Transylvania, Brașov offers easy access to Dracula\'s castle at Bran and fairytale Peleș Castle in Sinaia. The city perfectly blends medieval charm, mountain adventure, and Romanian hospitality.',
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
  ]
},
'schengen.serbia.belgrade': {
  description: 'Belgrade is a city of raw energy and enduring spirit, standing proudly at the confluence of the Danube and Sava rivers. The Serbian capital\'s turbulent history is written in the walls of the ancient Kalemegdan Fortress, while its legendary nightlife pulses through floating river clubs called splavovi. Bohemian Skadarlija Street echoes with live music and the aroma of grilled ćevapi. Belgrade\'s authentic, unpolished charm and warm hospitality create an unforgettable Balkan experience.',
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
  ]
},
'schengen.serbia.noviSad': {
  description: 'Novi Sad is Serbia\'s charming second city, known as the "Athens of Serbia" for its rich cultural life and intellectual heritage. The mighty Petrovaradin Fortress overlooks the Danube, hosting the famous EXIT music festival each summer. Strolling through the elegant city center reveals Habsburg-era architecture, cozy cafés, and a relaxed Mediterranean-like atmosphere. As the 2022 European Capital of Culture, Novi Sad has blossomed into a vibrant destination blending history with contemporary creativity.',
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
  ]
},
'schengen.slovakia.bratislava': {
  description: 'Bratislava is a compact and charming capital perched on the banks of the Danube, where Central European elegance meets a youthful, unpretentious vibe. The fairy-tale castle overlooks a pastel-colored old town filled with quirky statues, cozy wine bars, and excellent restaurants. As a former coronation city of the Kingdom of Hungary, Bratislava boasts a rich Habsburg heritage hidden behind its modest exterior. Its proximity to Vienna makes it perfect for a day trip, though it richly rewards a longer stay.',
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
  ]
},
'schengen.slovakia.highTatras': {
  description: 'The High Tatras are the smallest alpine mountain range in the world, offering dramatic peaks, glacial lakes, and pristine wilderness within a remarkably compact area. Often called "the smallest big mountains," these stunning peaks along the Slovak-Polish border rise sharply to nearly 2,700 meters. Crystal-clear mountain lakes, cascading waterfalls, and well-marked hiking trails make this a paradise for outdoor enthusiasts year-round. Charming mountain villages provide cozy bases for skiing, hiking, and reconnecting with nature.',
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
  ]
},
'schengen.ukraine.kyiv': {
  description: 'Kyiv is a city of golden domes, ancient monasteries, and indomitable spirit, standing proudly on the banks of the Dnieper River. The Ukrainian capital\'s rich heritage spans over 1,500 years, from the founding of Kyivan Rus to its modern rebirth as a dynamic European city. The UNESCO-listed Kyiv Pechersk Lavra monastery complex and the magnificent St. Sophia\'s Cathedral showcase extraordinary Byzantine art and architecture. Kyiv\'s creative energy, emerging food scene, and resilient character leave a lasting impression.',
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
  ]
},
'schengen.ukraine.lviv': {
  description: 'Lviv is Western Ukraine\'s cultural gem, a UNESCO-listed city where Habsburg grandeur meets Ukrainian soul. Its enchanting old town abounds with ornate churches, atmospheric coffee houses, and cobblestoned squares that evoke a bygone Central European elegance. Known as Ukraine\'s coffee capital, Lviv takes its café culture seriously, with themed coffee houses hidden behind mysterious doorways. The city\'s thriving arts scene, chocolate workshops, and legendary hospitality make it a captivating off-the-beaten-path destination.',
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
  ]
},
'schengen.unitedKingdom.london': {
  description: 'London is a world capital of culture, history, and innovation, where ancient royal traditions blend seamlessly with cutting-edge modernity. From the Tower of London to the Tate Modern, from Buckingham Palace to Borough Market, every corner tells a story spanning two millennia. The city\'s extraordinary diversity fuels one of the world\'s greatest food scenes and a cultural calendar that never stops. London\'s iconic skyline, world-class museums, and vibrant neighborhoods make every visit uniquely rewarding.',
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
  ]
},
'schengen.unitedKingdom.edinburgh': {
  description: 'Edinburgh is a city of dramatic beauty, where a medieval Old Town and elegant Georgian New Town perch upon volcanic hills overlooking the Firth of Forth. The Scottish capital\'s skyline is dominated by the imposing Edinburgh Castle, while the atmospheric Royal Mile cascades down to the Palace of Holyroodhouse below. As the birthplace of the world\'s largest arts festival, Edinburgh pulses with creative energy year-round. Its rich literary heritage, whisky tradition, and stunning natural setting make it endlessly enchanting.',
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
  ]
},
'schengen.unitedKingdom.cotswolds': {
  description: 'The Cotswolds is England\'s most enchanting countryside region, a rolling landscape of honey-colored stone villages, thatched cottages, and gentle hills designated as an Area of Outstanding Natural Beauty. Quintessentially English villages like Bibury, Castle Combe, and Bourton-on-the-Water look as though they\'ve stepped from a storybook. Ancient churches, charming tea rooms, and winding country lanes invite leisurely exploration. The Cotswolds offers a timeless escape into pastoral beauty just a short journey from London.',
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
  ]
},
'schengen.unitedKingdom.manchester': {
  description: 'Manchester is a city of pioneering spirit, from the Industrial Revolution to splitting the atom, from the birth of the computer to the explosion of Britpop. This energetic northern powerhouse boasts world-class football stadiums, a legendary music heritage, and a creative quarter in the Northern Quarter that buzzes with independent shops and street art. The city\'s ambitious regeneration has transformed its Victorian warehouses into trendy restaurants, galleries, and bars. Manchester\'s friendly character and cultural dynamism make it quintessentially compelling.',
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
  ]
},
'schengen.unitedKingdom.liverpool': {
  description: 'Liverpool is a city of extraordinary cultural richness, famous worldwide as the birthplace of The Beatles and home to one of Europe\'s most impressive waterfronts, a UNESCO World Heritage Site. The Royal Albert Dock houses world-class museums including Tate Liverpool, while the iconic Liver Building watches over the Mersey. Liverpool\'s passionate sporting culture, witty locals, and thriving arts scene create an atmosphere unlike anywhere else in Britain. This is a city that wears its heart proudly on its sleeve.',
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
  ]
},
'schengen.unitedKingdom.glasgow': {
  description: 'Glasgow is Scotland\'s largest city and a powerhouse of art, architecture, and irrepressible character. The city\'s Victorian and Art Nouveau heritage, shaped by visionaries like Charles Rennie Mackintosh, creates a stunning architectural tapestry. World-class museums including the Kelvingrove and Riverside Museum are completely free, while the West End\'s leafy lanes overflow with independent cafés and vintage shops. Glasgow\'s legendary friendliness, vibrant music scene, and bold creative spirit make it one of Britain\'s most exciting cities.',
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
  ]
},
'schengen.unitedKingdom.birmingham': {
  description: 'Birmingham is Britain\'s second city and a vibrant multicultural metropolis at the heart of England. More miles of canals than Venice wind through a cityscape mixing Victorian industrial heritage with bold contemporary architecture like the Bullring and Library of Birmingham. The Jewellery Quarter preserves centuries of craft tradition, while the Balti Triangle serves some of the finest South Asian cuisine in Europe. Birmingham\'s central location, diverse communities, and ambitious cultural renaissance make it a rewarding urban destination.',
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
  ]
},
'schengen.slovenia.ljubljana': {
  description: 'Ljubljana is one of Europe\'s most charming small capitals, a green and pedestrian-friendly city where a fairy-tale castle crowns a forested hill above a picturesque old town. The Ljubljanica River winds past café-lined embankments, crossed by the iconic Triple Bridge and the whimsical Dragon Bridge. Architect Jože Plečnik\'s unique vision shaped much of the city\'s distinctive character, blending Art Nouveau, baroque, and classical influences. Ljubljana\'s vibrant food scene, open-air markets, and warm atmosphere make it utterly delightful.',
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
  ]
},
'schengen.slovenia.bled': {
  description: 'Lake Bled is Slovenia\'s most iconic destination, a breathtaking alpine lake with an enchanting island church rising from its emerald-green waters. The medieval Bled Castle perches dramatically on a cliff above the lake, offering sweeping views of the Julian Alps backdrop. A traditional pletna boat ride to Bled Island, where you can ring the wishing bell, is a magical experience. Whether hiking the surrounding trails, tasting the famous Bled cream cake, or simply soaking in the views, Lake Bled is pure fairy-tale perfection.',
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
  ]
},
'schengen.spain.barcelona': {
  description: 'Barcelona is a city that dazzles with Gaudí\'s surreal architecture, golden Mediterranean beaches, and an infectious creative energy that fills every barrio. The unfinished Sagrada Família basilica soars skyward as one of the world\'s most extraordinary buildings, while Park Güell offers whimsical mosaics and sweeping city views. Las Ramblas buzzes with life day and night, and the Gothic Quarter hides medieval treasures around every corner. Barcelona\'s world-class cuisine, vibrant nightlife, and Catalan cultural pride make it endlessly captivating.',
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
  ]
}
,
// SPAIN
'schengen.spain.madrid': {
  description: "Madrid, Spain\'s majestic capital, pulses with an irresistible energy that draws visitors into its grand boulevards, world-renowned museums, and sun-drenched plazas. Home to the legendary Prado Museum, the Royal Palace, and the sprawling Retiro Park, the city seamlessly blends imperial grandeur with a modern cosmopolitan spirit. Madrid\'s culinary scene is extraordinary — from bustling tapas bars in La Latina to Michelin-starred dining rooms — and its legendary nightlife keeps the city alive well past midnight, making it one of Europe\'s most vibrant and rewarding destinations.",
  attractions: [
    { name: "Prado Museum Skip-the-Line Guided Tour", type: "Museum", description: "Priority access to Spain\'s premier art museum featuring Velázquez, Goya, and El Greco masterpieces" },
    { name: "Royal Palace of Madrid Tour", type: "Palace Tour", description: "Explore Europe\'s largest functioning royal palace with its opulent throne room and armoury" },
    { name: "Madrid Tapas & Wine Evening Tour", type: "Food Tour", description: "Taste authentic tapas and local wines at hidden gems in La Latina and Cava Baja" },
    { name: "Retiro Park & Crystal Palace Walk", type: "Walking Tour", description: "Stroll through Madrid\'s beloved park, visit the Crystal Palace, and enjoy the boating lake" },
    { name: "Reina Sofía Museum: Picasso\'s Guernica", type: "Museum", description: "Guided tour of Spain\'s modern art museum centered around Picasso\'s iconic anti-war masterpiece" },
    { name: "Toledo Full-Day Excursion", type: "Day Trip", description: "Visit the medieval \'City of Three Cultures\' with its cathedral, synagogues, and El Greco art" },
    { name: "Flamenco Show with Dinner in Madrid", type: "Cultural Show", description: "Authentic tablao flamenco performance paired with traditional Spanish dinner and sangria" },
    { name: "Santiago Bernabéu Stadium Tour", type: "Guided Tour", description: "Behind-the-scenes tour of Real Madrid\'s legendary stadium including trophy room and pitch" },
    { name: "Madrid Street Art & Malasaña Tour", type: "Walking Tour", description: "Discover Madrid\'s alternative side through the bohemian Malasaña neighborhood and street art" },
    { name: "Segovia & Ávila Day Trip", type: "Day Trip", description: "Visit Segovia\'s Roman aqueduct and Ávila\'s medieval walled city on a guided excursion" },
    { name: "Mercado de San Miguel Food Tour", type: "Food Tour", description: "Sample gourmet Spanish delicacies at Madrid\'s stunning iron-and-glass market near Plaza Mayor" },
    { name: "Madrid Sunset Bike Tour", type: "Bike Tour", description: "Cycle through Madrid\'s historic center and parks as the golden hour lights up the city" }
  ]
},
'schengen.spain.seville': {
  description: "Seville, the passionate heart of Andalusia, enchants visitors with its intoxicating blend of Moorish architecture, flamenco rhythms, and orange blossom-scented streets. The city\'s crown jewels — the magnificent Alcázar Palace, the soaring Gothic cathedral housing Columbus\'s tomb, and the iconic Plaza de España — showcase centuries of artistic and cultural splendor. Seville\'s lively barrios buzz with tapas bars, sherry bodegas, and impromptu flamenco performances, while the banks of the Guadalquivir River provide a romantic backdrop for evening paseos that capture the very essence of Spanish life.",
  attractions: [
    { name: "Royal Alcázar Skip-the-Line Tour", type: "Palace Tour", description: "Priority access to Seville\'s stunning Mudéjar palace with its intricate tilework and lush gardens" },
    { name: "Seville Cathedral & Giralda Tower Tour", type: "Historical Tour", description: "Explore the world\'s largest Gothic cathedral and climb the iconic Giralda bell tower" },
    { name: "Flamenco Show in Triana Quarter", type: "Cultural Show", description: "Authentic flamenco performance in the birthplace of this passionate Andalusian art form" },
    { name: "Tapas & Sherry Walking Tour", type: "Food Tour", description: "Taste traditional Sevillian tapas and fino sherry at local bars in Santa Cruz quarter" },
    { name: "Plaza de España & María Luisa Park", type: "Walking Tour", description: "Guided walk through Seville\'s breathtaking Renaissance Revival plaza and tranquil park gardens" },
    { name: "Guadalquivir River Cruise at Sunset", type: "Boat Tour", description: "Scenic evening boat ride along the Guadalquivir with views of Torre del Oro and Triana" },
    { name: "Córdoba & Mezquita Day Trip", type: "Day Trip", description: "Full-day excursion to Córdoba\'s mesmerizing Mosque-Cathedral and the Jewish Quarter" },
    { name: "Seville Bike Tour: Hidden Gems", type: "Bike Tour", description: "Cycle through charming barrios discovering secret plazas, convents, and local street art" },
    { name: "Metropol Parasol & Rooftop Views", type: "Walking Tour", description: "Visit the striking Las Setas wooden structure and enjoy panoramic views of historic Seville" },
    { name: "Andalusian Cooking Class", type: "Cooking Class", description: "Learn to prepare gazpacho, salmorejo, and traditional Andalusian dishes with a local chef" },
    { name: "Ronda & White Villages Day Trip", type: "Day Trip", description: "Journey to the dramatic clifftop town of Ronda and picturesque pueblos blancos" },
    { name: "Horse-Drawn Carriage Tour of Seville", type: "City Tour", description: "Classic horse-drawn carriage ride past Seville\'s major landmarks and scenic gardens" }
  ]
},
'schengen.spain.valencia': {
  description: "Valencia, Spain\'s third-largest city, is a dazzling Mediterranean gem where futuristic architecture meets ancient traditions along a sun-kissed coastline. The City of Arts and Sciences — a breathtaking complex of gleaming white buildings designed by Santiago Calatrava — stands as one of Europe\'s most stunning modern landmarks, while the historic old town reveals Gothic churches, lively markets, and the magnificent Silk Exchange. As the birthplace of paella, Valencia offers an extraordinary culinary scene, and its wide sandy beaches, vibrant Barrio del Carmen nightlife, and the reclaimed Turia Gardens make it an endlessly rewarding destination.",
  attractions: [
    { name: "City of Arts & Sciences Guided Tour", type: "Guided Tour", description: "Explore Calatrava\'s futuristic complex including the Oceanogràfic aquarium and Science Museum" },
    { name: "Valencia Paella Cooking Class", type: "Cooking Class", description: "Master the art of authentic Valencian paella with fresh local ingredients and saffron" },
    { name: "Central Market & Old Town Food Tour", type: "Food Tour", description: "Taste horchata, buñuelos, and local delicacies at Europe\'s largest fresh food market" },
    { name: "Turia Gardens Bike Tour", type: "Bike Tour", description: "Cycle through the stunning 9km park built in a former riverbed crossing the city" },
    { name: "La Lonja de la Seda Tour", type: "Historical Tour", description: "Visit the UNESCO-listed Gothic Silk Exchange, a masterpiece of Valencian civil architecture" },
    { name: "Albufera Natural Park Boat Trip", type: "Boat Tour", description: "Sunset boat ride through the tranquil lagoon and rice paddies south of Valencia" },
    { name: "Valencia Street Art Tour in El Carmen", type: "Walking Tour", description: "Discover vibrant murals and graffiti art in Valencia\'s bohemian Barrio del Carmen quarter" },
    { name: "Oceanogràfic Aquarium Visit", type: "Aquarium", description: "Explore Europe\'s largest aquarium with dolphins, sharks, and Mediterranean marine habitats" },
    { name: "Valencia Cathedral & Holy Grail Tour", type: "Historical Tour", description: "Visit the cathedral said to house the Holy Grail and climb the Miguelete bell tower" },
    { name: "Malvarrosa Beach & Seaside Promenade", type: "Walking Tour", description: "Leisurely walk along Valencia\'s golden beach and lively seafront promenade with tapas stops" },
    { name: "Xàtiva Castle Day Trip", type: "Day Trip", description: "Excursion to the dramatic hilltop castle with sweeping views of the Valencian countryside" },
    { name: "Las Fallas Museum & Traditions Tour", type: "Cultural Tour", description: "Learn about Valencia\'s spectacular Fallas festival through preserved ninots and interactive displays" }
  ]
},
'schengen.spain.zaragoza': {
  description: "Zaragoza, the capital of Aragón, is a captivating yet often-overlooked Spanish city where two thousand years of history unfold along the banks of the Ebro River. The breathtaking Basilica del Pilar, with its soaring domes and Goya frescoes, dominates the skyline and stands as one of Spain\'s most revered pilgrimage sites. From Roman ruins at Caesaraugusta to the ornate Moorish Aljafería Palace and a buzzing tapas scene centered around El Tubo quarter, Zaragoza delivers an authentic Spanish experience without the tourist crowds of larger cities.",
  attractions: [
    { name: "Basilica del Pilar Guided Tour", type: "Historical Tour", description: "Explore Zaragoza\'s iconic baroque basilica with Goya ceiling frescoes and rooftop tower views" },
    { name: "Aljafería Palace Moorish Heritage Tour", type: "Palace Tour", description: "Discover the exquisite 11th-century Islamic palace, one of Spain\'s finest Mudéjar monuments" },
    { name: "El Tubo Tapas Crawl", type: "Food Tour", description: "Sample Aragonese tapas and local Garnacha wines through Zaragoza\'s legendary narrow bar streets" },
    { name: "Roman Caesaraugusta Route Tour", type: "Historical Tour", description: "Visit underground Roman forum, thermal baths, river port, and theater ruins beneath the city" },
    { name: "Zaragoza Goya Walking Tour", type: "Cultural Tour", description: "Follow in the footsteps of Francisco de Goya visiting key sites linked to the master painter" },
    { name: "La Seo Cathedral & Tapestry Museum", type: "Museum", description: "Tour the magnificent cathedral blending Romanesque, Gothic, Mudéjar, and Baroque architecture" },
    { name: "Ebro River Bike Tour", type: "Bike Tour", description: "Cycle along the scenic Ebro riverbanks past bridges, parks, and Zaragoza\'s Expo 2008 site" },
    { name: "Monasterio de Piedra Day Trip", type: "Day Trip", description: "Full-day excursion to a stunning natural park with waterfalls set around a medieval monastery" },
    { name: "Zaragoza Street Art & Modern Culture Tour", type: "Walking Tour", description: "Explore Zaragoza\'s thriving contemporary art scene and vibrant neighborhood murals" },
    { name: "Pablo Gargallo Museum Visit", type: "Museum", description: "Guided tour of the avant-garde sculptor\'s works housed in a beautiful Renaissance palace" },
    { name: "Wine Tasting in Campo de Borja", type: "Wine Tour", description: "Sample award-winning Garnacha wines at boutique bodegas in the surrounding wine region" },
    { name: "Belchite Ghost Town Excursion", type: "Day Trip", description: "Haunting visit to the abandoned Spanish Civil War village preserved as a memorial site" }
  ]
},

// SWITZERLAND
'schengen.switzerland.zurich': {
  description: "Zurich, Switzerland\'s largest city, is a sophisticated metropolis where cutting-edge finance and fashion meet centuries of culture along the shimmering shores of Lake Zurich. The charming Altstadt old town, with its medieval guild houses, cobblestone lanes, and the twin-towered Grossmünster church, offers a picturesque contrast to the city\'s sleek modern galleries and Michelin-starred restaurants. Surrounded by the snow-capped Alps and pristine lakes, Zurich blends urban elegance with easy access to breathtaking natural landscapes, making it a year-round destination for culture lovers and outdoor enthusiasts alike.",
  attractions: [
    { name: "Zurich Old Town Walking Tour", type: "Walking Tour", description: "Guided stroll through the medieval Altstadt visiting Grossmünster, Fraumünster, and Lindenhof hill" },
    { name: "Lake Zurich Boat Cruise", type: "Boat Tour", description: "Scenic cruise on crystal-clear Lake Zurich with views of Alps and lakeside villages" },
    { name: "Swiss National Museum Visit", type: "Museum", description: "Explore Switzerland\'s cultural history from prehistoric times to the present in a castle-like building" },
    { name: "Bahnhofstrasse Shopping & Chocolate Tour", type: "Food Tour", description: "Walk Zurich\'s famous luxury boulevard with tastings at Sprüngli and artisan chocolatiers" },
    { name: "Uetliberg Mountain Panorama Hike", type: "Adventure", description: "Train ride and hike to Zurich\'s local mountain for stunning 360-degree views of city and Alps" },
    { name: "Kunsthaus Zurich Art Museum Tour", type: "Museum", description: "Guided tour of one of Switzerland\'s most important art collections from medieval to contemporary" },
    { name: "Rhine Falls & Stein am Rhein Day Trip", type: "Day Trip", description: "Visit Europe\'s largest waterfall and the perfectly preserved medieval town of Stein am Rhein" },
    { name: "Zurich Fondue & Swiss Cuisine Tour", type: "Food Tour", description: "Savor traditional cheese fondue, raclette, and rösti at the city\'s best Swiss restaurants" },
    { name: "FIFA World Football Museum", type: "Museum", description: "Interactive museum celebrating the history and passion of football with rare memorabilia" },
    { name: "Zurich West & Viadukt Market Tour", type: "Walking Tour", description: "Explore Zurich\'s trendy industrial district with boutique shops under historic railway arches" },
    { name: "Rapperswil Castle & Rose Garden Day Trip", type: "Day Trip", description: "Boat trip to the \'Town of Roses\' with its medieval castle and lakeside promenade" },
    { name: "Zurich Craft Beer & Nightlife Tour", type: "Nightlife", description: "Evening tour of Zurich\'s booming craft brewery scene and vibrant Langstrasse nightlife district" }
  ]
},
'schengen.switzerland.zermatt': {
  description: "Zermatt, nestled at the foot of the iconic Matterhorn, is Switzerland\'s most legendary alpine resort and a paradise for mountaineers, skiers, and nature lovers. This car-free village exudes old-world charm with its timber chalets, horse-drawn carriages, and crisp mountain air at 1,620 meters above sea level. The town offers year-round skiing on Europe\'s highest summer ski slopes, over 400 kilometers of hiking trails with jaw-dropping panoramas, and the spectacular Glacier Express railway journey, cementing its status as one of the world\'s most breathtaking mountain destinations.",
  attractions: [
    { name: "Gornergrat Railway & Matterhorn Views", type: "Adventure", description: "Scenic cogwheel train ride to 3,089m for spectacular close-up views of the Matterhorn" },
    { name: "Matterhorn Glacier Paradise Cable Car", type: "Adventure", description: "Ascend to Europe\'s highest cable car station at 3,883m with panoramic Alpine views" },
    { name: "Five Lakes Hiking Trail", type: "Adventure", description: "Iconic alpine hike past five crystal-clear mountain lakes reflecting the mighty Matterhorn" },
    { name: "Zermatt Village Heritage Walking Tour", type: "Walking Tour", description: "Guided stroll through the car-free village discovering traditional Valais chalets and mountaineering history" },
    { name: "Glacier Express Scenic Train Journey", type: "Day Trip", description: "Legendary panoramic rail journey through 291 bridges and 91 tunnels across the Swiss Alps" },
    { name: "Matterhorn Museum: Zermatlantis", type: "Museum", description: "Underground museum telling the dramatic story of the first Matterhorn ascent in 1865" },
    { name: "Sunnegga & Rothorn Cable Car Adventure", type: "Adventure", description: "Ride to the sun-drenched Sunnegga plateau and continue to Rothorn for paragliding options" },
    { name: "Swiss Alpine Cheese & Fondue Experience", type: "Food Tour", description: "Taste artisan Valais cheeses and enjoy traditional fondue in a cozy mountain restaurant" },
    { name: "Gorner Gorge Nature Walk", type: "Nature", description: "Walk through the dramatic narrow gorge carved by glacial meltwater with wooden walkways" },
    { name: "Zermatt Ski & Snowboard Experience", type: "Adventure", description: "World-class skiing on 360km of pistes with year-round glacier skiing and snowboarding" },
    { name: "Schwarzsee Chapel Hike", type: "Adventure", description: "Scenic hike to the charming lakeside chapel at Schwarzsee with stunning Matterhorn backdrop" },
    { name: "Zermatt Sunset Photography Tour", type: "Guided Tour", description: "Capture the legendary alpenglow on the Matterhorn with expert photography guidance at golden hour" }
  ]
},
'schengen.switzerland.lucerne': {
  description: "Lucerne, cradled between the sparkling waters of Lake Lucerne and the majestic peaks of Mount Pilatus and Rigi, is the quintessential Swiss postcard town. Its beautifully preserved medieval old town features the iconic Chapel Bridge — the world\'s oldest covered wooden bridge — colorful frescoed buildings, and charming cobblestone squares alive with street musicians. Whether riding a vintage paddle steamer across the lake, ascending snow-dusted peaks by cable car, or exploring world-class museums like the Rosengart Collection, Lucerne offers an enchanting blend of natural beauty, cultural richness, and alpine adventure.",
  attractions: [
    { name: "Chapel Bridge & Old Town Walking Tour", type: "Walking Tour", description: "Guided tour of Lucerne\'s iconic covered bridge, Water Tower, and medieval painted buildings" },
    { name: "Mount Pilatus Golden Round Trip", type: "Day Trip", description: "Boat, cogwheel railway, and cable car loop to the 2,132m summit with breathtaking views" },
    { name: "Lake Lucerne Steamboat Cruise", type: "Boat Tour", description: "Scenic cruise on a vintage paddle steamer past dramatic mountain scenery and lakeside villages" },
    { name: "Mount Rigi Queen of the Mountains Tour", type: "Day Trip", description: "Cruise and cogwheel train to Rigi summit for panoramic views of Alps and lakes" },
    { name: "Lion Monument & Glacier Garden Visit", type: "Historical Tour", description: "See the poignant Lion Monument and explore the Ice Age Glacier Garden with mirror maze" },
    { name: "Swiss Museum of Transport", type: "Museum", description: "Interactive museum showcasing the history of transport from trains to space exploration" },
    { name: "Lucerne Chocolate & Cheese Tasting", type: "Food Tour", description: "Sample premium Swiss chocolates and aged cheeses at artisan shops throughout the old town" },
    { name: "Lucerne Festival Concert Experience", type: "Concert", description: "World-class classical music performance at the stunning lakeside KKL Lucerne concert hall" },
    { name: "Stanserhorn CabriO Open-Top Cable Car", type: "Adventure", description: "Ride the world\'s first open-top cable car to the summit for 360-degree Alpine panoramas" },
    { name: "Engelberg & Mount Titlis Day Trip", type: "Day Trip", description: "Excursion to the glacier-topped Mount Titlis with rotating cable car and cliff walk" },
    { name: "Rosengart Collection Museum Tour", type: "Museum", description: "Intimate gallery featuring major works by Picasso and Paul Klee in the heart of Lucerne" },
    { name: "Lucerne E-Bike Lake & Countryside Tour", type: "Bike Tour", description: "Electric bike ride along Lake Lucerne\'s shores through charming villages and alpine meadows" }
  ]
},
'schengen.switzerland.geneva': {
  description: "Geneva, the cosmopolitan jewel of French-speaking Switzerland, sits majestically at the southwestern tip of Lake Geneva with the snow-capped Mont Blanc as its backdrop. As the European headquarters of the United Nations and the birthplace of the Red Cross, this elegant city carries an unmistakable air of international prestige, complemented by world-class museums, luxury watchmaking boutiques, and refined lakeside promenades. From the iconic Jet d\'Eau fountain soaring 140 meters into the sky to the charming cobbled streets of the Old Town and the cutting-edge science at CERN, Geneva is a sophisticated blend of diplomacy, culture, and natural beauty.",
  attractions: [
    { name: "Jet d\'Eau & Lake Geneva Walking Tour", type: "Walking Tour", description: "Guided walk along Geneva\'s stunning lakefront promenade visiting the iconic 140-meter fountain" },
    { name: "CERN Particle Physics Tour", type: "Guided Tour", description: "Fascinating guided visit to the world\'s largest particle physics laboratory and antimatter exhibits" },
    { name: "Geneva Old Town & St. Pierre Cathedral", type: "Walking Tour", description: "Explore Geneva\'s charming hilltop old town and climb the cathedral towers for panoramic views" },
    { name: "United Nations Palais des Nations Tour", type: "Guided Tour", description: "Guided tour of the European UN headquarters with its Assembly Hall and Ariana Park" },
    { name: "Lake Geneva Cruise to Montreux", type: "Boat Tour", description: "Scenic boat journey across Lake Geneva passing vineyards, castles, and the Swiss Riviera" },
    { name: "Swiss Watchmaking Workshop", type: "Cultural Tour", description: "Hands-on workshop discovering the art of Swiss watchmaking with a master horologist" },
    { name: "Carouge Artisan Quarter Food Tour", type: "Food Tour", description: "Taste Genevan specialties and artisan treats in the bohemian \'Greenwich Village of Geneva\'" },
    { name: "Patek Philippe Museum Visit", type: "Museum", description: "Explore five centuries of watchmaking history at one of the world\'s finest horological museums" },
    { name: "Chamonix & Mont Blanc Day Trip", type: "Day Trip", description: "Full-day excursion to the French Alps with Aiguille du Midi cable car and glacier views" },
    { name: "International Red Cross Museum Tour", type: "Museum", description: "Moving and interactive museum dedicated to humanitarian action and the history of the Red Cross" },
    { name: "Geneva Wine & Vineyard Tour", type: "Wine Tour", description: "Visit Geneva\'s lesser-known vineyards along the lake for tastings of local Chasselas wines" },
    { name: "Jardin Anglais & Flower Clock Photo Tour", type: "Walking Tour", description: "Visit Geneva\'s iconic floral clock and beautiful English Garden with Mont Blanc views" }
  ]
},
'schengen.switzerland.lausanne': {
  description: "Lausanne, the dynamic Olympic capital perched on the steep shores of Lake Geneva, is a city of culture, academia, and breathtaking natural beauty. Home to the International Olympic Committee and its superb museum, this vibrant university city enchants visitors with its Gothic cathedral crowning the hilltop old town, terraced vineyards of the UNESCO-listed Lavaux region just minutes away, and a thriving arts and nightlife scene. With its efficient metro connecting the lakeside Ouchy promenade to the lively Flon district, Lausanne delivers a perfect balance of Swiss sophistication, French-speaking charm, and outdoor adventure.",
  attractions: [
    { name: "Olympic Museum Lausanne Tour", type: "Museum", description: "Interactive museum celebrating the Olympic Games with memorabilia, simulators, and lakeside sculpture park" },
    { name: "Lausanne Cathedral & Old Town Walk", type: "Walking Tour", description: "Explore the finest Gothic cathedral in Switzerland and wander through the charming medieval quarter" },
    { name: "Lavaux Vineyard Terraces Wine Tour", type: "Wine Tour", description: "Walk through UNESCO-listed terraced vineyards tasting exquisite Chasselas wines above Lake Geneva" },
    { name: "Lake Geneva Cruise from Ouchy", type: "Boat Tour", description: "Scenic lakeside cruise departing from Lausanne\'s charming Ouchy waterfront district" },
    { name: "Collection de l\'Art Brut Museum", type: "Museum", description: "Unique museum showcasing outsider art created by self-taught and visionary artists worldwide" },
    { name: "Flon District Food & Nightlife Tour", type: "Food Tour", description: "Explore Lausanne\'s trendiest neighborhood with craft cocktails, street food, and live music" },
    { name: "Château de Chillon Day Trip", type: "Day Trip", description: "Visit Switzerland\'s most visited castle on Lake Geneva\'s shores near Montreux" },
    { name: "Rochers-de-Naye Mountain Excursion", type: "Day Trip", description: "Scenic cogwheel train ascent to 2,042m summit with Alpine garden and marmot sanctuary" },
    { name: "Lausanne Chocolate Walking Tour", type: "Food Tour", description: "Taste premium Swiss chocolates at artisan boutiques throughout Lausanne\'s elegant streets" },
    { name: "MUDAC Design & Contemporary Art Museum", type: "Museum", description: "Cutting-edge museum of contemporary design and applied arts in Lausanne\'s cultural quarter" },
    { name: "Lausanne to Gruyères Cheese Day Trip", type: "Day Trip", description: "Visit the medieval town of Gruyères with cheese factory tour and fondue tasting" },
    { name: "Sauvabelin Tower & Forest Walk", type: "Nature", description: "Hike through Sauvabelin forest to the wooden observation tower with panoramic lake views" }
  ]
},
'schengen.switzerland.bern': {
  description: "Bern, Switzerland\'s understated capital, is a UNESCO World Heritage city where six kilometers of medieval arcaded streets, sandstone facades, and whimsical fountains create one of Europe\'s most beautifully preserved old towns. The city\'s iconic Zytglogge clock tower, the bear park along the turquoise Aare River, and the towering Gothic Münster cathedral with its panoramic terrace offer visitors a deeply atmospheric experience. Despite its political importance as the seat of Swiss government, Bern retains a relaxed, intimate charm, with locals swimming in the swift Aare in summer and the nearby Emmental and Bernese Oberland providing stunning day trip opportunities.",
  attractions: [
    { name: "Bern Old Town UNESCO Walking Tour", type: "Walking Tour", description: "Guided tour of Bern\'s medieval arcaded streets, ornate fountains, and historic Zytglogge clock tower" },
    { name: "Zytglogge Clock Tower Interior Tour", type: "Historical Tour", description: "Rare access inside Bern\'s iconic 13th-century astronomical clock to see its medieval mechanism" },
    { name: "Bern Münster Cathedral & Tower Climb", type: "Historical Tour", description: "Visit Switzerland\'s tallest cathedral and climb 344 steps for sweeping views of the Alps" },
    { name: "Einstein House & Museum Visit", type: "Museum", description: "Tour the apartment where Albert Einstein developed his theory of relativity in 1905" },
    { name: "BärenPark Bear Park & Aare River Walk", type: "Walking Tour", description: "Visit Bern\'s famous bears in their riverside habitat and stroll along the turquoise Aare" },
    { name: "Zentrum Paul Klee Museum Tour", type: "Museum", description: "Explore the world\'s largest collection of Paul Klee\'s works in Renzo Piano\'s wave-shaped building" },
    { name: "Aare River Swimming Experience", type: "Adventure", description: "Join locals for a thrilling summer swim down the crystal-clear turquoise Aare River rapids" },
    { name: "Swiss Parliament Building Guided Tour", type: "Guided Tour", description: "Free guided tour of Switzerland\'s Federal Palace with its impressive domed assembly hall" },
    { name: "Emmental Cheese & Countryside Day Trip", type: "Day Trip", description: "Visit the famous Emmental Show Dairy and explore the rolling green hills of Emmental valley" },
    { name: "Bern Food Market & Culinary Tour", type: "Food Tour", description: "Taste Bernese specialties including Berner Platte, Zibelechueche, and Toblerone chocolate" },
    { name: "Gurten Mountain Funicular & Park", type: "Adventure", description: "Ride the funicular to Bern\'s local mountain for panoramic Alpine views and family-friendly activities" },
    { name: "Thun & Lake Thun Day Trip", type: "Day Trip", description: "Excursion to the charming lakeside town of Thun with its castle and Alpine lake cruises" }
  ]
},

// FRANCE
'schengen.france.paris': {
  description: "Paris, the luminous City of Light, stands as the world\'s most romantic and culturally rich capital, where iconic landmarks like the Eiffel Tower, the Louvre, and Notre-Dame Cathedral define the very essence of Western civilization. Each arrondissement reveals a distinct character — from the bohemian charm of Montmartre to the elegant boulevards of Saint-Germain-des-Prés — while world-class patisseries, Michelin-starred bistros, and legendary cafés elevate the art of living to an unmatched level. With its Seine-side bookstalls, magnificent museums housing humanity\'s greatest masterpieces, and an electric energy that has inspired artists for centuries, Paris remains an eternal destination that rewards every visit.",
  attractions: [
    { name: "Eiffel Tower Summit Skip-the-Line Tour", type: "Guided Tour", description: "Priority access to the Eiffel Tower\'s summit level with expert guide and panoramic Paris views" },
    { name: "Louvre Museum Masterpieces Guided Tour", type: "Museum", description: "Expert-led tour of the Mona Lisa, Venus de Milo, and Louvre\'s greatest treasures" },
    { name: "Montmartre & Sacré-Cœur Walking Tour", type: "Walking Tour", description: "Stroll through the artistic hilltop village visiting Sacré-Cœur, Place du Tertre, and Moulin Rouge" },
    { name: "Seine River Dinner Cruise", type: "Boat Tour", description: "Gourmet dinner aboard a glass-roofed boat gliding past illuminated Paris landmarks at night" },
    { name: "Versailles Palace & Gardens Day Trip", type: "Day Trip", description: "Full-day excursion to the opulent Palace of Versailles with Hall of Mirrors and royal gardens" },
    { name: "Paris Patisserie & Chocolate Tour", type: "Food Tour", description: "Taste croissants, macarons, and artisan chocolates at Paris\'s finest pâtisseries and chocolatiers" },
    { name: "Musée d\'Orsay Impressionist Art Tour", type: "Museum", description: "Guided tour of the world\'s premier Impressionist collection featuring Monet, Renoir, and Van Gogh" },
    { name: "Le Marais Historical Walking Tour", type: "Walking Tour", description: "Explore Paris\'s trendiest district with its medieval architecture, Jewish quarter, and chic boutiques" },
    { name: "Giverny: Monet\'s Garden Day Trip", type: "Day Trip", description: "Visit Claude Monet\'s enchanting home and the water lily gardens that inspired his masterpieces" },
    { name: "Paris Bike Tour Along the Seine", type: "Bike Tour", description: "Cycle past Notre-Dame, the Louvre, and Tuileries Gardens along the scenic Seine riverbanks" },
    { name: "Moulin Rouge Cabaret Show", type: "Cultural Show", description: "Legendary Parisian cabaret with dazzling costumes, can-can dancers, and champagne service" },
    { name: "Catacombs of Paris Underground Tour", type: "Historical Tour", description: "Descend into the eerie underground ossuary holding the remains of six million Parisians" }
  ]
},
'schengen.france.lyon': {
  description: "Lyon, France\'s gastronomic capital, is a magnificent city where two thousand years of history converge at the confluence of the Rhône and Saône rivers. The UNESCO-listed old town of Vieux Lyon, with its Renaissance traboules (secret passageways), the ancient Roman amphitheaters of Fourvière, and the vibrant silk-weaving heritage of the Croix-Rousse district create an extraordinarily layered urban landscape. Renowned worldwide for its bouchon restaurants serving quintessential Lyonnaise cuisine and its proximity to the Beaujolais and Rhône Valley wine regions, Lyon is a paradise for food and wine lovers seeking authentic French culture.",
  attractions: [
    { name: "Vieux Lyon & Traboules Walking Tour", type: "Walking Tour", description: "Explore Renaissance old town and secret traboule passageways with an expert local guide" },
    { name: "Lyon Bouchon Food Tour", type: "Food Tour", description: "Taste authentic Lyonnaise cuisine including quenelles, andouillette, and praline tart at traditional bouchons" },
    { name: "Fourvière Basilica & Roman Theaters Tour", type: "Historical Tour", description: "Visit the hilltop basilica and explore two-thousand-year-old Roman amphitheaters with panoramic city views" },
    { name: "Beaujolais Wine & Village Day Trip", type: "Wine Tour", description: "Full-day excursion through rolling Beaujolais vineyards with tastings and charming village visits" },
    { name: "Les Halles de Lyon Paul Bocuse Tour", type: "Food Tour", description: "Guided tasting tour of Lyon\'s legendary indoor food market named after the famous chef" },
    { name: "Croix-Rousse Silk Heritage Walk", type: "Cultural Tour", description: "Discover the historic silk-weaving quarter with its murals, workshops, and bohemian atmosphere" },
    { name: "Confluence Museum Visit", type: "Museum", description: "Explore the striking Musée des Confluences covering science, anthropology, and world civilizations" },
    { name: "Lyon by Night Illumination Tour", type: "Walking Tour", description: "Evening guided walk showcasing Lyon\'s spectacular permanent light installations across the city" },
    { name: "Cooking Class: Lyonnaise Cuisine", type: "Cooking Class", description: "Hands-on class preparing classic Lyonnaise dishes with market-fresh ingredients and wine pairing" },
    { name: "Pérouges Medieval Village Day Trip", type: "Day Trip", description: "Visit one of France\'s most beautiful medieval villages famous for its galette de Pérouges" },
    { name: "Presqu\'île & Place Bellecour Bike Tour", type: "Bike Tour", description: "Cycle through Lyon\'s elegant peninsula district past grand squares and boutique-lined streets" },
    { name: "Rhône Valley Wine Tasting Tour", type: "Wine Tour", description: "Sample Côtes du Rhône, Condrieu, and Côte-Rôtie wines at acclaimed domaines south of Lyon" }
  ]
},
'schengen.france.marseille': {
  description: "Marseille, France\'s oldest and most multicultural city, is a raw and captivating Mediterranean port where ancient Greek heritage, North African influences, and Provençal soul collide in a kaleidoscope of flavors, colors, and stories. The stunning Vieux-Port harbor, crowned by the golden Notre-Dame de la Garde basilica high on the hilltop, remains the beating heart of the city, while the dramatic limestone Calanques cliffs plunging into turquoise waters provide some of Europe\'s most spectacular coastal scenery. With its bouillabaisse tradition, vibrant Le Panier quarter, and the bold MuCEM museum, Marseille offers an authentic and electrifying alternative to the polished French Riviera.",
  attractions: [
    { name: "Calanques National Park Boat Tour", type: "Boat Tour", description: "Cruise along Marseille\'s stunning limestone cliffs and swim in crystal-clear turquoise calanque coves" },
    { name: "Vieux-Port & Le Panier Walking Tour", type: "Walking Tour", description: "Guided walk through Marseille\'s historic old port and colorful hilltop Le Panier district" },
    { name: "Notre-Dame de la Garde Basilica Visit", type: "Historical Tour", description: "Visit Marseille\'s iconic hilltop basilica with breathtaking 360-degree views over the city and sea" },
    { name: "Marseille Bouillabaisse Tasting Tour", type: "Food Tour", description: "Sample authentic bouillabaisse and Provençal seafood at Marseille\'s finest waterfront restaurants" },
    { name: "MuCEM Museum & Fort Saint-Jean Tour", type: "Museum", description: "Explore the striking Museum of European and Mediterranean Civilisations and connected historic fort" },
    { name: "Calanques Hiking: Sormiou & Morgiou", type: "Adventure", description: "Guided hike through the dramatic Calanques National Park to secluded beaches and viewpoints" },
    { name: "Château d\'If Island Excursion", type: "Day Trip", description: "Boat trip to the legendary island fortress immortalized in The Count of Monte Cristo" },
    { name: "Marseille Street Art & Culture Tour", type: "Cultural Tour", description: "Discover Marseille\'s vibrant street art scene in the Cours Julien and Le Panier neighborhoods" },
    { name: "Aix-en-Provence & Cézanne Day Trip", type: "Day Trip", description: "Visit elegant Aix-en-Provence exploring Cézanne\'s studio, markets, and tree-lined boulevards" },
    { name: "Frioul Islands Kayaking Adventure", type: "Adventure", description: "Sea kayak to the pristine Frioul archipelago with snorkeling in Mediterranean waters" },
    { name: "Marseille Pastis & Apéro Tour", type: "Food Tour", description: "Learn about Marseille\'s pastis heritage and enjoy a traditional apéritif with local specialties" },
    { name: "Cassis Village & Wine Tasting", type: "Day Trip", description: "Visit the charming fishing village of Cassis with white wine tasting and coastal views" }
  ]
},
'schengen.france.nice': {
  description: "Nice, the dazzling queen of the French Riviera, captivates visitors with its legendary Promenade des Anglais, azure Mediterranean waters, and a beguiling blend of French and Italian influences. The colorful old town of Vieux Nice, with its labyrinthine lanes, bustling Cours Saleya flower market, and baroque churches, gives way to elegant Belle Époque architecture along the seafront and world-class art museums dedicated to Matisse and Chagall. Bathed in over 300 days of sunshine per year, Nice offers an intoxicating mix of beach life, hilltop panoramas from Castle Hill, and Niçoise cuisine that makes it the undisputed jewel of the Côte d\'Azur.",
  attractions: [
    { name: "Vieux Nice & Cours Saleya Market Tour", type: "Walking Tour", description: "Guided stroll through Nice\'s colorful old town and vibrant flower and food market" },
    { name: "Castle Hill Panoramic Walking Tour", type: "Walking Tour", description: "Climb to the hilltop park for breathtaking views over Nice\'s Baie des Anges coastline" },
    { name: "Nice Food Tour: Niçoise Cuisine", type: "Food Tour", description: "Sample socca, pissaladière, salade niçoise, and local rosé at authentic Niçois establishments" },
    { name: "Èze Village & Monaco Day Trip", type: "Day Trip", description: "Visit the stunning hilltop village of Èze and explore glamorous Monte Carlo and its casino" },
    { name: "Matisse & Chagall Museums Tour", type: "Museum", description: "Guided visit to both Nice\'s Matisse Museum and the stunning Marc Chagall Biblical Message museum" },
    { name: "Promenade des Anglais E-Bike Tour", type: "Bike Tour", description: "Electric bike ride along the iconic seaside promenade and into the hills above Nice" },
    { name: "Saint-Paul-de-Vence Art Village Tour", type: "Day Trip", description: "Visit the medieval hilltop village beloved by artists, home to the Maeght Foundation gallery" },
    { name: "Nice Sailing & Snorkeling Excursion", type: "Boat Tour", description: "Half-day sailing trip along the Riviera coast with swimming and snorkeling in hidden bays" },
    { name: "Antibes & Juan-les-Pins Day Trip", type: "Day Trip", description: "Explore Antibes\' Picasso Museum, old town ramparts, and the famous Cap d\'Antibes coastal path" },
    { name: "Nice Riviera Wine Tasting", type: "Wine Tour", description: "Taste Bellet AOC wines from Nice\'s own hillside vineyards with stunning Mediterranean views" },
    { name: "Cours Saleya Cooking Class", type: "Cooking Class", description: "Market-to-table cooking class preparing Niçoise specialties with ingredients from Cours Saleya" },
    { name: "Nice Old Town Night Tour & Apéro", type: "Nightlife", description: "Evening walking tour through atmospheric Vieux Nice with stops for local wine and nibbles" }
  ]
},
'schengen.france.bordeaux': {
  description: "Bordeaux, the undisputed wine capital of the world, is an elegant 18th-century port city on the Garonne River whose limestone facades have earned it the nickname \'La Belle Endormie\' — the Sleeping Beauty, now fully awakened. The UNESCO-listed city center dazzles with its grand neoclassical architecture, particularly the magnificent Place de la Bourse and its mesmerizing Miroir d\'Eau water mirror. Beyond the extraordinary wine culture — with legendary châteaux of Saint-Émilion, Médoc, and Pauillac at its doorstep — Bordeaux offers a vibrant culinary scene, the innovative Cité du Vin museum, and a youthful energy fueled by its large student population.",
  attractions: [
    { name: "Saint-Émilion Wine Tour & Tasting", type: "Wine Tour", description: "Full-day tour of prestigious Saint-Émilion châteaux with grand cru tastings and village visit" },
    { name: "Cité du Vin Museum Experience", type: "Museum", description: "Interactive wine museum exploring global wine culture with panoramic tasting on the 8th floor" },
    { name: "Bordeaux Old Town Walking Tour", type: "Walking Tour", description: "Guided walk past Place de la Bourse, Grand Théâtre, and the stunning Miroir d\'Eau" },
    { name: "Médoc Château Wine Tour", type: "Wine Tour", description: "Visit legendary Médoc wine estates including Margaux and Pauillac with cellar tours and tastings" },
    { name: "Bordeaux River Cruise on the Garonne", type: "Boat Tour", description: "Scenic cruise along the Garonne River with views of Bordeaux\'s magnificent UNESCO-listed waterfront" },
    { name: "Bordeaux Food & Market Tour", type: "Food Tour", description: "Taste canelés, oysters, duck confit, and local cheeses at Marché des Capucins and beyond" },
    { name: "Arcachon Bay & Dune du Pilat Day Trip", type: "Day Trip", description: "Visit Europe\'s tallest sand dune and taste fresh oysters in the charming Arcachon Bay" },
    { name: "Bordeaux Bike Tour Along the Garonne", type: "Bike Tour", description: "Cycle along the scenic riverside paths past Pont de Pierre and through riverside parklands" },
    { name: "Darwin Ecosystem & Street Art Tour", type: "Cultural Tour", description: "Explore Bordeaux\'s alternative eco-district with street art, skatepark, and organic food hall" },
    { name: "Bordeaux Cooking Class with Wine Pairing", type: "Cooking Class", description: "Learn to prepare Bordelaise cuisine and master food-wine pairing with a sommelier chef" },
    { name: "Graves & Sauternes Sweet Wine Tour", type: "Wine Tour", description: "Discover the birthplace of Bordeaux wines with Sauternes dessert wine tastings at top châteaux" },
    { name: "Place de la Bourse Night Photography Tour", type: "Guided Tour", description: "Capture Bordeaux\'s stunning illuminated landmarks reflected in the Miroir d\'Eau at night" }
  ]
},
'schengen.france.cannes': {
  description: "Cannes, the glamorous jewel of the French Riviera, is synonymous with the world-famous film festival, designer boutiques, and sun-drenched Mediterranean luxury. Beyond the red carpet of the Palais des Festivals and the legendary Boulevard de la Croisette lined with luxury hotels, Cannes reveals charming hidden depths — the medieval hilltop quarter of Le Suquet, the fragrant Provençal markets of Forville, and the pristine Lérins Islands just a short boat ride offshore. With its golden sandy beaches, yacht-filled harbor, and proximity to perfume capital Grasse and the stunning Esterel massif, Cannes offers far more than celebrity glamour.",
  attractions: [
    { name: "La Croisette & Palais des Festivals Walk", type: "Walking Tour", description: "Guided stroll along Cannes\' legendary boulevard past luxury hotels and the famous festival palace" },
    { name: "Lérins Islands Boat Trip", type: "Boat Tour", description: "Ferry to Île Sainte-Marguerite to explore the fort, eucalyptus forests, and crystal waters" },
    { name: "Le Suquet Old Quarter Walking Tour", type: "Walking Tour", description: "Climb through Cannes\' charming medieval hilltop quarter with panoramic views of the bay" },
    { name: "Grasse Perfume Factory Day Trip", type: "Day Trip", description: "Visit the world capital of perfume and create your own fragrance at a historic parfumerie" },
    { name: "Cannes Food Tour & Forville Market", type: "Food Tour", description: "Taste fresh Provençal produce, socca, and local specialties at Cannes\' vibrant covered market" },
    { name: "Esterel Massif Coastal Hike", type: "Adventure", description: "Hike through the dramatic red porphyry cliffs of the Esterel along the Mediterranean coast" },
    { name: "Cannes Yacht Charter & Coastal Cruise", type: "Boat Tour", description: "Private or shared yacht cruise along the Riviera coastline with swimming and champagne" },
    { name: "Antibes & Cap d\'Antibes Day Trip", type: "Day Trip", description: "Explore Antibes\' Picasso Museum and walk the spectacular coastal path around Cap d\'Antibes" },
    { name: "Cannes Wine & Cheese Tasting Evening", type: "Wine Tour", description: "Sample Provençal rosé wines and artisan cheeses at an elegant Cannes wine bar" },
    { name: "Cannes Film Festival Locations Tour", type: "Cultural Tour", description: "Visit iconic film festival sites and learn behind-the-scenes stories of Cannes\' cinematic history" },
    { name: "Gorges du Verdon Day Trip", type: "Day Trip", description: "Full-day excursion to Europe\'s Grand Canyon with turquoise waters and dramatic cliff scenery" },
    { name: "Cannes Beach Club & Water Sports", type: "Adventure", description: "Jet skiing, paddleboarding, and parasailing at Cannes\' premium private beach clubs" }
  ]
},
'schengen.france.toulouse': {
  description: "Toulouse, the rosy-hued capital of southwestern France, enchants visitors with its distinctive pink brick architecture, vibrant student energy, and deep-rooted aerospace heritage as the home of Airbus. Known as \'La Ville Rose,\' the city glows at sunset when its terracotta buildings bathe in warm golden light, particularly along the majestic Place du Capitole and the tree-lined banks of the Canal du Midi. Toulouse\'s rich culinary scene — famous for cassoulet, foie gras, and violet-flavored confections — its thriving arts quarter, and proximity to the Pyrenees and Cathar castles make it an unmissable destination in the French southwest.",
  attractions: [
    { name: "Place du Capitole & Old Town Tour", type: "Walking Tour", description: "Guided walk through Toulouse\'s magnificent main square and pink-brick Renaissance old quarter" },
    { name: "Cité de l\'Espace: Space Adventure", type: "Museum", description: "Interactive space theme park with full-size Ariane 5 rocket, Mir station, and planetarium" },
    { name: "Canal du Midi Bike & Boat Tour", type: "Bike Tour", description: "Cycle or cruise along the UNESCO-listed Canal du Midi through plane tree-lined towpaths" },
    { name: "Toulouse Cassoulet Cooking Class", type: "Cooking Class", description: "Learn to prepare the legendary slow-cooked cassoulet and other southwestern French specialties" },
    { name: "Basilique Saint-Sernin Tour", type: "Historical Tour", description: "Visit the largest remaining Romanesque church in Europe on the Santiago de Compostela pilgrimage route" },
    { name: "Airbus Factory Tour", type: "Guided Tour", description: "Behind-the-scenes visit to the Airbus A380 assembly line at Europe\'s aerospace capital" },
    { name: "Toulouse Food & Market Tour", type: "Food Tour", description: "Taste foie gras, saucisse de Toulouse, violet candies, and pastis at Marché Victor Hugo" },
    { name: "Carcassonne Medieval Citadel Day Trip", type: "Day Trip", description: "Full-day excursion to the spectacular walled city of Carcassonne, a UNESCO World Heritage site" },
    { name: "Musée des Augustins Art Tour", type: "Museum", description: "Explore Toulouse\'s fine arts museum housed in a magnificent Gothic Augustinian monastery" },
    { name: "Albi & Toulouse-Lautrec Day Trip", type: "Day Trip", description: "Visit the red-brick cathedral city of Albi and the Toulouse-Lautrec museum collection" },
    { name: "Garonne River Evening Cruise", type: "Boat Tour", description: "Sunset cruise along the Garonne River with views of Toulouse\'s illuminated pink-brick skyline" },
    { name: "Toulouse Violet Experience", type: "Cultural Tour", description: "Discover Toulouse\'s unique violet tradition with visits to violet gardens, shops, and tastings" }
  ]
},

// GERMANY
'schengen.germany.berlin': {
  description: "Berlin, Germany\'s bold and creative capital, is a city where a tumultuous history and boundless artistic energy collide to create one of Europe\'s most dynamic and culturally electric metropolises. From the haunting remnants of the Berlin Wall and the solemn Holocaust Memorial to the magnificent Brandenburg Gate and the treasure-filled Museum Island, the city wears its complex past with unflinching honesty. Today, Berlin thrives as a global hub for contemporary art, underground music, and culinary innovation, with its legendary nightlife, sprawling flea markets, and diverse multicultural neighborhoods offering an endlessly fascinating urban experience.",
  attractions: [
    { name: "Berlin Wall & Cold War History Tour", type: "Historical Tour", description: "Guided walk along the East Side Gallery, Checkpoint Charlie, and key Cold War sites" },
    { name: "Museum Island Skip-the-Line Tour", type: "Museum", description: "Priority access to the UNESCO-listed museum complex including Pergamon and Neues Museum treasures" },
    { name: "Brandenburg Gate & Reichstag Tour", type: "Historical Tour", description: "Explore Berlin\'s iconic landmarks with a visit to the Reichstag\'s stunning glass dome" },
    { name: "Berlin Street Food & Craft Beer Tour", type: "Food Tour", description: "Sample currywurst, döner kebab, and craft beers at Berlin\'s best street food hotspots" },
    { name: "Sachsenhausen Concentration Camp Memorial", type: "Day Trip", description: "Sobering guided tour of the former concentration camp north of Berlin with expert historian" },
    { name: "Berlin Street Art & Alternative Culture Tour", type: "Cultural Tour", description: "Discover Berlin\'s vibrant street art scene in Kreuzberg and Friedrichshain with a local artist" },
    { name: "Potsdam & Sanssouci Palace Day Trip", type: "Day Trip", description: "Visit Frederick the Great\'s stunning rococo palace and UNESCO-listed gardens in Potsdam" },
    { name: "Berlin Bike Tour: Highlights & Hidden Gems", type: "Bike Tour", description: "Cycle through Berlin\'s diverse neighborhoods covering major landmarks and local favorites" },
    { name: "Jewish Heritage Walking Tour", type: "Historical Tour", description: "Moving tour of Berlin\'s Jewish history including the Holocaust Memorial and synagogues" },
    { name: "Charlottenburg Palace & Gardens Tour", type: "Palace Tour", description: "Explore Berlin\'s grandest baroque palace with its opulent royal apartments and formal gardens" },
    { name: "Berlin Underground Bunker Tour", type: "Historical Tour", description: "Descend into WWII-era bunkers and Cold War tunnels beneath Berlin\'s streets" },
    { name: "Spree River Sightseeing Cruise", type: "Boat Tour", description: "Relaxing boat cruise along the Spree River past government quarter, cathedral, and Museum Island" }
  ]
},
'schengen.germany.munich': {
  description: "Munich, the sophisticated capital of Bavaria, is a city where centuries-old beer hall traditions, royal palaces, and alpine proximity create a uniquely exhilarating German experience. The grand Marienplatz with its famous Glockenspiel, the sprawling English Garden where surfers ride the Eisbach wave, and the magnificent Nymphenburg Palace reflect the city\'s rich heritage, while world-class museums like the Alte Pinakothek and BMW Welt showcase both artistic and engineering excellence. As the home of Oktoberfest and legendary beer gardens like the Hofbräuhaus, Munich offers a warm Bavarian welcome where Weisswurst, pretzels, and wheat beer flow freely year-round.",
  attractions: [
    { name: "Marienplatz & Glockenspiel Walking Tour", type: "Walking Tour", description: "Guided tour of Munich\'s historic heart including the New Town Hall\'s famous mechanical clock show" },
    { name: "Neuschwanstein Castle Day Trip", type: "Day Trip", description: "Full-day excursion to King Ludwig II\'s fairy-tale castle in the Bavarian Alps" },
    { name: "Munich Beer Hall & Brewery Tour", type: "Food Tour", description: "Visit the legendary Hofbräuhaus and Augustiner brewery with beer tastings and Bavarian snacks" },
    { name: "Nymphenburg Palace & Gardens Tour", type: "Palace Tour", description: "Explore the stunning baroque summer residence of Bavarian royalty with its vast parklands" },
    { name: "Dachau Memorial Site Guided Tour", type: "Day Trip", description: "Guided visit to the former concentration camp memorial with in-depth historical commentary" },
    { name: "English Garden Bike Tour", type: "Bike Tour", description: "Cycle through Munich\'s massive urban park visiting the Chinese Tower beer garden and Eisbach surfers" },
    { name: "BMW Welt & Museum Experience", type: "Museum", description: "Explore BMW\'s futuristic showroom and museum showcasing a century of automotive innovation" },
    { name: "Munich Food Tour: Bavarian Delicacies", type: "Food Tour", description: "Taste Weisswurst, Schweinshaxe, pretzels, and Bavarian cream at traditional Munich eateries" },
    { name: "Alte Pinakothek Art Museum Tour", type: "Museum", description: "Guided tour of one of the world\'s oldest galleries with masterpieces by Dürer and Rubens" },
    { name: "Salzburg Day Trip from Munich", type: "Day Trip", description: "Cross into Austria to explore Mozart\'s birthplace with its fortress, gardens, and old town" },
    { name: "Viktualienmarkt Gourmet Food Tour", type: "Food Tour", description: "Taste artisan cheeses, sausages, and Bavarian specialties at Munich\'s famous outdoor food market" },
    { name: "Residenz Palace & Treasury Tour", type: "Palace Tour", description: "Explore the former Wittelsbach royal palace with its ornate rooms, treasury, and court garden" }
  ]
},
'schengen.germany.frankfurt': {
  description: "Frankfurt, Germany\'s gleaming financial powerhouse on the Main River, surprises visitors with a compelling mix of cutting-edge skyscrapers, lovingly reconstructed medieval architecture, and a world-class cultural scene along the renowned Museumsufer museum embankment. The city\'s dramatic skyline — unique in Europe and nicknamed \'Mainhattan\' — towers over the charming half-timbered houses of the reconstructed Römerberg square, creating a striking visual contrast that defines Frankfurt\'s character. Beyond banking, Frankfurt shines as the birthplace of Goethe, a hub for Ebbelwoi apple wine culture in the Sachsenhausen quarter, and a gateway to the romantic Rhine Valley and its castle-crowned hillsides.",
  attractions: [
    { name: "Römerberg & Old Town Walking Tour", type: "Walking Tour", description: "Guided walk through Frankfurt\'s reconstructed medieval square and the stunning New Old Town quarter" },
    { name: "Main Tower Observation Deck Visit", type: "Guided Tour", description: "Ascend Frankfurt\'s only public skyscraper observation platform for panoramic city and skyline views" },
    { name: "Museumsufer Art & Culture Tour", type: "Museum", description: "Visit the world-renowned museum embankment featuring Städel Museum and German Film Museum" },
    { name: "Sachsenhausen Ebbelwoi Pub Tour", type: "Food Tour", description: "Sample traditional Frankfurt apple wine and local dishes in atmospheric Sachsenhausen taverns" },
    { name: "Rhine Valley Castle Cruise Day Trip", type: "Day Trip", description: "Scenic cruise through the UNESCO-listed Upper Middle Rhine Valley past fairytale castles and vineyards" },
    { name: "Goethe House & Museum Visit", type: "Museum", description: "Tour the birthplace of Germany\'s greatest writer with original furnishings and literary exhibits" },
    { name: "Frankfurt Food Tour: German Classics", type: "Food Tour", description: "Taste Grüne Soße, Handkäs mit Musik, Frankfurter sausages, and Bethmännchen at local spots" },
    { name: "Palmengarten Botanical Gardens Visit", type: "Nature", description: "Explore Frankfurt\'s stunning botanical garden with tropical greenhouses and seasonal flower displays" },
    { name: "Heidelberg Castle & Old Town Day Trip", type: "Day Trip", description: "Full-day excursion to romantic Heidelberg with its castle ruins and university town charm" },
    { name: "Frankfurt Bike Tour Along the Main", type: "Bike Tour", description: "Cycle along the scenic Main River path connecting bridges, parks, and riverside promenades" },
    { name: "Kleinmarkthalle Gourmet Food Tour", type: "Food Tour", description: "Explore Frankfurt\'s beloved indoor market with international delicacies and local wine tastings" },
    { name: "Frankfurt Skyline Photography Tour", type: "Guided Tour", description: "Capture Mainhattan\'s dramatic skyline from the best vantage points with photography guidance" }
  ]
},
'schengen.germany.hamburg': {
  description: "Hamburg, Germany\'s gateway to the world, is a maritime powerhouse and cultural dynamo where Europe\'s second-largest port meets an extraordinary wealth of music, architecture, and nightlife. The spectacular Elbphilharmonie concert hall, rising like a glass wave above a historic warehouse, has become the city\'s architectural icon, while the UNESCO-listed Speicherstadt warehouse district and the vibrant HafenCity neighborhood showcase Hamburg\'s remarkable transformation. From the legendary Reeperbahn entertainment strip in St. Pauli to the elegant Alster lakes, the bustling Fish Market, and the innovative culinary scene, Hamburg pulses with a confident, cosmopolitan energy that rivals any European capital.",
  attractions: [
    { name: "Elbphilharmonie & HafenCity Tour", type: "Walking Tour", description: "Visit Hamburg\'s stunning concert hall plaza and explore the cutting-edge HafenCity waterfront district" },
    { name: "Speicherstadt & Miniatur Wunderland", type: "Museum", description: "Explore the UNESCO warehouse district and the world\'s largest model railway exhibition" },
    { name: "Hamburg Harbor Boat Tour", type: "Boat Tour", description: "Scenic cruise through Europe\'s second-largest port past container ships and historic warehouses" },
    { name: "Reeperbahn & St. Pauli Night Tour", type: "Nightlife", description: "Evening walking tour of Hamburg\'s legendary entertainment district and Beatles history sites" },
    { name: "Hamburg Fish Market Sunday Morning", type: "Food Tour", description: "Experience the famous early-morning Altona Fish Market with fresh seafood and live entertainment" },
    { name: "Alster Lake Cruise & Parks Tour", type: "Boat Tour", description: "Relaxing boat trip on Hamburg\'s beautiful inner and outer Alster lakes past grand villas" },
    { name: "Hamburg Food Tour: Maritime Flavors", type: "Food Tour", description: "Taste Fischbrötchen, Labskaus, Franzbrötchen, and craft beers at Hamburg\'s best local spots" },
    { name: "Kunsthalle Hamburg Art Museum Tour", type: "Museum", description: "Explore seven centuries of European art from medieval altarpieces to contemporary installations" },
    { name: "Hamburg Street Art & Sternschanze Tour", type: "Cultural Tour", description: "Discover Hamburg\'s vibrant street art and alternative culture in the trendy Schanzenviertel" },
    { name: "Lübeck Medieval Town Day Trip", type: "Day Trip", description: "Visit the UNESCO-listed Hanseatic city of Lübeck famous for its marzipan and brick Gothic architecture" },
    { name: "Hamburg Bike Tour: Harbor to Altona", type: "Bike Tour", description: "Cycle from the historic harbor through riverside parks to the vibrant Altona neighborhood" },
    { name: "Hamburg Dungeon & Old Town History Tour", type: "Historical Tour", description: "Thrilling interactive experience bringing Hamburg\'s dark maritime history to life with live actors" }
  ]
},
'schengen.germany.cologne': {
  description: "Cologne, the vibrant Rhineland metropolis, is dominated by its awe-inspiring Gothic cathedral — a UNESCO World Heritage masterpiece whose twin spires soar 157 meters above the city and took over six centuries to complete. Beyond this magnificent icon, Cologne reveals a city of contrasts: ancient Roman ruins beneath modern streets, world-class museums along the Rhine, a legendary Karneval celebration rivaling Rio, and a distinctive Kölsch beer culture served in tiny 200ml glasses in atmospheric brewhouses. The city\'s warm and welcoming spirit, its thriving LGBTQ+ scene, vibrant Belgian Quarter, and the fragrant legacy of Eau de Cologne make it one of Germany\'s most endearing destinations.",
  attractions: [
    { name: "Cologne Cathedral Skip-the-Line Tour", type: "Historical Tour", description: "Guided tour of Germany\'s most visited landmark including tower climb with Rhine panorama views" },
    { name: "Cologne Old Town & Kölsch Beer Tour", type: "Food Tour", description: "Walk through the Altstadt sampling Kölsch beer at traditional brewhouses with local snacks" },
    { name: "Rhine River Panorama Cruise", type: "Boat Tour", description: "Scenic boat trip along the Rhine past the old town, Great St. Martin, and cathedral skyline" },
    { name: "Roman-Germanic Museum Visit", type: "Museum", description: "Explore Cologne\'s ancient Roman heritage including the stunning Dionysus mosaic and Roman artifacts" },
    { name: "Museum Ludwig Modern Art Tour", type: "Museum", description: "Guided tour of one of Europe\'s foremost collections of modern art including Pop Art masterpieces" },
    { name: "Cologne Chocolate Museum Experience", type: "Museum", description: "Interactive museum tracing chocolate from cocoa bean to bar with a flowing chocolate fountain" },
    { name: "Belgian Quarter Food & Shopping Tour", type: "Walking Tour", description: "Explore Cologne\'s trendiest neighborhood with independent boutiques, cafés, and gourmet food stops" },
    { name: "Drachenfels & Rhine Valley Day Trip", type: "Day Trip", description: "Visit the legendary Dragon\'s Rock castle ruins with panoramic views over the Rhine Valley" },
    { name: "Eau de Cologne Fragrance Workshop", type: "Cultural Tour", description: "Create your own signature perfume at the birthplace of Eau de Cologne with a perfumer" },
    { name: "Cologne Bike Tour Along the Rhine", type: "Bike Tour", description: "Cycle along the scenic Rhine riverbanks past parks, bridges, and Cologne\'s main landmarks" },
    { name: "Brühl Augustusburg Palace Day Trip", type: "Day Trip", description: "Visit the stunning UNESCO-listed rococo palace and Falkenlust hunting lodge near Cologne" },
    { name: "Cologne Street Art & Ehrenfeld Tour", type: "Cultural Tour", description: "Discover Cologne\'s vibrant urban art scene and multicultural energy in the Ehrenfeld district" }
  ]
},
'schengen.germany.dusseldorf': {
  description: "Düsseldorf, the elegant Rhine metropolis and capital of North Rhine-Westphalia, seamlessly blends high fashion, innovative architecture, and a legendary old town pub culture into one of Germany\'s most stylish cities. The Königsallee boulevard — known simply as the \'Kö\' — is lined with luxury designer boutiques and shaded by plane trees along a picturesque canal, while the MedienHafen district dazzles with avant-garde buildings by Frank Gehry and other starchitects. With the longest bar in the world in the Altstadt\'s 260 pubs and breweries, a vibrant Japanese quarter, and world-class art institutions, Düsseldorf offers a sophisticated yet unpretentious urban experience.",
  attractions: [
    { name: "Altstadt \'Longest Bar\' Pub Crawl", type: "Food Tour", description: "Sample Altbier at legendary brewpubs along Düsseldorf\'s famous old town bar mile" },
    { name: "Königsallee & Luxury Shopping Tour", type: "Walking Tour", description: "Stroll the elegant \'Kö\' boulevard lined with designer flagship stores and canalside cafés" },
    { name: "MedienHafen Architecture Tour", type: "Walking Tour", description: "Explore Frank Gehry\'s dancing buildings and cutting-edge architecture in the redeveloped harbor district" },
    { name: "Rhine Tower & Panorama Views", type: "Guided Tour", description: "Ascend the 240-meter Rheinturm for 360-degree views with a drink at the revolving restaurant" },
    { name: "K20 & K21 Art Museums Tour", type: "Museum", description: "Visit Düsseldorf\'s world-class modern art museums featuring Klee, Picasso, and contemporary German art" },
    { name: "Japanese Quarter & Ramen Tour", type: "Food Tour", description: "Explore Europe\'s largest Japanese community with authentic ramen, sushi, and Japanese grocery shops" },
    { name: "Rhine River Cycle Tour", type: "Bike Tour", description: "Bike along the scenic Rhine riverbanks through parks and past Düsseldorf\'s iconic skyline" },
    { name: "Düsseldorf Craft Beer & Altbier Tour", type: "Food Tour", description: "Deep dive into Düsseldorf\'s unique Altbier brewing tradition at historic and craft breweries" },
    { name: "Schloss Benrath Palace & Gardens", type: "Palace Tour", description: "Tour the exquisite pink rococo palace with its French formal gardens and natural history museum" },
    { name: "Cologne & Bonn Day Trip", type: "Day Trip", description: "Visit neighboring Cologne\'s cathedral and Beethoven\'s birthplace in Bonn on a combined excursion" },
    { name: "Kaiserswerth Old Town & Ruins Walk", type: "Historical Tour", description: "Explore the charming riverside village of Kaiserswerth with its medieval imperial palace ruins" },
    { name: "Düsseldorf Carnival Experience Tour", type: "Cultural Tour", description: "Learn about Düsseldorf\'s legendary Karneval traditions with costume history and celebration highlights" }
  ]
},
'schengen.germany.stuttgart': {
  description: "Stuttgart, nestled in a lush valley surrounded by vine-covered hills and forested ridges, is the powerhouse of German engineering and the birthplace of the automobile. Home to both the Mercedes-Benz and Porsche museums — two of the world\'s most spectacular automotive showcases — the city pulses with innovation while honoring its rich Swabian heritage through hearty cuisine, world-class ballet, and the magnificent Baroque palace of Ludwigsburg nearby. Stuttgart\'s vibrant Bohnenviertel quarter, its bustling Markthalle food hall, and the surrounding wine country with its Besenwirtschaften seasonal wine taverns offer visitors a deeply satisfying blend of culture, cuisine, and cutting-edge engineering.",
  attractions: [
    { name: "Mercedes-Benz Museum Tour", type: "Museum", description: "Journey through 130 years of automotive history with 160 vehicles in a stunning spiral building" },
    { name: "Porsche Museum Experience", type: "Museum", description: "Explore Porsche\'s legendary sports cars and racing heritage in a striking modernist museum" },
    { name: "Stuttgart Old Town & Market Tour", type: "Walking Tour", description: "Guided walk through Stuttgart\'s center visiting Schillerplatz, Stiftskirche, and the Art Nouveau Markthalle" },
    { name: "Stuttgart Wine Hike & Tasting", type: "Wine Tour", description: "Hike through inner-city vineyards with tastings of local Trollinger and Riesling wines" },
    { name: "Ludwigsburg Palace & Gardens Day Trip", type: "Day Trip", description: "Visit Germany\'s largest baroque palace with its magnificent Blühendes Barock flower gardens" },
    { name: "Swabian Cooking Class", type: "Cooking Class", description: "Learn to make Spätzle, Maultaschen, and other beloved Swabian specialties with a local chef" },
    { name: "Staatsgalerie Art Museum Tour", type: "Museum", description: "Guided tour of Stuttgart\'s premier art museum with old masters and modern art collections" },
    { name: "Stuttgart TV Tower & Forest Walk", type: "Adventure", description: "Visit the world\'s first TV tower and hike through the surrounding Stuttgart forest trails" },
    { name: "Esslingen Medieval Town Day Trip", type: "Day Trip", description: "Explore the perfectly preserved half-timbered medieval town of Esslingen with its wine festival heritage" },
    { name: "Wilhelma Zoo & Botanical Gardens", type: "Nature", description: "Europe\'s only combined zoological-botanical garden set in a stunning Moorish-style palace complex" },
    { name: "Stuttgart Beer & Brewery Tour", type: "Food Tour", description: "Sample local Swabian beers at Stuttgart\'s best breweries from traditional to craft" },
    { name: "Black Forest Day Trip from Stuttgart", type: "Day Trip", description: "Full-day excursion to the Black Forest with cuckoo clock workshops, waterfalls, and cake" }
  ]
},

// GREECE
'schengen.greece.athens': {
  description: "Athens, the cradle of Western civilization, is a city where the shadows of ancient temples fall across buzzing modern neighborhoods in a thrilling collision of past and present. The mighty Acropolis and its crowning Parthenon temple gaze down upon a vibrant metropolis of street art-covered alleyways, rooftop cocktail bars, and the atmospheric Pláka and Monastiráki quarters brimming with tavernas and flea markets. With world-class archaeological museums, the striking Stavros Niarchos cultural center, and a culinary renaissance celebrating Greek mezes, fresh seafood, and fine regional wines, Athens rewards visitors with an energy and depth that far exceeds its ancient reputation.",
  attractions: [
    { name: "Acropolis & Parthenon Skip-the-Line Tour", type: "Historical Tour", description: "Priority access guided tour of the iconic Acropolis hilltop including the Parthenon and Erechtheion" },
    { name: "Acropolis Museum Guided Tour", type: "Museum", description: "Explore the stunning modern museum housing original Parthenon sculptures and ancient Greek artifacts" },
    { name: "Athens Food Tour in Pláka & Monastiráki", type: "Food Tour", description: "Taste souvlaki, loukoumades, Greek cheeses, and ouzo at hidden gems in the old quarter" },
    { name: "Ancient Agora & Roman Forum Walk", type: "Historical Tour", description: "Explore the birthplace of democracy at the ancient marketplace and Temple of Hephaestus" },
    { name: "Cape Sounion & Temple of Poseidon Sunset", type: "Day Trip", description: "Drive along the Athens Riviera to the clifftop Temple of Poseidon for a legendary sunset" },
    { name: "Athens Street Art & Alternative Tour", type: "Cultural Tour", description: "Discover Athens\' vibrant street art scene in Exarcheia and Psiri with a local artist guide" },
    { name: "Delphi Full-Day Excursion", type: "Day Trip", description: "Visit the ancient Oracle of Delphi, the \'navel of the world,\' set in dramatic mountain scenery" },
    { name: "Athens Riviera Sailing Trip", type: "Boat Tour", description: "Half-day sailing along the Athenian coastline with swimming stops in crystal-clear Saronic waters" },
    { name: "National Archaeological Museum Tour", type: "Museum", description: "Guided visit to one of the world\'s great museums with Mycenaean gold and ancient Greek sculptures" },
    { name: "Athens by Night: Rooftop Bar Tour", type: "Nightlife", description: "Evening tour of Athens\' best rooftop bars with Acropolis views and craft cocktails" },
    { name: "Cooking Class: Greek Mezes & Wine", type: "Cooking Class", description: "Hands-on class preparing traditional Greek dishes with market-fresh ingredients and wine tasting" },
    { name: "Athens Bike Tour: Landmarks & Neighborhoods", type: "Bike Tour", description: "Cycle through Athens\' historic center, parks, and vibrant neighborhoods with a local guide" }
  ]
},
'schengen.greece.santorini': {
  description: "Santorini, the crown jewel of the Greek Cyclades, is a breathtaking volcanic island where whitewashed villages cascade down dramatic caldera cliffs above the deep blue Aegean Sea. The iconic blue-domed churches of Oia, the legendary sunsets that paint the sky in fiery oranges and purples, and the unique volcanic beaches of red, black, and white sand create one of the world\'s most photographed and romantic landscapes. Beyond its stunning beauty, Santorini offers exceptional volcanic wines from ancient Assyrtiko vines, fascinating archaeological sites at Akrotiri — the \'Minoan Pompeii\' — and a culinary scene that transforms fresh Aegean seafood into unforgettable Mediterranean cuisine.",
  attractions: [
    { name: "Oia Sunset & Village Walking Tour", type: "Walking Tour", description: "Guided walk through Santorini\'s most iconic village to the perfect sunset viewing spot" },
    { name: "Santorini Catamaran Cruise & BBQ", type: "Boat Tour", description: "Sail the caldera visiting hot springs, Red Beach, and volcanic island with onboard BBQ" },
    { name: "Akrotiri Archaeological Site Tour", type: "Historical Tour", description: "Explore the remarkably preserved 3,600-year-old Minoan city buried by volcanic eruption" },
    { name: "Santorini Wine Tasting Tour", type: "Wine Tour", description: "Visit volcanic vineyards and taste unique Assyrtiko and Vinsanto wines with caldera views" },
    { name: "Volcano & Hot Springs Boat Trip", type: "Adventure", description: "Hike the active Nea Kameni volcano crater and swim in natural hot springs" },
    { name: "Fira to Oia Caldera Hiking Trail", type: "Adventure", description: "Stunning 10km clifftop hike between Santorini\'s two main villages with dramatic caldera panoramas" },
    { name: "Santorini Cooking Class & Farm Visit", type: "Cooking Class", description: "Cook traditional Santorinian dishes using local cherry tomatoes, capers, and fava beans" },
    { name: "Red Beach & Perissa Black Beach Tour", type: "Adventure", description: "Visit Santorini\'s unique volcanic beaches with dramatic red and black sand cliff formations" },
    { name: "Santorini Photography Tour at Golden Hour", type: "Guided Tour", description: "Capture Santorini\'s iconic blue domes, caldera views, and sunset with expert photography guidance" },
    { name: "Ancient Thera Hilltop Ruins Visit", type: "Historical Tour", description: "Hike to the ruins of Ancient Thera on Mesa Vouno mountain with sweeping coastal views" },
    { name: "Pyrgos Village & Sunset Wine Experience", type: "Wine Tour", description: "Explore the medieval hilltop village of Pyrgos followed by wine tasting at sunset" },
    { name: "Santorini Private Speedboat Tour", type: "Boat Tour", description: "Private speedboat exploring hidden sea caves, secluded beaches, and the caldera\'s volcanic formations" }
  ]
},
'schengen.greece.crete': {
  description: "Crete, Greece\'s largest and most diverse island, is a magnificent Mediterranean world unto itself, where the ancient Minoan civilization of Knossos, dramatic Samariá Gorge, and pristine turquoise lagoons create an island of extraordinary depth and beauty. The vibrant Venetian harbor of Chania, the atmospheric old town of Rethymno, and the bustling capital Heraklion each offer distinct flavors of Cretan life, while the island\'s legendary cuisine — built on olive oil, wild greens, fresh seafood, and fiery raki — is considered the healthiest in the Mediterranean. From the pink-sand paradise of Elafonisi Beach to the rugged White Mountains and the laid-back southern coast, Crete rewards explorers with endless discoveries.",
  attractions: [
    { name: "Knossos Palace & Heraklion Museum Tour", type: "Historical Tour", description: "Explore the legendary Minoan palace and the world\'s finest collection of Minoan artifacts" },
    { name: "Samariá Gorge Full-Day Hike", type: "Adventure", description: "Trek through Europe\'s longest gorge — 16km of dramatic canyon scenery to the Libyan Sea" },
    { name: "Elafonisi Pink Sand Beach Day Trip", type: "Day Trip", description: "Visit Crete\'s stunning pink-sand lagoon beach with crystal-clear shallow turquoise waters" },
    { name: "Chania Old Town & Venetian Harbor Walk", type: "Walking Tour", description: "Wander through the atmospheric Venetian harbor, lighthouse, and charming old town lanes" },
    { name: "Cretan Cooking Class & Farm Visit", type: "Cooking Class", description: "Cook traditional Cretan dishes using farm-fresh ingredients with olive oil tasting and raki" },
    { name: "Balos Lagoon & Gramvousa Island Cruise", type: "Boat Tour", description: "Boat excursion to the stunning Balos Lagoon and the Venetian fortress of Gramvousa Island" },
    { name: "Rethymno Old Town & Fortezza Tour", type: "Walking Tour", description: "Explore Rethymno\'s Venetian-Ottoman old town and massive Renaissance fortress overlooking the sea" },
    { name: "Cretan Wine & Olive Oil Tasting Tour", type: "Wine Tour", description: "Visit local wineries and olive groves tasting indigenous grape varieties and premium olive oils" },
    { name: "Spinalonga Island & Elounda Day Trip", type: "Day Trip", description: "Boat to the historic island fortress and former leper colony made famous by \'The Island\'" },
    { name: "Preveli Beach & Palm Forest Hike", type: "Adventure", description: "Hike through a gorge to the exotic Preveli Beach with its unique palm forest and river" },
    { name: "Heraklion Food Tour: Cretan Flavors", type: "Food Tour", description: "Taste dakos, kalitsounia, snails, and raki at authentic Heraklion eateries and markets" },
    { name: "Lasithi Plateau & Zeus Cave Tour", type: "Day Trip", description: "Visit the birthplace cave of Zeus and the windmill-dotted Lasithi Plateau high in the mountains" }
  ]
},
'schengen.greece.thessaloniki': {
  description: "Thessaloniki, Greece\'s vibrant second city, is a captivating Aegean port where Byzantine churches, Ottoman hammams, Roman monuments, and modernist waterfront promenades weave together 2,300 years of unbroken history. The city\'s iconic White Tower gazes over a lively seafront where locals gather for their evening volta, while the atmospheric Ano Poli upper town, with its wooden Ottoman houses and panoramic fortress views, preserves a village-like charm above the cosmopolitan bustle. Renowned as Greece\'s culinary capital — offering everything from bougatsa pastries at dawn to creative neo-Greek dining by night — Thessaloniki pulses with a youthful energy fueled by its large university population and legendary nightlife.",
  attractions: [
    { name: "White Tower & Waterfront Walking Tour", type: "Walking Tour", description: "Guided walk along Thessaloniki\'s iconic seafront from the White Tower to the concert hall" },
    { name: "Byzantine Churches UNESCO Tour", type: "Historical Tour", description: "Visit Thessaloniki\'s UNESCO-listed Byzantine churches with stunning mosaics spanning a millennium" },
    { name: "Thessaloniki Food Tour: Greek Flavors", type: "Food Tour", description: "Taste bougatsa, koulouri, meze, and ouzo at the city\'s best tavernas and street food spots" },
    { name: "Ano Poli Upper Town Walking Tour", type: "Walking Tour", description: "Explore the charming Ottoman-era upper town with Byzantine walls and panoramic city views" },
    { name: "Archaeological Museum of Thessaloniki", type: "Museum", description: "Guided tour of Macedonia\'s finest archaeological collection including Vergina golden treasures" },
    { name: "Modiano & Kapani Market Food Walk", type: "Food Tour", description: "Wander through Thessaloniki\'s buzzing covered markets sampling spices, olives, halva, and seafood" },
    { name: "Meteora Monasteries Full-Day Trip", type: "Day Trip", description: "Visit the breathtaking cliff-top monasteries of Meteora perched on dramatic sandstone pillars" },
    { name: "Thessaloniki Bar Hopping & Nightlife Tour", type: "Nightlife", description: "Experience Thessaloniki\'s legendary bar scene in the Ladadika and Valaoritou entertainment districts" },
    { name: "Vergina Royal Tombs Day Trip", type: "Day Trip", description: "Visit the extraordinary tomb of Alexander the Great\'s father, Philip II, with golden artifacts" },
    { name: "Thessaloniki Street Art & Culture Tour", type: "Cultural Tour", description: "Discover the city\'s vibrant street art scene and creative quarter with a local artist" },
    { name: "Halkidiki Beach Day Trip", type: "Day Trip", description: "Escape to the turquoise waters and pine-fringed beaches of the Halkidiki peninsula" },
    { name: "Thessaloniki Sunset Boat Cruise", type: "Boat Tour", description: "Evening cruise along the Thermaic Gulf with views of the city skyline and Mount Olympus" }
  ]
},
'schengen.greece.mykonos': {
  description: "Mykonos, the cosmopolitan darling of the Cyclades, is a sun-drenched Aegean island where dazzling whitewashed streets, iconic hilltop windmills, and world-famous beach clubs create the ultimate Greek island experience. The labyrinthine lanes of Mykonos Town — known as Chora — reveal charming boutiques, waterfront cocktail bars in Little Venice, and the photogenic Panagia Paraportiani church, while the island\'s golden-sand beaches from Paradise to Super Paradise pulse with DJ sets and international energy. Beyond the glamour, Mykonos offers exceptional seafood tavernas, the nearby sacred island of Delos — birthplace of Apollo — and a warm Cycladic charm that has captivated artists and travelers for generations.",
  attractions: [
    { name: "Mykonos Town & Windmills Walking Tour", type: "Walking Tour", description: "Guided walk through Chora\'s charming lanes, Little Venice, and the iconic hilltop windmills" },
    { name: "Delos Island Archaeological Day Trip", type: "Day Trip", description: "Boat trip to the sacred birthplace of Apollo with guided tour of the ancient sanctuary ruins" },
    { name: "Mykonos Catamaran Sunset Cruise", type: "Boat Tour", description: "Sail the Aegean at sunset with swimming, snorkeling, and BBQ dinner on a luxury catamaran" },
    { name: "Mykonos Beach Hopping Tour", type: "Adventure", description: "Visit the island\'s best beaches from family-friendly Ornos to legendary Paradise Beach by boat" },
    { name: "Greek Cooking Class in Mykonos", type: "Cooking Class", description: "Learn to prepare traditional Mykonian dishes using fresh local ingredients with wine pairing" },
    { name: "Little Venice Sunset & Wine Tasting", type: "Wine Tour", description: "Watch the famous Mykonos sunset from Little Venice with a curated Greek wine tasting" },
    { name: "Mykonos Food Tour: Island Flavors", type: "Food Tour", description: "Taste kopanisti cheese, louza cured pork, and fresh seafood at authentic local tavernas" },
    { name: "Mykonos Scuba Diving Adventure", type: "Adventure", description: "Discover underwater caves and marine life at top dive sites around Mykonos and Dragonisi" },
    { name: "Ano Mera Village & Monastery Visit", type: "Cultural Tour", description: "Visit the peaceful inland village of Ano Mera and the historic Panagia Tourliani monastery" },
    { name: "Mykonos Quad Bike Island Tour", type: "Adventure", description: "Explore the island\'s hidden coves, hilltop chapels, and rural trails by off-road quad bike" },
    { name: "Rhenia Island & Delos Cruise", type: "Boat Tour", description: "Swim at pristine Rhenia Island beaches and explore ancient Delos on a combined boat excursion" },
    { name: "Mykonos Nightlife & DJ Experience", type: "Nightlife", description: "Evening tour of Mykonos\' world-famous bars, beach clubs, and legendary late-night dance spots" }
  ]
},

// HUNGARY
'schengen.hungary.budapest': {
  description: "Budapest, the majestic \'Pearl of the Danube,\' is a city of breathtaking grandeur where the medieval Buda Castle district and the elegant Art Nouveau boulevards of Pest face each other across the river, connected by the iconic Chain Bridge. The city\'s extraordinary thermal bath culture — from the Ottoman-era Rudas Baths to the palatial Széchenyi complex — offers a uniquely relaxing experience, while the soaring Hungarian Parliament Building, the historic Jewish Quarter\'s ruin bars, and the stunning Fisherman\'s Bastion create a cityscape of unmatched drama. With its vibrant culinary scene blending traditional goulash and chimney cake with innovative modern dining, Budapest delivers world-class experiences at remarkably affordable prices.",
  attractions: [
    { name: "Buda Castle & Fisherman\'s Bastion Tour", type: "Walking Tour", description: "Guided walk through the historic Castle District with panoramic Danube views from Fisherman\'s Bastion" },
    { name: "Hungarian Parliament Building Tour", type: "Guided Tour", description: "Interior tour of Europe\'s third-largest parliament with its stunning neo-Gothic dome and crown jewels" },
    { name: "Széchenyi Thermal Bath Experience", type: "Relaxation", description: "Soak in Europe\'s largest medicinal bath complex housed in a grand neo-baroque palace" },
    { name: "Danube River Evening Cruise", type: "Boat Tour", description: "Romantic evening cruise past illuminated Parliament, Chain Bridge, and Buda Castle skyline" },
    { name: "Budapest Ruin Bar Pub Crawl", type: "Nightlife", description: "Tour the legendary ruin bars of the Jewish Quarter including Szimpla Kert and Instant" },
    { name: "Budapest Food Tour: Hungarian Flavors", type: "Food Tour", description: "Taste goulash, lángos, chimney cake, and Tokaji wine at authentic Budapest eateries" },
    { name: "Great Market Hall & Culinary Tour", type: "Food Tour", description: "Explore Budapest\'s stunning 19th-century market hall sampling paprika, sausages, and strudel" },
    { name: "Jewish Quarter Heritage Walking Tour", type: "Historical Tour", description: "Visit the Great Synagogue, Shoes on the Danube memorial, and the quarter\'s poignant history" },
    { name: "Gellért Hill & Cave Church Tour", type: "Walking Tour", description: "Hike to the Citadella for panoramic views and visit the unique underground cave church" },
    { name: "Danube Bend: Visegrád & Szentendre Day Trip", type: "Day Trip", description: "Boat excursion to the charming artist town of Szentendre and Visegrád\'s hilltop citadel" },
    { name: "Budapest Bike Tour: Pest Side Highlights", type: "Bike Tour", description: "Cycle through Pest\'s grand boulevards, Heroes\' Square, City Park, and Andrássy Avenue" },
    { name: "Hungarian Folk Show & Dinner", type: "Cultural Show", description: "Traditional Hungarian folk music and dance performance with a four-course dinner and wine" }
  ]
}

};

// Continue with more countries...
// I'll add the rest in subsequent chunks and apply them

// ============ APPLICATION LOGIC ============
function applyUpdates() {
    let content = fs.readFileSync('regions-data.js', 'utf8');
    let updateCount = 0;
    let failCount = 0;

    for (const [path, data] of Object.entries(cityUpdates)) {
        const [regionId, countryId, cityId] = path.split('.');
        
        // Find the city in regionsData
        const cityPattern = new RegExp(
            `(cities:\\s*\\{[^]*?${cityId}:\\s*\\{[^]*?description:\\s*")([^"]*)(")`,
            'g'
        );
        
        // Instead of complex regex, let's do targeted replacements
        // Find description
        const descResult = replaceDescription(content, regionId, countryId, cityId, data.description);
        if (descResult) {
            content = descResult;
            updateCount++;
        } else {
            console.log(`FAIL desc: ${path}`);
            failCount++;
        }
        
        // Find and replace attractions
        const attrResult = replaceAttractions(content, regionId, countryId, cityId, data.attractions);
        if (attrResult) {
            content = attrResult;
        }
    }

    fs.writeFileSync('regions-data.js', content, 'utf8');
    console.log(`Updated ${updateCount} descriptions, ${failCount} failed`);
}

function replaceDescription(content, regionId, countryId, cityId, newDesc) {
    // Escape single quotes in description
    const escapedDesc = newDesc.replace(/'/g, "\\'");
    
    // Find the city block by its id (uses single quotes in the data)
    const cityIdPattern = `id: '${cityId}'`;
    const idx = content.indexOf(cityIdPattern);
    if (idx === -1) return null;
    
    // Find description field after this city id - handle escaped quotes with (?:[^'\\]|\\.)*
    const descPattern = /description: '((?:[^'\\]|\\.)*)'/;
    const afterCity = content.substring(idx);
    const descMatch = afterCity.match(descPattern);
    if (!descMatch) return null;
    
    const descStart = idx + afterCity.indexOf(descMatch[0]);
    const descEnd = descStart + descMatch[0].length;
    
    return content.substring(0, descStart) + `description: '${escapedDesc}'` + content.substring(descEnd);
}

function replaceAttractions(content, regionId, countryId, cityId, newAttractions) {
    const cityIdPattern = `id: '${cityId}'`;
    const idx = content.indexOf(cityIdPattern);
    if (idx === -1) return null;
    
    // Find attractions array after this city id
    const afterCity = content.substring(idx);
    const attrStart = afterCity.indexOf('attractions: [');
    if (attrStart === -1) return null;
    
    // Find the matching closing bracket
    let depth = 0;
    let attrEnd = -1;
    const searchFrom = idx + attrStart;
    for (let i = searchFrom; i < content.length; i++) {
        if (content[i] === '[') depth++;
        else if (content[i] === ']') {
            depth--;
            if (depth === 0) {
                attrEnd = i + 1;
                break;
            }
        }
    }
    if (attrEnd === -1) return null;
    
    // Build new attractions string with single quotes
    const attrStr = 'attractions: [\n' + newAttractions.map(a => {
        const name = a.name.replace(/'/g, "\\'");
        const type = a.type.replace(/'/g, "\\'");
        const desc = a.description.replace(/'/g, "\\'");
        return `                    { name: '${name}', type: '${type}', description: '${desc}' }`;
    }).join(',\n') + '\n                ]';
    
    return content.substring(0, searchFrom) + attrStr + content.substring(attrEnd);
}

// Only run if this is the main script being called with --apply flag
if (process.argv.includes('--apply')) {
    applyUpdates();
} else {
    console.log(`Loaded ${Object.keys(cityUpdates).length} city updates. Use --apply to apply them.`);
}

module.exports = { cityUpdates, applyUpdates, replaceDescription, replaceAttractions };
