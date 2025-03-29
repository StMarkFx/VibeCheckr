import { queryLLM } from '@/lib/llm';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message, context, mode } = await req.json();
  let prompt = '';

  if (mode === 'plan' || message.toLowerCase().includes('skip to planner')) {
    prompt = `You’re VibeCheckr’s MVP Planner. User skipped validation. Say: "Yo, what’s your idea? I’ll drop a scalable MVP plan with a tight tech stack, structure, and code that slaps."`;
  } else {
    prompt = `You’re VibeCheckr’s Idea Validator. User says: "${message}". Context: ${context || 'new idea'}. Ask chill questions to refine based on pain points, feasibility, revenue—in that order. Keep it vibey.`;
  }

  const reply = await queryLLM(prompt);
  return NextResponse.json({ reply });
}