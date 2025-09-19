import { Toaster } from '@/components'
import { PUBLIC_PAGES } from '@/config'
import { redirect } from 'next/navigation'
import React from 'react'

import { Sidebar } from '@/components/ui/sidebar-menu'

import { getServerAuth } from '@/utils/supabase'

export default async function Layout({
	children,
	modal
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	const user = await getServerAuth()

	if (!user) redirect(PUBLIC_PAGES.LOGIN)

	return (
		<>
			<div className='grid min-h-screen grid-cols-[260px_1fr]'>
				<Sidebar />
				<main>{children}</main>
				{modal}
			</div>
			<Toaster />
		</>
	)
}
