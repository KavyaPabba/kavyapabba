// src/integrations/supabaseClient.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

// Whether Supabase credentials are present. Callers should check this (or that
// `supabase` is non-null) before using the client, so a missing env var only
// disables the contact form instead of crashing the whole site.
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!isSupabaseConfigured) {
    // eslint-disable-next-line no-console
    console.warn(
        'Supabase is not configured (missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY). ' +
        'The contact form will show an error instead of submitting until these are set.'
    )
}

export const supabase: SupabaseClient | null = isSupabaseConfigured
    ? createClient(supabaseUrl as string, supabaseAnonKey as string)
    : null