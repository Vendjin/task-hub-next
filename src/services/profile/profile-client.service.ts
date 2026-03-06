'use client'

import { createSupabaseClient } from '@/utils/supabase'


export async function getProfile() {
	const client = createSupabaseClient()

	const {
		data: { user },
		error: authError
	} = await client.auth.getUser()

	if (authError || !user) throw new Error(authError?.message || 'User not found')

	const { data, error } = await client.from('profile').select('*').eq('id', user.id).single()

	if (error || !data) throw new Error(error?.message || 'Profile not found')

	return { ...user, ...data }
}
