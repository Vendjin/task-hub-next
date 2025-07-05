'use client'

import React, { useState } from 'react'
import type { ITimeRange } from '@/shared/types'
import { ProjectChartsHeader } from '@/components/screens/dashboard/project-charts/ProjectChartsHeader'
import { ChartComponent } from '@/components/screens/dashboard/project-charts/ChartComponent'
import { MONTHLY_DATA, YEARLY_DATA } from '@/shared/data'

interface IProjectChartsProps {
	title?: string
}

export const ProjectCharts: React.FC<IProjectChartsProps> = () => {
	const [selectedRange, setSelectedRange] = useState<ITimeRange>({
		label: 'Yearly',
		value: 'yearly'
	})

	const chartData = selectedRange.value === 'yearly' ? YEARLY_DATA : MONTHLY_DATA

	return (
		<div className='flex flex-col h-full w-full mb-6 bg-block p-5 rounded-2xl flex-1'>
			<ProjectChartsHeader range={selectedRange} onChangeRange={setSelectedRange} />
			<ChartComponent data={chartData} />
		</div>
	)
}
