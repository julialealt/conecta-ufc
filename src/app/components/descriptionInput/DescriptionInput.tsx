import React from "react";

type InputProps = {
  classesRoot?: string;
  classesInput?: string;
  numberOfCol?: number;
  numberOfRows?: number;
  placeholder: string;
};

const DescriptionInput: React.FC<InputProps> = ({
  classesInput,
  classesRoot,
  numberOfCol,
  numberOfRows,
  placeholder,
}) => {
  return (
    <div className={`flex flex-col text-white ${classesRoot}`}>
      <textarea
        name={"input"}
        cols={numberOfCol ? numberOfCol : 50}
        rows={numberOfRows ? numberOfRows : 10}
        placeholder={placeholder}
        className={`bg-black text-zinc-400 placeholder-zinc-400 border border-zinc-800 rounded-lg outline-none p-5 ${classesInput}`}
      ></textarea>
    </div>
  );
};

export default DescriptionInput;
