import { Button } from '@/components'
import { Loader2 } from 'lucide-react'
import React from 'react'

interface ISubmitButtonProps {
	loading: boolean
	title: string
}

export const SubmitButton: React.FC<ISubmitButtonProps> = ({ loading, title }) => {
	return (
		<Button type='submit' className='w-full' disabled={loading}>
			{loading ? (
				<>
					<Loader2 className='mr-2 h-4 w-4 animate-spin' />
					{title}
				</>
			) : (
				'Save changes'
			)}
		</Button>
	)
}
