// Imports
import React from "react";
import Link from "next/link";

// UI Imports
import { Wrapper } from "@/components/common/wrapper";
import style from "./style.module.scss";
import { Button } from "@/components/common/button";
import { Dropdown } from "./dropdown";
import { Settings } from "./settings";

// Component
export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Wrapper className={style.content}>
        <Link className={style.brand} href={"/"}>
          <img src="/logo.svg" alt="Driven" />
          Driven
        </Link>
        <div className={style.right}>
          <div className={style.links}>
            <Dropdown title="Your Property" link={"/"} />
            <Link href={"/"}>For Developers</Link>
            <Link href={"/"}>Invest</Link>
            <Link href={"/"}>Services</Link>
            <Link href={"/"}>Content Hub</Link>
            <Link href={"/"}>About Us</Link>
          </div>
          <Settings />
          <Button title="Instant Valuation" />
        </div>
      </Wrapper>
    </nav>
  );
};
