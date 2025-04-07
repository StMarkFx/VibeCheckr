import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { feedback } = await req.json();
  console.log('Feedback received:', feedback);
  return NextResponse.json({ message: 'Feedback submitted successfully!' });
}
