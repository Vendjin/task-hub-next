import { createBrowserClient } from '@supabase/ssr'

import type { Database } from '@/shared/types/database.types'

export function createSupabaseClient() {
	return createBrowserClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	)
}
