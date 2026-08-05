import { NO_INDEX_PAGE } from '@/constants'
import { getServerProjectBySlug } from '@/services/projects/project-server.service'
import type { Metadata } from 'next'
import React from 'react'

import { ProjectDetails } from '@/app/(public)/dashboard/projects/[slug]/ProjectDetails'

export const metadata: Metadata = {
	title: 'Project Details',
	...NO_INDEX_PAGE
}

type TParams = { slug: string }

export default async function Page({ params }: { params: Promise<TParams> }) {
	const { slug } = await params

	const project = await getServerProjectBySlug(slug)

	if (!project.data) {
		console.log(project)
		return <div className='p-5'>Project not found</div>
	}

	return <ProjectDetails project={project.data} />
}
