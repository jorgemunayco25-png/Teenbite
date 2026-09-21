import React, { useState } from 'react';
import { QuizScenario, UserStats } from '../types';
import { QUIZ_SCENARIOS } from '../data/quizData';
import { 
  Gamepad2, 
  Trophy, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Users, 
  AlarmClock, 
  ShieldCheck,
  Flame,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ArcadeQuizViewProps {
  stats: UserStats;
  onUpdateStats: (newStats: Partial<UserStats>) => void;
}

export const ArcadeQuizView: React.FC<ArcadeQuizViewProps> = ({ stats, onUpdateStats }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [energyMeter, setEnergyMeter] = useState<number>(75);
  const [skinMeter, setSkinMeter] = useState<number>(70);
  const [moneySavedTotal, setMoneySavedTotal] = useState<number>(0);

  const scenario = QUIZ_SCENARIOS[currentScenarioIndex];
  const selectedOption = scenario.options.find(o => o.id === selectedOptionId);

  const handleSelectOption = (optionId: string) => {
    if (selectedOptionId) return; // already answered
    setSelectedOptionId(optionId);

    const opt = scenario.options.find(o => o.id === optionId);
    if (!opt) return;

    // Update meters
    const newEnergy = Math.max(10, Math.min(100, energyMeter + opt.energyChange));
    const newSkin = Math.max(10, Math.min(100, skinMeter + opt.skinChange));
    setEnergyMeter(newEnergy);
    setSkinMeter(newSkin);

    if (opt.isBestChoice) {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
      const addedMoney = parseFloat(opt.pocketMoneySaved.replace('$', '')) || 0;
      setMoneySavedTotal(prev => prev + addedMoney);

      // Award XP and complete scenario
      const newCompleted = stats.completedScenarios.includes(scenario.id)
        ? stats.completedScenarios
        : [...stats.completedScenarios, scenario.id];
      
      const newScore = stats.score + 75;
      const newLevel = Math.floor(newScore / 100) + 1;
      const newBadges = [...stats.badges];

      if (!newBadges.includes('Estratega de Antojos')) {
        newBadges.push('Estratega de Antojos');
      }
      if (newCompleted.length >= QUIZ_SCENARIOS.length && !newBadges.includes('Campeón Anti-Chatarra')) {
        newBadges.push('Campeón Anti-Chatarra');
      }

      onUpdateStats({
        completedScenarios: newCompleted,
        score: newScore,
        level: newLevel,
        badges: newBadges
      });
    }
  };

  const handleNextScenario = () => {
    setSelectedOptionId(null);
    if (currentScenarioIndex < QUIZ_SCENARIOS.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
    } else {
      // Loop or restart
      setCurrentScenarioIndex(0);
    }
  };

  const handleResetGame = () => {
    setCurrentScenarioIndex(0);
    setSelectedOptionId(null);
    setEnergyMeter(75);
    setSkinMeter(70);
    setMoneySavedTotal(0);
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* Arcade Header */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 border border-slate-800 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Gamepad2 className="w-3.5 h-3.5" />
              Simulador de Decisiones Reales
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              ¿Sobrevives al Antojo? <span className="text-amber-400">El Reto Teen</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Ponte a prueba en situaciones reales con amigos, maratones de estudio, videojuegos y salidas. Tus decisiones cambian tu energía, tu piel y tu dinero.
            </p>
          </div>

          <button
            id="reset-arcade-btn"
            onClick={handleResetGame}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition cursor-pointer border border-slate-700/60"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reiniciar Retos</span>
          </button>
        </div>

        {/* Live HUD Meters */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 pt-4 border-t border-slate-800/80">
          
          {/* ENERGY METER */}
          <div className="p-3 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between text-xs font-bold text-amber-300 mb-1.5">
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                Energía Gamer:
              </span>
              <span>{energyMeter}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500 rounded-full"
                style={{ width: `${energyMeter}%` }}
              />
            </div>
          </div>

          {/* SKIN METER */}
          <div className="p-3 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between text-xs font-bold text-pink-300 mb-1.5">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                Escudo Piel:
              </span>
              <span>{skinMeter}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 to-emerald-400 transition-all duration-500 rounded-full"
                style={{ width: `${skinMeter}%` }}
              />
            </div>
          </div>

          {/* POCKET MONEY SAVED */}
          <div className="p-3 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="text-[11px] font-semibold text-slate-400">
              Ahorro de Bolsillo:
            </div>
            <div className="text-base sm:text-lg font-black text-emerald-400 font-mono">
              +${moneySavedTotal.toFixed(2)}
            </div>
          </div>

        </div>
      </div>

      {/* Current Scenario Card */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl p-6 sm:p-8 space-y-6">
        
        {/* Scenario Header */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
            Nivel {currentScenarioIndex + 1} de {QUIZ_SCENARIOS.length}
          </span>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            {QUIZ_SCENARIOS.map((_, idx) => (
              <span 
                key={idx}
                className={`w-2.5 h-2.5 rounded-full ${
                  idx === currentScenarioIndex ? 'bg-emerald-400' :
                  stats.completedScenarios.includes(QUIZ_SCENARIOS[idx].id) ? 'bg-emerald-800' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            {scenario.title}
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {scenario.context}
          </p>
          <div className="mt-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-bold text-amber-300">
            🎯 {scenario.situationPrompt}
          </div>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {scenario.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            const showResult = selectedOptionId !== null;

            return (
              <button
                key={opt.id}
                id={`arcade-opt-${opt.id}`}
                disabled={showResult}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  !showResult
                    ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                    : isSelected
                    ? opt.isBestChoice
                      ? 'bg-emerald-950/30 border-emerald-500 ring-1 ring-emerald-500'
                      : 'bg-red-950/30 border-red-500 ring-1 ring-red-500'
                    : opt.isBestChoice
                    ? 'bg-emerald-950/20 border-emerald-500/50 opacity-90'
                    : 'bg-slate-950/40 border-slate-800 opacity-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                    !showResult
                      ? 'bg-slate-800 text-slate-300'
                      : opt.isBestChoice
                      ? 'bg-emerald-500 text-slate-950'
                      : isSelected
                      ? 'bg-red-500 text-white'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {showResult ? (
                      opt.isBestChoice ? <CheckCircle2 className="w-4 h-4" /> : isSelected ? <XCircle className="w-4 h-4" /> : '•'
                    ) : (
                      opt.id.split('-')[1].toUpperCase()
                    )}
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      {opt.text}
                    </p>
                    {showResult && (
                      <div className="pt-2 text-xs space-y-1">
                        <p className={`font-medium ${opt.isBestChoice ? 'text-emerald-300' : 'text-red-300'}`}>
                          {opt.explanation}
                        </p>
                        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 pt-1">
                          <span>⚡ Energía: {opt.energyChange > 0 ? `+${opt.energyChange}%` : `${opt.energyChange}%`}</span>
                          <span>✨ Piel: {opt.skinChange > 0 ? `+${opt.skinChange}%` : `${opt.skinChange}%`}</span>
                          {opt.isBestChoice && (
                            <span className="text-emerald-400 font-bold">💰 Ahorro: {opt.pocketMoneySaved}</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Pro Tip & Next Button when answered */}
        {selectedOptionId && (
          <div className="pt-4 border-t border-slate-800 space-y-4 animate-in fade-in">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300">
              <strong className="text-amber-300 font-bold block mb-1">
                💡 Consejo Experto:
              </strong>
              {scenario.proTip}
            </div>

            <div className="flex justify-end">
              <button
                id="next-scenario-btn"
                onClick={handleNextScenario}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition cursor-pointer"
              >
                <span>{currentScenarioIndex < QUIZ_SCENARIOS.length - 1 ? 'Siguiente Situación' : 'Jugar de Nuevo'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Unlocked Badges Gallery */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Trophy className="w-4 h-4 text-emerald-400" />
          Medallas & Logros Desbloqueados:
        </h3>
        
        <div className="flex flex-wrap gap-2.5">
          {stats.badges.map((badge, idx) => (
            <div 
              key={idx} 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold"
            >
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>{badge}</span>
            </div>
          ))}
          {stats.badges.length === 0 && (
            <p className="text-xs text-slate-500">
              ¡Resuelve situaciones y prueba swaps para desbloquear tus primeras insignias de nutrición teen!
            </p>
          )}
        </div>
      </div>

    </div>
  );
};
