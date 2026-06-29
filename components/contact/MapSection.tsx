import Container from "@/components/ui/container";

export default function MapSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
            OUR LOCATION
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#1B1B1B] lg:text-5xl">
            Visit Our Office
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Meet our consultants in person and explore our premium housing
            projects.
          </p>
        </div>

        <div className="overflow-hidden rounded-[36px] border border-neutral-200 shadow-xl">
          <iframe
            title="Nelson Homes Location"
            src="https://www.google.com/maps?q=Nelson+Homes+Lahore&output=embed"
            width="100%"
            height="550"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        <div className="mt-10 grid gap-8 rounded-[32px] bg-[#F8F8F6] p-10 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-[#1B1B1B]">
              Office Address
            </h3>

            <p className="mt-4 leading-8 text-neutral-600">
              Nelson Homes
              <br />
              Lahore, Punjab
              <br />
              Pakistan
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1B1B1B]">
              Working Hours
            </h3>

            <p className="mt-4 leading-8 text-neutral-600">
              Monday – Saturday
              <br />
              9:00 AM – 6:00 PM
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1B1B1B]">
              Contact
            </h3>

            <p className="mt-4 leading-8 text-neutral-600">
              Phone: 0310 0006647
              <br />
              Email: zooming.pk@gmail.com
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}