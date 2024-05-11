// Imports
import React from "react";
import classNames from "classnames";

// UI Imports
import style from "./style.module.scss";

// Component
export const Wrapper = ({ children, className, ...props }: any) => {
  return (
    <div className={classNames(style.wrapper, className)} {...props}>
      {children}
    </div>
  );
};
