import type { TTask } from '@/shared/types'
import React from 'react'

import { LastTaskCardHeader } from '@/components/screens/dashboard/last-tasks/LastTaskCardHeader'
import { LastTaskCardProgressBar } from '@/components/screens/dashboard/last-tasks/LastTaskCardProgressBar'
import { LastTaskCardToolbar } from '@/components/screens/dashboard/last-tasks/LastTaskCardToolbar'

interface ILastTaskCardProps {
	taskCard: TTask
	isColor?: boolean
	isMinimal?: boolean
}

export const LastTaskCard: React.FC<ILastTaskCardProps> = ({ taskCard }) => {
	return (
		<div className='bg-block flex flex-col gap-2 overflow-auto rounded-2xl p-3'>
			<LastTaskCardHeader task={taskCard} />
			<LastTaskCardProgressBar subTasks={taskCard.sub_task} />
			<LastTaskCardToolbar taskCard={taskCard} />
		</div>
	)
}
