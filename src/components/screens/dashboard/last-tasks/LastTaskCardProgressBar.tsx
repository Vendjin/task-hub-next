import cn from 'clsx'
import { CircleCheck } from 'lucide-react'
import React from 'react'

interface ILastTaskProgressBarProps {
	progress: number
}

export const LastTaskCardProgressBar: React.FC<ILastTaskProgressBarProps> = ({ progress }) => {
	const getColor = (value: number) => {
		if (value === 100) return 'bg-teal-400'
		if (value <= 53) return 'bg-primary-active'
		if (value > 53) return 'bg-yellow-500'
	}

	return (
		<div className='h-10 w-full rounded-full bg-violet-100 dark:bg-violet-200'>
			<div
				className={cn('striped-bg relative h-full rounded-full', getColor(progress))}
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
