import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, CheckCircle, User, Code, Mail, MapPin } from 'lucide-react';

const ChatbotTest: React.FC = () => {
  const testQuestions = [
    "What are Arisha's skills?",
    "How can I contact Arisha?",
    "What services does she offer?",
    "Tell me about her experience",
    "Where is she located?",
    "What is her LinkedIn profile?",
    "Can she work with Figma?",
    "Does she know JavaScript?"
  ];

  const features = [
    {
      icon: <User className="h-5 w-5" />,
      title: "Personal Information",
      description: "Ask about background, location, and experience"
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Technical Skills",
      description: "Learn about HTML, CSS, JavaScript, Figma, Webflow expertise"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Contact Details",
      description: "Get LinkedIn, GitHub, and professional contact information"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Services & Pricing",
      description: "Discover available services and collaboration options"
    }
  ];

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <MessageCircle className="h-8 w-8 text-primary" />
          AI Chatbot Testing Guide
        </h2>
        <p className="text-lg text-muted-foreground">
          Test the chatbot functionality with these sample questions and features
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {features.map((feature, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <CardTitle className="text-sm">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Test Questions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Sample Test Questions
          </CardTitle>
          <CardDescription>
            Try these questions in the chatbot to test its functionality
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {testQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start text-left h-auto p-3 text-sm"
                onClick={() => {
                  // This would ideally send the question to the chatbot
                  console.log(`Test question: ${question}`);
                }}
              >
                <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                {question}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Integration Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            Integration Complete ✅
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Chatbot widget added to bottom-right corner
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Knowledge base loaded with 20+ responses
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Professional styling with gradient themes
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Responsive design for all devices
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Dark/Light mode support
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatbotTest;