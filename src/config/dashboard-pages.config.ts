const BASEURL: string = '/dashboard'

export const DASHBOARD_PAGES = {
	DASHBOARD: BASEURL,
	TASK: (taskId: string) => `${BASEURL}/task/${taskId}`,
	SUB_TASKS: (taskId: string) => `${BASEURL}/subTask/${taskId}`,
	MESSAGE: `${BASEURL}/message`,
	INSIGHT: `${BASEURL}/insight`,
	TEAM: `${BASEURL}/team`,
	SCHEDULE: `${BASEURL}/schedule`,
	REPORT: `${BASEURL}/report`,
	SETTINGS: `${BASEURL}/settings`
}
