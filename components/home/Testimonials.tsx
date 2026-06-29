import { Star } from "lucide-react";
import Image from "next/image";

import Container from "@/components/ui/container";

const testimonials = [
  {
    name: "Ahmed Raza",
    city: "USA",
    // image: "/images/client-1.jpg",
    review:
      "The entire buying process was transparent and stress-free. Nelson Homes delivered exactly what they promised.",
  },
  {
    name: "Sarah Khan",
    city: "Lahore",
    // image: "/images/client-2.jpg",
    review:
      "The quality of construction exceeded our expectations. We moved into our home before completing the final payment.",
  },
  {
    name: "Umar Ali",
    city: "Lahore",
    // image: "/images/client-3.png",
    review:
      "Professional staff, premium finishes and excellent customer support. Everything was handled professionally.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8F8F6] py-28">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
            TESTIMONIALS
          </p>

          <h2 className="mt-5 text-4xl font-bold text-neutral-900 lg:text-5xl">
            Loved By Families
          </h2>

          <p className="mt-6 text-lg text-neutral-600">
            Hear from homeowners who trusted Nelson Homes.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex gap-1 text-[#D6A84F]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                {/* <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="h-14 w-14 rounded-full object-cover"
                /> */}

                <div>
                  <h4 className="font-semibold text-neutral-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-neutral-500">
                    {item.city}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}