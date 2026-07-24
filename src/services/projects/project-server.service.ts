'use server'

import { createSupabaseServer } from '@/utils/supabase'

export async function getServerProjects() {
	const client = await createSupabaseServer()

	return client.from('project').select(`*`).order('created_at', {
		ascending: true
	})
}

export async function getServerProjectBySlug(slug: string) {
	const client = await createSupabaseServer()

	return client
		.from('project')
		.select(
			`
          *, 
          task(
             *, 
             sub_task(*), 
             task_participants(*, profile(*))
          ), 
          project_participants(profile(*))
       `
		)
		.eq('slug', slug)
		.single()
}
