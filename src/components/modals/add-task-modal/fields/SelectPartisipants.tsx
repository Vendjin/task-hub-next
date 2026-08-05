'use client'

import { Button, Popover } from '@/components'
import { getAllProfiles } from '@/services/profile/profile-client.service'
import type { TUserProfile } from '@/shared/types'
import { cn } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/Form'
import { PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'

interface ISelectParticipantsProps {
	className?: string
}

export const SelectParticipants: React.FC<ISelectParticipantsProps> = () => {
	const { control } = useFormContext()
	const [open, setOpen] = useState(false)

	const { data: participants, isLoading } = useQuery({
		queryKey: ['participants'],
		queryFn: () => getAllProfiles()
	})

	return (
		<FormField
			control={control}
			name='participants'
			render={({ field }) => (
				<FormItem className='flex flex-col'>
					<FormLabel>Участники</FormLabel>

					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<FormControl>
								<Button variant='outline' role='combobox' className='justify-between'>
									{field.value?.length > 0 ? `Выбрано: ${field.value.length}` : 'Выберите участников'}
									<ChevronsUpDown className='opacity-50' />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className='z-[100] w-[300px] p-0'>
							<Command>
								<CommandInput placeholder='Поиск участников...' />
								<CommandList>
									<CommandEmpty>Ничего не найдено</CommandEmpty>
									{isLoading ? (
										<CommandGroup>
											<CommandItem disabled>Загрузка участников...</CommandItem>
										</CommandGroup>
									) : (
										<>
											<CommandGroup>
												{participants?.map(participant => (
													<CommandItem
														key={participant.id}
														value={participant.name || ''}
														onSelect={() => {
															const currentValue = field.value || []
															const isSelected = currentValue.includes(participant.id)

															if (isSelected) {
																field.onChange(
																	currentValue.filter(
																		(id: string) => id !== participant.id
																	)
																)
															} else {
																field.onChange([...currentValue, participant.id])
															}
														}}
														className='gap-2'
													>
														<Avatar className='size-6'>
															<AvatarImage
																src={participant.avatar_path || undefined}
																alt={participant.name || ''}
															/>
															<AvatarFallback className='text-xs'>
																{participant.name?.charAt(0).toUpperCase() || '?'}
															</AvatarFallback>
														</Avatar>
														<span>{participant.name || 'Без имени'}</span>
														<Check
															className={cn(
																'ml-auto',
																field.value?.includes(participant.id)
																	? 'opacity-100'
																	: 'opacity-0'
															)}
														/>
													</CommandItem>
												))}
											</CommandGroup>
											{field.value && field.value.length > 0 && (
												<CommandGroup className='border-border/50 border-t'>
													<CommandItem disabled className='text-muted-foreground text-xs'>
														Выбрано: {field.value.length}
													</CommandItem>
												</CommandGroup>
											)}
										</>
									)}
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>

					{field.value && field.value.length > 0 && (
						<div className='mt-2 flex flex-wrap gap-2'>
							{field.value
								.map((id: string) => participants?.find(p => p.id === id))
								.filter(Boolean)
								.map((participant: TUserProfile) => (
									<button
										key={participant.id}
										type='button'
										onClick={() => {
											field.onChange(field.value.filter((id: string) => id !== participant.id))
										}}
										className='bg-muted hover:bg-muted/80 inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm transition-colors'
									>
										<Avatar className='size-5'>
											<AvatarImage
												src={participant.avatar_path || undefined}
												alt={participant.name || ''}
											/>
											<AvatarFallback className='text-[10px]'>
												{participant.name?.charAt(0).toUpperCase() || '?'}
											</AvatarFallback>
										</Avatar>
										<span>{participant.name || 'Без имени'}</span>
										<X className='size-3 opacity-50 hover:opacity-100' />
									</button>
								))}
						</div>
					)}
				</FormItem>
			)}
		/>
	)
}
