import { generatePlan } from "@/lib/generator";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { idea, responses } = await req.json();
    const plan = generatePlan(idea, responses);
    return NextResponse.json(plan);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
