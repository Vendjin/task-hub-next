import { Loader2 } from 'lucide-react'
import React from 'react'

export const Spinner = ({ size = 24 }: { size?: number }) => {
	return <Loader2 className='text-muted-foreground animate-spin' size={size} />
}
