"use client";

import Image from "next/image";
import { Button } from "../components/ui/button";
import logo from "../../../public/assets/logo_lg.svg";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const handleStudent = () => {
    router.push("/sign-up/student");
  };

  const handleCompany = () => {
    router.push("/sign-up/company");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4">
      <div className="w-[390px] inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-center gap-3">
          <Image src={logo} alt="Logo ConectaUFC" />
          <p className="self-stretch text-center justify-start text-violet-50 text-xs font-medium">
            Conectando talentos, construindo futuros.
          </p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-16">
          <p className="self-stretch text-center justify-start text-zinc-400 text-sm font-medium leading-[20px]">
            Como você quer se conectar com oportunidades?
            <br />
            Escolha seu perfil e comece a transformar o futuro agora.
          </p>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <Button
              type="button"
              variant="primary"
              onClick={handleStudent}
              className="w-full"
            >
              Sou aluno
            </Button>
            <Button
              type="submit"
              variant="outline_white"
              onClick={handleCompany}
              className="w-full"
            >
              Sou professor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
