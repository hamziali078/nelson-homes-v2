"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";;

export default function FloatingContact() {
  const whatsappNumber = "923100006647";

  const whatsappMessage = encodeURIComponent(
    `Hi Nelson Homes,

I am interested in buying a home.

Name:
Phone:
Project:

Please contact me.`
  );

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>

      {/* Call */}
      <a
        href="tel:03100006647"
        aria-label="Call Nelson Homes"
        className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#4F6F52] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
}