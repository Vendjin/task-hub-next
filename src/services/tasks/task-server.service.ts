'use server'

import { createSupabaseServer } from '@/utils/supabase'

import type { Database } from '@/shared/types/db.types'

export async function getServiceTasks() {
	const client = await createSupabaseServer()

	return client.from('task').select(`*, sub_task(*)`)
}

export async function taskServerGetById(id: string) {
	const client = await createSupabaseServer()

	return client.from('task').select(`*, subtask(*)`).eq('id', id).single()
}

export async function taskServerUpdate(id: string, task: Database['public']['Tables']['task']['Update']) {
	const client = await createSupabaseServer()

	return client.from('task').update(task).eq('id', id).select(`*, subtask(*)`).single()
}

export async function taskServerCreate(task: Database['public']['Tables']['task']['Insert']) {
	const client = await createSupabaseServer()

	return client.from('task').insert(task).select(`*, subtask(*)`).single()
}

export async function taskServerDelete(id: string) {
	const client = await createSupabaseServer()

	return client.from('task').delete().eq('id', id).select(`*, subtask(*)`).single()
}

export async function createSubTask(taskId: string, subTask: Database['public']['Tables']['sub_task']['Insert']) {
	const client = await createSupabaseServer()

	return client
		.from('sub_task')
		.insert({ ...subTask, task_id: taskId })
		.select(`*`)
		.single()
}

export async function getTodayTasks() {
	const client = await createSupabaseServer()

	return client.from('task').select(`*, subtask(*)`).eq('due_date', new Date().toISOString().split('T')[0])
}
