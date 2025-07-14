import { LAST_TASKS_DATA } from '@/shared/data'
import type { ISubtask, ITaskCard } from '@/shared/types'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

interface ITasksStore {
	tasks: ITaskCard[] | null
	getTask: (id: number) => ITaskCard | undefined
	setTasks: (tasks: ITaskCard[]) => void
	updateTask: (taskId: number, updater: (task: ITaskCard) => void) => void
	addSubTask: (taskId: number, subTask: Omit<ISubtask, 'id'>) => void
}

export const useTasksStore = create<ITasksStore>()(
	immer((set, get) => ({
		tasks: LAST_TASKS_DATA,
		getTask: id => get().tasks?.find(task => task.id === id),
		setTasks: tasks => set({ tasks }),
		updateTask: (id, updater) =>
			set(state => {
				const task = state.tasks?.find(task => task.id === id)
				if (task) updater(task)
			}),
		addSubTask: (taskId, subTask) =>
			set(state => {
				const task = state.tasks?.find(task => task.id === taskId)
				if (task) {
					task.subTasks.push({ id: crypto.randomUUID(), ...subTask })
				}
			})
	}))
)
