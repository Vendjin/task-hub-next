'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components'
import { useTasksFilterSort } from '@/hooks'
import type { TProgressFilter } from '@/shared/types'
import { useTasksStore } from '@/store'
import React, { useState } from 'react'

import { LastTaskCard } from '@/components/screens/dashboard/last-tasks/LastTaskCard'
import { LastTasksHeader } from '@/components/screens/dashboard/last-tasks/LastTasksHeader'

interface ILastTasksProps {
	title?: string
}

export const LastTasks: React.FC<ILastTasksProps> = () => {
	const [filter, setFilter] = useState<TProgressFilter>('all')
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

					<CarouselPrevious className='absolute top-1/2 left-1 z-10 -translate-y-1/2 rounded-full bg-white/60 shadow-md backdrop-blur-xs transition hover:scale-105 hover:bg-white dark:backdrop-blur-md' />

					<CarouselNext className='absolute top-1/2 right-1 z-10 -translate-y-1/2 rounded-full bg-white/40 shadow-md backdrop-blur-xs transition hover:scale-105 hover:bg-white dark:backdrop-blur-md' />
				</Carousel>
			) : (
				<div className='flex justify-center text-2xl font-bold text-neutral-400'>Not available tasks</div>
			)}
		</div>
	)
}
