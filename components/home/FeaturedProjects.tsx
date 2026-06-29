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
    <section id="projects" className="py-28 bg-white">
      <Container>

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F6F52]">
              Featured Projects
            </span>

            <h2 className="mt-4 text-4xl font-bold text-neutral-900 lg:text-5xl">
              Discover Your
              <br />
              Future Home
            </h2>
          </div>

          <Button variant="outline">
            View All Projects
          </Button>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-85 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <MapPin size={16} />
                  {project.location}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-neutral-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-lg font-semibold text-[#4F6F52]">
                  {project.price}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-[#4F6F52] transition group-hover:gap-3">
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