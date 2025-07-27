"use client";

import { Button } from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import { PhotoInput } from "@/app/components/ui/photo-input";
import TextAreaInput from "@/app/components/ui/text-area-input";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CompanyProfileUpdatePage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [about, setAbout] = useState('')
  const [site, setSite] = useState('')
  const [location, setLocation] = useState('')
  const [specialities, setSpecialities] = useState('')
  const [contact, setContact] = useState('')

  const handlePhotoChange = (file: File) => {
    console.log("Novo logo de organização selecionado:", file.name);
    // Lógica de upload...
  }

  const handleBack = () => {
    router.push('/company/[id]');
    // Você pode substituir '[id]' pelo ID real da empresa, se necessário.
  }

  const handleResetPassword = () => {
    router.push('/reset-password');
  }

  return (
    <div className="self-stretch w-full px-28 pt-12 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-8">
      <div className="w-full inline-flex justify-start items-start gap-3">
        <div className="self-stretch pt-0.5 inline-flex flex-col justify-start items-start gap-1">
          <ChevronLeft className="w-5 h-5 text-zinc-400 cursor-pointer" onClick={handleBack} />
        </div>

        <div className="w-full self-stretch inline-flex flex-col justify-center items-start gap-1">
          <div className="self-stretch justify-start text-violet-50 text-lg font-semibold leading-[150%]">Editar perfil</div>
          <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">Atualize suas informações e atraia os talentos certos.</div>
        </div>

        <div className="self-stretch inline-flex justify-start items-start gap-2">
          <Button variant="outline_violet" onClick={handleResetPassword}>Redefinir senha</Button>
        </div>
      </div>

      <div className="self-stretch w-full inline-flex flex-col justify-start items-start gap-4">
        <PhotoInput
          variant="organization"
          onImageChange={handlePhotoChange}
          label="Perfil"
          status="default"
          errorMessage=""
        />

        <Input
          id="email"
          name="email"
          label="Email*"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          status="default"
          errorMessage=""
        />

        <Input
          id="name"
          name="name"
          label="Nome*"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          status="default"
          errorMessage=""
        />

        <Input
          id="description"
          name="description"
          label="Descrição*"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          status="default"
          errorMessage=""
        />

        <TextAreaInput
          id="about"
          name="about"
          label="Sobre*"
          placeholder="Sobre"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          status="default"
          errorMessage=""
        />

        <Input
          id="site"
          name="site"
          label="Site*"
          placeholder="Site"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          status="default"
          errorMessage=""
        />

        <Input
          id="location"
          name="location"
          label="Sede*"
          placeholder="Sede"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          status="default"
          errorMessage=""
        />

        <Input
          id="specialities"
          name="specialities"
          label="Especializações*"
          placeholder="Especializações"
          value={specialities}
          onChange={(e) => setSpecialities(e.target.value)}
          status="default"
          errorMessage=""
        />

        <Input
          id="contact"
          name="contact"
          label="Contato*"
          placeholder="Contato"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          status="default"
          errorMessage=""
        />

        <div className="self-stretch pt-6 inline-flex justify-between items-center">
          <Button variant="danger">Excluir conta</Button>

          <div className="inline-flex justify-start items-center gap-4">
            <Button variant="outline_white">Cancelar</Button>
            <Button variant="primary">Salvar alterações</Button>
          </div>
        </div>
      </div>
    </div>
  )
}