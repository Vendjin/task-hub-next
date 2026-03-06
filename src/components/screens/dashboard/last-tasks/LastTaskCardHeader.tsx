import { Tooltip, TooltipContent, TooltipTrigger } from '@/components'
import { ICONS } from '@/shared/data'
import type { TTask } from '@/shared/types'
import { cn } from '@/utils'
import { differenceInCalendarDays, parseISO } from 'date-fns'
import Image from 'next/image'
import React, { useMemo } from 'react'

interface ILastTaskCardHeaderProps {
	task: TTask
}

export const LastTaskCardHeader: React.FC<ILastTaskCardHeaderProps> = ({ task }) => {
	const deadLine = useMemo(() => {
		return differenceInCalendarDays(parseISO(task.due_date), new Date())
	}, [task.due_date])

	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<div className='text-primary flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 p-2 dark:bg-violet-200'>
					{ICONS[task.icon!].value}
				</div>
				<div>
					<h3 className='font-medium'>{task.title}</h3>
					<span
						className={cn(
							'text-sm',
							deadLine < 0 ? 'text-destructive font-medium' : 'text-neutral-400 dark:text-neutral-500'
						)}
					>
						{deadLine === 0 && 'Due: Today'}
						{deadLine < 0 && `Expired: ${Math.abs(deadLine)}d ago`}
						{deadLine > 0 && `${deadLine} day${deadLine !== 1 ? 's' : ''}`}
					</span>
				</div>
			</div>

			<div className='flex'>
				{task.task_participants
					.filter(u => Boolean(u.profile))
					.map(({ profile }, index) => (
						<div key={profile.id} className={`relative ${index !== 0 ? '-ml-3' : ''} z-${index}`}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Image
										src={profile.avatar_path!.trim() || ''}
										alt={profile.name!.trim() || ''}
										width={40}
										height={40}
										className='rounded-full border-2 border-white bg-gray-300'
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>{profile.name}</p>
								</TooltipContent>
							</Tooltip>
						</div>
					))}
			</div>
		</div>
	)
}
