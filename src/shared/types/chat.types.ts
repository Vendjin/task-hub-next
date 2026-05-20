import type { Database } from '@/shared/types/db.types'

export type TChatMessageWithProfile = Database['public']['Tables']['chat_message']['Row'] & {
	profile: Database['public']['Tables']['profile']['Row'] | null
}
