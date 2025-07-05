import type { IMenuItem } from '@/shared/types'
import {
	CalendarDays,
	ChartNoAxesColumn,
	LayoutGrid,
	MessageCircleMore,
	Notebook,
	Settings,
	UsersRound
} from 'lucide-react'
import { PAGES } from '@/config'

export const MENU: IMenuItem[] = [
	{
		icon: LayoutGrid,
		label: 'Dashboard',
		href: PAGES.DASHBOARD
	},
	{
		icon: MessageCircleMore,
		label: 'Message',
		href: PAGES.MESSAGE
	},
	{
		icon: ChartNoAxesColumn,
		label: 'Insight',
		href: PAGES.INSIGHT
	},
	{
		icon: UsersRound,
		label: 'Team',
		href: PAGES.TEAM
	},
	{
		icon: CalendarDays,
		label: 'Schedule',
		href: PAGES.SCHEDULE
	},
	{
		icon: Notebook,
		label: 'Report',
		href: PAGES.REPORT
	},
	{
		icon: Settings,
		label: 'Settings',
		href: PAGES.SETTINGS
	}
]
