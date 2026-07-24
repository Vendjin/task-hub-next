import { taskClientCreate } from '@/services/tasks'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import type { Database } from '@/shared/types/db.types'

export function useAddTask({ closeModal }: { closeModal: () => void }) {
	const { mutate, isPending } = useMutation({
		mutationKey: ['task', 'create'],
		mutationFn: (data: Database['public']['Tables']['task']['Insert']) => taskClientCreate(data),
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
