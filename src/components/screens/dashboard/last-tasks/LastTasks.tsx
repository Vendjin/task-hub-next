'use client'

import { useTasksFilterSort } from '@/hooks'
import { LAST_TASKS_DATA } from '@/shared/data'
import type { TProgressFilter } from '@/shared/types'
import React, { useState } from 'react'

import { LastTaskCard } from '@/components/screens/dashboard/last-tasks/LastTaskCard'
import { LastTasksHeader } from '@/components/screens/dashboard/last-tasks/LastTasksHeader'

interface ILastTasksProps {
	title?: string
}

export const LastTasks: React.FC<ILastTasksProps> = () => {
	const [filter, setFilter] = useState<TProgressFilter>('all')

	const { sortOrder, sortedTasks, countersTasks, toggleSortOrder } = useTasksFilterSort({
		tasks: LAST_TASKS_DATA,
		filter
	})

	const countTasks = sortedTasks.length

	return (
		<div className='mt-2 flex w-full flex-col gap-2'>
			<LastTasksHeader
				countTask={countTasks}
				valueFilter={filter}
				onChangeFilter={setFilter}
				counters={countersTasks}
				sort={sortOrder}
				toggleSort={toggleSortOrder}
			/>

			{countTasks ? (
				<div className='grid grid-cols-3 gap-4'>
					{sortedTasks.map(taskCard => (
						<LastTaskCard taskCard={taskCard} key={taskCard.id} />
					))}
				</div>
			) : (
				<div className='flex justify-center text-2xl font-bold text-neutral-400'>Not available tasks</div>
			)}
		</div>
	)
}
