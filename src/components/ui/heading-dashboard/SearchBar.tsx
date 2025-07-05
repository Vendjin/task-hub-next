import React from 'react'
import { Search } from 'lucide-react'

interface ISearchBarProps {
	value: string
	onChange: (value: string) => void
}

export const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange }) => {
	return (
		<div className='flex items-center rounded-full bg-white dark:bg-white/10 p-3 w-full max-w-sm shadow'>
			<Search size={20} className='mr-2 text-neutral-500' />
			<input
				type='search'
				placeholder='Search something...'
				value={value}
				onChange={e => onChange(e.target.value)}
				className='w-full bg-transparent focus:outline-none text-sm placeholder:text-neutral-400'
			/>
		</div>
	)
}
