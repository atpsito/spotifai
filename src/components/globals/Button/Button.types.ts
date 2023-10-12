// Interfaces and types from component Button
import { ButtonHTMLAttributes } from "react";

// Component Props
export interface ButtonProps extends Omit<IButton, "type"> {
  htmlType?: IButton["type"];
  type?: ButtonType;
}

export type IButton = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonType = "PRIMARY" | "SECONDARY" | "DANGER";
