import { ICONS } from '@/shared/data'
import { cn } from '@/utils'
import { useFormContext, useWatch } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip'

export const IconField = () => {
	const { control } = useFormContext()

	const selectedIcon = useWatch({ name: 'icon', control })

	return (
		<FormField
			control={control}
			name='icon'
			render={({ field }) => (
				<FormItem>
					<FormLabel>Task Type</FormLabel>
					<FormControl>
						<div className='flex flex-wrap gap-2'>
							{Object.entries(ICONS).map(([key, { label, value }]) => {
								const isActive = key === selectedIcon

								return (
									<Tooltip key={key}>
										<TooltipTrigger asChild>
											<button
												type='button'
												onClick={() => field.onChange(key)}
												className={cn(
													'rounded-md border p-2 transition-colors',
													isActive
														? 'border-primary text-primary'
														: 'border-border hover:border-primary/60 hover:text-primary'
												)}
											>
												{typeof value === 'string' ? value : value}
											</button>
										</TooltipTrigger>
										<TooltipContent>
											<p className='capitalize'>{label}</p>
										</TooltipContent>
									</Tooltip>
								)
							})}
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
