import React from 'react'

interface IProjectChartTooltipProps {
	active?: string
	payload?: Array<{ value: number }>
}

export const ProjectChartTooltip: React.FC<IProjectChartTooltipProps> = ({ active, payload }) => {
	if (!active || !payload?.length) return null

	return <div className='bg-primary-active rounded-full px-2.5 py-1'>{payload[0].value} Projects</div>
}
