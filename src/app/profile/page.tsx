'use client';
import { useEffect, useState } from 'react';
import { fetchData } from '@/lib/fetchData';

interface Idea {
  id: string;
  text: string;
  createdAt: string;
}

export default function ProfilePage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    fetchData<Idea[]>('/api/ideas').then(setIdeas).catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Saved Ideas</h1>
      <ul className="space-y-2">
        {ideas.map((idea) => (
          <li key={idea.id} className="p-4 bg-gray-800 rounded-lg">
            <p>{idea.text}</p>
            <small className="text-gray-400">Created: {new Date(idea.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
