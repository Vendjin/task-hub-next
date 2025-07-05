import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import React from 'react'
import { ThemeProvider } from '@/providers'

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
			<body className={`${font.variable}  antialiased`}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
