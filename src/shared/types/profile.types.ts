import { getServerProfile } from '@/services/profile'

export interface IProfile {
	id: string
	name: string
	email: string
}

export type TProfile = NonNullable<Awaited<ReturnType<typeof getServerProfile>>>
