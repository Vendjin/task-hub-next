import { Search } from 'lucide-react'
import React from 'react'

interface ISearchBarProps {
	value: string
	onChange: (value: string) => void
}

export const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange }) => {
	return (
		<div className='bg-block dark:bg-block/10 flex w-full max-w-sm items-center rounded-full p-3 shadow'>
			<Search size={20} className='mr-2 text-neutral-500' />
			<input
				type='search'
				placeholder='Search something...'
				value={value}
				onChange={e => onChange(e.target.value)}
				className='w-full bg-transparent text-sm placeholder:text-neutral-400 focus:outline-none'
			/>
		</div>
	)
}
