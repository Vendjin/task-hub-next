import { useCallback, useEffect } from 'react'
import { type UseFormReset } from 'react-hook-form'
import { z } from 'zod'

import type { IconName } from '@/utils/icon-map'
import { TaskSchema } from '@/utils/zod-schemas'

import type { Database } from '@/shared/types/db.types'

export const useSetDefaultValuesTaskForm = (
	task: Database['public']['Tables']['task']['Update'] | undefined,
	reset: UseFormReset<z.infer<typeof TaskSchema>>
) => {
	const setDefaultValues = useCallback(() => {
		if (!task) return

		reset({
			title: task.title || '',
			dueDate: new Date(),
			icon: (task.icon as IconName) || 'BookOpen'
		})
	}, [task, reset])

	useEffect(() => {
		setDefaultValues()
	}, [setDefaultValues])
}
