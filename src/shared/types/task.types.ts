import { getServiceTasks } from '@/services'

import type { Database } from '@/shared/types/db.types'

export type TGetTasksResponse = NonNullable<Awaited<ReturnType<typeof getServiceTasks>>['data']>
export type TGetTodayTasksResponse = NonNullable<Awaited<ReturnType<typeof getServiceTasks>>['data']>

export type TSubTask = Database['public']['Tables']['sub_task']['Row']
export type TTask = Database['public']['Tables']['task']['Row'] & {
	sub_task: TSubTask[]
	// task_participants: TGetTasksResponse[0]['task_participants']
}

export type TTaskStatus = 'not-started' | 'in-progress' | 'completed'
export type TTaskSortBy = 'asc' | 'desc'

export type TTaskFormData = Database['public']['Tables']['task']['Update']
export type TSubTaskFormData = Database['public']['Tables']['sub_task']['Insert']
