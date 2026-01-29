"use client";
import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  // Simple predefined responses
  const responses: Record<string, string> = {
    "I have a headache": "I'm sorry to hear that. Please drink water and rest. If it persists, consult a doctor.",
    "I have a fever": "Take your temperature regularly. Stay hydrated and rest. If it goes above 39°C, visit the clinic.",
    "I need an appointment": "Sure! You can book an appointment by clicking the 'Book Doctor' button on our page.",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user's message
    setMessages([...messages, { type: "user", text: input }]);

    // Add bot response after a short delay
    setTimeout(() => {
      const reply = responses[input] || "Sorry, I didn't understand that. Can you try another question?";
      setMessages((prev) => [...prev, { type: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  const handleKeyDown = (e: { key: string; }) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl overflow-hidden">
      
      {/* Chat Header */}
      <div className="bg-blue-600 text-white p-4 text-center font-semibold text-lg">
        Patient Support Chat
      </div>

      {/* Chat Messages */}
      <div className="p-4 space-y-3 h-72 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs break-words ${
                msg.type === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 border-t flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
