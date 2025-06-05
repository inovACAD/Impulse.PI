
import React, { useState, useMemo } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import CourseCard from '../components/courses/CourseCard';
import { mockCourses, mockCourseFilters } from '../services/mockDataService';
import { Course, FilterOption } from '../types';
import Button from '../components/common/Button';
import { BookOpenIcon } from '../constants'; // Added import for BookOpenIcon

const FilterDropdown: React.FC<{label: string; options: FilterOption[]; selected: string; onChange: (value: string) => void}> = 
  ({label, options, selected, onChange}) => {
  return (
    <div className="relative">
      <label htmlFor={label.toLowerCase().replace(' ','-')} className="sr-only">{label}</label>
      <select
        id={label.toLowerCase().replace(' ','-')}
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-sm"
      >
        <option value="">{label}</option>
        {options.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
      </select>
    </div>
  );
}

const DiscoverCoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<{ modality: string; duration: string; level: string }>({
    modality: '',
    duration: '',
    level: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  const handleFilterChange = (filterName: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
    setCurrentPage(1);
  };
  
  const filteredCourses = useMemo(() => {
    return mockCourses.filter(course => {
      const matchesSearchTerm = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                (course.provider && course.provider.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Basic filtering examples - extend as needed
      const matchesModality = filters.modality ? course.id.includes(filters.modality.slice(0,2)) : true; // Mock logic
      const matchesLevel = filters.level ? course.level?.toLowerCase() === filters.level : true;

      return matchesSearchTerm && matchesModality && matchesLevel;
    });
  }, [searchTerm, filters]);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const currentCourses = filteredCourses.slice((currentPage - 1) * coursesPerPage, currentPage * coursesPerPage);

  const handleAction = (courseId: string, action: 'view' | 'enroll' | 'continue') => {
    alert(`Ação: ${action} no curso ${courseId}`);
    // Implement navigation or modal logic here
  };

  return (
    <PageWrapper title="Descobrir Cursos">
      <div className="mb-6 p-4 bg-surface rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-2 lg:col-span-1">
             <label htmlFor="search-courses" className="block text-sm font-medium text-textSecondary mb-1">Buscar Cursos</label>
            <input
              type="text"
              id="search-courses"
              placeholder="Nome, palavra-chave..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1);}}
            />
          </div>
          <FilterDropdown label="Modalidade" options={mockCourseFilters.modality} selected={filters.modality} onChange={(val) => handleFilterChange('modality', val)} />
          <FilterDropdown label="Duração" options={mockCourseFilters.duration} selected={filters.duration} onChange={(val) => handleFilterChange('duration', val)} />
          <FilterDropdown label="Nível" options={mockCourseFilters.level} selected={filters.level} onChange={(val) => handleFilterChange('level', val)} />
        </div>
      </div>

      {currentCourses.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCourses.map(course => (
              <CourseCard key={course.id} course={course} onAction={handleAction} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center space-x-2">
              <Button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} variant="outline">
                Anterior
              </Button>
              <span className="text-textSecondary">Página {currentPage} de {totalPages}</span>
              <Button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} variant="outline">
                Próxima
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <BookOpenIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-textSecondary">Nenhum curso encontrado</h3>
          <p className="text-textSecondary">Tente ajustar seus filtros ou termos de busca.</p>
        </div>
      )}
    </PageWrapper>
  );
};

export default DiscoverCoursesPage;
    