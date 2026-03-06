import { cn } from '@/utils'
import React, { type CSSProperties } from 'react'

interface ISkeletonLoaderProps {
	count?: number
	style?: CSSProperties
	className?: string
}

export const SkeletonLoader: React.FC<ISkeletonLoaderProps> = ({ count = 1, style, className }) => {
	return (
		<>
			{Array.from({ length: count }, (_, index) => (
				<div
					key={index}
					className={cn('bg-card mb-[0.65rem] h-10 animate-pulse rounded-sm last:mb-0', className)}
					style={style}
				/>
			))}
		</>
	)
}
