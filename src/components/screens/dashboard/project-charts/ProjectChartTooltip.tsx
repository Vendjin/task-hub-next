import React from 'react'

interface IProjectChartTooltipProps {
	active?: string
	payload?: Array<{ value: number }>
}

export const ProjectChartTooltip: React.FC<IProjectChartTooltipProps> = ({ active, payload }) => {
	if (!active || !payload?.length) return null

	return <div className='bg-primary-active py-1 px-2.5 rounded-full'>{payload[0].value} Projects</div>
}
