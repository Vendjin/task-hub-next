import type { IChartDataPoint, ITimeRange } from '@/shared/types'

export const YEARLY_DATA: IChartDataPoint[] = [
	{ period: 'Jan', value: 19 },
	{ period: 'Feb', value: 14 },
	{ period: 'Mar', value: 27 },
	{ period: 'Apr', value: 38 },
	{ period: 'May', value: 35 },
	{ period: 'Jun', value: 20 },
	{ period: 'Jul', value: 23 }
]

export const MONTHLY_DATA: IChartDataPoint[] = [
	{ period: 'Week 1', value: 12 },
	{ period: 'Week 2', value: 19 },
	{ period: 'Week 3', value: 15 },
	{ period: 'Week 4', value: 25 }
]

export const TIME_RANGES: ITimeRange[] = [
	{ label: 'Yearly', value: 'yearly' },
	{ label: 'Monthly', value: 'monthly' }
]
