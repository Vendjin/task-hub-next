'use client'

import { useTasksStore } from '@/store'
import React, { useMemo } from 'react'

import { TimeLineHeader } from '@/components/screens/dashboard/tasks-timeline/TimeLineHeader'

interface ITasksTimelineProps {
	title?: string
}

const HOURS = Array.from({ length: 9 }, (_, i) => i + 1)

export const TasksTimeline: React.FC<ITasksTimelineProps> = ({ title }) => {
	const getTodayTasks = useTasksStore(state => state.getTodayTasks)
	const todayTasks = useMemo(() => getTodayTasks(), [getTodayTasks])

	const users = [...new Set(todayTasks?.map(task => task.assignees).flat())]

	return (
		<div className='bg-block rounded-xl p-3'>
			<TimeLineHeader users={users} />
		</div>
	)
}
