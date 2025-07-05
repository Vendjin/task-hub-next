import React from 'react'
import { MENU, PROFILE, PROJECTS } from '@/shared/data'
import { SideBarAccount } from '@/components/ui/sidebar-menu/SideBarAccount'
import { SideBarDivider } from '@/components/ui/sidebar-menu/SideBarDivider'
import { SideBarMainMenu } from '@/components/ui/sidebar-menu/SideBarMainMenu'
import { SideBarProjects } from '@/components/ui/sidebar-menu/SideBarProjects'

interface ISidebarProps {
	title?: string
}

export const Sidebar: React.FC<ISidebarProps> = () => {
	return (
		<aside className='w-full bg-white p-5 dark:bg-neutral-800 pt-10'>
			<SideBarDivider title='Account' />
			<SideBarAccount profile={PROFILE} />
			<SideBarDivider title='Main Menu' />
			<SideBarMainMenu menu={MENU} />
			<SideBarDivider title='Projects' />
			<SideBarProjects projects={PROJECTS} />
		</aside>
	)
}
