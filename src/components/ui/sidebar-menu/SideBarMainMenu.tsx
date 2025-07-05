import React from 'react'
import { MenuItem } from '@/components/ui/sidebar-menu/MenuItem'
import type { IMenuItem } from '@/shared/types'

interface ISideBarMainProps {
	menu: IMenuItem[]
}

export const SideBarMainMenu: React.FC<ISideBarMainProps> = ({ menu }) => {
	return (
		<ul className='w-full space-y-2'>
			{menu.map(menuItem => (
				<MenuItem menuItem={menuItem} key={menuItem.label} />
			))}
		</ul>
	)
}
