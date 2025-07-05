import { TaskInfoModal } from '@/components'
import { LAST_TASKS_DATA } from '@/shared/data'
import { notFound } from 'next/navigation'
import React from 'react'

type TParams = { id: string }

export default async function TaskModalPage({ params }: { params: Promise<TParams> }) {
	const { id } = await params
	const task = LAST_TASKS_DATA.find(task => task.id === Number(id))

	if (!task) {
		return notFound()
	}

	return <TaskInfoModal task={task} />
}
