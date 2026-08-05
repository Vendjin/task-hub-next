import { ICONS } from '@/shared/data'
import { z } from 'zod'

export const ICON_NAMES = Object.keys(ICONS) as [string, ...string[]]

const sanitizeInput = (input: string): string => {
	return input
		.trim()
		.replace(/<script[^>]*>.*?<\/script>/gi, '')
		.replace(/<[^>]*>/g, '')
		.replace(/javascript:/gi, '')
		.replace(/on\w+\s*=/gi, '')
}

const dangerousPatterns = [
	/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	/javascript:/gi,
	/on\w+\s*=/gi,
	/<iframe\b[^>]*>/gi,
	/<object\b[^>]*>/gi,
	/<embed\b[^>]*>/gi,
	/data:/gi,
	/vbscript:/gi
]

const TaskSchema = z.object({
	title: z
		.string()
		.min(3, 'Title must be at least 3 characters')
		.max(100, 'Title must be less than 100 characters')
		.transform(val => sanitizeInput(val))
		.refine(val => !dangerousPatterns.some(pattern => pattern.test(val)), {
			message: 'Title contains forbidden characters or patterns'
		}),
	dueDate: z.date().min(new Date().setHours(0, 0, 0, 0), 'Due date must be today or in the future'),
	icon: z.enum(ICON_NAMES, {
		message: 'Invalid icon selected'
	}),
	project_id: z.string().optional(),
	participants: z.array(z.string()).optional()
})

export default TaskSchema
