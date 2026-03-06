'use server'

import { createSupabaseServer } from '@/utils/supabase'

export async function getServiceTasks() {
	const client = await createSupabaseServer()

	return client.from('task').select(`*, sub_task(*), task_participants(profile(*))`).order('due_date', {
		ascending: true
	})
}

export async function getTodayTasks() {
	const client = await createSupabaseServer()

	return client
		.from('task')
		.select(`*, sub_task(*), task_participants(profile(*))`)
		.eq('due_date', new Date().toISOString().split('T')[0])
}
