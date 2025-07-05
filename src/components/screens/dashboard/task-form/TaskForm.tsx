'use client'

import { LAST_TASKS_DATA } from '@/shared/data'
import type { ITaskCard, ITaskFormValues } from '@/shared/types'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { DeadLineInput } from '@/components/screens/dashboard/task-form/DeadLineInput'
import { IconSelector } from '@/components/screens/dashboard/task-form/IconSelector'
import { ProgressInput } from '@/components/screens/dashboard/task-form/ProgressInput'
import { TitleInput } from '@/components/screens/dashboard/task-form/TitleInput'
import { Button, Form } from '@/components/ui'

import { useSetDefaultValuesTaskForm } from '@/hooks/useSetDefaultValues'

interface ITaskFormProps {
	task: ITaskCard
}

export const TaskForm: React.FC<ITaskFormProps> = ({ task }) => {
	const [loading, setLoading] = useState(false)

	const methods = useForm<ITaskFormValues>({
		defaultValues: {
			title: ''
		}
	})
	const { handleSubmit, reset } = methods

	useSetDefaultValuesTaskForm(task, reset)

	const onSubmit = async (data: ITaskFormValues) => {
		if (!task) return
		setLoading(true)

		await new Promise(resolve => setTimeout(resolve, 1500))

		const updatedTask: ITaskCard = {
			...task,
			title: data.title,
			progress: data.progress,
			dueInDays: data.dueDate.getTime(),
			icon: data.icon
		}

		const taskIndex = LAST_TASKS_DATA.findIndex(t => t.id === task.id)
		if (taskIndex !== -1) {
			LAST_TASKS_DATA[taskIndex] = updatedTask
		}

		console.log('Form submitted: ', LAST_TASKS_DATA[taskIndex])
		setLoading(false)
	}

	return (
		<Form {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
				<TitleInput />
				<DeadLineInput />
				<ProgressInput />
				<IconSelector />

				<Button type='submit' className='w-full' disabled={loading}>
					{loading ? (
						<>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							Please wait
						</>
					) : (
						'Save changes'
					)}
				</Button>
			</form>
		</Form>
	)
}
