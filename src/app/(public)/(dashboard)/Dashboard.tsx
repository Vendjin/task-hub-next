import React from 'react'
import { HeadingDashboard } from '@/components/ui'
import { ProjectCharts, ProjectStats } from '@/components/screens/dashboard'
import { LastTasks } from '@/components/screens/dashboard/last-tasks'

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
		</div>
	)
}
