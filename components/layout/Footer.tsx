import Link from "next/link";
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

const company = [
  { name: "About Us", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Buying Process", href: "#buying-process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "/contact" }
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
        <div className="grid gap-16 py-20 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold">Nelson Homes</h2>

            <p className="mt-6 leading-8 text-white/70">
              Building premium communities with trust, transparency and
              exceptional construction quality for modern families.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.facebook.com/nelsonhomespk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2]"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.instagram.com/nelsonhomespk?igsh=M2R0cHhjZXFkazEy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4405F]"
              >
                <FaInstagram  size={18} />
              </a>

              <a
                href="https://www.youtube.com/@NelsonHomesReal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF0000]"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold">Company</h3>

            <ul className="mt-6 space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-semibold">Projects</h3>

            <ul className="mt-6 space-y-4">
              {projects.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold">Contact</h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 text-[#B08D57]" />
                <a
                  href="tel:03100006647"
                  className="text-white/70 transition hover:text-white"
                >
                  0310 0006647
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-[#B08D57]" />
                <a
                  href="mailto:zooming.pk@gmail.com"
                  className="text-white/70 transition hover:text-white"
                >
                  zooming.pk@gmail.com
                </a>
              </div>

              <div className="flex gap-3">
                <Clock3 className="mt-1 h-5 w-5 text-[#B08D57]" />
                <p className="text-white/70">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-center text-sm text-white/60 lg:flex-row">
          <p>
            © {new Date().getFullYear()} Nelson Homes. All rights reserved.
          </p>

          <div className="flex gap-8">
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