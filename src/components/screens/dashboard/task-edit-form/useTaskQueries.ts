import { taskClientUpdate } from '@/services/tasks'
import type { TTask } from '@/shared/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import type { Database } from '@/shared/types/db.types'

export const useTaskQueries = (task: Omit<TTask, 'task_participants'>) => {
	const router = useRouter()
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['task', 'update', task],
		mutationFn: (data: Database['public']['Tables']['task']['Update']) => taskClientUpdate(task.id, data),
		onSuccess: () => {
			toast.success('Task updated successfully', {
				id: 'task-update-success'
			})
			router.back()
			void queryClient.invalidateQueries({ queryKey: ['task', task.id] })
		},
		onError: error => {
			toast.error('Failed to update task', {
				id: 'task-update-error',
				description: error as unknown as string
			})
		}
	})

	return {
		mutate,
		isPending
	}
}
