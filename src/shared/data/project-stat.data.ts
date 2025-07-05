import type { IProjectStat } from '@/shared/types'

export const PROJECT_STATS_DATA: IProjectStat[] = [
	{
		id: 1,
		number: 92,
		label: 'Active Projects',
		bgColor: 'bg-violet-300',
		icon: '/active-projects.svg'
	},
	{
		id: 2,
		number: 35,
		label: 'On Going Projects',
		bgColor: 'bg-yellow-300',
		icon: '/ongoing-projects.svg'
	},
	{
		id: 3,
		number: 1149,
		label: 'Working Hours',
		bgColor: 'bg-pink-300',
		icon: '/working-hours.svg'
	}
]
