import { getServiceTasks } from '@/services'
import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Dashboard } from '@/app/(public)/dashboard/Dashboard'

import { Spinner } from '@/components/ui'

export const metadata: Metadata = {
	title: 'Dashboard'
}

export default async function DashboardPage() {
	const { data } = await getServiceTasks()

	return (
		<Suspense
			fallback={
				<div className='flex h-full items-center justify-center'>
					<Spinner />
				</div>
			}
		>
			<Dashboard tasks={data || []} />
		</Suspense>
	)
}
