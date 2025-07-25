import { getTaskProgressService } from '@/services'
import type { ISubtask } from '@/shared/types'
import cn from 'clsx'
import { CircleCheck } from 'lucide-react'
import React from 'react'

interface ILastTaskProgressBarProps {
	subTasks: ISubtask[]
}

export const LastTaskCardProgressBar: React.FC<ILastTaskProgressBarProps> = ({ subTasks }) => {
	const progress = getTaskProgressService(subTasks)

	const getColor = (value: number) => {
		if (value === 100) return 'bg-teal-400 dark:bg-teal-400/80'
		if (value <= 53) return 'bg-primary-active dark:bg-primary-active/80'
		if (value > 53) return 'bg-yellow-500 dark:bg-yellow-500/80'
		if (value === 0) return 'bg-teal-400 dark:bg-teal-400/80'
	}

	return (
		<div className='h-10 w-full rounded-full bg-violet-100 dark:bg-violet-200/90'>
			<div
				className={cn(
					'striped-bg animate-stripes relative h-full cursor-default rounded-full transition-all duration-300',
					getColor(progress)
				)}
				style={{ width: `${progress}%` }}
			>
				<span className='absolute inset-0 flex items-center justify-center font-semibold text-neutral-200'>
					{progress === 100 ? (
						<span className='flex items-center justify-center gap-2'>
							<CircleCheck /> Done
						</span>
					) : progress === 0 ? null : (
						<span>{`${progress}%`}</span>
					)}
				</span>
			</div>
		</div>
	)
}
