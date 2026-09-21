export type AppMode = 'swaps' | 'body' | 'arcade' | 'recipes' | 'coach';

export interface NutritionalFact {
  label: string;
  badValue: string;
  goodValue: string;
  improvement: string;
  isBetter: boolean;
}

export interface FoodSwap {
  id: string;
  title: string;
  category: 'burgers' | 'snacks' | 'bebidas' | 'dulces' | 'frituras';
  categoryLabel: string;
  badFood: {
    name: string;
    description: string;
    caloriesApprox: number;
    saturatedFatG: number;
    sugarG: number;
    energyDuration: string; // e.g., "Pico de 30 min y caída en picada"
    healthDownside: string;
    skinImpact: 'Alto riesgo acné/inflamación' | 'Moderado' | 'Muy alto';
    dopamineTrap: string;
  };
  goodFood: {
    name: string;
    description: string;
    caloriesApprox: number;
    saturatedFatG: number;
    sugarG: number;
    energyDuration: string; // e.g., "Energía estable 4-5 horas"
    healthAdvantage: string;
    skinImpact: 'Amigable con la piel' | 'Antioxidante protector' | 'Neutral';
    prepTimeMinutes: number;
    costLevel: '$' | '$$' | '$$$';
    ingredients: string[];
    quickSteps: string[];
  };
  keyReason: string;
  teenHack: string;
}

export interface QuizOption {
  id: string;
  text: string;
  isBestChoice: boolean;
  explanation: string;
  energyChange: number; // e.g. -20, +25
  skinChange: number; // e.g. -15, +20
  pocketMoneySaved: string;
}

export interface QuizScenario {
  id: string;
  title: string;
  context: string;
  situationPrompt: string;
  imageIcon: string;
  options: QuizOption[];
  proTip: string;
}

export interface UserStats {
  score: number;
  completedScenarios: string[];
  swapsExplored: string[];
  favoriteRecipes: string[];
  level: number;
  streakDays: number;
  badges: string[];
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  replacesFood: string;
  prepTimeMinutes: number;
  category: 'salado' | 'dulce' | 'bebida' | 'comida-rapida';
  ingredients: string[];
  instructions: string[];
  teenScore: number; // out of 10
  nutritionalHighlight: string;
  tags: string[];
}
