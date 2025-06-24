"use client";
import { Bell, Pencil, Plus, Sparkles } from "lucide-react";
import DescriptionInput from "./components/descriptionInput/DescriptionInput";
import { Button } from "./components/ui/Button";
import logoSmall from "../../public/assets/logo_sm.svg";
import logoLarge from "../../public/assets/logo_lg.svg"
import Image from "next/image";
import { SearchBar } from "./components/ui/SearchBar";
import Select from "./components/select/select";
import ApplicantCard from "./components/applicantCard/applicantCard";
import Avatar from "./components/avatar/avatar";
import JobCard from "./components/jobCard/jobCard";
import { InfoCard } from "./components/infoCard/infoCard";
import Input from "./components/Input/input";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-8 p-8">
      <p className="text-violet-50">Componentes</p>

      <ApplicantCard
        avatarUrl={""}
        name={"Júlia Leal"}
        profileUrl={""}
        bio={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."}
        recommendationCount={32}
        onDecline={() => { }}
        onRecruit={() => { }}
      />

      <Avatar name={"Júlia Leal"} />

      <InfoCard student href="" imageUrl={""} title={"Júlia Leal Teixeira"} subtitle={"Ciência da Computação"} />

      <JobCard
        logoUrl={""}
        companyName={"IBM"}
        jobTitle={"UI/UX Designer"}
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."}
        location={"Remoto"}
        salary={"R$1.200,00"}
        workload={"20h semanais"}
        showApplyButton
      />

      <SearchBar
        placeholder="Pesquisar alunos, empresas ou oportunidades"
        onFilterClick={() => { }}
      />

      <div className="flex gap-4">
        <Image src={logoSmall} alt="" />
        <Image src={logoLarge} alt="" />
      </div>

      <div className="flex gap-4">
        <Button>Button</Button>
        <Button Icon={Sparkles}>With icon</Button>
        <Button variant="ghost" Icon={Sparkles}>
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

      <Input label="Label*" placeholder="Digite algo" />
      <Select
        id="example-select"
        name="example"
        placeholder="Selecione uma opção"
        label="Select"
        value=""
        options={[{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }]}
        onChange={(e) => console.log(e.target.value)}
      />
      <DescriptionInput label="Descrição" placeholder="Input text area" />

    </div>
  );
}
