import React, { useState } from 'react';
import { Recipe, UserStats } from '../types';
import { TEEN_RECIPES } from '../data/recipesData';
import { 
  ChefHat, 
  Clock, 
  Star, 
  CheckSquare, 
  Square, 
  Heart, 
  Flame, 
  Sparkles, 
  Zap, 
  Play, 
  Pause, 
  RotateCcw,
  Utensils
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuickRecipesViewProps {
  stats: UserStats;
  onUpdateStats: (newStats: Partial<UserStats>) => void;
}

export const QuickRecipesView: React.FC<QuickRecipesViewProps> = ({ stats, onUpdateStats }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeRecipeId, setActiveRecipeId] = useState<string>(TEEN_RECIPES[0].id);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  
  // Simple cooking timer
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Todas las Recetas' },
    { id: 'comida-rapida', label: 'Comidas Rápidas Caseras' },
    { id: 'dulce', label: 'Antojos Dulces' },
    { id: 'salado', label: 'Snacks Salados' },
    { id: 'bebida', label: 'Bebidas Energizantes' },
  ];

  const filteredRecipes = selectedCategory === 'all'
    ? TEEN_RECIPES
    : TEEN_RECIPES.filter(r => r.category === selectedCategory);

  const currentRecipe = TEEN_RECIPES.find(r => r.id === activeRecipeId) || filteredRecipes[0] || TEEN_RECIPES[0];
  const isFavorite = stats.favoriteRecipes.includes(currentRecipe.id);

  const toggleFavorite = (recipeId: string) => {
    const isFav = stats.favoriteRecipes.includes(recipeId);
    const newFavorites = isFav
      ? stats.favoriteRecipes.filter(id => id !== recipeId)
      : [...stats.favoriteRecipes, recipeId];
    
    if (!isFav) {
      confetti({ particleCount: 35, spread: 40, origin: { y: 0.8 } });
    }

    onUpdateStats({ favoriteRecipes: newFavorites });
  };

  const toggleIngredientCheck = (ingredientKey: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [ingredientKey]: !prev[ingredientKey]
    }));
  };

  // Timer handlers
  const startTimer = (minutes: number) => {
    setTimerSeconds(minutes * 60);
    setTimerRunning(true);
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && timerRunning) {
      setTimerRunning(false);
      confetti({ particleCount: 60, spread: 70 });
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timerSeconds]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/40 border border-slate-800 p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ChefHat className="w-3.5 h-3.5" />
            Cocina Exprés Teen
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Hacks Culinarios de <span className="text-teal-400">Menos de 10 Minutos</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Sin complicaciones, con ingredientes que tienes en casa o compras con cambio suelto, y con el mismo sabor crujiente de las cadenas comerciales pero sin aceites quemados.
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`recipe-cat-${cat.id}`}
            onClick={() => {
              setSelectedCategory(cat.id);
              const firstInCat = cat.id === 'all' ? TEEN_RECIPES[0] : TEEN_RECIPES.find(r => r.category === cat.id);
              if (firstInCat) setActiveRecipeId(firstInCat.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Recipe Cards List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredRecipes.map((rec) => {
          const isSelected = rec.id === activeRecipeId;
          const isFav = stats.favoriteRecipes.includes(rec.id);

          return (
            <button
              key={rec.id}
              id={`recipe-card-${rec.id}`}
              onClick={() => setActiveRecipeId(rec.id)}
              className={`text-left p-4 rounded-2xl border transition-all cursor-pointer relative ${
                isSelected
                  ? 'bg-slate-800/95 border-teal-500 shadow-lg shadow-teal-500/10 ring-1 ring-teal-500'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1 text-xs font-bold text-teal-400">
                  <Clock className="w-3.5 h-3.5" />
                  {rec.prepTimeMinutes} min
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-slate-200">{rec.teenScore}</span>
                </div>
              </div>

              <h3 className="font-extrabold text-sm sm:text-base text-white line-clamp-1">
                {rec.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                {rec.subtitle}
              </p>

              <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="truncate max-w-[170px]">
                  Sustituye: <strong className="text-slate-300">{rec.replacesFood}</strong>
                </span>
                {isFav && <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Recipe Deep Dive */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
        
        {/* Recipe Header */}
        <div className="bg-slate-950/80 p-6 sm:p-8 border-b border-slate-800 flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-extrabold uppercase">
                {currentRecipe.category.toUpperCase()}
              </span>
              <span className="text-xs text-slate-400">
                Reemplaza: <span className="text-red-400 font-semibold">{currentRecipe.replacesFood}</span>
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white">
              {currentRecipe.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {currentRecipe.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="fav-recipe-btn"
              onClick={() => toggleFavorite(currentRecipe.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                isFavorite
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'text-rose-400 fill-rose-400' : 'text-slate-400'}`} />
              <span>{isFavorite ? 'Guardado' : 'Guardar en Favoritos'}</span>
            </button>
          </div>
        </div>

        {/* Nutritional Highlight Banner */}
        <div className="bg-teal-950/20 border-b border-teal-900/30 px-6 py-3 flex items-center gap-2.5 text-xs text-teal-300">
          <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
          <span><strong>Beneficio Clave:</strong> {currentRecipe.nutritionalHighlight}</span>
        </div>

        {/* Ingredients & Steps Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800 p-6 sm:p-8 gap-6 md:gap-0">
          
          {/* Ingredients Column */}
          <div className="md:pr-8 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-teal-400" />
                Ingredientes Necesarios:
              </h4>
              <span className="text-xs text-slate-500">
                (Marca lo que tengas en casa)
              </span>
            </div>

            <ul className="space-y-2.5">
              {currentRecipe.ingredients.map((ing, idx) => {
                const key = `${currentRecipe.id}-ing-${idx}`;
                const isChecked = !!checkedIngredients[key];

                return (
                  <li 
                    key={idx}
                    onClick={() => toggleIngredientCheck(key)}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border transition cursor-pointer ${
                      isChecked 
                        ? 'bg-teal-950/20 border-teal-500/30 text-teal-200 line-through' 
                        : 'bg-slate-950/60 border-slate-800 text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-teal-400 shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                    <span className="text-xs leading-snug">{ing}</span>
                  </li>
                );
              })}
            </ul>

            {/* Quick Timer Utility */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  Temporizador de Cocina:
                </span>
                <span className="text-base font-black font-mono text-teal-400">
                  {formatTimer(timerSeconds)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => startTimer(currentRecipe.prepTimeMinutes)}
                  className="flex-1 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition cursor-pointer"
                >
                  Fijar {currentRecipe.prepTimeMinutes} min
                </button>
                {timerRunning ? (
                  <button
                    onClick={() => setTimerRunning(false)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition cursor-pointer"
                  >
                    <Pause className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setTimerRunning(true)}
                    disabled={timerSeconds === 0}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition cursor-pointer disabled:opacity-40"
                  >
                    <Play className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => {
                    setTimerRunning(false);
                    setTimerSeconds(0);
                  }}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Steps Column */}
          <div className="md:pl-8 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Zap className="w-4 h-4 text-teal-400" />
              Paso a Paso en Tiempo Récord:
            </h4>

            <ol className="space-y-3">
              {currentRecipe.instructions.map((step, idx) => (
                <li 
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-300">
              <Flame className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                <strong>Consejo de limpieza:</strong> Para no pelear con tus padres por dejar la cocina sucia, lava o enjuaga la taza o sartén en cuanto termines mientras la comida se enfría. ¡Tardas 30 segundos!
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
