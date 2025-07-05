'use client'

import { Dialog } from '@/components'
import type { ITaskCard } from '@/shared/types'
import { useRouter } from 'next/navigation'
import React from 'react'

import { TaskForm } from '@/components/screens/dashboard/task-form'
import { DialogContent, DialogTitle } from '@/components/ui/Dialog'

interface ITaskInfoModalProps {
	task: ITaskCard
}

export const TaskInfoModal: React.FC<ITaskInfoModalProps> = ({ task }) => {
	const router = useRouter()

	return (
		<Dialog open={Boolean(task)} onOpenChange={() => router.back()}>
			<DialogContent className='w-[1060px] max-w-[1060px] p-4 dark:bg-[#404040]'>
				<DialogTitle className='flex justify-center pt-1'>Edit: {task.title}</DialogTitle>
				<TaskForm task={task} />
			</DialogContent>
		</Dialog>
	)
}
