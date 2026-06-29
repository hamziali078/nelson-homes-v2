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
    <section className="bg-[#F8F8F6] py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-[#4F6F52]/10 px-4 py-2 text-sm font-semibold text-[#4F6F52]">
            WHY NELSON HOMES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-neutral-900 lg:text-5xl">
            Everything You Need.
            <br />
            Nothing Hidden.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Nelson Homes delivers premium quality houses with transparent
            pricing, flexible installment plans and unmatched customer
            protection.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4F6F52]/10 transition-all duration-300 group-hover:bg-[#4F6F52]">
                  <Icon className="h-8 w-8 text-[#4F6F52] group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
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