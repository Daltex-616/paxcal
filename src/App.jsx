import React, { useState } from 'react';
import { Wallet, TrendingUp } from 'lucide-react';

export default function PaxWalletLanding() {
  const [monto, setMonto] = useState(5000000);

  // Tasas en porcentaje real (0.5%, 2% y 5%)
  const tasaPax = 0.005;
  const tasaCompetencia = 0.02;
  const tasaCodigoBarra = 0.05;

  const costoPax = monto * tasaPax;
  const costoCompetencia = monto * tasaCompetencia;
  const costoCodigoBarra = monto * tasaCodigoBarra;

  const ahorro = costoCompetencia - costoPax;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-[var(--color-gris-fondo)] font-[var(--font-family-body)] text-[var(--color-gris-texto)]">

      {/* Hero Section (Fondo Amarillo) */}
      <main className="relative bg-[var(--color-amarillo)] overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-10 right-10 opacity-20 transform rotate-12 pointer-events-none">
          <p className="text-6xl font-[var(--font-family-heading)] text-[var(--color-violeta-oscuro)] font-black italic">$ 97.000</p>
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-10 transform -rotate-6 pointer-events-none">
          <p className="text-4xl font-[var(--font-family-heading)] text-[var(--color-violeta-oscuro)] font-black">fs.2026.21</p>
        </div>
        <div className="absolute top-1/2 left-10 opacity-15 transform rotate-3 pointer-events-none max-w-md">
          <p className="text-3xl font-[var(--font-family-heading)] text-[var(--color-violeta-oscuro)] font-bold">Tu ALIAS para pagos...</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 grid lg:grid-cols-12 gap-12 items-center">

          {/* Textos Izquierda */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-[var(--font-family-heading)] text-[var(--color-violeta-oscuro)] leading-[1.1] uppercase">
              PAX WALLET, CALCULÁ TUS <br /> AHORROS CON LA TASA MÁS BAJA
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-violeta-oscuro)] font-medium max-w-2xl">
              Descubrí cuánto ahorrás usando la tasa de cobranza del 0.5%.
            </p>
            <div className="pt-4">
              <button className="bg-[var(--color-violeta)] hover:bg-[var(--color-violeta-oscuro)] text-white font-bold py-3.5 px-8 rounded-lg transition-colors text-lg shadow-lg">
                ¡Solicitá tu demo!
              </button>
            </div>
          </div>

          {/* Widget Calculadora Derecha */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-8 w-full border-4 border-white/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-[var(--color-violeta-oscuro)] mb-4 font-[var(--font-family-heading)]">
                Ingresá tu Ganancia / Monto de Cobro (ARS)
              </h3>

              {/* Slider & Input */}
              <div className="space-y-4 mb-8">
                <input
                  type="number"
                  value={monto}
                  onChange={(e) => setMonto(Number(e.target.value))}
                  className="w-full bg-[var(--color-gris-fondo)] border border-gray-200 rounded-xl py-3 px-4 text-xl font-bold text-[var(--color-violeta-oscuro)] focus:ring-2 focus:ring-[var(--color-violeta)] outline-none"
                />
                <input
                  type="range"
                  min="100000"
                  max="5000000000"
                  step="100000"
                  value={monto}
                  onChange={(e) => setMonto(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-violeta)]"
                />
              </div>

              {/* Barras de Comparación (3 columnas) */}
              <div className="grid grid-cols-3 gap-4 items-end mb-8 h-40">
                {/* PaxWallet Bar */}
                <div className="flex flex-col items-center justify-end h-full">
                  <div className="text-center mb-2">
                    <p className="text-[10px] sm:text-xs font-bold text-[var(--color-violeta-oscuro)] leading-tight">PaxWallet</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">(0.5%)</p>
                    <p className="text-xs sm:text-sm font-bold text-[var(--color-violeta)]">{formatCurrency(costoPax)}</p>
                  </div>
                  <div className="w-full max-w-[60px] bg-[var(--color-violeta)] rounded-t-lg transition-all duration-500" style={{ height: '14%' }}></div>
                </div>

                {/* Competencia Bar */}
                <div className="flex flex-col items-center justify-end h-full">
                  <div className="text-center mb-2">
                    <p className="text-[10px] sm:text-xs font-bold text-[var(--color-violeta-oscuro)] leading-tight">Cod, Barra</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">(3.5%)</p>
                    <p className="text-xs sm:text-sm font-bold text-red-500">{formatCurrency(costoCompetencia)}</p>
                  </div>
                  <div className="w-full max-w-[60px] bg-red-500 rounded-t-lg transition-all duration-500" style={{ height: '57%' }}></div>
                </div>

                {/* Código de Barra Bar */}
                <div className="flex flex-col items-center justify-end h-full">
                  <div className="text-center mb-2">
                    <p className="text-[10px] sm:text-xs font-bold text-[var(--color-violeta-oscuro)] leading-tight">Otras</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">(5%)</p>
                    <p className="text-xs sm:text-sm font-bold text-orange-500">{formatCurrency(costoCodigoBarra)}</p>
                  </div>
                  <div className="w-full max-w-[60px] bg-orange-500 rounded-t-lg transition-all duration-500" style={{ height: '100%' }}></div>
                </div>
              </div>

              {/* Total Ahorrado (vs competencia estándar 2%) */}
              <div className="bg-[var(--color-gris-fondo)] rounded-2xl p-4 flex items-center justify-between border border-gray-100">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Ahorro vs otras plataformas (5%):</p>
                  <p className="text-2xl sm:text-3xl font-black text-[var(--color-violeta-oscuro)] font-[var(--font-family-heading)]">
                    {formatCurrency(ahorro)}
                  </p>
                </div>
                <div className="bg-[var(--color-amarillo)] p-3 rounded-full hidden sm:block">
                  <TrendingUp className="w-8 h-8 text-[var(--color-violeta-oscuro)]" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Sección Informativa */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="border-2 border-[var(--color-violeta)] rounded-xl p-2">
            <Wallet className="w-10 h-10 text-[var(--color-violeta)]" strokeWidth={2} />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-violeta-oscuro)] font-[var(--font-family-heading)]">
            ¿QUÉ ES PAX WALLET?
          </h2>
        </div>

        <div className="prose prose-lg max-w-none text-[var(--color-gris-texto)]">
          <p className="font-semibold text-xl">
            Es la billetera digital oficial integrada a PaxManager, diseñada especialmente para empresas de turismo estudiantil y grupal.
          </p>
          <p>
            Cada pasajero tiene su propio CVU, al cual puede transferir dinero directamente desde cualquier cuenta bancaria, homebanking u otra billetera digita
          </p>
          <p className="font-bold text-[var(--color-violeta-oscuro)]">
            El dinero se acredita al instante y puede utilizarse para pagar cuotas, excursiones, servicios opcionales o productos sin moverse de su casa.
          </p>
          <p className="font-bold text-[var(--color-violeta-oscuro)]">
            Para las empresas, significa menos comisiones, más liquidez y control total de los fondos en tiempo real.</p>
        </div>
      </section>

    </div>
  );
}