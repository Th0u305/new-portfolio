"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/proj";
import ProjectCard from "./projectCard";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function FeaturedProjects() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          mirror: true,
          once: false,
          duration: 900,
          delay : 200,
          easing: "ease-in-out",
        });
      });
    }
  }, []);

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12" data-aos="fade">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-2">Some of my recent work</p>
          </div>
          <Button asChild variant="ghost" className="mt-4 md:mt-0">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6" data-aos="fade">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
