import { createClient } from '@supabase/supabase-js';
import { config } from '../config/env';

if (!config.isSupabaseConfigured()) {
  console.warn('Supabase configuration is missing. Please check your environment variables.');
}

export const supabase = createClient(
  config.supabase.url,
  config.supabase.anonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  }
);