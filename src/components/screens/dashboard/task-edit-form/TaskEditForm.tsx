'use client'

import type { TTask } from '@/shared/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { DeadLineInput } from '@/components/screens/dashboard/task-edit-form/DeadLineInput'
import { IconSelector } from '@/components/screens/dashboard/task-edit-form/IconSelector'
import { TitleInput } from '@/components/screens/dashboard/task-edit-form/TitleInput'
import { useSetDefaultValuesTaskForm } from '@/components/screens/dashboard/task-edit-form/useSetDefaultValues'
import { useTaskQueries } from '@/components/screens/dashboard/task-edit-form/useTaskQueries'
import { Form, SubmitButton } from '@/components/ui'

import { TaskSchema } from '@/utils/zod-schemas'

interface ITaskFormProps {
	task: Omit<TTask, 'task_participants'>
}

export const TaskEditForm: React.FC<ITaskFormProps> = ({ task }) => {
	const methods = useForm<z.infer<typeof TaskSchema>>({
		resolver: zodResolver(TaskSchema),
		defaultValues: {
			title: '',
			dueDate: undefined,
			icon: undefined
		}
	})
	useSetDefaultValuesTaskForm(task, methods.reset)

	const { mutate, isPending } = useTaskQueries(task)

	const onSubmit: SubmitHandler<z.infer<typeof TaskSchema>> = data => {
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
