export interface User {
  id: string;
  email: string;
  username?: string;
  avatarUrl?: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export interface GameResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
}

export interface Wallet {
  balance: number;
  currency: string;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'reward';
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
}