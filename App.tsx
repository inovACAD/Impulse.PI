
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import PageWrapper from './components/layout/PageWrapper';
import DashboardPage from './pages/DashboardPage';
import DiscoverCoursesPage from './pages/DiscoverCoursesPage';
import LearningHistoryPage from './pages/LearningHistoryPage';
import MyPathsPage from './pages/MyPathsPage';
import AchievementsPage from './pages/AchievementsPage';
import SettingsPage from './pages/SettingsPage'; // Placeholder
import ProfilePage from './pages/ProfilePage'; // Placeholder
import NotFoundPage from './pages/NotFoundPage';
import { AppRoute } from './types';
import { APP_NAME } from './constants';

const App: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Update document title based on current page/route
    // This is a simplified example; a more robust solution might map routes to titles
    const path = location.pathname.replace('/', '') || 'Dashboard';
    const pageTitle = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
    document.title = `${pageTitle} | ${APP_NAME}`;
  }, [location]);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isMobileOpen={isMobileSidebarOpen} setIsMobileOpen={setIsMobileSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar toggleSidebar={toggleMobileSidebar} />
        <Routes>
          <Route path={AppRoute.Dashboard} element={<DashboardPage />} />
          <Route path={AppRoute.DiscoverCourses} element={<DiscoverCoursesPage />} />
          <Route path={AppRoute.LearningHistory} element={<LearningHistoryPage />} />
          <Route path={AppRoute.MyPaths} element={<MyPathsPage />} />
          <Route path={AppRoute.Achievements} element={<AchievementsPage />} />
          <Route path={AppRoute.Settings} element={<SettingsPage />} />
          <Route path={AppRoute.Profile} element={<ProfilePage />} />
          <Route path="*" element={
            <PageWrapper title="Página Não Encontrada">
              <NotFoundPage />
            </PageWrapper>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default App;
    