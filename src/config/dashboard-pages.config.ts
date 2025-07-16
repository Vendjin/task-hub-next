const BASEURL: string = '/dashboard'

export const DASHBOARD_PAGES = {
	DASHBOARD: BASEURL,
	TASK: (taskId: number) => `${BASEURL}/task/${taskId}`,
	SUB_TASKS: (taskId: number) => `${BASEURL}/subTask/${taskId}`,
	MESSAGE: `${BASEURL}/message`,
	INSIGHT: `${BASEURL}/insight`,
	TEAM: `${BASEURL}/team`,
	SCHEDULE: `${BASEURL}/schedule`,
	REPORT: `${BASEURL}/report`,
	SETTINGS: `${BASEURL}/settings`
}
