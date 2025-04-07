import { queryLLM } from '@/lib/llm';
import { NextRequest, NextResponse } from 'next/server';
import { PROMPTS } from '@/constants/prompts';

export async function POST(req: NextRequest) {
  const { message, context, mode } = await req.json();
  let prompt = '';

  if (mode === 'plan' || message.toLowerCase().includes('skip to planner')) {
    prompt = PROMPTS.MVP_PLANNER;
  } else {
    prompt = PROMPTS.IDEA_VALIDATOR(message, context);
  }

  const reply = await queryLLM(prompt).catch((error) => {
    console.error('Error querying LLM:', error);
    return "Sorry, I couldn't process that. Try again!";
  });

  return NextResponse.json({ reply });
}