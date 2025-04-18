"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import SendEmail from "../function/SendEmail";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const name = data.name;
    const email = data.email;
    const message = data.message;

    SendEmail({ name, email, message, reset });
  };

  return (
    <div className="container mx-auto px-4 mt-48 mb-48">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?{" "}
          {`I'd`} love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-cyan-500/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-cyan-500/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-cyan-500/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
            <p className="text-muted-foreground mb-4">
              Stay updated with my latest projects and articles
            </p>
            <div className="flex gap-4">
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
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <Input
                id="email"
                {...register("email")}
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Your message here..."
                required
                className="h-[16.3rem] resize-none"
              />
            </div>

            <Button type="submit" className="w-full btn-bg text-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
