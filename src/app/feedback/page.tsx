'use client';
import { useState } from 'react';

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ feedback }),
    });
    setFeedback('');
    alert('Thank you for your feedback!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Feedback</h1>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Share your thoughts..."
      />
      <button
        onClick={handleSubmit}
        className="p-2 bg-green-600 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
}
