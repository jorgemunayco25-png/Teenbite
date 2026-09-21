import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Loader2, 
  HelpCircle, 
  Zap, 
  CheckCircle2, 
  Utensils, 
  Coins, 
  Flame, 
  Smile, 
  Bot
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CoachResponse {
  veredictoRapido: string;
  swapPrincipal: {
    nombre: string;
    tiempoMinutos: number;
    dificultad: string;
    ingredientes: string[];
    pasos: string[];
    porQueGana: string;
  };
  superBeneficioAdolescente: string;
  hackDeBolsillo: string;
  memeTip: string;
}

export const AiCoachView: React.FC = () => {
  const [cravingInput, setCravingInput] = useState<string>('');
  const [contextInput, setContextInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<CoachResponse | null>(null);
  const [isAiGenerated, setIsAiGenerated] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const sampleChips = [
    { label: 'Antojo salvaje de Doritos a medianoche', query: 'Bolsa de Doritos picantes con queso sintético a las 11:30 PM viendo streaming', context: 'En mi cuarto sin ganas de ensuciar ollas' },
    { label: 'Salida obligada a McDonald\'s con amigos', query: 'Combo de hamburguesa con papas fritas y refresco grande', context: 'Estoy en el centro comercial con todo mi grupo' },
    { label: 'Sed de Monster / Red Bull antes de entrenar', query: 'Lata grande de bebida energética con 50g de azúcar', context: 'Tengo partido de básquetbol en 40 minutos' },
    { label: 'Ganas de pizza grasosa un domingo', query: 'Pizza congelada grasienta con extra pepperoni aceitoso', context: 'Tengo flojera extrema pero tengo hambre de pizza' },
  ];

  const handleAskCoach = async (cQuery?: string, cContext?: string) => {
    const craving = cQuery || cravingInput.trim();
    const context = cContext || contextInput.trim();

    if (!craving) return;

    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          craving,
          situation: context,
          ingredients: 'ingredientes estándar de despensa'
        })
      });

      const data = await response.json();

      if (data.success && data.data) {
        setResult(data.data);
        setIsAiGenerated(!!data.isAi);
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
      } else {
        throw new Error('Respuesta inválida');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('No se pudo conectar con el Coach. Te dejamos un consejo rápido de emergencia.');
      setResult({
        veredictoRapido: 'La comida ultraprocesada te da un subidón momentáneo pero te cobra factura en pesadez y acné.',
        swapPrincipal: {
          nombre: 'Wrap / Tostada Smash de Rescate',
          tiempoMinutos: 5,
          dificultad: 'Súper fácil',
          ingredientes: ['Pan o tortilla', '1 huevo o atún', 'Queso fresco', 'Rodajas de tomate o aguacate'],
          pasos: ['Calienta la tortilla o tuesta el pan', 'Coloca los ingredientes en caliente', 'Come despacio y acompaña con agua fresca'],
          porQueGana: 'Cero aceite recalentado y saciedad inmediata que apaga la ansiedad de raíz.'
        },
        superBeneficioAdolescente: 'Piel limpia sin inflamación y energía para seguir concentrado.',
        hackDeBolsillo: 'Bebe un vaso de agua antes de comer: el 60% de los antojos nocturnos son solo sed disfrazada.',
        memeTip: '¡Tu cuerpo es un Fórmula 1, no le eches aceite de freidora usada!'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* Coach Header */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Bot className="w-3.5 h-3.5" />
            NutriCoach IA & Cravings Solver
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            ¿Qué comida chatarra se te antoja hoy? <span className="text-emerald-400">Te la hackeamos</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Dile al Coach exactamente qué tienes ganas de comer o en qué situación estás. Te responderá en segundos con un reemplazo brutal, económico y sin culpa.
          </p>
        </div>

        {/* Preset Sample Chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {sampleChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCravingInput(chip.query);
                setContextInput(chip.context);
                handleAskCoach(chip.query, chip.context);
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/60 text-xs text-slate-300 transition cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>{chip.label}</span>
            </button>
          ))}
        </div>

        {/* Input Form */}
        <div className="mt-5 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="craving-input" className="text-xs font-bold text-slate-300 block mb-1">
                ¿Qué comida rápida o snack grasoso tienes en mente?
              </label>
              <input
                id="craving-input"
                type="text"
                placeholder="Ej. Papitas fritas con salsa picante, hamburguesa doble con queso..."
                value={cravingInput}
                onChange={(e) => setCravingInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskCoach()}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500 placeholder:text-slate-500"
              />
            </div>

            <div>
              <label htmlFor="context-input" className="text-xs font-bold text-slate-300 block mb-1">
                Contexto o situación (opcional):
              </label>
              <input
                id="context-input"
                type="text"
                placeholder="Ej. Noche de gaming, salida con amigos, solo tengo sartén..."
                value={contextInput}
                onChange={(e) => setContextInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskCoach()}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500 placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              id="submit-coach-btn"
              onClick={() => handleAskCoach()}
              disabled={loading || !cravingInput.trim()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition cursor-pointer shadow-md shadow-emerald-500/20 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Cocinando el Hack...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Obtener Swap Inteligente</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Result Display Card */}
      {result && (
        <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
          
          {/* Card Header */}
          <div className="bg-slate-950/80 p-6 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  Veredicto & Solución NutriCoach
                </h3>
                <span className="text-[11px] text-slate-400">
                  {isAiGenerated ? 'Respuesta inteligente personalizada con Gemini 3.8 Flash' : 'Consejo verificado de nutrición juvenil'}
                </span>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              ⚡ Listo en {result.swapPrincipal.tiempoMinutos} min
            </span>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Quick Verdict */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-slate-200">
              <strong className="text-amber-300 font-bold block mb-1">
                ⚖️ La Verdad sobre ese antojo:
              </strong>
              {result.veredictoRapido}
            </div>

            {/* Main Swap Box */}
            <div className="rounded-2xl bg-slate-950/80 border border-emerald-500/40 p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Tu Mejor Reemplazo:
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-white">
                    {result.swapPrincipal.nombre}
                  </h4>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  Dificultad: <strong className="text-emerald-400">{result.swapPrincipal.dificultad}</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Ingredients */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-emerald-400" />
                    Ingredientes que necesitas:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {result.swapPrincipal.ingredientes.map((ing, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Steps */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    Pasos exprés:
                  </span>
                  <ol className="space-y-1.5 text-xs text-slate-300">
                    {result.swapPrincipal.pasos.map((paso, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{paso}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300">
                <strong>¿Por qué gana esta opción?</strong> {result.swapPrincipal.porQueGana}
              </div>
            </div>

            {/* Perks & Pocket Hack Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1 text-xs">
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> Superpoder Teen
                </span>
                <p className="text-slate-300 text-xs">
                  {result.superBeneficioAdolescente}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1 text-xs">
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5" /> Hack de Bolsillo
                </span>
                <p className="text-slate-300 text-xs">
                  {result.hackDeBolsillo}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1 text-xs">
                <span className="text-pink-400 font-bold flex items-center gap-1">
                  <Smile className="w-3.5 h-3.5" /> Consejo de Actitud
                </span>
                <p className="text-slate-300 text-xs">
                  {result.memeTip}
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
