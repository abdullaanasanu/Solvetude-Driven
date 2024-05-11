// Imports
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

// UI Imports
import style from "./style.module.scss";

// Component
export const Select = ({ placeholder, options = [] }: any) => {
  // state
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  // ref to close dropdown
  const optionRef = useRef(null);
  const boxRef = useRef(null);

  // effect
  useEffect(() => {
    const handleClick = (event: any) => {
      if (
        optionRef.current &&
        !(optionRef.current as HTMLElement).contains(event.target) &&
        boxRef.current &&
        !(boxRef.current as HTMLElement).contains(event.target)
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
    <div className={style.select}>
      <div
        className={style.box}
        onClick={() => setIsOpen(!isOpen)}
        ref={boxRef}
      >
        {selected ? (
          <div className={style.selected}>{selected}</div>
        ) : (
          <div className={style.placeholder}>{placeholder}</div>
        )}
        <img
          src="/icons/arrow-down.svg"
          alt="Arrow Down"
          className={style.icon}
        />
      </div>

      <div
        className={classNames(style.options, { [style.open]: isOpen })}
        ref={optionRef}
      >
        {options.map((option: any, index: number) => (
          <div
            key={index}
            className={style.option}
            onClick={() => {
              setSelected(option);
              setIsOpen(false);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
