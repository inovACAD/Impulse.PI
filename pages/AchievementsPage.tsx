
import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/common/Card';
import { mockUserProfile, mockBadges } from '../services/mockDataService';
import { Badge } from '../types';
import { TrophyIcon } from '../constants';

const BadgeDisplay: React.FC<{ badge: Badge }> = ({ badge }) => (
  <div className="flex flex-col items-center text-center p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50">
    <img src={badge.iconUrl} alt={badge.name} className="w-16 h-16 rounded-full mb-2 object-cover" />
    <h4 className="text-sm font-semibold text-textPrimary">{badge.name}</h4>
    <p className="text-xs text-textSecondary mt-1">{badge.description}</p>
    {badge.achievedDate && <p className="text-xs text-gray-400 mt-1">Conquistado em: {new Date(badge.achievedDate).toLocaleDateString('pt-BR')}</p>}
  </div>
);

const AchievementsPage: React.FC = () => {
  const achievedBadges = mockBadges.filter(b => b.achievedDate);
  const availableBadges = mockBadges.filter(b => !b.achievedDate);

  return (
    <PageWrapper title="Desafios e Conquistas">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="text-center bg-gradient-to-br from-primary to-blue-600 text-white">
            <TrophyIcon className="w-12 h-12 mx-auto mb-2 text-amber-300"/>
            <h3 className="text-3xl font-bold">{mockUserProfile.xp.toLocaleString()} XP</h3>
            <p className="opacity-80">Pontos de Experiência</p>
        </Card>
        <Card className="text-center bg-gradient-to-br from-secondary to-emerald-600 text-white">
            <TrophyIcon className="w-12 h-12 mx-auto mb-2 text-amber-300"/>
            <h3 className="text-3xl font-bold">{mockUserProfile.level}</h3>
            <p className="opacity-80">Seu Nível Atual</p>
        </Card>
         <Card className="text-center bg-gradient-to-br from-amber-500 to-orange-600 text-white">
            <TrophyIcon className="w-12 h-12 mx-auto mb-2 text-sky-200"/>
            <h3 className="text-3xl font-bold">{achievedBadges.length}</h3>
            <p className="opacity-80">Badges Conquistados</p>
        </Card>
      </div>

      {achievedBadges.length > 0 && (
        <Card title="Meus Badges" className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {achievedBadges.map(badge => <BadgeDisplay key={badge.id} badge={badge} />)}
          </div>
        </Card>
      )}

      {availableBadges.length > 0 && (
        <Card title="Badges para Desbloquear">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {availableBadges.map(badge => <BadgeDisplay key={badge.id} badge={badge} />)}
          </div>
        </Card>
      )}

      {mockBadges.length === 0 && (
         <Card>
          <div className="text-center py-12">
            <TrophyIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-textSecondary">Nenhuma conquista ainda.</h3>
            <p className="text-textSecondary mt-2">Continue aprendendo para desbloquear badges e ganhar XP!</p>
          </div>
        </Card>
      )}

       <Card title="Ranking (Exemplo)" className="mt-8">
        <p className="text-textSecondary">Em breve: Veja sua posição no ranking geral e por equipes!</p>
        {/* Placeholder for ranking list */}
        <ul className="mt-4 space-y-2">
            <li className="p-3 bg-gray-100 rounded-md flex justify-between items-center"><span>1. Maria Silva</span> <span className="font-semibold">12500 XP</span></li>
            <li className="p-3 bg-gray-100 rounded-md flex justify-between items-center"><span>2. João Pereira</span> <span className="font-semibold">11800 XP</span></li>
            <li className="p-3 bg-primary/10 rounded-md flex justify-between items-center text-primary"><span>3. {mockUserProfile.name} (Você)</span> <span className="font-semibold">{mockUserProfile.xp} XP</span></li>
            <li className="p-3 bg-gray-100 rounded-md flex justify-between items-center"><span>4. Ana Costa</span> <span className="font-semibold">7300 XP</span></li>
        </ul>
      </Card>
    </PageWrapper>
  );
};

export default AchievementsPage;
    