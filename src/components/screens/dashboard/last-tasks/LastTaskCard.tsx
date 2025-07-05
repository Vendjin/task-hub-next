import type { ITaskCard } from '@/shared/types'
import React from 'react'

import { LastTaskCardHeader } from '@/components/screens/dashboard/last-tasks/LastTaskCardHeader'
import { LastTaskCardProgressBar } from '@/components/screens/dashboard/last-tasks/LastTaskCardProgressBar'
import { LastTaskCardToolbar } from '@/components/screens/dashboard/last-tasks/LastTaskCardToolbar'

interface ILastTaskCardProps {
	taskCard: ITaskCard
}

export const LastTaskCard: React.FC<ILastTaskCardProps> = ({ taskCard }) => {
	return (
		<div className='bg-block flex flex-col gap-2 overflow-auto rounded-2xl p-3'>
			<LastTaskCardHeader taskCard={taskCard} />
			<LastTaskCardProgressBar progress={taskCard.progress} />
			<LastTaskCardToolbar taskCard={taskCard} />
		</div>
	)
}
