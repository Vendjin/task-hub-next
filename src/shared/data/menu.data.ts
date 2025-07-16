import { DASHBOARD_PAGES } from '@/config'
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

export const MENU: IMenuItem[] = [
	{
		icon: LayoutGrid,
		label: 'Dashboard',
		href: DASHBOARD_PAGES.DASHBOARD
	},
	{
		icon: MessageCircleMore,
		label: 'Message',
		href: DASHBOARD_PAGES.MESSAGE
	},
	{
		icon: ChartNoAxesColumn,
		label: 'Insight',
		href: DASHBOARD_PAGES.INSIGHT
	},
	{
		icon: UsersRound,
		label: 'Team',
		href: DASHBOARD_PAGES.TEAM
	},
	{
		icon: CalendarDays,
		label: 'Schedule',
		href: DASHBOARD_PAGES.SCHEDULE
	},
	{
		icon: Notebook,
		label: 'Report',
		href: DASHBOARD_PAGES.REPORT
	},
	{
		icon: Settings,
		label: 'Settings',
		href: DASHBOARD_PAGES.SETTINGS
	}
]
