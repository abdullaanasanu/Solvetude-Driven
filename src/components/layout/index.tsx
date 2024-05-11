// Imports
import React from "react";

// UI Imports
import { Navbar } from "./navbar";

import style from "./style.module.scss";
import { Footer } from "./footer";

// Component
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className={style.container}>{children}</main>
      <Footer />
    </>
  );
};
