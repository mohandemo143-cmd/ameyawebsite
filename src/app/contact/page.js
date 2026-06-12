"use client";

import { useState } from "react";
import { z } from "zod";

import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
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

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const newErrors = {};
      parsed.error.issues.forEach((issue) => {
        newErrors[issue.path[0]] = issue.message;
      });
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSent(true);
    console.log(data);
    // TODO: Connect API/email service here
  };

  return (
    <>
      <PageHeader
        crumb="Contact"
        title="Contact Us"
        subtitle="We respond within 1 business day."
      />

      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="bg-white p-9"
              style={{
                border: "1px solid #DDE6F0",
                borderRadius: "16px",
              }}
            >
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle2
                    size={56}
                    color="#22A06B"
                    className="mx-auto"
                  />
                  <h2 className="mt-5 text-2xl">Thank You</h2>
                  <p
                    className="mt-2 text-base"
                    style={{ color: "#6B7A8D" }}
                  >
                    We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="space-y-4"
                  noValidate
                >
                  <Field
                    label="Full Name *"
                    name="name"
                    error={errors.name}
                  />

                  <Field
                    label="Company Name"
                    name="company"
                  />

                  <Field
                    label="Email Address *"
                    name="email"
                    type="email"
                    error={errors.email}
                  />

                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                  />

                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "#0C2D55" }}
                    >
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      defaultValue=""
                      className="w-full px-3 py-2.5 rounded-md text-sm bg-white"
                      style={{ border: "1px solid #DDE6F0" }}
                    >
                      <option value="">Select a service...</option>
                      <option>Custom Software Development</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>AI & Machine Learning</option>
                      <option>SAP Services</option>
                      <option>Cloud Services</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "#0C2D55" }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full px-3 py-2.5 rounded-md text-sm"
                      style={{ border: "1px solid #DDE6F0" }}
                    />
                    {errors.message && (
                      <div
                        className="mt-1 text-xs"
                        style={{ color: "#D03434" }}
                      >
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>

                  <p
                    className="text-xs text-center"
                    style={{ color: "#6B7A8D" }}
                  >
                    Your information is never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Info
              icon={MapPin}
              title="Office Address"
              lines={["Hyderabad, Telangana, India", "500081"]}
            />

            <Info
              icon={Phone}
              title="Phone"
              lines={["+91 7993174833", "Mon-Sat 9am-6pm"]}
            />

            <Info
              icon={Mail}
              title="Email"
              lines={["info@ameyait.com"]}
            />

            {/* LinkedIn - using SVG since Linkedin icon was removed from lucide-react */}
            <div
              className="p-4 rounded-xl"
              style={{
                background: "#F5F7FA",
                border: "1px solid #DDE6F0",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-md"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE6F0",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#00ACC1"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>

                <div>
                  <div
                    className="text-sm font-bold"
                    style={{ color: "#0C2D55" }}
                  >
                    LinkedIn
                  </div>
                  <a
                    href="https://linkedin.com/company/ameyait"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: "#333F4D" }}
                  >
                    linkedin.com/company/ameyait
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="container-x mt-10">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=Hyderabad&output=embed"
            loading="lazy"
            className="w-full"
            style={{
              height: "300px",
              border: "1px solid #DDE6F0",
              borderRadius: "8px",
            }}
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }) {
  return (
    <div>
      <label
        className="block text-sm font-semibold mb-1.5"
        style={{ color: "#0C2D55" }}
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="w-full px-3 py-2.5 rounded-md text-sm"
        style={{ border: "1px solid #DDE6F0" }}
      />
      {error && (
        <div className="mt-1 text-xs" style={{ color: "#D03434" }}>
          {error}
        </div>
      )}
    </div>
  );
}

function Info({ icon: Icon, title, lines }) {
  return (
    <div
      className="p-4 rounded-xl"
      style={{
        background: "#F5F7FA",
        border: "1px solid #DDE6F0",
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="p-2 rounded-md"
          style={{
            background: "#FFFFFF",
            border: "1px solid #DDE6F0",
          }}
        >
          <Icon size={18} color="#00ACC1" />
        </div>

        <div>
          <div
            className="text-sm font-bold"
            style={{ color: "#0C2D55" }}
          >
            {title}
          </div>
          {lines.map((line) => (
            <div
              key={line}
              className="text-sm"
              style={{ color: "#333F4D" }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}