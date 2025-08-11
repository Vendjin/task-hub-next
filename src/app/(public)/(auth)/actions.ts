import { createSupabaseClient } from '@/utils/supabase'

export async function signInWithEmail({ email }: { email: string }) {
	const supabase = createSupabaseClient()

	return supabase.auth.signInWithOtp({
		email,
		options: {
			shouldCreateUser: true
		}
	})
}
