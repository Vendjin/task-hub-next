import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components'
import type { TTask } from '@/shared/types'
import type { FC } from 'react'

import { LastTaskCard } from '@/components/screens/dashboard/last-tasks/LastTaskCard'
import { SkeletonLoader } from '@/components/ui/SkeletonLoader'

interface ITaskListProps {
	isPending?: boolean
	tasks: TTask[] | undefined
	countTasks: number
}

export const TaskList: FC<ITaskListProps> = ({ tasks, isPending, countTasks }) => {
	return isPending ? (
		<div className='grid grid-cols-3 gap-4'>
			<SkeletonLoader count={3} className='bg-block h-[120px]' />
		</div>
	) : countTasks ? (
		<Carousel
			opts={{
				align: 'start',
				slidesToScroll: 1
			}}
			className='relative w-full'
		>
			<CarouselContent>
				{tasks?.map(taskCard => (
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
	)
}
