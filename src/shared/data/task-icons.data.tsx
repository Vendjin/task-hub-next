import type { ITaskIcon } from '@/shared/types'
import { BarChart2, Bug, FileText, MessageCircle, Plane, ShoppingCart, Smartphone, Star, Zap } from 'lucide-react'

export const ICONS: Record<string, ITaskIcon> = {
	travel: { label: 'travel', value: <Plane size={20} /> },
	shopping: { label: 'shopping', value: <ShoppingCart size={20} /> },
	mobile: { label: 'mobile', value: <Smartphone size={20} /> },
	analytics: { label: 'analytics', value: <BarChart2 size={20} /> },
	bug: { label: 'bug', value: <Bug size={20} /> },
	feature: { label: 'feature', value: <Zap size={20} /> },
	feedback: { label: 'feedback', value: <MessageCircle size={20} /> },
	document: { label: 'document', value: <FileText size={20} /> },
	idea: { label: 'analytics', value: <Star size={20} /> }
}
