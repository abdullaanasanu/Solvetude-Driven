// Imports
import React from "react";

// UI Imports
import { Navbar } from "./navbar";
import { Footer } from "./footer";

// Component
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
