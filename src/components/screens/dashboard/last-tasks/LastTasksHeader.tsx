import type { TProgressFilter, TSortedTasks } from '@/shared/types'
import React from 'react'

import { LastTaskFilter } from '@/components/screens/dashboard/last-tasks/LastTaskFilter'
import { LastTasksSort } from '@/components/screens/dashboard/last-tasks/LastTasksSort'

interface ILastTasksTitleProps {
	countTask: number
	valueFilter: TProgressFilter
	onChangeFilter: (value: TProgressFilter) => void
	counters: Record<TProgressFilter, number>
	sort: TSortedTasks
	toggleSort: () => void
}

export const LastTasksHeader: React.FC<ILastTasksTitleProps> = ({
	countTask,
	valueFilter,
	onChangeFilter,
	counters,
	sort,
	toggleSort
}) => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<h2 className='text-2xl font-medium'>Last Tasks</h2>
				{countTask > 0 && (
					<span className='font-medium text-neutral-400 dark:text-neutral-500'>{`(${countTask})`}</span>
				)}
			</div>

			<div className='flex items-center gap-2'>
				<LastTaskFilter value={valueFilter} onChange={onChangeFilter} counters={counters} />
				<LastTasksSort order={sort} toggleOrder={toggleSort} />
			</div>
		</div>
	)
}
