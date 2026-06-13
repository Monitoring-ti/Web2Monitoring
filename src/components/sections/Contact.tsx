"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, Clock, Shield, Mail, Phone } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // Simular envío a endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contacto"
      aria-label="Formulario de contacto y solicitud de reunión"
      className="section-padding bg-white border-t border-border"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Información de Conversión y Promesas (5 columnas) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              Contacto
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary mb-6 leading-tight">
              ¿Necesita mejorar el desempeño de sus activos?
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
              Hable con un ingeniero especialista de Monitoring. Analizaremos su caso de manera confidencial y 
              le propondremos alternativas de mejora sin costo inicial.
            </p>

            {/* Datos Rápidos de Conversión */}
            <div className="space-y-4 mb-8" role="list">
              <div className="flex items-center gap-3 text-sm text-primary/80" role="listitem">
                <Clock size={16} className="text-accent flex-shrink-0" aria-hidden="true" />
                <span>Promesa de respuesta en menos de 24 horas hábiles.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary/80" role="listitem">
                <Shield size={16} className="text-accent flex-shrink-0" aria-hidden="true" />
                <span>Acuerdo de confidencialidad estándar garantizado.</span>
              </div>
            </div>

            {/* Enlaces de contacto directo */}
            <div className="pt-6 border-t border-border/50 space-y-3">
              <a
                href="mailto:contacto@monitoring.cl"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors"
              >
                <Mail size={14} aria-hidden="true" />
                contacto@monitoring.cl
              </a>
              <br />
              <a
                href="tel:+56223456789"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors"
              >
                <Phone size={14} aria-hidden="true" />
                +56 2 2345 6789
              </a>
            </div>
          </div>

          {/* Columna Derecha: Formulario Minimalista (7 columnas) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-8 text-center" role="status">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                  <CheckCircle size={24} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-emerald-900 mb-2">
                  Reunión solicitada correctamente
                </h3>
                <p className="text-sm text-emerald-700 leading-relaxed mb-6">
                  Hemos recibido sus datos. Uno de nuestros ingenieros senior se comunicará con usted en el plazo acordado.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-emerald-950 border border-emerald-200 px-4 py-2.5 rounded-lg hover:bg-emerald-100/50 transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Formulario de contacto para agendar reunión comercial"
                className="bg-surface rounded-2xl border border-border p-6 sm:p-8 space-y-5 shadow-sm"
              >
                {/* Nombre */}
                <div>
                  <label htmlFor="form-name" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                    Nombre completo <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    placeholder="Ej. Juan González"
                    autoComplete="name"
                    className={`input-field ${errors.name ? "border-rose-400 focus:ring-rose-200 focus:border-rose-400" : ""}`}
                    {...register("name", { required: "El nombre es obligatorio" })}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-rose-500 text-xs mt-1.5" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Empresa */}
                  <div>
                    <label htmlFor="form-company" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                      Empresa <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      placeholder="Nombre empresa"
                      autoComplete="organization"
                      className={`input-field ${errors.company ? "border-rose-400 focus:ring-rose-200 focus:border-rose-400" : ""}`}
                      {...register("company", { required: "La empresa es obligatoria" })}
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? "company-error" : undefined}
                    />
                    {errors.company && (
                      <p id="company-error" className="text-rose-500 text-xs mt-1.5" role="alert">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                      Teléfono <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      placeholder="Ej. +56 9 1234 5678"
                      autoComplete="tel"
                      className={`input-field ${errors.phone ? "border-rose-400 focus:ring-rose-200 focus:border-rose-400" : ""}`}
                      {...register("phone", { required: "El teléfono es obligatorio" })}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-rose-500 text-xs mt-1.5" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Correo */}
                <div>
                  <label htmlFor="form-email" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                    Correo corporativo <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    placeholder="Ej. juan@empresa.com"
                    autoComplete="email"
                    className={`input-field ${errors.email ? "border-rose-400 focus:ring-rose-200 focus:border-rose-400" : ""}`}
                    {...register("email", {
                      required: "El correo es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Formato de correo inválido",
                      },
                    })}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-rose-500 text-xs mt-1.5" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="form-message" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                    Mensaje / Desafío operacional
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    placeholder="Describa brevemente el activo, equipo o sistema que desea optimizar..."
                    className="input-field resize-none"
                    {...register("message")}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  id="contact-submit-btn"
                  className="btn-primary w-full justify-center py-4 text-sm font-bold uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed"
                  aria-label="Enviar formulario y solicitar reunión comercial"
                >
                  {loading ? (
                    "Procesando..."
                  ) : (
                    <>
                      <Send size={15} aria-hidden="true" />
                      Solicitar Reunión
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
