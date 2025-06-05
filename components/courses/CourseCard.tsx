
import React from 'react';
import { Course, CourseStatus } from '../../types';
import ProgressBar from '../common/ProgressBar';
import Button from '../common/Button';
import { AcademicCapIcon, BookmarkIcon, BookOpenIcon } from '../../constants'; // Assuming icons are here

interface CourseCardProps {
  course: Course;
  onAction?: (courseId: string, action: 'view' | 'enroll' | 'continue') => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onAction }) => {
  const { title, description, imageUrl, duration, progress, status, provider, rating, level } = course;

  const getStatusPill = () => {
    switch (status) {
      case CourseStatus.InProgress:
        return <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Em Andamento</span>;
      case CourseStatus.Completed:
        return <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Concluído</span>;
      case CourseStatus.Recommended:
         return <span className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Recomendado</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-surface rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img 
            src={imageUrl || `https://picsum.photos/seed/${title.replace(/\s/g, '')}/400/200`} 
            alt={title} 
            className="w-full h-48 object-cover" 
        />
        {getStatusPill()}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-textPrimary mb-1 truncate" title={title}>{title}</h3>
        <p className="text-sm text-textSecondary mb-2 flex-grow min-h-[40px]">{description.substring(0, 80)}{description.length > 80 ? '...' : ''}</p>
        
        <div className="flex items-center justify-between text-xs text-textSecondary mb-2">
          <span>{provider}</span>
          {level && <span className="bg-gray-200 px-2 py-0.5 rounded-full">{level}</span>}
        </div>

        <div className="flex items-center justify-between text-xs text-textSecondary mb-3">
          <span>Duração: {duration}</span>
          {rating && (
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              {rating.toFixed(1)}
            </div>
          )}
        </div>

        {status === CourseStatus.InProgress && progress !== undefined && (
          <div className="mb-3">
            <ProgressBar progress={progress} size="sm" />
            <p className="text-xs text-textSecondary mt-1 text-right">{progress}% concluído</p>
          </div>
        )}
        
        <div className="mt-auto">
          {status === CourseStatus.InProgress && onAction && (
            <Button onClick={() => onAction(course.id, 'continue')} variant="primary" size="sm" className="w-full" leftIcon={<BookOpenIcon className="w-4 h-4"/>}>
              Continuar Curso
            </Button>
          )}
          {status === CourseStatus.Completed && course.certificateUrl && onAction && (
             <Button onClick={() => window.open(course.certificateUrl, '_blank')} variant="secondary" size="sm" className="w-full" leftIcon={<AcademicCapIcon className="w-4 h-4"/>}>
              Ver Certificado
            </Button>
          )}
          {(status === CourseStatus.Recommended || status === CourseStatus.NotStarted) && onAction && (
            <Button onClick={() => onAction(course.id, 'enroll')} variant="outline" size="sm" className="w-full" leftIcon={<BookmarkIcon className="w-4 h-4"/>}>
              Saber Mais / Inscrever
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
    