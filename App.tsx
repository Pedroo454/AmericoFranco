import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import SchoolPage from './pages/SchoolPage';
import StudiesPage from './pages/StudiesPage';
import InterclassesPage from './pages/InterclassesPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import { Page } from './types';
import { SCHOOL_NAME } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle page rendering based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'school': return <SchoolPage />;
      case 'studies': return <StudiesPage />;
      case 'interclasses': return <InterclassesPage />;
      case 'announcements': return <AnnouncementsPage />;
      case 'gallery': return <GalleryPage />;
      case 'about': return <AboutPage />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'announcements', label: 'Avisos' },
    { id: 'school', label: 'Escola' },
    { id: 'studies', label: 'Estudos' },
    { id: 'interclasses', label: 'Interclasses' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'about', label: 'Sobre' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar for global navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center text-white font-black text-xs">AF</div>
            <span className="font-black text-blue-900 tracking-tighter uppercase text-sm sm:text-base">{SCHOOL_NAME}</span>
          </button>
          
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id as Page)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  currentPage === link.id ? 'bg-blue-800 text-white' : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button className="md:hidden p-2 text-slate-600">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      <main className="min-h-[calc(100vh-200px)]">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center text-white font-black text-xs">AF</div>
              <span className="font-black text-blue-900 tracking-tighter uppercase">{SCHOOL_NAME}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Desenvolvendo o protagonismo juvenil e a educação pública de qualidade em Poá - SP.
            </p>
          </div>
          <div>
            <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest mb-6">Mapa do Site</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(p => (
                 <button key={p.id} onClick={() => setCurrentPage(p.id as Page)} className="text-left text-sm text-slate-500 hover:text-blue-800 capitalize transition-colors">{p.label}</button>
              ))}
            </div>
          </div>
          <div>
             <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest mb-6">Nossas Redes</h4>
             <a href="https://instagram.com/americo_franco" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-blue-800 flex items-center space-x-2 transition-colors">
                <span>Instagram: @americo_franco</span>
             </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">© {new Date().getFullYear()} - Escola Estadual Américo Franco. Poá, São Paulo.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
