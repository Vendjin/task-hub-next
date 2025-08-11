import { Seed } from './Seed'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Admin',
	...NO_INDEX_PAGE
}

export default function Page() {
	return (
		<div>
			<Seed />
		</div>
	)
}
