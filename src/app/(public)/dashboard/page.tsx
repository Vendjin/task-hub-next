import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Chat } from '@/app/(public)/dashboard/Chat'
import { Dashboard } from '@/app/(public)/dashboard/Dashboard'

import { Spinner } from '@/components/ui'

export const metadata: Metadata = {
	title: 'Dashboard'
}

export default function DashboardPage() {
	return (
		<div className='grid h-full grid-cols-[70%_30%]'>
			<Suspense
				fallback={
					<div className='flex h-full items-center justify-center'>
						<Spinner />
					</div>
				}
			>
				<Dashboard />
			</Suspense>
			<Chat />
		</div>
	)
}
