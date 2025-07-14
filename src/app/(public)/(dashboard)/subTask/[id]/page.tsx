type TParams = { id: string }

export default async function SubTaskPage({ params }: { params: Promise<TParams> }) {
	const { id } = await params

	return <>Добавить Sub Таск к таску с {id}</>
}
