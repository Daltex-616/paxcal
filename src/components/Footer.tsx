import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Lado Izquierdo: Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/logo-paxmanager.svg" 
            alt="Logo PaxManager" 
            className="h-7 md:h-8 w-auto" 
          />
        </div>

        {/* Lado Derecho: Slogan */}
        <div className="text-center md:text-right">
          <p className="text-[var(--color-violeta-oscuro)]/80 text-sm md:text-base font-[var(--font-family-body)] font-medium">
            La forma <span className="text-[var(--color-violeta)] font-bold">inteligente</span> de gestión de viajes
          </p>
        </div>

      </div>
    </footer>
  );
}