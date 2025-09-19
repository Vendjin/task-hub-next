import { cn } from '@/utils'
import { Paperclip, Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { USERS } from '@/shared/data/last-tasks.data'

interface IChatProps {
	title?: string
}

const messages = [
	{
		id: 1,
		text: 'Morning! i ve been busy with my project',
		author: USERS[0],
		own: false,
		time: '09.28 am'
	},
	{
		id: 2,
		text: 'This is perfect',
		author: USERS[2],
		own: true,
		time: '09.40 am'
	},
	{
		id: 3,
		text: 'Morning! i ve been working on my project',
		author: USERS[4],
		own: false,
		time: '09.47 am'
	}
]

export const Chat: React.FC<IChatProps> = () => {
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

				<div className='overfloy-y-auto flex-1 bg-[#3B3494] px-3.5 py-3'>
					<div className='flex flex-col gap-4.5'>
						{messages.map(msg => (
							<div
								key={msg.id}
								className={cn('item end flex gap-2', msg.own ? 'justify-end' : 'justify-start')}
							>
								{!msg.own && (
									<Image
										src={msg.author.avatarPath || ''}
										alt={msg.author.name}
										width={32}
										height={32}
										className='h-11 w-11 rounded-full'
									/>
								)}

								<div className='max-w-[75%]'>
									<div className='mb-0.5 text-xs text-gray-300'>
										{msg.own ? (
											<span className='space-x-1'>
												<span className='opacity-50'>
													{msg.time} <span className='font-medium'>Me</span>
												</span>
											</span>
										) : (
											<span className='space-x-1'>
												<span className='opacity-50'>
													<span className='font-medium'>{msg.author.name}</span> {msg.time}
												</span>
											</span>
										)}
									</div>

									<div
										className={cn(
											'rounded-xl px-4 py-2 text-sm text-white',
											msg.own ? 'rounded-br-none bg-[#6a54FF]' : 'rounded-bl-none bg-[#6e63a7]'
										)}
									>
										{msg.text}
									</div>
								</div>

								{msg.own && (
									<Image
										src={msg.author.avatarPath || ''}
										alt={msg.author.name}
										width={32}
										height={32}
										className='h-11 w-11 rounded-full'
									/>
								)}
							</div>
						))}
					</div>
				</div>

				<div className='flex items-center gap-2 bg-[#5B51B1] px-3.5 py-3'>
					<button>
						<Paperclip className='text-white opacity-80' />
					</button>
					<input
						type='text'
						placeholder='Type your message...'
						className='w-full flex-1 bg-transparent p-2 px-3 py-2 text-white focus:outline-none'
					/>
					<button className='flex size-9 shrink-0 items-center justify-center rounded-full bg-violet-400 p-2 opacity-90 transition-colors hover:opacity-100'>
						<Send size={18} className='text-white opacity-80' />
					</button>
				</div>
			</div>
		</div>
	)
}
