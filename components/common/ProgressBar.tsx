
import React from 'react';

interface ProgressBarProps {
  progress: number; // 0-100
  size?: 'sm' | 'md' | 'lg';
  color?: string; // Tailwind color class e.g., 'bg-blue-500'
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, size = 'md', color = 'bg-primary' }) => {
  const heightClass = size === 'sm' ? 'h-2' : size === 'md' ? 'h-3' : 'h-4';
  const validProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className={`w-full bg-gray-200 rounded-full ${heightClass} overflow-hidden`}>
      <div
        className={`${color} ${heightClass} rounded-full transition-all duration-500 ease-out`}
        style={{ width: `${validProgress}%` }}
        role="progressbar"
        aria-valuenow={validProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
};

export default ProgressBar;
    