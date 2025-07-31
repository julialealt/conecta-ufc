"use client";

import { Home, Briefcase, UserRound } from "lucide-react";
import Image from "next/image";
import logo from "../../../../public/assets/logo_sm.svg";
import { NavLink } from "./nav-link";
import { useContext } from "react";
import { AppContext, AppContextType } from "@/context/appContext";

export function Header() {
  const { state } = useContext(AppContext) as AppContextType;
  const userId = useContext(AppContext)?.state.userData.user?._id;

  console.log("STATE", state);
  const userType = state.userType;
  let profileLink = "";
  console.log(userType);
  if (userType === "student") {
    profileLink = `/student/${userId}`;
  } else {
    profileLink = `/company/${userId}`;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex h-16 items-center border-b border-white/10 bg-[#111112] px-6">
      <div className="flex w-full items-center justify-between">
        <Image src={logo} alt="ConectaUFC" />

        <nav className="flex items-center gap-x-4">
          <NavLink href="/">
            <Home className="h-4 w-4" />
            Home
          </NavLink>
          <NavLink href="/opportunities">
            <Briefcase className="h-4 w-4" />
            Vagas
          </NavLink>
          <NavLink href={profileLink}>
            {" "}
            {/* depende do user ativo /company/${id} ou /student/${id} */}
            <UserRound className="h-4 w-4" />
            Perfil
          </NavLink>
        </nav>

        <div className="w-[133px]" />
      </div>
    </header>
  );
}
