import type { TChatMessageWithProfile } from '@/shared/types'
import { useEffect, useRef, useState } from 'react'

import { createSupabaseClient } from '@/utils/supabase'

export const useChat = ({ userId }: { userId: string }) => {
	const [messages, setMessages] = useState<TChatMessageWithProfile[]>([])

	const supabase = useRef(createSupabaseClient())

	useEffect(() => {
		supabase.current
			.from('chat_message')
			.select('*, profile:profile(id, name, avatar_path)')
			.order('created_at', { ascending: true })
			.then(({ data }) => {
				if (!data) return
				setMessages(data)
			})

		const channel = supabase.current
			.channel('chat_message')
			.on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_message' }, async payload => {
				const { data } = await supabase.current
					.from('chat_message')
					.select('*, profile:profile(id, name, avatar_path)')
					.eq('id', payload.new.id)
					.single()
				if (data) {
					// setMessages(prev => [...prev, data])
					setMessages(prev => {
						if (prev.some(msg => msg.id === data.id)) return prev
						return [...prev, data]
					})
				}
			})
			.subscribe()

		return () => {
			void supabase.current.removeChannel(channel)
		}
	}, [])

	const sendMessage = async (text: string) => {
		if (!text.trim()) return

		await supabase.current.from('chat_message').insert({
			text,
			user_id: userId
		})
	}

	return {
		messages,
		sendMessage
	}
}
