import { Suspense } from 'react'

import ConfirmPage from '@/app/(public)/(auth)/auth/confirm/ConfirmPage'

export default async function Page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ConfirmPage />
		</Suspense>
	)
}
