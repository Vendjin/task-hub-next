'use client'

import type { ITaskCard, ITaskFormValues } from '@/shared/types'
import { useTasksStore } from '@/store'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { DeadLineInput } from '@/components/screens/dashboard/task-form/DeadLineInput'
import { IconSelector } from '@/components/screens/dashboard/task-form/IconSelector'
import { TitleInput } from '@/components/screens/dashboard/task-form/TitleInput'
import { Form, SubmitButton } from '@/components/ui'

import { useSetDefaultValuesTaskForm } from '@/hooks/useSetDefaultValues'

interface ITaskFormProps {
	taskId: string
}

export const TaskForm: React.FC<ITaskFormProps> = ({ taskId }) => {
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const task = useTasksStore(state => state.getTask(Number(taskId)))
	const taskUpdate = useTasksStore(state => state.updateTask)

	const methods = useForm<ITaskFormValues>({
		defaultValues: {
			title: ''
		}
	})
	const { handleSubmit, reset } = methods

	useSetDefaultValuesTaskForm(task as ITaskCard, reset)

	const onSubmit = async (data: ITaskFormValues) => {
		if (!task) return
		setLoading(true)

		await new Promise(resolve => setTimeout(resolve, 1500))

		taskUpdate(task.id, draftTask => {
			draftTask.title = data.title
			draftTask.dueDate.date = data.dueDate
			draftTask.icon = data.icon
		})

		toast('Update completed', {
			description: 'Данные формы успешно обновлены',
			id: 'addTask',
			action: {
				label: 'Complete',
				onClick: () => console.log('Тут можно сделать сайд-эффекты', task)
			}
		})
		setLoading(false)
		router.back()
	}

	return (
		<Form {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
				<TitleInput />
				<DeadLineInput />
				<IconSelector />

				<SubmitButton loading={loading} title='Save changes' />
			</form>
		</Form>
	)
}
