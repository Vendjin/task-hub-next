import { Tooltip, TooltipContent, TooltipTrigger } from '@/components'
import { ICONS } from '@/shared/data'
import type { TTask } from '@/shared/types'
import { cn } from '@/utils'
import { format } from 'date-fns'
import { parse } from 'date-fns/parse'
import Image from 'next/image'
import React from 'react'

interface ITaskTimelineProps {
	task: TTask
}

export const TimelineCard: React.FC<ITaskTimelineProps> = ({ task }) => {
	const icon = ICONS[task.icon!].value

	const formatTaskTime = (timeStr: string) => {
		const date = parse(timeStr, 'HH:mm:ss', new Date())
		return format(date, 'h:mm a')
	}

	const timeRange =
		task.start_time && task.end_time ? `${formatTaskTime(task.start_time)} - ${formatTaskTime(task.end_time)}` : ''

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
				{task.task_participants.map((assignee, index) => (
					<div
						key={assignee.profile.id}
						className={cn('relative', index !== 0 && '-ml-3')}
						style={{ zIndex: 10 - index }}
					>
						<Tooltip>
							<TooltipTrigger asChild>
								<Image
									src={assignee.profile.avatar_path!.trim()}
									alt={assignee.profile.name!.trim()}
									width={35}
									height={35}
									className='rounded-full border-2 border-white bg-gray-300'
								/>
							</TooltipTrigger>
							<TooltipContent>
								<p>{assignee.profile.name}</p>
							</TooltipContent>
						</Tooltip>
					</div>
				))}
			</div>
		</div>
	)
}
