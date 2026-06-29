import { ArrowRight, ShieldCheck, Home, Award } from "lucide-react";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8F8F6] pb-20 pt-28 lg:pb-28 lg:pt-36"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#4F6F52]/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex items-center rounded-full border border-[#D9D9D9] bg-white px-4 py-2 text-sm font-medium text-[#4F6F52] shadow-sm">
              Premium Living Starts Here
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight text-[#1B1B1B] sm:text-5xl lg:text-7xl">
              Your Family
              <br />
              Deserves More
              <br />
              Than Just
              <span className="text-[#4F6F52]"> A House.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              Premium homes with transparent pricing, flexible installment
              plans, lifetime structural warranty, and possession before full
              payment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button href="#projects" variant="outline">
                View Projects
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -left-6 top-10 h-full w-full rounded-[40px] bg-[#4F6F52]" />

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
              <video
                src="/videos/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-[500px] w-full object-cover sm:h-[600px] lg:h-[650px]"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 left-8 hidden rounded-3xl bg-white p-6 shadow-2xl md:block">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#4F6F52]/10 p-3">
                  <ShieldCheck className="h-7 w-7 text-[#4F6F52]" />
                </div>

                <div>
                  <p className="font-semibold text-[#1B1B1B]">
                    100% Secure Investment
                  </p>

                  <p className="text-sm text-neutral-500">
                    Trusted by hundreds of families.
                  </p>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute right-0 top-10 hidden rounded-2xl bg-white px-5 py-4 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-[#B08D57]" />

                <div>
                  <p className="font-semibold">Premium Quality</p>

                  <p className="text-xs text-neutral-500">
                    Lifetime Structure Warranty
                  </p>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute bottom-32 right-10 hidden rounded-2xl bg-white px-5 py-4 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <Home className="h-6 w-6 text-[#4F6F52]" />

                <div>
                  <p className="font-semibold">Easy Installments</p>

                  <p className="text-xs text-neutral-500">
                    Starting from 10% Down Payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
