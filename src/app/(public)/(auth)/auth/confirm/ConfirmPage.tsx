'use client'

import { DASHBOARD_PAGES, PUBLIC_PAGES } from '@/config'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { createSupabaseClient } from '@/utils/supabase'

export default function ConfirmPage() {
	const params = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		const verifyToken = async () => {
			const token = params.get('token_hash')

			if (!token) {
				return router.replace(PUBLIC_PAGES.LOGIN)
			}

			const { error } = await createSupabaseClient().auth.verifyOtp({
				type: 'email',
				token_hash: token
			})

			if (error) return router.replace(PUBLIC_PAGES.LOGIN)

			router.replace(DASHBOARD_PAGES.DASHBOARD)
		}

		verifyToken()
	}, [router, params])

	return <p>Verifying your email... Please wait.</p>
}
