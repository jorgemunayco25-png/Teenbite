import React, { useState } from 'react';
import { 
  Activity, 
  Brain, 
  Sparkles, 
  Zap, 
  Wallet, 
  Flame, 
  HelpCircle, 
  Info, 
  CheckCircle2, 
  AlertOctagon,
  Smile,
  Frown,
  Meh
} from 'lucide-react';

export const BodyImpactSimulator: React.FC = () => {
  const [fastFoodDaysPerWeek, setFastFoodDaysPerWeek] = useState<number>(3);
  const [timeHorizon, setTimeHorizon] = useState<'2h' | '24h' | '30d'>('2h');

  // Calculations based on scientific adolescent nutritional research
  const monthlyCostEstimate = fastFoodDaysPerWeek * 7.5 * 4; // approx $7.50 per fast food combo
  const annualCostEstimate = monthlyCostEstimate * 12;

  // Status indicators based on slider (0 = cleanest, 7 = highest risk)
  const getSeverityLevel = () => {
    if (fastFoodDaysPerWeek <= 1) return { level: 'Óptimo', color: 'emerald', text: 'Combustible de Élite' };
    if (fastFoodDaysPerWeek <= 3) return { level: 'Moderado', color: 'amber', text: 'Punto de Inflexión' };
    return { level: 'Crítico', color: 'red', text: 'Sobrecarga de Grasas & Inflamación' };
  };

  const severity = getSeverityLevel();

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* Simulator Header */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            Bio-Simulador Interactivo
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            El Viaje de la Comida Rápida en tu <span className="text-indigo-400">Cuerpo y Mente</span>
          </h1>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
            Descubre en tiempo real cómo las grasas oxidadas, el exceso de sodio y los azúcares añadidos impactan directamente tu concentración gamer, tu piel, tus músculos y tu billetera.
          </p>
        </div>

        {/* Interactive Slider Box */}
        <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <label htmlFor="fast-food-slider" className="text-sm font-bold text-slate-200 block">
                ¿Cuántos días a la semana consumes comida rápida o frituras?
              </label>
              <span className="text-xs text-slate-400">
                (Hamburguesas de cadena, papas fritas de bolsa, pizzas grasosas, pollo frito, energizantes)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-black font-mono ${
                severity.color === 'emerald' ? 'text-emerald-400' :
                severity.color === 'amber' ? 'text-amber-400' : 'text-red-400'
              }`}>
                {fastFoodDaysPerWeek} {fastFoodDaysPerWeek === 1 ? 'día' : 'días'}/sem
              </span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase border ${
                severity.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' :
                severity.color === 'amber' ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' :
                'bg-red-500/10 text-red-300 border-red-500/30'
              }`}>
                {severity.level}
              </span>
            </div>
          </div>

          <input
            id="fast-food-slider"
            type="range"
            min={0}
            max={7}
            step={1}
            value={fastFoodDaysPerWeek}
            onChange={(e) => setFastFoodDaysPerWeek(Number(e.target.value))}
            className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />

          <div className="flex justify-between text-[11px] font-semibold text-slate-500 px-1">
            <span>0 días (100% Casero)</span>
            <span>1-2 días (Ocasional)</span>
            <span>3-4 días (Habitual)</span>
            <span>5-7 días (Casi a diario)</span>
          </div>
        </div>
      </div>

      {/* Time Horizon Filter Buttons */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <Info className="w-4 h-4 text-indigo-400" />
          Efectos biológicos en tu organismo:
        </h3>

        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setTimeHorizon('2h')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              timeHorizon === '2h'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            A las 2 Horas
          </button>
          <button
            onClick={() => setTimeHorizon('24h')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              timeHorizon === '24h'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            A las 24 Horas
          </button>
          <button
            onClick={() => setTimeHorizon('30d')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              timeHorizon === '30d'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            En 30 Días
          </button>
        </div>
      </div>

      {/* Grid of Interactive Biological Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* CARD 1: CEREBRO & GAMING / ESTUDIO */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <Brain className="w-5 h-5" />
              <span>Cerebro & Enfoque</span>
            </div>
            {fastFoodDaysPerWeek <= 2 ? (
              <Smile className="w-5 h-5 text-emerald-400" />
            ) : fastFoodDaysPerWeek <= 4 ? (
              <Meh className="w-5 h-5 text-amber-400" />
            ) : (
              <Frown className="w-5 h-5 text-red-400" />
            )}
          </div>

          <div className="text-xs space-y-2 text-slate-300">
            {timeHorizon === '2h' && (
              <p>
                {fastFoodDaysPerWeek <= 2
                  ? 'Glucosa equilibrada. Tu tiempo de reacción en videojuegos y tu memoria de trabajo en clases están en su nivel máximo.'
                  : fastFoodDaysPerWeek <= 4
                  ? 'Empieza el "Sugar Crash": somnolencia leve, reflejos un 15% más lentos y necesidad de buscar otro snack dulce.'
                  : 'Colapso de dopamina: Niebla mental severa ("brain fog"), dificultad para leer enunciados largos y ganas de dormirte en tu silla.'}
              </p>
            )}
            {timeHorizon === '24h' && (
              <p>
                {fastFoodDaysPerWeek <= 2
                  ? 'Sueño REM profundo y reparador. Te levantas fresco y con ganas de moverte.'
                  : fastFoodDaysPerWeek <= 4
                  ? 'Despertares nocturnos por sed debido al exceso de sodio comercial. Fatiga leve al despertar.'
                  : 'Fase de sueño delta interrumpida. Te levantas sintiéndote como si te hubiera pasado un camión por encima.'}
              </p>
            )}
            {timeHorizon === '30d' && (
              <p>
                {fastFoodDaysPerWeek <= 2
                  ? 'Capacidad de aprendizaje potenciada y estado de ánimo estable sin bajones emocionales repentinos.'
                  : 'Menor neuroplasticidad en el hipocampo y mayor propensión a irritabilidad y ansiedad escolar.'}
              </p>
            )}
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">Rendimiento Cognitivo:</span>
            <span className={`font-bold ${
              fastFoodDaysPerWeek <= 2 ? 'text-emerald-400' :
              fastFoodDaysPerWeek <= 4 ? 'text-amber-400' : 'text-red-400'
            }`}>
              {fastFoodDaysPerWeek <= 2 ? '95% (Élite)' : fastFoodDaysPerWeek <= 4 ? '70% (Regular)' : '45% (Agotado)'}
            </span>
          </div>
        </div>

        {/* CARD 2: PIEL & ACNE */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-pink-400 font-bold text-sm">
              <Sparkles className="w-5 h-5" />
              <span>Salud de la Piel & Acné</span>
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              fastFoodDaysPerWeek <= 2 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
              fastFoodDaysPerWeek <= 4 ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
              'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {fastFoodDaysPerWeek <= 2 ? 'Piel Calmada' : fastFoodDaysPerWeek <= 4 ? 'Riesgo Moderado' : 'Inflamación Alta'}
            </span>
          </div>

          <div className="text-xs space-y-2 text-slate-300">
            {timeHorizon === '2h' && (
              <p>
                {fastFoodDaysPerWeek <= 2
                  ? 'Niveles bajos de factor IGF-1. Los poros respiran libres de exceso de grasa sebácea.'
                  : 'El pico de insulina dispara la producción de sebo en glándulas de mejillas y frente.'}
              </p>
            )}
            {timeHorizon === '24h' && (
              <p>
                {fastFoodDaysPerWeek <= 2
                  ? 'Regeneración celular limpia con antioxidantes naturales de frutas y vegetales.'
                  : 'Grasas oxidadas circulan en sangre, promoviendo micro-infecciones bacterianas en los folículos.'}
              </p>
            )}
            {timeHorizon === '30d' && (
              <p>
                {fastFoodDaysPerWeek <= 2
                  ? 'Tono uniforme, reducción visible de puntos negros y brillo natural saludable.'
                  : 'Brotes recurrentes de acné inflamatorio quístico persistente que tardan semanas en sanar.'}
              </p>
            )}
          </div>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
            <strong className="text-slate-300">Dato clave:</strong> El 80% del acné juvenil se agrava por el azúcar refinado y las frituras de aceites reutilizados, no por comer chocolate puro.
          </div>
        </div>

        {/* CARD 3: ENERGÍA & DEPORTE */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Zap className="w-5 h-5" />
              <span>Energía Física & Músculos</span>
            </div>
            <span className="font-mono text-xs text-slate-400">
              {fastFoodDaysPerWeek <= 2 ? '⚡⚡⚡' : fastFoodDaysPerWeek <= 4 ? '⚡⚡' : '⚡ (Baja)'}
            </span>
          </div>

          <div className="text-xs space-y-2 text-slate-300">
            {timeHorizon === '2h' && (
              <p>
                {fastFoodDaysPerWeek <= 2
                  ? 'Músculos recargados de glucógeno limpio. Listo para correr, saltar o entrenar sin calambres.'
                  : 'Tus intestinos secuestran toda la sangre para intentar romper la grasa densa. Sensación de "pesadez de plomo".'}
              </p>
            )}
            {timeHorizon === '24h' && (
              <p>
                {fastFoodDaysPerWeek <= 2
                  ? 'Recuperación muscular rápida y sin agujetas excesivas gracias al potasio y aminoácidos nobles.'
                  : 'Retención de líquidos por sodio excesivo: sensación de estar hinchado y pesado al saltar o correr.'}
              </p>
            )}
            {timeHorizon === '30d' && (
              <p>
                {fastFoodDaysPerWeek <= 2
                  ? 'Aumento de masa muscular magra, mayor velocidad cardiovascular y resistencia atlética.'
                  : 'Pérdida de capacidad pulmonar y fatiga precoz a los primeros 10 minutos de cualquier partido.'}
              </p>
            )}
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">Resistencia Atlética:</span>
            <span className={`font-bold ${
              fastFoodDaysPerWeek <= 2 ? 'text-emerald-400' :
              fastFoodDaysPerWeek <= 4 ? 'text-amber-400' : 'text-red-400'
            }`}>
              {fastFoodDaysPerWeek <= 2 ? 'Excelente' : fastFoodDaysPerWeek <= 4 ? 'Media' : 'Muy Baja'}
            </span>
          </div>
        </div>

      </div>

      {/* POCKET MONEY TEEN CALCULATOR */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
            <Wallet className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              El Hack Financiero Teen: ¿Cuánto gastas en comida chatarra?
            </h3>
            <p className="text-xs text-slate-400">
              El dinero que se va en comida rápida procesada podría financiar tus aficiones reales.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <span className="text-xs font-semibold text-slate-400 block">Gasto Estimado al Mes:</span>
            <span className="text-2xl font-black text-amber-400 font-mono mt-1 block">
              ${monthlyCostEstimate.toFixed(0)} USD
            </span>
            <span className="text-[10px] text-slate-500 mt-1 block">
              Basado en combos y snacks a ~$7.50
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <span className="text-xs font-semibold text-slate-400 block">Gasto Estimado al Año:</span>
            <span className="text-2xl font-black text-red-400 font-mono mt-1 block">
              ${annualCostEstimate.toFixed(0)} USD
            </span>
            <span className="text-[10px] text-slate-500 mt-1 block">
              ¡Una pequeña fortuna evaporada en grasa!
            </span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
            <span className="text-xs font-bold text-emerald-300 block">Si usas Swaps caseros ahorras:</span>
            <span className="text-2xl font-black text-emerald-400 font-mono mt-1 block">
              +${(annualCostEstimate * 0.75).toFixed(0)} USD
            </span>
            <span className="text-[11px] text-emerald-300/80 mt-1 block">
              Equivalente a: {Math.floor((annualCostEstimate * 0.75) / 60)} videojuegos nuevos o 3 pares de zapatillas de marca.
            </span>
          </div>
        </div>
      </div>

      {/* Anti-Myth Teen Busters */}
      <div className="space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-emerald-400" />
          Mitos Comunes sobre la Comida Rápida en Adolescentes:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
            <div className="flex items-center gap-2 text-red-400 font-bold">
              <AlertOctagon className="w-4 h-4 shrink-0" />
              <span>Mito 1: "Como soy joven y tengo metabolismo rápido, no me hace nada."</span>
            </div>
            <p className="text-slate-300">
              <strong className="text-emerald-400">Realidad:</strong> Aunque no aumentes de peso de inmediato, las grasas trans y el exceso de sodio inflaman tus arterias, dañan tu microbiota y alteran tu piel y cerebro exactamente igual.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
            <div className="flex items-center gap-2 text-red-400 font-bold">
              <AlertOctagon className="w-4 h-4 shrink-0" />
              <span>Mito 2: "Comer sano es aburrido y solo lechuga sin sabor."</span>
            </div>
            <p className="text-slate-300">
              <strong className="text-emerald-400">Realidad:</strong> Una smash burger casera con carne magra y queso fundido, tiras de pollo crispy al airfryer o un mugcake de chocolate tienen sabor gourmet y son 100% saludables.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
