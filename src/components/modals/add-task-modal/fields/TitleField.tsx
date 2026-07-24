import { useFormContext } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'

export const TitleField = () => {
	const { control } = useFormContext()

	return (
		<FormField
			control={control}
			name='title'
			render={({ field }) => (
				<FormItem>
					<FormLabel>Title</FormLabel>
					<FormControl>
						<Input placeholder='Enter task title' {...field} aria-label='Enter task title' />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
