import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Apply to Compete (CEOs, Founders, VC's)",
  "Corporate Sponsorship",
  "Mobile Sovereign Sandbox",
  "Global Supply Chain & Asset Localization",
  "Storage-as-a-Service (STaaS) & Bonded Warehousing (Logistics)",
  "Trade Pact Facilitation",
];

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+27 73 088 5485" },
  { icon: Mail, label: "Email", value: "info@elihaddasa.com" },
  {
    icon: MapPin,
    label: "Office & headquarters",
    value: "Limpopo, South Africa",
  },
  {
    icon: Clock,
    label: "Hours",
    // value: "Mon\u2013Fri, 8:00\u201318:00 · 24/7 Emergency Line",
    value: "Mon\u2013Fri, 8:00\u201318:00·",
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.service) next.service = "Select a service.";
    if (!form.message.trim())
      next.message = "Tell us a little about the project.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full border-b bg-transparent py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none ${
      errors[field] ? "border-red-400" : "border-white/20 focus:border-sky-500"
    }`;

  return (
    <section id="contact" className="bg-ink-800 py-24 md:py-32">
      <div className="section-shell grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            index="09"
            eyebrow="Get In Touch"
            title=" Partner with Eli Haddasa."
            description=" We'd love to hear from you. Whether you have a question about our
            global supply operations, capital raising tournaments, partnerships,
            infrastructure building or anything else, our team is ready to
            answer all your questions."
          />

          <dl className="mt-12 space-y-6">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex items-start gap-4 border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
              >
                <detail.icon
                  className="mt-0.5 h-4 w-4 shrink-0 text-sky-500"
                  strokeWidth={1.75}
                />
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-sm text-bone">{detail.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7">
          {submitted && (
            <div className="mb-8 flex items-center gap-3 border border-sky-500/40 bg-amp/10 px-5 py-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-500" />
              <p className="text-sm text-bone">
                Thanks &mdash; your request has been received. We&rsquo;ll be in
                touch shortly.
              </p>
            </div>
          )}

          {/* Fix Form Soon*/}
          <form
            noValidate
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label
                htmlFor="name"
                className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass("name")}
                placeholder="Jordan Blake"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass("email")}
                placeholder="jordan@company.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="phone"
                className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass("phone")}
                placeholder="+1 (555) 000-0000"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs text-red-400">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="service"
                className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted"
              >
                Service
              </label>
              <select
                id="service"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={`${inputClass("service")} appearance-none`}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="" className="bg-ink-800">
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option} className="bg-ink-800">
                    {option}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p id="service-error" className="mt-1.5 text-xs text-red-400">
                  {errors.service}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="font-mono text-[10px] uppercase tracking-widest2 text-bone-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass("message")} resize-none`}
                placeholder="Tell us about your site and what you need."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-sky-500 px-8 py-4 font-mono text-[12px] uppercase tracking-widest2 text-ink-900 transition-colors duration-300 hover:bg-bone"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
