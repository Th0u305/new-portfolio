import About from "@/components/about";
import Contact from "@/components/contact";
import FeaturedProjects from "@/components/featuredProjects";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </>
  );
};

export default page;
