'use client'

import { currentHour, currentTimeLinePercent } from './current-time-line'
import { cn } from '@/utils'
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

	const HOURS = Array.from({ length: 9 }, (_, i) => i + 9)

	return (
		<div className='bg-block rounded-xl p-5'>
			<TimeLineHeader users={users} />

			<div className='w-full overflow-x-auto p-3'>
				<div className='grid grid-cols-9'>
					{HOURS.map(hour => (
						<div
							key={hour}
							className={cn(
								'text-left text-sm font-medium opacity-35',
								hour === currentHour ? 'text-primary opacity-80' : ''
							)}
						>
							{hour > 12 ? `${hour - 12} pm` : `${hour} am`}
						</div>
					))}
				</div>

				<div className='relative h-72'>
					<div
						className='bg-primary/50 absolute top-2 bottom-0 w-0.5'
						style={{ left: currentTimeLinePercent + '%' }}
					/>

					{tasks?.map(task => {
						return <TimelineCard task={task} key={task.id} />
					})}
				</div>
			</div>
		</div>
	)
}
