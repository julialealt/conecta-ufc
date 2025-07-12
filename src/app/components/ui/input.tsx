import React, { useState } from "react";

import EyeIcon from "../../icons/eye/Eye";
import EyeOffIcon from "@/app/icons/eyeOff/EyeOff";

type InputProps = {
  label: string;
  required?: boolean;
  isPassword?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
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
  classesInput = "",
  classesRoot = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col w-full text-zinc-400 ${classesRoot}`}>
      <label
        htmlFor={id}
        className="block text-xs font-medium text-zinc-400 mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={isPassword ? (showPassword ? "text" : "password") : "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-black text-sm text-zinc-50 placeholder-zinc-400 border border-zinc-600 rounded-md px-4 py-2 outline-none hover:border-zinc-500 transition-colors ${classesInput}`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-sm"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
