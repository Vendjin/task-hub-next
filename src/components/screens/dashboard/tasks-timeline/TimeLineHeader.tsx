import { Tooltip, TooltipContent, TooltipTrigger } from '@/components'
import type { TUserProfile } from '@/shared/types'
import { cn } from '@/utils'
import Image from 'next/image'
import React from 'react'

interface ITimeLineHeaderProps {
	users: TUserProfile[]
}

export const TimeLineHeader: React.FC<ITimeLineHeaderProps> = ({ users }) => {
	return (
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
									src={user.avatar_path!.trim()}
									alt={user.name!.trim()}
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
	)
}
