import { ICONS } from '@/shared/data'

export interface ITaskFormValues {
	title: string
	dueDate: Date
	icon: keyof typeof ICONS
}
