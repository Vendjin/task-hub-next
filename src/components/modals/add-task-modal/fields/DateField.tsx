import { cn } from '@/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Calendar } from '@/components/ui/Calendar'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'

export const DateField = () => {
	const { control } = useFormContext()
	const [isCalendarOpen, setIsCalendarOpen] = useState(false)

	return (
		<FormField
			control={control}
			name='dueDate'
			render={({ field }) => (
				<FormItem className='flex flex-col'>
					<FormLabel>Due Date</FormLabel>
					<Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant='outline'
									className={cn(
										'w-full pl-3 text-left font-normal',
										!field.value && 'text-muted-foreground'
									)}
								>
									{field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
									<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
								</Button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0' align='start'>
							<Calendar
								mode='single'
								selected={field.value}
								onSelect={date => {
									field.onChange(date)
									if (date) setIsCalendarOpen(false)
								}}
								autoFocus
								captionLayout='dropdown'
								disabled={date => date < new Date(new Date().setHours(0, 0, 0, 0))}
							/>
						</PopoverContent>
					</Popover>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
