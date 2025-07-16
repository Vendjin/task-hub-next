import Cookies from 'js-cookie'

export const token = {
	accessToken: 'accessToken',
	refreshToken: 'refreshToken'
} as const

type TToken = (typeof token)[keyof typeof token]

export class TokenService {
	static set(name: TToken, token: string) {
		Cookies.set(name, token, {
			expires: 7,
			path: '/',
			sameSite: 'lax'
		})
	}

	static get(name: TToken): string | undefined {
		return Cookies.get(name)
	}

	static remove(name: TToken) {
		Cookies.remove(name, {
			path: '/'
		})
	}
}
