'use client'

import { Dialog } from '@/components'
import { useTasksStore } from '@/store'
import { notFound, useRouter } from 'next/navigation'
import React from 'react'

import { SubTaskForm } from '@/components/screens/dashboard/sub-task-form'
import { DialogContent, DialogTitle } from '@/components/ui/Dialog'

interface IAddSubTaskModalProps {
	taskId: string
}

export const AddSubTaskModal: React.FC<IAddSubTaskModalProps> = ({ taskId }) => {
	const router = useRouter()
	const task = useTasksStore(state => state.getTask(Number(taskId)))

	if (!task) {
		return notFound()
	}

	return (
		<Dialog open={Boolean(task)} onOpenChange={() => router.back()}>
			<DialogContent className='w-[1060px] max-w-[1060px] p-4 dark:bg-[#404040]'>
				<DialogTitle className='flex justify-center pt-1'>Add Subtask for: {task.title}</DialogTitle>
				<SubTaskForm taskId={taskId} />
			</DialogContent>
		</Dialog>
	)
}
