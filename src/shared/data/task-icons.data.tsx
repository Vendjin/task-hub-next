import type { ITaskIcon } from '@/shared/types'
import { BarChart2, Bug, FileText, MessageCircle, Plane, ShoppingCart, Smartphone, Star, Zap } from 'lucide-react'

export const ICONS: Record<string, ITaskIcon> = {
	travel: { label: 'Travel', value: <Plane size={20} /> },
	shopping: { label: 'Shopping', value: <ShoppingCart size={20} /> },
	mobile: { label: 'Mobile App', value: <Smartphone size={20} /> },
	analytics: { label: 'Analytics', value: <BarChart2 size={20} /> },
	bug: { label: 'Bug Fix', value: <Bug size={20} /> },
	feature: { label: 'New Feature', value: <Zap size={20} /> },
	feedback: { label: 'Feedback', value: <MessageCircle size={20} /> },
	document: { label: 'Document', value: <FileText size={20} /> },
	idea: { label: 'Idea', value: <Star size={20} /> }
}
