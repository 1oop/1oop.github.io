import React from 'react';
import Nav from './Nav';

interface PaneProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const TmuxPane: React.FC<PaneProps> = ({ title, children, className = "" }) => (
  <div className={`border border-[#3c3c3c] rounded p-2 ${className}`}>
    <div className="border-b border-[#3c3c3c] pb-1 mb-2 flex justify-between items-center">
      <span className="text-[#64dd17]">[{title}]</span>
      <div className="flex gap-1">
        <span className="text-[#6a9955]">z</span>
        <span className="text-[#6a9955]">x</span>
      </div>
    </div>
    {children}
  </div>
);

export const TmuxLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] p-4 font-mono">
    <div className="flex justify-between items-center bg-[#2d2d2d] p-2 mb-4">
      <div className="flex gap-2 items-center">
        <span className="bg-[#64dd17] px-2">0:bash*</span>
        <span className="text-[#6a9955]">1:vim</span>
        <Nav />
      </div>
      <span className="text-[#6a9955]">[Terminal] {new Date().toLocaleDateString()}</span>
    </div>
    {children}
  </div>
);

export default TmuxPane;
