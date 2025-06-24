import React from "react";
import Image from "next/image";
import SearchIcon from "../../../../public/assets/searchIcon.png";

const SearchBar: React.FC = () => {
  return (
    <div className={"flex items-center relative w-200 h-15 text-white"}>
      <Image
        src={SearchIcon}
        alt=""
        className={"w-[70px] h-[70px] absolute left-0"}
      />
      <input
        name={"input"}
        className={`pl-[70px] w-full h-full bg-input-background border-6 border-solid rounded-lg border-input-border-color outline-none p-1`}
      />
    </div>
  );
};

export default SearchBar;
