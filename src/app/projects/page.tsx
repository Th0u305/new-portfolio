"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Projects from "@/types/project";
import ProjectCard from "@/components/projectCard";
import Pagination from "@/components/ui/pagination";

type ProjectCategory = "all" | "css" | "react" | "nextjs" | "redux";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true)
  
  useEffect(()=>{
    const page = async () => {
      await fetch(`/api/getProjects/${currentPage}/${activeCategory}`)?.then((res)=> res.json())?.then((data)=> {
        setLoading(true)       
        setProjects(data)  
        if (data?.length === 0) {
          setLoading(false)
        }
      })
    };
    page()
  },[currentPage, activeCategory])

  const activeCat = (id : ProjectCategory) =>{
    setActiveCategory(id)
    setCurrentPage(1)
  }
  
  const filteredProjects = activeCategory === "all" ? projects : projects?.filter((item) => item?.type === activeCategory);

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "css", label: "CSS" },
    { value: "react", label: "React" },
    { value: "nextjs", label: "NextJS" },
    { value: "redux", label: "Redux" },
  ];

  return (
    <div className="container mx-auto px-6 mt-48 mb-28">
      <div className="space-y-8 mb-16">
        <div className="text-center">
          <h1 className="h-14 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through my portfolio of projects across different
            technologies and frameworks
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 border-[#1d293b]">
          {categories?.map((category) => (
            <button
              key={category.value}
              onClick={() => activeCat(category.value)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects?.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            (loading ? (
              <div className="mt-24 mb-24 col-span-full">
              <div className="mx-auto w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
            </div>
            ): (
              <div className="col-span-full"><h1 className="text-xl w-fit mx-auto mt-24 mb-24">No more projects available</h1></div>
            ))
          )}
        </motion.div>
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
