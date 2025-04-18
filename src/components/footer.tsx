import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-[#1d293b]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                  <Code className="h-5 w-5 text-cyan-500" />
                </div>
              </div>
              <span className="font-bold text-xl">DevPortfolio</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building user-centered websites that shine. Focused on creating
              elegant, performant, and accessible web experiences.
            </p>
            <div className="flex gap-3">
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
                  <Github className="h-5 w-5" />
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
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="border border-gray-700 hover:bg-[#1d293b]"
              >
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="border border-gray-700 hover:bg-[#1d293b]"
              >
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 col-span-2">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">hello@example.com</li>
                <li className="text-muted-foreground">+1 (555) 123-4567</li>
                <li className="text-muted-foreground">San Francisco, CA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1d293b] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DevPortfolio. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
