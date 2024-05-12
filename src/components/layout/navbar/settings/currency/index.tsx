// Imports
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";

// UI Imports
import style from "./style.module.scss";

const currencies = ["AED", "USD", "EUP"];

// Component
export const Currency = () => {
  // state
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState(currencies[0]);

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
    <div className={style.currencies}>
      <div
        className={classNames(style.title, { [style.open]: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
        ref={titleRef}
      >
        {currency}
        <img src="/icons/arrow-right-black.svg" alt="Dropdown" />
      </div>
      <div
        className={classNames(style.menu, { [style.open]: isOpen })}
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
      >
        {currencies.map((cur: any) => (
          <div
            key={cur}
            className={style.menuItem}
            onClick={() => setCurrency(cur)}
          >
            {cur}
            {currency === cur ? (
              <img src="/icons/checked.svg" alt="Check" />
            ) : (
              <div
                className={style.check}
                onClick={(e) => {
                  setCurrency(cur);
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
