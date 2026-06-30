import type { TChatMessageWithProfile } from '@/shared/types'
import { cn } from '@/utils'
import { format } from 'date-fns'
import Image from 'next/image'
import { type FC, memo } from 'react'

interface IChatMessageProps {
	message: TChatMessageWithProfile
	userId: string
}

const ChatMessage: FC<IChatMessageProps> = ({ message, userId }) => {
	const isOwnMessage = userId === message.user_id

	return (
		<div key={message.id} className={cn('item-end flex gap-2', isOwnMessage ? 'justify-end' : 'justify-start')}>
			{!isOwnMessage && (
				<Image
					src={message?.profile?.avatar_path?.trim() || ''}
					alt={message?.profile?.name || ''}
					width={32}
					height={32}
					className='h-11 w-11 rounded-full'
				/>
			)}

			<div className='max-w-[75%]'>
				<div className='mb-0.5 text-xs text-gray-300'>
					{isOwnMessage ? (
						<span className='space-x-1'>
							<span className='opacity-50'>
								{message.created_at ? format(new Date(message.created_at), 'hh:mm a') : ''}
								<span className='font-medium'>Me</span>
							</span>
						</span>
					) : (
						<span className='space-x-1'>
							<span className='opacity-50'>
								<span className='font-medium'>{message?.profile?.name}</span>
								<span className='opacity-50'>
									{message.created_at ? format(new Date(message.created_at), 'hh:mm a') : ''}
								</span>
							</span>
						</span>
					)}
				</div>

				<div
					className={cn(
						'rounded-xl px-4 py-2 text-sm text-white',
						isOwnMessage ? 'rounded-br-none bg-[#6a54FF]' : 'rounded-bl-none bg-[#6e63a7]'
					)}
				>
					{message.text}
				</div>
			</div>

			{isOwnMessage && (
				<Image
					src={message?.profile?.avatar_path?.trim() || ''}
					alt={message.profile?.name || ''}
					width={32}
					height={32}
					className='h-11 w-11 rounded-full'
				/>
			)}
		</div>
	)
}

export default memo(ChatMessage)
