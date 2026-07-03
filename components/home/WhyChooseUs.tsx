import {
  CheckCircle2,
  Shield,
  BadgeDollarSign,
  KeyRound,
  Wrench,
  Building2,
} from "lucide-react";

import Container from "@/components/ui/container";

const benefits = [
  {
    icon: Shield,
    title: "50% Ownership",
    description:
      "Receive legal ownership after only 50% payment for complete peace of mind.",
  },
  {
    icon: KeyRound,
    title: "88% Possession",
    description:
      "Take possession before completing full payment unlike traditional developers.",
  },
  {
    icon: BadgeDollarSign,
    title: "Fixed Pricing",
    description:
      "No escalation charges. The agreed price remains the final price.",
  },
  {
    icon: Wrench,
    title: "Free Maintenance",
    description:
      "Enjoy one year of complimentary maintenance after handover.",
  },
  {
    icon: Building2,
    title: "Developed Communities",
    description:
      "Homes are built only in fully developed and premium locations.",
  },
  {
    icon: CheckCircle2,
    title: "Utilities Included",
    description:
      "Electricity, Gas, Water, Internet and UPS installation included.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="communities"
      className="bg-[#F8F8F6] py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#4F6F52]/10 px-4 py-2 text-sm font-semibold text-[#4F6F52]">
            WHY NELSON HOMES
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-[44px] xl:text-5xl">
            Everything You Need.
            <br />
            Nothing Hidden.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            Nelson Homes delivers premium quality houses with transparent
            pricing, flexible installment plans and unmatched customer
            protection.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-7 xl:mt-20 xl:grid-cols-3 xl:gap-8">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-7 lg:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F6F52]/10 transition-all duration-300 group-hover:bg-[#4F6F52] sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 text-[#4F6F52] transition-colors duration-300 group-hover:text-white sm:h-8 sm:w-8" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-neutral-900 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600 sm:mt-4 sm:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}