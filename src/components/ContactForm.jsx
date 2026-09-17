import React, { useState } from 'react';
import { Mail } from 'lucide-react'; 

export default function ContactForm({ className = "" }) {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // Hacemos el envío directo sin reCAPTCHA
      const response = await fetch("https://www.formis.online/api/submit/X8Lc2Rm5eqTvCmb8HnYtuNDAhYu2/TW66kfLHA4QE62PWnZ9D", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const message = errorData?.error ?? "No se pudo enviar el formulario.";
        throw new Error(message);
      }

      // Éxito
      form.reset();
      setStatus("Recibimos tu mensaje. ¡Muchas gracias!");
    } catch (error) {
      console.error(error);
      setStatus(error instanceof Error ? error.message : "Hubo un problema al enviar.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${className} bg-[var(--color-violeta-oscuro)] w-full`} id="contacto">
      <div className="container mx-auto max-w-7xl px-4 py-10 lg:py-20">
        <div className="text-center text-white space-y-4">
          
          <div className="max-w-5xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-[var(--font-family-heading)] font-extrabold">¡Contactanos!</h2>
            <p className="text-base md:text-2xl font-[var(--font-family-heading)] px-6 md:px-0">
              Si pertenecés a una agencia o empresa de turismo y querés una demostración o cotización, completá este formulario y te contactaremos a la brevedad.
            </p>
          </div>

          <form id="contact-form" onSubmit={handleSubmit} className="max-w-6xl mx-auto mt-10 md:mt-20 space-y-6 text-left">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col text-center md:text-left gap-2 md:flex-row md:items-center md:gap-2">
                <label className="text-xl md:text-2xl font-[var(--font-family-heading)] md:whitespace-nowrap md:pr-2" htmlFor="name">Me llamo</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-[var(--color-violeta)] py-2 text-[var(--color-violeta-semi)] text-center md:text-left text-xl md:text-2xl placeholder-[var(--color-violeta-semi)] outline-none md:flex-1"
                  placeholder="Tu nombre"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col text-center md:text-left gap-2 md:flex-row md:items-center md:gap-2">
                <label className="text-xl md:text-2xl font-[var(--font-family-heading)] md:whitespace-nowrap md:pr-2" htmlFor="company">y trabajo en</label>
                <input
                  id="company"
                  name="company"
                  required
                  className="w-full bg-transparent border-b border-[var(--color-violeta)] py-2 text-[var(--color-violeta-semi)] text-center md:text-left text-xl md:text-2xl placeholder-[var(--color-violeta-semi)] outline-none md:flex-1"
                  placeholder="Empresa / Agencia"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="flex flex-col text-center md:text-left gap-2 md:flex-row md:items-center md:gap-2">
              <label className="text-xl md:text-2xl font-[var(--font-family-heading)] md:whitespace-nowrap md:pr-2" htmlFor="products">Nuestros principales productos son</label>
              <input
                id="products"
                name="products"
                required
                className="w-full bg-transparent border-b border-[var(--color-violeta)] py-2 text-[var(--color-violeta-semi)] text-center md:text-left text-xl md:text-2xl placeholder-[var(--color-violeta-semi)] outline-none md:flex-1"
                placeholder="Ej: viajes estudiantiles, grupales..."
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 text-center md:text-left md:flex-row md:items-center md:gap-2">
                <label className="text-xl md:text-2xl font-[var(--font-family-heading)] md:whitespace-nowrap md:pr-2" htmlFor="phone">Mi teléfono es</label>
                <input
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-transparent border-b border-[var(--color-violeta)] py-2 text-[var(--color-violeta-semi)] text-center md:text-left text-xl md:text-2xl placeholder-[var(--color-violeta-semi)] outline-none md:flex-1"
                  placeholder="Teléfono"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-2 text-center md:text-left md:flex-row md:items-center md:gap-2">
                <label className="text-xl md:text-2xl font-[var(--font-family-heading)] md:whitespace-nowrap md:pr-2" htmlFor="email">y mi correo es</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-[var(--color-violeta)] py-2 text-[var(--color-violeta-semi)] text-center md:text-left text-xl md:text-2xl placeholder-[var(--color-violeta-semi)] outline-none md:flex-1"
                  placeholder="tu@correo.com"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="text-center mt-10 md:mt-20">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full md:w-auto bg-transparent border border-[var(--color-amarillo)] cursor-pointer text-xl text-[var(--color-amarillo)] font-bold px-10 py-4 rounded-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-violeta-oscuro)] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>
            
            {status && (
              <div className="text-center mt-4 text-lg font-bold" aria-live="polite">
                {status}
              </div>
            )}

            <div className="text-center text-sm mt-16 flex justify-center">
              <a href="mailto:pax@cuoma.com" className="inline-flex items-center text-xl font-bold gap-2 text-white hover:text-[var(--color-amarillo)] transition-colors">
                <Mail className="w-8 h-8" aria-hidden="true" />
                pax@cuoma.com
              </a>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}