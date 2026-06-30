'use server'

import { createSupabaseServer } from '@/utils/supabase'

export async function getServerProjectChartData(rangeType: 'yearly' | 'monthly') {
	const client = await createSupabaseServer()
	return client
		.from('project_chart_point')
		.select('*')
		.eq('range_type', rangeType)
		.order('period', { ascending: true })
}
