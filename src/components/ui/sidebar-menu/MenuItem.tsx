import React from 'react'
import type { IMenuItem } from '@/shared/types'
import Link from 'next/link'
import cn from 'clsx'

interface IMenuItemProps {
	menuItem: IMenuItem
}

export const MenuItem: React.FC<IMenuItemProps> = ({ menuItem }) => {
	return (
		<li>
			<Link
				href={menuItem.href}
				className={cn(
					'text-neutral-500 flex items-center gap-2 hover:text-neutral-900 transition-colors py-3 px-4 justify-between rounded-full dark:text-neutral-200 dark:hover:text-white',
					menuItem.label === 'Dashboard' && 'bg-[var(--color-primary-active)] text-white'
				)}
			>
				<div className='flex items-center gap-2'>
					<menuItem.icon size={20} />
					{menuItem.label}
				</div>
				<div>
					{menuItem.label === 'Message' && (
						<span className='text-primary-active bg-purple-200 rounded-full px-2 text-xs font-medium'>
							4
						</span>
					)}
				</div>
			</Link>
		</li>
	)
}
