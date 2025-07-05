import React from 'react'

interface IChatProps {
	title?: string
}

export const Chat: React.FC<IChatProps> = () => {
	return <div className="h-full bg-[url('/ChatGPTback.png')] bg-no-repeat bg-cover bg-center z-50 " />
}
