import { AuthForm } from '@/components'
import { DASHBOARD_PAGES } from '@/config'
import { NO_INDEX_PAGE } from '@/constants'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerAuth } from '@/utils/supabase'

export const metadata: Metadata = {
	title: 'Login',
	...NO_INDEX_PAGE
}

export default async function Page() {
	const user = await getServerAuth()

	if (user) redirect(DASHBOARD_PAGES.DASHBOARD)

	return <AuthForm />
}
