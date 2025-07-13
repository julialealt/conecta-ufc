import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  status?: 'default' | 'error';
  errorMessage?: string;
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
  status = 'default',
  errorMessage,
  className,
}) => {
  const textColor = value ? 'text-zinc-50' : 'text-zinc-500';

  const inputBorderClass = status === 'error'
    ? 'border-red-800 hover:border-red-700'
    : 'border-zinc-800 hover:border-zinc-700';

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label htmlFor={id} className="mb-1.5 block text-xs font-normal text-zinc-400">
        {label}
        {required && <span className="text-red-600 ml-0.5">*</span>}
      </label>

      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={cn(
            "w-full h-[48px] text-sm bg-black border border-zinc-800 rounded-md px-4 py-2.5",
            "outline-none appearance-none cursor-pointer",
            "transition-all duration-300 hover:border-zinc-700 placeholder:text-zinc-500",
            textColor, inputBorderClass)}
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
          <ChevronDown className="text-zinc-500" size={20} />
        </div>
      </div>

      <div className="w-full self-stretch px-2 pt-1 inline-flex justify-center items-center gap-1">
        <div className="w-full self-stretch justify-start text-red-800 text-[10px] font-normal leading-[16px]">{errorMessage}</div>
      </div>
    </div>
  );
};

export default Select;