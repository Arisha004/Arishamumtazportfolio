import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Clock, Play, RotateCcw } from 'lucide-react';
import { findBestMatch, getDefaultResponse } from './ChatbotKnowledgeBase';

interface TestCase {
  id: string;
  question: string;
  expectedKeywords: string[];
  category: string;
  status: 'pending' | 'passed' | 'failed' | 'running';
  response?: string;
  score?: number;
}

const QATestSuite: React.FC = () => {
  const [testCases, setTestCases] = useState<TestCase[]>([
    {
      id: '1',
      question: "What are Arisha's main skills?",
      expectedKeywords: ['HTML', 'CSS', 'JavaScript', 'Figma', 'UI/UX'],
      category: 'Skills',
      status: 'pending'
    },
    {
      id: '2',
      question: "How can I contact Arisha?",
      expectedKeywords: ['LinkedIn', 'pk.linkedin.com/in/arisha-mumtaz', 'contact'],
      category: 'Contact',
      status: 'pending'
    },
    {
      id: '3',
      question: "Where is Arisha located?",
      expectedKeywords: ['Karachi', 'Pakistan', 'location'],
      category: 'Location',
      status: 'pending'
    },
    {
      id: '4',
      question: "Does she know Webflow?",
      expectedKeywords: ['Webflow', 'deployment', 'design'],
      category: 'Skills',
      status: 'pending'
    },
    {
      id: '5',
      question: "What services does she offer?",
      expectedKeywords: ['Frontend', 'UI/UX', 'services', 'development'],
      category: 'Services',
      status: 'pending'
    },
    {
      id: '6',
      question: "Can she work with Bootstrap?",
      expectedKeywords: ['Bootstrap', 'CSS', 'framework'],
      category: 'Skills',
      status: 'pending'
    },
    {
      id: '7',
      question: "What's her GitHub profile?",
      expectedKeywords: ['GitHub', 'github.com/Arisha004'],
      category: 'Contact',
      status: 'pending'
    },
    {
      id: '8',
      question: "Tell me about her experience",
      expectedKeywords: ['experience', 'developer', 'designer', 'web'],
      category: 'Experience',
      status: 'pending'
    },
    {
      id: '9',
      question: "Can I hire her for freelance work?",
      expectedKeywords: ['freelance', 'hire', 'projects', 'LinkedIn'],
      category: 'Services',
      status: 'pending'
    },
    {
      id: '10',
      question: "Random unrelated question about cooking",
      expectedKeywords: ['Arisha', 'skills', 'help', 'know'],
      category: 'Default Response',
      status: 'pending'
    }
  ]);

  const [isRunning, setIsRunning] = useState(false);
  const [currentTest, setCurrentTest] = useState<string | null>(null);

  const runSingleTest = (testCase: TestCase): Promise<TestCase> => {
    return new Promise((resolve) => {
      setCurrentTest(testCase.id);
      
      setTimeout(() => {
        const match = findBestMatch(testCase.question);
        const response = match ? match.response : getDefaultResponse();
        
        // Calculate score based on keyword matches
        const matchedKeywords = testCase.expectedKeywords.filter(keyword =>
          response.toLowerCase().includes(keyword.toLowerCase())
        );
        
        const score = (matchedKeywords.length / testCase.expectedKeywords.length) * 100;
        const status = score >= 50 ? 'passed' : 'failed';
        
        resolve({
          ...testCase,
          response,
          score: Math.round(score),
          status
        });
      }, 1000 + Math.random() * 1000); // Simulate AI processing time
    });
  };

  const runAllTests = async () => {
    setIsRunning(true);
    const updatedTests = [...testCases];

    for (let i = 0; i < updatedTests.length; i++) {
      updatedTests[i] = { ...updatedTests[i], status: 'running' };
      setTestCases([...updatedTests]);

      const result = await runSingleTest(updatedTests[i]);
      updatedTests[i] = result;
      setTestCases([...updatedTests]);
    }

    setCurrentTest(null);
    setIsRunning(false);
  };

  const resetTests = () => {
    setTestCases(testCases.map(test => ({
      ...test,
      status: 'pending',
      response: undefined,
      score: undefined
    })));
    setIsRunning(false);
    setCurrentTest(null);
  };

  const getStatusIcon = (status: TestCase['status']) => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'running':
        return <Clock className="h-4 w-4 text-blue-500 animate-spin" />;
      default:
        return <div className="h-4 w-4 rounded-full bg-gray-300" />;
    }
  };

  const passedTests = testCases.filter(t => t.status === 'passed').length;
  const failedTests = testCases.filter(t => t.status === 'failed').length;
  const totalTests = testCases.length;

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">🧪 Chatbot QA Test Suite</h2>
        <p className="text-muted-foreground mb-6">
          Automated testing to ensure the chatbot provides accurate responses about Arisha's profile.
        </p>

        {/* Test Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Test Results Summary</span>
              <div className="flex space-x-2">
                <Button 
                  onClick={runAllTests} 
                  disabled={isRunning}
                  className="flex items-center space-x-2"
                >
                  <Play className="h-4 w-4" />
                  <span>{isRunning ? 'Running...' : 'Run All Tests'}</span>
                </Button>
                <Button variant="outline" onClick={resetTests} disabled={isRunning}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-600">
                ✅ Passed: {passedTests}/{totalTests}
              </Badge>
              <Badge variant="outline" className="text-red-600 border-red-600">
                ❌ Failed: {failedTests}/{totalTests}
              </Badge>
              <Badge variant="outline">
                ⏳ Pending: {totalTests - passedTests - failedTests}/{totalTests}
              </Badge>
            </div>
            
            {passedTests + failedTests > 0 && (
              <div className="mt-4">
                <div className="text-sm text-muted-foreground mb-2">
                  Success Rate: {Math.round((passedTests / (passedTests + failedTests)) * 100)}%
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${(passedTests / (passedTests + failedTests)) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Test Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {testCases.map((testCase) => (
            <Card 
              key={testCase.id} 
              className={`transition-all duration-300 ${
                currentTest === testCase.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm flex items-center space-x-2">
                    {getStatusIcon(testCase.status)}
                    <span>Test #{testCase.id}</span>
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {testCase.category}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  <strong>Q:</strong> {testCase.question}
                </CardDescription>
              </CardHeader>
              
              {testCase.response && (
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">
                      <strong>Response:</strong>
                    </div>
                    <div className="text-sm bg-muted p-2 rounded max-h-24 overflow-y-auto">
                      {testCase.response.split('\n').slice(0, 3).join('\n')}
                      {testCase.response.split('\n').length > 3 && '...'}
                    </div>
                    
                    {testCase.score !== undefined && (
                      <div className="flex items-center justify-between text-xs">
                        <span>Keyword Match Score:</span>
                        <Badge variant={testCase.score >= 50 ? "default" : "destructive"}>
                          {testCase.score}%
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>How to Use This Test Suite</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>1. Click "Run All Tests" to automatically test all chatbot responses</p>
            <p>2. Each test checks if the response contains expected keywords</p>
            <p>3. A test passes if it matches ≥50% of expected keywords</p>
            <p>4. Tests cover: Skills, Contact Info, Location, Services, and Edge Cases</p>
            <p>5. Use "Reset" to clear results and run tests again</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QATestSuite;