'use client'

import { Dialog } from '@/components'
import { taskClientGetById } from '@/services/tasks'
import { useQuery } from '@tanstack/react-query'
import { notFound, useRouter } from 'next/navigation'
import React from 'react'

import { SubTaskCreateForm } from '@/components/screens/dashboard/sub-task-create-form'
import { DialogContent, DialogTitle } from '@/components/ui/Dialog'

interface IAddSubTaskModalProps {
	taskId: string
}

export const AddSubTaskModal: React.FC<IAddSubTaskModalProps> = ({ taskId }) => {
	const router = useRouter()
	const {
		data: taskData,
		isLoading,
		isError
	} = useQuery({
		queryKey: ['task', taskId],
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
		<Dialog open={Boolean(taskData)} onOpenChange={() => router.back()}>
			<DialogContent className='w-[1060px] max-w-[1060px] p-4 dark:bg-[#404040]'>
				<DialogTitle className='flex justify-center pt-1'>Add Subtask for: {taskData.title}</DialogTitle>
				<SubTaskCreateForm taskId={taskId} />
			</DialogContent>
		</Dialog>
	)
}
