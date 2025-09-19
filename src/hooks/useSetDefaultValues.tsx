import type { ITaskCard, ITaskFormValues } from '@/shared/types'
import { useCallback, useEffect } from 'react'
import { type UseFormReset } from 'react-hook-form'

export const useSetDefaultValuesTaskForm = (task: ITaskCard, reset: UseFormReset<ITaskFormValues>) => {
	const setDefaultValues = useCallback(() => {
		if (!task) return

		reset({
			title: task.title || '',
			dueDate: new Date(),
			icon: task.icon
		})
	}, [task, reset])

	useEffect(() => {
		setDefaultValues()
	}, [setDefaultValues])
}
