import type { Metadata } from 'next'
import { Chat } from '@/app/(public)/(dashboard)/Chat'
import { Dashboard } from '@/app/(public)/(dashboard)/Dashboard'
import { Suspense } from 'react'
import { Spinner } from '@/components/ui'

export const metadata: Metadata = {
	title: 'Dashboard'
}

export default function DashboardPage() {
	return (
		<div className='grid grid-cols-[70%_30%] h-full'>
			<Suspense
				fallback={
					<div className='flex items-center justify-center h-full'>
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
