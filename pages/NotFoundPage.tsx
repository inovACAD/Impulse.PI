
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '../constants';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full py-12">
      <svg className="w-32 h-32 text-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-3.792-3.792A4.016 4.016 0 0115.208 8m-2.416 8a4.016 4.016 0 01-2.828-1.172m5.656 0a4.016 4.016 0 00-2.828-1.172m0 0A4.016 4.016 0 018.792 8m2.416 8a4.016 4.016 0 002.828-1.172M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      <h1 className="text-5xl font-extrabold text-textPrimary mb-3">Oops! 404</h1>
      <p className="text-xl text-textSecondary mb-8">A página que você está procurando não foi encontrada.</p>
      <Button 
        variant="primary" 
        size="lg" 
        onClick={() => window.location.hash = '#/'} 
        leftIcon={<HomeIcon className="w-5 h-5"/>}
      >
        Voltar para o Início
      </Button>
    </div>
  );
};

export default NotFoundPage;
    