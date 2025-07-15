import { Input } from '@/components'
import React from 'react'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form'

interface ILoginInputProps {
	title?: string
}

export const LoginInput: React.FC<ILoginInputProps> = () => {
	const { control } = useFormContext()

	return (
		<FormField
			control={control}
			name='login'
			rules={{
				required: 'Login is required',
				minLength: {
					value: 3,
					message: 'Login must be at least 3 characters'
				},
				validate: value =>
					/^[a-zA-Zа-яА-Я0-9 _.@-]+$/.test(value) ||
					'Only letters, numbers, dashes, and underscores are allowed'
			}}
			render={({ field }) => (
				<FormItem>
					<FormLabel className='text-muted-foreground'>Login</FormLabel>
					<FormControl>
						<Input type='email' placeholder='Enter Login' {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
