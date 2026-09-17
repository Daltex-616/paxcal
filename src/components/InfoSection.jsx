import React from 'react';
import { Wallet } from 'lucide-react';

export default function InfoSection() {
  return (
    <div className="container mx-auto max-w-7xl px-4 pb-16">
      <div className="flex flex-col md:flex-row items-center bg-[var(--color-gris-fondo)] rounded-2xl p-4 md:p-12 mt-4 md:mt-12 gap-x-6">
        <div className="flex-1">
          <h2 className="flex items-center justify-start gap-x-2">
            <Wallet className="w-[90px] h-auto text-[var(--color-violeta)]" aria-hidden="true" strokeWidth={1.5} />
            <span className="text-3xl md:text-4xl font-[var(--font-family-heading)] font-bold text-[var(--color-violeta-oscuro)] ml-4 uppercase">
              ¿Qué es Pax Wallet?
            </span>
          </h2>
          
          <div className="space-y-6 my-6 text-base md:text-lg">
            <p className="font-semibold text-xl text-[var(--color-violeta-oscuro)]">
              Es la billetera digital oficial integrada a PaxManager, diseñada especialmente para empresas de turismo estudiantil y grupal.
            </p>
            <p>
              Nuestra herramienta te permite comparar instantáneamente tus costos de cobranza. Simplemente ingresá tu monto y compará nuestra tasa fija del <strong>0.5%</strong> con las tasas comunes del <strong>5%</strong> de otras billeteras o hasta un <strong>3.5%</strong> cobrado por redes de pago en efectivo.
            </p>
            <p className="font-bold text-[var(--color-violeta-oscuro)]">
              Para las empresas, significa menos comisione, más liquidez y contro toal de los fondos en tiempo real
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 mt-8 md:mt-0">
          <img 
            src="pax-wallet.webp" 
            alt="PAX Wallet" 
            className="max-w-full md:max-w-[486px] h-auto rounded-xl object-cover shadow-md" 
          />
        </div>
      </div>
    </div>
  );
}