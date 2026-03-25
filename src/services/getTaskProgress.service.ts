import type { TSubTask } from '@/shared/types/task.types'

export const getTaskProgressService = (subTasks: TSubTask[]): number => {
	const totalSubTasks = subTasks?.length
	const completedSubTasks = subTasks?.filter(task => task.is_completed).length

	return totalSubTasks > 0 ? Math.round((completedSubTasks / totalSubTasks) * 100) : 0
}
