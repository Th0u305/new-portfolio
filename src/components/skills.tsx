"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layers, Database, Paintbrush, Rocket, Wrench } from "lucide-react"
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Skills() {

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
    
  const skills = [
    {
      icon: <Code2 className="h-8 w-8 text-cyan-500" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, Next.js, and TypeScript.",
      technologies: ["HTML", "CSS", "Tailwind CSS" , "JavaScript", "TypeScript", "React", "Next.js", "Redux"],
      data : "fade-down"
    },
    {
      icon: <Layers className="h-8 w-8 text-cyan-500" />,
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Prisma"],
      data : "fade-up"
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-cyan-500" />,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user experiences.",
      technologies: ["Figma", "Tailwind CSS", "CSS-in-JS", "Responsive Design"],
      data : "fade-down"
    },
    {
      icon: <Database className="h-8 w-8 text-cyan-500" />,
      title: "Database Management",
      description: "Working with various database systems to store and manage data efficiently.",
      technologies: ["MongoDB", "Firebase"],
      data : "fade-up"
    },
    {
      icon: <Rocket className="h-8 w-8 text-cyan-500" />,
      title: "Deployment & DevOps",
      description: "Deploying and maintaining applications in production environments.",
      technologies: ["Vercel", "Netlify", "Git"],
      data : "fade-down"
    },
    {
      icon: <Wrench className="h-8 w-8 text-cyan-500" />,
      title: "Tools & Utilities",
      description: "Leveraging various tools and utilities to improve development workflow.",
      technologies: ["Git", "Webpack", "Vite"],
      data : "fade-up"
    },
  ]

  return (
    <section className="py-32 scnd-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-[#020717]" data-aos={skill.data}>
              <CardContent className="pt-6">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full chip-color">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
