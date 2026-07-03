import { ArrowRight, Award, Home, ShieldCheck } from "lucide-react";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8F8F6] pt-28 pb-16 sm:pt-32 sm:pb-18 md:pt-32 md:pb-20 lg:pt-20 lg:pb-16 xl:pt-24 xl:pb-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-44 right-0 h-[420px] w-[420px] rounded-full bg-[#4F6F52]/10 blur-3xl sm:h-[500px] sm:w-[500px] lg:h-[540px] lg:w-[540px] xl:h-[580px] xl:w-[580px]" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6 xl:grid-cols-[0.88fr_1.12fr] xl:gap-12">
          {/* ================= VIDEO ================= */}

          <div className="relative order-1 lg:order-2">
            {/* Green Background (Desktop Only) */}
            <div className="absolute -left-4 top-5 hidden h-[96%] w-[96%] rounded-[34px] bg-gradient-to-br from-[#4F6F52] via-[#5A7C5D] to-[#38503B] lg:block xl:-left-6 xl:top-6 xl:rounded-[36px]" />

            {/* Video */}
            <div className="relative overflow-hidden rounded-[26px] shadow-2xl lg:rounded-[34px] xl:rounded-[36px]">
              <video
                src="/videos/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-[300px] w-full object-cover sm:h-[390px] md:h-[440px] lg:h-[400px] xl:h-[470px]"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 lg:block">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[#4F6F52]/10 p-2">
                  <ShieldCheck className="h-4 w-4 text-[#4F6F52]" />
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-[#1B1B1B]">
                    100% Secure Investment
                  </p>

                  <p className="text-[10px] text-neutral-500">
                    Trusted by hundreds of families.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Badge */}
            <div className="absolute -right-4 top-7 hidden rounded-xl bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 lg:block">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#B08D57]" />

                <div>
                  <p className="text-[11px] font-semibold">
                    Premium Quality
                  </p>

                  <p className="text-[10px] text-neutral-500">
                    Lifetime Structural Warranty
                  </p>
                </div>
              </div>
            </div>

            {/* Installment Badge */}
            <div className="absolute -right-5 bottom-14 hidden rounded-xl bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 lg:block">
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4 text-[#4F6F52]" />

                <div>
                  <p className="text-[11px] font-semibold">
                    Easy Installments
                  </p>

                  <p className="text-[10px] text-neutral-500">
                    Starting from 10% Down Payment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}

          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="inline-flex items-center rounded-full border border-[#D9D9D9] bg-white px-3 py-1.5 text-sm font-medium text-[#4F6F52] shadow-sm">
              Premium Living Starts Here
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#1B1B1B] sm:text-5xl lg:text-[56px] xl:text-6xl">
              Your Family
              <br />
              Deserves More
              <br />
              Than Just
              <span className="text-[#4F6F52]"> A House.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-neutral-600 lg:mx-0 lg:text-[17px] lg:leading-8 xl:max-w-xl xl:text-lg">
              Premium homes with transparent pricing, flexible installment
              plans, lifetime structural warranty, and possession before full
              payment.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button
                href="/contact"
                className="h-12 px-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:h-12 lg:px-7 xl:h-14 xl:px-8"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                href="/#projects"
                variant="outline"
                className="h-12 px-6 lg:h-12 lg:px-7 xl:h-14 xl:px-8"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}