
import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/common/Card';
import { UserCircleIcon } from '../constants';
import { mockUserProfile } from '../services/mockDataService';
import Button from '../components/common/Button';

const ProfilePage: React.FC = () => {
  return (
    <PageWrapper title="Meu Perfil">
      <Card>
        <div className="flex flex-col items-center md:flex-row md:items-start p-6">
            <img 
                src={mockUserProfile.avatarUrl} 
                alt={mockUserProfile.name} 
                className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-8 shadow-lg"
            />
            <div className="flex-grow text-center md:text-left">
                <h2 className="text-3xl font-bold text-primary">{mockUserProfile.name}</h2>
                <p className="text-textSecondary mt-1">{mockUserProfile.role || 'Cargo não definido'}</p>
                <p className="text-textSecondary">{mockUserProfile.department || 'Departamento não definido'}</p>
                <p className="text-sm text-gray-500 mt-2">{mockUserProfile.email}</p>

                <div className="mt-6 border-t pt-6 space-y-3">
                    <div className="flex justify-between">
                        <span className="font-medium text-textSecondary">XP Total:</span>
                        <span className="font-semibold text-primary">{mockUserProfile.xp.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-textSecondary">Nível:</span>
                        <span className="font-semibold text-primary">{mockUserProfile.level}</span>
                    </div>
                </div>
                 <Button variant="outline" className="mt-8">Editar Perfil</Button>
            </div>
        </div>
      </Card>
      <Card title="Minhas Competências (Em Breve)" className="mt-6">
        <div className="text-center py-8">
          <UserCircleIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-textSecondary">Visualização da sua matriz de habilidades e progresso em competências.</p>
        </div>
      </Card>
       <Card title="Feedback e Avaliações (Em Breve)" className="mt-6">
        <div className="text-center py-8">
          <UserCircleIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-textSecondary">Acompanhe seus feedbacks 360º e avaliações de competência.</p>
        </div>
      </Card>
    </PageWrapper>
  );
};

export default ProfilePage;
    