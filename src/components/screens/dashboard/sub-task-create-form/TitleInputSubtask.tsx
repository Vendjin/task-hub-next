import { Input } from '@/components'
import React from 'react'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form'

interface ITitleInputProps {
	title?: string
}

export const TitleInputSubtask: React.FC<ITitleInputProps> = () => {
	const { control } = useFormContext()

	return (
		<FormField
			control={control}
			name='title'
			rules={{
				required: 'Title is required',
				minLength: {
					value: 3,
					message: 'Title must be at least 3 characters'
				},
				validate: value =>
					/^[a-zA-Zа-яА-Я0-9 _-]+$/.test(value) ||
					'Only letters, numbers, dashes, and underscores are allowed'
			}}
			render={({ field }) => (
				<FormItem>
					<FormLabel className='text-muted-foreground'>Title</FormLabel>
					<FormControl>
						<Input placeholder='Enter task title' {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
