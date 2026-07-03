import { Paperclip, Send } from 'lucide-react'
import { type FC, memo, useState } from 'react'

interface IChatInputProps {
	sendMessage: (text: string) => Promise<void>
}

const ChatInput: FC<IChatInputProps> = ({ sendMessage }) => {
	const [text, setText] = useState('')

	return (
		<div className='flex items-center gap-2 bg-[#5B51B1] px-3.5 py-3'>
			<button className='shrink-0 text-white' aria-label='Attach file'>
				<Paperclip />
			</button>
			<input
				type='text'
				value={text}
				onChange={e => setText(e.target.value)}
				placeholder='Type your message...'
				aria-label='Type your message'
				className='w-full flex-1 bg-transparent p-2 px-3 py-2 text-white focus:outline-none'
			/>
			<button
				className='flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-violet-400 p-2 opacity-90 transition-colors hover:opacity-100'
				onClick={() => sendMessage(text).then(() => setText(''))}
			>
				<Send size={18} className='text-white opacity-80' />
			</button>
		</div>
	)
}

export default memo(ChatInput)
