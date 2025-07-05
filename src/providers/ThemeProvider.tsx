'use client'

import React, { type PropsWithChildren } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: PropsWithChildren) {
	return (
		<NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
			{children}
		</NextThemesProvider>
	)
}
