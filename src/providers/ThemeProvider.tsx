'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React, { type PropsWithChildren } from 'react'

export function ThemeProvider({ children }: PropsWithChildren) {
	return (
		<NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
			{children}
		</NextThemesProvider>
	)
}
