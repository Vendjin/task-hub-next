import type { getClientProjectChartData } from '@/services/statistics/chart/project-chart-client.service'
import { getServerProjectChartData } from '@/services/statistics/chart/project-chart-server.service'
import { getServerProjectStats } from '@/services/statistics/project-stat-server.service'

export type TGetProjectStatsResponse = NonNullable<Awaited<ReturnType<typeof getServerProjectStats>>['data']>

export type TGetServerProjectChartDataResponse = NonNullable<
	Awaited<ReturnType<typeof getServerProjectChartData>>['data']
>

export type TClientProjectChartDataResponse = Awaited<ReturnType<typeof getClientProjectChartData>>
