"use client"
import React, { forwardRef } from "react";

import { ButtonProps as Props } from "./Button.types";
import { twMerge } from "tailwind-merge";

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { className, htmlType = "button", type = "PRIMARY", ...rest } = props;
  const baseClass = `
    Button px-4 py-2 rounded-lg text-white font-medium leading-5
    hover:ring-2 transition-all
    disabled:ring-0 disabled:bg-gray-500
    focus:ring-2
  `;

  const getTypeClass = () => {
    const primaryClass = "bg-primary ring-primary/50 focus:ring-neutral-400";
    const secondaryClass =
      "bg-transparent border border-secondary focus:ring-primary/50";
    const dangerClass = "bg-danger focus:ring-white";

    switch (type) {
      case "PRIMARY":
        return primaryClass;
      case "SECONDARY":
        return secondaryClass;
      case "DANGER":
        return dangerClass;
      default:
        throw new Error(`Type ${type} is not handled`);
    }
  };
  return (
    <button
      ref={ref}
      {...rest}
      className={twMerge(baseClass, getTypeClass(), className)}
      type={htmlType}
    />
  );
});

export default Button;
