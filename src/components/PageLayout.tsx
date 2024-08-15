// src/components/PageLayout.tsx
import React, { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface PageLayoutProps {
  children?: ReactNode | null;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-400 min-h-screen flex">
      <Sidebar />
      <div id="Sidebar_and_Content" className="flex-grow p-4 ml-20">
        {children}
      </div>
    </div>
  );
};
