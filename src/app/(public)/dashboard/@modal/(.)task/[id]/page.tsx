import { TaskInfoModal } from '@/components'
import React from 'react'

type TParams = { id: string }

export default async function TaskModalPage({ params }: { params: Promise<TParams> }) {
	const { id } = await params

	return <TaskInfoModal taskId={id} />
}
