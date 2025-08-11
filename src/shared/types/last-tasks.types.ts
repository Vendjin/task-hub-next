import React from 'react'

export interface IAssignee {
	id: string
	name: string
	email?: string
	avatarPath: string
}

export interface ISubtask {
	id: string
	title: string
	isComplete: boolean
}

export interface ITaskCard {
	id: number
	title: string
	color?: 'bg-slate-400' | 'bg-violet-300' | 'bg-stone-300' | 'bg-stale-500'
	dueDate: {
		date: Date
		startTime?: Date
		endTime?: Date
	}
	subTasks: ISubtask[]
	comments: string[]
	attachments: string[]
	links: string[]
	assignees: IAssignee[]
	icon: string
}

export type TProgressFilter = 'all' | 'not_started' | 'in_progress' | 'done'

export type TSortedTasks = 'none' | 'asc' | 'desc'

export interface ITaskIcon {
	label: string
	value: React.ReactNode | string
}
