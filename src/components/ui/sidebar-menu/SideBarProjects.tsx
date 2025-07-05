import React from 'react'
import type { IProject } from '@/shared/types'
import cn from 'clsx'

interface ISideBarProjectsProps {
	projects: IProject[]
}

export const SideBarProjects: React.FC<ISideBarProjectsProps> = ({ projects }) => {
	return (
		<ul className='space-y-3 pl-4'>
			{projects.map(project => (
				<li key={project.name} className='flex items-center gap-3 cursor-pointer '>
					<div className={cn(project.color, 'w-4 h-4')} />
					<span className='text-neutral-500 dark:text-neutral-200'>{project.name}</span>
				</li>
			))}
		</ul>
	)
}
