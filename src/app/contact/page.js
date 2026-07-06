"use client";

import { useState } from "react";
import { z } from "zod";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Send,
  Linkedin,
} from "lucide-react";

import PageHeader from "@/components/common/PageHeader";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().trim().min(1, "Message is required"),
});

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const newErrors = {};
      parsed.error.issues.forEach((issue) => {
        newErrors[issue.path[0]] = issue.message;
      });
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    
    // Simulate API delay for a premium feel
    setTimeout(() => {
      setSent(true);
      setIsSubmitting(false);
      console.log(data);
    }, 800);
  };

  return (
    <>
      <PageHeader
        crumb="Contact"
        title="Get in Touch"
        subtitle="Let’s discuss how we can help your business scale. We respond within 1 business day."
      />

      {/* Removed bg-surface to let the global background bleed through */}
      <section className="section relative overflow-hidden">
        
        {/* Ambient Background Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
          
          {/* Form Side (Spans 7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/60 shadow-xl overflow-hidden">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400" />

              {sent ? (
                <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <CheckCircle2 size={40} className="text-emerald-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-heading">
                    Message Sent!
                  </h2>
                  <p className="mt-4 text-lg text-body">
                    Thank you for reaching out. A member of our team will be in touch with you shortly.
                  </p>
                  <button 
                    onClick={() => setSent(false)} 
                    className="mt-8 text-teal font-bold hover:text-navy transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Full Name *" name="name" error={errors.name} />
                    <Field label="Company Name" name="company" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Field
                      label="Email Address *"
                      name="email"
                      type="email"
                      error={errors.email}
                    />
                    <Field label="Phone Number" name="phone" type="tel" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-heading">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      defaultValue=""
                      className="w-full px-4 py-3.5 rounded-xl text-sm bg-white/60 backdrop-blur-sm border border-white/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-all text-body appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service...</option>
                      <option>Custom Software Development</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>AI & Machine Learning</option>
                      <option>SAP Services (CI-DS, CPI, S/4HANA)</option>
                      <option>Cloud Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-heading">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3.5 rounded-xl text-sm bg-white/60 backdrop-blur-sm border border-white/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-all text-body resize-none placeholder:text-muted/60"
                    />
                    {errors.message && (
                      <div className="mt-2 text-xs font-semibold text-rose-500">
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full mt-4 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-navy text-white text-base font-bold hover:bg-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && (
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    )}
                  </button>

                  <p className="text-xs text-center text-muted/80 pt-2">
                    Your information is secure and never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Side (Spans 5 columns) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <Info
                icon={MapPin}
                title="Office Address"
                lines={["3rd Floor, Plot No. 37/A,Vengal Rao Nagar,Sunder Nagar,Hyderabad, Telangana 500038"]}
              />

              <Info
                icon={Phone}
                title="Phone"
                lines={["+91 7993174833"]}
              />

              <Info
                icon={Mail}
                title="Email"
                lines={["info@ameyait.com"]}
              />

              {/* Upgraded LinkedIn Card */}
            {/* Upgraded LinkedIn Card */}
<a 
  href="https://linkedin.com/company/ameyait"
  target="_blank"
  rel="noopener noreferrer"
  className="group p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block relative overflow-hidden"
>
  {/* Subtle Hover Glow */}
  <div className="absolute inset-0 bg-[#0A66C2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  
  <div className="flex items-center gap-4 relative z-10">
    <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
      
      {/* Replaced <Linkedin /> with the raw SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>

    </div>

    <div>
      <div className="text-sm font-bold text-heading">Follow us on LinkedIn</div>
      <div className="text-sm text-body mt-1">Stay updated with our latest news</div>
    </div>
  </div>
</a>
            </div>

            {/* Map iframe wrapped in a premium border */}
            <div className="mt-3 pt-1 border-t border-brand/40">
  <iframe
    title="Office Location"
    src="https://www.google.com/maps?q=3rd+floor,+Plot+No.+37/A,+Vengal+Rao+Nagar,+Sunder+Nagar,+Hyderabad,+Telangana+500038&output=embed"
    loading="lazy"
    className="w-full rounded-2xl border-[6px] border-white/80 shadow-lg bg-white/50"
    style={{ height: "240px" }}
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
          </div>

        </div>
      </section>
    </>
  );
}

// Upgraded Field component
function Field({ label, name, type = "text", error }) {
  return (
    <div>
      <label className="block text-sm font-bold mb-2 text-heading">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="w-full px-4 py-3.5 rounded-xl text-sm bg-white/60 backdrop-blur-sm border border-white/80 shadow-inner focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-all text-body placeholder:text-muted/60"
      />
      {error && (
        <div className="mt-2 text-xs font-semibold text-rose-500">{error}</div>
      )}
    </div>
  );
}

// Upgraded Info Card component
function Info({ icon: Icon, title, lines }) {
  return (
    <div className="group p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
      {/* Subtle Hover Glow */}
      <div className="absolute inset-0 bg-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center group-hover:bg-teal group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
          <Icon size={24} />
        </div>

        <div className="flex-1 pt-1">
          <div className="text-sm font-bold text-heading mb-1">{title}</div>
          {lines.map((line) => (
            <div key={line} className="text-sm text-body mt-0.5">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}