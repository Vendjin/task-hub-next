'use client'

import { parseTime } from '@/utils'
import { getHours, getMinutes } from 'date-fns'
import React from 'react'

import { TimeLineHeader } from '@/components/screens/dashboard/tasks-timeline/TimeLineHeader'
import { TimelineCard } from '@/components/screens/dashboard/tasks-timeline/TimelineCard'

import type { TGetTodayTasksResponse } from '@/shared/types/task.types'

interface ITasksTimelineProps {
	title?: string
	tasks: TGetTodayTasksResponse
}

export const TasksTimeline: React.FC<ITasksTimelineProps> = ({ tasks }) => {
	const users = [
		...new Map(
			tasks
				?.flatMap(task => task.task_participants)
				.filter(user => Boolean(user.profile))
				.map(user => [user.profile.id, user.profile])
		).values()
	]

	return (
		<div className='bg-block rounded-xl p-5'>
			<TimeLineHeader users={users} />
			<div className='relative h-72'>
				{tasks?.map(task => {
					if (!task.start_time || !task.end_time) return null

					const correctStartTime = parseTime(task.due_date, task.start_time)
					const correctEndTime = parseTime(task.due_date, task.end_time)

					const start = getHours(correctStartTime)
					const end = getHours(correctEndTime)

					const startMinutes = getMinutes(correctStartTime)
					const endMinutes = getMinutes(correctEndTime)

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
							<TimelineCard task={task} />
						</div>
					)
				})}
			</div>
		</div>
	)
}
