import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { password }: { password: string } = await req.json();
  const storedHash = process.env.PASSWORD_HASH ?? '';
  console.log('🚀 -> POST -> storedHash:', storedHash);
  console.log('🚀 -> POST -> password:', password);

  if (!password || !(await bcrypt.compare(password, storedHash))) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Correctly set HTTP-only, secure cookie
  const response = NextResponse.json({ message: 'Authenticated' });
  response.headers.append(
    'Set-Cookie',
    serialize('auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    }),
  );

  return response;
}
