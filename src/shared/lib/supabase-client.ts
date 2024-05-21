import { createClient } from '@supabase/supabase-js';
import { appEnv } from '../config/app-env';

export const supabase = createClient(appEnv.VITE_SUPABASE_URL, appEnv.VITE_SUPABASE_KEY);
