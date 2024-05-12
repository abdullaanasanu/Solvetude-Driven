// Imports
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";

// UI Imports
import style from "./style.module.scss";

// Component
export const Dropdown = ({ title, link }: any) => {
  // state
  const [isOpen, setIsOpen] = useState(false);

  // ref
  const titleRef = useRef(null);
  const menuRef = useRef(null);

  // close dropdown on click outside
  useEffect(() => {
    const handleClick = (event: any) => {
      if (
        titleRef.current &&
        !(titleRef.current as HTMLElement).contains(event.target) &&
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className={style.dropdown}>
      <div
        className={style.title}
        onClick={() => setIsOpen(!isOpen)}
        ref={titleRef}
      >
        {title}
        <img src="/icons/arrow-down-black.svg" alt="Dropdown" />
      </div>
      <div
        className={classNames(style.menu, { [style.open]: isOpen })}
        ref={menuRef}
        onClick={() => setIsOpen(false)}
      >
        <Link href={"/"}>Buy</Link>
        <Link href={"/"}>Sell</Link>
        <Link href={"/"}>Rent</Link>
      </div>
    </div>
  );
};
