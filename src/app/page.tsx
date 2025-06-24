"use client";
import { Pencil, Plus, Sparkles } from "lucide-react";
import DescriptionInput from "./components/descriptionInput/DescriptionInput";
import Header from "./components/header/Header";
import Input from "./components/input/input";
import SearchBar from "./components/searchBar/SearchBar";
import { Button } from "./components/ui/Button";
import logoSmall from "../../public/assets/logo_sm.svg";
import logoLarge from "../../public/assets/logo_lg.svg"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-4 p-8">
      <p className="text-violet-50">Componentes</p>

      <Image src={logoSmall} alt="" />

      <Image src={logoLarge} alt="" />

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

      <Button variant="outline_violet" size="icon" aria-label="Edit" Icon={Pencil} />

      <Header />
      <SearchBar />
      <Input placeholder="Digite algo" />
      <DescriptionInput placeholder="TESTE" />

    </div>
  );
}
