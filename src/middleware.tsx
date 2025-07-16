import { PUBLIC_PAGES } from '@/config'
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
}
