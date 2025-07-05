import { ICONS } from '@/shared/data'

export interface ITaskFormValues {
	title: string
	progress: number
	dueDate: Date
	icon: keyof typeof ICONS
}
