'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { PasswordInput } from '@/components/ui/password-input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loginSchema } from '@/validations';

export default function LoginPage() {
	const [isLoading, setIsLoading] = React.useState(false);
	const router = useRouter();

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	async function onSubmit(values: z.infer<typeof loginSchema>) {
		setIsLoading(true);
		const res = await signIn('credentials', {
			email: values.email,
			password: values.password,
			redirect: false,
		});
		if (res?.error) {
			toast.error('Invalid email or password');
		} else {
			router.push('/');
			toast.success('Logged in successfully');
		}
		setIsLoading(false);
	}

	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center'>
			<Card className='mx-auto w-full max-w-lg'>
				<CardHeader className='space-y-1'>
					<CardTitle className='text-center text-2xl'>Welcome back</CardTitle>
					<CardDescription className='text-center'>
						Enter your email and password to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder='example@email.com' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<PasswordInput placeholder='Enter your password' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type='submit' className='w-full' disabled={isLoading}>
								{isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
								Sign In
							</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter className='flex flex-col space-y-4'>
					<div className='relative w-full'>
						<div className='absolute inset-0 flex items-center'>
							<div className='w-full border-t border-muted' />
						</div>
						<div className='relative flex justify-center text-xs uppercase'>
							<span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<Button variant='outline'>Google</Button>
						<Button variant='outline'>GitHub</Button>
					</div>
					<p className='text-center text-sm text-muted-foreground'>
						Don&apos;t have an account?{' '}
						<Link href='/register' className='underline underline-offset-4 hover:text-primary'>
							Create an account
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
