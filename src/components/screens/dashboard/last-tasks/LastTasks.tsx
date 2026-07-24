'use client'

import { getClientTasks } from '@/services/tasks/task-client.service'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

import { TaskList } from '@/components/elements'
import { AddTaskModal } from '@/components/modals'
import { LastTaskFilter } from '@/components/screens/dashboard/last-tasks/LastTaskFilter'
import { LastTasksSort } from '@/components/screens/dashboard/last-tasks/LastTasksSort'

import type { TGetTasksResponse, TTaskSortBy, TTaskStatus } from '@/shared/types/task.types'

interface ILastTasksProps {
	title?: string
	tasks: TGetTasksResponse
}

export const LastTasks: React.FC<ILastTasksProps> = ({ tasks }) => {
	const [status, setStatus] = useState<TTaskStatus | undefined>(undefined)
	const [sort, setSort] = useState<TTaskSortBy>('asc')

	const { data, isPending, refetch } = useQuery({
		queryKey: ['last-tasks', status, sort],
		queryFn: () => getClientTasks({ status, sortByDueDate: sort }),
		placeholderData: tasks
	})

	const countTasks = data?.length ?? 0

	return (
		<div className='mt-2 flex w-full flex-col gap-2'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<h2 className='text-2xl font-medium'>Last Tasks</h2>
					{countTasks > 0 && (
						<span className='font-medium text-neutral-400 dark:text-neutral-500'>{`(${countTasks})`}</span>
					)}
				</div>

				<div className='flex items-center gap-2'>
					<LastTaskFilter status={status} setStatus={setStatus} />
					<LastTasksSort sort={sort} setSort={setSort} />
					<AddTaskModal onSuccess={() => refetch()} />
				</div>
			</div>

			<TaskList isPending={isPending} tasks={data} countTasks={countTasks} />
		</div>
	)
}
