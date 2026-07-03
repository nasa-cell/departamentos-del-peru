const departments = [
  {
    name: 'Amazonas',
    capital: 'Chachapoyas',
    regionNatural: 'Selva alta',
    population: '439,347',
    area: '39,249 km²',
    climate: 'Templado con lluvias en la selva alta',
    provinces: 'Chachapoyas, Bongará, Condorcanqui, Luya, Rodríguez de Mendoza, Bagua, Utcubamba',
    gastronomy: 'Cuy al palo, juanes, tacacho con cecina',
    touristSpots: 'Gocta, Kuelap, Leymebamba, Revash',
    flora: 'Orquídeas, helechos, cedros y molles',
    fauna: 'Dantas, monos, cóndores, tucanes',
    economy: 'Agricultura, turismo, artesanías',
    festivities: 'Fiesta de San Juan, Carnaval, Alasitas',
    history: 'Postal de la cultura Chachapoya y sus fortalezas andinas.',
    curiosities: 'Kuelap es conocida como la "Machu Picchu del Norte".',
    video: 'https://youtu.be/0yDfxjgB93k',
    images: [
      'https://via.placeholder.com/800x450?text=Amazonas+1',
      'https://via.placeholder.com/800x450?text=Amazonas+2',
      'https://via.placeholder.com/800x450?text=Amazonas+3'
    ]
  },

  {
    name: 'Áncash',
    capital: 'Huaraz',
    regionNatural: 'Costa y sierra',
    population: '1,083,519',
    area: '33,892 km²',
    climate: 'Frío en la sierra, templado en la costa',
    provinces: 'Huaraz, Santa, Huari, Recuay, Yungay, entre otras',
    gastronomy: 'Ceviche de trucha, pachamanca, choclo con queso',
    touristSpots: 'Huascarán, Pastoruri, Laguna 69, Callejón de Huaylas',
    flora: 'Quenual, ichu, puyas y helechos',
    fauna: 'Vicuñas, cóndores, cóndores, zorros',
    economy: 'Agricultura, minería, turismo',
    festivities: 'Señor de la Soledad, Carnaval Ancashino',
    history: 'Cuna de culturas preincaicas como Chavín.',
    curiosities: 'El Huascarán es el pico más alto del Perú.',
    video: 'https://youtu.be/beV4nl-Suwo',
    images: [
      'https://via.placeholder.com/800x450?text=%C3%81ncash+1',
      'https://via.placeholder.com/800x450?text=%C3%81ncash+2',
      'https://via.placeholder.com/800x450?text=%C3%81ncash+3'
    ]
  },
  {
    name: 'Apurímac',
    capital: 'Abancay',
    regionNatural: 'Sierra',
    population: '402,609',
    area: '20,895 km²',
    climate: 'Templado y frío',
    provinces: 'Abancay, Andahuaylas, Chincheros, Grau',
    gastronomy: 'Caldo de gallina, trucha frita, humitas',
    touristSpots: 'Saywite, Choquequirao, Valle del Apurímac',
    flora: 'Queuña, molle, cinchona',
    fauna: 'Vizcachas, pumas, aves andinas',
    economy: 'Ganadería, agricultura y pequeñas industrias',
    festivities: 'Señor de Pachachaca, Semana Santa',
    history: 'Una región de agradecimiento a la fertilidad del río Apurímac.',
    curiosities: 'Su nombre significa "el que habla claro" en quechua.',
    video: 'https://youtu.be/z-mDpCErjWI',
    images: [
      'https://via.placeholder.com/800x450?text=Apur%C3%ADmac+1',
      'https://via.placeholder.com/800x450?text=Apur%C3%ADmac+2',
      'https://via.placeholder.com/800x450?text=Apur%C3%ADmac+3'
    ]
  },
  {
    name: 'Arequipa',
    capital: 'Arequipa',
    regionNatural: 'Costa y sierra',
    population: '1,382,730',
    area: '63,345 km²',
    climate: 'Seco y soleado',
    provinces: 'Arequipa, Caylloma, Camaná, Caravelí, Islay, La Unión',
    gastronomy: 'Rocoto relleno, ocopa, chupe de camarones',
    touristSpots: 'Valle del Colca, Misti, Yanahuara, Chivay',
    flora: 'Totoras, cactus, algarrobos',
    fauna: 'Cóndores, llamas, vicuñas, zorros',
    economy: 'Agricultura, minería, turismo, comercio',
    festivities: 'Señor Cautivo de Ayabaca, Virgen de Chapi',
    history: 'La "Ciudad Blanca" conserva arquitectura colonial en sillar.',
    curiosities: 'El Cañón del Colca es uno de los más profundos del mundo.',
    video: 'https://youtu.be/bZwDRn2B07U',
    images: [
      'https://via.placeholder.com/800x450?text=Arequipa+1',
      'https://via.placeholder.com/800x450?text=Arequipa+2',
      'https://via.placeholder.com/800x450?text=Arequipa+3'
    ]
  },
  {
    name: 'Ayacucho',
    capital: 'Huamanga',
    regionNatural: 'Sierra',
    population: '668,213',
    area: '43,814 km²',
    climate: 'Templado-frío',
    provinces: 'Huamanga, Huanta, Cangallo, Vilcas Huamán, Sucre, entre otras',
    gastronomy: 'Puca picante, lechón al horno, humitas',
    touristSpots: 'Plaza Mayor de Huamanga, Laguna de Parinacochas, Wari',
    flora: 'Queñual, cedro, molle',
    fauna: 'Tarucas, ciervos, aves andinas',
    economy: 'Artesanías, agricultura, turismo cultural',
    festivities: 'Semana Santa, Virgen de la Natividad',
    history: 'Lugar fundacional de la independencia del Perú.',
    curiosities: 'Ayacucho tiene 33 iglesias coloniales en su ciudad principal.',
    video: 'https://youtu.be/Jo_4_tUG-DU',
    images: [
      'https://via.placeholder.com/800x450?text=Ayacucho+1',
      'https://via.placeholder.com/800x450?text=Ayacucho+2',
      'https://via.placeholder.com/800x450?text=Ayacucho+3'
    ]
  },
  {
    name: 'Cajamarca',
    capital: 'Cajamarca',
    regionNatural: 'Sierra',
    population: '1,606,578',
    area: '33,317 km²',
    climate: 'Templado, fresco en alturas',
    provinces: 'Cajamarca, Celendín, Cutervo, Chota, Jaén, San Ignacio, San Marcos, Santa Cruz',
    gastronomy: 'Cuy chactado, chicha de jora, dulce de manjar blanco',
    touristSpots: 'Baños del Inca, Cumbe Mayo, Cumbemayo, Otuzco',
    flora: 'Orquídeas, helechos, algarrobos',
    fauna: 'Venados, aves migratorias, osos de anteojos',
    economy: 'Minería, agricultura, ganadería',
    festivities: 'Carnaval, Señor de los Milagros',
    history: 'Conocida por la captura de Atahualpa en la era incaica.',
    curiosities: 'Cajamarca es famosa por sus manantiales termales.',
    video: 'https://youtu.be/ib_x1LHbnT4',
    images: [
      'https://via.placeholder.com/800x450?text=Cajamarca+1',
      'https://via.placeholder.com/800x450?text=Cajamarca+2',
      'https://via.placeholder.com/800x450?text=Cajamarca+3'
    ]
  },
  {
    name: 'Callao',
    capital: 'Callao',
    regionNatural: 'Costa',
    population: '1,129,853',
    area: '147 km²',
    climate: 'Templado costero',
    provinces: 'No tiene provincias, es provincia constitucional',
    gastronomy: 'Choritos a la chalaca, ceviche, carapulcra',
    touristSpots: 'Islas Palomino, Fortaleza del Real Felipe, el litoral',
    flora: 'Manglares y vegetación costera',
    fauna: 'Aves marinas, lobos marinos, peces',
    economy: 'Actividad portuaria, pesca, comercio internacional',
    festivities: 'Fiesta de San Pedro y San Pablo, Señor de los Milagros',
    history: 'Puerta marítima del Perú desde la época colonial.',
    curiosities: 'Callao alberga uno de los puertos más importantes del Pacífico.',
    video: 'https://youtu.be/urn1LXwgrwo',
    images: [
      'https://via.placeholder.com/800x450?text=Callao+1',
      'https://via.placeholder.com/800x450?text=Callao+2',
      'https://via.placeholder.com/800x450?text=Callao+3'
    ]
  },
  {
    name: 'Cusco',
    capital: 'Cusco',
    regionNatural: 'Sierra',
    population: '1,370,782',
    area: '71,986 km²',
    climate: 'Templado de altura',
    provinces: 'Cusco, Urubamba, Quispicanchis, Calca, Canas, Canchis, Paruro, entre otras',
    gastronomy: 'Cuy chactado, chupe de quinua, choclo con queso',
    touristSpots: 'Machu Picchu, Valle Sagrado, Sacsayhuamán, Pisac',
    flora: 'Ichu, queñual, molle',
    fauna: 'Llamas, alpacas, vicuñas, aves andinas',
    economy: 'Turismo, agricultura, artesanía',
    festivities: 'Inti Raymi, Señor de los Temblores, Corpus Christi',
    history: 'Centro del antiguo Imperio Inca y ruta hacia Machu Picchu.',
    curiosities: 'Cusco fue considerada el "Ombligo del Mundo" por los incas.',
    video: 'https://youtu.be/-wWwk7OLggA',
    images: [
      'https://via.placeholder.com/800x450?text=Cusco+1',
      'https://via.placeholder.com/800x450?text=Cusco+2',
      'https://via.placeholder.com/800x450?text=Cusco+3'
    ]
  },
  {
    name: 'Huancavelica',
    capital: 'Huancavelica',
    regionNatural: 'Sierra',
    population: '365,318',
    area: '22,131 km²',
    climate: 'Frío y seco',
    provinces: 'Huancavelica, Castrovirreyna, Churcampa, Tayacaja, Angaraes',
    gastronomy: 'Carapulcra, habas con adobo, cuy al horno',
    touristSpots: 'Nevado Chunta, Baños del Inca, Pampas',
    flora: 'Ichu, queñual, rastrojo',
    fauna: 'Aves andinas, vizcachas, cóndores',
    economy: 'Agricultura, minería, pastoril',
    festivities: 'San Sebastián, Semana Santa',
    history: 'Fuerte tradición minera colonial y andina.',
    curiosities: 'Posee uno de los climas más fríos de la sierra central.',
    video: 'https://youtu.be/VhiHEy2jdL0',
    images: [
      'https://via.placeholder.com/800x450?text=Huancavelica+1',
      'https://via.placeholder.com/800x450?text=Huancavelica+2',
      'https://via.placeholder.com/800x450?text=Huancavelica+3'
    ]
  },
  {
    name: 'Huánuco',
    capital: 'Huánuco',
    regionNatural: 'Selva alta y sierra',
    population: '820,610',
    area: '36,848 km²',
    climate: 'Templado de montaña y cálido en la selva',
    provinces: 'Huánuco, Leoncio Prado, Huamalíes, Yarowilca, Dos de Mayo, Pachitea',
    gastronomy: 'Patarashca, juanes, cecina',
    touristSpots: 'Catarata de Tingo, Kotosh, Gran Pajaten',
    flora: 'Orquídeas, heliconias, cedros',
    fauna: 'Monos, tapires, aves exóticas',
    economy: 'Agricultura, ganadería, turismo',
    festivities: 'Semana Santa, Fiesta de la Virgen de las Mercedes',
    history: 'Región con vestigios de civilizaciones preincaicas y chancas.',
    curiosities: 'Huánuco fue escenario del primer grito libertario de San Martín.',
    video: 'https://youtu.be/IF4EgIM-TQk',
    images: [
      'https://via.placeholder.com/800x450?text=Hu%C3%A1nuco+1',
      'https://via.placeholder.com/800x450?text=Hu%C3%A1nuco+2',
      'https://via.placeholder.com/800x450?text=Hu%C3%A1nuco+3'
    ]
  },
  {
    name: 'Ica',
    capital: 'Ica',
    regionNatural: 'Costa',
    population: '850,765',
    area: '21,305 km²',
    climate: 'Cálido y seco',
    provinces: 'Ica, Pisco, Nazca, Palpa',
    gastronomy: 'Ceviche, dulce de lúcuma, carapulcra',
    touristSpots: 'Líneas de Nazca, Huacachina, Paracas, Islas Ballestas',
    flora: 'Cactus, algarrobo, tamarindo',
    fauna: 'Pelícanos, lobos marinos, zorros',
    economy: 'Viticultura, pesca, turismo',
    festivities: 'Fiesta de la Vendimia, Señor de Luren',
    history: 'Importante durante la civilización Nazca y la época colonial.',
    curiosities: 'Huacachina es un oasis natural cerca de Ica.',
    video: 'https://youtu.be/HQp7wGrbcNw',
    images: [
      'https://via.placeholder.com/800x450?text=Ica+1',
      'https://via.placeholder.com/800x450?text=Ica+2',
      'https://via.placeholder.com/800x450?text=Ica+3'
    ]
  },
  {
    name: 'Junín',
    capital: 'Huancayo',
    regionNatural: 'Sierra',
    population: '1,361,486',
    area: '44,197 km²',
    climate: 'Templado de montaña',
    provinces: 'Huancayo, Tarma, Jauja, Chupaca, Yauli, entre otras',
    gastronomy: 'Pachamanca, adobo, mazamorra',
    touristSpots: 'Parque Nacional Yanachaga-Chemillén, Laguna de Junín',
    flora: 'Queñual, achupalla, molle',
    fauna: 'Vizcachas, venados, aves andinas',
    economy: 'Ganadería, agricultura, minería y comercio',
    festivities: 'Señor de la Soledad, Fiesta de la Virgen de Cocharcas',
    history: 'Región estratégica en la sierra central del país.',
    curiosities: 'Huancayo es conocida como la "Perla de los Andes".',
    video: 'https://youtu.be/arItyZP6M40',
    images: [
      'https://via.placeholder.com/800x450?text=Jun%C3%ADn+1',
      'https://via.placeholder.com/800x450?text=Jun%C3%ADn+2',
      'https://via.placeholder.com/800x450?text=Jun%C3%ADn+3'
    ]
  },
  {
    name: 'La Libertad',
    capital: 'Trujillo',
    regionNatural: 'Costa y sierra',
    population: '1,786,403',
    area: '25,499 km²',
    climate: 'Seco y templado',
    provinces: 'Trujillo, Ascope, Virú, Pacasmayo, Santiago de Chuco, Otuzco, entre otras',
    gastronomy: 'Shambar, cabrito, ceviche',
    touristSpots: 'Chan Chan, Huacas del Sol y de la Luna, Huanchaco',
    flora: 'Pitas, totoras, algarrobos',
    fauna: 'Flamingos, aves costeras, peces',
    economy: 'Agricultura, pesca, turismo, comercio',
    festivities: 'Marinera, San Isidro Labrador, Carnaval',
    history: 'Centro del antiguo reino mochica y luego de la liberación.',
    curiosities: 'Trujillo es la capital de la marinera peruana.',
    video: 'https://youtu.be/YXXHwQrcpgM',
    images: [
      'https://via.placeholder.com/800x450?text=La+Libertad+1',
      'https://via.placeholder.com/800x450?text=La+Libertad+2',
      'https://via.placeholder.com/800x450?text=La+Libertad+3'
    ]
  },
  {
    name: 'Lambayeque',
    capital: 'Chiclayo',
    regionNatural: 'Costa',
    population: '1,135,898',
    area: '14,231 km²',
    climate: 'Cálido y seco',
    provinces: 'Chiclayo, Lambayeque, Ferreñafe',
    gastronomy: 'Arroz con pato, seco de cabrito, picarones',
    touristSpots: 'Túcume, Señor de Sipán, Bosque de Pómac',
    flora: 'Cactáceas, algarrobos, tunales',
    fauna: 'Aves marinas, zorros, reptiles',
    economy: 'Agricultura, pesca, turismo cultural',
    festivities: 'Fiesta de San Pedro, Señor de la Soledad',
    history: 'Sede de la cultura Mochica y Lambayeque.',
    curiosities: 'El Señor de Sipán es un hallazgo arqueológico mundialmente famoso.',
    video: 'https://youtu.be/kIqmWTjf7z0',
    images: [
      'https://via.placeholder.com/800x450?text=Lambayeque+1',
      'https://via.placeholder.com/800x450?text=Lambayeque+2',
      'https://via.placeholder.com/800x450?text=Lambayeque+3'
    ]
  },
  {
    name: 'Lima',
    capital: 'Lima',
    regionNatural: 'Costa',
    population: '10,000,000+',
    area: '2,672 km²',
    climate: 'Tropical desértico',
    provinces: 'Lima, Callao (provincia constitucional como región independiente)',
    gastronomy: 'Ceviche, lomo saltado, anticuchos',
    touristSpots: 'Plaza Mayor, Miraflores, Barranco, Parque de la Reserva',
    flora: 'Palmáceas, jardines urbanos, huertos',
    fauna: 'Aves urbanas, peces costeros',
    economy: 'Comercio, servicios, industria y cultura',
    festivities: 'Señor de los Milagros, Mistura',
    history: 'Fundada por Pizarro en 1535 como capital del Virreinato.',
    curiosities: 'Lima es conocida como la capital gastronómica de América.',
    video: 'https://youtu.be/tLsW5W4rr28',
    images: [
      'https://via.placeholder.com/800x450?text=Lima+1',
      'https://via.placeholder.com/800x450?text=Lima+2',
      'https://via.placeholder.com/800x450?text=Lima+3'
    ]
  },
  {
    name: 'Loreto',
    capital: 'Iquitos',
    regionNatural: 'Selva',
    population: '1,069,354',
    area: '368,852 km²',
    climate: 'Cálido húmedo',
    provinces: 'Maynas, Alto Amazonas, Loreto, Mariscal Ramón Castilla, Requena, Ucayali, entre otras',
    gastronomy: 'Juane, tacacho con cecina, inchicapi',
    touristSpots: 'Amazonas, río Marañón, Pacaya-Samiria, Iquitos',
    flora: 'Helechos, palmeras, lianas',
    fauna: 'Delfines rosados, caimanes, guacamayos',
    economy: 'Pesca, comercio, turismo ecológico',
    festivities: 'Festival de San Juan, Aniversario de Iquitos',
    history: 'Ciudad amazónica aislada accesible por río o avión.',
    curiosities: 'Iquitos es la ciudad más grande del mundo inaccesible por carretera.',
    video: 'https://youtu.be/XBkxrI_h5Z0',
    images: [
      'https://via.placeholder.com/800x450?text=Loreto+1',
      'https://via.placeholder.com/800x450?text=Loreto+2',
      'https://via.placeholder.com/800x450?text=Loreto+3'
    ]
  },
  {
    name: 'Madre de Dios',
    capital: 'Puerto Maldonado',
    regionNatural: 'Selva',
    population: '173,156',
    area: '25,874 km²',
    climate: 'Cálido húmedo',
    provinces: 'Tambopata, Manu, Tahuamanu',
    gastronomy: 'Pacucha, tacacho, platos con pescado amazónico',
    touristSpots: 'Tambopata, Manu, Reserva Nacional de Tambopata',
    flora: 'Palmeras, lianas, árboles tropicales',
    fauna: 'Jaguar, tapires, monos, aves tropicales',
    economy: 'Ecoturismo, minería aurífera artesanal',
    festivities: 'Aniversario de Puerto Maldonado, festivales amazónicos',
    history: 'Región reciente con reserva natural y selva virgen.',
    curiosities: 'Madre de Dios es la región peruana con mayor diversidad biológica.',
    video: 'https://youtu.be/UJLp62fkjeQ',
    images: [
      'https://via.placeholder.com/800x450?text=Madre+de+Dios+1',
      'https://via.placeholder.com/800x450?text=Madre+de+Dios+2',
      'https://via.placeholder.com/800x450?text=Madre+de+Dios+3'
    ]
  },
  {
    name: 'Moquegua',
    capital: 'Moquegua',
    regionNatural: 'Costa y sierra',
    population: '192,740',
    area: '15,733 km²',
    climate: 'Templado a cálido',
    provinces: 'Mariscal Nieto, General Sánchez Cerro, Ilo',
    gastronomy: 'Chupe de camarones, adobo, queso helado',
    touristSpots: 'Valle de los Ingenios, Quilca, Ilo',
    flora: 'Cactus, algarrobos, matorrales',
    fauna: 'Aves costeras, reptiles',
    economy: 'Minería, agricultura, pesca',
    festivities: 'Señor de la Conquista, Fiestas Patrias',
    history: 'Zona minera con influencia española y preincaica.',
    curiosities: 'Moquegua es reconocida por su pisco y queso helado.',
    video: 'https://youtu.be/rPKteoQ6Fys',
    images: [
      'https://via.placeholder.com/800x450?text=Moquegua+1',
      'https://via.placeholder.com/800x450?text=Moquegua+2',
      'https://via.placeholder.com/800x450?text=Moquegua+3'
    ]
  },
  {
    name: 'Pasco',
    capital: 'Cerro de Pasco',
    regionNatural: 'Sierra',
    population: '271,904',
    area: '25,323 km²',
    climate: 'Frío de altura',
    provinces: 'Pasco, Daniel Alcides Carrión, Oxapampa',
    gastronomy: 'Cuy chactado, mondonguito, humitas',
    touristSpots: 'Yanachaga-Chemillén, Oxapampa, Pozuzo',
    flora: 'Bosques montanos, helechos, orquídeas',
    fauna: 'Monos, venados, aves',
    economy: 'Minería, agricultura, turismo rural',
    festivities: 'Fiesta de San Juan, Corpus Christi',
    history: 'Importante región minera del Altiplano peruano.',
    curiosities: 'Cerro de Pasco es una de las ciudades más altas del mundo.',
    video: 'https://youtu.be/g-rZ_NkZLII',
    images: [
      'https://via.placeholder.com/800x450?text=Pasco+1',
      'https://via.placeholder.com/800x450?text=Pasco+2',
      'https://via.placeholder.com/800x450?text=Pasco+3'
    ]
  },
  {
    name: 'Piura',
    capital: 'Piura',
    regionNatural: 'Costa',
    population: '2,047,954',
    area: '35,892 km²',
    climate: 'Cálido y seco',
    provinces: 'Piura, Sullana, Talara, Sechura, Morropón, Paita',
    gastronomy: 'Arroz con pato, seco de chabelo, ceviche de conchas negras',
    touristSpots: 'Máncora, Catacaos, Sullana, Sechura',
    flora: 'Cactus, algarrobos, palmeras',
    fauna: 'Aves costeras, lobos marinos, tortugas',
    economy: 'Pesca, turismo, agricultura',
    festivities: 'Señor de los Milagros, Carnaval',
    history: 'Provincia con raíces prehispánicas tallán y vicús.',
    curiosities: 'Piura es famosa por su clima cálido durante todo el año.',
    images: [
      'https://via.placeholder.com/800x450?text=Piura+1',
      'https://via.placeholder.com/800x450?text=Piura+2',
      'https://via.placeholder.com/800x450?text=Piura+3'
    ],
    video: 'https://youtu.be/OaP4ibP2N8c'
  },
  {
    name: 'Puno',
    capital: 'Puno',
    regionNatural: 'Sierra y altiplano',
    population: '1,240,587',
    area: '71,999 km²',
    climate: 'Frío de altiplano',
    provinces: 'Puno, San Román, Chucuito, El Collao, Huancané, Melgar, entre otras',
    gastronomy: 'Pachamanca, sopa de quinua, pescado a la parilla',
    touristSpots: 'Lago Titicaca, Sillustani, Taquile, Amantaní',
    flora: 'Ichu, pajonales, totoras',
    fauna: 'Llamas, alpacas, vicuñas, aves acuáticas',
    economy: 'Pesca, turismo, ganadería',
    festivities: 'Fiesta de la Candelaria, Alasitas',
    history: 'Región con gran presencia aimara y quechua.',
    curiosities: 'El Lago Titicaca es el lago navegable más alto del mundo.',
    images: [
      'https://via.placeholder.com/800x450?text=Puno+1',
      'https://via.placeholder.com/800x450?text=Puno+2',
      'https://via.placeholder.com/800x450?text=Puno+3'
    ],
    video: 'https://youtu.be/s7XHNH7tEDQ'
  },
  {
    name: 'San Martín',
    capital: 'Moyobamba',
    regionNatural: 'Selva alta',
    population: '899,648',
    area: '51,253 km²',
    climate: 'Cálido húmedo',
    provinces: 'Moyobamba, Rioja, Lamas, Tocache, Bellavista, Mariscal Cáceres, Picota, San Martín, El Dorado',
    gastronomy: 'Juane, tacacho, inchicapi',
    touristSpots: 'Catarata Ahuashiyacu, Laguna Azul, Cordillera Azul',
    flora: 'Palmeras, guayacanes, heliconias',
    fauna: 'Aves exóticas, monos, tapires',
    economy: 'Agricultura, café, palma aceitera, turismo',
    festivities: 'Carnaval, San Juan, feria regional',
    history: 'Región con historia de colonización en la Amazonía peruana.',
    curiosities: 'San Martín produce café orgánico de alta calidad.',
    images: [
      'https://via.placeholder.com/800x450?text=San+Mart%C3%ADn+1',
      'https://via.placeholder.com/800x450?text=San+Mart%C3%ADn+2',
      'https://via.placeholder.com/800x450?text=San+Mart%C3%ADn+3'
    ],
    video: 'https://youtu.be/u4kDK-199T8'
  },
  {
    name: 'Tacna',
    capital: 'Tacna',
    regionNatural: 'Costa',
    population: '381,640',
    area: '16,075 km²',
    climate: 'Cálido desértico',
    provinces: 'Tacna, Tarata, Jorge Basadre',
    gastronomy: 'Cazuela tacneña, carapulcra, chaufa',
    touristSpots: 'Cañón de Sama, playas de Ilo, Valle de los Alfajores',
    flora: 'Tamarugos, cactus, cardones',
    fauna: 'Aves migratorias, reptiles',
    economy: 'Comercio, agricultura, minería, pesca',
    festivities: 'Fiestas Patrias, aniversario de Tacna',
    history: 'Región histórica en la frontera sur con Chile.',
    curiosities: 'Tacna festeja una gran ceremonia de reincorporación al Perú en 1929.',
    images: [
      'https://via.placeholder.com/800x450?text=Tacna+1',
      'https://via.placeholder.com/800x450?text=Tacna+2',
      'https://via.placeholder.com/800x450?text=Tacna+3'
    ],
    video: 'https://youtu.be/Hh46fKoccpY'
  },
  {
    name: 'Tumbes',
    capital: 'Tumbes',
    regionNatural: 'Costa',
    population: '251,412',
    area: '4,669 km²',
    climate: 'Cálido y húmedo',
    provinces: 'Tumbes, Contralmirante Villar, Zarumilla',
    gastronomy: 'Ceviche de conchas negras, chinguirito, tapado',
    touristSpots: 'Manglares de Tumbes, playas de Punta Sal, Zorritos',
    flora: 'Manglares, palma de guala, algarrobos',
    fauna: 'Caimanes, aves marinas, peces tropicales',
    economy: 'Pesca, turismo, agricultura',
    festivities: 'Semana Santa, Fiesta de San Pedro',
    history: 'Frontera norte con abundantes manglares y costas cálidas.',
    curiosities: 'Tumbes alberga el único manglar del Perú continental.',
    video: 'https://youtu.be/mV09mMb_n2Q',
    images: [
      'https://via.placeholder.com/800x450?text=Tumbes+1',
      'https://via.placeholder.com/800x450?text=Tumbes+2',
      'https://via.placeholder.com/800x450?text=Tumbes+3'
    ]
  },
  {
    name: 'Ucayali',
    capital: 'Pucallpa',
    regionNatural: 'Selva',
    population: '576,754',
    area: '101,830 km²',
    climate: 'Cálido húmedo',
    provinces: 'Coronel Portillo, Atalaya, Padre Abad, Purús',
    gastronomy: 'Inchicapi, tacacho, juane de paiche',
    touristSpots: 'Parque Nacional Pucallpa, Yarinacocha, río Ucayali',
    flora: 'Palmeras, cedros, lianas',
    fauna: 'Delfines rosados, aves tropicales, monos',
    economy: 'Comercio fluvial, agricultura, turismo',
    festivities: 'Aniversario de Pucallpa, Feria de la Amazonía',
    history: 'Importante vía fluvial y centro de la Amazonía peruana.',
    curiosities: 'Pucallpa es la principal ciudad amazónica accesible por carretera y río.',
    video: 'https://youtu.be/emuPTE2o9HM',
    images: [
      'https://via.placeholder.com/800x450?text=Ucayali+1',
      'https://via.placeholder.com/800x450?text=Ucayali+2',
      'https://via.placeholder.com/800x450?text=Ucayali+3'
    ]
  }
];

const diceShell = document.querySelector('#diceShell');
const dice = document.querySelector('#dice');
const shine = document.querySelector('#shine');
const rollButton = document.querySelector('#rollButton');

const fields = {
  deptName: document.querySelector('#deptName'),
  capitalStat: document.querySelector('#capitalStat'),
  regionNaturalStat: document.querySelector('#regionNaturalStat'),
  populationStat: document.querySelector('#populationStat'),
  areaStat: document.querySelector('#areaStat'),
  provinces: document.querySelector('#provinces'),
  gastronomy: document.querySelector('#gastronomy'),
  touristSpots: document.querySelector('#touristSpots'),
  flora: document.querySelector('#flora'),
  fauna: document.querySelector('#fauna'),
  economy: document.querySelector('#economy'),
  festivities: document.querySelector('#festivities'),
  history: document.querySelector('#history'),
  curiosities: document.querySelector('#curiosities'),
  videoPreview: document.querySelector('#videoPreview'),
  gastronomyChip: document.querySelector('#gastronomyChip'),
  touristSpotChip: document.querySelector('#touristSpotChip'),
  deptTagline: document.querySelector('#deptTagline'),
  remainingCount: document.querySelector('#remainingCount'),
  completionMessage: document.querySelector('#completionMessage')
};

function getYouTubeEmbedUrl(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?rel=0&showinfo=0` : null;
}
let backgroundAudio;
let youtubePlayer = null;
let youTubeAPIReady = false;
let pendingYouTubeVideoId = null;

function getYouTubeVideoId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? match[1] : null;
}

function loadYouTubeIframeAPI() {
  if (window.YT && window.YT.Player) {
    youTubeAPIReady = true;
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://www.youtube.com/iframe_api';
  document.body.appendChild(script);

  window.onYouTubeIframeAPIReady = () => {
    youTubeAPIReady = true;
    if (pendingYouTubeVideoId) {
      createYouTubePlayer(pendingYouTubeVideoId);
      pendingYouTubeVideoId = null;
    }
  };
}

function createYouTubePlayer(videoId) {
  const playerContainer = document.getElementById('youtubePlayer');
  if (!playerContainer || !window.YT || !YT.Player) return;

  if (youtubePlayer && typeof youtubePlayer.destroy === 'function') {
    youtubePlayer.destroy();
  }

  youtubePlayer = new YT.Player('youtubePlayer', {
    height: '390',
    width: '640',
    videoId,
    playerVars: {
      rel: 0,
      modestbranding: 1,
      controls: 1,
      showinfo: 0
    },
    events: {
      onStateChange: onYouTubePlayerStateChange
    }
  });
}

function onYouTubePlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    pauseBackgroundMusic();
  }

  if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
    playBackgroundMusic();
  }
}

let isRolling = false;
let departmentDeck = [];

function setupBackgroundAudio() {
  backgroundAudio = document.getElementById('backgroundAudio');
  if (!backgroundAudio) return;
  backgroundAudio.volume = 0.16;
  backgroundAudio.preload = 'auto';
  backgroundAudio.loop = true;
  backgroundAudio.addEventListener('ended', () => {
    backgroundAudio.currentTime = 0;
    backgroundAudio.play().catch(() => {
      // Evita errores si el navegador bloquea la reproducción automática.
    });
  });
}

function playBackgroundMusic() {
  if (!backgroundAudio) return;
  if (backgroundAudio.paused) {
    backgroundAudio.play().catch(() => {
      // El navegador bloquea la reproducción automática hasta la interacción del usuario.
    });
  }
}

function pauseBackgroundMusic() {
  if (!backgroundAudio) return;
  if (!backgroundAudio.paused) {
    backgroundAudio.pause();
  }
}

function shuffleArray(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function resetDeck() {
  departmentDeck = shuffleArray(departments);
  updateRemainingCount();
}

function updateRemainingCount() {
  const count = departmentDeck.length;
  fields.remainingCount.textContent = count.toString();
  if (fields.completionMessage) {
    fields.completionMessage.classList.toggle('hidden', count !== 0);
  }
  if (rollButton) {
    rollButton.classList.toggle('hidden', count !== 0);
  }
}

function pickDepartment() {
  if (departmentDeck.length === 0) {
    resetDeck();
  }
  const department = departmentDeck.pop();
  updateRemainingCount();
  return department;
}

function createAudioTone() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(440, ctx.currentTime);
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.18);
  } catch (error) {
    // Audio may not be available in all contexts.
  }
}

function getRandomDepartmentNames(count, selectedName) {
  const names = [selectedName];
  const available = departments
    .map((department) => department.name)
    .filter((name) => name !== selectedName);

  while (names.length < count && available.length > 0) {
    const randomIndex = Math.floor(Math.random() * available.length);
    const randomName = available.splice(randomIndex, 1)[0];
    names.push(randomName);
  }

  return names;
}

function setDiceFaceLabels(names) {
  const faceElements = document.querySelectorAll('.dice .face');
  faceElements.forEach((face, index) => {
    face.textContent = names[index] || '';
  });
}

function renderDepartment(department) {
  fields.deptName.textContent = department.name;
  fields.capitalStat.textContent = department.capital;
  fields.regionNaturalStat.textContent = department.regionNatural;
  fields.populationStat.textContent = department.population;
  fields.areaStat.textContent = department.area;
  fields.provinces.textContent = department.provinces;
  fields.gastronomy.textContent = department.gastronomy;
  fields.touristSpots.textContent = department.touristSpots;
  fields.flora.textContent = department.flora;
  fields.fauna.textContent = department.fauna;
  fields.economy.textContent = department.economy;
  fields.festivities.textContent = department.festivities;
  fields.history.textContent = department.history;
  fields.curiosities.textContent = department.curiosities;
  fields.gastronomyChip.textContent = department.gastronomy;
  fields.touristSpotChip.textContent = department.touristSpots.split(',')[0];
  fields.deptTagline.textContent = `Explora ${department.name}: capital ${department.capital}, clima ${department.climate} y atractivos únicos.`;

  if (department.video) {
    const videoId = getYouTubeVideoId(department.video);
    if (videoId) {
      fields.videoPreview.innerHTML = `
        <h2>Video recomendado</h2>
        <div id="youtubePlayer"></div>
      `;
      if (youTubeAPIReady) {
        createYouTubePlayer(videoId);
      } else {
        pendingYouTubeVideoId = videoId;
      }
    } else {
      fields.videoPreview.innerHTML = `
        <h2>Video recomendado</h2>
        <div class="video-embed-placeholder">No se pudo cargar la vista previa del video.</div>
      `;
    }
  } else {
    fields.videoPreview.innerHTML = `
      <h2>Video recomendado</h2>
      <div class="video-embed-placeholder">No hay video disponible para este departamento.</div>
    `;
  }

  const departmentCard = document.getElementById('departmentCard');
  if (departmentCard) {
    departmentCard.classList.remove('animate');
    void departmentCard.offsetWidth;
    departmentCard.classList.add('animate');
  }
}

function toggleInfoSection(event) {
  const button = event.currentTarget;
  const targetId = button.dataset.target;
  const section = document.getElementById(targetId);
  if (!section) return;

  const isHidden = section.classList.toggle('hidden');
  button.classList.toggle('active', !isHidden);
  if (!isHidden) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function setupInfoButtons() {
  const buttons = document.querySelectorAll('.info-button');
  buttons.forEach((button) => button.addEventListener('click', toggleInfoSection));
}

function setupRollButton() {
  if (rollButton) {
    rollButton.addEventListener('click', rollDice);
  }
}

const placeholder = {
  name: 'Lanza el dado',
  capital: '---',
  regionNatural: '---',
  population: '---',
  area: '---',
  climate: '---',
  provinces: '---',
  gastronomy: '---',
  touristSpots: '---',
  flora: '---',
  fauna: '---',
  economy: '---',
  festivities: '---',
  history: '---',
  curiosities: '---'
};

function init() {
  setupBackgroundAudio();
  loadYouTubeIframeAPI();
  setupInfoButtons();
  setupRollButton();
  resetDeck();
  setDiceFaceLabels([placeholder.name, 'Áncash', 'Cusco', 'Lima', 'Puno', 'Ica']);
  renderDepartment(placeholder);
}

function rollDice() {
  if (isRolling) return;
  isRolling = true;

  const selected = pickDepartment();
  const faceNames = getRandomDepartmentNames(6, selected.name);
  setDiceFaceLabels(faceNames);

  diceShell.classList.add('rolling');
  shine.style.opacity = '0.35';
  createAudioTone();
  playBackgroundMusic();

  const xRotation = 360 * (4 + Math.floor(Math.random() * 4));
  const yRotation = 360 * (4 + Math.floor(Math.random() * 4));
  const zRotation = 360 * (4 + Math.floor(Math.random() * 4));
  dice.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) rotateZ(${zRotation}deg)`;

  setTimeout(() => {
    diceShell.classList.remove('rolling');
    shine.style.opacity = '1';
    renderDepartment(selected);
    isRolling = false;
    setTimeout(() => {
      shine.style.opacity = '0';
    }, 1200);
  }, 1600);
}

function handleDiceKey(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    rollDice();
  }
}

diceShell.addEventListener('click', rollDice);
diceShell.addEventListener('keydown', handleDiceKey);

init();
