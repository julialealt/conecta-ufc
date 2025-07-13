import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";

type InputProps = {
  label?: string;
  required?: boolean;
  isPassword?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  status?: "default" | "error";
  errorMessage?: string;
  placeholder: string;
  classesRoot?: string;
  classesInput?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  required,
  isPassword = false,
  value,
  onChange,
  name = "input",
  id = "input",
  placeholder,
  status = "default",
  errorMessage,
  classesInput = "",
  classesRoot = "",
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const inputBorderClass = status === 'error'
    ? 'border-red-800 hover:border-red-700'
    : 'border-zinc-800 hover:border-zinc-700';

  return (
    <div className={`flex flex-col w-full text-zinc-400 ${classesRoot}`}>
      {label && <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-normal text-zinc-400"
      >
        {label}
        {required && <span className="text-red-600 ml-0.5">*</span>}
      </label>}
      <div className="relative">
        <input
          id={id}
          name={name}
          type={isPassword ? (showPassword ? "text" : "password") : "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            "h-[48px] w-full rounded-md border bg-black px-4 py-2 text-sm text-zinc-50 placeholder-zinc-500 outline-none transition-all duration-300 leading-[140%]",
            inputBorderClass,
            classesInput
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-sm cursor-pointer transition-all duration-300"
          >
            {showPassword ? <EyeClosed size={16} className="text-zinc-500" /> : <Eye size={16} className="text-zinc-500" />}
          </button>
        )}
      </div>

      <div className="w-full self-stretch px-2 pt-1 inline-flex justify-center items-center gap-1">
        <div className="w-full self-stretch justify-start text-red-800 text-[10px] font-normal leading-[16px]">{errorMessage}</div>
      </div>
    </div>
  );
};

export default Input;
