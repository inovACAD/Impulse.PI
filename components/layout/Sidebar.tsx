
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_ITEMS, APP_NAME } from '../../constants';
import { AcademicCapIcon } from '../../constants'; // Using one icon as a placeholder for logo

interface SidebarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, setIsMobileOpen }) => {
  const baseItemClass = "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150";
  const activeItemClass = "bg-primary-dark text-white shadow-md";
  const inactiveItemClass = "text-gray-300 hover:bg-primary hover:text-white";

  return (
    <>
      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 flex-shrink-0 w-64 bg-gray-800 text-white transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col`}>
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <AcademicCapIcon className="w-10 h-10 text-primary-light mr-2" />
          <span className="text-2xl font-bold text-white">{APP_NAME.split('.')[0]}</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => isMobileOpen && setIsMobileOpen(false)}
              className={({ isActive }) => `${baseItemClass} ${isActive ? activeItemClass : inactiveItemClass}`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-gray-700">
            <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} {APP_NAME}</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
    