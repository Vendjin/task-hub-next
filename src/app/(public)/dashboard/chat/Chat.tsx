import type { TChatMessageWithProfile } from '@/shared/types'
import { Paperclip, Send } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import { ChatMessage } from '@/app/(public)/dashboard/chat/ChatMessage'

import { createSupabaseClient } from '@/utils/supabase'

import { USERS } from '@/shared/data/last-tasks.data'

interface IChatProps {
	title?: string
}

export const Chat: React.FC<IChatProps> = () => {
	const supabase = useRef(createSupabaseClient())

	const [messages, setMessages] = useState<TChatMessageWithProfile[]>([])
	const [text, setText] = useState('')

	useEffect(() => {
		supabase.current
			.from('chat_message')
			// .select('*, profile:profile(id, name, avatar_path)')
			.select('*')
			.order('created_at', { ascending: true })
			.then(({ data }) => {
				if (!data) return
				setMessages(data)
			})

		const channel = supabase.current
			.channel('chat_message')
			.on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_message' }, payload => {
				const msg = payload.new as TChatMessageWithProfile
				setMessages(prev => [...prev, msg])
			})
			.subscribe()

		return () => {
			void supabase.current.removeChannel(channel)
		}
	}, [])

	const sendMessage = async () => {
		if (!text.trim()) return

		await supabase.current.auth.getUser().then(({ data: { user } }) => {
			if (!user) return
			const userId = user.id

			return supabase.current.from('chat_message').insert({
				text,
				user_id: userId
			})
		})

		setText('')
	}

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
							<ChatMessage message={msg} key={msg.id} />
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
					<button
						className='flex size-9 shrink-0 items-center justify-center rounded-full bg-violet-400 p-2 opacity-90 transition-colors hover:opacity-100'
						onClick={sendMessage}
					>
						<Send size={18} className='text-white opacity-80' />
					</button>
				</div>
			</div>
		</div>
	)
}
