"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const navItems = [
    { path: '/', label: 'home', icon: '🏠' },
    { path: '/articles', label: 'articles', icon: '📝' },
  ];

  return (
    <div className="md:hidden">
      {/* 菜单按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#6a9955] hover:text-[#64dd17] transition-colors"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* 弹出菜单 */}
      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-[#1e1e1e] border border-[#3c3c3c] p-4 space-y-2 shadow-lg">
          {navItems.map(({ path, label, icon }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setIsOpen(false)}
              className={`
                block px-4 py-2 rounded
                ${pathname === path 
                  ? 'bg-[#64dd17]/10 text-[#64dd17]' 
                  : 'text-[#6a9955] hover:text-[#64dd17]'
                }
              `}
            >
              <span>{icon}</span>
              <span className="ml-2">~/{label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
