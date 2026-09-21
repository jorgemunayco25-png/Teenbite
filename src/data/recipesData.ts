import { Recipe } from '../types';

export const TEEN_RECIPES: Recipe[] = [
  {
    id: 'rec-smash-burger',
    title: 'Smash Burger Casera "Protein Beast"',
    subtitle: 'El sustituto supremo a la hamburguesa aceitosa de cadena',
    replacesFood: 'Hamburguesas grasientas de combo fast food',
    prepTimeMinutes: 10,
    category: 'comida-rapida',
    nutritionalHighlight: '36g de proteína limpia, menos de 5g de grasa saturada y 0g aceites de freidora',
    teenScore: 9.8,
    tags: ['Carne de verdad', 'Crujiente', 'Gamer Fuel'],
    ingredients: [
      '150g de carne molida magra de res (o pechuga de pollo picada)',
      '1 pan brioche integral o pan de hamburguesa tostado',
      '1 loncha de queso mozzarella auténtico',
      '2 rodajas de tomate y 2 hojas de lechuga fresca',
      '1 cucharadita de yogur griego mezclado con mostaza y pizca de ajo en polvo'
    ],
    instructions: [
      'Forma una bola con la carne molida sin amasar demasiado.',
      'Pon la sartén al fuego máximo con apenas una gotita de aceite. Cuando eche humo suave, pon la bola y aplástala con una espátula plana (smash).',
      'Sazona con sal y pimienta. Deja 2 minutos sin mover hasta crear una costra crujiente dorada.',
      'Dale la vuelta, pon la loncha de queso encima y tapa 1 minuto para fundir.',
      'Tuesta el pan, unta la salsa de yogur y monta con lechuga, tomate y tu burger caliente.'
    ]
  },
  {
    id: 'rec-pita-pizza',
    title: 'Pita-Pizza Nápoles Express',
    subtitle: 'Masa fina y súper crujiente en solo 6 minutos en sartén o airfryer',
    replacesFood: 'Pizzas congeladas aceitosas o delivery grasoso',
    prepTimeMinutes: 6,
    category: 'comida-rapida',
    nutritionalHighlight: 'Bajo en sodio, queso natural con calcio y licopeno antioxidante',
    teenScore: 9.6,
    tags: ['Sin amasar', 'Listo en 6 min', 'Queso fundido'],
    ingredients: [
      '1 pan pita integral o tortilla de trigo/avena',
      '3 cucharadas de salsa de tomate natural triturado',
      '50g de queso mozzarella rallado',
      '1 pizca de orégano seco y albahaca fresca',
      'Toppings opcionales: jamón magro, champiñones laminados o tomates cherry'
    ],
    instructions: [
      'Coloca el pan pita en una tabla y esparce el tomate dejando 1 cm libre en el borde.',
      'Añade el orégano y reparte el queso mozzarella por encima con tus toppings.',
      'En sartén: pon fuego medio-bajo, tapa con tapa de olla y deja 5-6 min hasta que el queso burbujee y la base esté crocante.',
      'En airfryer: hornea a 180°C durante 4 minutos. ¡Crocante instantáneo!'
    ]
  },
  {
    id: 'rec-mugcake-choco',
    title: 'Mugcake Choco-Bomb en Microondas',
    subtitle: 'Bizcocho esponjoso de chocolate caliente en solo 90 segundos',
    replacesFood: 'Donuts, pastelitos industriales y galletas empaquetadas',
    prepTimeMinutes: 3,
    category: 'dulce',
    nutritionalHighlight: 'Cero azúcar refinado añadido, rico en magnesio y fibra saciante',
    teenScore: 9.9,
    tags: ['Microondas', 'Antojo Dulce', 'Sin azúcar añadido'],
    ingredients: [
      '1 plátano maduro (cuanto más moteado, más dulce)',
      '1 huevo fresco',
      '3 cucharadas colmadas de copos o harina de avena',
      '1 cucharada de cacao puro en polvo desgrasado (100% cacao)',
      '1/2 cucharadita de polvo de hornear (levadura química)'
    ],
    instructions: [
      'En tu taza favorita, aplasta el plátano con tenedor hasta obtener puré líquido.',
      'Agrega el huevo y bate dentro de la misma taza.',
      'Añade la avena, el cacao y la pizca de polvo de hornear. Mezcla con tenedor hasta que no queden grumos.',
      'Lleva al microondas a máxima potencia durante 1 minuto y 30 segundos.',
      '¡Listo! Puedes ponerle un chorrito de crema de cacahuate o frutos rojos por encima.'
    ]
  },
  {
    id: 'rec-nachos-fit',
    title: 'Nachos / Doritos Saludables Caseros',
    subtitle: 'Triángulos de maíz crocantes al horno con queso y guacamole casero',
    replacesFood: 'Bolsas de Doritos industriales con glutamato y aceites hidrogenados',
    prepTimeMinutes: 8,
    category: 'salado',
    nutritionalHighlight: '75% menos de grasa saturada y fibra natural de maíz',
    teenScore: 9.4,
    tags: ['Crujiente', 'Snack para ver series', 'Fácil'],
    ingredients: [
      '3 tortillas de maíz tradicionales',
      '1 cucharadita de aceite de oliva',
      'Especias: pimentón ahumado, cebolla en polvo, comino y sal',
      'Para acompañar: 1/2 aguacate machacado con limón y sal (guacamole express)'
    ],
    instructions: [
      'Corta las tortillas de maíz en 8 triángulos cada una (como trozos de pizza).',
      'En un bol, rocía los triángulos con la cucharadita de aceite y espolvorea bien las especias.',
      'Esparce en la bandeja de horno o canasta de airfryer sin amontonar.',
      'Hornea a 190°C por 6-8 minutos hasta que doren y se vuelvan crujientes como piedras.',
      'Sirve con tu guacamole casero o salsa de tomate fresco.'
    ]
  },
  {
    id: 'rec-chicken-tenders',
    title: 'Tiras de Pollo Ultra-Crispy al Horno',
    subtitle: 'Crujido salvaje con costra dorada sin una gota de freidora',
    replacesFood: 'Nuggets comerciales de despiece y tiras de pollo grasientas',
    prepTimeMinutes: 12,
    category: 'comida-rapida',
    nutritionalHighlight: '40g de proteína de alto valor biológico para desarrollo muscular',
    teenScore: 9.7,
    tags: ['Alta Proteína', 'Super Crunch', 'Para compartir'],
    ingredients: [
      '250g de pechuga de pollo cortada en tiras gruesas',
      '1 taza de copos de maíz (cornflakes sin azúcar) machacados',
      '1 huevo batido con una pizca de sal y pimienta',
      '1 cucharadita de pimentón dulce y ajo en polvo'
    ],
    instructions: [
      'Pon los cornflakes en una bolsa limpia y aplástalos con un vaso para hacer trocitos crujientes.',
      'Sazona los cornflakes con el pimentón y ajo en polvo.',
      'Pasa cada tira de pollo por el huevo batido y luego empana generosamente en los cornflakes.',
      'Pon en airfryer a 195°C por 10-12 minutos (o al horno a 200°C por 18 min).',
      '¡Disfruta el crujido sonoro más satisfactorio de tu vida!'
    ]
  },
  {
    id: 'rec-citrus-cooler',
    title: 'Monster Buster: Bebida Efervescente Citrus-Berry',
    subtitle: 'Refresco espumoso energizante natural sin bajón ni azúcar añadido',
    replacesFood: 'Bebidas energéticas en lata y refrescos oscuros de cola',
    prepTimeMinutes: 3,
    category: 'bebida',
    nutritionalHighlight: 'Hidratación celular real, electrolitos naturales y L-teanina para concentración',
    teenScore: 9.3,
    tags: ['Energía Limpia', 'Refrescante', '0 Azúcar Añadido'],
    ingredients: [
      '1 lata o vaso de agua mineral con gas bien fría',
      'Zumo de medio limón o lima',
      '1 bolsita de té verde o matcha disuelta en 50ml de agua tibia',
      '4 fresas o frambuesas machacadas en el fondo del vaso',
      'Mucho hielo picado y hojitas de menta fresca'
    ],
    instructions: [
      'En un vaso alto, machaca las fresas con el zumo de limón usando una cuchara.',
      'Llena el vaso con hielo hasta el borde.',
      'Vierte la infusión de té verde concentrada y fría.',
      'Rellena con agua con gas y remueve suavemente con un popote.',
      'Siente la efervescencia helada y el empujón de energía limpia.'
    ]
  }
];
