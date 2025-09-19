'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components'
import { useTasksFilterSort } from '@/hooks'
import type { TProgressFilter } from '@/shared/types'
import { useTasksStore } from '@/store'
import React, { useState } from 'react'

import { LastTaskCard } from '@/components/screens/dashboard/last-tasks/LastTaskCard'
import { LastTasksHeader } from '@/components/screens/dashboard/last-tasks/LastTasksHeader'

import type { TGetTasksResponse } from '@/shared/types/task.types'

interface ILastTasksProps {
	title?: string
	tasks: TGetTasksResponse
}

export const LastTasks: React.FC<ILastTasksProps> = ({ tasks }) => {
	const [filter, setFilter] = useState<TProgressFilter>('all')
	console.log(tasks)

	const lastTasks = useTasksStore(state => state.tasks)

	const { sortOrder, sortedTasks, countersTasks, toggleSortOrder } = useTasksFilterSort({
		tasks: lastTasks ?? [],
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
				<Carousel
					opts={{
						align: 'start',
						slidesToScroll: 1
					}}
					className='relative w-full'
				>
					<CarouselContent>
						{sortedTasks.map(taskCard => (
							<CarouselItem key={taskCard.id} className='basis-1/3'>
								<LastTaskCard taskCard={taskCard} />
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious className='bg-block/60 hover:bg-block absolute top-1/2 left-1 z-10 -translate-y-1/2 rounded-full shadow-md backdrop-blur-xs transition hover:scale-105 dark:backdrop-blur-md' />

					<CarouselNext className='bg-block/40 hover:bg-block absolute top-1/2 right-1 z-10 -translate-y-1/2 rounded-full shadow-md backdrop-blur-xs transition hover:scale-105 dark:backdrop-blur-md' />
				</Carousel>
			) : (
				<div className='flex justify-center text-2xl font-bold text-neutral-400'>Not available tasks</div>
			)}
		</div>
	)
}
