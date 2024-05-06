// Interfaces and types from component SearchInput
import { InputHTMLAttributes } from "react";

// Component Props
export interface SearchInputProps extends IInput {
  inputClassName?: string;
  iconClassName?: string;
  withButton?: boolean;
}

export type IInput = InputHTMLAttributes<HTMLInputElement>;
