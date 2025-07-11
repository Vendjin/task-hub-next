import type { ITaskCard } from '@/shared/types'
import { Image as ImageIcon, Link as LinkIcon, MessageSquareText, Pencil, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface ILastTaskCardToolbarProps {
	taskCard: ITaskCard
}

export const LastTaskCardToolbar: React.FC<ILastTaskCardToolbarProps> = ({ taskCard }) => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center justify-between gap-4 text-sm'>
				<div className='flex items-center gap-1'>
					<MessageSquareText className='h-5 w-5 text-neutral-400' />
					<span>{taskCard.comments.length}</span>
				</div>

				<div className='flex items-center gap-1'>
					<ImageIcon className='h-5 w-5 text-neutral-400' />
					<span>{taskCard.attachments.length}</span>
				</div>

				<div className='flex items-center gap-1'>
					<LinkIcon className='h-4.5 w-4.5 text-neutral-400' />
					<span>{taskCard.links.length}</span>
				</div>
			</div>

			<div className='flex items-center gap-2'>
				<button className='bg-primary-active border-primary-active flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border'>
					<Plus className='h-4 w-4' />
				</button>
				<Link
					href={`/task/${taskCard.id}`}
					className='border-primary hover:text-primary inline-flex h-8 w-8 items-center justify-center rounded-full border text-neutral-400 transition-colors'
				>
					<Pencil className='h-4 w-4' />
				</Link>
			</div>
		</div>
	)
}
