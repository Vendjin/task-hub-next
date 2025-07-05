import { useMemo, useState } from 'react'
import type { ITaskCard, TProgressFilter, TSortedTasks } from '@/shared/types'

interface ITasksFilterSortOptions {
	tasks: ITaskCard[]
	filter: TProgressFilter
}

export const useTasksFilterSort = ({ tasks, filter }: ITasksFilterSortOptions) => {
	const [sortOrder, setSortOrder] = useState<TSortedTasks>('none')

	const filteredTasks = useMemo(() => {
		switch (filter) {
			case 'not_started':
				return tasks.filter(task => task.progress === 0)
			case 'in_progress':
				return tasks.filter(task => task.progress > 0 && task.progress < 100)
			case 'done':
				return tasks.filter(task => task.progress === 100)
			case 'all':
			default:
				return tasks
		}
	}, [filter, tasks])

	const countersTasks = useMemo(() => {
		const allTasks = tasks.length
		const notStarted = tasks.filter(task => task.progress <= 0).length
		const inProgress = tasks.filter(task => task.progress > 0 && task.progress < 100).length
		const done = tasks.filter(task => task.progress === 100).length

		return {
			all: allTasks,
			not_started: notStarted,
			in_progress: inProgress,
			done: done
		}
	}, [tasks])

	const sortedTasks = useMemo(() => {
		if (sortOrder === 'none') return filteredTasks
		return [...filteredTasks].sort((a, b) =>
			sortOrder === 'asc' ? a.dueInDays - b.dueInDays : b.dueInDays - a.dueInDays
		)
	}, [filteredTasks, sortOrder])

	const toggleSortOrder = () => {
		setSortOrder(prev => (prev === 'none' ? 'asc' : prev === 'asc' ? 'desc' : 'none'))
	}

	return { sortOrder, countersTasks, sortedTasks, toggleSortOrder }
}
