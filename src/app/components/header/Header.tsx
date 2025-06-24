import React from "react";
import Image from "next/image";
import SiteLogo from "../../../../public/assets/siteLogo.png";
import NotificationIcon from "../../../../public/assets/notificationIcon.png";
import SearchBar from "../searchBar/SearchBar";

const Header: React.FC = () => {
  return (
    <div className={"flex w-full justify-center items-end"}>
      <Image src={SiteLogo} alt="" className={"w-[200px] h-[50px] mr-10"} />
      <div className={"w-fit"}>
        <div className={"w-full flex justify-around text-white mb-3"}>
          <button>Home</button>
          <button>Explorar</button>
          <button>Perfil</button>
        </div>
        <SearchBar />
      </div>
      <Image
        src={NotificationIcon}
        alt=""
        className={"w-[50px] h-[50px] ml-10"}
      />
    </div>
  );
};

export default Header;
