import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, BarChart3, FolderOpen } from 'lucide-react';
import clsx from 'clsx';
import { dataAnalysisProjects } from '../data/projects';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/web-developer', label: 'Web Developer', icon: Code },
    // Hidden until there is at least one data analysis project to show
    ...(dataAnalysisProjects.length > 0
      ? [{ path: '/data-analyst', label: 'Data Analyst', icon: BarChart3 }]
      : []),
    { path: '/other-projects', label: 'Other Projects', icon: FolderOpen },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white font-bold text-xl hover:text-purple-200 transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center" aria-hidden="true">
              <span className="text-white font-bold text-sm">VO</span>
            </div>
            <span>Victor Okechukwu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={clsx(
                      'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300',
                      location.pathname === item.path
                        ? 'bg-white/20 text-white'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    {Icon && <Icon size={16} />}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="bg-white/10 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/5 backdrop-blur-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    'px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300',
                    location.pathname === item.path
                      ? 'bg-white/20 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  )}
                >
                  {Icon && <Icon size={16} />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}