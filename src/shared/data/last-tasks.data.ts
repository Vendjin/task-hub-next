import type { IAssignee, ITaskCard } from '@/shared/types'

const now = Date.now()
const day = 24 * 60 * 60 * 1000

export const USERS: IAssignee[] = [
	{ id: '1', name: 'David Blane', avatarPath: 'https://avatars.githubusercontent.com/u/1?v=4' },
	{ id: '2', name: 'Bella Capably', avatarPath: 'https://avatars.githubusercontent.com/u/2?v=4' },
	{ id: '3', name: 'Bob Marley', avatarPath: 'https://avatars.githubusercontent.com/u/3?v=4' },
	{ id: '4', name: 'Sara Poulson', avatarPath: 'https://avatars.githubusercontent.com/u/4?v=4' },
	{ id: '5', name: 'Stew Marchek', avatarPath: 'https://avatars.githubusercontent.com/u/5?v=4' },
	{ id: '6', name: 'Jan Kusto', avatarPath: 'https://avatars.githubusercontent.com/u/6?v=4' },
	{ id: '7', name: 'Emily Ratakovsky', avatarPath: 'https://avatars.githubusercontent.com/u/7?v=4' }
]

export const LAST_TASKS_DATA: ITaskCard[] = [
	{
		id: 1,
		title: 'Travel App User Flow',
		dueDate: now + 5 * day,
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
		dueDate: now + 3 * day,
		comments: ['Some comment 1', 'Another comment', 'More feedback', 'One more', 'Final note'],
		attachments: ['', ''],
		links: ['https://checkout.example.com'],
		assignees: [USERS[0], USERS[1]],
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
		dueDate: now + 7 * day,
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
		dueDate: now + 10 * day,
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
		dueDate: now + 2 * day,
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
		dueDate: now + 8 * day,
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
	},
	{
		id: 7,
		title: 'User Feedback Analysis',
		dueDate: now + 4 * day,
		comments: [
			'Too many clicks',
			'Love the UI!',
			'Add dark mode',
			'Fix mobile issues',
			'Improve onboarding',
			'More filters',
			'Works great overall'
		],
		attachments: ['', ''],
		links: ['https://feedback1.example.com', 'https://feedback2.example.com'],
		assignees: [USERS[6], USERS[2], USERS[1]],
		icon: 'feedback',
		subTasks: [
			{ id: '1', title: 'Collect survey data', isComplete: true },
			{ id: '2', title: 'Group common issues', isComplete: true },
			{ id: '3', title: 'Prioritize top concerns', isComplete: true },
			{ id: '4', title: 'Document improvement plan', isComplete: false },
			{ id: '5', title: 'Send summary to stakeholders', isComplete: false }
		]
	}
]
