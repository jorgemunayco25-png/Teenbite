import React, { useState, useEffect } from 'react';
import { AppMode, UserStats } from './types';
import { Header } from './components/Header';
import { SwapComparisonView } from './components/SwapComparisonView';
import { BodyImpactSimulator } from './components/BodyImpactSimulator';
import { ArcadeQuizView } from './components/ArcadeQuizView';
import { QuickRecipesView } from './components/QuickRecipesView';
import { AiCoachView } from './components/AiCoachView';
import { ShieldCheck, Heart, Sparkles, BookOpen } from 'lucide-react';

const STORAGE_KEY = 'teenbite_user_stats_v1';

const INITIAL_STATS: UserStats = {
  score: 150,
  level: 1,
  streakDays: 3,
  completedScenarios: [],
  swapsExplored: ['burger-combo'],
  favoriteRecipes: ['rec-smash-burger'],
  badges: ['Iniciado Saludable', 'Explorador de Swaps']
};

export default function App() {
  const [currentMode, setCurrentMode] = useState<AppMode>('swaps');
  const [stats, setStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Error reading from localStorage', e);
    }
    return INITIAL_STATS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
      console.warn('Error saving to localStorage', e);
    }
  }, [stats]);

  const handleUpdateStats = (newStats: Partial<UserStats>) => {
    setStats(prev => ({
      ...prev,
      ...newStats
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Header & Navigation */}
      <Header 
        currentMode={currentMode}
        onSelectMode={(mode) => setCurrentMode(mode)}
        stats={stats}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {currentMode === 'swaps' && (
          <SwapComparisonView 
            stats={stats}
            onUpdateStats={handleUpdateStats}
          />
        )}

        {currentMode === 'body' && (
          <BodyImpactSimulator />
        )}

        {currentMode === 'arcade' && (
          <ArcadeQuizView 
            stats={stats}
            onUpdateStats={handleUpdateStats}
          />
        )}

        {currentMode === 'recipes' && (
          <QuickRecipesView 
            stats={stats}
            onUpdateStats={handleUpdateStats}
          />
        )}

        {currentMode === 'coach' && (
          <AiCoachView />
        )}
      </main>

      {/* Bottom Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-slate-300">TeenBite: Nutrición & Swaps Saludables</span>
            <span>— Hábitos inteligentes para adolescentes activos.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Sin dietas restrictivas ni culpas
            </span>
            <span>•</span>
            <span className="text-slate-400">
              Hecho para gamers, deportistas y estudiantes
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
