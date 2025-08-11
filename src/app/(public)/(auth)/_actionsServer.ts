'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createSupabaseServer } from '@/utils/supabase'

export async function signInWithEmail({ email }: { email: string }) {
	const supabase = await createSupabaseServer()

	const { error } = await supabase.auth.signInWithOtp({
		email,
		options: {
			shouldCreateUser: true,
			emailRedirectTo: 'https://localhost:3000'
		}
	})

	if (error) redirect('/error')
	revalidatePath('/dashboard', 'layout')
	// redirect('/')

	return { error }
}
