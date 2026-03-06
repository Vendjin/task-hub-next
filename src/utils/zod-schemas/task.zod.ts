import { ICONS } from '@/shared/data'
import { z } from 'zod'


export const ICON_NAMES = Object.keys(ICONS) as [string, ...string[]]

export const TaskSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	// TODO: Update dueDate new object
	dueDate: z.date().min(new Date(), 'Due date must be in the future'),
	icon: z.enum(ICON_NAMES, {
		message: 'Invalid icon selected'
	})
})
