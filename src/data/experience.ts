// Wonderlust Explorer - Dataset de Experiencias
// Contiene exactamente 100 experiencias curadas en 5 categorías obligatorias:
// Adventure, Culture, Food, Wellness, Nature

export type ExperienceCategory = 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export const experiences: Experience[] = [
  {
    "id": "1",
    "title": "Rafting en los rápidos del río Pacuare",
    "description": "Desciende por emocionantes rápidos de clase IV rodeados de exuberante selva tropical y cascadas.",
    "category": "Adventure",
    "destination": "Turrialba, Costa Rica",
    "price": 135,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "2",
    "title": "Trekking en el Glaciar Perito Moreno",
    "description": "Caminata con crampones sobre el hielo milenario con vistas panorámicas a lagos y grietas azules.",
    "category": "Adventure",
    "destination": "El Calafate, Argentina",
    "price": 240,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "3",
    "title": "Buceo con tiburones ballena en Ningaloo",
    "description": "Navega y sumérgete junto a los peces más grandes del océano en un arrecife protegido.",
    "category": "Adventure",
    "destination": "Exmouth, Australia",
    "price": 320,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "4",
    "title": "Parapente sobre los picos de Interlaken",
    "description": "Vuela en tándem entre los lagos Thun y Brienz con el imponente trío Eiger, Mönch y Jungfrau de fondo.",
    "category": "Adventure",
    "destination": "Interlaken, Suiza",
    "price": 190,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "5",
    "title": "Bungee jumping en el puente Kawarau",
    "description": "Lánzate al vacío desde la histórica cuna del salto en bungee a 43 metros sobre el cañón.",
    "category": "Adventure",
    "destination": "Queenstown, Nueva Zelanda",
    "price": 165,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "6",
    "title": "Sandboarding en las dunas de Huacachina",
    "description": "Recorre en bólidos areneros y deslízate en tabla por las crestas doradas del desierto iqueño.",
    "category": "Adventure",
    "destination": "Ica, Perú",
    "price": 45,
    "rating": 4.6,
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "7",
    "title": "Expedición en kayak por los fiordos de Nærøyfjord",
    "description": "Rema en aguas cristalinas entre paredes verticales de roca catalogadas como Patrimonio Mundial.",
    "category": "Adventure",
    "destination": "Flåm, Noruega",
    "price": 155,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "8",
    "title": "Escalada en roca sobre los acantilados de Krabi",
    "description": "Ascenso guiado por formaciones kársticas de piedra caliza frente a las aguas turquesa de Railay.",
    "category": "Adventure",
    "destination": "Krabi, Tailandia",
    "price": 75,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "9",
    "title": "Travesía en trineo de perros huskies en Laponia",
    "description": "Guía tu propio equipo de huskies a través de bosques boreales cubiertos de nieve virgen.",
    "category": "Adventure",
    "destination": "Rovaniemi, Finlandia",
    "price": 210,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "10",
    "title": "Exploración de cavernas de hielo en Vatnajökull",
    "description": "Adéntrate en bóvedas subterráneas de hielo azul translúcido formadas de forma natural por el deshielo.",
    "category": "Adventure",
    "destination": "Höfn, Islandia",
    "price": 180,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "11",
    "title": "Vuelo en globo aerostático sobre Capadocia",
    "description": "Eleva el vuelo al amanecer sobre las chimeneas de hadas y los valles lunares de Göreme.",
    "category": "Adventure",
    "destination": "Göreme, Turquía",
    "price": 250,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "12",
    "title": "Surf en las olas legendarias de Uluwatu",
    "description": "Sesión guiada en arrecife para surfistas intermedios al pie de imponentes acantilados balineses.",
    "category": "Adventure",
    "destination": "Bali, Indonesia",
    "price": 85,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "13",
    "title": "Descenso en tirolina por el Bosque Nuboso de Monteverde",
    "description": "Cruza el dosel selvático a través de un circuito de tirolinas kilométricas y puentes colgantes.",
    "category": "Adventure",
    "destination": "Monteverde, Costa Rica",
    "price": 95,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "14",
    "title": "Heliesquí en las cordilleras de Whistler",
    "description": "Accede en helicóptero a pendientes vírgenes de nieve polvo con guías alpinos certificados.",
    "category": "Adventure",
    "destination": "Whistler, Canadá",
    "price": 890,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "15",
    "title": "Safari en quad por el desierto de Merzouga",
    "description": "Aventura todoterreno entre las dunas de Erg Chebbi con parada bajo las estrellas bereberes.",
    "category": "Adventure",
    "destination": "Merzouga, Marruecos",
    "price": 110,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "16",
    "title": "Barranquismo en los cañones de Ticino",
    "description": "Salta pozas de aguas esmeralda, deslízate por toboganes de granito y desciende en rápel técnico.",
    "category": "Adventure",
    "destination": "Locarno, Suiza",
    "price": 140,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "17",
    "title": "Ciclismo de descenso por la Carretera de la Muerte",
    "description": "Ruta vertiginosa desde las alturas andinas de La Cumbre hasta la selva de los Yungas.",
    "category": "Adventure",
    "destination": "La Paz, Bolivia",
    "price": 120,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "18",
    "title": "Snorkel nocturno con mantarrayas gigantes",
    "description": "Ilumina las aguas del Pacífico y presencia la danza alimenticia de gigantescas mantas marinas.",
    "category": "Adventure",
    "destination": "Kona, Hawái, Estados Unidos",
    "price": 175,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1544551763-77ef2d0cf96c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "19",
    "title": "Kitesurf en la laguna de Dakhla",
    "description": "Vientos constantes y aguas planas en una reserva natural entre el desierto y el Atlántico.",
    "category": "Adventure",
    "destination": "Dakhla, Marruecos",
    "price": 130,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "20",
    "title": "Vuelo en tirolina sobre el Cañón del Cobre",
    "description": "Desafía la gravedad en el sistema de tirolinas más extenso del mundo cruzando abismos imponentes.",
    "category": "Adventure",
    "destination": "Chihuahua, México",
    "price": 85,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "21",
    "title": "Ceremonia tradicional del té en Kioto",
    "description": "Aprende el ritual del matcha y la filosofía Wabi-Sabi en una auténtica machiya centenaria.",
    "category": "Culture",
    "destination": "Kioto, Japón",
    "price": 70,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "22",
    "title": "Visita privada al Museo del Louvre tras el cierre",
    "description": "Recorrido exclusivo sin multitudes por las obras maestras renacentistas de París.",
    "category": "Culture",
    "destination": "París, Francia",
    "price": 290,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "23",
    "title": "Taller de caligrafía y filosofía Zen",
    "description": "Domina los trazos de tinta sumi-e junto a un maestro monje en los jardines de Daitoku-ji.",
    "category": "Culture",
    "destination": "Kioto, Japón",
    "price": 80,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "24",
    "title": "Recorrido arqueológico por Machu Picchu al amanecer",
    "description": "Explora la ciudadela inca guiado por un arqueólogo experto antes de la llegada del tren matutino.",
    "category": "Culture",
    "destination": "Cusco, Perú",
    "price": 195,
    "rating": 5,
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "25",
    "title": "Noche de ópera y visita entre bastidores en La Scala",
    "description": "Descubre los secretos escenográficos y disfruta de una velada lírica en Milán.",
    "category": "Culture",
    "destination": "Milán, Italia",
    "price": 260,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "26",
    "title": "Exploración guiada de los templos de Angkor Wat",
    "description": "Descifra los relieves del Imperio Jemer y las raíces estranguladoras de Ta Prohm con un historiador.",
    "category": "Culture",
    "destination": "Siem Riep, Camboya",
    "price": 110,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "27",
    "title": "Ruta literaria por el Dublín de Joyce y Wilde",
    "description": "Camina por Trinity College, antiguas librerías y emblemáticos pubs de escritores legendarios.",
    "category": "Culture",
    "destination": "Dublín, Irlanda",
    "price": 55,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "28",
    "title": "Taller de mosaicos bizantinos en Rávena",
    "description": "Crea tu propia pieza artesanal utilizando teselas de vidrio y oro siguiendo técnicas paleocristianas.",
    "category": "Culture",
    "destination": "Rávena, Italia",
    "price": 95,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "29",
    "title": "Espectáculo íntimo de Flamenco en el Sacromonte",
    "description": "Vive el duende gitano en las auténticas cuevas de Granada con guitarristas y cantaores locales.",
    "category": "Culture",
    "destination": "Granada, España",
    "price": 65,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "30",
    "title": "Visita privada al Coliseo y pasadizos subterráneos",
    "description": "Accede a la arena y a las cámaras donde aguardaban gladiadores y fieras en la antigua Roma.",
    "category": "Culture",
    "destination": "Roma, Italia",
    "price": 130,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "31",
    "title": "Ruta de la arquitectura Bauhaus en Dessau",
    "description": "Estudio guiado de los edificios maestros, muebles funcionales y talleres que revolucionaron el diseño.",
    "category": "Culture",
    "destination": "Dessau, Alemania",
    "price": 85,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "32",
    "title": "Exploración de la Ciudad Prohibida y Palacio Imperial",
    "description": "Conoce las dinastías Ming y Qing recorriendo patios ceremoniales y salones de trono en Pekín.",
    "category": "Culture",
    "destination": "Pekín, China",
    "price": 90,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "33",
    "title": "Taller de tejido textil tradicional andino",
    "description": "Aprende el teñido natural con plantas y la técnica de telar de cintura en el Valle Sagrado.",
    "category": "Culture",
    "destination": "Urubamba, Perú",
    "price": 60,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "34",
    "title": "Inmersión en la historia del Tango en San Telmo",
    "description": "Clase privada con milongueros veteranos seguida de una cena con espectáculo en un conventillo.",
    "category": "Culture",
    "destination": "Buenos Aires, Argentina",
    "price": 105,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "35",
    "title": "Recorrido nocturno por las Pirámides de Guiza",
    "description": "Contempla la Gran Esfinge bajo las luces del anochecer con explicaciones de egiptólogos.",
    "category": "Culture",
    "destination": "El Cairo, Egipto",
    "price": 140,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "36",
    "title": "Ruta del Modernismo y las casas de Gaudí",
    "description": "Acceso prioritario a Casa Batlló, La Pedrera y la majestuosa Sagrada Familia en Barcelona.",
    "category": "Culture",
    "destination": "Barcelona, España",
    "price": 115,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "37",
    "title": "Exploración de la medina y madrazas de Fez",
    "description": "Pasea por el laberinto peatonal más grande del mundo y visita la curtidoría Chouara.",
    "category": "Culture",
    "destination": "Fez, Marruecos",
    "price": 50,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "38",
    "title": "Taller de talla de máscaras venecianas",
    "description": "Pinta y decora tu máscara con pan de oro guiado por un artesano tradicional del Carnaval.",
    "category": "Culture",
    "destination": "Venecia, Italia",
    "price": 85,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "39",
    "title": "Ruta arqueológica por Petra al atardecer",
    "description": "Cruza el estrecho Siq hasta el Tesoro iluminado por miles de velas bajo un cielo despejado.",
    "category": "Culture",
    "destination": "Wadi Musa, Jordania",
    "price": 160,
    "rating": 5,
    "imageUrl": "https://images.unsplash.com/photo-1579606032834-d19940176880?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "40",
    "title": "Música clásica en la iglesia de San Nicolás",
    "description": "Concierto de cámara interpretando a Dvořák y Mozart en el corazón del barrio barroco de Malá Strana.",
    "category": "Culture",
    "destination": "Praga, República Checa",
    "price": 45,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "41",
    "title": "Ruta gastronómica de tacos y mezcal en Oaxaca",
    "description": "Degustación de tlayudas, moles ancestrales y mezcales artesanales en mercados tradicionales.",
    "category": "Food",
    "destination": "Oaxaca, México",
    "price": 75,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "42",
    "title": "Clase magistral de pasta fresca y tiramisú en Bolonia",
    "description": "Elabora tagliatelle al ragù y tortellini artesanales con una auténtica sfoglina boloñesa.",
    "category": "Food",
    "destination": "Bolonia, Italia",
    "price": 120,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "43",
    "title": "Tour de sushi en el mercado exterior de Tsukiji",
    "description": "Prueba nigiris de atún azul, erizo de mar y tamagoyaki fresco guiado por un chef local.",
    "category": "Food",
    "destination": "Tokio, Japón",
    "price": 110,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "44",
    "title": "Cata de vinos y quesos en los castillos de Burdeos",
    "description": "Visita bodegas Grand Cru Classé en Saint-Émilion y marida añadas selectas con quesos franceses.",
    "category": "Food",
    "destination": "Burdeos, Francia",
    "price": 195,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "45",
    "title": "Ruta de pintxos y sidra vasca en San Sebastián",
    "description": "Descubre los bares más emblemáticos de la Parte Vieja degustando creaciones culinarias de autor.",
    "category": "Food",
    "destination": "San Sebastián, España",
    "price": 85,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "46",
    "title": "Taller de cocina tailandesa orgánica en Chiang Mai",
    "description": "Recolecta hierbas frescas en una granja ecológica y cocina pad thai y curry verde aromático.",
    "category": "Food",
    "destination": "Chiang Mai, Tailandia",
    "price": 65,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "47",
    "title": "Degustación de ceviches y pisco sour en Lima",
    "description": "Descubre por qué Lima es la capital gastronómica con visitas a huariques y terminales pesqueros.",
    "category": "Food",
    "destination": "Lima, Perú",
    "price": 90,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "48",
    "title": "Caza de trufas negras en los bosques del Piamonte",
    "description": "Acompaña a un truficultor y su perro adiestrado por Alba y degusta platos de trufa recién extraída.",
    "category": "Food",
    "destination": "Alba, Italia",
    "price": 210,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "49",
    "title": "Recorrido de street food nocturno en George Town",
    "description": "Prueba char kway teow, laksa asam y roti canai en las históricas calles coloniales de Penang.",
    "category": "Food",
    "destination": "Penang, Malasia",
    "price": 40,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "50",
    "title": "Clase de panadería y repostería artesanal en Viena",
    "description": "Domina el estirado manual de masa para el tradicional Apfelstrudel y degústalo con café vienés.",
    "category": "Food",
    "destination": "Viena, Austria",
    "price": 80,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "51",
    "title": "Tour cafetero de especialidad en el Eje Cafetero",
    "description": "Desde la semilla hasta la taza: camina entre cafetales arábigos y realiza catas con baristas.",
    "category": "Food",
    "destination": "Salento, Colombia",
    "price": 55,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "52",
    "title": "Cena kaiseki con vistas a los cerezos de Arashiyama",
    "description": "Menú de doce tiempos con ingredientes de temporada servido en vajilla lacada tradicional.",
    "category": "Food",
    "destination": "Kioto, Japón",
    "price": 230,
    "rating": 5,
    "imageUrl": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "53",
    "title": "Taller de elaboración de chocolate belga",
    "description": "Aprende el templado de cacao de origen y crea bombones praliné con un maestro chocolatero.",
    "category": "Food",
    "destination": "Bruselas, Bélgica",
    "price": 70,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "54",
    "title": "Degustación de mariscos frescos en el puerto de Bergen",
    "description": "Prueba cangrejo real, salmón salvaje y ostras nórdicas al pie de las casas de madera de Bryggen.",
    "category": "Food",
    "destination": "Bergen, Noruega",
    "price": 130,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "55",
    "title": "Cata de quesos gouda y edam en granjas holandesas",
    "description": "Visita queserías familiares, conoce el proceso de maduración y marida con cervezas de abadía.",
    "category": "Food",
    "destination": "Gouda, Países Bajos",
    "price": 65,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "56",
    "title": "Ruta de dumplings xiaolongbao en Shanghái",
    "description": "Descubre los mejores puestos y restaurantes locales para saborear bollos al vapor con caldo secreto.",
    "category": "Food",
    "destination": "Shanghái, China",
    "price": 50,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "57",
    "title": "Cena gourmet con maridaje en los viñedos de Mendoza",
    "description": "Asado campestre de varios tiempos maridado con vinos Malbec de altura al pie de los Andes.",
    "category": "Food",
    "destination": "Mendoza, Argentina",
    "price": 145,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "58",
    "title": "Tour gastronómico de especias en Zanzíbar",
    "description": "Pasea por plantaciones de clavo, canela y nuez moscada, y degusta un banquete suajili casero.",
    "category": "Food",
    "destination": "Stone Town, Tanzania",
    "price": 55,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "59",
    "title": "Cata de aceites de oliva virgen extra en Jaén",
    "description": "Pasea por el mar de olivos andaluz y aprende a reconocer perfiles aromáticos frutados e intensos.",
    "category": "Food",
    "destination": "Úbeda, España",
    "price": 45,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "60",
    "title": "Taller de ramen tradicional desde cero en Osaka",
    "description": "Prepara el caldo tonkotsu durante horas, estira fideos frescos y asa el chashu marinado.",
    "category": "Food",
    "destination": "Osaka, Japón",
    "price": 95,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "61",
    "title": "Retiro de yoga y meditación entre los arrozales de Ubud",
    "description": "Prácticas diarias de Vinyasa y Hatha yoga rodeado del murmullo del río y vegetación tropical.",
    "category": "Wellness",
    "destination": "Ubud, Indonesia",
    "price": 110,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "62",
    "title": "Circuito termal y baño mineral en la Laguna Azul",
    "description": "Sumérgete en aguas geotérmicas ricas en sílice con mascarilla de barro blanco curativo.",
    "category": "Wellness",
    "destination": "Grindavík, Islandia",
    "price": 135,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "63",
    "title": "Tratamiento ayurvédico Panchakarma en Kerala",
    "description": "Masajes con aceites medicados calientes Shirodhara y consulta personalizada con médico védico.",
    "category": "Wellness",
    "destination": "Kochi, India",
    "price": 160,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "64",
    "title": "Baño de bosque Shinrin-yoku en Nagano",
    "description": "Caminata sensorial consciente entre cedros milenarios guiada por terapeutas forestales.",
    "category": "Wellness",
    "destination": "Nagano, Japón",
    "price": 75,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "65",
    "title": "Experiencia tradicional en Onsen natural con vista al Monte Fuji",
    "description": "Relájate en aguas termales volcánicas al aire libre mientras contemplas el pico nevado.",
    "category": "Wellness",
    "destination": "Hakone, Japón",
    "price": 180,
    "rating": 5,
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "66",
    "title": "Circuito en baños termales históricos de Széchenyi",
    "description": "Disfruta de piscinas termales neobarrocas al aire libre y saunas en el balneario de Budapest.",
    "category": "Wellness",
    "destination": "Budapest, Hungría",
    "price": 50,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "67",
    "title": "Hammam tradicional y exfoliación con jabón negro en Marrakech",
    "description": "Ritual purificante en baños de vapor aromatizados con eucalipto y masaje con aceite de argán.",
    "category": "Wellness",
    "destination": "Marrakech, Marruecos",
    "price": 65,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "68",
    "title": "Talasoterapia marina en los acantilados de Bretaña",
    "description": "Hidroterapia con agua de mar pura, algas drenantes y brisa marina ionizada en Saint-Malo.",
    "category": "Wellness",
    "destination": "Saint-Malo, Francia",
    "price": 170,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "69",
    "title": "Sesión de cuencos tibetanos y sanación sonora en Katmandú",
    "description": "Armoniza tus chakras mediante vibraciones acústicas de metales sagrados a los pies del Himalaya.",
    "category": "Wellness",
    "destination": "Katmandú, Nepal",
    "price": 45,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "70",
    "title": "Sauna flotante de leña y chapuzón ártico en Tromsø",
    "description": "Alternancia de calor intenso con inmersión en las gélidas aguas de los fiordos bajo el cielo ártico.",
    "category": "Wellness",
    "destination": "Tromsø, Noruega",
    "price": 90,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "71",
    "title": "Flotación en cabina de privación sensorial y sal de Epsom",
    "description": "Gravedad cero para relajar músculos, liberar tensiones espinales y calmar la mente por completo.",
    "category": "Wellness",
    "destination": "Berlín, Alemania",
    "price": 60,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "72",
    "title": "Baño en el Mar Muerto y envoltura de lodo negro",
    "description": "Flotación natural sin esfuerzo en el punto más bajo de la Tierra con minerales rejuvenecedores.",
    "category": "Wellness",
    "destination": "Ein Bokek, Israel",
    "price": 85,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "73",
    "title": "Retiro de silencio y mindfulness en las montañas de Chiang Rai",
    "description": "Tres días de contemplación, meditación guiada y desconexión digital en un monasterio verde.",
    "category": "Wellness",
    "destination": "Chiang Rai, Tailandia",
    "price": 130,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "74",
    "title": "Termas naturales de Saturnia entre cascadas de toba",
    "description": "Báñate en pozas escalonadas de agua sulfurosa a 37.5 grados en el corazón de la campiña toscana.",
    "category": "Wellness",
    "destination": "Manciano, Italia",
    "price": 55,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "75",
    "title": "Ceremonia de Temazcal con chamán tradicional",
    "description": "Purificación física y espiritual en una cabaña de sudor con hierbas medicinales y cantos sagrados.",
    "category": "Wellness",
    "destination": "Tulum, México",
    "price": 95,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "76",
    "title": "Spa alpino con aromaterapia de heno y pino cembro",
    "description": "Masajes con esencias de hierbas de montaña y saunas panorámicas con vistas a los Dolomitas.",
    "category": "Wellness",
    "destination": "Ortisei, Italia",
    "price": 190,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "77",
    "title": "Acupuntura y diagnóstico de medicina tradicional china",
    "description": "Sesión integral para restablecer el flujo del Qi con agujas estériles y moxibustión.",
    "category": "Wellness",
    "destination": "Hangzhou, China",
    "price": 70,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1512290900672-1f5be4ecff7c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "78",
    "title": "Crioterapia de cuerpo entero y recuperación atlética",
    "description": "Estimula la circulación y reduce inflamaciones con tres minutos a -110 grados en cámara controlada.",
    "category": "Wellness",
    "destination": "Londres, Reino Unido",
    "price": 80,
    "rating": 4.6,
    "imageUrl": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "79",
    "title": "Masaje balinés con piedras volcánicas calientes",
    "description": "Terapia relajante que combina presiones profundas y calor focalizado para disolver contracturas.",
    "category": "Wellness",
    "destination": "Seminyak, Indonesia",
    "price": 60,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "80",
    "title": "Terapia de aguas termales en Pamukkale",
    "description": "Camina descalzo sobre las terrazas blancas de travertino y sumérgete en la piscina antigua de Cleopatra.",
    "category": "Wellness",
    "destination": "Denizli, Turquía",
    "price": 50,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "81",
    "title": "Safari fotográfico de los Cinco Grandes en el Serengeti",
    "description": "Observa leones, leopardos, elefantes y rinocerontes en vehículos 4x4 durante la gran migración.",
    "category": "Nature",
    "destination": "Serengeti, Tanzania",
    "price": 490,
    "rating": 5,
    "imageUrl": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "82",
    "title": "Avistamiento de Auroras Boreales en campamento ártico",
    "description": "Caza de auroras boreales con guía astrofotógrafo y fogata bajo cielos limpios de contaminación.",
    "category": "Nature",
    "destination": "Abisko, Suecia",
    "price": 185,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "83",
    "title": "Navegación entre icebergs en el Fiordo de Ilulissat",
    "description": "Navega en catamarán silencioso entre colosos de hielo desprendidos del glaciar Sermeq Kujalleq.",
    "category": "Nature",
    "destination": "Ilulissat, Groenlandia",
    "price": 270,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "84",
    "title": "Encuentro con gorilas de montaña en Bwindi",
    "description": "Rastreo a pie por la selva impenetrable para observar a una familia de gorilas en su hábitat libre.",
    "category": "Nature",
    "destination": "Bwindi, Uganda",
    "price": 780,
    "rating": 5,
    "imageUrl": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "85",
    "title": "Exploración de la Gran Barrera de Coral en hidroavión",
    "description": "Vuelo panorámico sobre Heart Reef seguido de desembarco para hacer snorkel en aguas prístinas.",
    "category": "Nature",
    "destination": "Islas Whitsunday, Australia",
    "price": 360,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "86",
    "title": "Paseo en canoa por los meandros del Amazonas",
    "description": "Navega por igapós inundados avistando delfines rosados, perezosos y aves exóticas al alba.",
    "category": "Nature",
    "destination": "Iquitos, Perú",
    "price": 140,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "87",
    "title": "Senderismo entre secuoyas gigantes en Yosemite",
    "description": "Camina bajo árboles milenarios de más de 80 metros de altura en el bosque de Mariposa Grove.",
    "category": "Nature",
    "destination": "California, Estados Unidos",
    "price": 65,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "88",
    "title": "Recorrido por las cataratas de Iguazú en lancha rápida",
    "description": "Acércate hasta la imponente Garganta del Diablo y siente la fuerza del mayor sistema de caídas del planeta.",
    "category": "Nature",
    "destination": "Puerto Iguazú, Argentina",
    "price": 95,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "89",
    "title": "Observación de ballenas jorobadas en la Bahía de Samaná",
    "description": "Navega en catamarán para presenciar los saltos nupciales de ballenas que migran a aguas caribeñas.",
    "category": "Nature",
    "destination": "Samaná, República Dominicana",
    "price": 85,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "90",
    "title": "Caminata entre lagos turquesa en Plitvice",
    "description": "Pasea por pasarelas de madera sobre 16 lagos escalonados conectados por cascadas cristalinas.",
    "category": "Nature",
    "destination": "Plitvice, Croacia",
    "price": 55,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "91",
    "title": "Expedición a las islas Galápagos y tortugas gigantes",
    "description": "Observa iguanas marinas, piqueros de patas azules y tortugas centenarias en su ecosistema virgen.",
    "category": "Nature",
    "destination": "Puerto Ayora, Ecuador",
    "price": 380,
    "rating": 5,
    "imageUrl": "https://images.unsplash.com/photo-1544551763-77ef2d0cf96c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "92",
    "title": "Caminata por el Parque Nacional de los Lagos de Banff",
    "description": "Ruta fotográfica alrededor del Lago Louise y el Lago Moraine con fondo de glaciares rocosos.",
    "category": "Nature",
    "destination": "Banff, Canadá",
    "price": 70,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "93",
    "title": "Vuelo en helicóptero sobre los volcanes de Hawái",
    "description": "Contempla columnas de vapor volcánico y coladas de lava activa sobre el Parque Nacional Kilauea.",
    "category": "Nature",
    "destination": "Hilo, Hawái, Estados Unidos",
    "price": 340,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "94",
    "title": "Amanecer en el Salar de Uyuni con efecto espejo",
    "description": "Fotografía los reflejos infinitos del cielo sobre la mayor costra salina continua del planeta.",
    "category": "Nature",
    "destination": "Uyuni, Bolivia",
    "price": 110,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "95",
    "title": "Rastreo de lémures en la reserva de Andasibe",
    "description": "Escucha el canto mágico del Indri y camina por la selva lluviosa primaria de Madagascar.",
    "category": "Nature",
    "destination": "Andasibe, Madagascar",
    "price": 125,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "96",
    "title": "Safari acuático en el Delta del Okavango",
    "description": "Navega en canoa tradicional mokoro entre lirios de agua avistando hipopótamos y antílopes lechwe.",
    "category": "Nature",
    "destination": "Maun, Botsuana",
    "price": 410,
    "rating": 4.9,
    "imageUrl": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "97",
    "title": "Tour geológico por el Cañón del Antílope",
    "description": "Recorre el cañón de ranura guiado por un guía navajo mientras los rayos de luz esculpen la arenisca roja.",
    "category": "Nature",
    "destination": "Page, Arizona, Estados Unidos",
    "price": 95,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "98",
    "title": "Avistamiento de aves en el Pantanal",
    "description": "Observa guacamayos jacinto, tucanes toco y jaguares en el mayor humedal tropical del mundo.",
    "category": "Nature",
    "destination": "Cuiabá, Brasil",
    "price": 230,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "99",
    "title": "Paseo en barco por los acantilados de Moher",
    "description": "Admira desde el Atlántico los colosales farellones de más de 200 metros habitados por frailecillos.",
    "category": "Nature",
    "destination": "Doolin, Irlanda",
    "price": 45,
    "rating": 4.7,
    "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "100",
    "title": "Exploración de géiseres en El Tatio al amanecer",
    "description": "Observa fumarolas y columnas de vapor geotérmico a más de 4.300 metros en el desierto de Atacama.",
    "category": "Nature",
    "destination": "San Pedro de Atacama, Chile",
    "price": 80,
    "rating": 4.8,
    "imageUrl": "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80"
  }
];

export default experiences;
