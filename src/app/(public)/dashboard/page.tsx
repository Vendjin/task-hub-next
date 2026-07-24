import { getServerProfile } from '@/services/profile'
import { getServerProjectChartData } from '@/services/statistics/chart/project-chart-server.service'
import { getServerProjectStats } from '@/services/statistics/project-stat-server.service'
import { getServiceTasks, getTodayTasks } from '@/services/tasks'
import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Dashboard } from '@/app/(public)/dashboard/Dashboard'

import { Spinner } from '@/components/ui'

export const metadata: Metadata = {
	title: 'Dashboard'
}

export default async function DashboardPage() {
	//Подгружаем данные с сервера, потом дотяем уже танстаком
	const [tasks, todayTasks, projectStats, projectChartData] = await Promise.all([
		getServiceTasks(),
		getTodayTasks(),
		getServerProjectStats(),
		getServerProjectChartData('yearly')
	])

	const data = await getServerProfile()

	return (
		<Suspense
			fallback={
				<div className='flex h-full items-center justify-center'>
					<Spinner />
				</div>
			}
		>
			<Dashboard
				tasks={tasks.data || []}
				todayTasks={todayTasks.data || []}
				userId={data.id}
				projectStats={projectStats.data || []}
				projectChartData={projectChartData.data || []}
			/>
		</Suspense>
	)
}
