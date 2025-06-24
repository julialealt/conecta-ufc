import React from 'react';
import { ChevronDown } from 'lucide-react';

export type SelectOption = {
  value: string | number;
  label: string;
};

export type SelectProps = {
  id: string;
  name: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder: string;
  required?: boolean;
  className?: string;
};

const Select: React.FC<SelectProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  className,
}) => {
  const textColor = value ? 'text-zinc-300' : 'text-zinc-500';

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-zinc-400 mb-1">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>

      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`
            w-full text-sm bg-black border border-zinc-600 rounded-lg px-4 py-2.5
            outline-none appearance-none cursor-pointer
            transition-colors hover:border-zinc-500 placeholder:text-zinc-400
            ${textColor} 
          `}
        >
          <option value="" className="text-zinc-400 bg-black">
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-zinc-50 bg-black">
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <ChevronDown className="h-5 w-5 text-zinc-400" />
        </div>
      </div>
    </div>
  );
};

export default Select;