import { Loader2 } from 'lucide-react'
import React from 'react'

export const Spinner = ({ size = 24 }: { size?: number }) => {
	return <Loader2 className='animate-spin text-muted-foreground' size={size} />
}
