import React from 'react'
import type { IProjectStat } from '@/shared/types'
import cn from 'clsx'
import Image from 'next/image'
import { formatMinutes } from '@/utils'

interface IProjectStatCardProps {
	projectStat: IProjectStat
}

export const ProjectStatCard: React.FC<IProjectStatCardProps> = ({ projectStat }) => {
	return (
		<div className={cn(projectStat.bgColor, 'rounded-2xl p-5 relative overflow-hidden')}>
			<div className='flex items-center justify-between relative z-10'>
				<div className='flex flex-col gap-1'>
					<span className='text-4xl font-semibold '>
						{projectStat.id === 3 ? formatMinutes(projectStat.number) : projectStat.number}
					</span>
					<span className='text-sm font-medium'>{projectStat.label}</span>
				</div>

				<div className='flex-shrink-0'>
					<Image src={projectStat.icon} alt={projectStat.label} width={80} height={80} />
				</div>
			</div>
		</div>
	)
}
