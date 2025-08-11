import type { IAssignee, ITaskCard } from '@/shared/types'
import { setHours, setMinutes } from 'date-fns'

const now = new Date().getTime()
const day = 24 * 60 * 60 * 1000

export const USERS: IAssignee[] = [
	{
		id: 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
		name: 'David Blane',
		email: 'david@blane.com',
		avatarPath: 'https://avatars.githubusercontent.com/u/1?v=4'
	},
	{
		id: 'f6e5d4c3-b2a1-4f8e-9d8c-7b6a5f4e3d2c',
		name: 'Bella Capably',
		email: 'bella@capaldy.com',
		avatarPath: 'https://avatars.githubusercontent.com/u/2?v=4'
	},
	{
		id: '3b4a5c6d-7e8f-4a1b-2c3d-4e5f6a7b8c9d',
		name: 'Bob Marley',
		email: 'bob@marley.com',
		avatarPath: 'https://avatars.githubusercontent.com/u/3?v=4'
	},
	{
		id: '9d8c7b6a-5f4e-3d2c-1b0a-9f8e7d6c5b4a',
		name: 'Sara Poulson',
		email: 'sara@polson.com',
		avatarPath: 'https://avatars.githubusercontent.com/u/4?v=4'
	},
	{
		id: '2e3f4a5b-6c7d-4e5f-1a2b-3c4d5e6f7a8b',
		name: 'Stew Marchek',
		email: 'stew@marchek.com',
		avatarPath: 'https://avatars.githubusercontent.com/u/5?v=4'
	},
	{
		id: '1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d',
		name: 'Jan Kusto',
		email: 'jan@kusto.com',
		avatarPath: 'https://avatars.githubusercontent.com/u/6?v=4'
	},
	{
		id: '6f5e4d3c-2b1a-4f8e-9d8c-7b6a5f4e3d2c',
		name: 'Emily Ratakovsky',
		email: 'emily@ratakovsky.com',
		avatarPath: 'https://avatars.githubusercontent.com/u/7?v=4'
	}
]

export const LAST_TASKS_DATA: ITaskCard[] = [
	{
		id: 1,
		title: 'Travel App User Flow',
		color: 'bg-violet-300',
		dueDate: {
			date: new Date(),
			startTime: setMinutes(setHours(new Date(), 9), 20),
			endTime: setMinutes(setHours(new Date(), 12), 30)
		},
		comments: ['This is a first comment', 'Second comment', 'Thread comment'],
		attachments: ['', '', '', '', '', '', ''],
		links: ['https://links1.example.com', 'https://links2.example.com'],
		assignees: [USERS[0], USERS[1], USERS[2]],
		icon: 'travel',
		subTasks: [
			{ id: '1', title: 'Implemented new feature', isComplete: false },
			{ id: '2', title: 'Conduct user testing', isComplete: true }
		]
	},
	{
		id: 2,
		title: 'E-commerce Checkout Design',
		color: 'bg-slate-400',
		dueDate: {
			date: new Date(),
			startTime: setMinutes(setHours(new Date(), 12), 50),
			endTime: setMinutes(setHours(new Date(), 15), 40)
		},
		comments: ['Some comment 1', 'Another comment', 'More feedback', 'One more', 'Final note'],
		attachments: ['', ''],
		links: ['https://checkout.example.com'],
		assignees: [USERS[2], USERS[3]],
		icon: 'shopping',
		subTasks: [
			{ id: '1', title: 'Design payment form', isComplete: true },
			{ id: '2', title: 'Implement Stripe', isComplete: true },
			{ id: '3', title: 'Add responsive layout', isComplete: true },
			{ id: '4', title: 'Validate inputs', isComplete: true },
			{ id: '5', title: 'Test UX', isComplete: true }
		]
	},
	{
		id: 3,
		title: 'Onboarding Walkthrough',
		dueDate: {
			date: new Date(now + 3 * day)
		},
		comments: ['Just one comment'],
		attachments: ['', '', '', ''],
		links: ['https://onboarding.example.com', 'https://walkthrough.example.com', 'https://demo.example.com'],
		assignees: [USERS[1], USERS[2]],
		icon: 'mobile',
		subTasks: [
			{ id: '1', title: 'Design welcome screen', isComplete: true },
			{ id: '2', title: 'Add tutorial flow', isComplete: true },
			{ id: '3', title: 'Implement animations', isComplete: true },
			{ id: '4', title: 'Connect API data', isComplete: true },
			{ id: '5', title: 'Polish UI', isComplete: false }
		]
	},
	{
		id: 4,
		title: 'Marketing Campaign Plan',
		dueDate: {
			date: new Date(now + 7 * day)
		},
		comments: ['Idea #1', 'Idea #2', 'Ad concept', 'Budget discussion'],
		attachments: ['', '', ''],
		links: [],
		assignees: [USERS[0], USERS[3]],
		icon: 'analytics',
		subTasks: [
			{ id: '1', title: 'Define campaign goal', isComplete: true },
			{ id: '2', title: 'Create content calendar', isComplete: false },
			{ id: '3', title: 'Coordinate with design team', isComplete: false },
			{ id: '4', title: 'Draft messaging', isComplete: false },
			{ id: '5', title: 'Schedule posts', isComplete: false }
		]
	},
	{
		id: 5,
		title: 'Bug Fixes Sprint',
		dueDate: {
			date: new Date(now + 2 * day)
		},
		comments: ['Crash bug', 'Login bug', 'Minor UI issue', 'Backend timeout', 'CSS glitch', 'API error'],
		attachments: ['', '', '', '', ''],
		links: ['https://bugtracker.example.com', 'https://jira.example.com'],
		assignees: [USERS[4], USERS[5]],
		icon: 'bug',
		subTasks: [
			{ id: '1', title: 'Fix login crash', isComplete: true },
			{ id: '2', title: 'Resolve UI glitches', isComplete: true },
			{ id: '3', title: 'Improve API error handling', isComplete: true },
			{ id: '4', title: 'Patch backend timeout', isComplete: true },
			{ id: '5', title: 'Final regression testing', isComplete: false }
		]
	},
	{
		id: 6,
		title: 'New Feature Proposal',
		dueDate: {
			date: new Date(now + 8 * day)
		},
		comments: [],
		attachments: [''],
		links: ['https://feature-docs.example.com'],
		assignees: [USERS[6]],
		icon: 'feature',
		subTasks: [
			{ id: '1', title: 'Write proposal draft', isComplete: false },
			{ id: '2', title: 'Collect feedback', isComplete: false },
			{ id: '3', title: 'Revise draft', isComplete: false },
			{ id: '4', title: 'Present to team', isComplete: false },
			{ id: '5', title: 'Finalize scope', isComplete: false }
		]
	}
]
