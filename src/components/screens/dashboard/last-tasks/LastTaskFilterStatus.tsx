import React from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui'

import type { TTaskStatus } from '@/shared/types/task.types'

const statuses: Array<TTaskStatus | 'all'> = ['all', 'not-started', 'in-progress', 'completed']

const statusLabels: Record<TTaskStatus | 'all', string> = {
	all: 'All statuses',
	'not-started': 'Not Started',
	'in-progress': 'In Progress',
	completed: 'Completed'
}

interface ILastTaskFilterProps {
	status: TTaskStatus | undefined
	setStatus: (status: TTaskStatus | undefined) => void
}

export const LastTaskFilterStatus: React.FC<ILastTaskFilterProps> = ({ status, setStatus }) => {
	return (
		<Select
			value={status || 'all'}
			onValueChange={val => setStatus(val === 'all' ? undefined : (val as TTaskStatus))}
		>
			<SelectTrigger className='bg-block w-[185px] cursor-pointer'>
				<SelectValue placeholder={statusLabels.all} />
			</SelectTrigger>
			<SelectContent>
				{statuses.map(option => (
					<SelectItem key={option} value={option}>
						<div className='flex w-48 items-center justify-between pr-2'>
							<span>{statusLabels[option]}</span>
						</div>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
