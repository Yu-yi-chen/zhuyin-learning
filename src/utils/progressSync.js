import { supabase } from '../lib/supabase';

export async function loadProgress(userId) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('completed_symbols, points')
    .eq('user_id', userId)
    .single();

  // PGRST116 = no rows found (first-time user) — not an error
  if (error && error.code !== 'PGRST116') throw error;

  return {
    completed_symbols: data?.completed_symbols ?? [],
    points: data?.points ?? 0,
  };
}

export async function saveProgress(userId, { completedSymbols, points }) {
  const { error } = await supabase
    .from('user_progress')
    .upsert({
      user_id: userId,
      completed_symbols: [...completedSymbols],
      points,
      updated_at: new Date().toISOString(),
    });

  if (error) throw error;
}
