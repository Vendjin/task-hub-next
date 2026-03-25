'use client'

import { createSupabaseClient } from '@/utils/supabase'

import type { Database } from '@/shared/types/db.types'
import type { TTask, TTaskSortBy, TTaskStatus } from '@/shared/types/task.types'

export async function taskClientGetById(id: string) {
	const client = createSupabaseClient()

	const { data, error } = await client.from('task').select(`*, sub_task(*)`).eq('id', id).single()

	if (error || !data) throw new Error(error.message || 'Task not found')

	return data
}

export async function taskClientUpdate(id: string, task: Database['public']['Tables']['task']['Update']) {
	const client = createSupabaseClient()

	const { data, error } = await client.from('task').update(task).eq('id', id).select(`*, sub_task(*)`).single()

	if (error || !data) throw new Error(error.message || 'Failed to update task')

	return data
}

export async function taskClientCreate(task: Database['public']['Tables']['task']['Insert']) {
	const client = createSupabaseClient()

	const { data, error } = await client.from('task').insert(task).select(`*, sub_task(*)`).single()

	if (error || !data) throw new Error(error.message || 'Failed to create task')

	return data
}

export async function taskClientDelete(id: string) {
	const client = createSupabaseClient()

	const { data, error } = await client.from('task').delete().eq('id', id).select(`*, sub_task(*)`).single()

	if (error || !data) throw new Error(error.message || 'Failed to delete task')

	return data
}

export async function createClientSubTask(taskId: string, subTask: Database['public']['Tables']['sub_task']['Insert']) {
	const client = createSupabaseClient()

	const { data, error } = await client
		.from('sub_task')
		.insert({ ...subTask, task_id: taskId })
		.select(`*`)
		.single()

	if (error || !data) throw new Error(error.message || 'Failed to create sub-task')

	return data
}

function filterTasks(tasks: TTask[], status: TTaskStatus) {
	return tasks.filter(task => {
		switch (status) {
			case 'not-started':
				return task.sub_task.every(subTask => !subTask.is_completed)

			case 'in-progress':
				return task.sub_task.some(subTask => subTask.is_completed)

			case 'completed':
				return task.sub_task.every(subTask => subTask.is_completed)

			default:
				return true
		}
	})
}

export async function getClientTasks({ status, sortByDueDate }: { status?: TTaskStatus; sortByDueDate?: TTaskSortBy }) {
	const client = createSupabaseClient()

	let query = client.from('task').select('*, sub_task(*), task_participants(profile(*))')

	if (sortByDueDate) {
		query = query.order('due_date', {
			ascending: sortByDueDate === 'asc'
		})
	}

	const { data, error } = await query

	if (error || !data) throw new Error(error.message || 'Failed to get tasks')

	if (status) return filterTasks(data, status)

	return data
}
