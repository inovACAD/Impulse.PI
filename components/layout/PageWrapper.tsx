
import React from 'react';

interface PageWrapperProps {
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode; // For buttons or other actions in the header
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children, actions }) => {
  return (
    <main className="flex-1 p-6 md:p-8 overflow-y-auto">
      {title && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-3xl font-bold text-textPrimary">{title}</h1>
          {actions && <div className="mt-4 sm:mt-0">{actions}</div>}
        </div>
      )}
      {children}
    </main>
  );
};

export default PageWrapper;
    