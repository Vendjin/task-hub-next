import type { ISubtask } from '@/shared/types'

export const getTaskProgressService = (subTasks: ISubtask[]): number => {
	const totalSubTasks = subTasks.length
	const completedSubTasks = subTasks.filter(task => task.isComplete).length
	return totalSubTasks > 0 ? Math.round((completedSubTasks / totalSubTasks) * 100) : 0
}
