"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Projects from "@/types/project";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  project: Projects;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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
    <Card className="overflow-hidden group h-full flex flex-col py-0 gap-0">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-8">
          {project?.technology.map((technology) => (
            <Badge
              key={technology}
              variant="secondary"
              className="bg-slate-800 rounded-lg font-semibold text-gray-300"
            >
              {technology}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bd mb-2 mt-4">{project?.title}</h3>
        <p className="text-gray-400 font-semibold">{project?.description}</p>
      </CardContent>

      <CardContent>
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 mt-6 w-full flex items-center justify-center font-bold border border-[#1d293b] hover:bg-slate-800"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 space-y-4"
            >
              <div>
                <h4 className="font-semibold text-sm text-cyan-500 mb-2">
                  Challenges Faced
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-400 font-semibold">
                  {project?.challenges?.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-cyan-500 mb-2">
                  Future Improvements
                </h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-400 font-semibold">
                  {project?.improvements?.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
