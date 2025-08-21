import React, { useEffect } from 'react';
import SmartChatbot from './SmartChatbot';

/**
 * Global Chatbot Component
 * 
 * This component can be added to any page without modifying existing content.
 * Simply import and add <GlobalChatbot /> anywhere in your JSX.
 * 
 * Usage:
 * import GlobalChatbot from '@/components/chatbot/GlobalChatbot';
 * 
 * function MyPage() {
 *   return (
 *     <div>
 *       <!-- Your existing content -->
 *       <GlobalChatbot />
 *     </div>
 *   );
 * }
 */

const GlobalChatbot: React.FC = () => {
  // Add any global chatbot initialization logic here
  useEffect(() => {
    // Log chatbot initialization
    console.log('🤖 Arisha\'s AI Assistant loaded successfully');
    
    // Optional: Track chatbot usage analytics
    // analytics.track('chatbot_loaded');
  }, []);

  return <SmartChatbot />;
};

export default GlobalChatbot;