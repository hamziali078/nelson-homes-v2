import Link from "next/link";
import { Phone, Mail, Clock3 } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import Container from "@/components/ui/container";

const company = [
  { name: "About Us", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Why Nelson Homes", href: "/#communities" },
  { name: "Buying Process", href: "/#buying-process" },
  { name: "Contact", href: "/contact" },
];

const projects = [
  { name: "3 Marla Homes", href: "#" },
  { name: "5 Marla Homes", href: "#" },
  { name: "8 Marla Homes", href: "#" },
  { name: "Commercial", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1D2C20] text-white">
      <Container>
        <div className="grid gap-12 py-16 sm:gap-14 md:gap-16 lg:grid-cols-4 lg:gap-10 lg:py-20 xl:gap-16">
          {/* Company */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Nelson Homes
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Building premium communities with trust, transparency and
              exceptional construction quality for modern families.
            </p>

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <a
                href="https://www.facebook.com/nelsonhomespk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] lg:h-11 lg:w-11"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://www.instagram.com/nelsonhomespk?igsh=M2R0cHhjZXFkazEy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4405F] lg:h-11 lg:w-11"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://www.youtube.com/@NelsonHomesReal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF0000] lg:h-11 lg:w-11"
              >
                <FaYoutube size={17} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold lg:text-xl">
              Company
            </h3>

            <ul className="mt-5 space-y-3 lg:mt-6 lg:space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition hover:text-white lg:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold lg:text-xl">
              Projects
            </h3>

            <ul className="mt-5 space-y-3 lg:mt-6 lg:space-y-4">
              {projects.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition hover:text-white lg:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold lg:text-xl">
              Contact
            </h3>

            <div className="mt-5 space-y-5 lg:mt-6">
              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" />
                <a
                  href="tel:03100006647"
                  className="text-sm text-white/70 transition hover:text-white lg:text-base"
                >
                  0310 0006647
                </a>
              </div>

              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" />
                <a
                  href="mailto:zooming.pk@gmail.com"
                  className="break-all text-sm text-white/70 transition hover:text-white lg:text-base"
                >
                  zooming.pk@gmail.com
                </a>
              </div>

              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-[#B08D57]" />
                <p className="text-sm text-white/70 lg:text-base">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-6 text-center text-sm text-white/60 lg:flex-row lg:py-8">
          <p>
            © {new Date().getFullYear()} Nelson Homes. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            <Link
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}