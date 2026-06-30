'use client'

import { createSupabaseClient } from '@/utils/supabase'

export async function getClientProjectChartData(rangeType: 'yearly' | 'monthly') {
	const client = await createSupabaseClient()

	const { data, error } = await client
		.from('project_chart_point')
		.select('*')
		.eq('range_type', rangeType)
		.order('period', { ascending: true })

	if (error || !data) {
		throw new Error(error.message || 'Failed to fetch project chart data')
	}

	return data
}
