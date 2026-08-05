import type { TProjects } from '@/shared/types'
import React from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui'

interface ILastTaskFilterProjectProps {
	projects: TProjects
	currentProjectId: string | null
	setCurrentProjectId: (id: string | null) => void
}

const ALL_PROJECTS_ID = 'all'

export const LastTaskFilterProject: React.FC<ILastTaskFilterProjectProps> = ({
	projects,
	currentProjectId,
	setCurrentProjectId
}) => {
	if (!projects || projects.length === 0) return null

	return (
		<Select
			value={currentProjectId || ALL_PROJECTS_ID}
			onValueChange={val => setCurrentProjectId(val === ALL_PROJECTS_ID ? null : val)}
		>
			<SelectTrigger className='bg-block w-[185px] cursor-pointer'>
				<SelectValue placeholder='Filter for Progress' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem key={ALL_PROJECTS_ID} value={ALL_PROJECTS_ID}>
					All Projects
				</SelectItem>

				{projects.map(option => (
					<SelectItem key={option.id} value={option.id}>
						<div className='flex w-48 items-center justify-between pr-2'>
							<span>{option.name}</span>
						</div>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
