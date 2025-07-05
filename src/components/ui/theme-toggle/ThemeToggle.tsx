'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

interface IThemeToggleProps {
	title?: string
}

export const ThemeToggle: React.FC<IThemeToggleProps> = () => {
	const { theme, setTheme } = useTheme()

	return (
		<div>
			<button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				className='p-2 rounded-full bg-white dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors dark:text-white text-neutral-500'
			>
				{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
			</button>
		</div>
	)
}
