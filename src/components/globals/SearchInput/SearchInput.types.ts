// Interfaces and types from component SearchInput
import { InputHTMLAttributes } from "react";

// Component Props
export interface SearchInputProps extends IInput {
  inputClassName?: string;
}

export type IInput = InputHTMLAttributes<HTMLInputElement>;
