'use client'

import { Button, Popover } from '@/components'
import { getClientProjects } from '@/services/projects/project-client.service'
import { cn } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/Form'
import { PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'

export function SelectProject() {
	const { control } = useFormContext()
	const [open, setOpen] = useState(false)

	const { data: projects, isLoading } = useQuery({
		queryKey: ['projects'],
		queryFn: () => getClientProjects(),
		select: data =>
			data.map(project => ({
				id: project.id,
				name: project.name
			}))
	})

	return (
		<FormField
			control={control}
			name='project_id'
			render={({ field }) => (
				<FormItem className='flex flex-col'>
					<FormLabel>Проект</FormLabel>

					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<FormControl>
								<Button variant='outline' role='combobox' className='justify-between'>
									{field.value ? projects?.find(p => p.id === field.value)?.name : 'Выберите проект'}

									<ChevronsUpDown className='opacity-50' />
								</Button>
							</FormControl>
						</PopoverTrigger>

						<PopoverContent className='z-[100] p-0'>
							<Command>
								<CommandInput placeholder='Поиск проекта...' />

								<CommandList>
									<CommandEmpty>Ничего не найдено</CommandEmpty>
									{isLoading ? (
										<CommandGroup>
											<CommandItem disabled>Загрузка проектов...</CommandItem>
										</CommandGroup>
									) : (
										<>
											<CommandGroup>
												{projects?.map(project => (
													<CommandItem
														key={project.id}
														value={project.name || ''}
														onSelect={() => {
															field.onChange(project.id)
															setOpen(false)
														}}
													>
														{project.name}

														<Check
															className={cn(
																'ml-auto',
																project.id === field.value ? 'opacity-100' : 'opacity-0'
															)}
														/>
													</CommandItem>
												))}
											</CommandGroup>
										</>
									)}
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>
				</FormItem>
			)}
		/>
	)
}
