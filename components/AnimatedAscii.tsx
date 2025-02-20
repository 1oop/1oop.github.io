"use client"
import { useState, useEffect } from 'react';

interface AnimatedAsciiProps {
  className?: string;
}

export const MatrixRain: React.FC<AnimatedAsciiProps> = ({ className }) => {
  const [frame, setFrame] = useState(0);
  const matrix = "10".split('');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setFrame(f => (f + 1) % 10);
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <pre className={`text-[#64dd17] text-xs leading-none opacity-30 ${className}`}>
      {Array(6).fill(0).map((_, i) => (
        <div key={i}>
          {Array(8).fill(0).map((_, j) => 
            matrix[(i + j + frame) % matrix.length]
          ).join(' ')}
        </div>
      ))}
    </pre>
  );
};

export const LoadingSpinner: React.FC<AnimatedAsciiProps> = ({ className }) => {
  const [frame, setFrame] = useState(0);
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setFrame(f => (f + 1) % frames.length);
    }, 100);
    return () => clearInterval(timer);
  }, []);

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
  }, []);

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
