import type { IProjectStat } from '@/shared/types'
import { formatMinutes } from '@/utils'
import cn from 'clsx'
import Image from 'next/image'
import React from 'react'

interface IProjectStatCardProps {
	projectStat: IProjectStat
}

export const ProjectStatCard: React.FC<IProjectStatCardProps> = ({ projectStat }) => {
	return (
		<div className={cn(projectStat.bgColor, 'relative overflow-hidden rounded-2xl p-5')}>
			<div className='relative z-10 flex items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<span className='text-4xl font-semibold'>
						{projectStat.id === 3 ? formatMinutes(projectStat.number) : projectStat.number}
					</span>
					<span className='text-sm font-medium'>{projectStat.label}</span>
				</div>

				<div className='flex-shrink-0'>
					<Image src={projectStat.icon} alt={projectStat.label} width={80} height={80} className='h-auto' />
				</div>
			</div>
		</div>
	)
}
