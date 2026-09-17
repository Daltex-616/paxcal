import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

export default function CalculatorWidget() {
    const [monto, setMonto] = useState(640900);

    // Tasas ajustadas
    const tasaPax = 0.005; // 0.5%
    const tasaCodigoBarra = 0.035; // 3.5%
    const tasaOtras = 0.05; // 5%

    const valorNumerico = monto || 0;

    const costoPax = valorNumerico * tasaPax;
    const costoCodigoBarra = valorNumerico * tasaCodigoBarra;
    const costoOtras = valorNumerico * tasaOtras;

    const ahorro = costoOtras - costoPax;

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0
        }).format(val);
    };

    const formatInputNumber = (val) => {
        if (!val) return '';
        return new Intl.NumberFormat('es-AR').format(val);
    };

    const handleInputChange = (e) => {
        const rawValue = e.target.value.replace(/\D/g, '');
        if (rawValue === '') {
            setMonto('');
        } else {
            setMonto(Number(rawValue));
        }
    };

    return (
        <div className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-8 w-full border-2 border-white backdrop-blur-sm z-10 relative">
            <h3 className="text-sm font-bold text-[var(--color-violeta-oscuro)] mb-4 font-[var(--font-family-heading)]">
                Recaudación (ARS)
            </h3>

            {/* Caja del Input con el símbolo $ fijo */}
            <div className="bg-[var(--color-gris-fondo)] rounded-xl px-4 py-3 mb-4 flex items-center gap-1">
                <span className="text-xl font-black text-[var(--color-violeta-oscuro)] opacity-80">
                    $
                </span>
                <input
                    type="text"
                    inputMode="numeric"
                    value={formatInputNumber(monto)}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-xl font-black text-[var(--color-violeta-oscuro)] outline-none"
                />
            </div>

            {/* Slider */}
            <div className="mb-10">
                <input
                    type="range"
                    min="10000"
                    max="50000000000"
                    step="10000"
                    value={valorNumerico}
                    onChange={(e) => setMonto(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-violeta)]"
                />
            </div>
            <h3 className="text-sm font-bold text-[var(--color-violeta-oscuro)] mb-4 font-[var(--font-family-heading)]">
                Comisión por recaudación (ARS)
            </h3>
            {/* Barras de Comparación */}
            <div className="grid grid-cols-3 gap-2 items-end mb-8 h-40">
                {/* PaxWallet */}
                <div className="flex flex-col items-center justify-end h-full">
                    <div className="text-center mb-2">
                        <p className="text-[10px] sm:text-xs font-bold text-[var(--color-violeta-oscuro)] leading-tight">PaxWallet<br /><span className="text-[9px] sm:text-[10px] text-gray-500 font-normal">(0.5%)</span></p>
                        <p className="text-xs sm:text-sm font-bold text-[var(--color-violeta)]">{formatCurrency(costoPax)}</p>
                    </div>
                    <div className="w-[20px] sm:w-[45px] bg-[var(--color-violeta)] rounded-t-md transition-all duration-500" style={{ height: '10%' }}></div>
                </div>

                {/* Cod. Barra */}
                <div className="flex flex-col items-center justify-end h-full">
                    <div className="text-center mb-2">
                        <p className="text-[10px] sm:text-xs font-bold text-[var(--color-violeta-oscuro)] leading-tight">Cod. Barra<br /><span className="text-[9px] sm:text-[10px] text-gray-500 font-normal">(3.5%)</span></p>
                        <p className="text-xs sm:text-sm font-bold text-red-500">{formatCurrency(costoCodigoBarra)}</p>
                    </div>
                    <div className="w-[30px] sm:w-[45px] bg-red-500 rounded-t-md transition-all duration-500" style={{ height: '50%' }}></div>
                </div>

                {/* Otras */}
                <div className="flex flex-col items-center justify-end h-full">
                    <div className="text-center mb-2">
                        <p className="text-[10px] sm:text-xs font-bold text-[var(--color-violeta-oscuro)] leading-tight">Otras<br /><span className="text-[9px] sm:text-[10px] text-gray-500 font-normal">(5%)</span></p>
                        <p className="text-xs sm:text-sm font-bold text-orange-500">{formatCurrency(costoOtras)}</p>
                    </div>
                    <div className="w-[30px] sm:w-[45px] bg-orange-500 rounded-t-md transition-all duration-500" style={{ height: '100%' }}></div>
                </div>

            </div>

            {/* Caja de Total Ahorrado */}
            <div className="bg-[var(--color-gris-fondo)] rounded-2xl p-4 sm:p-5 flex items-center justify-between border border-gray-100">
                <div>
                    <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                        Ahorro usando Pax Wallet (5%):
                    </p>
                    <p className="text-2xl sm:text-3xl font-black text-[var(--color-violeta-oscuro)] font-[var(--font-family-heading)]">
                        {formatCurrency(ahorro)}
                    </p>
                </div>
                <div className="bg-[var(--color-amarillo)] p-2.5 rounded-full">
                    <TrendingUp className="w-6 h-6 text-[var(--color-violeta-oscuro)]" strokeWidth={2.5} />
                </div>
            </div>
        </div>
    );
}