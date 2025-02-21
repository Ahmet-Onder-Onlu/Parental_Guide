import { useState, useEffect, useRef } from "react";
import ChatMessage from "../../components/chatUI/ChatMessage";
import ChatInput from "../../components/chatUI/ChatInput";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    // Simulating AI response (replace with API call)
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: `AI Response to: "${text}"`,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[90vh] w-full bg-white dark:bg-gray-900">
      {/* Title */}
      <div className="bg-blue-500 text-white p-4 text-center text-2xl font-semibold">
        AI Chat
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {loading && <ChatMessage message={{ text: "Thinking...", sender: "ai" }} />}
        {/* Add a div at the end of the messages to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <ChatInput onSend={sendMessage} />
    </div>
  );
}