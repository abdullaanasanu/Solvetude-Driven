// Imports
import React from "react";

// UI Imports
import { Wrapper } from "@/components/common/wrapper";
import style from "./style.module.scss";
import { Button } from "@/components/common/button";

// Component
export const Newsletter = () => {
  return (
    <header className={style.newsletter}>
      <Wrapper className={style.content}>
        <h2 className={style.title}>
          Get the Real Estate Insights Newsletter in Your Inbox Monthly
        </h2>

        <form className={style.form}>
          <input
            type="email"
            placeholder="Email Address"
            className={style.input}
          />
          <Button title="Sign Up" />
        </form>
      </Wrapper>
    </header>
  );
};
