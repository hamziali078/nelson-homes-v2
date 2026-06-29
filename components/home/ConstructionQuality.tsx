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
    <section className="py-28 bg-[#F8F8F6]">
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Images */}

          <div className="grid grid-cols-2 gap-5">

            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/images/construction-1.jpg"
                alt=""
                width={600}
                height={900}
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div className="space-y-5">

              <div className="overflow-hidden rounded-[28px]">
                <Image
                  src="/images/construction-2.jpg"
                  alt=""
                  width={600}
                  height={400}
                  className="h-[250px] w-full object-cover"
                />
              </div>

              <div className="rounded-[28px] bg-[#4F6F52] p-8 text-white">

                <h3 className="text-5xl font-bold">
                  300+
                </h3>

                <p className="mt-3 text-lg text-white/80">
                  Families Living
                  <br />
                  Happily
                </p>

              </div>

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
              BUILT TO LAST
            </span>

            <h2 className="mt-5 text-4xl font-bold text-neutral-900 lg:text-5xl">
              Built To
              <br />
              Outlast Generations
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Every Nelson Home is constructed using premium materials,
              expert craftsmanship and strict quality control to ensure
              your investment remains secure for decades.
            </p>

            <div className="mt-10 space-y-5">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4F6F52]/10">
                    <Check className="h-5 w-5 text-[#4F6F52]" />
                  </div>

                  <span className="text-lg text-neutral-700">
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