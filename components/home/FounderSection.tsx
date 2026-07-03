import Image from "next/image";
import { PlayCircle } from "lucide-react";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function FounderSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= IMAGE ================= */}

          <div className="order-1 flex justify-center lg:justify-start">
            <div className="relative h-[380px] w-[300px] overflow-hidden rounded-[32px] bg-[#F8F8F6] shadow-xl sm:h-[470px] sm:w-[380px] md:h-[540px] md:w-[430px] lg:h-[580px] lg:w-[470px] xl:h-[640px] xl:w-[520px]">
              <Image
                src="/images/founder.png"
                alt="Founder"
                fill
                priority
                className="
                  object-cover object-top
                  sm:object-cover sm:object-top
                  md:object-cover md:object-top
                  lg:object-cover lg:object-center
                "
                sizes="(max-width: 640px) 300px,
                       (max-width: 768px) 380px,
                       (max-width: 1024px) 430px,
                       (max-width: 1280px) 470px,
                       520px"
              />
            </div>
          </div>

          {/* ================= CONTENT ================= */}

          <div className="order-2 text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
              OUR FOUNDER
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-[44px] xl:text-5xl">
              Building Trust,
              <br />
              One Family At A Time
            </h2>

            <blockquote className="mx-auto mt-8 max-w-2xl border-l-4 border-[#4F6F52] pl-5 text-xl font-medium leading-9 text-neutral-800 sm:text-2xl sm:leading-10 lg:mx-0">
              "Every family deserves more than just a house. They deserve a
              secure future, transparent dealings and a home built to last
              generations."
            </blockquote>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-neutral-600 lg:mx-0 lg:text-lg">
              Nelson Homes was founded with one mission: make premium home
              ownership accessible without compromising on quality,
              transparency or customer trust. Every project reflects years of
              engineering excellence and long-term commitment.
            </p>

            <div className="mt-10">
              <h4 className="text-xl font-bold text-neutral-900">
                Fiaz Toor
              </h4>

              <p className="mt-1 text-neutral-500">
                Founder & CEO, Nelson Builders
              </p>

              <div className="mt-6">
                <a
                  href="https://youtu.be/MNyVzBMHxOY?si=Tg5f0vor5tGWN7Y6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="h-12 px-6">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Watch Full Interview
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-5 border-t pt-8 text-center lg:text-left">
              <div>
                <h3 className="text-3xl font-bold text-[#4F6F52]">
                  20+
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#4F6F52]">
                  500+
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  Homes Delivered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#4F6F52]">
                  100%
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}