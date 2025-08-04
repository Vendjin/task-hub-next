/*import { PUBLIC_PAGES } from '@/config'
import { token } from '@/services'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const isLoggedIn = !!request.cookies.get(token.accessToken)

	if (!isLoggedIn) {
		return NextResponse.redirect(new URL(PUBLIC_PAGES.LOGIN, request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: '/dashboard/:path*'
}*/
import { type NextRequest } from 'next/server'

import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
	return await updateSession(request)
}
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * Feel free to modify this pattern to include more paths.
		 */
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
	]
}
