import React from 'react'

import { Sidebar } from '@/components/ui/sidebar-menu'

export default function Layout({
	children,
	modal
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<div className='grid h-screen grid-cols-[270px_1fr]'>
			<Sidebar />
			<main>
				{children}
				{modal}
			</main>
		</div>
	)
}
