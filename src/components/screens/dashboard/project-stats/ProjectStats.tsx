import React from 'react'

import { ProjectStatCard } from '@/components/screens/dashboard'

import type { TGetProjectStatsResponse } from '@/shared/types/statistics.types'

interface IProjectStatsProps {
	projectStats: TGetProjectStatsResponse
}

export const ProjectStats: React.FC<IProjectStatsProps> = ({ projectStats }) => {
	return (
		<div className='w-[35%] space-y-4'>
			{projectStats.map((projectStat, index) => (
				<ProjectStatCard
					key={projectStat.id}
					projectStat={projectStat}
					isLast={index === projectStats.length - 1}
				/>
			))}
		</div>
	)
}
