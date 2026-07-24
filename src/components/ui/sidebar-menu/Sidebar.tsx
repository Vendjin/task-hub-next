'use client'

import { MENU } from '@/shared/data'
import type { TProfile, TProjects } from '@/shared/types'
import React from 'react'

import { SideBarDivider } from '@/components/ui/sidebar-menu/SideBarDivider'
import { SideBarMainMenu } from '@/components/ui/sidebar-menu/SideBarMainMenu'
import { SideBarProfile } from '@/components/ui/sidebar-menu/SideBarProfile'
import { SideBarProjects } from '@/components/ui/sidebar-menu/SideBarProjects'

interface ISidebarProps {
	profile: TProfile
	projects: TProjects
}

export const Sidebar: React.FC<ISidebarProps> = ({ profile, projects }) => {
	return (
		<aside className='bg-block w-full p-4 pt-10 dark:bg-neutral-800'>
			<SideBarDivider title='Account' />
			<SideBarProfile profile={profile} />

			<SideBarDivider title='Main Menu' />
			<SideBarMainMenu menu={MENU} />
			<SideBarDivider title='Projects' />
			<SideBarProjects projects={projects} />
		</aside>
	)
}
