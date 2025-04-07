import { NextResponse } from "next/server";

const mockIdeas = [
  {
    id: "1",
    text: "Build a tutoring platform",
    createdAt: "2023-10-01T12:00:00Z",
  },
  { id: "2", text: "Create a fitness app", createdAt: "2023-10-02T15:30:00Z" },
];

export async function GET() {
  return NextResponse.json(mockIdeas, {
    headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate" },
  });
}
