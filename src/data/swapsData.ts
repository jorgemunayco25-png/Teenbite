import { FoodSwap } from '../types';

export const FOOD_SWAPS: FoodSwap[] = [
  {
    id: 'burger-combo',
    title: 'Hamburguesa Triple Fast-Food VS Smash Burger Casera',
    category: 'burgers',
    categoryLabel: 'Comidas Rápidas',
    badFood: {
      name: 'Combo Fast-Food Triple Queso con Papas Fritas Grandes',
      description: 'Carne picada con desecho graso al 30%, queso amarillo plástico procesado, pan ultra-blanco con jarabe de maíz y papas sumergidas en aceite vegetal recalentado 50 veces.',
      caloriesApprox: 1350,
      saturatedFatG: 28,
      sugarG: 44, // including large soda
      energyDuration: 'Subidón de 30 min y caída brutal de energía ("coma alimentario")',
      healthDownside: 'Sobrecarga de grasas trans e inflamación intestinal que causa pesadez y somnolencia durante horas.',
      skinImpact: 'Muy alto',
      dopamineTrap: 'Sal y grasa sintética diseñadas en laboratorio para que comas sin saciarte nunca.'
    },
    goodFood: {
      name: 'Smash Burger Casera en Pan Rústico + Gajos de Papa al Horno',
      description: 'Carne magra 100% de res o pechuga sazonada, queso mozzarella o havarti real, rodajas de tomate jugoso, lechuga crujiente y papas con piel horneadas con páprika y orégano.',
      caloriesApprox: 580,
      saturatedFatG: 5,
      sugarG: 3,
      energyDuration: 'Energía sostenida 4-5 horas sin bajones de glucosa',
      healthAdvantage: '38g de proteína pura para músculos, hierro bioasimilable y fibra saciante sin aceites oxidados.',
      skinImpact: 'Amigable con la piel',
      prepTimeMinutes: 12,
      costLevel: '$',
      ingredients: [
        '150g carne molida magra (o medallón de lentejas/pollo)',
        '1 pan de hamburguesa integral o de masa madre',
        '1 loncha de queso mozzarella auténtico',
        '1 papa cortada en gajos con piel (al airfryer con pizca de aceite)',
        'Lechuga, tomate fresco y salsa de yogur con mostaza dijon'
      ],
      quickSteps: [
        'Calienta sartén antiadherente al máximo. Aplasta la carne finita (smash) 2 minutos por lado.',
        'Coloca el queso sobre la carne para que se derrita con el calor residual.',
        'Tuesta el pan 1 minuto, unta con yogur/mostaza, añade lechuga, tomate y la hamburguesa.',
        'Acompaña con papas al airfryer listas en 12 minutos.'
      ]
    },
    keyReason: 'Te da la misma experiencia jugosa y crujiente de un restaurante sin el 80% de las grasas nocivas ni el letargo mental.',
    teenHack: 'Guarda carne molida en porciones en el congelador. Descongelas una y tienes una burger lista más rápido de lo que tarda la moto de delivery.'
  },
  {
    id: 'fried-chicken',
    title: 'Tiras de Pollo Frito Comercial VS Pollo Crispy Airfryer con Costra de Avena/Cornflakes',
    category: 'frituras',
    categoryLabel: 'Frituras & Empanizados',
    badFood: {
      name: 'Cubo de Tiras de Pollo Frito (Fast Food Clásico)',
      description: 'Pollo empanizado con harinas refinadas y freído por inmersión en aceite de palma o soya reutilizado a más de 180°C.',
      caloriesApprox: 980,
      saturatedFatG: 22,
      sugarG: 8,
      energyDuration: 'Digestión súper lenta (más de 4 horas de estómago pesado)',
      healthDownside: 'Genera acrilamidas y radicales libres por el aceite reutilizado, afectando el rendimiento aeróbico.',
      skinImpact: 'Alto riesgo acné/inflamación',
      dopamineTrap: 'El glutamato monosódico y la grasa saturan tus receptores de sabor.'
    },
    goodFood: {
      name: 'Tiras Crispy Crunch al Horno o Airfryer',
      description: 'Pechuga de pollo fresca rebozada en huevo y copos de maíz triturados (o copos de avena) con ajo, cebolla en polvo y pimentón.',
      caloriesApprox: 420,
      saturatedFatG: 2,
      sugarG: 1,
      energyDuration: 'Combustible limpio de absorción sostenida para entrenar o estudiar',
      healthAdvantage: 'Proteína limpia de alto valor biológico con cero grasas saturadas industriales.',
      skinImpact: 'Amigable con la piel',
      prepTimeMinutes: 14,
      costLevel: '$',
      ingredients: [
        '200g pechuga de pollo en tiras',
        '1 huevo batido (o leche vegetal)',
        '1 taza de copos de maíz sin azúcar triturados o avena molida',
        'Pimentón dulce, ajo en polvo, orégano y pizca de sal marina'
      ],
      quickSteps: [
        'Pasa las tiras de pollo por el huevo y luego cúbrelas bien con los copos triturados sazonados.',
        'Coloca en la canasta del airfryer a 195°C durante 10 a 12 minutos (o 18 min en horno tradicional).',
        'Sírvelas bien crujientes con salsa tártara de yogur griego con limón.'
      ]
    },
    keyReason: 'Obtienes un crujido aún más sonoro y crocante que el comercial, pero con carne de verdad y 0g de aceite quemado.',
    teenHack: 'Si trituras los cornflakes con las manos en una bolsa ziploc, es súper divertido y no ensucias ningún plato extra.'
  },
  {
    id: 'soda-energy-drink',
    title: 'Bebida Energética / Refresco Azucarado VS Mocktail Frutal Energizante Natural',
    category: 'bebidas',
    categoryLabel: 'Bebidas & Energizantes',
    badFood: {
      name: 'Lata Grande de Bebida Energética o Refresco de Cola',
      description: '55 gramos de azúcar simple (equivalente a 14 terrones) más taurina sintética, colorante caramelo IV y cafeína concentrada deshidratante.',
      caloriesApprox: 240,
      saturatedFatG: 0,
      sugarG: 55,
      energyDuration: 'Pico de ansiedad a los 20 min seguido de temblores, fatiga y dolor de cabeza',
      healthDownside: 'Deshidrata tus neuronas, erosiona el esmalte dental y altera tus ciclos de sueño REM.',
      skinImpact: 'Alto riesgo acné/inflamación',
      dopamineTrap: 'Falsa sensación de energía que en realidad es una emergencia de insulina en tu sangre.'
    },
    goodFood: {
      name: 'Sparkling Citrus Berry Cooler (Té Verde Frío con Frutas)',
      description: 'Agua mineral gasificada con infusión de té verde o matcha frío, zumo de lima recién exprimido y frambuesas o fresas machacadas con hielo picado.',
      caloriesApprox: 35,
      saturatedFatG: 0,
      sugarG: 4,
      energyDuration: 'Enfoque mental nítido y constante durante más de 3 horas gracias a la L-teanina',
      healthAdvantage: 'Antioxidantes que protegen la piel, hidratación celular real y cafeína de liberación lenta sin taquicardias.',
      skinImpact: 'Antioxidante protector',
      prepTimeMinutes: 3,
      costLevel: '$',
      ingredients: [
        '1 vaso de agua mineral con gas fría',
        '1 bolsita de té verde infusionada en 50ml de agua caliente y enfriada (o té matcha)',
        'Zumo de 1/2 lima o limón',
        'Un puñado de fresas, moras o rodajas de naranja',
        'Hielo al gusto y hojas de menta'
      ],
      quickSteps: [
        'En un vaso grande machaca suavemente las frutas con el zumo de lima.',
        'Agrega hielo hasta el tope y vierte el té verde.',
        'Rellena con agua con gas bien fría y revuelve.'
      ]
    },
    keyReason: 'La combinación de agua con gas y té verde da la misma efervescencia refrescante sin disparar tu glucosa al espacio.',
    teenHack: 'Deja una botella de agua con rodajas de limón y menta en el refrigerador; sacia la sed mil veces mejor que un refresco azucarado.'
  },
  {
    id: 'pizza-frozen',
    title: 'Pizza Congelada Grasosa VS Pita-Pizza Nápoles Express',
    category: 'burgers',
    categoryLabel: 'Comidas Rápidas',
    badFood: {
      name: 'Pizza Congelada de Microondas / Delivery Barato',
      description: 'Masa hecha con harina blanca refinada, aceite de colza hidrogenado, embutidos ultraprocesados (pepperoni con nitritos) y queso sintético con alto contenido graso.',
      caloriesApprox: 1100,
      saturatedFatG: 24,
      sugarG: 12,
      energyDuration: 'Pesadez estomacal de más de 3 horas con sensación de hinchazón y sed constante',
      healthDownside: 'Pico de sodio extremo (más del 120% del límite diario recomendado para adolescentes).',
      skinImpact: 'Muy alto',
      dopamineTrap: 'Combinación mortal de grasa, almidón refinado y sal que apaga la señal de saciedad en tu hipotálamo.'
    },
    goodFood: {
      name: 'Pita-Pizza Nápoles Express en Sartén o Airfryer',
      description: 'Base de pan pita o tortilla integral, tomate natural triturado con orégano, mozzarella fresca, tomatitos cherry y jamón magro de pavo o pechuga.',
      caloriesApprox: 380,
      saturatedFatG: 4,
      sugarG: 3,
      energyDuration: 'Ligereza digestiva con energía continua para seguir activo',
      healthAdvantage: 'Licopeno del tomate (protector celular), calcio biodisponible y carbohidratos complejos de combustión lenta.',
      skinImpact: 'Amigable con la piel',
      prepTimeMinutes: 6,
      costLevel: '$',
      ingredients: [
        '1 pan pita integral o tortilla de trigo/avena',
        '3 cucharadas de salsa de tomate natural triturado',
        '50g de queso mozzarella rallado',
        'Tomates cherry en mitades, orégano y hojas de albahaca',
        'Opcional: champiñones en láminas o jamón magro'
      ],
      quickSteps: [
        'Unta el tomate sobre el pan pita y espolvorea orégano.',
        'Reparte el queso y los toppings de verduras sobre la base.',
        'Cocina en sartén tapada a fuego medio-bajo por 5 minutos, o 4 minutos en airfryer a 180°C.'
      ]
    },
    keyReason: 'Está lista en 6 minutos, cuesta una fracción de lo que vale una pizza comercial y no te deja el estómago como un bloque de cemento.',
    teenHack: 'El orégano y la albahaca aportan sabor de pizzería italiana real sin necesidad de aditivos químicos.'
  },
  {
    id: 'potato-chips-bag',
    title: 'Papas Fritas de Bolsa (Chips) VS Chips Crocantes de Garbanzos o Plátano al Horno',
    category: 'snacks',
    categoryLabel: 'Snacks & Crujientes',
    badFood: {
      name: 'Bolsa Grande de Papitas Fritas Industriales',
      description: 'Fritas a altísima temperatura en aceites oxidados, repletas de sal refinada, saborizantes artificiales y grasas saturadas que se acumulan en tus arterias.',
      caloriesApprox: 540,
      saturatedFatG: 14,
      sugarG: 1,
      energyDuration: 'Hambre renovada a los 40 minutos (no aporta nutrientes que sacien)',
      healthDownside: 'Altísima densidad calórica vacía sin fibra, con grasas proinflamatorias para la piel.',
      skinImpact: 'Muy alto',
      dopamineTrap: 'El factor crunch industrial está científicamente calibrado a 4 kilopascales de presión sonora para que no puedas parar.'
    },
    goodFood: {
      name: 'Garbanzos "Pop" Crocantes Especiados o Palomitas Caseras',
      description: 'Garbanzos cocidos tostados hasta quedar súper crocantes con pimentón ahumado, comino y pizca de sal, o palomitas de maíz naturales de maíz inflado.',
      caloriesApprox: 180,
      saturatedFatG: 0.8,
      sugarG: 1,
      energyDuration: 'Sensación de saciedad real durante más de 3 horas gracias a su alto contenido de fibra',
      healthAdvantage: 'Fibra prebiótica para microbiota intestinal saludable, magnesio para calmar el estrés y proteína vegetal.',
      skinImpact: 'Antioxidante protector',
      prepTimeMinutes: 10,
      costLevel: '$',
      ingredients: [
        '1 taza de garbanzos cocidos enjuagados y bien secos con un paño',
        '1 cucharadita de aceite de oliva virgen extra',
        '1/2 cucharadita de pimentón dulce, comino en polvo y ajo en polvo',
        'Una pizca de sal marina fina'
      ],
      quickSteps: [
        'Seca muy bien los garbanzos con servilleta o paño limpio (¡el secreto para que queden crocantes!).',
        'Mézclalos en un bol con el aceite y las especias.',
        'Pásalos al airfryer por 12-14 minutos a 190°C sacudiendo la canasta a la mitad, o al horno a 200°C por 20 min.'
      ]
    },
    keyReason: 'Crujen exactamente igual que una bolsa de papitas, pero nutren tu cerebro y cuerpo con fibra y minerales en vez de grasa quemada.',
    teenHack: 'Si no tienes garbanzos, unas palomitas de maíz hechas en olla con solo 1 cucharada de aceite son el snack integral más barato y saludable del mundo.'
  },
  {
    id: 'donuts-pastries',
    title: 'Donuts / Bollería Industrial VS Mugcake de Plátano, Cacao y Avena en Microondas',
    category: 'dulces',
    categoryLabel: 'Dulces & Antojos',
    badFood: {
      name: 'Donuts Glaseadas o Paquete de Galletas Rellenas',
      description: 'Harina refinada blanca + grasas vegetales hidrogenadas (margarinas industriales) + jarabes de azúcar que disparan la insulina por las nubes.',
      caloriesApprox: 480,
      saturatedFatG: 16,
      sugarG: 32,
      energyDuration: 'Pico eufórico de 15 minutos seguido de irritabilidad, cansancio y ansiedad por más azúcar',
      healthDownside: 'Glicación en el colágeno de la piel (empeora notablemente brotes de acné) y somnolencia escolar.',
      skinImpact: 'Muy alto',
      dopamineTrap: 'El azúcar refinado activa las mismas áreas cerebrales que sustancias adictivas.'
    },
    goodFood: {
      name: 'Mugcake Choco-Banana Express (Listo en 2 minutos)',
      description: 'Bizcocho esponjoso en taza hecho con plátano maduro machacado, avena en copos, 1 huevo y cacao puro 100% sin azúcar añadido.',
      caloriesApprox: 210,
      saturatedFatG: 1.5,
      sugarG: 8, // azúcar intrínseco natural de la fruta
      energyDuration: 'Energía sostenida y estable para estudiar o jugar videojuegos con concentración',
      healthAdvantage: 'Flavonoides del cacao puro para oxigenar el cerebro, triptófano del plátano para el buen humor y avena beta-glucano.',
      skinImpact: 'Amigable con la piel',
      prepTimeMinutes: 3,
      costLevel: '$',
      ingredients: [
        '1 plátano o banana madura',
        '1 huevo fresco',
        '3 cucharadas de harina o copos de avena',
        '1 cucharada generosa de cacao puro en polvo sin azúcar',
        '1 pizca de canela o polvo de hornear (opcional)'
      ],
      quickSteps: [
        'En tu taza favorita, machaca bien el plátano con un tenedor hasta hacerlo puré.',
        'Añade el huevo y bate bien. Incorpora la avena y el cacao puro hasta que quede una masa homogénea.',
        'Lleva al microondas a máxima potencia durante 1 minuto y 30 segundos. ¡Sale un bizcocho caliente y esponjoso!'
      ]
    },
    keyReason: 'Satisface el antojo más salvaje de chocolate dulce en solo 2 minutos, usando el dulzor natural de la fruta y sin químicos industriales.',
    teenHack: 'Cuanto más maduro y con manchitas negras esté el plátano, más dulce y esponjoso quedará tu mugcake sin agregar ni un grano de azúcar.'
  },
  {
    id: 'instant-ramen',
    title: 'Fideos Instantáneos Industriales VS Ramen Casero Flash Nutritivo',
    category: 'comidas-rapidas' as any,
    categoryLabel: 'Comidas Rápidas',
    badFood: {
      name: 'Fideos Instantáneos de Vaso (Sopa Maruchan / Ramen Comercial)',
      description: 'Fideos precocidos fritos en aceite de palma con un sobrecito de sabor que contiene hasta 1,800mg de sodio, glutamato monosódico y colorantes artificiales.',
      caloriesApprox: 410,
      saturatedFatG: 9,
      sugarG: 3,
      energyDuration: 'Digestión pesada con deshidratación interna por el exceso de sal',
      healthDownside: 'Sobrecarga tus riñones y provoca retención de líquidos e hinchazón facial al despertar.',
      skinImpact: 'Alto riesgo acné/inflamación',
      dopamineTrap: 'El caldo hiper-salado engaña a tu lengua para que parezca una comida nutritiva cuando no tiene ni vitaminas ni proteína.'
    },
    goodFood: {
      name: 'Ramen Casero Flash con Huevo Poché y Verduras',
      description: 'Fideos integrales o de arroz en caldo casero de verduras o pollo con salsa de soya reducida en sodio, jengibre, huevo cocido y espinacas tiernas.',
      caloriesApprox: 320,
      saturatedFatG: 2,
      sugarG: 1,
      energyDuration: 'Calor reconfortante con nutrientes reales y saciedad prolongada',
      healthAdvantage: 'Proteína de alta calidad del huevo (colina para la memoria), hierro y vitaminas del grupo B.',
      skinImpact: 'Amigable con la piel',
      prepTimeMinutes: 8,
      costLevel: '$',
      ingredients: [
        '1 porción de fideos de arroz o fideos tradicionales de trigo',
        '2 tazas de agua caliente con media cucharada de miso o caldo bajo en sal',
        '1 cucharadita de salsa de soya y pizca de jengibre',
        '1 huevo (hervido 6 minutos o cocinado directo en el caldo)',
        '1 puñado de hojas de espinaca fresca o cebolleta verde picada'
      ],
      quickSteps: [
        'Hierve el agua con la salsa de soya y jengibre.',
        'Agrega los fideos y cocina 3 minutos. Añade las espinacas que se cocinan en 30 segundos con el calor.',
        'Sirve en un bol con el huevo cortado a la mitad y cebolleta verde fresca por encima.'
      ]
    },
    keyReason: 'Te da el mismo calor de sopa reconfortante de anime, pero nutriendo tus músculos y sin el exceso de sodio que te inflama.',
    teenHack: 'Cocina un par de huevos duros a principios de semana y guárdalos con cáscara en la nevera para tener proteína exprés lista.'
  },
  {
    id: 'ice-cream-shake',
    title: 'Batido Gigante / Helado Comercial VS Nicecream de Frutos Rojos & Plátano',
    category: 'dulces',
    categoryLabel: 'Dulces & Antojos',
    badFood: {
      name: 'Milkshake / Helado Ultra-Cremoso de Cadena Comercial',
      description: 'Crema láctea con alto contenido de grasa saturada, jarabes espesantes artificiales y hasta 60g de azúcar añadida por vaso mediano.',
      caloriesApprox: 670,
      saturatedFatG: 19,
      sugarG: 62,
      energyDuration: 'Colapso energético súbito ("sugar crash") con bajón de ánimo y fatiga mental',
      healthDownside: 'Sobrecarga hepática de fructosa refinada y daño metabólico acumulativo.',
      skinImpact: 'Muy alto',
      dopamineTrap: 'Fórmula de grasa helada y azúcar que inhibe la leptina (la hormona de "ya estás lleno").'
    },
    goodFood: {
      name: 'Nicecream Ultra-Cremoso de Plátano & Arándanos',
      description: 'Helado cremoso 100% natural hecho triturando rodajas de plátano congelado con yogur griego y arándanos o fresas congeladas.',
      caloriesApprox: 180,
      saturatedFatG: 1,
      sugarG: 14, // azúcar natural no libre de frutas enteras
      energyDuration: 'Refrescante y tonificante, ideal antes o después de hacer deporte',
      healthAdvantage: 'Antocianinas que combaten radicales libres en la piel, probióticos para tu digestión y potasio muscular.',
      skinImpact: 'Antioxidante protector',
      prepTimeMinutes: 4,
      costLevel: '$',
      ingredients: [
        '1 plátano previamente pelado, cortado en rodajas y congelado',
        '1/2 taza de frutos rojos congelados (fresas o arándanos)',
        '2 cucharadas de yogur griego natural sin azúcar',
        'Opcional: 1 cucharadita de semillas de chía o crema de cacahuate'
      ],
      quickSteps: [
        'Pon las rodajas de plátano congeladas y frutos rojos en la licuadora o procesador de alimentos.',
        'Añade las cucharadas de yogur griego para darle suavidad.',
        'Tritura durante 1-2 minutos hasta que adquiera la textura exacta de un helado cremoso artesanal.'
      ]
    },
    keyReason: 'La textura es idéntica a la de una heladería italiana, pero está compuesto 100% de fruta real y probióticos.',
    teenHack: 'Cuando veas plátanos muy maduros en casa, pélalos, córtalos y mételos en una bolsa al congelador. Tienes helado gratis siempre listo.'
  }
];
