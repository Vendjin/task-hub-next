'use client'

import { Form, SubmitButton, Toaster } from '@/components'
import type { IAuthForm } from '@/shared/types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { signInWithEmail } from '@/app/(public)/(auth)/actions'

import { LoginInput } from '@/components/screens/auth/LoginInput'

export const AuthForm = () => {
	const [loading, setLoading] = useState(false)

	const methods = useForm<IAuthForm>({
		defaultValues: {
			login: ''
		}
	})
	const { handleSubmit, reset } = methods

	const onSubmit = async (data: IAuthForm) => {
		setLoading(true)

		/*//Вариант для серверного actions
		try {
			const { error } = await signInWithEmail({ email: data.login })

			if (error) {
				toast.error(error)
			} else {
				toast.success('Check your email for login link.')
				reset()
			}
		} catch (_e) {
			toast.error('Something went wrong.')
		} finally {
			setLoading(false)
		}*/

		signInWithEmail({ email: data.login })
			.then(() => {
				toast.success('Check your email for login link.')
			})
			.catch(error => {
				toast.error(`Failed to send sign-in link. Please try again letter. Error: ${error.message}`)
			})
			.finally(() => {
				setLoading(false)
				reset()
			})
	}

	return (
		<div className='flex h-screen w-full items-center justify-center bg-gradient-to-tr from-violet-400 to-amber-400 shadow-md'>
			<div className='bg-block w-full max-w-lg rounded-lg p-6 dark:bg-neutral-800'>
				<Form {...methods}>
					<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
						<h1 className='text-center text-xl font-bold'>Sign in with link</h1>

						<LoginInput />
						<SubmitButton loading={loading} title='Send Link' />
					</form>
				</Form>
			</div>
			<Toaster />
		</div>
	)
}
