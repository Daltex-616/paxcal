import React from 'react';

export default function HeroText() {
    return (
        <div className="lg:col-span-7 space-y-6 z-10">
            
            {/* Título Principal Unificado */}
            <h1 className="font-[var(--font-family-heading)] text-[var(--color-violeta-oscuro)] uppercase tracking-tight flex flex-col gap-1">
                <span className="text-4xl md:text-5xl lg:text-[46px] font-black leading-none">
                    PAX WALLET:
                </span>
                <span className="text-3xl md:text-4xl lg:text-[34px] font-extrabold leading-[1.15]">
                    CALCULÁ ACÁ TUS AHORROS<br />
                    APROVECHANDO LA TASA MÁS BAJA
                </span>
            </h1>
            
            {/* Párrafo */}
            <p className="text-xl md:text-[22px] text-[var(--color-violeta-oscuro)] font-bold max-w-2xl leading-snug">
                Descubrí cuánto ahorrás usando una tasa del 0.5%<br />
                vs. otras plataformas.
            </p>
            
            {/* Botón convertido en Enlace */}
            <div className="pt-2">
                <a 
                    href="https://paxmanager.ai/#contacto" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-[var(--color-violeta)] hover:bg-[var(--color-violeta-oscuro)] text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-md cursor-pointer"
                >
                    ¡Conoce más!
                </a>
            </div>
            
        </div>
    );
}