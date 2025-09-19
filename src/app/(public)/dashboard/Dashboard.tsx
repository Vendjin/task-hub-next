'use client'

import React from 'react'

import { Chat } from '@/app/(public)/dashboard/Chat'

import { ProjectCharts, ProjectStats, TasksTimeline } from '@/components/screens/dashboard'
import { LastTasks } from '@/components/screens/dashboard/last-tasks'
import { HeadingDashboard } from '@/components/ui'

import type { TGetTasksResponse } from '@/shared/types/task.types'

interface IDashboardProps {
	className?: string
	tasks: TGetTasksResponse
}

export const Dashboard: React.FC<IDashboardProps> = ({ tasks }) => {
	return (
		<div className='grid h-screen grid-cols-[3.2fr_1fr]'>
			<div className='flex flex-col gap-4 overflow-y-auto p-5'>
				<HeadingDashboard />

				<div className='flex gap-6'>
					<ProjectStats />
					<ProjectCharts />
				</div>

				<LastTasks tasks={tasks} />
				<TasksTimeline />
			</div>

			<Chat />
		</div>
	)
}
