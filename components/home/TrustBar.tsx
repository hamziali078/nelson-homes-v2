import {
  MapPinned,
  Trees,
  Building2,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/container";

const features = [
  {
    icon: MapPinned,
    title: "Prime Locations",
    text: "Best locations with easy city access.",
  },
  {
    icon: Trees,
    title: "Modern Lifestyle",
    text: "Green spaces and premium family living.",
  },
  {
    icon: Building2,
    title: "Premium Communities",
    text: "Luxury neighborhoods built for comfort.",
  },
  {
    icon: TrendingUp,
    title: "High Investment Growth",
    text: "Strong returns with rising property values.",
  },
];

export default function TrustBar() {
  return (
    <section
      id="communities"
      className="border-y border-neutral-200 bg-white"
    >
      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-[#F8F8F6] hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4F6F52]/10 transition-all duration-300 group-hover:bg-[#4F6F52]">
                    <Icon className="h-7 w-7 text-[#4F6F52] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}