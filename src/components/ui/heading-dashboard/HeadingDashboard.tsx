'use client'

import React, { type ReactNode, useState } from 'react'
import { SearchBar } from '@/components/ui'
import { Bell } from 'lucide-react'
import dynamic from 'next/dynamic'

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

			<div className='flex-1 max-w-sm flex items-center justify-between gap-2'>
				<SearchBar value={searchValue} onChange={setSearchValue} />
				<div className='p-2 rounded-full bg-white hover:bg-neutral-200 dark:bg-white/10 cursor-pointer dark:hover:bg-neutral-600'>
					<Bell size={20} className='text-neutral-500 dark:text-neutral-200' />
				</div>
				<DynamicThemeToggle />
			</div>
		</div>
	)
}
