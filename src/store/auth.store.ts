import { TokenService, token } from '@/services'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

interface IAuthStore {
	isLoggedIn: boolean
	userLogin: string
	login: (userLogin: string, accessToken: string, refreshToken?: string) => void
	logout: () => void
}

export const useAuthStore = create<IAuthStore>()(
	persist(
		immer(set => ({
			isLoggedIn: false,
			userLogin: '',
			login: async (login, accessToken, refreshToken) => {
				TokenService.set(token.accessToken, accessToken)
				if (refreshToken) TokenService.set(token.refreshToken, refreshToken)

				set(state => {
					state.isLoggedIn = true
					state.userLogin = login
				})
			},
			logout: () => {
				TokenService.remove(token.accessToken)
				TokenService.remove(token.refreshToken)

				set(state => {
					state.isLoggedIn = false
					state.userLogin = ''
				})
			}
		})),
		{
			name: 'auth-storage',
			partialize: state => ({
				userLogin: state.userLogin,
				isLoggedIn: state.isLoggedIn
			})
		}
	)
)
