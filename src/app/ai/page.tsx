"use client";

import { useState, useEffect, useRef } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { User, Dumbbell } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("https://your-backend-url.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", content: "Error fetching response" }]);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col h-full w-full p-4 bg-gray-100 dark:bg-gray-900 transition-all duration-300 rounded-lg shadow-lg">
      <Breadcrumb pageName="Chatbot" />
      <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner border border-gray-300 dark:border-gray-700 h-[75vh]">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start my-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "bot" && (
              <Dumbbell className="w-10 h-10 text-gray-700 dark:text-gray-300 mr-2" />
            )}
            <div className={`p-3 rounded-lg max-w-[75%] shadow-md ${msg.role === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300 dark:bg-gray-700 text-black dark:text-white"}`}>
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
            {msg.role === "user" && (
              <User className="w-10 h-10 text-gray-700 dark:text-gray-300 ml-2" />
            )}
          </div>
        ))}
        <div ref={chatRef}></div>
      </div>
      <div className="flex gap-2 mt-4 items-center w-full">
        <input
          className="flex-1 p-3 border border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="p-3 px-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
