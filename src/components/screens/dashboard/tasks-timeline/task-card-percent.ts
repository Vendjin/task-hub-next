import type { TTask } from '@/shared/types'
import { parseTime } from '@/utils'
import { getHours, getMinutes } from 'date-fns'

export function getTaskCardPercent(task: TTask) {
	if (!task.start_time || !task.end_time) return null

	const correctStartTime = parseTime(task.due_date, task.start_time)
	const correctEndTime = parseTime(task.due_date, task.end_time)

	const start = getHours(correctStartTime)
	const end = getHours(correctEndTime)

	const startMinutes = getMinutes(correctStartTime)
	const endMinutes = getMinutes(correctEndTime)

	const startPercent = (((start - 9) * 60 + startMinutes) / ((17 - 9) * 60)) * 100
	const endPercent = (((end - 9) * 60 + endMinutes) / ((17 - 9) * 60)) * 100
	const widthPercent = endPercent - startPercent

	return {
		startPercent,
		widthPercent
	}
}
