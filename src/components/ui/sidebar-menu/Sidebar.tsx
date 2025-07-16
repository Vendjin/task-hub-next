'use client'

import { MENU, PROFILE, PROJECTS } from '@/shared/data'
import { useAuthStore } from '@/store'
import React from 'react'

import { SideBarAccount } from '@/components/ui/sidebar-menu/SideBarAccount'
import { SideBarDivider } from '@/components/ui/sidebar-menu/SideBarDivider'
import { SideBarMainMenu } from '@/components/ui/sidebar-menu/SideBarMainMenu'
import { SideBarProjects } from '@/components/ui/sidebar-menu/SideBarProjects'

interface ISidebarProps {
	title?: string
}

export const Sidebar: React.FC<ISidebarProps> = () => {
	const isLoggedIn = useAuthStore(state => state.isLoggedIn)

	return (
		<aside className='w-full bg-white p-5 pt-10 dark:bg-neutral-800'>
			{isLoggedIn && (
				<>
					<SideBarDivider title='Account' />
					<SideBarAccount profile={PROFILE} />
				</>
			)}
			<SideBarDivider title='Main Menu' />
			<SideBarMainMenu menu={MENU} />
			<SideBarDivider title='Projects' />
			<SideBarProjects projects={PROJECTS} />
		</aside>
	)
}
