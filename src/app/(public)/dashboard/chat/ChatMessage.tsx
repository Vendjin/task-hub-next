import { useProfile } from '@/hooks'
import type { TChatMessageWithProfile } from '@/shared/types'
import { cn } from '@/utils'
import Image from 'next/image'
import { type FC } from 'react'

interface IChatMessageProps {
	message: TChatMessageWithProfile
}

export const ChatMessage: FC<IChatMessageProps> = ({ message }) => {
	const { user } = useProfile()

	const isOwnMessage = user?.id === message.user_id

	return (
		<div key={message.id} className={cn('item end flex gap-2', message.own ? 'justify-end' : 'justify-start')}>
			{!isOwnMessage && (
				<Image
					src={message.author.avatarPath || ''}
					alt={message.author.name}
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
								{message.time} <span className='font-medium'>Me</span>
							</span>
						</span>
					) : (
						<span className='space-x-1'>
							<span className='opacity-50'>
								<span className='font-medium'>{message.author.name}</span> {message.time}
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
					src={message.author.avatarPath || ''}
					alt={message.author.name}
					width={32}
					height={32}
					className='h-11 w-11 rounded-full'
				/>
			)}
		</div>
	)
}
