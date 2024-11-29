import { z } from 'zod';

export const UserSchema = z.object({
	id: z.string().uuid({ message: 'Invalid UUID format' }),
	name: z.string().min(2, 'Name must be at least 2 characters long'),
	email: z.string().email('Invalid email address'),
	age: z.number().int().optional(), // Optional field
});

export const CreateUserSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters long'),
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export type User = z.infer<typeof UserSchema>;
