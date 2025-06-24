"use client";
import { Bell, Pencil, Plus, Sparkles } from "lucide-react";
import DescriptionInput from "./components/descriptionInput/DescriptionInput";
import Input from "./components/input/input";
import { Button } from "./components/ui/Button";
import logoSmall from "../../public/assets/logo_sm.svg";
import logoLarge from "../../public/assets/logo_lg.svg"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-8 p-8">
      <p className="text-violet-50">Componentes</p>

      <div className="flex gap-4">
        <Image src={logoSmall} alt="" />
        <Image src={logoLarge} alt="" />
      </div>

      <div className="flex gap-4">
        <Button>Button</Button>
        <Button Icon={Sparkles}>With icon</Button>
        <Button variant="disabled" Icon={Sparkles}>
          Disabled with icon
        </Button>
        <Button variant="outline_white">Outline button white</Button>
        <Button variant="outline_violet">Outline button violet</Button>
        <Button variant="outline_violet" Icon={Plus}>
          Outline button violet with icon
        </Button>
        <Button variant="outline_violet" size="icon" aria-label="Editar perfil" Icon={Pencil} />
        <Button variant="text" size="small" Icon={Bell} />
      </div>

      <Input placeholder="Digite algo" />
      <DescriptionInput placeholder="TESTE" />

    </div>
  );
}
