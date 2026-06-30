'use client'

import { getClientProjectChartData } from '@/services/statistics/chart/project-chart-client.service'
import type { ITimeRange } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

import { ChartComponent } from '@/components/screens/dashboard/project-charts/ChartComponent'
import { ProjectChartsHeader } from '@/components/screens/dashboard/project-charts/ProjectChartsHeader'

import type { TClientProjectChartDataResponse } from '@/shared/types/statistics.types'

interface IProjectChartsProps {
	projectChartData: TClientProjectChartDataResponse
}

export const ProjectCharts: React.FC<IProjectChartsProps> = ({ projectChartData }) => {
	const [selectedRange, setSelectedRange] = useState<ITimeRange>({
		label: 'Yearly',
		value: 'yearly'
	})

	const { data } = useQuery({
		queryKey: ['project-charts', selectedRange],
		queryFn: () => getClientProjectChartData(selectedRange.value),
		initialData: projectChartData
	})

	return (
		<div className='bg-block mb-6 flex h-full w-full flex-1 flex-col rounded-2xl p-5'>
			<ProjectChartsHeader range={selectedRange} onChangeRange={setSelectedRange} />
			<ChartComponent data={data || []} />
		</div>
	)
}
