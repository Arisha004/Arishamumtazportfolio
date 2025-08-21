import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Robot3DProps {
  onMessageShow?: () => void;
  className?: string;
}

const Robot3D: React.FC<Robot3DProps> = ({ onMessageShow, className }) => {
  const [isWaving, setIsWaving] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show message after 4-5 seconds
    const timer = setTimeout(() => {
      setShowMessage(true);
      onMessageShow?.();
    }, 4500);

    // Stop waving after a few cycles
    const waveTimer = setTimeout(() => {
      setIsWaving(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(waveTimer);
    };
  }, [onMessageShow]);

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      {/* 3D Robot */}
      <div className="relative mb-4">
        {/* Robot Body */}
        <div className="relative w-20 h-24 mx-auto">
          {/* Main Body */}
          <div 
            className="w-16 h-20 mx-auto rounded-2xl relative overflow-hidden shadow-lg"
            style={{
              background: 'var(--gradient-chatbot)',
              transform: 'perspective(200px) rotateX(5deg)',
              boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
            }}
          >
            {/* Body Gradient Overlay */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(0,0,0,0.1) 100%)'
              }}
            />
            
            {/* Screen/Face */}
            <div 
              className="absolute top-2 left-2 right-2 h-12 bg-gray-900 rounded-xl flex items-center justify-center"
              style={{
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)'
              }}
            >
              {/* Eyes */}
              <div className="flex space-x-2">
                <div 
                  className="w-3 h-3 bg-cyan-400 rounded-full relative animate-pulse"
                  style={{
                    boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)'
                  }}
                >
                  {/* Eye shine */}
                  <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-80"></div>
                </div>
                <div 
                  className="w-3 h-3 bg-cyan-400 rounded-full relative animate-pulse"
                  style={{
                    boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)',
                    animationDelay: '0.1s'
                  }}
                >
                  {/* Eye shine */}
                  <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-80"></div>
                </div>
              </div>
            </div>

            {/* Body Details */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white/15 rounded-full"></div>
          </div>

          {/* Arms */}
          <div 
            className={cn(
              "absolute top-6 -left-2 w-4 h-8 rounded-full transition-all duration-500 origin-top",
              isWaving ? "animate-bounce" : ""
            )}
            style={{
              background: 'var(--gradient-chatbot)',
              transform: isWaving ? 'rotate(-20deg) translateY(-2px)' : 'rotate(10deg)',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.2)'
            }}
          >
            {/* Hand */}
            <div 
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full"
              style={{
                boxShadow: '0 2px 6px rgba(34, 211, 238, 0.4)'
              }}
            />
          </div>
          
          <div 
            className="absolute top-6 -right-2 w-4 h-8 rounded-full"
            style={{
              background: 'var(--gradient-chatbot)',
              transform: 'rotate(-10deg)',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.2)'
            }}
          >
            {/* Hand */}
            <div 
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full"
              style={{
                boxShadow: '0 2px 6px rgba(34, 211, 238, 0.4)'
              }}
            />
          </div>

          {/* Antenna */}
          <div 
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-4"
            style={{
              background: 'linear-gradient(to top, hsl(var(--primary)), hsl(var(--accent)))'
            }}
          />
          <div 
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
            style={{
              boxShadow: '0 0 12px rgba(34, 211, 238, 0.8)'
            }}
          />
        </div>
      </div>

      {/* Floating Message */}
      {showMessage && (
        <div 
          className="absolute -top-12 left-20px transform -translate-x-1/2 bg-white dark:bg-card px-4 py-2 rounded-2xl shadow-lg border border-border animate-fade-in whitespace-nowrap z-10"
          style={{
            boxShadow: 'var(--shadow-chatbot)'
          }}
        >
          <div className="text-sm text-muted-foreground text-center mt-1">
            Want to know more about me?
          </div>
          <div className="text-xs text-muted-foreground text-center mt-1">
            Click here! 👆
          </div>
          
          {/* Speech bubble tail */}
          <div 
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-card"
          />
        </div>
      )}
    </div>
  );
};

export default Robot3D;