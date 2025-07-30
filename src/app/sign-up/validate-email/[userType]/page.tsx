"use client";

import { useState, useContext } from "react";
import Image from "next/image";
import logo from "../../../../../public/assets/logo_lg.svg";
import { useRouter } from "next/navigation";
import Input from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { useParams } from "next/navigation";
import { AppContext, AppContextType } from "@/context/appContext";
import { Spinner } from "@/app/components/ui/spinner";
import { localApi } from "@/services/axios";
import { toast } from "sonner";

export default function ValidateEmailPage() {
  const router = useRouter();
  const params = useParams<{ userType: string }>();
  const { state, setUserData } = useContext(AppContext) as AppContextType;
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    setIsLoading(true);
    try {
      if (state.userData.user) {
        const response = await localApi.post("/auth/verify-email-code", {
          code,
          userEmail: decodeURIComponent(state.userData.user.email),
        });
        if (response.status === 200) {
          const createUserResponse = await localApi.post(
            `/${params.userType}/register`,
            state.userData.user
          );

          if (createUserResponse.status === 201) {
            setUserData({
              accessToken: createUserResponse.data.accessToken,
              refreshToken: createUserResponse.data.refreshToken,
              user: createUserResponse.data.data,
            });
            toast.success("Cadastro finalizado com sucesso!");
            router.push("/sign-in");
          }
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao verificar o código de e-mail. Verifique se o código está correto ou se o e-mail foi enviado corretamente.");
    }
    setIsLoading(false);
  };

  const handleBack = () => {
    router.push("/sign-up");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4">
      {isLoading && <Spinner />}
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
              status="default"
              errorMessage=""
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
