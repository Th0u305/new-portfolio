"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          mirror: true,
          once: false,
          duration: 800,
          easing: "ease-in-out",
        });
      });
    }
  }, []);

  return (
    <section className="py-20 scnd-bg h-[50rem] flex items-center">
      <div className="container mx-auto px-6">
        <div
          className="max-w-3xl mx-auto"
          data-aos="fade-down"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            I take a user-first approach to design, making sure every solution
            is customized to meet the distinct needs of the audience.
          </h2>

          <div className="mt-12 space-y-6 text-lg text-center">
            <p>
              As a developer, I focus on delivering high-quality code and
              polished user experiences. I enjoy turning complex ideas into
              simple, elegant solutions that work seamlessly across devices.
            </p>

            <p>
              My experience with React, Next.js, TypeScript, and CSS frameworks
              enables me to build user-friendly applications while constantly
              learning and improving with every project.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Button className="text-lg btn-bg ">
              <Link href="/about" className="inline-flex items-center">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
