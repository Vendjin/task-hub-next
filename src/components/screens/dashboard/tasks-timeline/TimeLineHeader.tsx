import { Tooltip, TooltipContent, TooltipTrigger } from '@/components'
import type { IAssignee } from '@/shared/types'
import Image from 'next/image'
import React from 'react'

interface ITimeLineHeaderProps {
	users: IAssignee[]
}

export const TimeLineHeader: React.FC<ITimeLineHeaderProps> = ({ users }) => {
	return (
		<div className='mb-3 flex items-center justify-between'>
			<h2 className='text-xl font-medium'>Today tasks</h2>
			<div className='item-center flex'>
				{users.slice(0, 3).map((user, index) => (
					<div key={user.id} className={`relative ${index !== 0 ? '-ml-3' : ''} z-[${10 - index}]`}>
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
	)
}
