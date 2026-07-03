import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

const projects = [
  {
    title: "3 Marla Homes",
    location: "Al Kabir Town",
    price: "From PKR 1.40 Crore",
    image: "/images/project-1.webp",
  },
  {
    title: "5 Marla Homes",
    location: "Bahria Orchard",
    price: "From PKR 2.10 Crore",
    image: "/images/project-2.jpeg",
  },
  {
    title: "8 Marla Homes",
    location: "Bahria Orchard",
    price: "From PKR 3.20 Crore",
    image: "/images/project-3.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-white py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:items-end lg:text-left">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F6F52]">
              Featured Projects
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-[42px] xl:text-5xl">
              Discover Your
              <br />
              Future Home
            </h2>
          </div>

          <Button variant="outline" className="h-12 px-6 lg:h-13 xl:h-14">
            View All Projects
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7 xl:mt-20 xl:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl xl:rounded-[32px]"
            >
              <div className="relative h-64 overflow-hidden sm:h-72 lg:h-64 xl:h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 sm:p-7 lg:p-6 xl:p-8">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <MapPin size={16} />
                  {project.location}
                </div>

                <h3 className="mt-4 text-xl font-bold text-neutral-900 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-lg font-semibold text-[#4F6F52]">
                  {project.price}
                </p>

                <button className="mt-7 flex items-center gap-2 font-semibold text-[#4F6F52] transition-all group-hover:gap-3">
                  Explore Project
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}