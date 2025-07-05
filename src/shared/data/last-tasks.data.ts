import type { IAssignee, ITaskCard } from '@/shared/types'

const now = Date.now()
const day = 24 * 60 * 60 * 1000

export const USERS: Record<string, IAssignee> = {
	david: { name: 'David', avatar: '/david-av.svg' },
	bella: { name: 'Bella', avatar: '/bella-av.svg' },
	bob: { name: 'Bob', avatar: '/bob-av.svg' }
}

export const LAST_TASKS_DATA: ITaskCard[] = [
	{
		id: 1,
		title: 'Travel App User Flow',
		dueInDays: now + 5 * day,
		progress: 52,
		comments: 3,
		attachments: 6,
		links: 2,
		assignees: [USERS.david, USERS.bella, USERS.bob],
		icon: 'travel'
	},
	{
		id: 2,
		title: 'E-commerce Checkout Design',
		dueInDays: now + 3 * day,
		progress: 100,
		comments: 5,
		attachments: 2,
		links: 1,
		assignees: [USERS.david, USERS.bella],
		icon: 'shopping'
	},
	{
		id: 3,
		title: 'Onboarding Walkthrough',
		dueInDays: now + 7 * day,
		progress: 80,
		comments: 1,
		attachments: 4,
		links: 3,
		assignees: [USERS.bella, USERS.bob],
		icon: 'mobile'
	},
	{
		id: 4,
		title: 'Marketing Campaign Plan',
		dueInDays: now + 10 * day,
		progress: 30,
		comments: 4,
		attachments: 3,
		links: 0,
		assignees: [USERS.david, USERS.bob],
		icon: 'analytics'
	},
	{
		id: 5,
		title: 'Bug Fixes Sprint',
		dueInDays: now + 2 * day,
		progress: 90,
		comments: 6,
		attachments: 5,
		links: 2,
		assignees: [USERS.bella, USERS.david],
		icon: 'bug'
	},
	{
		id: 6,
		title: 'New Feature Proposal',
		dueInDays: now + 8 * day,
		progress: 0,
		comments: 0,
		attachments: 1,
		links: 1,
		assignees: [USERS.bob],
		icon: 'feature'
	},
	{
		id: 7,
		title: 'User Feedback Analysis',
		dueInDays: now + 4 * day,
		progress: 60,
		comments: 7,
		attachments: 2,
		links: 2,
		assignees: [USERS.bella, USERS.bob, USERS.david],
		icon: 'feedback'
	}
]
