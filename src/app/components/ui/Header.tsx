import { Home, Briefcase, User, Bell } from "lucide-react"
import { NavLink } from "./NavLink"
import { Button } from "./Button"
import Image from "next/image"
import logo from "../../../../public/assets/logo_sm.svg"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex h-16 items-center border-b border-white/10 bg-[#111112] px-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-8">
          <Image src={logo} alt="ConectaUFC" />
          <nav className="flex items-center gap-x-4">
            <NavLink href="/">
              <Home className="h-4 w-4" />
              Home
            </NavLink>
            <NavLink href="/vagas">
              <Briefcase className="h-4 w-4" />
              Vagas
            </NavLink>
            <NavLink href="/perfil">
              <User className="h-4 w-4" />
              Perfil
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-x-4">
          <Button Icon={Bell} size="small" variant="text" aria-label="Notificações" />
        </div>
      </div>
    </header>
  )
}