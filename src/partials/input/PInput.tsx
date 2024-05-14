"use client";

import { cn } from "@/utils/cn";
import { FunctionComponent, InputHTMLAttributes } from "react";

interface IPInput extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: any;
}

const PInput: FunctionComponent<IPInput> = ({
  inputRef,
  className,
  ...attr
}) => {
  return (
    <input
      type="text"
      ref={inputRef}
      className={cn(
        ` focus-visible::none px-2 py-1 bg-primary-100 dark:bg-dark-400 active: dark:placeholder-white focus:outline-primary-600 outline-primary-600 dark:outline-dark-600 focus:ring-0 focus:border-none dark:focus:outline-dark-600 ring-primary-600 dark:ring-dark-600 rounded-lg overflow-hidden `,
        className
      )}
      {...attr}
    />
  );
};

export default PInput;
