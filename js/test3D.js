// ============================================
// IMAGES DU CARROUSEL
// Pour modifier le carrousel : ajoutez, supprimez ou réorganisez les noms de fichiers ci-dessous.
// Chaque image correspond à un projet dans imageDescriptions (même index).
// ============================================

// ============================================
// SYSTÈME MULTILINGUE
// ============================================
let currentLanguage = 'fr'; // 'fr', 'es', 'en'

let translations = {
    fr: {
        about_me: 'à propos de moi',
        copied: 'Copié !',
        instagram: 'Instagram'
    },
    es: {
        about_me: 'acerca de mí',
        copied: '¡Copiado!',
        instagram: 'Instagram'
    },
    en: {
        about_me: 'about me',
        copied: 'Copied!',
        instagram: 'Instagram'
    }
};

// Fonction pour obtenir une traduction
function getText(key) {
    return translations[currentLanguage][key] || key;
}

let carouselFiles = [
    'persv_vid.mp4',
    'AFFICHE.jpg',
    'chaumont_vid.mp4',
    'aff_mockup.png', 
    'Pack_Shampoo_23_Rayon_insta.jpg',
    'toledo.jpg',
    'IMG_5951.png',
    'glamping_roulotte.png',
    'IMG_20240305_124612.jpg',
    'pixi_anim_pack.mp4',
    'num_vid.mp4',
    'hydro_aff_Page_1.jpg'
];

// ============================================
// DESCRIPTIONS DES PROJETS
// Chaque entrée correspond à une image du carrousel (même index).
// ============================================
let imageDescriptions = [
    {
        titles: { fr: "Persvrance", es: "Persvrance", en: "Persvrance" },
        texts: {
            fr: "création d'une typographie inspirée du pixel et le langage de programation.\n Réalisation du spécimen typographique interactif sur le web pour présenter la police de caractère Persvrance (codé par moi). Rythmé par de la musique experimentale réalisé avec du live coding. \n Le projet explore les possibilités de l'interactivité pour mettre en valeur les caractéristiques uniques de la police, offrant une expérience immersive et engageante pour les utilisateurs.",
            es: "Creación de Persvrance, tipografía inspirada en píxeles y lenguaje de programación.\n Realización del espécimen tipográfico interactivo en la web para presentar la fuente Persvrance (codificado por mí). Acompañado de música experimental realizada con live coding.\n El proyecto explora las posibilidades de la interactividad para destacar las características únicas de la fuente, ofreciendo una experiencia inmersiva y atractiva para los usuarios.",
            en: "Creation of a typeface inspired by pixels and programming language.\n Development of the interactive typographic specimen on the web to showcase the Persvrance font (coded by me). Accompanied by experimental music created with live coding.\n The project explores the possibilities of interactivity to highlight the unique characteristics of the typeface, providing an immersive and engaging experience for users."
        },
        link: "https://tomasgarberoglio-web.github.io/persvrance_web_specimen/",
        linkLabels: { fr: "Voir le spécimen interactif", es: "Ver el espécimen interactivo", en: "View the interactive specimen" },
        gallery: [],
    },
    {
        titles: { fr: "Comment bien faire\nses devoirs?", es: "¿Cómo hacer bien\nlos deberes?", en: "How to do your\nhomework ?" },
        texts: {
            fr: "\n\nCréation d'une notice d'instructions humouristique, pour aider les élèves à faire leurs devoirs dans un monde où toutes le mots sont pris au pied de la lettre.",
            es: "\n\nCreación de un manual de instrucciones humorístico para ayudar a los estudiantes a hacer sus deberes en un mundo, donde todas las palabras se toman al pie de la letra.",
            en: "\n\nCreation of a humorous instruction manual to help students do their homework in a world where every word is taken literally."
        },
        gallery: ['notice_couv.jpg', 'notice_page1.jpg', 'notice_page2.jpg', 'notice_page3.jpg', 'notice_couvfin.jpg'],
    },
    {
        titles: { fr: "Le parfait chaos", es: "El caos perfecto", en: "Perfect Chaos" },
        texts: {
            fr: "Realisation d'une affiche animé à fin de lier le design graphique à la musique. L'intention ici esr de retranscrire les sensations que la musique provoque sur notre corps. Ces pulsions qui nous font bouger, nous transportent et nous font ressentir notre corps autrement.En respectant l'univers chaotique mais harmonieux, surchargé, numérique, pixelisé et diversifié de la musique et l'artiste fentanyl et sa musique «MURDER EVERY 1 U KNOW!», feat. takihasdied.",
            es: "Realización de un cartel animado para vincular el diseño gráfico con la música. La intención es recrear las sensaciones que la música provoca en nuestro cuerpo, esos impulsos que nos hacen mover y transportan nuestra percepción corporal. Respetando el universo caótico pero armonioso, saturado, digital, pixelado y diverso de la música del artista fentanyl y su canción «MURDER EVERY 1 U KNOW!», feat. takihasdied.",
            en: "Creation of an animated poster linking graphic design to music. The intention is to recreate the sensations that music provokes in our bodies, those impulses that make us move and transport our bodily perception. Respecting the chaotic yet harmonious, saturated, digital, pixelated and diverse universe of artist fentanyl's music and the song «MURDER EVERY 1 U KNOW!», feat. takihasdied."
        },
        gallery: [],
    },
    {
        titles: { fr: "Sport en banlieue", es: "Deporte en las afueras", en: "Sport in Suburbs" },
        texts: {
            fr: "Affiche réalisée dans le cadre d'un projet de communication pour une exposition autour du sport en banlieue parisienne.",
            es: "Cartel realizado para la comunicación de una exposición sobre el deporte en las afueras de París.",
            en: "Poster created as part of a communication project for an exhibition about sport in the Parisian suburbs."
        },
        gallery: [],
    },
    {
        titles: { fr: "Packaging de\nshampoing solide", es: "Embalaje de\nchampú sólido", en: "Solid shampoo\npackaging" },
        texts: {
            fr: "\n\n Projet fictif de création de packaging pour une nouvelle game de shampoings solides pour Terre de couleur. marque française de produits capillaires naturels et éco-responsables. Conception d'une ligne de packaging, mettant en valeur les ingrédients naturels utilisés dans les shampoings solides par une aproche brute, simple et pure a fin de faire écho a la qualité des produits.",
            es: "\n\nProyecto ficticio de creación de embalaje para una nueva línea de champús sólidos para Terre de Couleur, marca francesa de productos capilares naturales y ecoresponsables. Diseño de una línea de embalaje que destaca los ingredientes naturales utilizados en los champús sólidos mediante un enfoque bruto, simple y puro para reflejar la calidad de los productos.",
            en: "\n\nFictional packaging creation project for a new line of solid shampoos for Terre de Couleur, a French brand of natural and eco-responsible hair products. Design of a packaging line that highlights the natural ingredients used in solid shampoos through a raw, simple and pure approach to reflect product quality."
        },
        gallery: ['pack_1.png', 'pack_2.png', 'pack_3.png', 'pack_4.png', 'pack_6.png'],
    },
    {
        titles: { fr: "Memoire pour\nla ville de Tolede", es: "Memoria para\nla ciudad de Toledo", en: "Memoir for\nthe city of Toledo" },
        texts: {
            fr: "\n\nMise en page d'un mémoire pour la cadidature de Tolede pour l'election de la meuille ville sportive d'europe. Projet réalisé en Erasmus+ 2024 à Jer Publicidad, Tolede, Espagne.",
            es: "\n\nDiseño de la maquetación de una memoria para la candidatura de Toledo para la elección de la mejor ciudad deportiva de Europa. Proyecto realizado en Erasmus+ 2024 en Jer Publicidad, Toledo, España.",
            en: "\n\nLayout design of a memoir for Toledo's candidacy for the election of Europe's best sports city. Project completed in Erasmus+ 2024 at Jer Publicidad, Toledo, Spain."
        },
        gallery: ['toledo_1.jpg', 'toledo_3.jpg', 'toledo_6.jpg'],
    },
    {
        titles: { fr: "Flower 2.5", es: "Flower 2.5", en: "Flower 2.5" },
        texts: {
            fr: "Objet de design fonction.\n  Dans un mode futur où la nature s'adapte à l'homme et son mode de vie. Une fleur évolue en lampe de bureau.\n Réalisation d'une lampe-fleur, son packaging et son mode d'emploi avec une approche simple et au ton humorisitique.\n Le packaging en carton recyclé présente un design minimaliste tout comme le mode d'emploi.",
            es: "Objeto de diseño funcional.\n En un mundo futuro donde la naturaleza se adapta al ser humano y su forma de vida. Una flor evoluciona en una lámpara de escritorio.\n Creación de una lámpara-flor, su embalaje e instrucciones de uso con un enfoque simple y tono humorístico.\n El embalaje de cartón reciclado presenta un diseño minimalista, al igual que el manual de instrucciones.",
            en: "Functional design object.\n In a future world where nature adapts to humans and their lifestyle. A flower evolves into a desk lamp.\n Creation of a flower-lamp, its packaging and instructions for use with a simple approach and humorous tone.\n The recycled cardboard packaging features a minimalist design, as does the instruction manual."
        },
        gallery: ['flower.jpg', 'flower1.jpg', 'flower3.jpg', 'flower4.jpg'],
    },
    {
        titles: { fr: "hôtel de cabanes Dihan", es: "Hotel de cabañas Dihan", en: "Dihan treehouse hotel" },
        texts: {
            fr: "realisation de l'Identité et de signalétique pour Dihan. Aux valeurs de l'hotel de cabanes (authenticité, angagements environnementaux).\n Réalisation de pictogrammes correspondants à chaque hébergement ainsi que d'autres élements de signalétique. De façon simplifié prenant appui sur les caractéristiques architecturales des façades. Au service d'une identification rapide. a fin de pouvoir les recréer sur des panches en bois de récuperation avec les cordes utilisées pour les ponts entre les cabanes perchées.",
            es: "Realización de la identidad y señalética para Dihan, un hotel de cabañas con valores de autenticidad y compromiso ambiental.\n Creación de pictogramas correspondientes a cada alojamiento así como otros elementos de señalética. De forma simplificada basándose en características arquitectónicas de las fachadas. Para una identificación rápida, permitiendo recrearlos en paneles de madera recuperada con las cuerdas utilizadas para los puentes entre las cabañas en los árboles.",
            en: "Creation of identity and signage for Dihan, a treehouse hotel with values of authenticity and environmental commitment.\n Development of pictograms corresponding to each accommodation as well as other signage elements. In a simplified manner based on architectural features of the facades. For quick identification, allowing recreation on reclaimed wooden panels with ropes used for bridges between treehouses."
        },
        gallery: ['glamping_domeetoile.png', 'glamping_photodomme.jpg', 'glamping_ponts.jpg', 'glamping_icon1.jpg', 'glamping_icon2.jpg', 'glamping_iconssigna.png'],
    },
    {
        titles: { fr: "TopoTypo", es: "TopoTypo", en: "TopoTypo" },
        texts: {
            fr: "Experimentation typographie inspirée de cartes topographiques. \n Conçue pour être utilisée avec des techniques permettant de créer un relief comme le gaufrage, le collage ou l'impression 3D. \n Chaque ligne de contour est transformée en une ligne typographique, créant ainsi une fusion entre la géographie et la typographie. \n ici chaque caractere prends corps sous forme d'une petite montagne, remettant en question la lisibilité pour créer une expérience visuelle unique. revalorisant aisni le caractere en lui même.",
            es: "Experimentación tipográfica inspirada en mapas topográficos.\n Diseñada para ser utilizada con técnicas que permiten crear relieve como el gofrado, pegado o impresión 3D.\n Cada línea de contorno se transforma en una línea tipográfica, creando una fusión entre la geografía y la tipografía.\n Aquí cada carácter toma forma como una pequeña montaña, cuestionando la legibilidad para crear una experiencia visual única, revalorizando así el carácter en sí mismo.",
            en: "Typographic experimentation inspired by topographic maps.\n Designed to be used with techniques enabling relief creation such as embossing, collage or 3D printing.\n Each contour line is transformed into a typographic line, creating a fusion between geography and typography.\n Here each character takes form as a small mountain, questioning readability to create a unique visual experience, thus revaluing the character itself."
        },
        gallery: ['topotypo_grid.jpg', 'topotypo_grid1.jpg', 'topotypo_grid2.jpg', 'topotypo_3D1.jpg', 'topotypo_3D2.jpg', 'topotypo_jpappier.jpg'],
    },
    {
        titles: { fr: "Pixi", es: "Pixi", en: "Pixi" },
        texts: {
            fr: "Création d'une figurine et son packaging.\n Ce projet à l'estétique brute à pour objectif de créer un objet mettant en valeur les matières premières utilisées.\n Figurine en ciment avec un packaging fait en aglomerant du carton recyclée.",
            es: "Creación de una figurita y su embalaje.\n Este proyecto con estética bruta tiene como objetivo crear un objeto que destaque las materias primas utilizadas.\n Figurita de cemento con embalaje hecho de cartón reciclado aglomerado.",
            en: "Creation of a figurine and its packaging.\n This project with a raw aesthetic aims to create an object highlighting the raw materials used.\n Cement figurine with packaging made of agglomerated recycled cardboard."
        },
        gallery: ['pixi_clay.png', 'pixi_render.png', 'pixi_photo.png'],
    },
    {
        titles: { fr: "Eau Numen", es: "Agua Numen", en: "Numen Water" },
        texts: {
            fr: "Confection d'une maquette de packaging pour la nouvelle gamme «Or et Argent» d'eaux Numen (marque espagnole d'eau luxueuse).\n Réalisé pendant mon stage Erasmus+ 2024 à Jer Publicidad, Tolede,Espagne.",
            es: "Confección de una maqueta de embalaje para la nueva línea «Oro y Plata» de aguas Numen (marca española de agua de lujo).\n Realizado durante mi prácticas Erasmus+ 2024 en Jer Publicidad, Toledo, España.",
            en: "Creation of packaging mockup for the new \"Gold and Silver\" line of Numen waters (Spanish luxury water brand).\n Completed during my Erasmus+ 2024 internship at Jer Publicidad, Toledo, Spain."
        },
        gallery: ['num_clay.png', 'num_imagen_caja_abierta.png', 'num_imagen_caja_medio_abierta.png', 'num_imagen_delantera_caja.png', 'num_troquel_1.jpg'],
    },
    {
        titles: { fr: "Arkose", es: "Arkose", en: "Arkose" },
        texts: {
            fr: "Micro campagne de sensibilisation sur l'importance de l'hydratation pour Arkose (chaine de salles d'escalade). Apres étude des lieux et differents sondages réalisés sur place en pratiquant de l'escalade. La réalisation de d'une serie d'affiches était la meilleure solution. La typographie et les éléments graphiques inspirés de l'eau et les prises d'escalde ont était spécialement designés pour s'inserer parfaitement à l'identité des lieux et à fin de respecter l'aspec communautaire.",
            es: "Micro campaña de concienciación sobre la importancia de la hidratación para Arkose (cadena de salas de escalada). Después de estudiar los lugares y realizar varios sondeos practicando escalada. La realización de una serie de carteles fue la mejor solución. La tipografía y elementos gráficos inspirados en el agua y las presas de escalada fueron diseñados especialmente para adaptarse perfectamente a la identidad del lugar y respetar el aspecto comunitario.",
            en: "Micro awareness campaign on the importance of hydration for Arkose (climbing gym chain). After studying the venues and conducting various surveys while climbing. Creating a series of posters was the best solution. The typography and graphic elements inspired by water and climbing holds were specially designed to fit perfectly with the venue's identity and respect the community aspect."
        },
        gallery: ['hydro_aff_Page_1.jpg', 'hydro_aff_Page_2.jpg', 'hydro_aff_Page_3.jpg', 'hydro_aff_Page_4.jpg', 'hydro_aff_Page_5.jpg','filler.png','hydro_photo1.jpg', 'hydro_2.png','arkose_wall.jpg', ],
    },
];

// ============================================
// DESCRIPTION ABOUT ME
// ============================================
let aboutMeContent = {
    titles: { fr: "À propos de moi", es: "Acerca de mí", en: "About Me" },
    texts: {
        fr: "Bonjour ! \n Moi c'est José Tomas, étudiant en première année de master a Paris dans l'ensaama. J'ai toujours eu une attirance envers les logiciels et les machines. Après un bac général en ingénieurie à Perpignan. Voulant développer ma créativité, j'ai intégré un dnmade graphisme spécialisé en identité de marque. J'y ai découvert un grand plaisir pour l'expérimentation et différentes façons de créer, notamment par le numérique. A fin d'explorer et approfondir ces traits, j'ai intégré le master en design numérique d'Oliver de serres (ensaama). Formation interrogant la création par le numérique comme médium. \n \n Je suis acctuellement à la recherche d'un stage de trois mois a partir de mi-avril 2026, n'hésitez pas à me contacter !",
        es: "¡Hola! \n Soy José Tomas, estudiante en máster en la escuela ensaama (Paris). Siempre he sentido atracción por el software y las máquinas. Después de un bachillerato general en ingeniería en Perpiñán. Queriendo desarrollar mi creatividad, integré en un dnmade (une licenciatura) en diseño gráfico especializado en identidad de marca. Descubrí un gran placer en la experimentación y diferentes formas de crear, especialmente en lo digital. Para explorar y profundizar estos aspectos, integré el máster de diseño digital de Oliver de Serres (ensaama). Una formación que cuestiona la creación a través de lo digital como medio. \n \n Actualmente estoy buscando una pasantía de tres meses a partir de mediados de abril de 2026, ¡no dudes en contactarme!",
        en: "Hello! \n I'm José Tomas, a first-year Master's student in Paris at ensaama. I've always been drawn to software and machines. After completing a general engineering baccalaureate in Perpignan. Wanting to develop my creativity, I enrolled in a graphic design dnmade program specialized in brand identity. I discovered a great passion for experimentation and different ways of creating, particularly in the digital realm. To explore and deepen these interests, I joined the digital design master's program at Oliver de Serres (ensaama). A program that explores creation through digital media as a medium. \n \n I am currently looking for a three-month internship starting from mid-April 2026, please don't hesitate to contact me!"
    },
    bios: {
        fr: "J'aime explorer les frontières entre le digital et le traditionnel. Mes projets témoignent de mon engagement envers l'expérimentation. Je fais en sorte d'être le plus autonome possible pour pouvoir créer de manière indépendante. J'ai donc investi dans differents machines pour pouvoir donner vie a mes projets depuis mon appartement. Je suis toujours à la recherche de nouvelles techniques et de nouveaux outils pour enrichir ma pratique et repousser les limites de ce que je peux créer.",
        es: "Me encanta explorar los límites entre lo digital y lo tradicional. Mis proyectos demuestran mi compromiso con la experimentación. Me esfuerzo por ser lo más autónomo posible para poder crear de manera independiente. Por eso he invertido en diferentes máquinas para poder dar vida a mis proyectos desde mi apartamento. Siempre estoy buscando nuevas técnicas y nuevas herramientas para enriquecer mi práctica y superar los límites de lo que puedo crear.",
        en: "I love exploring the boundaries between digital and traditional. My projects demonstrate my commitment to experimentation. I strive to be as autonomous as possible to create independently. That's why I've invested in different machines to bring my projects to life from my apartment. I'm always seeking new techniques and new tools to enrich my practice and push the limits of what I can create."
    }
};

// Fonctions pour obtenir les descriptions traduits
function getImageTitle(index) {
    if (index >= 0 && index < imageDescriptions.length) {
        return imageDescriptions[index].titles[currentLanguage] || imageDescriptions[index].titles['fr'];
    }
    return "";
}

function getImageText(index) {
    if (index >= 0 && index < imageDescriptions.length) {
        return imageDescriptions[index].texts[currentLanguage] || imageDescriptions[index].texts['fr'];
    }
    return "";
}

function getImageLinkLabel(index) {
    if (index >= 0 && index < imageDescriptions.length && imageDescriptions[index].linkLabels) {
        return imageDescriptions[index].linkLabels[currentLanguage] || imageDescriptions[index].linkLabels['fr'];
    }
    return "";
};

let carouselImgs = [];       // images chargées du carrousel
let galleryImgMap = {};      // nom de fichier -> p5.Image (images de galerie)
let cardsCount;
let radius;
let cardW = 220;  // reduced from 300 for smaller matrix
let cardH = 130;  // proportional reduction
let spacing = 14;  // regular spacing between images
let rot = 0;
let targetRot = 0;
let easing = 0.08;

// Selected image for detail view
let selectedImageIndex = null;
let viewMode = "carousel";  // "carousel", "image_detail" or "about_me"
let textOverlay; // 2D canvas overlay for text (avoids WEBGL texture/font conflicts)
let detailScrollY = 0;
let detailTargetScrollY = 0;
let detailMaxScroll = 0;

// Clickable link area (updated each frame)
let linkBounds = null;

// About Me click area
let aboutMeBounds = null;

// Instagram click area
let instagramBounds = null;

// Language buttons areas
let languageButtons = [];

// Extensions vidéo supportées
let videoExtensions = ['.mp4', '.webm', '.ogg'];

// Nom CSS de la police (enregistrée via @font-face dans setup)
let cssFontName = 'PersvFusion';

// Smooth boost for frontmost carousel card
let cardBoost = [];

// Smooth hover boost for gallery images
let galleryBoost = [];

// Smooth hover boost for main image in detail view
let mainImageBoost = 1.0;

// Expanded gallery image
let expandedGalleryImg = null;
let expandedVideoFile = null; // filename of video being played for sound
let galleryRects = []; // stored each frame for click detection
let mainImageBounds = null; // bounds of main image for click detection
let closeButtonOverlay; // overlay for close button only

// Screen bounds of the frontmost card (updated each frame)
let frontCardBounds = null;
let frontCardIndex = -1;

// Contact click areas (phone & email)
let contactBounds = [];

// Toast notification
let toastMessage = '';
let toastTimer = 0;

// Random positions for hint messages (multiple simultaneous hints)
let hints = [];
let hintsInitialized = false;

// Logo / signature image
let signaImg;

function isVideo(filename) {
    let lower = filename.toLowerCase();
    return videoExtensions.some(ext => lower.endsWith(ext));
}


function preload(){
    // Charger la police pour le préchargement (le fichier sera en cache)
    Font = loadFont('polices/Persvrance-Fusion-Regular.otf');
    // Charger l'image signature/logo
    signaImg = loadImage('image/signa.png');
    // Charger les images/vidéos du carrousel
    for (let f of carouselFiles) {
        if (isVideo(f)) {
            // Les vidéos sont chargées dans setup() car createVideo n'est pas dispo dans preload
            carouselImgs.push(null); // placeholder, remplacé dans setup
        } else {
            carouselImgs.push(loadImage('image/' + f));
        }
    }
    // Charger les images de galerie (sans doublons)
    let allGalleryFiles = new Set();
    for (let desc of imageDescriptions) {
        for (let f of desc.gallery) {
            allGalleryFiles.add(f);
        }
    }
    for (let f of allGalleryFiles) {
        if (isVideo(f)) {
            // vidéos de galerie seront chargées dans setup
            galleryImgMap[f] = null; // placeholder pour les vidéos
        } else {
            galleryImgMap[f] = loadImage('image/' + f);
        }
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    textOverlay = createGraphics(windowWidth, windowHeight); // 2D overlay for text

    // Enregistrer la police via CSS @font-face pour utiliser le moteur natif du navigateur
    // (p5 loadFont utilise opentype.js dont les metrics sont cassées pour cette police)
    let style = document.createElement('style');
    style.textContent = "@font-face { font-family: 'PersvFusion'; src: url('polices/Persvrance-Fusion-Regular.otf') format('opentype'); }";
    document.head.appendChild(style);
    // Forcer le chargement de la police CSS
    document.fonts.load('12px PersvFusion');
    
    // Create close button overlay AFTER loading the font
    closeButtonOverlay = createGraphics(windowWidth, windowHeight);
    closeButtonOverlay.fill(0);
    closeButtonOverlay.textSize(32);
    closeButtonOverlay.textAlign(CENTER, CENTER);
    closeButtonOverlay.textStyle(NORMAL);
    closeButtonOverlay.textFont(Font);
    closeButtonOverlay.text('X', 45, 45);

    cardsCount = carouselFiles.length;

    // Charger les vidéos du carrousel (createVideo doit être appelé après createCanvas)
    for (let i = 0; i < carouselFiles.length; i++) {
        if (isVideo(carouselFiles[i])) {
            let vid = createVideo('image/' + carouselFiles[i]);
            vid.hide();    // cacher l'élément HTML
            vid.loop();    // lecture en boucle
            vid.volume(0); // muet
            
            // Redémarrer la vidéo si elle est déjà en cours d'exécution
            try {
                if (vid.elt && vid.elt.play) {
                    vid.elt.play().catch(err => console.warn('Erreur playback vidéo:', carouselFiles[i]));
                }
            } catch (e) {
                console.warn('Cannot play video:', carouselFiles[i]);
            }
            
            carouselImgs[i] = vid;
        }
    }
    // Charger les vidéos de galerie
    for (let desc of imageDescriptions) {
        for (let f of desc.gallery) {
            if (isVideo(f) && !galleryImgMap[f]) {
                let vid = createVideo('image/' + f);
                vid.hide();
                vid.loop();
                vid.volume(0);
                
                try {
                    if (vid.elt && vid.elt.play) {
                        vid.elt.play().catch(err => console.warn('Erreur playback vidéo galerie:', f));
                    }
                } catch (e) {
                    console.warn('Cannot play gallery video:', f);
                }
                
                galleryImgMap[f] = vid;
            }
        }
    }

    if (carouselImgs.length === 0) {
        carouselImgs.push(createGraphics(200, 200));
        carouselImgs[0].background(180);
    }
    // Calculate radius to maintain fixed spacing between image centers
    radius = (cardW + spacing) / (2 * sin(PI / cardsCount)) * 1.2;
    noStroke();
}

function draw() {
    if (viewMode === "carousel") {
        drawCarousel();
    } else if (viewMode === "image_detail") {
        drawImageDetail();
    } else if (viewMode === "about_me") {
        drawAboutMe();
    }
}

function drawCarousel() {
    background(255);
    
    // Assurer que les vidéos jouent correctement
    for (let i = 0; i < carouselImgs.length; i++) {
        let img = carouselImgs[i];
        if (img && isVideo(carouselFiles[i])) {
            try {
                if (img.elt && !img.elt.paused) {
                    // vidéo pense qu'elle joue, tout va bien
                } else if (img.elt) {
                    img.elt.play().catch(err => null);
                }
            } catch (e) {
                // ignorer les erreurs
            }
        }
    }

    // Enhanced lighting for better image visibility
    ambientLight(220);
    // Multiple point lights around the circle for even illumination
    pointLight(220, 220, 220, 300, -200, 300);    // front-right
    pointLight(220, 220, 220, -300, -200, 300);   // front-left
    pointLight(200, 200, 200, 0, -200, -300);     // back
    pointLight(200, 200, 180, 0, 200, 0);         // bottom
    pointLight(255, 255, 255, 0, 0, 400);         // camera view light (front)
  
    // auto-rotation
    targetRot += 0.002; // slow automatic rotation

    rot = lerp(rot, targetRot, easing);

    // Center the circular matrix (slightly higher)
    push();
    translate(0, -80, 0);
    rotateX(-0.15);

    let step = TWO_PI / cardsCount;

    // init boost array once
    if (cardBoost.length !== cardsCount) {
        cardBoost = new Array(cardsCount).fill(1);
    }

    // find the frontmost image (highest z)
    let maxZ = -Infinity;
    frontCardBounds = null;
    frontCardIndex = -1;
    for (let i = 0; i < cardsCount; i++) {
        let z = radius * cos(i * step + rot);
        if (z > maxZ) maxZ = z;
    }

    for (let i = 0; i < cardsCount; i++) {
        let a = i * step + rot;
        let x = radius * sin(a);
        let z = radius * cos(a);

        // smooth boost: target 1.3 for front, 1.0 for others
        let isFront = (z >= maxZ - 0.3);
        let targetBoost = isFront ? 1.4 : 1.0;
        let speed = isFront ? 0.06 : 0.15; // shrink faster so next image takes over sooner
        cardBoost[i] = lerp(cardBoost[i], targetBoost, speed);

        push();
        translate(x, 0, z);
        // orient plane so its normal is radial (pointing outward from center)
        rotateY(a);

        // depth-based scale for nicer perspective
        let depthScale = map(z, -radius, radius, 1.15, 0.65);
        depthScale *= cardBoost[i];
        scale(depthScale);

        // choose image (repeat images if fewer than cardsCount)
        let img = carouselImgs[i % carouselImgs.length];
        
        // Vérifier que l'image/vidéo est disponible
        if (!img || !img.width || !img.height) {
            pop();
            continue; // passer cette carte si l'image n'est pas prête
        }
        
        // Calculate proper dimensions to maintain aspect ratio
        let imgAspectRatio = img.width / img.height;
        let displayHeight = cardH;
        let displayWidth = displayHeight * imgAspectRatio;
        
        // S'assurer que le fill est blanc et pas de stroke pour la texture
        fill(255);
        noStroke();
        texture(img);
        plane(displayWidth, displayHeight);

        // Store info of the most boosted card for click detection
        if (cardBoost[i] > (frontCardBounds ? frontCardBounds.boost : 0)) {
            frontCardIndex = i;
            frontCardBounds = {
                worldX: x,
                depthScale: depthScale,
                imgW: displayWidth,
                imgH: displayHeight,
                boost: cardBoost[i]
            };
        }

        // thin frame
        noFill();
        stroke(255, 220);
        strokeWeight(2);
        // draw a slightly bigger plane as frame using shape trick
        // using a very thin box to simulate border
        translate(0, 0, 1);
        pop();
    }

    pop();

    // HUD instructions via 2D overlay
    textOverlay.clear();
    textOverlay.textFont(cssFontName);
    
    // Display signa image top-left
    let sigH = 35;
    let sigW = sigH * (signaImg.width / signaImg.height);
    textOverlay.image(signaImg, 20, 15, sigW, sigH);
    
    // Display "about me" text to the right of signa image
    textOverlay.fill(0);
    textOverlay.noStroke();
    textOverlay.textSize(12);
    textOverlay.textAlign(LEFT, TOP);
    let aboutMeText = getText('about_me');
    let aboutMeX = 20 + sigW + 15;
    let aboutMeY = 4 + (sigH / 2) - 6; // center vertically with image
    textOverlay.text(aboutMeText, aboutMeX, aboutMeY);
    // Store about me bounds for click detection
    let aboutMeTw = textOverlay.textWidth(aboutMeText);
    aboutMeBounds = { x: aboutMeX, y: aboutMeY, w: aboutMeTw, h: 16, text: aboutMeText };
    
    textOverlay.textSize(12);
    textOverlay.textAlign(CENTER, TOP);
    let instagramText = getText('instagram');
    textOverlay.text(instagramText, width/2, 20);
    let instagramTw = textOverlay.textWidth(instagramText);
    instagramBounds = { x: width/2 - instagramTw/2, y: 20, w: instagramTw, h: 16, text: instagramText, url: 'https://www.instagram.com/jg_sutdio' };
    
    textOverlay.textSize(12);
    textOverlay.textAlign(RIGHT, TOP);
    let phoneText = '06.10.05.79.32';
    let emailText = 'jose.garberoglio.contact@gmail.com';
    textOverlay.text(phoneText, width - 20, 20);
    textOverlay.text(emailText, width - 20, 40);
    
    // Store contact bounds for click detection
    let phoneTw = textOverlay.textWidth(phoneText);
    let emailTw = textOverlay.textWidth(emailText);
    contactBounds = [
        { x: width - 20 - phoneTw, y: 20, w: phoneTw, h: 16, text: phoneText },
        { x: width - 20 - emailTw, y: 40, w: emailTw, h: 16, text: emailText }
    ];
    
    // Hand cursor on hover over contacts
    let overContact = false;
    for (let cb of contactBounds) {
        if (mouseX >= cb.x && mouseX <= cb.x + cb.w && mouseY >= cb.y && mouseY <= cb.y + cb.h) {
            overContact = true;
            // Underline on hover
            textOverlay.stroke(0);
            textOverlay.strokeWeight(1);
            textOverlay.line(cb.x, cb.y + cb.h, cb.x + cb.w, cb.y + cb.h);
            textOverlay.noStroke();
        }
    }
    
    // Hand cursor on hover over Instagram
    let overInstagram = false;
    if (instagramBounds && mouseX >= instagramBounds.x && mouseX <= instagramBounds.x + instagramBounds.w && 
        mouseY >= instagramBounds.y && mouseY <= instagramBounds.y + instagramBounds.h) {
        overInstagram = true;
        // Underline on hover
        textOverlay.stroke(0);
        textOverlay.strokeWeight(1);
        textOverlay.line(instagramBounds.x, instagramBounds.y + instagramBounds.h, 
                         instagramBounds.x + instagramBounds.w, instagramBounds.y + instagramBounds.h);
        textOverlay.noStroke();
    }
    
    // Hand cursor on hover over "about me"
    let overAboutMe = false;
    if (aboutMeBounds && mouseX >= aboutMeBounds.x && mouseX <= aboutMeBounds.x + aboutMeBounds.w && 
        mouseY >= aboutMeBounds.y && mouseY <= aboutMeBounds.y + aboutMeBounds.h) {
        overAboutMe = true;
        // Underline on hover
        textOverlay.stroke(0);
        textOverlay.strokeWeight(1);
        textOverlay.line(aboutMeBounds.x, aboutMeBounds.y + aboutMeBounds.h, 
                         aboutMeBounds.x + aboutMeBounds.w, aboutMeBounds.y + aboutMeBounds.h);
        textOverlay.noStroke();
    }
    
    // Language buttons bottom right
    let langBtnSize = 30;
    let langBtnPadding = 10;
    let languages = ['FR', 'ES', 'EN'];
    let langCodes = ['fr', 'es', 'en'];
    let startX = width - (langBtnSize * languages.length + langBtnPadding * (languages.length - 1)) - 20;
    let startY = height - 50;
    
    languageButtons = [];
    let overLanguage = false;
    
    for (let i = 0; i < languages.length; i++) {
        let btnX = startX + i * (langBtnSize + langBtnPadding);
        let btnY = startY;
        let isActive = (currentLanguage === langCodes[i]);
        
        languageButtons.push({
            x: btnX,
            y: btnY,
            w: langBtnSize,
            h: langBtnSize,
            code: langCodes[i],
            label: languages[i]
        });
        
        // Check hover
        let isHover = (mouseX >= btnX && mouseX <= btnX + langBtnSize && 
                      mouseY >= btnY && mouseY <= btnY + langBtnSize);
        if (isHover) overLanguage = true;
        
        // Draw button
        textOverlay.noStroke();
        if (isActive) {
            textOverlay.fill(0);
        } else if (isHover) {
            textOverlay.fill(100);
        } else {
            textOverlay.fill(180);
        }
        textOverlay.rect(btnX, btnY, langBtnSize, langBtnSize, 4);
        
        // Button text
        textOverlay.fill(isActive ? 255 : 0);
        textOverlay.textSize(11);
        textOverlay.textAlign(CENTER, CENTER);
        textOverlay.text(languages[i], btnX + langBtnSize/2, btnY + langBtnSize/2);
    }
    
    if (viewMode === 'carousel') {
        cursor(overContact || overAboutMe || overInstagram || overLanguage ? HAND : ARROW);
    }
    
    // Toast notification
    if (toastTimer > 0) {
        let alpha = min(255, toastTimer * 8);
        textOverlay.noStroke();
        textOverlay.fill(0, alpha);
        textOverlay.rectMode(CENTER);
        textOverlay.rect(width / 2, height - 60, textOverlay.textWidth(toastMessage) + 30, 30, 8);
        textOverlay.fill(255, alpha);
        textOverlay.textSize(13);
        textOverlay.textAlign(CENTER, CENTER);
        textOverlay.text(toastMessage, width / 2, height - 60);
        textOverlay.rectMode(CORNER);
        toastTimer--;
    }
    
    // // Periodic hints: multiple "scroll" and "click" appearing simultaneously
    // if (!hintsInitialized) {
    //     // Two pairs: each pair has one "scroll" and one "click" that appear together
    //     // Pair 1 and Pair 2 are offset so they alternate
    //     let cx = width / 2, cy = height / 2 - 80;
    //     let rx = width * 0.3, ry = height * 0.25;
    //     hints.push({
    //         label: 'scroll',
    //         x: cx + random(-rx, rx), y: cy + random(-ry, ry),
    //         offset: 0, period: 150
    //     });
    //     hints.push({
    //         label: 'click',
    //         x: cx + random(-rx, rx), y: cy + random(-ry, ry),
    //         offset: 0, period: 150
    //     });
    //     hints.push({
    //         label: 'scroll',
    //         x: cx + random(-rx, rx), y: cy + random(-ry, ry),
    //         offset: 75, period: 150
    //     });
    //     hints.push({
    //         label: 'click',
    //         x: cx + random(-rx, rx), y: cy + random(-ry, ry),
    //         offset: 75, period: 150
    //     });
    //     hintsInitialized = true;
    // }
    for (let h of hints) {
        let t = (frameCount + h.offset) % h.period;
        let fadeIn = 12, hold = 30, fadeOut = 12;
        let total = fadeIn + hold + fadeOut;
        let alpha = 0;
        if (t < fadeIn) alpha = map(t, 0, fadeIn, 0, 160);
        else if (t < fadeIn + hold) alpha = 160;
        else if (t < total) alpha = map(t, fadeIn + hold, total, 160, 0);
        // regenerate position around carousel when cycle restarts
        if (t === 0) {
            let cx = width / 2, cy = height / 2 - 80;
            let rx = width * 0.3, ry = height * 0.25;
            h.x = cx + random(-rx, rx);
            h.y = cy + random(-ry, ry);
        }
        if (alpha > 1) {
            textOverlay.noStroke();
            textOverlay.fill(0, alpha);
            textOverlay.textSize(12);
            textOverlay.textAlign(CENTER, CENTER);
            textOverlay.text(h.label, h.x, h.y);
        }
    }
    
    // Display 2D overlay on top of 3D scene
    push();
    resetMatrix();
    noLights();
    image(textOverlay, -width/2, -height/2);
    pop();
}

function drawImageDetail() {
    background(245);
    
    // Smooth scroll
    detailScrollY = lerp(detailScrollY, detailTargetScrollY, 0.12);
    let scrollOff = detailScrollY;
    
    let img = carouselImgs[selectedImageIndex];
    let desc = imageDescriptions[selectedImageIndex];
    
    // Vérifier que l'image est disponible
    if (!img || !img.width || !img.height) {
        background(245);
        push();
        resetMatrix();
        noLights();
        textOverlay.clear();
        textOverlay.fill(100);
        textOverlay.textSize(24);
        textOverlay.textAlign(CENTER, CENTER);
        textOverlay.text('Image en cours de chargement...', width/2, height/2);
        image(textOverlay, -width/2, -height/2);
        pop();
        return;
    }
    
    // Layout constants
    let contentMargin = 60;
    let textLeftWidth = width * 0.35; // left column for text
    let mainImgMaxW = width - contentMargin * 2 - textLeftWidth - 40;
    let mainImgMaxH = height * 0.65;
    
    // Main image dimensions (maintain aspect ratio)
    let img_aspect = img.width / img.height;
    let mainImgW = mainImgMaxW;
    let mainImgH = mainImgW / img_aspect;
    if (mainImgH > mainImgMaxH) {
        mainImgH = mainImgMaxH;
        mainImgW = mainImgH * img_aspect;
    }
    let textAreaX = contentMargin;
    let mainImgX = width - contentMargin - mainImgW;
    let mainImgY = 90 + scrollOff;
    
    // Draw main image in WEBGL with hover boost
    push();
    resetMatrix();
    noLights();
    let mainImageHover = (mouseX >= mainImgX && mouseX <= mainImgX + mainImgW && mouseY >= mainImgY && mouseY <= mainImgY + mainImgH);
    let targetBoost = mainImageHover ? 1.08 : 1.0;
    mainImageBoost = lerp(mainImageBoost, targetBoost, 0.12);
    let boost = mainImageBoost;
    
    // Draw scaled from center
    let boostedW = mainImgW * boost;
    let boostedH = mainImgH * boost;
    let boostedX = mainImgX - (boostedW - mainImgW) / 2;
    let boostedY = mainImgY - (boostedH - mainImgH) / 2;
    
    if (boostedY + boostedH > 0 && boostedY < height) {
        image(img, -width/2 + boostedX, -height/2 + boostedY, boostedW, boostedH);
    }
    // Store bounds for click detection
    mainImageBounds = { x: boostedX, y: boostedY, w: boostedW, h: boostedH, img: img };
    pop();
    
    // Gallery section: draw gallery images in WEBGL
    let galleryTop = mainImgY + mainImgH + 40;
    let galleryImgSize = (width - contentMargin * 2 - 20 * 2) / 3; // 3 columns with gaps
    let gallery = desc.gallery || [];
    
    // Assurer que les vidéos de galerie jouent correctement
    for (let f of gallery) {
        let gImg = galleryImgMap[f];
        if (gImg && isVideo(f)) {
            try {
                if (gImg.elt && !gImg.elt.paused) {
                    // vidéo pense qu'elle joue, tout va bien
                } else if (gImg.elt) {
                    gImg.elt.play().catch(err => null);
                }
            } catch (e) {
                // ignorer les erreurs
            }
        }
    }
    
    push();
    resetMatrix();
    noLights();
    let cursorY = galleryTop;
    // init gallery boost array
    if (galleryBoost.length !== gallery.length) {
        galleryBoost = new Array(gallery.length).fill(1);
    }
    galleryRects = [];
    for (let row = 0; row < Math.ceil(gallery.length / 3); row++) {
        for (let col = 0; col < 3; col++) {
            let idx = row * 3 + col;
            if (idx >= gallery.length) break;
            let gImg = galleryImgMap[gallery[idx]];
            
            // Vérifier que l'image est disponible
            if (!gImg || !gImg.width || !gImg.height) {
                continue; // passer cette image si elle n'est pas prête
            }
            
            let gAspect = gImg.width / gImg.height;
            let gW = galleryImgSize;
            let gH = gW / gAspect;
            if (gH > galleryImgSize) {
                gH = galleryImgSize;
                gW = gH * gAspect;
            }
            let gX = contentMargin + col * (galleryImgSize + 20) + (galleryImgSize - gW) / 2;
            let gY = cursorY + (galleryImgSize - gH) / 2;
            
            // Store rect for click detection
            galleryRects.push({ x: gX, y: gY, w: gW, h: gH, img: gImg });
            
            // Check hover and apply smooth boost
            let isHover = (mouseX >= gX && mouseX <= gX + gW && mouseY >= gY && mouseY <= gY + gH);
            let targetB = isHover ? 1.08 : 1.0;
            galleryBoost[idx] = lerp(galleryBoost[idx], targetB, 0.12);
            let b = galleryBoost[idx];
            
            // Draw scaled from center
            let bW = gW * b;
            let bH = gH * b;
            let bX = gX - (bW - gW) / 2;
            let bY = gY - (bH - gH) / 2;
            
            if (bY + bH > 0 && bY < height) {
                image(gImg, -width/2 + bX, -height/2 + bY, bW, bH);
            }
        }
        cursorY += galleryImgSize + 20;
    }
    pop();
    
    // Calculate total content height for scroll limits
    let galleryRows = Math.ceil(gallery.length / 3);
    let galleryTotalH = galleryRows * (galleryImgSize + 20);
    let totalContentH = 90 + mainImgH + 40 + galleryTotalH + 40;
    detailMaxScroll = max(0, totalContentH - height);
    
    // === ALL TEXT via 2D overlay ===
    textOverlay.clear();
    textOverlay.textFont(cssFontName);
    
    // Title next to image (right column)
    textOverlay.fill(0);
    textOverlay.noStroke();
    textOverlay.textSize(28);
    textOverlay.textStyle(BOLD);
    textOverlay.textAlign(LEFT, TOP);
    textOverlay.text(getImageTitle(selectedImageIndex), textAreaX, mainImgY);
    
    // // Separator line
    // textOverlay.stroke(180);
    // textOverlay.strokeWeight(1);
    // textOverlay.line(textAreaX, mainImgY + 40, textAreaX + textLeftWidth - 20, mainImgY + 40);
    
    // Description text (right column, below title)
    textOverlay.noStroke();
    textOverlay.fill(0);
    textOverlay.textSize(14);
    textOverlay.textStyle(NORMAL);
    textOverlay.textAlign(LEFT, TOP);
    let descText = getImageText(selectedImageIndex);
    textOverlay.text(descText, textAreaX, mainImgY + 55, textLeftWidth - 20, 300);
    
    // Clickable link (if defined)
    linkBounds = null;
    if (desc.link) {
        let linkY = mainImgY + 55 + 30; // below description text
        // Estimate description height roughly
        let descTextH = Math.ceil(descText.length / 30) * 20;
        linkY = mainImgY + 55 + descTextH + 10;
        let linkText = getImageLinkLabel(selectedImageIndex) || desc.link;
        textOverlay.fill(0);
        textOverlay.textSize(14);
        textOverlay.textStyle(BOLD);
        textOverlay.textAlign(LEFT, TOP);
        textOverlay.text(linkText, textAreaX, linkY);
        // Underline
        let tw = textOverlay.textWidth(linkText);
        textOverlay.stroke(0);
        textOverlay.strokeWeight(1);
        textOverlay.line(textAreaX, linkY + 17, textAreaX + tw, linkY + 17);
        textOverlay.noStroke();
        // Store link bounds for click detection
        linkBounds = { x: textAreaX, y: linkY, w: tw, h: 20, url: desc.link };
        // Change cursor on hover
        if (mouseX >= linkBounds.x && mouseX <= linkBounds.x + linkBounds.w &&
            mouseY >= linkBounds.y && mouseY <= linkBounds.y + linkBounds.h) {
            cursor(HAND);
        } else {
            cursor(ARROW);
        }
    } else {
        cursor(ARROW);
    }
    
    // Info section (aligned with bottom of image) - texte libre pour chaque image
    textOverlay.fill(70);
    textOverlay.textSize(12);
    textOverlay.textStyle(NORMAL);
    textOverlay.textAlign(LEFT, TOP);
    if (desc.infoText) {
        let infoHeight = 120;
        textOverlay.text(desc.infoText, textAreaX, mainImgY + mainImgH - infoHeight, textLeftWidth - 20, infoHeight);
    }
    
    // Gallery title
    // textOverlay.fill(0);
    // textOverlay.textSize(20);
    // textOverlay.textStyle(BOLD);
    // textOverlay.textAlign(LEFT, TOP);
    // drawSpacedText(textOverlay, 'Galerie', contentMargin, galleryTop - 30);
    
    // Info below gallery — removed (now in right column)
    
    // Back button (fixed, does not scroll)
    // textOverlay.fill(100, 150, 220);
    // textOverlay.rect(20, 20, 50, 50, 5);
    textOverlay.fill(0);
    textOverlay.textSize(32);
    textOverlay.textAlign(CENTER, CENTER);
    textOverlay.textStyle(NORMAL);
    textOverlay.text('X', 45, 45);
    
    // Scroll indicator
    // if (detailMaxScroll > 10) {
    //     textOverlay.fill(180);
    //     textOverlay.textSize(12);
    //     textOverlay.textAlign(CENTER, TOP);
    //     textOverlay.textStyle(NORMAL);
    //     textOverlay.text('\u2193 Scroll pour voir plus \u2193', width / 2, height - 25);
    // }
    
    // Display 2D overlay on top
    if (!expandedGalleryImg) {
        push();
        resetMatrix();
        noLights();
        image(textOverlay, -width/2, -height/2);
        pop();
    }
    
    // Fullscreen expanded gallery image
    if (expandedGalleryImg) {
        push();
        resetMatrix();
        noLights();
        // Dark overlay
        fill(0, 200);
        noStroke();
        rectMode(CORNER);
        rect(-width/2, -height/2, width, height);
        // Draw image fitted to screen with margin
        let margin = 60;
        let eAspect = expandedGalleryImg.width / expandedGalleryImg.height;
        let eW = width - margin * 2;
        let eH = eW / eAspect;
        if (eH > height - margin * 2) {
            eH = height - margin * 2;
            eW = eH * eAspect;
        }
        let eX = -eW / 2;
        let eY = -eH / 2;
        image(expandedGalleryImg, eX, eY, eW, eH);
        pop();
        
        // Display only X button overlay on top of expanded image
        push();
        resetMatrix();
        noLights();
        image(closeButtonOverlay, -width/2, -height/2);
        pop();
    }
    
    // Handle back button click
    if (mouseIsPressed && !expandedGalleryImg && mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 70) {
        viewMode = "carousel";
        selectedImageIndex = null;
        detailScrollY = 0;
        detailTargetScrollY = 0;
    }
}


function drawAboutMe() {
    background(245);
    
    // Layout constants
    let contentMargin = 80;
    let maxContentWidth = width - contentMargin * 2;
    let scrollOff = detailScrollY;
    
    // === ALL TEXT via 2D overlay ===
    textOverlay.clear();
    textOverlay.textFont(cssFontName);
    
    // Title
    textOverlay.fill(0);
    textOverlay.noStroke();
    textOverlay.textSize(48);
    textOverlay.textStyle(BOLD);
    textOverlay.textAlign(LEFT, TOP);
    textOverlay.text(aboutMeContent.titles[currentLanguage] || aboutMeContent.titles['fr'], contentMargin, 90 + scrollOff);
    
    // Separator line
    textOverlay.stroke(200);
    textOverlay.strokeWeight(2);
    textOverlay.line(contentMargin, 150 + scrollOff, contentMargin + 200, 150 + scrollOff);
    textOverlay.noStroke();
    
    // Two column layout
    let columnWidth = (maxContentWidth - 40) / 2; // 40px gap between columns
    let leftColumnX = contentMargin;
    let rightColumnX = contentMargin + columnWidth + 40;
    
    // First paragraph - Left column
    textOverlay.fill(0);
    textOverlay.textSize(16);
    textOverlay.textStyle(NORMAL);
    textOverlay.textAlign(LEFT, TOP);
    textOverlay.text(aboutMeContent.texts[currentLanguage] || aboutMeContent.texts['fr'], leftColumnX, 180 + scrollOff, columnWidth, 500);
    
    // Second paragraph - Right column
    textOverlay.fill(0);
    textOverlay.textSize(16);
    textOverlay.textStyle(NORMAL);
    textOverlay.textAlign(LEFT, TOP);
    textOverlay.text(aboutMeContent.bios[currentLanguage] || aboutMeContent.bios['fr'], rightColumnX, 180 + scrollOff, columnWidth, 500);
    
    // Back button (fixed, does not scroll)
    textOverlay.fill(0);
    textOverlay.textSize(32);
    textOverlay.textAlign(CENTER, CENTER);
    textOverlay.textStyle(NORMAL);
    textOverlay.text('X', 45, 45);
    
    // Display 2D overlay on top
    push();
    resetMatrix();
    noLights();
    image(textOverlay, -width/2, -height/2);
    pop();
    
    // Calculate total content height for scroll limits
    let totalContentH = 90 + 60 + 200 + 400;
    detailMaxScroll = max(0, totalContentH - height);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    if (textOverlay) {
        textOverlay.remove(); // libérer l'ancien canvas
    }
    textOverlay = createGraphics(windowWidth, windowHeight); // recreate overlay
    // Recalculate radius to maintain fixed spacing and fit on screen
    radius = (cardW + spacing) / (2 * sin(PI / cardsCount)) * 1.0;
}

function mouseWheel(event) {
    if (viewMode === "image_detail" || viewMode === "about_me") {
        // Scroll the detail page vertically
        detailTargetScrollY -= event.delta * 1.2;
        detailTargetScrollY = constrain(detailTargetScrollY, -detailMaxScroll, 0);
    } else {
        // Scroll controls rotation
        targetRot -= event.delta * 0.005;
    }
    return false;
}

function mousePressed() {
    // Check if in about me view
    if (viewMode === "about_me") {
        // Back button (top left)
        if (mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 70) {
            viewMode = "carousel";
            detailScrollY = 0;
            detailTargetScrollY = 0;
            cursor(ARROW);
            return false;
        }
    }
    
    // Check if in image detail view
    if (viewMode === "image_detail") {
        // Close expanded gallery image
        if (expandedGalleryImg) {
            // Stop video if playing
            if (expandedVideoFile) {
                let vid = carouselImgs[selectedImageIndex];
                if (carouselFiles[selectedImageIndex] === expandedVideoFile && vid && vid.elt) {
                    vid.elt.pause();
                }
                let gallery = imageDescriptions[selectedImageIndex].gallery || [];
                for (let f of gallery) {
                    if (f === expandedVideoFile && galleryImgMap[f] && galleryImgMap[f].elt) {
                        galleryImgMap[f].elt.pause();
                    }
                }
                expandedVideoFile = null;
            }
            expandedGalleryImg = null;
            return false;
        }
        // Back button (top left) - using screen coordinates
        if (mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 70) {
            viewMode = "carousel";
            selectedImageIndex = null;
            detailScrollY = 0;
            detailTargetScrollY = 0;
            cursor(ARROW);
            return false;
        }
        // Clickable link
        if (linkBounds && mouseX >= linkBounds.x && mouseX <= linkBounds.x + linkBounds.w &&
            mouseY >= linkBounds.y && mouseY <= linkBounds.y + linkBounds.h) {
            window.open(linkBounds.url, '_blank');
            return false;
        }
        // Click on main image to expand
        if (mainImageBounds && mouseX >= mainImageBounds.x && mouseX <= mainImageBounds.x + mainImageBounds.w && 
            mouseY >= mainImageBounds.y && mouseY <= mainImageBounds.y + mainImageBounds.h) {
            expandedGalleryImg = mainImageBounds.img;
            // Play video sound if applicable
            let videoFile = carouselFiles[selectedImageIndex];
            if (isVideo(videoFile)) {
                expandedVideoFile = videoFile;
                let vid = carouselImgs[selectedImageIndex];
                if (vid && vid.elt) {
                    vid.elt.currentTime = 0;
                    vid.elt.volume = 1; // Défini le volume à 100%
                    vid.elt.play().catch(err => console.warn('Erreur lecture vidéo:', err));
                }
            }
            return false;
        }
        // Click on gallery image to expand
        for (let r = 0; r < galleryRects.length; r++) {
            let gr = galleryRects[r];
            if (mouseX >= gr.x && mouseX <= gr.x + gr.w && mouseY >= gr.y && mouseY <= gr.y + gr.h) {
                expandedGalleryImg = gr.img;
                // Play video sound if applicable
                let gallery = imageDescriptions[selectedImageIndex].gallery || [];
                let galleryFile = gallery[r];
                if (isVideo(galleryFile)) {
                    expandedVideoFile = galleryFile;
                    let vid = galleryImgMap[galleryFile];
                    if (vid && vid.elt) {
                        vid.elt.currentTime = 0;
                        vid.elt.volume = 1; // Défini le volume à 100%
                        vid.elt.play().catch(err => console.warn('Erreur lecture vidéo galerie:', err));
                    }
                }
                return false;
            }
        }
    }
    
    // Check if click is on a carousel image
    if (viewMode === "carousel") {
        // Check language buttons click
        for (let lb of languageButtons) {
            if (mouseX >= lb.x && mouseX <= lb.x + lb.w && mouseY >= lb.y && mouseY <= lb.y + lb.h) {
                currentLanguage = lb.code;
                return false;
            }
        }
        // Check Instagram click
        if (instagramBounds && mouseX >= instagramBounds.x && mouseX <= instagramBounds.x + instagramBounds.w &&
            mouseY >= instagramBounds.y && mouseY <= instagramBounds.y + instagramBounds.h) {
            window.open(instagramBounds.url, '_blank');
            return false;
        }
        // Check about me click
        if (aboutMeBounds && mouseX >= aboutMeBounds.x && mouseX <= aboutMeBounds.x + aboutMeBounds.w &&
            mouseY >= aboutMeBounds.y && mouseY <= aboutMeBounds.y + aboutMeBounds.h) {
            viewMode = "about_me";
            detailScrollY = 0;
            detailTargetScrollY = 0;
            return false;
        }
        // Check contact clicks (phone/email copy to clipboard)
        for (let cb of contactBounds) {
            if (mouseX >= cb.x && mouseX <= cb.x + cb.w && mouseY >= cb.y && mouseY <= cb.y + cb.h) {
                navigator.clipboard.writeText(cb.text);
                toastMessage = getText('copied');
                toastTimer = 90;
                return false;
            }
        }
        if (frontCardBounds && frontCardIndex >= 0) {
            // The front card is always near the horizontal center of the screen
            // Use a generous rectangular hit area
            let s = frontCardBounds.depthScale;
            let hitW = (frontCardBounds.imgW * s) / 2 + 60;
            let hitH = (frontCardBounds.imgH * s) / 2 + 60;
            
            // Screen center + worldX approximation (frontmost card has small x)
            let cx = width / 2 + frontCardBounds.worldX;
            let cy = height / 2 - 80;
            
            let dx = abs(mouseX - cx);
            let dy = abs(mouseY - cy);
            
            if (dx < hitW && dy < hitH) {
                selectedImageIndex = frontCardIndex % carouselImgs.length;
                viewMode = "image_detail";
                detailScrollY = 0;
                detailTargetScrollY = 0;
                return false;
            }
        }
    }
    return false;
}
