import { Button, Form } from '@/components'
import type { ISubTaskForm } from '@/shared/types'
import { useTasksStore } from '@/store'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { TitleInputSubtask } from '@/components/screens/dashboard/sub-task-form/TitleInputSubtask'

interface ISubTaskFormProps {
	taskId: string
}

export const SubTaskForm: React.FC<ISubTaskFormProps> = ({ taskId }) => {
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const task = useTasksStore(state => state.getTask(Number(taskId)))
	const addSubTask = useTasksStore(state => state.addSubTask)

	const methods = useForm<ISubTaskForm>({
		defaultValues: {
			title: '',
			isComplete: false
		}
	})
	const { handleSubmit } = methods

	const onSubmit = async (data: ISubTaskForm) => {
		if (!task) return
		setLoading(true)

		await new Promise(resolve => setTimeout(resolve, 1500))

		addSubTask(task.id, {
			title: data.title,
			isComplete: data.isComplete
		})

		toast('Sub Task added.', {
			description: `Sub Task added completely for ${task.title}`,
			id: 'subTask',
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
				<TitleInputSubtask />

				<Button type='submit' className='w-full' disabled={loading}>
					{loading ? (
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
