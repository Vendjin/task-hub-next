'use client'

import { ICONS } from '@/shared/data'
import type { ITaskFormValues } from '@/shared/types'
import { cn } from '@/utils'
import { useFormContext, useWatch } from 'react-hook-form'

export const IconSelector = () => {
	const { setValue } = useFormContext<ITaskFormValues>()
	const selectedIcon = useWatch({ name: 'icon' })

	return (
		<div className='flex flex-col gap-1'>
			<p className='text-muted-foreground text-sm font-medium'>Task Type</p>
			<div className='flex flex-wrap justify-between'>
				{Object.entries(ICONS).map(([key, { value }]) => {
					const isActive = key === selectedIcon

					return (
						<button
							type='button'
							key={key}
							onClick={() => setValue('icon', key)}
							className={cn(
								'rounded-md border p-2',
								isActive
									? 'border-primary text-primary'
									: 'border-border hover:border-primary/60 hover:text-primary'
							)}
						>
							{value}
						</button>
					)
				})}
			</div>
		</div>
	)
}
