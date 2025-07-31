"use client"

import { Home, Briefcase, UserRound, Settings, LogOut } from "lucide-react"
import Image from "next/image"
import logo from "../../../../public/assets/logo_sm.svg"
import { NavLink } from "./nav-link"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { useContext } from "react"
import { AppContext, type AppContextType } from "@/context/appContext"
import { Button } from "./button"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()
  const { state } = useContext(AppContext) as AppContextType;
  const userId = useContext(AppContext)?.state.userData.user?._id;

  const userType = state.userType;
  let profileLink = "";

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
            <UserRound className="h-4 w-4" />
            Perfil
          </NavLink>
        </nav>

        <div className="w-[133px] flex justify-end">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="text" size="icon" Icon={Settings} />
            </PopoverTrigger>
            <PopoverContent side="bottom" align="end" className="w-[200px] p-2">
              <div className="flex flex-col self-stretch justify-between items-start">
                <Button variant="text" onClick={() => router.push(profileLink)} className="w-full justify-start"><UserRound className="w-4 h-4 text-violet-50" /> Meu perfil</Button>
                <Button variant="text" onClick={() => { }} className="text-red-600 w-full justify-start hover:text-red-600"><LogOut className="w-4 h-4 text-red-600" /> Sair da conta</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
