import { TIME_RANGES } from '@/shared/data'
import type { ITimeRange } from '@/shared/types'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

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
		<div className='mb-2 flex items-center justify-between'>
			<h2 className='text-2xl font-medium'>Projects Statistic</h2>
			<div className='relative'>
				<button
					onClick={() => setIsOpenDropdown(!isOpenDropdown)}
					className='border-block flex w-full items-center justify-center gap-2 rounded-2xl border px-3 py-1'
				>
					{range.label}
					<ChevronDown size={18} className='hover:text-primary-active cursor-pointer' />
				</button>

				{isOpenDropdown && (
					<div className='border-block absolute right-0 z-10 mt-1.5 rounded-2xl border px-3 py-1'>
						{TIME_RANGES.map(range => (
							<button
								key={range.label}
								onClick={() => handleChangeRange(range)}
								className='hover:text-primary-active w-full px-3 py-2 text-left text-sm transition-colors'
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
