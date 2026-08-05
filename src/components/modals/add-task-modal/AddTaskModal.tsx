'use client'

import { DateField } from './fields/DateField'
import { IconField } from './fields/IconField'
import { TitleField } from './fields/TitleField'
import { Button, Dialog } from '@/components'
import { useProfile } from '@/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { SelectProject } from '@/components/modals/add-task-modal/fields/SelectProject'
import { useAddTask } from '@/components/modals/add-task-modal/useAddTask'
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/Dialog'
import { Form } from '@/components/ui/Form'
import { SubmitButton } from '@/components/ui/SubmitButton'

import { TaskSchema } from '@/utils/zod-schemas'

interface IAddTaskModalProps {
	className?: string
	onSuccess?: () => void
}

export const AddTaskModal: React.FC<IAddTaskModalProps> = ({ onSuccess }) => {
	const [open, setOpen] = useState(false)
	const { user } = useProfile()

	const methods = useForm<z.infer<typeof TaskSchema>>({
		resolver: zodResolver(TaskSchema),
		defaultValues: {
			title: '',
			dueDate: new Date(),
			icon: undefined,
			project_id: undefined
		}
	})

	const { mutate, isPending } = useAddTask({
		closeModal: () => {
			setOpen(false)
			methods.reset()
			onSuccess?.()
		}
	})

	const onSubmit = (data: z.infer<typeof TaskSchema>) => {
		if (!user?.id) {
			console.error('User not found')
			return
		}

		mutate({
			title: data.title,
			due_date: data.dueDate.toISOString(),
			icon: data.icon,
			owner_id: user.id,
			project_id: data.project_id
		})
	}

	const handleOpenChange = (newOpen: boolean) => {
		setOpen(newOpen)
		if (!newOpen) {
			methods.reset()
		}
	}

	return (
		<Dialog open={open} onOpenChange={handleOpenChange} modal={false}>
			<DialogTrigger asChild>
				<Button variant='outline' className='hover:text-primary-active cursor-pointer text-neutral-400'>
					Add Task
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-lg' onPointerDownOutside={e => e.preventDefault()}>
				<DialogHeader>
					<DialogTitle>Add New Task</DialogTitle>
				</DialogHeader>
				<Form {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-4'>
						<TitleField />
						<DateField />
						<IconField />
						<SelectProject />
						<SubmitButton loading={isPending} title='Create Task' />
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
