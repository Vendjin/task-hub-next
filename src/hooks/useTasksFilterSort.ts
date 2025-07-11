import { getTaskProgressService } from '@/services'
import type { ITaskCard, TProgressFilter, TSortedTasks } from '@/shared/types'
import { useMemo, useState } from 'react'

interface ITasksFilterSortOptions {
	tasks: ITaskCard[]
	filter: TProgressFilter
}

export const useTasksFilterSort = ({ tasks, filter }: ITasksFilterSortOptions) => {
	const [sortOrder, setSortOrder] = useState<TSortedTasks>('none')

	const tasksWithProgress = useMemo(
		() =>
			tasks.map(task => ({
				...task,
				progress: getTaskProgressService(task.subTasks)
			})),
		[tasks]
	)

	const filteredTasks = useMemo(() => {
		switch (filter) {
			case 'not_started':
				return tasksWithProgress.filter(task => task.progress === 0)
			case 'in_progress':
				return tasksWithProgress.filter(task => task.progress > 0 && task.progress < 100)
			case 'done':
				return tasksWithProgress.filter(task => task.progress === 100)
			case 'all':
			default:
				return tasksWithProgress
		}
	}, [filter, tasksWithProgress])

	const countersTasks = useMemo(() => {
		const allTasks = tasks.length
		const notStarted = tasksWithProgress.filter(task => task.progress <= 0).length
		const inProgress = tasksWithProgress.filter(task => task.progress > 0 && task.progress < 100).length
		const done = tasksWithProgress.filter(task => task.progress === 100).length

		return {
			all: allTasks,
			not_started: notStarted,
			in_progress: inProgress,
			done: done
		}
	}, [tasksWithProgress, tasks])

	const sortedTasks = useMemo(() => {
		if (sortOrder === 'none') return filteredTasks
		return [...filteredTasks].sort((a, b) => (sortOrder === 'asc' ? a.dueDate - b.dueDate : b.dueDate - a.dueDate))
	}, [filteredTasks, sortOrder])

	const toggleSortOrder = () => {
		setSortOrder(prev => (prev === 'none' ? 'asc' : prev === 'asc' ? 'desc' : 'none'))
	}

	return { sortOrder, countersTasks, sortedTasks, toggleSortOrder }
}
