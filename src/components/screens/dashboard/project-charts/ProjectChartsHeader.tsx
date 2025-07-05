import React, { useState } from 'react'
import type { ITimeRange } from '@/shared/types'
import { ChevronDown } from 'lucide-react'
import { TIME_RANGES } from '@/shared/data'

interface IProjectChartsHeaderProps {
	range: ITimeRange
	onChangeRange: (range: ITimeRange) => void
}

export const ProjectChartsHeader: React.FC<IProjectChartsHeaderProps> = ({ range, onChangeRange }) => {
	const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false)

	const handleChangeRange = (range: ITimeRange) => {
		onChangeRange(range)
		setIsOpenDropdown(false)
	}

	return (
		<div className='flex items-center justify-between mb-2'>
			<h2 className='text-2xl font-medium '>Projects Statistic</h2>
			<div className='relative'>
				<button
					onClick={() => setIsOpenDropdown(!isOpenDropdown)}
					className='flex items-center justify-center gap-2 w-full border border-block rounded-2xl px-3 py-1 '
				>
					{range.label}
					<ChevronDown size={18} className='cursor-pointer hover:text-primary-active' />
				</button>

				{isOpenDropdown && (
					<div className='absolute right-0 mt-1.5  border border-block rounded-2xl px-3 py-1 z-10'>
						{TIME_RANGES.map(range => (
							<button
								key={range.label}
								onClick={() => handleChangeRange(range)}
								className='w-full px-3 py-2 text-sm text-left transition-colors hover:text-primary-active'
							>
								{range.label}
							</button>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
