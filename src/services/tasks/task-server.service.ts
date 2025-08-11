'use server'

import { createSupabaseServer } from '@/utils/supabase'

export async function getServiceTasks() {
	const client = await createSupabaseServer()

	return client.from('task').select(`*, sub_task(*)`)
	// 	.order('due_date', {
	// 	ascending: true
	// }
	// )
}
