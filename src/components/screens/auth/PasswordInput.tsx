import { Input } from '@/components'
import React from 'react'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form'

interface IPasswordInputProps {
	title?: string
}

export const PasswordInput: React.FC<IPasswordInputProps> = () => {
	const { control } = useFormContext()

	return (
		<FormField
			control={control}
			name='password'
			rules={{
				required: 'Password is required',
				minLength: {
					value: 6,
					message: 'Login must be at least 6 characters'
				},
				validate: value =>
					/^[a-zA-Zа-яА-Я0-9 _@-]+$/.test(value) ||
					'Only letters, numbers, dashes, and underscores are allowed'
			}}
			render={({ field }) => (
				<FormItem>
					<FormLabel className='text-muted-foreground'>Password</FormLabel>
					<FormControl>
						<Input type='text' placeholder='Enter Password' {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
