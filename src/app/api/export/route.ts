import { generatePlan } from '@/lib/generator';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { idea, responses } = await req.json();
  const plan = generatePlan(idea, responses);
  return NextResponse.json(plan);
}