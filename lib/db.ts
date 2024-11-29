import { PrismaClient } from '@prisma/client';
import { prisma } from './prisma';

export class Database {
	private static instance: Database;
	private client: PrismaClient;

	private constructor() {
		this.client = prisma;
	}

	public static getInstance(): Database {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}

	public getClient(): PrismaClient {
		return this.client;
	}

	public async connect(): Promise<void> {
		try {
			await this.client.$connect();
			console.log('✅ Database connected successfully');
		} catch (error) {
			console.error('❌ Database connection error:', error);
			throw error;
		}
	}

	public async disconnect(): Promise<void> {
		await this.client.$disconnect();
	}
}

// Export a singleton instance
export const db = Database.getInstance();
