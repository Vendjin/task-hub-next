import React from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui'

import type { TTaskStatus } from '@/shared/types/task.types'

const statuses: Array<TTaskStatus | 'all'> = ['all', 'not-started', 'in-progress', 'completed']

interface ILastTaskFilterProps {
	status: TTaskStatus | undefined
	setStatus: (status: TTaskStatus | undefined) => void
}

export const LastTaskFilter: React.FC<ILastTaskFilterProps> = ({ status, setStatus }) => {
	return (
		<Select value={status} onValueChange={val => setStatus(val as TTaskStatus)}>
			<SelectTrigger className='bg-block w-[185px]'>
				<SelectValue placeholder='Filter for Progress' />
			</SelectTrigger>
			<SelectContent>
				{statuses.map(option => (
					<SelectItem key={option} value={option}>
						<div className='flex w-48 items-center justify-between pr-2'>
							<span>{option}</span>
						</div>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
