import React from 'react'

import { ProjectCharts, ProjectStats, TasksTimeline } from '@/components/screens/dashboard'
import { LastTasks } from '@/components/screens/dashboard/last-tasks'
import { HeadingDashboard } from '@/components/ui'

interface IDashboardProps {
	className?: string
}

export const Dashboard: React.FC<IDashboardProps> = () => {
	return (
		<div className='flex flex-col gap-4 p-5'>
			<HeadingDashboard />
			<div className='flex gap-6'>
				<ProjectStats />
				<ProjectCharts />
			</div>
			<LastTasks />
			<TasksTimeline />
		</div>
	)
}
