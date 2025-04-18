"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SendEmail from "@/app/function/SendEmail";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import "aos/dist/aos.css";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          mirror: true,
          once: false,
          duration: 1000,
          easing: "ease-in-out",
        });
      });
    }
  }, []);

  return (
    <section className="py-32" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{`Let's Work Together`}</h2>
          <p className="text-muted-foreground mb-8">
            Have a project in mind? {`I'd`} love to hear about it!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="name"
                {...register("name")}
                placeholder="Your name"
                required
              />

              <Input
                id="email"
                {...register("email")}
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <Textarea
              id="message"
              {...register("message")}
              placeholder="Your message here..."
              required
              className="h-36 resize-none"
            />

            <Button type="submit" className="btn-bg text-lg">
              Send Message
            </Button>
          </form>

          <div className="mt-8">
            <p className="text-muted-foreground mb-4">
              Or check out my detailed contact information
            </p>
            <Button
              variant="outline"
              className=" border-[#1d293b] hover:bg-[#1d293b]"
            >
              <Link href="/contact" className="inline-flex items-center">
                Contact Page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
