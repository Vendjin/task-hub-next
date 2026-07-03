'use server'

import { createSupabaseServer } from '@/utils/supabase'

export async function getServerProjects() {
	const client = await createSupabaseServer()

	return client.from('project').select(`*, task(*), task_participants(profile(*))`).order('created_at', {
		ascending: true
	})
}

export async function getServerProjectBy() {}
