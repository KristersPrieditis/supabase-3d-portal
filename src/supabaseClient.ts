import { createClient } from '@supabase/supabase-js'

// Read the values from your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create a single reusable Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)