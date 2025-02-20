"use client"
import { useState, useEffect } from 'react';

interface AnimatedAsciiProps {
  className?: string;
}


export const LoadingSpinner: React.FC<AnimatedAsciiProps> = ({ className }) => {
  const [frame, setFrame] = useState(0);
  const frames = ['⠋', '⠙', '⠴', '⠦'];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setFrame(f => (f + 1) % frames.length);
    }, 150);
    return () => clearInterval(timer);
  }, [frames.length]);

  return (
    <span className={`text-[#42a5f5] inline-block ${className}`}>
      {frames[frame]}
    </span>
  );
};

export const CoffeeSteam: React.FC<AnimatedAsciiProps> = ({ className }) => {
  const [frame, setFrame] = useState(0);
  const frames = [
    `  ░▒▓`,
    `   ░▒▓`,
    `    ░▒▓`,
    `     ░▒`,
    `      ░`,
    `     ░▒`,
    `    ░▒▓`,
    `   ░▒▓`,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame(f => (f + 1) % frames.length);
    }, 200);
    return () => clearInterval(timer);
  }, [frames.length]);

  return (
    <pre className={`text-[#ce9178] text-xs ${className}`}>
      {frames[frame]}
      {`
    (
      )
    (
  ______
 |      | ]
 | Java | ]
 |_____ |`}
    </pre>
  );
};
