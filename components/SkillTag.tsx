"use client"
import { useState } from 'react';
import { TechLogos } from './TechLogos';

interface SkillTagProps {
  name: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-[#ce9178] hover:text-[#64dd17] transition-colors">
        {name}
      </span>
      
      {isHovered && (
        <pre className="absolute z-10 -top-24 left-1/2 -translate-x-1/2 
                       bg-[#1e1e1e] border border-[#3c3c3c] p-2 rounded
                       text-[#64dd17] text-xs whitespace-pre">
          {TechLogos[name]}
        </pre>
      )}
    </span>
  );
};
