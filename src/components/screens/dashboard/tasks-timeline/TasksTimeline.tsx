'use client'

import { useTasksStore } from '@/store'
import { getHours, getMinutes } from 'date-fns'
import React, { useMemo } from 'react'

import { TaskTimeline } from '@/components/screens/dashboard/tasks-timeline/TaskTimeline'
import { TimeLineHeader } from '@/components/screens/dashboard/tasks-timeline/TimeLineHeader'

interface ITasksTimelineProps {
	title?: string
}

export const TasksTimeline: React.FC<ITasksTimelineProps> = () => {
	const getTodayTasks = useTasksStore(state => state.getTodayTasks)
	const todayTasks = useMemo(() => getTodayTasks(), [getTodayTasks])
	console.log(todayTasks)

	const users = [...new Set(todayTasks?.map(task => task.assignees).flat())]

	return (
		<div className='bg-block rounded-xl p-5'>
			<TimeLineHeader users={users} />
			<div className='relative h-50'>
				{todayTasks?.map(task => {
					const start = getHours(task.dueDate.startTime ?? task.dueDate.date)
					const end = getHours(task.dueDate.endTime ?? task.dueDate.date)

					const startMinutes = getMinutes(task.dueDate.startTime ?? task.dueDate.date)
					const endMinutes = getMinutes(task.dueDate.endTime ?? task.dueDate.date)

					const startPercent = (((start - 9) * 60 + startMinutes) / ((17 - 9) * 60)) * 100
					const endPercent = (((end - 9) * 60 + endMinutes) / ((17 - 9) * 60)) * 100
					const widthPercent = endPercent - startPercent

					return (
						<div
							key={task.id}
							className='absolute top-3'
							style={{
								left: `${startPercent}%`,
								width: `${widthPercent}%`
							}}
						>
							<TaskTimeline task={task} />
						</div>
					)
				})}
			</div>
		</div>
	)
}
