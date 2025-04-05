"use client";

import { useState, useEffect, useRef } from "react";
import { User, Dumbbell } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { CircleLoader, HashLoader } from "react-spinners";

interface Message {
    role: "user" | "bot";
    content: string;
}

export default function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const chatRef = useRef<HTMLDivElement | null>(null);
    const [userId, setUserId] = useState<string>("");

    useEffect(() => {
        let storedUserId = localStorage.getItem("chatUserId");
        if (!storedUserId) {
            storedUserId = `user-${Date.now()}-${Math.random().toString(36).substring(7)}`;
            localStorage.setItem("chatUserId", storedUserId);
        }
        setUserId(storedUserId);
    }, []);

    useEffect(() => {
        chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch("https://polo-cb.vercel.app/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, prompt: input }),
            });

            const data = await response.json();
            const botMessage: Message = { role: "bot", content: data.response };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { role: "bot", content: "Error fetching response." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-screen w-full p-4 bg-gray-100 dark:bg-gray-900 transition-all duration-300 rounded-lg shadow-lg">
            {/* Chat messages area */}
            <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner border border-gray-300 dark:border-gray-700">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start my-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        {msg.role === "bot" && <Dumbbell className="w-8 h-8 text-gray-600 dark:text-gray-300 mr-3" color="#663399"/>}
                        <div
                            className={`p-4 rounded-lg max-w-[75%] shadow-md`}
                            style={{
                                backgroundColor: msg.role === "user" ? "#5750F1" : "#7765F3",
                                color:  "white",
                                alignSelf: msg.role === "user" ? "flex-end" : "flex-start"
                            }}
                        >
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                        {msg.role === "user" && <User className="w-8 h-8 text-gray-600 dark:text-gray-300 ml-3" color="#5752F1"/>}
                    </div>
                ))}

                {loading && (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white">
                            <Dumbbell className="w-5 h-5" color="#5750F1"/>
                        </div>
                        <HashLoader size={35} color="#5750F1" loading={true} />
                    </div>
                )}

                <div ref={chatRef}></div>
            </div>

            {/* Input box at the bottom */}
            <div className="w-full p-3 bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 flex gap-2 items-center">
                <input
                    className="flex-1 p-3 border border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-[#5750F1]-500 dark:focus:ring-[#5750F1]-400"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button
                    className="p-3 px-5 bg-[#5750F1] text-white rounded-lg hover:bg-[#5750F1]-500 transition-all duration-200 shadow-md disabled:bg-gray-400"
                    onClick={sendMessage}
                    disabled={!input.trim() || loading}
                >
                    {loading ? "..." : "Send"}
                </button>
            </div>

            {/* Tailwind CSS Animation for Ripple Effect */}
            <style jsx>{`
        @keyframes ripple {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.5);
                opacity: 0.5;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
        .animate-ripple {
            animation: ripple 1.2s infinite;
        }
    `}</style>
        </div>

    );
}
