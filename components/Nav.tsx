"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  
  const navItems = [
    { path: '/', label: 'home', icon: '🏠' },
    { path: '/articles', label: 'articles', icon: '📝' },
  ];

  return (
    <nav className="flex gap-4">
      {navItems.map(({ path, label, icon }) => (
        <Link
          key={path}
          href={path}
          className={`
            flex items-center gap-2 px-3 py-1 rounded
            ${pathname === path 
              ? 'bg-[#64dd17]/10 text-[#64dd17]' 
              : 'text-[#6a9955] hover:text-[#64dd17]'
            }
          `}
        >
          <span>{icon}</span>
          <span>~/{label}</span>
        </Link>
      ))}
    </nav>
  );
}
