import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { findBestMatch, getDefaultResponse } from './ChatbotKnowledgeBase';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Arisha's AI assistant 👋 I can tell you all about her skills, experience, and how to get in touch with her. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const match = findBestMatch(text);
      const response = match ? match.response : getDefaultResponse();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  const formatMessageText = (text: string) => {
    // Convert markdown-style formatting to JSX
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.split('**').map((segment, segIndex) => 
          segIndex % 2 === 1 ? <strong key={segIndex}>{segment}</strong> : segment
        )}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      {/* Chat Widget Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isOpen 
            ? 'bg-destructive hover:bg-destructive/90 rotate-180' 
            : 'bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:scale-110'
        }`}
        style={{
          background: isOpen ? undefined : 'var(--gradient-chatbot)',
          boxShadow: isOpen ? undefined : 'var(--shadow-float)'
        }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-card rounded-2xl shadow-2xl border border-border z-40 flex flex-col overflow-hidden transition-all duration-300 animate-in slide-in-from-bottom-4"
             style={{ boxShadow: 'var(--shadow-chatbot)' }}>
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border"
               style={{ background: 'var(--gradient-chatbot)' }}>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Arisha's AI Assistant</h3>
                <p className="text-xs text-white/80">Ask me about Arisha's skills!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-2 ${
                    message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser 
                      ? 'bg-primary text-secondary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {message.isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-muted text-muted-foreground'
                  }`}
                       style={{
                         background: message.isUser ? 'var(--gradient-chatbot)' : undefined,
                         color: message.isUser ? 'white' : undefined
                       }}>
                    <p className="text-sm leading-relaxed">
                      {formatMessageText(message.text)}
                    </p>
                    <p className={`text-xs mt-1 opacity-70 ${
                      message.isUser ? 'text-white/70' : 'text-muted-foreground/70'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start space-x-2">
                  <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-muted rounded-2xl px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Input */}
          <div className="border-t border-border p-4">
            <div className="flex space-x-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Arisha's skills..."
                className="flex-1 rounded-full border-border focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                disabled={isTyping}
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="rounded-full h-10 w-10 p-0 transition-all duration-200 hover:scale-105"
                style={{ background: 'var(--gradient-chatbot)' }}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Powered by AI • Ask about skills, contact info, or services
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;