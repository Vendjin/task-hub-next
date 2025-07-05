export interface ITimeRange {
	label: string
	value: 'yearly' | 'monthly'
}

export interface IChartDataPoint {
	period: string
	value: number
}
