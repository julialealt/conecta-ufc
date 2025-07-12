import React from "react";

type InputProps = {
  label: string;
  required?: boolean;
  classesRoot?: string;
  classesInput?: string;
  numberOfCol?: number;
  numberOfRows?: number;
  placeholder: string;
};

const DescriptionInput: React.FC<InputProps> = ({
  label,
  required,
  classesInput,
  classesRoot,
  numberOfCol,
  numberOfRows,
  placeholder,
}) => {
  return (
    <div className={`flex flex-col w-full text-white ${classesRoot}`}>
      <label
        htmlFor={"description"}
        className="block text-xs font-medium text-zinc-400 mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <textarea
        name={"description"}
        cols={numberOfCol ? numberOfCol : 50}
        rows={numberOfRows ? numberOfRows : 10}
        placeholder={placeholder}
        className={`bg-black text-zinc-50 text-sm placeholder-zinc-400 border border-zinc-600 rounded-lg outline-none px-4 py-3.5 hover:border-zinc-500 transition-colors ${classesInput}`}
      ></textarea>
    </div>
  );
};

export default DescriptionInput;
