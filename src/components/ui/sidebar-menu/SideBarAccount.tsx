'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuShortcut,
	DropdownMenuTrigger
} from '@/components'
import { PUBLIC_PAGES } from '@/config'
import type { IProfile } from '@/shared/types'
import { useAuthStore } from '@/store'
import { ChevronDown, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ISideBarAccountProps {
	profile: IProfile
}

export const SideBarAccount: React.FC<ISideBarAccountProps> = ({ profile }) => {
	const email = useAuthStore(state => state.userLogin)
	const logout = useAuthStore(state => state.logout)
	const router = useRouter()

	return (
		<div className='w-full'>
			<div className='flex shrink-0 items-center justify-between rounded-full bg-[#F6F6F6] p-1.5 pr-3 dark:bg-neutral-900'>
				<div className='flex items-center gap-2'>
					<div className='h-10 w-10 rounded-full bg-[#806DF0]' />
					<div className='flex flex-col'>
						<span className='font-medium'>{profile.name}</span>
						<span className='text-sm opacity-60'>{email}</span>
					</div>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<ChevronDown size={20} className='cursor-pointer opacity-70' />
					</DropdownMenuTrigger>
					<DropdownMenuContent className='mt-4 ml-4 w-56 rounded-2xl' align='end'>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuGroup>
							<DropdownMenuItem
								onClick={() => {
									logout()
									router.push(PUBLIC_PAGES.LOGIN)
								}}
							>
								LogOut
								<DropdownMenuShortcut>
									<LogOut />
								</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}
