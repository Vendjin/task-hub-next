import { ICONS } from '@/shared/data'
import type { ITaskCard } from '@/shared/types'
import Image from 'next/image'
import React, { useMemo } from 'react'

interface ILastTaskCardHeaderProps {
	taskCard: ITaskCard
}

export const LastTaskCardHeader: React.FC<ILastTaskCardHeaderProps> = ({ taskCard }) => {
	const deadLine = useMemo(() => {
		return Math.ceil((taskCard.dueInDays - Date.now()) / (24 * 60 * 60 * 1000))
	}, [taskCard.dueInDays])

	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<div className='text-primary flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 p-2 dark:bg-violet-200'>
					{ICONS[taskCard.icon].value}
				</div>
				<div>
					<h3 className='font-medium'>{taskCard.title}</h3>
					<span className='text-sm text-neutral-400 dark:text-neutral-500'>
						Due: {deadLine > 0 ? deadLine : 0} day{deadLine !== 1 ? 's' : ''}
					</span>
				</div>
			</div>

			<div className='flex'>
				{taskCard.assignees.map((assignee, index) => (
					<div key={assignee.name} className={`relative ${index !== 0 ? '-ml-3' : ''} z-${index}`}>
						<Image
							src={assignee.avatar}
							alt={assignee.name}
							width={40}
							height={40}
							className='rounded-full border-2 border-white bg-gray-300'
						/>
					</div>
				))}
			</div>
		</div>
	)
}
