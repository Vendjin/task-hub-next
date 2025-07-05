import { useFormContext } from 'react-hook-form'

export const ProgressInput = () => {
	const { register, watch } = useFormContext()
	const value = watch('progress') ?? 0

	return (
		<div className='space-y-2'>
			<div className='flex items-center justify-between'>
				<label htmlFor='progress' className='text-muted-foreground text-sm font-medium'>
					Progress
				</label>
				<span className='text-sm font-semibold'>{value}%</span>
			</div>
			<input
				id='progress'
				type='range'
				min={0}
				max={100}
				step={1}
				{...register('progress')}
				className='accent-primary w-full cursor-pointer'
			/>
		</div>
	)
}
