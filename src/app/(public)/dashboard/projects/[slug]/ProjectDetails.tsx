import { Heading } from '@/components'
import type { TProjectWithSlug } from '@/shared/types'
import React, { type FC } from 'react'

import { TaskList } from '@/components/elements'

interface IProjectDetailsProps {
	project: TProjectWithSlug
}

export const ProjectDetails: FC<IProjectDetailsProps> = ({ project }) => {
	return (
		<div className='overflow-y-auto p-5'>
			<div className='mb-6 flex items-center justify-between'>
				<Heading title={project.name} />
			</div>

			<div className='mt-5'>
				<TaskList tasks={project.task} countTasks={project.task.length} />
			</div>
		</div>
	)
}
