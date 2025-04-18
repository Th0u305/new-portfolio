"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Projects from "@/types/project";
import { useEffect } from "react";
import "aos/dist/aos.css";

interface ProjectCardProps {
  project: Projects;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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
    <Card
      className="overflow-hidden group h-full flex flex-col py-0"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardContent className="pt-6 flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technology.map((technology) => (
            <Badge
              key={technology}
              variant="secondary"
              className="chip-color rounded-lg"
            >
              {technology}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>

      <CardFooter className="border-t p-4 flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="border border-[#1d293b] hover:bg-[#1d293b]"
        >
          <Link
            href={project.link}
            target="_blank"
            className="inline-flex items-center"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </Link>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="border border-[#1d293b] hover:bg-[#1d293b]"
        >
          <Link
            href={project.git}
            target="_blank"
            className="inline-flex items-center"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
