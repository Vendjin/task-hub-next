import { Button, Calendar } from '@/components'
import { cn } from '@/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import React from 'react'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'

interface IDeadLineInputProps {
	title?: string
}

export const DeadLineInput: React.FC<IDeadLineInputProps> = () => {
	const { control } = useFormContext()

	return (
		<FormField
			control={control}
			name='dueDate'
			render={({ field }) => (
				<FormItem className='flex w-full flex-col'>
					<FormLabel className='text-muted-foreground'>Deadline</FormLabel>
					<Popover>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant={'outline'}
									className={cn('l-3 text-left font-normal', !field.value && 'text-muted-foreground')}
								>
									{field.value instanceof Date && !isNaN(field.value.getTime()) ? (
										format(field.value, 'PPP')
									) : (
										<span>Pick a date</span>
									)}

									<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
								</Button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0' align='start'>
							<Calendar
								mode='single'
								selected={field.value}
								onSelect={field.onChange}
								captionLayout='dropdown'
							/>
						</PopoverContent>
					</Popover>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
