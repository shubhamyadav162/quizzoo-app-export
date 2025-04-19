import { useState, useEffect } from 'react';
import { Question } from '../types';

export function useQuestions(category?: string) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        setLoading(true);
        
        // In a real app, you would fetch from Supabase
        // This is a placeholder that loads from local assets
        const data = require('../assets/questions/data/sample.json');
        
        // Filter by category if specified
        const filteredData = category 
          ? data.filter((q: Question) => q.category === category)
          : data;
        
        setQuestions(filteredData);
        setError(null);
      } catch (err) {
        console.error('Error fetching questions:', err);
        setError('Failed to load questions');
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [category]);

  return { questions, loading, error };
}