
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tracking', path: '/tracking' },
    { name: 'Innovations', path: '/innovations' },
    { name: 'Cases', path: '/cases' },
    { name: 'Future', path: '/future' },
    { name: 'References', path: '/references' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-sky-500/10 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span>AI Logistics</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-all duration-300 hover:text-sky-400 ${
                  isActive ? 'text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]' : 'text-slate-300'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
