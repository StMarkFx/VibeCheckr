'use client';
import { useEffect, useState } from 'react';

interface Idea {
  id: string;
  text: string;
  response: string;
  createdAt: string;
}

export default function HistoryPage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    async function fetchHistory() {
      const res = await fetch('/api/history');
      const data = await res.json();
      setIdeas(data);
    }
    fetchHistory();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Idea History</h1>
      <ul className="space-y-2">
        {ideas.map((idea) => (
          <li key={idea.id} className="p-4 bg-gray-800 rounded-lg">
            <p><strong>Idea:</strong> {idea.text}</p>
            <p><strong>Response:</strong> {idea.response}</p>
            <small className="text-gray-400">Created: {new Date(idea.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
