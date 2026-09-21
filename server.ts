import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Teen Nutrition Coach & Craving Transformer
app.post('/api/coach', async (req, res) => {
  try {
    const { craving, situation, ingredients } = req.body;

    const ai = getGenAI();

    if (ai) {
      const prompt = `Actúa como un nutriólogo juvenil experto, moderno, motivador y con lenguaje cercano para adolescentes (sin regaños, con datos científicos entretenidos, hacks prácticos y foco en energía, rendimiento deportivo, videojuegos, piel sana y concentración escolar).
El usuario adolescente tiene este antojo o duda:
- Antojo o comida rápida deseada: "${craving || 'comida rápida genérica'}"
- Situación o contexto: "${situation || 'tarde normal'}"
- Ingredientes disponibles o detalles: "${ingredients || 'básicos de cocina'}"

Devuelve una respuesta estructurada en formato JSON con la siguiente estructura:
{
  "veredictoRapido": "Frase corta y directa sobre por qué esa comida da bajón de energía/grasa saturada",
  "swapPrincipal": {
    "nombre": "Nombre atractivo del reemplazo saludable",
    "tiempoMinutos": 10,
    "dificultad": "Fácil",
    "ingredientes": ["ingrediente 1", "ingrediente 2"],
    "pasos": ["paso 1 rápido", "paso 2 rápido"],
    "porQueGana": "Por qué sabe increíble y no da pesadez"
  },
  "superBeneficioAdolescente": "Beneficio concreto (ej. piel más limpia, energía para el partido o para estudiar)",
  "hackDeBolsillo": "Tip de menos de $2 dólares o truco rápido para cuando estás en la calle con amigos",
  "memeTip": "Consejo breve con humor o actitud positiva"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      const responseText = response.text || '{}';
      try {
        const parsed = JSON.parse(responseText);
        return res.json({ success: true, data: parsed, isAi: true });
      } catch (parseError) {
        // Fallback to text parsing if needed
        return res.json({
          success: true,
          data: {
            veredictoRapido: "Las grasas trans y ultraprocesados dan un pico de dopamina rápido pero te apagan en 45 minutos.",
            swapPrincipal: {
              nombre: "Súper Smash Toast o Wrap Express",
              tiempoMinutos: 8,
              dificultad: "Fácil",
              ingredientes: ["Pan integral o tortilla", "Huevo revuelto o atún", "Aguacate / queso fresco", "Tomate y orégano"],
              pasos: ["Tuesta el pan o calienta la tortilla", "Añade proteína y grasas saludables que sacian de verdad", "Disfruta caliente y crujiente"],
              porQueGana: "Crujiente, delicioso y sin el bajón de aceite reciclado."
            },
            superBeneficioAdolescente: "Energía sostenida para tus partidas o entrenamientos y piel libre de inflamación.",
            hackDeBolsillo: "Lleva siempre una bolsita de frutos secos o pide agua con limón cuando salgas con amigos.",
            memeTip: "Tu cuerpo no es un basurero: ¡Métele combustible de alta gama!"
          },
          isAi: false
        });
      }
    }

    // Default expert teen nutritional fallback if GEMINI_API_KEY is not set
    const defaultSwaps: Record<string, any> = {
      papas: {
        veredictoRapido: "Las papas fritas de bolsa o fast-food están fritas en aceites recalentados cargados de grasas trans que ralentizan tu cerebro.",
        swapPrincipal: {
          nombre: "Chips de Papas o Garbanzos al Air Fryer con Páprika",
          tiempoMinutos: 12,
          dificultad: "Súper fácil",
          ingredientes: ["1 papa mediana o bote de garbanzos cocidos", "1 cucharadita de aceite de oliva", "Pimentón dulce o páprika", "Pizca de sal y ajo en polvo"],
          pasos: ["Corta en rodajas ultra finas o seca bien los garbanzos", "Mezcla con la pizca de aceite y especias al gusto", "Al air fryer u horno a 190°C por 10-12 min hasta que queden súper crocantes"],
          porQueGana: "Mismo crujido adictivo, 80% menos de grasa saturada y cero pesadez estomacal."
        },
        superBeneficioAdolescente: "Cero granitos por grasa oxidada y digestión ligera para no quedarte dormido en clase.",
        hackDeBolsillo: "Las palomitas de maíz hechas en olla con poco aceite son un snack integral barato de 10.",
        memeTip: "El crujido no tiene por qué costarte un colon inflamado."
      },
      hamburguesa: {
        veredictoRapido: "Las burgers comerciales usan carnes con hasta 30% de grasa de desecho y salsas con jarabe de maíz alto en fructosa.",
        swapPrincipal: {
          nombre: "Smash Burger Casera 'Protein Beast'",
          tiempoMinutos: 10,
          dificultad: "Fácil",
          ingredientes: ["Carne magra molida (o pechuga)", "Pan brioche integral o pan pita", "Queso mozzarella real", "Lechuga, tomate y salsa de yogur con mostaza"],
          pasos: ["Haz una bolita de carne y aplástala en sartén antiadherente bien caliente", "Dora 2 min por lado con sal y pimienta", "Monta en el pan tostado con vegetales frescos y salsa ligera"],
          porQueGana: "Sabe a restaurante gourmet, 35g de proteína limpia para tus músculos y cero grasa rancia."
        },
        superBeneficioAdolescente: "Construcción muscular real y energía que dura horas sin somnolencia.",
        hackDeBolsillo: "Si compras en la calle, pide la burger simple sin mayonesa extra y cambia las papas por ensalada o compártelas.",
        memeTip: "Músculos de gimnasio no se construyen con aceite de motor de freidora."
      },
      pizza: {
        veredictoRapido: "La pizza ultraprocesada y congelada tiene harinas refinadas y quesos análogos ultra grasos que disparan la insulina.",
        swapPrincipal: {
          nombre: "Pita-Pizza Express Crujiente",
          tiempoMinutos: 7,
          dificultad: "Muy fácil",
          ingredientes: ["1 pan pita o tortilla de trigo/avena", "Salsa de tomate natural triturado", "Queso mozzarella rallado", "Orégano, jamón de pavo o champiñones"],
          pasos: ["Unta la salsa sobre la base de pita", "Espolvorea queso y tus toppings favoritos", "Hornea o pon en sartén tapada 5 minutos hasta derretir"],
          porQueGana: "Masa finita y crocante lista en la mitad de tiempo que esperar al repartidor."
        },
        superBeneficioAdolescente: "Digestión rápida sin el 'coma alimentario' de la masa pesada.",
        hackDeBolsillo: "Añade siempre un toque verde (rúcula o albahaca) para sumar antioxidantes protectores de la piel.",
        memeTip: "Más rápido que la moto del delivery y te ahorras dinero para tus juegos."
      }
    };

    const key = (craving || '').toLowerCase().includes('papa') ? 'papas'
      : (craving || '').toLowerCase().includes('pizza') ? 'pizza'
      : 'hamburguesa';

    return res.json({
      success: true,
      data: defaultSwaps[key],
      isAi: false
    });

  } catch (error) {
    console.error('Error in /api/coach:', error);
    res.status(500).json({
      success: false,
      error: 'No se pudo generar el consejo nutricional en este momento.'
    });
  }
});

// Vite middleware for development vs static serve for production
if (process.env.NODE_ENV !== 'production') {
  createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  }).then((vite) => {
    app.use(vite.middlewares);
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running in DEV mode on http://localhost:${PORT}`);
    });
  });
} else {
  const distPath = path.join(process.cwd(), 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running in PROD mode on http://localhost:${PORT}`);
  });
}
