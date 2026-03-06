import { Button, Form } from '@/components'
import { createClientSubTask } from '@/services/tasks'
import type { ISubTaskForm } from '@/shared/types'
import { useMutation } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { TitleInputSubtask } from '@/components/screens/dashboard/sub-task-create-form/TitleInputSubtask'

import type { Database } from '@/shared/types/db.types'

interface ISubTaskFormProps {
	taskId: string
}

export const SubTaskCreateForm: React.FC<ISubTaskFormProps> = ({ taskId }) => {
	const router = useRouter()

	const methods = useForm<ISubTaskForm>({
		defaultValues: {
			title: ''
		}
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['addSubTask', taskId],
		mutationFn: (data: Database['public']['Tables']['sub_task']['Insert']) => createClientSubTask(taskId, data),
		onSuccess: () => {
			toast.success('Subtask added successfully', {
				id: 'subtask-add-success'
			})
			methods.reset({ title: '' })
		},
		onError: error => {
			toast.error('Failed to add subtask', {
				id: 'subtask-add-error',
				description: error as unknown as string
			})
		}
	})

	const onSubmit = async (data: ISubTaskForm) => {
		mutate(data)
		router.back()
	}

	return (
		<Form {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-4'>
				<TitleInputSubtask />

				<Button type='submit' className='w-full' disabled={isPending}>
					{isPending ? (
						<>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							Please wait
						</>
					) : (
						'Add sub task'
					)}
				</Button>
			</form>
		</Form>
	)
}
