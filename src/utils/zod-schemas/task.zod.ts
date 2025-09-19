import { z } from 'zod'

import { ICON_NAMES } from '@/utils/icon-map'

export const TaskSchema = z.object({
	title: z.string().min(1, 'Title is required'),
	// TODO: Update dueDate new object
	due_date: z.date().min(new Date(), 'Due date must be in the future'),
	icon: z.enum(ICON_NAMES, {
		message: 'Invalid icon selected'
	})
})
