import React from "react";
import { cn } from "@/lib/utils";

export type TextAreaInputProps = {
  id?: string;
  name?: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  classesRoot?: string;
  classesInput?: string;
  placeholder: string;
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  id = "description",
  name = "description",
  label,
  required,
  value,
  onChange,
  classesInput,
  classesRoot,
  placeholder,
}) => {
  return (
    <div className={cn("flex w-full flex-col text-white", classesRoot)}>
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-xs font-medium text-zinc-400"
        >
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "min-h-24 w-full",
          "rounded-lg border border-zinc-800 bg-black p-4 py-3.5",
          "text-sm text-zinc-50 placeholder-zinc-500 outline-none",
          "transition-all duration-300",
          "hover:border-zinc-700",
          classesInput
        )}
      />
    </div>
  );
};

export default TextAreaInput;
