import { Tooltip, TooltipContent, TooltipTrigger } from '@/components'
import { ICONS } from '@/shared/data'
import type { ITaskCard } from '@/shared/types'
import { cn } from '@/utils'
import { format } from 'date-fns'
import Image from 'next/image'
import React from 'react'

interface ITaskTimelineProps {
	task: ITaskCard
}

export const TaskTimeline: React.FC<ITaskTimelineProps> = ({ task }) => {
	const icon = ICONS[task.icon].value

	const timeRange =
		task.dueDate.startTime && task.dueDate.endTime
			? `${format(task.dueDate.startTime, 'h:mm a')} - ${format(task.dueDate.endTime, 'h:mm a')}`
			: ''

	return (
		<div className={cn('border-block bg-counter rounded-xl p-5', task.color)}>
			<div className='flex items-center justify-start gap-3'>
				<div className='text-primary flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 p-2 dark:bg-neutral-200'>
					{icon}
				</div>
				<div>
					<div className=''>
						<h3 className='font-medium text-neutral-50 dark:text-neutral-600'>{task.title}</h3>
						<span className='text-sm text-neutral-50 dark:text-neutral-600'>{timeRange}</span>
					</div>
				</div>
			</div>

			<div className='mt-3 flex'>
				{task.assignees.map((assignee, index) => (
					<div key={assignee.id} className={`relative ${index !== 0 ? '-ml-3' : ''} z-${index}`}>
						<Tooltip>
							<TooltipTrigger asChild>
								<Image
									src={assignee.avatarPath}
									alt={assignee.name}
									width={35}
									height={35}
									className='rounded-full border-2 border-white bg-gray-300'
								/>
							</TooltipTrigger>
							<TooltipContent>
								<p>{assignee.name}</p>
							</TooltipContent>
						</Tooltip>
					</div>
				))}
			</div>
		</div>
	)
}
