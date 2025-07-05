import React from 'react'
import { PROJECT_STATS_DATA } from '@/shared/data'
import { ProjectStatCard } from '@/components/screens/dashboard'

interface IProjectStatsProps {
	title?: string
}

export const ProjectStats: React.FC<IProjectStatsProps> = () => {
	return (
		<div className='space-y-4 w-[35%]'>
			{PROJECT_STATS_DATA.map(projectStat => (
				<ProjectStatCard key={projectStat.id} projectStat={projectStat} />
			))}
		</div>
	)
}
