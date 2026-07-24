import type { IMenuItem } from '@/shared/types'
import cn from 'clsx'
import Link from 'next/link'
import React from 'react'

interface IMenuItemProps {
	menuItem: IMenuItem
}

export const MenuItem: React.FC<IMenuItemProps> = ({ menuItem }) => {
	return (
		<li>
			<Link
				href={menuItem.href}
				className={cn(
					'flex items-center justify-between gap-2 rounded-full px-4 py-3 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white',
					menuItem.label === 'Dashboard' && 'bg-[var(--color-primary-active)] text-white'
				)}
			>
				<div className='flex items-center gap-2'>
					<menuItem.icon size={20} />
					{menuItem.label}
				</div>
				<div>
					{menuItem.label === 'Message' && (
						<span className='text-primary-active rounded-full bg-purple-200 px-2 text-xs font-medium'>
							4
						</span>
					)}
				</div>
			</Link>
		</li>
	)
}
