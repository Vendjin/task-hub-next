import { DASHBOARD_PAGES } from '@/config'
import type { TProjects } from '@/shared/types'
import cn from 'clsx'
import Link from 'next/link'
import React from 'react'

interface ISideBarProjectsProps {
	projects: TProjects
}

export const SideBarProjects: React.FC<ISideBarProjectsProps> = ({ projects }) => {
	if (!projects.data) return null

	return (
		<ul className='space-y-3 pl-4'>
			{projects.data.map(project => (
				<Link
					href={DASHBOARD_PAGES.PROJECT_DETAILS(project.slug)}
					key={project.name}
					className='flex cursor-pointer items-center gap-3'
				>
					<div className={cn(project.color, 'h-4 w-4')} />
					<span className='text-neutral-500 dark:text-neutral-200'>{project.name}</span>
				</Link>
			))}
		</ul>
	)
}
