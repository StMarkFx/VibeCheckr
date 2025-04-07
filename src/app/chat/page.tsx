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

  const handleMessage = async (message: string, newMode: 'validate' | 'plan' | null = mode) => {
    setMode(newMode);User: true }]);
    const newMessages = [...messages, { text: message, isUser: true }];
    setMessages(newMessages);    const res = await fetch('/api/chat', {

    const res = await fetch('/api/chat', {ngify({ message, context: messages.map((m) => m.text).join(' | '), mode: newMode }),
      method: 'POST',
      body: JSON.stringify({ message, context: messages.map((m) => m.text).join(' | '), mode: newMode }),st { reply } = await res.json();
    });revMessages, { text: reply, isUser: false }]);
    const { reply } = await res.json();
    setMessages([...newMessages, { text: reply, isUser: false }]);
    setInput('');
  };  return (
lassName="flex flex-col h-screen bg-gray-900 text-white">
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <h1 className="p-4 text-3xl font-bold">VibeCheckr</h1>
      <div className="flex-1 overflow-y-auto p-4">{msg.text} isUser={msg.isUser} />
        {messages.map((msg, i) => (
          <ChatBubble key={i} text={msg.text} isUser={msg.isUser} />>
        ))}=== null && (
      </div>() => handleMessage('Skip to planner', 'plan')} className="m-2 bg-purple-600 hover:bg-purple-700">
      {mode === null && (
        <Button onClick={() => handleMessage('Skip to planner', 'plan')} className="m-2 bg-purple-600 hover:bg-purple-700">
          Skip to Planner
        </Button>nput
      )}e={input}
      <input => setInput(e.target.value)}
        value={input}
        onChange={(e) => setInput(e.target.value)}ter') handleMessage(input, mode || 'validate');
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleMessage(input, mode || 'validate');assName="p-2 bg-gray-800 border-t border-gray-700 focus:outline-none"
        }}
        className="p-2 bg-gray-800 border-t border-gray-700 focus:outline-none"
        placeholder="Drop your idea here..."v>
      />
    </div>  );
}