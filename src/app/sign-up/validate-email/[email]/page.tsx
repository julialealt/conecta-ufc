"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/assets/logo_lg.svg";
import { useRouter } from "next/navigation";
import Input from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/Button";
import api from "@/services/axios";
import { useParams } from "next/navigation";
import LoadingStatus from "@/app/components/loadingStatus/LoadingStatus";

export default function SignInPage() {
  const router = useRouter();
  const params = useParams<{ email: string }>();

  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    setIsLoading(true);
    try {
      const response = await api.post("/auth/verify-email-code", {
        code,
        userEmail: decodeURIComponent(params.email),
      });
      if (response.status === 200) {
        alert(`Email vericiado código: ${code}`);
        router.push("./");
      }
    } catch (error) {
      console.log(error);
      alert("Algo deu errado, tente mais tarde");
    }
    setIsLoading(false);
  };

  const handleBack = () => {
    router.push("/sign-up");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4">
      {isLoading && <LoadingStatus />}
      <div className="w-[390px] inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-center gap-3">
          <Image src={logo} alt="Logo ConectaUFC" />
          <p className="self-stretch text-center justify-start text-violet-50 text-xs font-medium">
            Conectando talentos, construindo futuros.
          </p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          <p className="self-stretch text-center justify-start text-zinc-400 text-sm font-medium leading-[20px]">
            Estamos quase lá! Verifique seu e-mail para começar a se conectar
            com os talentos da universidade pública.
          </p>

          <form
            className="flex w-full flex-col gap-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleVerify();
            }}
          >
            <Input
              id="code"
              name="code"
              placeholder="Código"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <div className="mt-2 flex items-center gap-x-3">
              <Button
                type="button"
                variant="outline_white"
                onClick={handleBack}
                className="w-full"
              >
                Voltar
              </Button>
              <Button type="submit" variant="primary" className="w-full">
                Verificar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
