import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";

import Container from "../components/Container";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";
import { SITE_CONFIG } from "../utils/constants";
import { isValidEmail, isNotEmpty } from "../utils/validators";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setFeedback("");
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!isNotEmpty(formData.name)) {
      nextErrors.name = "Please enter your name.";
    }

    if (!isValidEmail(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!isNotEmpty(formData.subject)) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (!isNotEmpty(formData.message)) {
      nextErrors.message = "Please describe your project.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setFeedback("Please correct the highlighted fields.");
      return;
    }

    setFeedback(
      "Your form is valid, but message delivery is not connected yet. Connect a backend or form service before using this form with clients.",
    );
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-white/10 bg-brand-bg px-4 py-3.5 text-sm text-brand-text outline-none transition placeholder:text-brand-muted/70 focus:border-brand-gold/60 focus:ring-2 focus:ring-brand-gold/10";

  const contactMethods = [
    {
      id: "email",
      label: "Email",
      value: SITE_CONFIG.email,
      href: SITE_CONFIG.email ? `mailto:${SITE_CONFIG.email}` : "",
      icon: Mail,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: SITE_CONFIG.whatsapp ? "Chat with me" : "",
      href: SITE_CONFIG.whatsapp
        ? `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}`
        : "",
      icon: MessageCircle,
    },
  ].filter((item) => item.value && item.href);

  return (
    <section
      id="contact"
      className="scroll-mt-0 bg-brand-surface/40 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Let's talk about your project."
            description="Tell me what you want to build, what you need it to do, and your expected timeline."
          />
        </RevealOnScroll>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <RevealOnScroll direction="left">
            <div className="h-full rounded-3xl border border-white/10 bg-brand-surface p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">
                Start a conversation
              </p>

              <h3 className="mt-4 font-display text-2xl font-bold text-brand-text sm:text-3xl">
                Have an idea? Let&apos;s explore it.
              </h3>

              <p className="mt-4 leading-7 text-brand-muted">
                Whether you need a landing page, a responsive website, or an
                API-connected interface, share your requirements and we can
                discuss the next steps.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gold/10 text-brand-gold">
                    <MapPin size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="font-medium text-brand-text">Location</p>
                    <p className="mt-1 text-sm text-brand-muted">
                      India · Available for remote collaboration
                    </p>
                  </div>
                </div>

                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <a
                      key={method.id}
                      href={method.href}
                      target={method.id === "whatsapp" ? "_blank" : undefined}
                      rel={method.id === "whatsapp" ? "noreferrer" : undefined}
                      className="flex items-start gap-4 rounded-xl transition-colors hover:text-brand-gold"
                    >
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gold/10 text-brand-gold">
                        <Icon size={20} aria-hidden="true" />
                      </div>

                      <div className="min-w-0">
                        <p className="font-medium text-brand-text">
                          {method.label}
                        </p>
                        <p className="mt-1 break-all text-sm text-brand-muted">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-9 rounded-2xl border border-brand-gold/15 bg-brand-bg/70 p-5">
                <p className="font-semibold text-brand-text">
                  Helpful details to include
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-brand-muted">
                  <li>• Type of website or application</li>
                  <li>• Required pages and features</li>
                  <li>• Expected timeline and budget</li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={100}>
            <div className="mb-16 rounded-2xl border border-brand-gold/15 bg-brand-bg/70 px-5 py-4">
              <p className="text-sm italic leading-7 text-brand-muted">
                “Every great project starts with a clear idea and the right
                conversation.”
              </p>
              <p className="mt-2 text-sm italic leading-7 text-brand-muted">
                “Let’s turn your vision into something meaningful and
                impactful.”
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-white/10 bg-brand-surface p-6 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-brand-text"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                    className={inputClass}
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      className="mt-2 text-xs text-brand-red"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-brand-text"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "contact-email-error" : undefined
                    }
                    className={inputClass}
                  />
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      className="mt-2 text-xs text-brand-red"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-subject"
                    className="text-sm font-medium text-brand-text"
                  >
                    Project subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Business website"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={
                      errors.subject ? "contact-subject-error" : undefined
                    }
                    className={inputClass}
                  />
                  {errors.subject && (
                    <p
                      id="contact-subject-error"
                      className="mt-2 text-xs text-brand-red"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-brand-text"
                  >
                    Tell me about your project
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What do you want to build?"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className={`${inputClass} resize-y`}
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="mt-2 text-xs text-brand-red"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {feedback && (
                <p
                  role="status"
                  aria-live="polite"
                  className="mt-5 rounded-xl border border-brand-gold/20 bg-brand-bg p-4 text-sm leading-6 text-brand-text"
                >
                  {feedback}
                </p>
              )}

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-4 font-semibold text-brand-bg transition-all duration-200 hover:bg-brand-gold-light focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-surface sm:w-auto"
              >
                Validate Message
                <Send size={17} aria-hidden="true" />
              </button>

              <p className="mt-4 text-xs leading-5 text-brand-muted">
                Message delivery will work after the contact API or form service
                is connected.
              </p>
            </form>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
