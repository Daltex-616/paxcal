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
      // ⚠️ URL DE PRUEBA: Funciona en cualquier dominio y sin reCAPTCHA
      const response = await fetch("https://formspree.io/f/mpzvzqvw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error("Error de prueba");

      form.reset();
      setStatus("Recibimos tu mensaje. ¡Muchas gracias! (Prueba exitosa)");
    } catch (error) {
      setStatus("Hubo un problema al enviar.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${className} bg-[var(--color-violeta-oscuro)] w-full`} id="contacto">
      {/* ... TODO EL DISEÑO DEL FORMULARIO QUEDA EXACTAMENTE IGUAL ... */}
      <div className="container mx-auto max-w-7xl px-4 py-10 lg:py-20">
        <div className="text-center text-white space-y-4">
          <div className="max-w-5xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-[var(--font-family-heading)] font-extrabold">¡Contactanos!</h2>
            <p className="text-base md:text-2xl font-[var(--font-family-heading)] px-6 md:px-0">
              Si pertenecés a una agencia o empresa de turismo y querés una demostración o cotización...
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-6xl mx-auto mt-10 md:mt-20 space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col text-center md:text-left gap-2 md:flex-row md:items-center md:gap-2">
                <label className="text-xl md:text-2xl font-[var(--font-family-heading)] md:whitespace-nowrap md:pr-2">Me llamo</label>
                <input name="name" required className="w-full bg-transparent border-b border-[var(--color-violeta)] py-2 text-[var(--color-violeta-semi)] outline-none" />
              </div>
              <div className="flex flex-col text-center md:text-left gap-2 md:flex-row md:items-center md:gap-2">
                <label className="text-xl md:text-2xl font-[var(--font-family-heading)] md:whitespace-nowrap md:pr-2">y trabajo en</label>
                <input name="company" required className="w-full bg-transparent border-b border-[var(--color-violeta)] py-2 text-[var(--color-violeta-semi)] outline-none" />
              </div>
            </div>

            <div className="flex flex-col text-center md:text-left gap-2 md:flex-row md:items-center md:gap-2">
              <label className="text-xl md:text-2xl font-[var(--font-family-heading)] md:whitespace-nowrap md:pr-2">Nuestros principales productos son</label>
              <input name="products" required className="w-full bg-transparent border-b border-[var(--color-violeta)] py-2 text-[var(--color-violeta-semi)] outline-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 text-center md:text-left md:flex-row md:items-center md:gap-2">
                <label className="text-xl md:text-2xl font-[var(--font-family-heading)] md:whitespace-nowrap md:pr-2">Mi teléfono es</label>
                <input name="phone" required className="w-full bg-transparent border-b border-[var(--color-violeta)] py-2 text-[var(--color-violeta-semi)] outline-none" />
              </div>
              <div className="flex flex-col gap-2 text-center md:text-left md:flex-row md:items-center md:gap-2">
                <label className="text-xl md:text-2xl font-[var(--font-family-heading)] md:whitespace-nowrap md:pr-2">y mi correo es</label>
                <input name="email" type="email" required className="w-full bg-transparent border-b border-[var(--color-violeta)] py-2 text-[var(--color-violeta-semi)] outline-none" />
              </div>
            </div>

            <div className="text-center mt-10 md:mt-20">
              <button type="submit" disabled={isLoading} className="w-full md:w-auto bg-transparent border border-[var(--color-amarillo)] cursor-pointer text-xl text-[var(--color-amarillo)] font-bold px-10 py-4 rounded-lg hover:bg-[var(--color-amarillo)] hover:text-[var(--color-violeta-oscuro)] transition disabled:opacity-50">
                {isLoading ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>
            
            {status && <div className="text-center mt-4 text-lg font-bold text-[var(--color-amarillo)]">{status}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
