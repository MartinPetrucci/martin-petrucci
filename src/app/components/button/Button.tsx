"use client";

import { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  //   console.log(type);
  return (
    <button className={cn(styles.button, styles[variant])} {...props}>
      custom button
    </button>
  );
}
