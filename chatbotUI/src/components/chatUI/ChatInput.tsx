import { useState } from "react";
import Button from "../../components/ui/button/Button"; // Reusing your Button component

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSend(text);
    setText(""); // Clear input
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="relative flex items-center">
        <input
          type="text"
          className="w-full px-4 py-6 border rounded-lg text-sm dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-brand-500 pr-12"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button
          onClick={handleSend}
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 py-2 px-4 bg-blue-500 text-white rounded-lg"
        >
          Send
        </Button>
      </div>
    </div>
  );
  
}
