import React from 'react'
import type { IProfile } from '@/shared/types'
import { ChevronDown } from 'lucide-react'

interface ISideBarAccountProps {
	profile: IProfile
}

export const SideBarAccount: React.FC<ISideBarAccountProps> = ({ profile }) => {
	return (
		<div className='w-full'>
			<div className='bg-[#F6F6F6] dark:bg-neutral-900 flex items-center justify-between rounded-full p-1.5 pr-3 shrink-0'>
				<div className='flex items-center gap-2'>
					<div className='rounded-full bg-[#806DF0] h-10 w-10' />
					<div className='flex flex-col'>
						<span className='font-medium'>{profile.name}</span>
						<span className='opacity-60 text-sm'>{profile.email}</span>
					</div>
				</div>
				<ChevronDown size={20} className='opacity-70 cursor-pointer' />
			</div>
		</div>
	)
}
