'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

interface IThemeToggleProps {
	title?: string
}

export const ThemeToggle: React.FC<IThemeToggleProps> = () => {
	const { theme, setTheme } = useTheme()

	return (
		<div>
			<button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				className='bg-block rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-200 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600'
			>
				{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
			</button>
		</div>
	)
}
