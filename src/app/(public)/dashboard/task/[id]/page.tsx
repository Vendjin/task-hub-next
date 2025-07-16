import React from 'react'

type TParams = { id: string }

export default async function TaskPage({ params }: { params: Promise<TParams> }) {
	const { id } = await params

	return <>ТАСК ПЕЙДЖ {id}</>
}
