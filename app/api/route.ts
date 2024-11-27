import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCode } from 'axios';
import logger from '@/logger';

export const GET = async (req: NextRequest) => {
	logger.info('Hello World');
	return NextResponse.json({ message: 'Hello World' }, { status: HttpStatusCode.Ok });
};
