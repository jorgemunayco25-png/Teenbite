import React from 'react';
import { AppMode, UserStats } from '../types';
import { Swords, Activity, Gamepad2, ChefHat, Sparkles, Flame, Trophy, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  stats: UserStats;
}

export const Header: React.FC<HeaderProps> = ({ currentMode, onSelectMode, stats }) => {
  const navItems: { id: AppMode; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'swaps', label: 'Batalla de Swaps', icon: <Swords className="w-4 h-4" /> },
    { id: 'body', label: 'Impacto en tu Cuerpo', icon: <Activity className="w-4 h-4" /> },
    { id: 'arcade', label: 'Desafíos Arcade', icon: <Gamepad2 className="w-4 h-4" />, badge: 'Quiz' },
    { id: 'recipes', label: 'Cocina Teen 10m', icon: <ChefHat className="w-4 h-4" /> },
    { id: 'coach', label: 'Coach IA Cravings', icon: <Sparkles className="w-4 h-4 text-emerald-400" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  TeenBite
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Healthy Hacks
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Domina los antojos de comida rápida y potencia tu energía
              </p>
            </div>
          </div>

          {/* User Level & Streak badges */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-amber-300 shadow-sm">
              <Flame className="w-4 h-4 text-amber-400 animate-pulse fill-amber-400" />
              <span>{stats.streakDays} días racha</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <Trophy className="w-4 h-4 text-emerald-400" />
              <span>Nv. {stats.level}</span>
              <span className="text-emerald-500/70 font-mono text-[11px]">({stats.score} XP)</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs bar */}
        <div className="flex items-center space-x-1 sm:space-x-2 py-2.5 overflow-x-auto no-scrollbar border-t border-slate-800/60">
          {navItems.map((item) => {
            const isActive = currentMode === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => onSelectMode(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] uppercase font-bold px-1.5 py-0.2 rounded-md ${
                      isActive
                        ? 'bg-slate-950/30 text-slate-900'
                        : 'bg-emerald-500/20 text-emerald-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
