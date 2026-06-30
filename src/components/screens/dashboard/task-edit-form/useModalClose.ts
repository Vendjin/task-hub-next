//*Просто пример как можно сделать хук на закрытие модалки
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useModalClose() {
	const router = useRouter()

	const closeModal = () => {
		router.back()
	}

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeModal()
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [])

	return {
		closeModal
	}
}
