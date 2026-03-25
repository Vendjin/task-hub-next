import type { TProgressFilter } from '@/shared/types'
import React from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui'

interface ILastTaskFilterProps {
	value: TProgressFilter
	onChange: (value: TProgressFilter) => void
	counters: Record<TProgressFilter, number>
}

export const LastTaskFilterOldLocaleState: React.FC<ILastTaskFilterProps> = ({ value, onChange, counters }) => {
	const filterOptions: { value: TProgressFilter; label: string; count: number }[] = [
		{ value: 'all', label: 'All', count: counters.all },
		{ value: 'in_progress', label: 'In Progress', count: counters.in_progress },
		{ value: 'done', label: 'Completed', count: counters.done },
		{ value: 'not_started', label: 'Not Started', count: counters.not_started }
	]

	return (
		<Select value={value} onValueChange={val => onChange(val as TProgressFilter)}>
			<SelectTrigger className='bg-block w-[185px]'>
				<SelectValue placeholder='Filter for Progress' />
			</SelectTrigger>
			<SelectContent>
				{filterOptions.map(option => (
					<SelectItem key={option.value} value={option.value}>
						<div className='flex w-48 items-center justify-between pr-2'>
							<span>{option.label}</span>
							<span className='bg-counter ml-2 rounded-full px-2 py-0.5 text-center text-xs'>
								{option.count}
							</span>
						</div>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
