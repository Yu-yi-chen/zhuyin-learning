-- Migration: 001_user_progress
-- Creates user_progress table for persisting learning state per user

CREATE TABLE IF NOT EXISTS user_progress (
  user_id          UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  completed_symbols JSONB       NOT NULL DEFAULT '[]',
  points           INTEGER     NOT NULL DEFAULT 0,
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Row Level Security: users can only access their own row
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_own_progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "insert_own_progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "update_own_progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);
