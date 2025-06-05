
import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/common/Card';
import { CogIcon } from '../constants';

const SettingsPage: React.FC = () => {
  return (
    <PageWrapper title="Configurações">
      <Card>
        <div className="text-center py-12">
          <CogIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-textSecondary">Página de Configurações</h3>
          <p className="text-textSecondary mt-2">Esta seção está em desenvolvimento.</p>
          <p className="text-textSecondary mt-1">Aqui você poderá ajustar suas preferências de notificação, tema (dark mode), e outras configurações da plataforma.</p>
        </div>
      </Card>
    </PageWrapper>
  );
};

export default SettingsPage;
    