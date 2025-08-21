import ChatbotWidget from '@/components/chatbot/ChatbotWidget';
import ChatbotTest from '@/components/chatbot/ChatbotTest';
import QATestSuite from '@/components/chatbot/QATestSuite';

const ChatbotDemo = () => {
  return (
    <div className="min-h-screen -background">
      <QATestSuite />
      <div className="border-t border-border">
        <ChatbotTest />
      </div>
      <ChatbotWidget />
    </div>
  );
};

export default ChatbotDemo;