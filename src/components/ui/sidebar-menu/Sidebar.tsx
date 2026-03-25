'use client'

import { getServerProfile } from '@/services/profile'
import { MENU, PROJECTS } from '@/shared/data'
import React from 'react'

import { SideBarDivider } from '@/components/ui/sidebar-menu/SideBarDivider'
import { SideBarMainMenu } from '@/components/ui/sidebar-menu/SideBarMainMenu'
import { SideBarProfile } from '@/components/ui/sidebar-menu/SideBarProfile'
import { SideBarProjects } from '@/components/ui/sidebar-menu/SideBarProjects'

interface ISidebarProps {
	title?: string
	data: Awaited<ReturnType<typeof getServerProfile>>
}

export const Sidebar: React.FC<ISidebarProps> = ({ data }) => {
	return (
		<aside className='bg-block w-full p-4 pt-10 dark:bg-neutral-800'>
			<SideBarDivider title='Account' />
			<SideBarProfile data={data} />

			<SideBarDivider title='Main Menu' />
			<SideBarMainMenu menu={MENU} />
			<SideBarDivider title='Projects' />
			<SideBarProjects projects={PROJECTS} />
		</aside>
	)
}
