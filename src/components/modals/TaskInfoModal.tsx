'use client'

import { Dialog } from '@/components'
import { useTasksStore } from '@/store'
import { notFound, useRouter } from 'next/navigation'
import React from 'react'

import { TaskForm } from '@/components/screens/dashboard/task-form'
import { DialogContent, DialogTitle } from '@/components/ui/Dialog'

interface ITaskInfoModalProps {
	taskId: string
}

export const TaskInfoModal: React.FC<ITaskInfoModalProps> = ({ taskId }) => {
	const router = useRouter()
	const task = useTasksStore(state => state.getTask(Number(taskId)))

	if (!task) {
		return notFound()
	}

	return (
		<Dialog open={Boolean(task)} onOpenChange={() => router.back()}>
			<DialogContent className='w-[1060px] max-w-[1060px] p-4 dark:bg-[#404040]'>
				<DialogTitle className='flex justify-center pt-1'>Edit: {task.title}</DialogTitle>
				<TaskForm taskId={taskId} />
			</DialogContent>
		</Dialog>
	)
}
