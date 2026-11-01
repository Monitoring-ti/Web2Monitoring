"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, Clock, Shield, Mail, Phone, MapPin } from "lucide-react";
import { useDictionary } from "@/context/LocaleProvider";
import { images } from "@/data/images";
import { classifyHumanEmail } from "@/lib/human-email";
import { siteConfig } from "@/lib/site-config";

interface FormData {
  name: string;
  company: string;
  role: string;
  industry: string;
  email: string;
  phone: string;
  requirementType: string;
  message: string;
  website: string;
}

export default function Contact() {
  const t = useDictionary();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
      defaultValues: {
      requirementType: "reunion",
      industry: t.contact.industries[0],
      website: "",
    },
  });

  const onSubmit = (data: FormData) => {
    if (data.website.trim()) {
      setSubmitted(true);
      reset();
      return;
    }

    const requirement =
      t.contact.requirementTypes.find((item) => item.value === data.requirementType)?.label ??
      data.requirementType;
    const lines = [
      `${t.contact.nameLabel}: ${data.name}`,
      `${t.contact.companyLabel}: ${data.company}`,
      `${t.contact.roleLabel}: ${data.role.trim() || "—"}`,
      `${t.contact.industryLabel}: ${data.industry || "—"}`,
      `${t.contact.phoneLabel}: ${data.phone}`,
      `${t.contact.emailLabel}: ${data.email}`,
      `${t.contact.requirementLabel}: ${requirement}`,
      "",
      data.message.trim() || "—",
    ];
    const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Contacto web: ${requirement} — ${data.name}`)}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = href;
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contacto"
      aria-label={t.contact.aria}
      className="section-padding bg-white border-t border-border"
    >
      <div className="container-custom">
        <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-3xl border border-border">
          <Image
            src={images.lider.src}
            alt={images.lider.alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover object-[72%_center]"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {t.contact.eyebrow}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary mb-4 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-primary text-base sm:text-lg font-medium leading-relaxed mb-4">
              {t.contact.subtitle}
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">{t.contact.body}</p>

            <div className="space-y-3 mb-8" role="list">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3" role="listitem">
                <Clock size={16} className="text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-primary/80">
                  <span className="font-bold text-primary">{t.contact.responseTitle}: </span>
                  {t.contact.responseTime}
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3" role="listitem">
                <Shield size={16} className="text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-primary/80">
                  <span className="font-bold text-primary">{t.contact.confidentialityTitle}: </span>
                  {t.contact.confidentiality}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border/50 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors"
              >
                <Mail size={14} aria-hidden="true" />
                {siteConfig.email}
              </a>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted mb-3">
                  {t.contact.officesTitle}
                </p>
                <ul className="space-y-4">
                  {t.contact.offices.map((office) => (
                    <li key={office.city}>
                      <p className="flex items-start gap-2 text-sm font-semibold text-primary">
                        <MapPin size={14} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                        {office.city}
                      </p>
                      <p className="text-sm text-muted pl-6">{office.address}</p>
                      <a
                        href={`tel:${office.phone.replace(/[^\d+]/g, "")}`}
                        className="inline-flex items-center gap-2 text-sm text-primary/80 hover:text-accent pl-6 mt-1"
                      >
                        <Phone size={14} aria-hidden="true" />
                        {office.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-8 text-center" role="status">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                  <CheckCircle size={24} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-emerald-900 mb-2">
                  {t.contact.successTitle}
                </h3>
                <p className="text-sm text-emerald-700 leading-relaxed mb-6">{t.contact.successMessage}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-emerald-950 border border-emerald-200 px-4 py-2.5 rounded-lg hover:bg-emerald-100/50 transition-colors"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label={t.contact.formAria}
                className="relative bg-surface rounded-2xl border border-border p-6 sm:p-8 space-y-5 shadow-sm"
              >
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="form-website">Website</label>
                  <input
                    id="form-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("website")}
                  />
                </div>
                <div>
                  <label htmlFor="form-requirement" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                    {t.contact.requirementLabel} <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="form-requirement"
                    className="input-field"
                    {...register("requirementType", { required: t.contact.requirementRequired })}
                    aria-invalid={!!errors.requirementType}
                  >
                    {t.contact.requirementTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.requirementType && (
                    <p className="text-rose-500 text-xs mt-1.5" role="alert">
                      {errors.requirementType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="form-name" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                    {t.contact.nameLabel} <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    autoComplete="name"
                    className={`input-field ${errors.name ? "border-rose-400 focus:ring-rose-200 focus:border-rose-400" : ""}`}
                    {...register("name", { required: t.contact.nameRequired })}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-rose-500 text-xs mt-1.5" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-company" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                      {t.contact.companyLabel} <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      placeholder={t.contact.companyPlaceholder}
                      autoComplete="organization"
                      className={`input-field ${errors.company ? "border-rose-400" : ""}`}
                      {...register("company", { required: t.contact.companyRequired })}
                      aria-invalid={!!errors.company}
                    />
                    {errors.company && (
                      <p className="text-rose-500 text-xs mt-1.5" role="alert">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="form-role" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                      {t.contact.roleLabel}
                    </label>
                    <input
                      id="form-role"
                      type="text"
                      placeholder={t.contact.rolePlaceholder}
                      className="input-field"
                      {...register("role")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-industry" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                      {t.contact.industryLabel}
                    </label>
                    <select id="form-industry" className="input-field" {...register("industry")}>
                      {t.contact.industries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                      {t.contact.phoneLabel} <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      placeholder={t.contact.phonePlaceholder}
                      autoComplete="tel"
                      className={`input-field ${errors.phone ? "border-rose-400" : ""}`}
                      {...register("phone", { required: t.contact.phoneRequired })}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="text-rose-500 text-xs mt-1.5" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                    {t.contact.emailLabel} <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    autoComplete="email"
                    className={`input-field ${errors.email ? "border-rose-400" : ""}`}
                    {...register("email", {
                      required: t.contact.emailRequired,
                      validate: (value) => {
                        const result = classifyHumanEmail(value);
                        if (result === "invalid") return t.contact.emailInvalid;
                        if (result === "not-human") return t.contact.emailNotHuman;
                        return true;
                      },
                    })}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-rose-500 text-xs mt-1.5" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    className="input-field resize-none"
                    {...register("message")}
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn-primary w-full justify-center py-4 text-sm font-bold uppercase tracking-wider"
                  aria-label={t.contact.submitAria}
                >
                  <Send size={15} aria-hidden="true" />
                  {t.contact.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
