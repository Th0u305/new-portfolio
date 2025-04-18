import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 mt-48 mb-48">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            About Me
          </h1>

          <p className="text-xl mb-6">
            {`I'm`} a passionate developer focused on creating user-centered
            experiences that combine elegant design with robust functionality.
          </p>

          <div className="space-y-4 text-lg">
            <p>
              With expertise in modern web technologies, I build applications
              that are not only visually appealing but also performant and
              accessible.
            </p>
            <p>
              My experience spans front-end and back-end development, with a
              particular focus on React, Next.js, and TypeScript. {`I'm`}{" "}
              constantly learning and improving my skills to deliver the best
              possible solutions.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              className="border border-gray-700 hover:bg-[#1d293b]"
            >
              <Link
                href="https://github.com/Th0u305"
                target="_blank"
                aria-label="GitHub"
              >
                <Github />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="border border-gray-700 hover:bg-[#1d293b]"
            >
              <Link
                href="https://www.linkedin.com/in/ahnaf-uzzaman-2282a920b"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </Link>
            </Button>
            <Button className="border border-gray-700 hover:bg-[#1d293b]">
              <Link href="#"  className="inline-flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Resume
              </Link>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-background w-full h-full">
              <Image
                src="https://res.cloudinary.com/dmegxaayi/image/upload/v1744932343/zorn09oxsyjz5snv0pmd.jpg"
                alt="Developer portrait"
                fill
                className="pointer-events-none object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
