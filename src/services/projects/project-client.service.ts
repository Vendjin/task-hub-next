import { createSupabaseClient } from '@/utils/supabase'

export async function getClientProjects() {
	const client = createSupabaseClient()

	const { data, error } = await client.from('project').select('*').order('created_at', {
		ascending: true
	})

	if (error || !data) throw new Error(error?.message || 'Failed to fetch projects')

	return data
}
