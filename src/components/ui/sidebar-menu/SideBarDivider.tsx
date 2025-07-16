import React from 'react'

interface ISideBarDividerProps {
	title: string
}

export const SideBarDivider: React.FC<ISideBarDividerProps> = ({ title }) => {
	return <div className='mt-3.5 mb-2 text-neutral-400 dark:text-shadow-neutral-300'>{title}</div>
}
