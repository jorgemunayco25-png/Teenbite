import { QuizScenario } from '../types';

export const QUIZ_SCENARIOS: QuizScenario[] = [
  {
    id: 'mall-friends',
    title: 'Misión Mall: Salida Grupal a la Zona de Comida Rápida',
    context: 'Son las 5:00 PM, estás con tu grupo de amigos en el centro comercial. Todos van directos a pedir combos gigantes con frituras y refresco extra grande.',
    situationPrompt: '¿Cuál es tu jugada maestra para disfrutar con ellos sin sabotear tu cuerpo ni quedar como el "aburrido"?',
    imageIcon: 'Users',
    options: [
      {
        id: 'opt-a',
        text: 'Pedir la burger simple con carne a la parrilla, cambiar las papas por agua o ensalada, o compartir papas pequeñas.',
        isBestChoice: true,
        explanation: '¡Estrategia legendaria! Disfrutas del sabor de la carne a la parrilla, evitas el 70% del aceite de freidora y te ahorras el bajón de energía cuando salgas a caminar.',
        energyChange: +25,
        skinChange: +20,
        pocketMoneySaved: '$4.50'
      },
      {
        id: 'opt-b',
        text: 'Pedir el combo triple con queso fundido, papas bañadas en tocino y refresco de 1 litro porque "de algo hay que morir".',
        isBestChoice: false,
        explanation: 'Tu cerebro recibe un golpe de 1400 calorías con grasas trans recalentadas. A las 6:30 PM estarás cansado, con el estómago pesado y con sed insaciable por el sodio.',
        energyChange: -35,
        skinChange: -30,
        pocketMoneySaved: '$0.00'
      },
      {
        id: 'opt-c',
        text: 'Quedarte mirando con hambre y no comer nada de nada para "cuidarte".',
        isBestChoice: false,
        explanation: 'Pasar hambre cuando estás con amigos genera ansiedad extrema. Al llegar a casa a las 9 PM asaltarás la cocina comiendo cualquier cosa sin control.',
        energyChange: -20,
        skinChange: 0,
        pocketMoneySaved: '$8.00'
      }
    ],
    proTip: 'Hack Social: En cualquier cadena puedes pedir la hamburguesa sin salsas pesadas industriales o pedir un bowl de pollo con arroz. No tienes que aislarte para comer inteligente.'
  },
  {
    id: 'gaming-night',
    title: 'Noche Gamer / Maratón de Estudio: El Ataque del Hambre Nocturna',
    context: 'Es medianoche, estás en una partida competitiva o repasando para un examen clave de mañana. Tu estómago ruge con furia.',
    situationPrompt: '¿Qué snack eliges para mantener tus reflejos y concentración al máximo nivel?',
    imageIcon: 'Gamepad2',
    options: [
      {
        id: 'opt-a',
        text: 'Abrir una bolsa gigante de papitas fritas picantes y una lata de bebida energética.',
        isBestChoice: false,
        explanation: 'Grave error para tus reflejos: la grasa saturada reduce el flujo de oxígeno al cerebro y la bebida energética te causará taquicardia y temblores en el ratón/mando.',
        energyChange: -40,
        skinChange: -35,
        pocketMoneySaved: '$0.00'
      },
      {
        id: 'opt-b',
        text: 'Hacer palomitas de maíz caseras en olla (o microondas sin manteca) con una pizca de sal marina y un vaso de agua fría con limón.',
        isBestChoice: true,
        explanation: '¡Jugada Pro! Las palomitas son grano entero 100% con fibra saciante y volumen crujiente. Tus reflejos siguen a 144 FPS y tus dedos no quedan pringosos de grasa.',
        energyChange: +30,
        skinChange: +25,
        pocketMoneySaved: '$3.20'
      },
      {
        id: 'opt-c',
        text: 'Comer 4 galletas rellenas de chocolate industrial con leche condensada.',
        isBestChoice: false,
        explanation: 'El exceso de azúcar refinado te dará 10 minutos de euforia falsa antes de provocarte niebla mental (brain fog) y ganas de dormirte en mitad de la partida.',
        energyChange: -25,
        skinChange: -20,
        pocketMoneySaved: '$1.00'
      }
    ],
    proTip: 'Hack Nocturno: Tu cerebro gasta el 20% de tu energía al pensar o jugar. Aliméntalo con carbohidratos complejos y agua, no con grasas de freidora.'
  },
  {
    id: 'morning-rush',
    title: 'Despertador Tardío: 5 Minutos para Salir al Colegio',
    context: 'Sonó la alarma 3 veces. Quedan 7 minutos antes de que pase el autobús escolar. Tienes el estómago completamente vacío desde la noche anterior.',
    situationPrompt: '¿Cómo recargas tu batería antes de la primera clase de matemáticas?',
    imageIcon: 'AlarmClock',
    options: [
      {
        id: 'opt-a',
        text: 'Agarrar un plátano, untarle una cucharadita de crema de cacahuate y beber un vaso de agua.',
        isBestChoice: true,
        explanation: '¡Desayuno campeón en 60 segundos! El plátano te da carbohidratos de absorción rápida y el cacahuate aporta grasas buenas y proteína para mantener la glucosa estable hasta el recreo.',
        energyChange: +35,
        skinChange: +20,
        pocketMoneySaved: '$2.50'
      },
      {
        id: 'opt-b',
        text: 'Comprar una donut glaseada o pastelito industrial con un jugo envasado en la tienda de la esquina.',
        isBestChoice: false,
        explanation: 'Te metes 50g de azúcar añadido y grasa de palma. En la segunda hora de clase tu cabeza estará pesada y tu estómago rugirá con más hambre que antes.',
        energyChange: -30,
        skinChange: -25,
        pocketMoneySaved: '$0.00'
      },
      {
        id: 'opt-c',
        text: 'Salir sin comer nada y aguantar con el estómago vacío hasta las 2:00 PM.',
        isBestChoice: false,
        explanation: 'Sin glucosa matutina, tus niveles de cortisol (estrés) se disparan, te cuesta concentrarte y en el almuerzo terminarás eligiendo la comida más grasosa disponible.',
        energyChange: -15,
        skinChange: -5,
        pocketMoneySaved: '$3.00'
      }
    ],
    proTip: 'Hack Matutino: La combinación [Fruta + Grasa Saludable (frutos secos o crema de cacahuate)] tarda menos de 1 minuto y rinde 3 veces más que cualquier bollería procesada.'
  },
  {
    id: 'sports-energy',
    title: 'Pre-Entreno / Partido de la Tarde: Máxima Potencia',
    context: 'Tienes entrenamiento de fútbol, básquet, baile o sesión de gimnasio en 45 minutos. Sientes apetito y necesitas fuerza en las piernas.',
    situationPrompt: '¿Cuál es el combustible óptimo para no sentirte pesado pero volar en la cancha?',
    imageIcon: 'Trophy',
    options: [
      {
        id: 'opt-a',
        text: 'Comerte una porción de pizza recalentada con queso aceitoso que sobró de anoche.',
        isBestChoice: false,
        explanation: 'La grasa densa retrasa el vaciado gástrico: la sangre se va a tu estómago para intentar digerirla en vez de a tus músculos, provocando calambres o reflujo en pleno ejercicio.',
        energyChange: -35,
        skinChange: -20,
        pocketMoneySaved: '$0.00'
      },
      {
        id: 'opt-b',
        text: 'Una tostada con rodajas de plátano o manzana con canela y agua fresca.',
        isBestChoice: true,
        explanation: '¡Rendimiento olímpico! Glucógeno muscular directo sin digestión pesada. Tus músculos responden ágiles y no sufres náuseas por correr con grasa en el estómago.',
        energyChange: +40,
        skinChange: +25,
        pocketMoneySaved: '$2.00'
      },
      {
        id: 'opt-c',
        text: 'Tomarte dos latas de bebida energizante ultra-concentrada.',
        isBestChoice: false,
        explanation: 'Pico de ritmo cardíaco innecesario con deshidratación. Además, el exceso de estimulantes te hace quemar energía descontrolada en los primeros 10 minutos y luego fundirte.',
        energyChange: -20,
        skinChange: -25,
        pocketMoneySaved: '$0.00'
      }
    ],
    proTip: 'Regla de Oro Deportiva: Antes de sudar, cero grasa pesada y carbohidratos simples y nobles (fruta, avena, tostadas). La grasa se come después con las comidas principales.'
  }
];
