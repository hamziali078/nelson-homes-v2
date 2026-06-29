"use client";

import React, { useState } from "react";
import {
  Phone,
  Home,
  Hammer,
  KeyRound,
  CheckCircle2,
  House,
} from "lucide-react";

import Container from "@/components/ui/container";

const steps = [
  {
    id: 1,
    icon: Phone,
    title: "Consultation",
    description: "Meet with our property consultants to discuss your budget, preferred location, payment plan and available projects.",
  },
  {
    id: 2,
    icon: Home,
    title: "Booking",
    description: "Choose your ideal home and reserve it through a transparent booking process with complete documentation.",
  },
  {
    id: 3,
    icon: Hammer,
    title: "Construction",
    description: "Watch your home come to life with monthly progress photos, site visits and full visibility into every phase of construction.",
  },
  {
    id: 4,
    icon: KeyRound,
    title: "Ownership",
    description: "Receive legal ownership documentation as your investment progresses with complete transparency and security.",
  },
  {
    id: 5,
    icon: CheckCircle2,
    title: "Possession",
    description: "Take possession of your home before the final payment and enjoy peace of mind with our lifetime structural warranty.",
  },
  {
    id: 6,
    icon: House,
    title: "Move In",
    description: "Move into your dream home and begin creating memories with your family in a premium Nelson Homes community.",
  },
];

export default function BuyingProcess() {
  // Using array index mapping to bypass internal identification issues
  const [activeIndex, setActiveIndex] = useState(0);

  const currentStep = steps[activeIndex] || steps[0];
  const CurrentIcon = currentStep.icon;

  return (
    <section id="buying-process" className="bg-white py-16 lg:py-24">
      <Container>
        {/* Top Header Section */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C2A378]">
            HOW IT WORKS
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-[64px] lg:leading-[72px]">
            Your journey to ownership,
            <br />
            step by step.
          </h2>
        </div>

        {/* Navigation Step Row */}
        <div className="relative mt-16 lg:mt-20">
          <div className="absolute top-7 left-[8%] right-[8%] hidden h-[1px] bg-neutral-100 lg:block -z-10" />

          <div className="grid grid-cols-2 gap-y-10 gap-x-4 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-x-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={`step-tab-${step.id}`}
                  type="button"
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                  className="group flex flex-1 flex-col items-center text-center focus:outline-none cursor-pointer"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  {/* Step Tab Icon Frame */}
                  <div
                    className={`flex h-[58px] w-[58px] items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-[#405643] bg-[#405643]"
                        : "border-neutral-200 bg-white hover:border-[#405643]"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-neutral-400 group-hover:text-[#405643]"
                      }`}
                    />
                  </div>

                  {/* Step Meta Number */}
                  <span
                    className={`mt-4 text-xs font-bold tracking-wider transition-colors duration-300 ${
                      isActive ? "text-[#C2A378]" : "text-neutral-300"
                    }`}
                  >
                    {String(step.id).padStart(2, "0")}
                  </span>

                  {/* Step Interactive Header label */}
                  <span
                    className={`mt-1 text-sm font-semibold transition-colors duration-300 ${
                      isActive ? "text-neutral-900 font-bold" : "text-neutral-400 group-hover:text-neutral-700"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Display Panel Details */}
        <div className="mt-16 rounded-[28px] border border-neutral-150 bg-[#FAFAFA] p-6 sm:p-12 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            
            {/* Display Indicator Box Icon */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#EBF1EC]">
              <CurrentIcon className="h-9 w-9 text-[#405643]" />
            </div>

            {/* Render Context Details */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C2A378]">
                STEP {currentStep.id} OF {steps.length}
              </p>

              <h3 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-[32px]">
                {currentStep.title}
              </h3>

              <p className="mt-4 max-w-3xl text-[17px] leading-[28px] text-neutral-500">
                {currentStep.description}
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}