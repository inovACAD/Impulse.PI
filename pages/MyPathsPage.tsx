
import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/common/Card';
import ProgressBar from '../components/common/ProgressBar';
import { mockLearningPaths } from '../services/mockDataService';
import { LearningPath } from '../types';
import { AcademicCapIcon } from '../constants';
import Button from '../components/common/Button';

const PathCard: React.FC<{ path: LearningPath }> = ({ path }) => (
  <Card className="hover:shadow-xl transition-shadow">
    <div className="flex items-start space-x-4">
        <div className="p-3 bg-secondary/10 rounded-full text-secondary">
            <AcademicCapIcon className="w-8 h-8"/>
        </div>
        <div>
            <h3 className="text-xl font-semibold text-secondary">{path.title}</h3>
            {path.isRecommended && <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">Recomendada</span>}
            <p className="text-sm text-textSecondary mt-1 mb-3">{path.description}</p>
        </div>
    </div>
    
    <div className="my-3">
      <div className="flex justify-between text-sm text-textSecondary mb-1">
        <span>Progresso</span>
        <span>{path.progress}%</span>
      </div>
      <ProgressBar progress={path.progress} color="bg-secondary" />
    </div>

    <div className="mt-4">
        <h4 className="text-sm font-medium text-textPrimary mb-2">Cursos na Trilha ({path.courses.length}):</h4>
        <ul className="space-y-1 text-xs list-disc list-inside text-textSecondary">
            {path.courses.slice(0,3).map(course => <li key={course.id}>{course.title}</li>)}
            {path.courses.length > 3 && <li>e mais {path.courses.length - 3}...</li>}
        </ul>
    </div>
    <Button variant="secondary" size="sm" className="w-full mt-6">
        {path.progress > 0 && path.progress < 100 ? 'Continuar Trilha' : 'Ver Detalhes da Trilha'}
    </Button>
  </Card>
);

const MyPathsPage: React.FC = () => {
  return (
    <PageWrapper title="Minhas Jornadas de Aprendizagem">
      {mockLearningPaths.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockLearningPaths.map(path => <PathCard key={path.id} path={path} />)}
        </div>
      ) : (
        <Card>
          <div className="text-center py-12">
            <AcademicCapIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-textSecondary">Nenhuma jornada de aprendizagem iniciada ou recomendada.</h3>
            <p className="text-textSecondary mt-2">Explore os cursos e comece sua jornada!</p>
            <Button variant="primary" className="mt-6" onClick={() => window.location.hash = "#/descobrir-cursos"}>
                Descobrir Cursos
            </Button>
          </div>
        </Card>
      )}
    </PageWrapper>
  );
};

export default MyPathsPage;
    