import './globals.css'
import { QueryProvider, ThemeProvider } from '@/providers'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'

const font = Poppins({
	variable: '--font-sans ',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: 'Task Hub',
	description: 'Task Management UI'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${font.variable} antialiased`}>
				<QueryProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</QueryProvider>
			</body>
		</html>
	)
}
