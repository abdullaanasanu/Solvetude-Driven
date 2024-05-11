// Imports
import React from "react";
import classNames from "classnames";

// UI Imports
import style from "./style.module.scss";

// Component
export const Button = ({ title, className, ...props }: any) => {
  return (
    <button className={classNames(style.button, className)} {...props}>
      {title}
    </button>
  );
};
