'use client'

import { Bell } from 'lucide-react'
import dynamic from 'next/dynamic'
import React, { type ReactNode, useState } from 'react'

import { SearchBar } from '@/components/ui'

interface IHeadingDashboardProps {
	children?: ReactNode
}

const DynamicThemeToggle = dynamic(() => import('../theme-toggle/ThemeToggle').then(mod => mod.ThemeToggle), {
	ssr: false
})

export const HeadingDashboard: React.FC<IHeadingDashboardProps> = () => {
	const [searchValue, setSearchValue] = useState('')

	return (
		<div className='flex items-center justify-between'>
			<h1 className='text-2xl font-medium'>Dashboard</h1>

			<div className='flex max-w-sm flex-1 items-center justify-between gap-2'>
				<SearchBar value={searchValue} onChange={setSearchValue} />
				<div className='bg-block dark:bg-block/10 cursor-pointer rounded-full p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600'>
					<Bell size={20} className='text-neutral-500 dark:text-neutral-200' />
				</div>
				<DynamicThemeToggle />
			</div>
		</div>
	)
}
