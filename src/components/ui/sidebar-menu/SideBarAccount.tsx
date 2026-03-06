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
import { getProfile } from '@/services/profile'
import type { IProfile } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { ChevronDown, LogOut } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

import { SkeletonLoader } from '@/components/ui/SkeletonLoader'

import { createSupabaseClient } from '@/utils/supabase'

interface ISideBarAccountProps {
	profile?: IProfile
}

export const SideBarAccount: React.FC<ISideBarAccountProps> = () => {
	const router = useRouter()

	async function signOut() {
		const { error } = await createSupabaseClient().auth.signOut()

		if (!error) {
			router.push(PUBLIC_PAGES.LOGIN)
		}
	}

	const { data, isPending } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile
	})

	// if (!data) return null

	return (
		<div className='w-full'>
			<div className='flex items-center justify-between rounded-full bg-[#F6F6F6] p-1.5 pr-3 dark:bg-neutral-900'>
				{isPending ? (
					<SkeletonLoader />
				) : (
					!!data && (
						<>
							<div className='flex min-w-0 flex-1 items-center gap-2'>
								{data.avatar_path ? (
									<Image
										src={data.avatar_path}
										alt={data.name || 'avatar'}
										width={40}
										height={40}
										className='rounded-full'
									/>
								) : (
									<div className='h-10 w-10 shrink-0 rounded-full bg-[#806DF0]' />
								)}
								<div className='flex min-w-0 flex-col'>
									<span className='truncate font-medium'>{data.name}</span>
									<span className='truncate text-sm opacity-60'>{data.email}</span>
								</div>
							</div>

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<ChevronDown size={20} className='cursor-pointer opacity-70' />
								</DropdownMenuTrigger>
								<DropdownMenuContent className='mt-4 ml-4 w-56 rounded-2xl' align='end'>
									<DropdownMenuLabel>My Account</DropdownMenuLabel>
									<DropdownMenuGroup>
										<DropdownMenuItem onClick={signOut}>
											LogOut
											<DropdownMenuShortcut>
												<LogOut />
											</DropdownMenuShortcut>
										</DropdownMenuItem>
									</DropdownMenuGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</>
					)
				)}
			</div>
		</div>
	)
}
