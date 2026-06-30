import Image from 'next/image'
import React, { useMemo } from 'react'

import ChatInput from '@/app/(public)/dashboard/chat/ChatInput'
import ChatMessage from '@/app/(public)/dashboard/chat/ChatMessage'
import { useChat } from '@/app/(public)/dashboard/chat/useChat'

import { USERS } from '@/shared/data/last-tasks.data'

interface IChatProps {
	userId: string
}

export const Chat: React.FC<IChatProps> = ({ userId }) => {
	const { messages, sendMessage } = useChat({ userId })

	const renderedMessages = useMemo(() => {
		return messages.map(msg => <ChatMessage message={msg} key={msg.id} userId={userId} />)
	}, [messages, userId])

	return (
		<div className='flex h-screen flex-col'>
			<Image
				alt='chat'
				src='/ChatGPTback.png'
				width={400}
				height={400}
				className='chat-header-image w-full flex-shrink-0'
			/>

			<div className='flex min-h-0 flex-1 flex-col'>
				<div className='flex items-center gap-2 bg-[#463C9C] px-3.5 py-2'>
					<Image
						alt='chatOwner'
						src={USERS[2].avatarPath}
						width={40}
						height={40}
						className='h-10 w-10 rounded-full'
					/>
					<div className='leading-snug'>
						<div className='font-medium text-white'>{USERS[2].name}</div>
						<div className='text-xs font-medium text-white opacity-60'>Project Manager</div>
					</div>
				</div>

				<div className='flex-1 overflow-y-auto bg-[#3C3495] px-3.5 py-3'>
					<div className='flex flex-col gap-4.5'>{renderedMessages}</div>
				</div>

				<ChatInput sendMessage={sendMessage} />
			</div>
		</div>
	)
}
