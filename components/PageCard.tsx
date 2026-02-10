
import React from 'react';

interface PageCardProps {
  children: React.ReactNode;
  centered?: boolean;
}

const PageCard: React.FC<PageCardProps> = ({ children, centered = false }) => {
  return (
    <div className={`animate-fade-up bg-gradient-to-br from-white to-slate-50 text-slate-900 rounded-[32px] p-8 md:p-14 max-w-5xl mx-auto shadow-[0_30px_80px_rgba(0,0,0,0.5)] ${centered ? 'text-center' : ''}`}>
      {children}
    </div>
  );
};

export default PageCard;
