"use client";
import { useState } from "react";

export default function ExportPage() {
  const [plan, setPlan] = useState<string | null>(null);

  const handleExport = async () => {
    const res = await fetch("/api/export", { method: "POST" });
    const data = await res.json();
    setPlan(data.plan);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Export MVP Plan</h1>
      <button
        onClick={handleExport}
        className="p-2 bg-blue-600 text-white rounded"
      >
        Generate Plan
      </button>
      {plan && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Your Plan</h2>
          <pre className="p-4 bg-gray-800 rounded">{plan}</pre>
        </div>
      )}
    </div>
  );
}
