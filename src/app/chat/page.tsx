'use client';
import { useState } from 'react';
import { WELCOME_MESSAGE } from '@/constants/messages';
import ChatBubble from '@/components/ChatBubble';
import Button from '@/components/Button';

interface Message {
  text: string;
  isUser: boolean;
}

export default function VibeCheckrChat() {
  const [messages, setMessages] = useState<Message[]>([
    { text: WELCOME_MESSAGE, isUser: false },
  ]);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'validate' | 'plan' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleMessage = async (message: string, newMode: 'validate' | 'plan' | null = mode) => {
    if (!message.trim()) {
      setError('Message cannot be empty.');
      return;
    }
    setError(null);
    setMode(newMode);
    const newMessages = [...messages, { text: message, isUser: true }];
    setMessages(newMessages);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message, context: messages.map((m) => m.text).join(' | '), mode: newMode }),
      });
      const { reply } = await res.json();
      setMessages((prevMessages) => [...prevMessages, { text: reply, isUser: false }]);
    } catch (err) {
      console.error('Failed to send message:', err);
      setError('Failed to send message. Please try again.');
    }
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <h1 className="p-4 text-3xl font-bold">VibeCheckr</h1>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <ChatBubble key={i} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      {error && <p className="text-red-500 p-2">{error}</p>}
      {mode === null && (
        <Button onClick={() => handleMessage('Skip to planner', 'plan')} className="m-2 bg-purple-600 hover:bg-purple-700">
          Skip to Planner
        </Button>
      )}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleMessage(input, mode || 'validate');
        }}
        className="p-2 bg-gray-800 border-t border-gray-700 focus:outline-none"
        placeholder="Drop your idea here..."
      />
    </div>
  );
}