import { z } from 'zod';

const TECH_STACK = {
  frontend: 'Next.js (serverless, SSR, API routes)',
  backend: 'Supabase (PostgreSQL, RLS, real-time)',
  ui: 'Shadcn/ui + Tailwind (modular, fast)',
  payments: 'Stripe (scalable, secure)',
  cache: 'Vercel Edge (perf boost)',
};

const STRUCTURE = `
vibecheckr-mvp/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── [entity]/
│   │   │   └── webhooks/
│   │   ├── [entity]/
│   │   └── dashboard/
│   ├── components/
│   │   ├── EntityCard.tsx
│   │   └── Form.tsx
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── stripe.ts
│   │   └── validators.ts
│   ├── types/
├── public/
└── middleware.ts
`;

const NOTES = `
- **Efficiency**: Indexed queries, edge caching.
- **Security**: Zod validation, RLS.
- **Scale**: Serverless, dynamic routes.
`;

export function generatePlan(idea: string, responses: string[]) {
  try {
    const ideaSchema = z.string().min(3).parse(idea);
    const parsedIdea = ideaSchema.toLowerCase().includes('tutor') ? 'tutoring' : 'generic';

    return {
      idea,
      techStack: TECH_STACK,
      structure: STRUCTURE,
      code: `
  // src/app/api/[entity]/route.ts
  import { supabase } from '@/lib/supabase';
  import { z } from 'zod';
  import { NextResponse } from 'next/server';

  const QuerySchema = z.object({
    filter: z.string().optional(),
    limit: z.number().min(1).max(100).default(20),
  });

  export async function GET(req: Request, { params }: { params: { entity: string } }) {
    const { entity } = params;
    const { searchParams } = new URL(req.url);
    const { filter, limit } = QuerySchema.parse(Object.fromEntries(searchParams));

    const query = supabase
      .from(entity)
      .select('*')
      .limit(limit)
      .order('created_at', { ascending: false });

    if (filter) query.textSearch('name', filter);

    const { data, error } = await query;
    if (error) return NextResponse.json({ error }, { status: 500 });

    return NextResponse.json(data, {
      headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate' },
    });
  }
  `,
      notes: NOTES,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Invalid idea input: ' + error.message);
    }
    throw new Error('Invalid idea input: An unknown error occurred.');
  }
}