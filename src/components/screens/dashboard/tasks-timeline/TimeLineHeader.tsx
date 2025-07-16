import { Tooltip, TooltipContent, TooltipTrigger } from '@/components'
import type { IAssignee } from '@/shared/types'
import { cn } from '@/utils'
import Image from 'next/image'
import React from 'react'

interface ITimeLineHeaderProps {
	users: IAssignee[]
}

export const TimeLineHeader: React.FC<ITimeLineHeaderProps> = ({ users }) => {
	const HOURS = Array.from({ length: 9 }, (_, i) => i + 9)

	return (
		<>
			<div className='mb-3 flex items-center justify-between'>
				<h2 className='text-xl font-medium'>Today tasks</h2>
				<div className='item-center flex'>
					{users.slice(0, 3).map((user, index) => (
						<div
							key={user.id}
							className={cn('relative', index !== 0 && '-ml-3')}
							style={{ zIndex: 10 - index }}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<Image
										src={user.avatarPath}
										alt={user.name}
										width={40}
										height={40}
										className='rounded-full border-2 border-white bg-gray-300'
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>{user.name}</p>
								</TooltipContent>
							</Tooltip>
						</div>
					))}

					{users.length > 3 && (
						<div className='relative z-0 -ml-3'>
							<div className='bg-counter flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-sm font-medium'>
								+{users.length - 3}
							</div>
						</div>
					)}
				</div>
			</div>

			<div className='w-full overflow-x-auto p-3'>
				<div className='grid grid-cols-9'>
					{HOURS.map(hour => (
						<div key={hour} className='text-left text-sm font-medium opacity-50'>
							{hour > 12 ? `${hour - 12} pm` : `${hour} am`}
						</div>
					))}
				</div>
			</div>
		</>
	)
}
