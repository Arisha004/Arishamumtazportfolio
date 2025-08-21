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
    const timer = setTimeout(() => {
      setShowMessage(true);
      onMessageShow?.();
    }, 4500);

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
      {/* Cute Robot */}
      <div className="relative w-32 h-40">
        {/* Head */}
        <div className="relative w-28 h-28 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
          {/* Face */}
          <div className="w-20 h-20 bg-purple-400 rounded-full flex flex-col items-center justify-center relative">
            <div className="flex space-x-3 mb-1">
              <div className="w-5 h-5 bg-black rounded-full relative">
                <div className="w-2 h-2 bg-white rounded-full absolute top-0.5 left-0.5" />
              </div>
              <div className="w-5 h-5 bg-black rounded-full relative">
                <div className="w-2 h-2 bg-white rounded-full absolute top-0.5 left-0.5" />
              </div>
            </div>
            <div className="w-10 h-2 border-b-2 border-black rounded-full"></div>
            {/* Blush */}
            <div className="absolute -left-3 bottom-5 w-3 h-3 bg-pink-400 rounded-full opacity-70"></div>
            <div className="absolute -right-3 bottom-5 w-3 h-3 bg-pink-400 rounded-full opacity-70"></div>
          </div>

          {/* Bow */}
          <div className="absolute -top-4 flex space-x-1">
            <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
            <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Body */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-28 bg-purple-500 rounded-2xl shadow-md">
          <div className="absolute inset-x-7 top-8 w-10 h-10 bg-pink-400 rounded-full"></div>
        </div>

        {/* Left Arm */}
        <div className="absolute top-16 -left-10">
          <div className="w-4 h-14 bg-purple-500 rounded-full relative">
            <div className="w-6 h-6 bg-purple-400 rounded-full absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>

        {/* Right Arm (Waving) */}
        <div
          className={cn(
            "absolute top-16 -right-10 origin-top",
            isWaving && "animate-wave"
          )}
        >
          <div className="w-4 h-14 bg-purple-500 rounded-full relative">
            <div className="w-6 h-6 bg-purple-400 rounded-full absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>

        {/* Legs */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-5">
          <div className="w-7 h-12 bg-purple-500 rounded-full"></div>
          <div className="w-7 h-12 bg-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Message (optional) */}
      {showMessage && (
        <div className="mt-3 px-4 py-2 bg-pink-200 text-purple-800 rounded-xl shadow">
          Hello! 💜
        </div>
      )}
    

      {/* Floating Message */}
      {showMessage && (
        <div 
          className="absolute -top-12 left-10px transform -translate-x-1/2 bg-black dark:bg-card px-4 py-2 rounded-2xl shadow-lg border border-border animate-fade-in whitespace-nowrap z-10"
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