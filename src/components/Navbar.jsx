import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-20">
          
          {/* Logo Original en SVG */}
          <div className="flex-shrink-0 cursor-pointer">
            <img 
              src="/logo-paxmanager.svg" 
              alt="Logo PaxManager" 
              className="h-10 w-auto" // Controla la altura del logo (h-10 equivale a 40px)
            />
          </div>

        </div>
      </div>
    </nav>
  );
}