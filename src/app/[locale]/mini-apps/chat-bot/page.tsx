'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function ChatBot() {
    const [messages, setMessages] = useState([{ id: 1, sender: 'bot', text: 'Xin chào! Tôi có thể giúp gì cho bạn?' }]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (!input.trim()) return;

        const newMsg = {
            id: Date.now(),
            sender: 'user',
            text: input,
        };

        setMessages(prev => [...prev, newMsg]);
        setInput('');

        // Fake bot reply
        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: 'bot',
                    text: 'Tôi đã nhận được tin nhắn của bạn!',
                },
            ]);
        }, 500);
    };

    return (
        <section className="py-10">
            <Card className="mx-auto flex h-[550px] w-full max-w-md flex-col rounded-2xl border p-4 shadow-lg">
                <CardContent className="flex h-full flex-col p-0">
                    <ScrollArea className="flex-1 pr-2">
                        <div className="mt-2 flex flex-col gap-3">
                            {messages.map(msg => (
                                <div
                                    key={msg.id}
                                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                                        msg.sender === 'user'
                                            ? 'self-end rounded-br-none bg-blue-500 text-white'
                                            : 'self-start rounded-bl-none bg-gray-200 text-black'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                    <div className="mt-3 flex items-center gap-2">
                        <Input
                            placeholder="Nhập tin nhắn..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && sendMessage()}
                            className="rounded-xl"
                        />
                        <Button onClick={sendMessage} size="icon" className="rounded-xl">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
