
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
  id?: string; // Added optional id prop
}

const Card: React.FC<CardProps> = ({ children, className = '', title, onClick, id }) => {
  return (
    <div
      id={id} // Use the id prop here
      className={`bg-surface shadow-lg rounded-xl p-6 ${onClick ? 'cursor-pointer hover:shadow-xl transition-shadow' : ''} ${className}`}
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-semibold text-textPrimary mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
    