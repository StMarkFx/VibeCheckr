'use client';
import { useState } from 'react';
import ChatBubble from '@/components/ChatBubble';
import Button from '@/components/Button';

export default function VibeCheckrChat() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Yo, welcome to VibeCheckr! Wanna vibe-check an idea or skip to planning an MVP?', isUser: false },
  ]);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'validate' | 'plan' | null>(null);

  const sendMessage = async () => {
    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: input, context: messages.map(m => m.text).join(' | '), mode }),
    });
    const { reply } = await res.json();
    setMessages([...newMessages, { text: reply, isUser: false }]);
    setInput('');
  };

  const skipToPlanner = async () => {
    setMode('plan');
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: 'Skip to planner', context: messages.map(m => m.text).join(' | '), mode: 'plan' }),
    });
    const { reply } = await res.json();
    setMessages([...messages, { text: reply, isUser: false }]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <h1 className="p-4 text-3xl font-bold">VibeCheckr</h1>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <ChatBubble key={i} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      {mode === null && (
        <Button onClick={skipToPlanner} className="m-2 bg-purple-600 hover:bg-purple-700">
          Skip to Planner
        </Button>
      )}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            if (!mode) setMode('validate');
            sendMessage();
          }
        }}
        className="p-2 bg-gray-800 border-t border-gray-700 focus:outline-none"
        placeholder="Drop your idea here..."
      />
    </div>
  );
}