import { AuthForm } from '@/components'
import { NO_INDEX_PAGE } from '@/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <AuthForm type='login' />
}
