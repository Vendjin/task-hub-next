import { Button } from '@/components'
import { seedAuthUsers } from '@/seeder-users'

export function Seed() {
	return (
		<div className='p-10'>
			<Button onClick={seedAuthUsers}>Наполнить юзеров</Button>
		</div>
	)
}
