"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Projects", href: "/#projects" },
  { name: "Why Nelson Homes", href: "/#communities" },
  { name: "Buying Process", href: "/#buying-process" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between sm:h-20 lg:h-20 xl:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Nelson Homes"
            width={130}
            height={42}
            className="h-9 w-auto object-contain sm:h-10 lg:h-10 xl:h-10"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[14px] font-medium text-neutral-700 transition-colors duration-300 hover:text-[#4F6F52] xl:text-[15px]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            href="/contact"
            className="h-11 px-6 lg:text-sm xl:h-12 xl:px-8 xl:text-base"
          >
            Book Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-neutral-200 p-2 lg:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t bg-white">
          <Container className="flex flex-col py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-b border-neutral-100 py-4 text-neutral-700"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Button href="/contact" className="mt-6 w-full">
              Book Consultation
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}