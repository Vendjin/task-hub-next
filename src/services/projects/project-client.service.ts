import { createSupabaseClient } from '@/utils/supabase'

export function getClientProjects() {
	const client = createSupabaseClient()

	return client.from('project').select('*').order('created_at', {
		ascending: true
	})
}
