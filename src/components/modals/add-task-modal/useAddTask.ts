import { taskClientCreate } from '@/services/tasks'
import type { ICreateTaskService } from '@/shared/types'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useAddTask({ closeModal }: { closeModal: () => void }) {
	const { mutate, isPending } = useMutation({
		mutationKey: ['task', 'create'],
		mutationFn: (data: ICreateTaskService) => taskClientCreate(data),
		onSuccess: () => {
			toast.success('Task created successfully', {
				id: 'task-created-success'
			})
			closeModal()
		},
		onError: error => {
			const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
			toast.error('Failed to create task', {
				id: 'task-created-error',
				description: errorMessage
			})
		}
	})

	return {
		mutate,
		isPending
	}
}
