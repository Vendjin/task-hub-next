import React from 'react'

export interface IAssignee {
	name: string
	avatar: string
}

export interface ITaskCard {
	id: number
	title: string
	dueInDays: number
	progress: number
	comments: number
	attachments: number
	links: number
	assignees: IAssignee[]
	icon: string
}

export type TProgressFilter = 'all' | 'not_started' | 'in_progress' | 'done'

export type TSortedTasks = 'none' | 'asc' | 'desc'

export interface ITaskIcon {
	label: string
	value: React.ReactNode | string
}
