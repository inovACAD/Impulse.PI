
import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/common/Card';
import ProgressBar from '../components/common/ProgressBar';
import CourseCard from '../components/courses/CourseCard';
import { mockUserProfile, mockCourses, mockGoals, mockNotifications } from '../services/mockDataService';
import { CourseStatus, Goal, Notification } from '../types';
import { BellIcon, BookmarkIcon, AcademicCapIcon, TrophyIcon, ChartBarIcon } from '../constants';
import Button from '../components/common/Button';

const GoalItem: React.FC<{ goal: Goal }> = ({ goal }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex justify-between items-center mb-1">
      <h4 className="text-sm font-medium text-textPrimary">{goal.title}</h4>
      <span className={`text-xs px-2 py-0.5 rounded-full ${goal.isOrganizational ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
        {goal.isOrganizational ? 'Organizacional' : 'Pessoal'}
      </span>
    </div>
    <p className="text-xs text-textSecondary mb-1">{goal.description} - Prazo: {goal.deadline}</p>
    <ProgressBar progress={goal.progress} size="sm" color={goal.isOrganizational ? 'bg-blue-500' : 'bg-secondary'} />
  </div>
);

const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => (
 <a href={notification.link || '#'} className={`block p-3 hover:bg-gray-50 ${!notification.isRead ? 'bg-primary/5' : ''}`}>
    <div className="flex items-start space-x-3">
      <div className={`mt-1 w-2 h-2 rounded-full ${!notification.isRead ? 'bg-primary' : 'bg-gray-300'}`}></div>
      <div>
        <p className={`text-sm ${!notification.isRead ? 'font-semibold text-textPrimary' : 'text-textSecondary'}`}>{notification.message}</p>
        <p className="text-xs text-gray-400">{notification.timestamp}</p>
      </div>
    </div>
  </a>
);

const QuickAccessCard: React.FC<{title: string; icon: React.ReactNode; link: string; count?: number}> = ({title, icon, link, count}) => (
    <a href={link} className="bg-surface p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center space-x-3">
        <div className="p-2 bg-primary-light/20 rounded-full text-primary">
            {icon}
        </div>
        <div>
            <h4 className="text-md font-semibold text-textPrimary">{title}</h4>
            {count !== undefined && <p className="text-sm text-textSecondary">{count} itens</p>}
        </div>
    </a>
);


const DashboardPage: React.FC = () => {
  const coursesInProgress = mockCourses.filter(c => c.status === CourseStatus.InProgress);
  const coursesCompleted = mockCourses.filter(c => c.status === CourseStatus.Completed).slice(0,3);
  const coursesRecommended = mockCourses.filter(c => c.status === CourseStatus.Recommended).slice(0,3);

  const overallProgress = mockGoals.length > 0 ? mockGoals.reduce((acc, goal) => acc + goal.progress, 0) / mockGoals.length : 0;

  return (
    <PageWrapper title={`Bem-vindo(a) de volta, ${mockUserProfile.name.split(' ')[0]}!`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coluna Principal (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Visão Geral do Progresso */}
          <Card title="Visão Geral do Progresso">
            <div className="mb-4">
              <p className="text-textSecondary mb-1">Progresso geral em direção às suas metas:</p>
              <ProgressBar progress={overallProgress} size="lg" />
              <p className="text-right text-sm text-textSecondary mt-1">{overallProgress.toFixed(0)}%</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <QuickAccessCard title="Certificações" icon={<AcademicCapIcon className="w-5 h-5"/>} link="#/historico-aprendizagem" count={3}/>
                <QuickAccessCard title="Minhas Trilhas" icon={<ChartBarIcon className="w-5 h-5"/>} link="#/minhas-jornadas" count={2}/>
                <QuickAccessCard title="Conquistas" icon={<TrophyIcon className="w-5 h-5"/>} link="#/conquistas" count={mockUserProfile.xp}/>
                <QuickAccessCard title="Notificações" icon={<BellIcon className="w-5 h-5"/>} link="#dashboard-notifications" count={mockNotifications.filter(n => !n.isRead).length}/>
            </div>
          </Card>

          {/* Cursos em Andamento */}
          {coursesInProgress.length > 0 && (
            <Card title="Cursos em Andamento">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coursesInProgress.map(course => <CourseCard key={course.id} course={course} />)}
              </div>
            </Card>
          )}

          {/* Próximos Recomendados */}
           {coursesRecommended.length > 0 && (
            <Card title="Cursos Recomendados">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coursesRecommended.map(course => <CourseCard key={course.id} course={course} />)}
              </div>
               <div className="mt-4 text-right">
                <Button variant="ghost" onClick={() => window.location.hash = "#/descobrir-cursos"}>Ver todos</Button>
              </div>
            </Card>
          )}

          {/* Concluídos Recentemente */}
          {coursesCompleted.length > 0 && (
            <Card title="Concluídos Recentemente">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coursesCompleted.map(course => <CourseCard key={course.id} course={course} />)}
              </div>
              <div className="mt-4 text-right">
                <Button variant="ghost" onClick={() => window.location.hash = "#/historico-aprendizagem"}>Ver histórico completo</Button>
              </div>
            </Card>
          )}
        </div>

        {/* Coluna Lateral (1/3) */}
        <div className="lg:col-span-1 space-y-6">
          {/* Minhas Metas */}
          <Card title="Minhas Metas">
            {mockGoals.length > 0 ? mockGoals.map(goal => <GoalItem key={goal.id} goal={goal} />) : <p className="text-textSecondary">Nenhuma meta definida.</p>}
             <Button variant="outline" size="sm" className="w-full mt-4">Definir Nova Meta</Button>
          </Card>

          {/* Central de Notificações */}
          <Card title="Central de Notificações" className="max-h-[500px] flex flex-col" id="dashboard-notifications">
            <div className="overflow-y-auto flex-grow">
            {mockNotifications.length > 0 ? mockNotifications.map(notification => <NotificationItem key={notification.id} notification={notification} />) : <p className="p-3 text-textSecondary">Nenhuma notificação nova.</p>}
            </div>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DashboardPage;
    