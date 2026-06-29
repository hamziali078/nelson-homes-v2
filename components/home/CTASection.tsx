import { ArrowRight, Phone, CalendarDays } from "lucide-react";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[#4F6F52]" />

      <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-[#B08D57]/20 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            START TODAY
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-6xl">
            Ready To Own
            <br />
            Your Dream Home?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Schedule a free consultation with our experts and discover premium
            homes with flexible installment plans.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <Button href="/contact">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button className="h-14 bg-[#B08D57] px-8 text-white hover:bg-[#9A7948]">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-10 text-white/80">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5" />
              Free Consultation
            </div>

            <div className="h-5 w-px bg-white/20" />

            <div>No Hidden Charges</div>

            <div className="h-5 w-px bg-white/20" />

            <div>Lifetime Structural Warranty</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
