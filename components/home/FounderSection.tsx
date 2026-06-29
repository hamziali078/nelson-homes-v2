import Image from "next/image";
import Container from "@/components/ui/container";

export default function FounderSection() {
  return (
    <section id="about" className="bg-white py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div className="relative h-[420px] w-full overflow-hidden rounded-[36px] sm:h-[520px] lg:h-[620px]">
            <Image
              src="/images/founder.png"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
              OUR FOUNDER
            </span>

            <h2 className="mt-5 text-4xl font-bold text-neutral-900 lg:text-5xl">
              Building Trust,
              <br />
              One Family At A Time
            </h2>

            <blockquote className="mt-10 border-l-4 border-[#4F6F52] pl-6 text-2xl font-medium leading-10 text-neutral-800">
              "Every family deserves more than just a house. They deserve
              a secure future, transparent dealings and a home built to
              last generations."
            </blockquote>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Nelson Homes was founded with one mission: make premium
              home ownership accessible without compromising on quality,
              transparency or customer trust. Every project reflects
              years of engineering excellence and long-term commitment.
            </p>

            <div className="mt-10">
              <h4 className="text-xl font-bold text-neutral-900">
                Fiaz Toor
              </h4>

              <p className="mt-1 text-neutral-500">
                Founder & CEO, Nelson Builders
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t pt-8">

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