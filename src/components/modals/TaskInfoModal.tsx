'use client'

import { Dialog } from '@/components'
import { taskClientGetById } from '@/services/tasks'
import { useQuery } from '@tanstack/react-query'
import { notFound, useRouter } from 'next/navigation'
import React from 'react'

import { TaskEditForm } from '@/components/screens/dashboard/task-edit-form'
import { DialogContent, DialogTitle } from '@/components/ui/Dialog'

interface ITaskInfoModalProps {
	taskId: string
}

export const TaskInfoModal: React.FC<ITaskInfoModalProps> = ({ taskId }) => {
	const router = useRouter()

	const {
		data: taskData,
		isLoading,
		isError
	} = useQuery({
		queryKey: ['task', 'id'],
		queryFn: () => taskClientGetById(taskId),
		enabled: !!taskId
	})

	if (isLoading) {
		return null
	}

	if (!taskData || isError) {
		return notFound()
	}

	return (
		<Dialog open={true} onOpenChange={() => router.back()}>
			<DialogContent className='w-[1060px] max-w-[1060px] p-4 dark:bg-[#404040]'>
				<DialogTitle className='flex justify-center pt-1'>Edit: {taskData.title}</DialogTitle>
				<TaskEditForm task={taskData} />
			</DialogContent>
		</Dialog>
	)
}
