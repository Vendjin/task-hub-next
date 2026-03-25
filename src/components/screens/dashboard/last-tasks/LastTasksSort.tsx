import { ArrowDown01, ArrowUp10 } from 'lucide-react'
import React from 'react'

import type { TTaskSortBy } from '@/shared/types/task.types'

interface ILastTasksSortProps {
	sort: TTaskSortBy
	setSort: (sort: TTaskSortBy) => void
}

export const LastTasksSort: React.FC<ILastTasksSortProps> = ({ sort, setSort }) => {
	return (
		<div className='item-center bg-block flex rounded-lg border p-1'>
			<button
				onClick={() => setSort(sort === 'asc' ? 'desc' : 'asc')}
				aria-label='Сортировка по дедлайну'
				className='hover:text-primary-active text-xl text-neutral-400'
				type='button'
			>
				{sort === 'asc' && <ArrowUp10 />}
				{sort === 'desc' && <ArrowDown01 />}
			</button>
		</div>
	)
}
