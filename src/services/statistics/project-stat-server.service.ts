'use server'

import { createSupabaseServer } from '@/utils/supabase'

export async function getServerProjectStats() {
	const client = await createSupabaseServer()
	return client.from('project_stat').select('*')
}
