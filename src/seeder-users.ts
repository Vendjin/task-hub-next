'use server'

import { createAdminClient } from '@/utils/supabase'

import { USERS } from '@/shared/data/last-tasks.data'

export async function seedAuthUsers() {
	const supabase = await createAdminClient()

	for (const user of USERS) {
		const { data, error } = await supabase.auth.admin.createUser({
			id: user.id,
			email: user.email,
			password: '123456' // не меньше 6 символов!
		})

		if (error) {
			console.error(`❌ Не удалось создать ${user.email}:`, error)
		} else {
			console.log(`✅ Создан пользователь ${user.email}: ${data.user.id}`)
		}
	}

	// for (const user of USERS) {
	// 	await supabase.auth.admin.deleteUser(user.id)
	// }
}
