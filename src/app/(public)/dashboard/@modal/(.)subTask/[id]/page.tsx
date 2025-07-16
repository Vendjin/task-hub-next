import { AddSubTaskModal } from '@/components/modals'

type TParams = { id: string }

export default async function SubTaskModalPage({ params }: { params: Promise<TParams> }) {
	const { id } = await params

	return <AddSubTaskModal taskId={id} />
}
