import React, { useState } from 'react';
import { FoodSwap, UserStats } from '../types';
import { FOOD_SWAPS } from '../data/swapsData';
import { 
  Flame, 
  Clock, 
  Coins, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  HeartPulse, 
  ChevronRight, 
  Utensils, 
  Bookmark,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SwapComparisonViewProps {
  stats: UserStats;
  onUpdateStats: (newStats: Partial<UserStats>) => void;
  onGoToRecipe?: (recipeTitle: string) => void;
}

export const SwapComparisonView: React.FC<SwapComparisonViewProps> = ({ stats, onUpdateStats }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSwapId, setActiveSwapId] = useState<string>(FOOD_SWAPS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Swaps' },
    { id: 'burgers', label: 'Comidas Rápidas' },
    { id: 'frituras', label: 'Frituras & Pollo' },
    { id: 'bebidas', label: 'Bebidas & Energizantes' },
    { id: 'snacks', label: 'Snacks Crujientes' },
    { id: 'dulces', label: 'Dulces & Postres' },
  ];

  const filteredSwaps = selectedCategory === 'all' 
    ? FOOD_SWAPS 
    : FOOD_SWAPS.filter(s => s.category === selectedCategory);

  const currentSwap = FOOD_SWAPS.find(s => s.id === activeSwapId) || filteredSwaps[0] || FOOD_SWAPS[0];

  const isExplored = stats.swapsExplored.includes(currentSwap.id);

  const handleMarkAsTried = (swapId: string) => {
    if (!stats.swapsExplored.includes(swapId)) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      const newExplored = [...stats.swapsExplored, swapId];
      const newScore = stats.score + 50;
      const newLevel = Math.floor(newScore / 100) + 1;
      
      const newBadges = [...stats.badges];
      if (newExplored.length >= 3 && !newBadges.includes('Explorador de Swaps')) {
        newBadges.push('Explorador de Swaps');
      }
      if (newExplored.length >= 6 && !newBadges.includes('Master del Cambio Saludable')) {
        newBadges.push('Master del Cambio Saludable');
      }

      onUpdateStats({
        swapsExplored: newExplored,
        score: newScore,
        level: newLevel,
        badges: newBadges
      });
    }
  };

  const handleShare = (swap: FoodSwap) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`¡Mira este swap saludable de TeenBite!: Cambia "${swap.badFood.name}" por "${swap.goodFood.name}" para más energía y piel sana.`);
      setCopiedId(swap.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* Intro Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            Estrategia Anti-Comida Chatarra
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            No dejes de comer lo que te gusta: <span className="text-emerald-400">Mejora la versión</span>
          </h1>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
            La comida rápida comercial está diseñada para generarte picos de dopamina y luego dejarte cansado, sin concentración y con inflamación. Aquí tienes los reemplazos inteligentes (Swaps) que saben brutales, cuidan tu piel y potencian tu rendimiento.
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`filter-cat-${cat.id}`}
            onClick={() => {
              setSelectedCategory(cat.id);
              const firstInCat = cat.id === 'all' 
                ? FOOD_SWAPS[0] 
                : FOOD_SWAPS.find(s => s.category === cat.id);
              if (firstInCat) setActiveSwapId(firstInCat.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-slate-100 text-slate-950 font-bold shadow'
                : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Swaps Quick Selector Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {filteredSwaps.map((swap) => {
          const isSelected = swap.id === activeSwapId;
          const hasExplored = stats.swapsExplored.includes(swap.id);
          return (
            <button
              key={swap.id}
              id={`swap-btn-${swap.id}`}
              onClick={() => setActiveSwapId(swap.id)}
              className={`text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl transition-all border cursor-pointer relative ${
                isSelected
                  ? 'bg-slate-800/90 border-emerald-500/80 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500'
                  : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {swap.categoryLabel}
                </span>
                {hasExplored && (
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" /> Hecho
                  </span>
                )}
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-200 line-clamp-2 leading-snug">
                {swap.goodFood.name.split('+')[0]}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Active Battle Card (Side by Side Duel) */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
        {/* Battle Header */}
        <div className="bg-slate-950/70 px-6 py-4 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Batalla Nutricional Teen
            </span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-white">
              {currentSwap.title}
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              id="share-swap-btn"
              onClick={() => handleShare(currentSwap)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-medium transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedId === currentSwap.id ? '¡Copiado!' : 'Compartir'}</span>
            </button>

            <button
              id="try-swap-btn"
              onClick={() => handleMarkAsTried(currentSwap.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                isExplored
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isExplored ? 'Swap Dominado (+50 XP)' : '¡Lo prepararé! (+50 XP)'}</span>
            </button>
          </div>
        </div>

        {/* Side by Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          
          {/* BAD FOOD COLUMN */}
          <div className="p-6 sm:p-8 bg-red-950/10 space-y-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/30 text-xs font-extrabold uppercase">
                <AlertTriangle className="w-3.5 h-3.5" />
                Lo que debes evitar o reducir
              </span>
              <span className="text-xs font-mono text-slate-400">
                ~{currentSwap.badFood.caloriesApprox} kcal
              </span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-red-300">
                {currentSwap.badFood.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentSwap.badFood.description}
              </p>
            </div>

            {/* Downside Stats */}
            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-red-900/30">
                <span className="text-[11px] font-semibold text-slate-400 block">Grasas Saturadas</span>
                <span className="text-base sm:text-lg font-extrabold text-red-400">
                  {currentSwap.badFood.saturatedFatG}g
                </span>
                <span className="text-[10px] text-red-400/80 block mt-0.5">Exceso peligroso</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-red-900/30">
                <span className="text-[11px] font-semibold text-slate-400 block">Riesgo en la Piel</span>
                <span className="text-xs sm:text-sm font-bold text-red-300">
                  {currentSwap.badFood.skinImpact}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Brotes e inflamación</span>
              </div>
            </div>

            {/* Biological Downside Box */}
            <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/40 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-red-300">
                <HeartPulse className="w-4 h-4 text-red-400 shrink-0" />
                <span>¿Por qué te apaga la energía?</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {currentSwap.badFood.healthDownside}
              </p>
              <div className="pt-1 text-[11px] text-red-400/90 font-medium">
                ⚡ {currentSwap.badFood.energyDuration}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
              <strong className="text-slate-300">Trampa cerebral:</strong> {currentSwap.badFood.dopamineTrap}
            </div>
          </div>

          {/* GOOD FOOD COLUMN (THE SWAP) */}
          <div className="p-6 sm:p-8 bg-emerald-950/15 space-y-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-extrabold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                La Alternativa Inteligente (Swap)
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                ~{currentSwap.goodFood.caloriesApprox} kcal
              </span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-300">
                {currentSwap.goodFood.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentSwap.goodFood.description}
              </p>
            </div>

            {/* Advantage Stats */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-900/40">
                <span className="text-[10px] font-semibold text-slate-400 block">Grasa Saturada</span>
                <span className="text-sm sm:text-base font-extrabold text-emerald-400">
                  {currentSwap.goodFood.saturatedFatG}g
                </span>
                <span className="text-[9px] text-emerald-400 block">(-80% menos)</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-900/40">
                <span className="text-[10px] font-semibold text-slate-400 block">Tiempo</span>
                <span className="text-sm sm:text-base font-extrabold text-white flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  {currentSwap.goodFood.prepTimeMinutes}m
                </span>
                <span className="text-[9px] text-slate-400 block">Súper rápido</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-900/40">
                <span className="text-[10px] font-semibold text-slate-400 block">Costo</span>
                <span className="text-sm sm:text-base font-extrabold text-amber-300">
                  {currentSwap.goodFood.costLevel}
                </span>
                <span className="text-[9px] text-slate-400 block">Ahorras dinero</span>
              </div>
            </div>

            {/* Nutritional Advantage Box */}
            <div className="p-3.5 rounded-xl bg-emerald-950/25 border border-emerald-800/40 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Superpoder para tu cuerpo</span>
              </div>
              <p className="text-slate-200 text-xs leading-relaxed">
                {currentSwap.goodFood.healthAdvantage}
              </p>
              <div className="pt-1 text-[11px] text-emerald-400 font-medium">
                ⚡ {currentSwap.goodFood.energyDuration}
              </div>
            </div>

            {/* Quick Steps */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-emerald-400" />
                Cómo prepararlo en casa:
              </span>
              <ol className="space-y-1.5 text-xs text-slate-300">
                {currentSwap.goodFood.quickSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-950/50 p-2 rounded-lg border border-slate-800/60">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

        </div>

        {/* Teen Hack Footer */}
        <div className="bg-slate-950 p-4 sm:p-5 border-t border-slate-800 flex items-start sm:items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <strong className="text-amber-300 font-bold block sm:inline mr-2">
              💡 Hack Teen de Bolsillo:
            </strong>
            <span className="text-slate-300">{currentSwap.teenHack}</span>
          </div>
        </div>

      </div>

    </div>
  );
};
