interface ChatBubbleProps {
    text: string;
    isUser: boolean;
  }
  
  export default function ChatBubble({ text, isUser }: ChatBubbleProps) {
    return (
      <div className={`mb-2 p-3 rounded-lg ${isUser ? 'bg-blue-600 ml-auto' : 'bg-gray-700'} max-w-[70%]`}>
        <p>{text}</p>
      </div>
    );
  }