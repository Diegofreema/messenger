import getCurrentUser from '@/app/action/getCurrentUser';
import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const {} = body;
  } catch (error: any) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
