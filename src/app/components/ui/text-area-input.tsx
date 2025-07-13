import React from 'react';
import { cn } from '@/lib/utils';

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
  status?: 'default' | 'error';
  errorMessage?: string;
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  id = 'description',
  name = 'description',
  label,
  required,
  value,
  onChange,
  classesInput,
  classesRoot,
  placeholder,
  status = 'default',
  errorMessage,
}) => {
  const inputBorderClass = status === 'error'
    ? 'border-red-800 hover:border-red-700'
    : 'border-zinc-800 hover:border-zinc-700'

  return (
    <div className={cn('flex w-full flex-col text-white', classesRoot)}>
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-xs font-normal text-zinc-400"
        >
          {label}
          {required && <span className="ml-0.5 text-red-600">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          'min-h-24 w-full',
          'rounded-md border bg-black p-4 py-3.5',
          'text-sm text-zinc-50 placeholder-zinc-500 outline-none',
          'transition-all duration-300 leading-[140%]',
          classesInput,
          inputBorderClass,
        )}
      />

      <div className="w-full self-stretch px-2 pt-1 inline-flex justify-center items-center gap-1">
        <div className="w-full self-stretch justify-start text-red-800 text-[10px] font-normal leading-[16px]">{errorMessage}</div>
      </div>
    </div>
  );
};

export default TextAreaInput;