import { prisma } from '@/lib/prisma';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const signupSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters').max(100, 'Password is too long'),
	name: z.string().min(2, 'Name must be at least 2 characters'),
});

export async function POST(req: Request) {
	try {
		// Parse request body
		const body = await req.json();

		// Validate input
		const result = signupSchema.safeParse(body);
		if (!result.success) {
			return NextResponse.json({ error: 'Invalid input', details: result.error.issues }, { status: 400 });
		}

		const { email, password, name } = result.data;

		// Check if user already exists
		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			return NextResponse.json({ error: 'User already exists' }, { status: 409 });
		}

		// Hash password
		const hashedPassword = await hash(password, 12);

		// Create user
		const user = await prisma.user.create({
			data: {
				email,
				name,
				password: hashedPassword,
			},
			select: {
				id: true,
				email: true,
				name: true,
				profilePicture: true,
				createdAt: true,
			},
		});

		return NextResponse.json(
			{
				message: 'User created successfully',
				user,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error('[SIGNUP_ERROR]', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
