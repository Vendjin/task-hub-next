'use client'

import { taskClientUpdate } from '@/services/tasks'
import type { TTask } from '@/shared/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { DeadLineInput } from '@/components/screens/dashboard/task-edit-form/DeadLineInput'
import { IconSelector } from '@/components/screens/dashboard/task-edit-form/IconSelector'
import { TitleInput } from '@/components/screens/dashboard/task-edit-form/TitleInput'
import { Form, SubmitButton } from '@/components/ui'

import { useSetDefaultValuesTaskForm } from '@/hooks/useSetDefaultValues'

import { TaskSchema } from '@/utils/zod-schemas'

import type { Database } from '@/shared/types/db.types'

interface ITaskFormProps {
	task: Omit<TTask, 'task_participants'>
}

export const TaskEditForm: React.FC<ITaskFormProps> = ({ task }) => {
	const router = useRouter()

	// const { data: taskData } = useQuery({
	// 	queryKey: ['task', 'id'],
	// 	queryFn: () => taskClientGetById(task),
	// 	enabled: !!task
	// })

	const methods = useForm<z.infer<typeof TaskSchema>>({
		resolver: zodResolver(TaskSchema),
		defaultValues: {
			title: '',
			dueDate: undefined,
			icon: undefined
		}
	})

	useSetDefaultValuesTaskForm(task, methods.reset)

	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['task', 'update', task],
		mutationFn: (data: Database['public']['Tables']['task']['Update']) => taskClientUpdate(task.id, data),
		onSuccess: () => {
			toast.success('Task updated successfully', {
				id: 'task-update-success'
			})
			router.back()
		},
		onError: error => {
			toast.error('Failed to update task', {
				id: 'task-update-error',
				description: error as unknown as string
			})
		}
	})

	const onSubmit: SubmitHandler<z.infer<typeof TaskSchema>> = data => {
		console.log(data.dueDate.toISOString())
		mutate({
			title: data.title,
			due_date: format(data.dueDate, 'yyyy-MM-dd'),
			icon: data.icon
		})
	}

	return (
		<Form {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit, errors => console.log('ОШИБКИ:', errors))}
				className='space-y-4'
			>
				<TitleInput />
				<DeadLineInput />
				<IconSelector />
				<SubmitButton loading={isPending} title='Save changes' />
			</form>
		</Form>
	)
}
