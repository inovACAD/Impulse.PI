
import React, { useState } from 'react';
import { BellIcon, UserCircleIcon, LogoutIcon } from '../../constants';
import { mockUserProfile } from '../../services/mockDataService';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const unreadNotifications = 3; // Mock data

  return (
    <header className="bg-surface shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-label="Open sidebar"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Search bar (optional placeholder) */}
          <div className="hidden lg:block lg:ml-6">
            {/* <input type="text" placeholder="Buscar cursos, trilhas..." className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-primary focus:border-primary"/> */}
          </div>

          <div className="flex items-center ml-auto">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <BellIcon className="h-6 w-6" />
                {unreadNotifications > 0 && (
                  <span className="absolute top-0 right-0 block h-2 w-2 transform -translate-y-1/2 translate-x-1/2 rounded-full bg-red-500 ring-2 ring-white" />
                )}
              </button>
              {isNotificationDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">Notificações</div>
                    {/* Mock notifications */}
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Nova tarefa atribuída</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Curso X concluído</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lembrete: Reunião às 14h</a>
                    <a href="#" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100 text-center">Ver todas</a>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="ml-4 relative">
              <div>
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="max-w-xs bg-gray-100 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Abrir menu do usuário</span>
                  <img className="h-8 w-8 rounded-full" src={mockUserProfile.avatarUrl} alt="Avatar do usuário" />
                </button>
              </div>
              {isProfileDropdownOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm font-semibold text-gray-700">{mockUserProfile.name}</p>
                    <p className="text-xs text-gray-500 truncate">{mockUserProfile.email}</p>
                  </div>
                  <a href="#/perfil" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <UserCircleIcon className="w-5 h-5 mr-2 text-gray-500" /> Meu Perfil
                  </a>
                  <a href="#/configuracoes" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                     <LogoutIcon className="w-5 h-5 mr-2 text-gray-500 transform rotate-180"/> Configurações
                  </a>
                  <button
                    onClick={() => alert('Logout simulado')}
                    className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    role="menuitem"
                  >
                    <LogoutIcon className="w-5 h-5 mr-2" /> Sair
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
    