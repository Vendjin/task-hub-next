'use client'

import { Form, SubmitButton } from '@/components'
import { DASHBOARD_PAGES } from '@/config'
import { TokenService, token } from '@/services'
import type { IAuthForm } from '@/shared/types'
import { useAuthStore } from '@/store'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { LoginInput } from '@/components/screens/auth/LoginInput'
import { PasswordInput } from '@/components/screens/auth/PasswordInput'

interface IAuthFormProps {
	type: 'login' | 'register' | 'forgot-password' | 'reset-password'
}

export const AuthForm: React.FC<IAuthFormProps> = ({ type }) => {
	const isLogin = type === 'login'

	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const login = useAuthStore(state => state.login)

	const methods = useForm<IAuthForm>({
		defaultValues: {
			login: '',
			password: ''
		}
	})
	const { handleSubmit, reset } = methods

	const onSubmit = async (data: IAuthForm) => {
		setLoading(true)
		login(data.login, 'someToken')
		reset()

		const isLoginIn = !!TokenService.get(token.accessToken)

		if (isLoginIn) {
			setLoading(false)
			router.replace(DASHBOARD_PAGES.DASHBOARD)
			toast.success(isLogin ? 'Login successful' : 'Register successfully.', {
				id: isLogin ? 'login' : 'register'
			})
		}
	}

	return (
		<div className='to-a flex h-full w-full items-center justify-center bg-gradient-to-tr from-violet-400 to-amber-400 shadow-md'>
			<div className='bg-block w-full max-w-lg rounded-lg p-6 dark:bg-neutral-800'>
				<Form {...methods}>
					<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
						<h1 className='text-center text-xl font-bold'>{isLogin ? 'Login Task Hub' : 'Register'}</h1>

						<LoginInput />
						<PasswordInput />
						<SubmitButton loading={loading} title='Login' />
					</form>
				</Form>
			</div>
		</div>
	)
}
