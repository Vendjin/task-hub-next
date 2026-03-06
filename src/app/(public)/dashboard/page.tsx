import { getServiceTasks } from '@/services'
import { getTodayTasks } from '@/services/tasks'
import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Dashboard } from '@/app/(public)/dashboard/Dashboard'

import { Spinner } from '@/components/ui'

export const metadata: Metadata = {
	title: 'Dashboard'
}

export default async function DashboardPage() {
	const [tasks, todayTasks] = await Promise.all([getServiceTasks(), getTodayTasks()])

	return (
		<Suspense
			fallback={
				<div className='flex h-full items-center justify-center'>
					<Spinner />
				</div>
			}
		>
			<Dashboard tasks={tasks.data || []} todayTasks={todayTasks.data || []} />
		</Suspense>
	)
}
