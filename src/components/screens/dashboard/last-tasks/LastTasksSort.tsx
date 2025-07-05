import type { TSortedTasks } from '@/shared/types'
import { ArrowDown01, ArrowUp10, ArrowUpDown } from 'lucide-react'
import React from 'react'

interface ILastTasksSortProps {
	order: TSortedTasks
	toggleOrder: () => void
}

export const LastTasksSort: React.FC<ILastTasksSortProps> = ({ order, toggleOrder }) => {
	return (
		<div className='item-center bg-block border-primary flex rounded-lg p-1'>
			<button
				onClick={toggleOrder}
				aria-label='Сортировка по дедлайну'
				className='hover:text-primary-active text-xl text-neutral-400'
				type='button'
			>
				{order === 'none' && <ArrowUpDown />}
				{order === 'asc' && <ArrowUp10 />}
				{order === 'desc' && <ArrowDown01 />}
			</button>
		</div>
	)
}
