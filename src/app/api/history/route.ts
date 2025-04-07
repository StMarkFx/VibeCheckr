import { NextResponse } from 'next/server';

const mockHistory = [
  { id: '1', text: 'Build a tutoring platform', response: 'Great idea!', createdAt: '2023-10-01T12:00:00Z' },
  { id: '2', text: 'Create a fitness app', response: 'Feasible and scalable!', createdAt: '2023-10-02T15:30:00Z' },
];

export async function GET() {
  return NextResponse.json(mockHistory, {
    headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate' },
  });
}
