import React from "react";
import Navbar from "./components/Navbar";
import HeroText from "./components/HeroText";
import CalculatorWidget from "./components/CalculatorWidget";
import InfoSection from "./components/InfoSection";
import Footer from './components/Footer'
import ContactForm from "./components/ContactForm";
export default function PaxWalletLanding() {
  return (
    <div className="min-h-screen font-[var(--font-family-body)] text-[var(--color-gris-texto)] bg-white">

      <Navbar />
      <main className="relative bg-[var(--color-amarillo)] overflow-hidden min-h-[85vh] flex items-center">

        {/* Capa de la Imagen de Fondo (PNG Transparente) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center lg:justify-end overflow-hidden pointer-events-none">
          <img
            // Asegurate que la extensión aquí sea .png (o la que corresponda a tu archivo real)
            src="/Foto fondo.png"
            alt="Interfaz decorativa"
            className="w-full lg:w-[85%] h-[120%] object-cover lg:object-contain object-right lg:object-right-top opacity-30 transform scale-125 lg:scale-110 lg:translate-x-12 translate-y-10"
          />
        </div>

        {/* Capa de Contenido (Textos y Calculadora) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">

          <HeroText />

          <div className="lg:col-span-5 relative z-20">
            {/* Sombra difuminada detrás de la calculadora para que resalte sobre los textos de fondo */}
            <div className="absolute -inset-4 bg-[var(--color-amarillo)]/40 blur-xl rounded-full -z-10 hidden lg:block"></div>
            <CalculatorWidget />
          </div>

        </div>
      </main>

      {/* SECCIÓN INFORMATIVA INFERIOR */}
      <InfoSection />
      <ContactForm />
      <Footer />
    </div>
  );
}