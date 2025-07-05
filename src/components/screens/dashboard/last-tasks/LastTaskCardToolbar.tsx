import React from 'react'
import type { ITaskCard } from '@/shared/types'
import { Image as ImageIcon, Link as LinkIcon, MessageSquareText, Pencil, Plus } from 'lucide-react'
import Link from 'next/link'

interface ILastTaskCardToolbarProps {
	taskCard: ITaskCard
}

export const LastTaskCardToolbar: React.FC<ILastTaskCardToolbarProps> = ({ taskCard }) => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center justify-between gap-4 text-sm '>
				<div className='flex items-center gap-1'>
					<MessageSquareText className='text-neutral-400 w-5 h-5' />
					<span>{taskCard.comments}</span>
				</div>

				<div className='flex items-center gap-1'>
					<ImageIcon className='text-neutral-400 w-5 h-5' />
					<span>{taskCard.attachments}</span>
				</div>

				<div className='flex items-center gap-1'>
					<LinkIcon className='text-neutral-400 w-4.5 h-4.5' />
					<span>{taskCard.links}</span>
				</div>
			</div>

			<div className='flex items-center gap-2'>
				<button className='w-8 h-8 flex items-center justify-center bg-primary-active border border-primary-active rounded-full cursor-pointer'>
					<Plus className='w-4 h-4' />
				</button>
				<Link
					href={`/task/${taskCard.id}`}
					className='inline-flex w-8 h-8 items-center justify-center border border-primary rounded-full text-neutral-400 hover:text-primary transition-colors'
				>
					<Pencil className='w-4 h-4' />
				</Link>
			</div>
		</div>
	)
}
