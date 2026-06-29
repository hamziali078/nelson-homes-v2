"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F6] pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-20 h-[420px] w-[420px] rounded-full bg-[#4F6F52]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#B08D57]/10 blur-3xl" />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center justify-center gap-2 text-sm text-neutral-500">
            <Link href="/" className="transition hover:text-[#4F6F52]">
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="font-medium text-[#4F6F52]">Contact Us</span>
          </div>

          {/* Badge */}
          <span className="inline-flex rounded-full border border-[#D8D8D8] bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#4F6F52] shadow-sm">
            We're Here To Help
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold leading-tight text-[#1B1B1B] lg:text-7xl">
            Let's Build
            <br />
            Your Dream Home
            <span className="text-[#4F6F52]"> Together.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Whether you're looking for your first home, investment
            opportunities, or simply need expert guidance, our team is ready to
            assist you every step of the way.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button href="/contact">
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              onClick={() => window.open("tel:03100006647")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-10 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-[#4F6F52]">10%</h3>
              <p className="mt-2 text-sm text-neutral-500">Down Payment</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#4F6F52]">88%</h3>
              <p className="mt-2 text-sm text-neutral-500">Possession</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#4F6F52]">0%</h3>
              <p className="mt-2 text-sm text-neutral-500">Hidden Charges</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#4F6F52]">Lifetime</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Structural Warranty
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
