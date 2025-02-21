interface ChatMessageProps {
    message: { text: string; sender: "user" | "ai" };
  }
  
  export default function ChatMessage({ message }: ChatMessageProps) {
    const isUser = message.sender === "user";
  
    return (
      <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
        <div
          className={`px-4 py-2 max-w-[75%] rounded-lg text-sm shadow-md ${
            isUser
              ? "bg-brand-500 text-white rounded-br-none"
              : "bg-gray-100 text-gray-800 rounded-bl-none dark:bg-gray-800 dark:text-white"
          }`}
        >
          {message.text}
        </div>
      </div>
    );
  }
  