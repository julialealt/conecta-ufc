import React from "react";

type InputProps = {
  id?: string;
  name?: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  classesRoot?: string;
  classesInput?: string;
  numberOfCol?: number;
  numberOfRows?: number;
  placeholder: string;
};

const DescriptionInput: React.FC<InputProps> = ({
  id = "description",
  name = "description",
  label,
  required,
  value,
  onChange,
  classesInput,
  classesRoot,
  numberOfCol,
  numberOfRows,
  placeholder,
}) => {
  return (
    <div className={`flex flex-col w-full text-white ${classesRoot}`}>
      {label && (
        <label
          htmlFor={"description"}
          className="block text-xs font-medium text-zinc-400 mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        cols={numberOfCol ? numberOfCol : 50}
        rows={numberOfRows ? numberOfRows : 5}
        placeholder={placeholder}
        className={`bg-black text-zinc-50 text-sm placeholder-zinc-500 border border-zinc-800 rounded-lg outline-none px-4 py-3.5 hover:border-zinc-500 transition-all ${classesInput}`}
      ></textarea>
    </div>
  );
};

export default DescriptionInput;
