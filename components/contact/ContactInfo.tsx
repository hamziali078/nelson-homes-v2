import {
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import Container from "@/components/ui/container";

export default function ContactInfo() {
  return (
    <section className="bg-[#F8F8F6] py-24">
      <Container>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
            CONTACT DETAILS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#1B1B1B] lg:text-5xl">
            Visit Or Contact Us
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Reach us through any of the following channels. Our team is always
            ready to assist you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Phone */}
          <div className="rounded-[30px] bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4F6F52]/10">
              <Phone className="h-7 w-7 text-[#4F6F52]" />
            </div>

            <h3 className="mt-6 text-xl font-semibold">Phone</h3>

            <a
              href="tel:03100006647"
              className="mt-3 block text-neutral-600 transition hover:text-[#4F6F52]"
            >
              0310 0006647
            </a>
          </div>

          {/* Email */}
          <div className="rounded-[30px] bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4F6F52]/10">
              <Mail className="h-7 w-7 text-[#4F6F52]" />
            </div>

            <h3 className="mt-6 text-xl font-semibold">Email</h3>

            <a
              href="mailto:zooming.pk@gmail.com"
              className="mt-3 block break-all text-neutral-600 transition hover:text-[#4F6F52]"
            >
              zooming.pk@gmail.com
            </a>
          </div>

          {/* Office Hours */}
          <div className="rounded-[30px] bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4F6F52]/10">
              <Clock3 className="h-7 w-7 text-[#4F6F52]" />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Office Hours
            </h3>

            <p className="mt-3 leading-7 text-neutral-600">
              Monday – Saturday
              <br />
              9:00 AM – 6:00 PM
            </p>
          </div>

          {/* Social */}
          <div className="rounded-[30px] bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4F6F52]/10">
              <FaFacebookF className="h-7 w-7 text-[#4F6F52]" />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Follow Us
            </h3>

            <div className="mt-5 flex justify-center gap-4">
              <a
                href="https://www.facebook.com/nelsonhomespk/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#4F6F52]/10 p-3 transition hover:bg-[#1877F2] hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.instagram.com/nelsonhomespk?igsh=M2R0cHhjZXFkazEy"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#4F6F52]/10 p-3 transition hover:bg-[#E4405F] hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/@NelsonHomesReal"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#4F6F52]/10 p-3 transition hover:bg-[#FF0000] hover:text-white"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}