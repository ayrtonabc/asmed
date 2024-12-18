// Environment configuration
export const config = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || '',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  },
  isSupabaseConfigured: () => {
    return Boolean(config.supabase.url && config.supabase.anonKey);
  }
};