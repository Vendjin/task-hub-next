import { formatMinutes } from '@/utils'
import cn from 'clsx'
import Image from 'next/image'
import React from 'react'

import type { TGetProjectStatsResponse } from '@/shared/types/statistics.types'

interface IProjectStatCardProps {
	projectStat: TGetProjectStatsResponse[0]
	isLast: boolean
}

export const ProjectStatCard: React.FC<IProjectStatCardProps> = ({ projectStat, isLast }) => {
	return (
		<div className={cn(projectStat.bg_color, 'relative overflow-hidden rounded-2xl p-5')}>
			<div className='relative z-10 flex items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<span className='text-4xl font-semibold'>
						{isLast ? formatMinutes(projectStat.number) : projectStat.number}
					</span>
					<span className='text-sm font-medium'>{projectStat.label}</span>
				</div>

				<div className='flex-shrink-0'>
					<Image
						src={projectStat.icon || ''}
						alt={projectStat.label}
						width={80}
						height={80}
						className='h-auto'
					/>
				</div>
			</div>
		</div>
	)
}
