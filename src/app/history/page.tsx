"use client";
import { useEffect, useState } from "react";

interface Idea {
  id: string;
  text: string;
  response: string;
  createdAt: string;
}

export default function HistoryPage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchHistory() {
      const res = await fetch("/api/history");
      const data = await res.json();
      setIdeas(data);
    }
    fetchHistory();
  }, []);

  const filteredIdeas = ideas.filter((idea) =>
    idea.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Idea History</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search ideas..."
        className="p-2 mb-4 w-full border rounded"
      />
      <ul className="space-y-2">
        {filteredIdeas.map((idea) => (
          <li key={idea.id} className="p-4 bg-gray-800 rounded-lg">
            <p>
              <strong>Idea:</strong> {idea.text}
            </p>
            <p>
              <strong>Response:</strong> {idea.response}
            </p>
            <small className="text-gray-400">
              Created: {new Date(idea.createdAt).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
