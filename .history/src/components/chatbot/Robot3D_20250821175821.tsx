import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Robot3DProps {
  onMessageShow?: () => void;
  className?: string;
}

const Robot3D: React.FC<Robot3DProps> = ({ onMessageShow, className }) => {
  const [isWaving, setIsWaving] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Show message after 4.5s
    const timer = setTimeout(() => {
      setShowMessage(true);
      onMessageShow?.();
    }, 4500);

    // Stop waving after ~6s
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
      {/* Robot Image Container */}
      <div
        className={cn(
          "relative w-40 h-40",
          isWaving ? "animate-bounce" : ""
        )}
      >
        {/* Placeholder while image loads */}
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 animate-pulse rounded-xl" />
        )}

        {/* Robot Image */}
        <img
          src="./images/" // 👈 change this to your robot image path
          alt="Robot"
          onLoad={() => setLoaded(true)}
          className={cn(
            "w-full h-full object-contain transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      {/* Floating Message */}
      {showMessage && (
        <div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black dark:bg-card px-4 py-2 rounded-2xl shadow-lg border border-border animate-fade-in whitespace-nowrap z-10"
          style={{
            boxShadow: "var(--shadow-chatbot)",
          }}
        >
          <div className="text-sm text-muted-foreground text-center mt-1">
            Want to know more about me?
          </div>
          <div className="text-xs text-muted-foreground text-center mt-1">
            Click here! 👆
          </div>

          {/* Speech bubble tail */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-card" />
        </div>
      )}
    </div>
  );
};

export default Robot3D;
