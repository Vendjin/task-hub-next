'use client'

import type { TProjects } from '@/shared/types'
import { cn } from '@/utils'
import React from 'react'

import { Chat } from '@/app/(public)/dashboard/chat/Chat'

import { ProjectCharts, ProjectStats, TasksTimeline } from '@/components/screens/dashboard'
import { LastTasks } from '@/components/screens/dashboard/last-tasks'
import { Heading } from '@/components/ui'

import type { TGetProjectStatsResponse, TGetServerProjectChartDataResponse } from '@/shared/types/statistics.types'
import type { TGetTasksResponse, TGetTodayTasksResponse } from '@/shared/types/task.types'

interface IDashboardProps {
	tasks: TGetTasksResponse
	todayTasks: TGetTodayTasksResponse
	userId: string
	projectStats: TGetProjectStatsResponse
	projectChartData: TGetServerProjectChartDataResponse
	projects: TProjects
}

export const Dashboard: React.FC<IDashboardProps> = ({
	tasks,
	todayTasks,
	userId,
	projectStats,
	projectChartData,
	projects
}) => {
	return (
		<div className='grid h-screen grid-cols-[3.2fr_1fr]'>
			<div className='overflow-y-auto p-5'>
				<div className='mb-6 flex items-center justify-between'>
					<Heading title='Dashboard' />
				</div>

				<div className='flex gap-6'>
					<ProjectStats projectStats={projectStats} />
					<ProjectCharts projectChartData={projectChartData} />
				</div>

				<div className={cn('mb-7 grid gap-6', 'grid-cols-[100%]')}>
					<LastTasks tasks={tasks} projects={projects} />
					<TasksTimeline tasks={todayTasks} />
				</div>
			</div>

			<Chat userId={userId} />
		</div>
	)
}
