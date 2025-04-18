"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { ReactNode, useRef, useState } from "react";
import Loading from "./loading";
import { Toaster } from "@/components/ui/sonner";
import { ReactLenis } from "lenis/react";

interface ContextProviderProps {
  children: ReactNode;
}

const Wrapper: React.FC<ContextProviderProps> = ({ children }) => {
  
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const lenisRef = useRef(null);

  return (
    <>
      {!loading ? (
        <>
          <ReactLenis
            ref={lenisRef}
            root
            options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
          />
          <Toaster richColors position="bottom-right" />
          <Navbar />
          {children}
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Wrapper;
