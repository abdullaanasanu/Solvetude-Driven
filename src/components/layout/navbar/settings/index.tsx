// Imports
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

// UI Imports
import style from "./style.module.scss";
import { Currency } from "./currency";

const languages = ["English", "Arabic"];
const types = ["Sq. ft.", "Sq. m."];

// Component
export const Settings = () => {
  // state
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  const [type, setType] = useState(types[0]);

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
    <div className={style.settings}>
      <div
        className={classNames(style.title, { [style.open]: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
        ref={titleRef}
      >
        <img src="/icons/setting.svg" alt="Settings" />
      </div>
      <div
        className={classNames(style.menu, { [style.open]: isOpen })}
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
      >
        {languages.map((lang) => (
          <div
            key={lang}
            className={style.menuItem}
            onClick={() => setLanguage(lang)}
          >
            {lang}
            {language === lang ? (
              <img src="/icons/checked.svg" alt="Check" />
            ) : (
              <div
                className={style.check}
                onClick={(e) => {
                  setLanguage(lang);
                }}
              />
            )}
          </div>
        ))}

        <div className={style.divider} />

        <Currency />

        {/* feet or meter */}
        <div className={style.type}>
          {types.map((t) => (
            <div
              key={t}
              className={classNames(style.item, { [style.active]: type === t })}
              onClick={() => setType(t)}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
