"use client";

import { useState } from "react";
import { Mail, Phone, Send, Loader2 } from "lucide-react";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    villaSize: "",
    area: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");

      setForm({
        name: "",
        phone: "",
        email: "",
        villaSize: "",
        area: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_560px]">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
              GET IN TOUCH
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#1B1B1B] lg:text-5xl">
              We'd Love To
              <br />
              Hear From You
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              Fill out the form and one of our property consultants will contact
              you shortly to discuss your requirements and help you choose the
              perfect home.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F6F52]/10">
                  <Phone className="h-6 w-6 text-[#4F6F52]" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#1B1B1B]">Call Us</h3>

                  <a
                    href="tel:03100006647"
                    className="mt-1 block text-neutral-600 hover:text-[#4F6F52]"
                  >
                    0310 0006647
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F6F52]/10">
                  <Mail className="h-6 w-6 text-[#4F6F52]" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#1B1B1B]">Email</h3>

                  <a
                    href="mailto:zooming.pk@gmail.com"
                    className="mt-1 block text-neutral-600 hover:text-[#4F6F52]"
                  >
                    zooming.pk@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[32px] border border-neutral-200 bg-[#F8F8F6] p-8 shadow-sm lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block font-medium text-neutral-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="h-14 w-full rounded-xl border border-neutral-300 bg-white px-4 outline-none transition focus:border-[#4F6F52]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-neutral-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="03XX XXXXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="h-14 w-full rounded-xl border border-neutral-300 bg-white px-4 outline-none transition focus:border-[#4F6F52]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-neutral-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="h-14 w-full rounded-xl border border-neutral-300 bg-white px-4 outline-none transition focus:border-[#4F6F52]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-neutral-700">
                  What size of villa are you interested in?
                </label>

                <select
                  value={form.villaSize}
                  onChange={(e) =>
                    setForm({ ...form, villaSize: e.target.value })
                  }
                  required
                  className="h-14 w-full rounded-xl border border-neutral-300 bg-white px-4 outline-none transition focus:border-[#4F6F52]"
                >
                  <option value="">Select Villa Size</option>
                  <option value="3 Marla">3 Marla</option>
                  <option value="5 Marla">5 Marla</option>
                  <option value="8 Marla">8 Marla</option>
                  <option value="10 Marla">10 Marla</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-neutral-700">
                  Which area do you prefer?
                </label>

                <select
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                  required
                  className="h-14 w-full rounded-xl border border-neutral-300 bg-white px-4 outline-none transition focus:border-[#4F6F52]"
                >
                  <option value="">Select Preferred Area</option>

                  <option value="AL-KABIR TOWN LAHORE">
                    AL-KABIR TOWN LAHORE
                  </option>

                  <option value="BAHRIA TOWN LAHORE">BAHRIA TOWN LAHORE</option>

                  <option value="BAHRIA ORCHARD LAHORE">
                    BAHRIA ORCHARD LAHORE
                  </option>

                  <option value="DHA LAHORE">DHA LAHORE</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-neutral-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-neutral-300 bg-white p-4 outline-none transition focus:border-[#4F6F52]"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full justify-center py-4 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {status === "success" && (
                <p className="text-center font-medium text-green-600">
                  ✅ Your message has been sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-center font-medium text-red-600">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
