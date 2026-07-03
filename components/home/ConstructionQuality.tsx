import Image from "next/image";
import { Check } from "lucide-react";

import Container from "@/components/ui/container";

const features = [
  "Premium A+ construction materials",
  "Earthquake-resistant structural design",
  "Certified engineering supervision",
  "Modern architecture & ventilation",
  "Lifetime structural warranty",
  "Timely project delivery",
];

export default function ConstructionQuality() {
  return (
    <section className="bg-[#F8F8F6] py-20 lg:py-24 xl:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= IMAGES ================= */}

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="overflow-hidden rounded-[24px] lg:rounded-[28px]">
              <Image
                src="/images/construction-1.jpg"
                alt=""
                width={600}
                height={900}
                className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[520px]"
              />
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div className="overflow-hidden rounded-[24px] lg:rounded-[28px]">
                <Image
                  src="/images/construction-2.jpg"
                  alt=""
                  width={600}
                  height={400}
                  className="h-[170px] w-full object-cover sm:h-[220px] lg:h-[250px]"
                />
              </div>

              {/* 300+ Card */}

              <div className="rounded-[24px] bg-[#4F6F52] px-5 py-6 text-white sm:px-6 sm:py-7 lg:rounded-[28px] lg:p-8">
                <h3 className="text-4xl font-bold sm:text-5xl">
                  300+
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/80 sm:text-base lg:mt-3 lg:text-lg">
                  Families Living
                  <br />
                  Happily
                </p>
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
              BUILT TO LAST
            </span>

            <h2 className="mt-5 text-3xl font-bold text-neutral-900 sm:text-4xl lg:text-[44px] xl:text-5xl">
              Built To
              <br />
              Outlast Generations
            </h2>

            <p className="mt-6 text-base leading-8 text-neutral-600 lg:text-lg">
              Every Nelson Home is constructed using premium materials,
              expert craftsmanship and strict quality control to ensure your
              investment remains secure for decades.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4F6F52]/10">
                    <Check className="h-5 w-5 text-[#4F6F52]" />
                  </div>

                  <span className="text-base text-neutral-700 lg:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}