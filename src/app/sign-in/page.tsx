"use client";

import { useState, useContext } from "react";
import Image from "next/image";
import { Button } from "../components/ui/Button";
import Input from "../components/ui/input";
import logo from "../../../public/assets/logo_lg.svg";
import { useRouter } from "next/navigation";
import LoadingStatus from "../components/loadingStatus/LoadingStatus";
import api from "@/services/axios";
import { AppContext, AppContextType } from "@/context/appContext";
import { jwtDecode } from "jwt-decode";

export default function SignInPage() {
  const router = useRouter();
  const { setUserData, setUserType } = useContext(AppContext) as AppContextType;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      console.log(response);
      if (response.status === 200) {
        const decoded = jwtDecode<{
          userId: string;
          type: string;
        }>(response.data.accessToken);
        setUserType(decoded.type);
        setUserData(response.data.data);
        alert("Login realizado com sucesso");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      alert("Algo deu errado, tente mais tarde");
    }
    setIsLoading(false);
  };

  const handleForgotPassword = () => {
    router.push("/recover-password/request-email-verification");
  };

  const handleRegister = () => {
    router.push("/sign-up");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4">
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
            Uma plataforma exclusiva para conectar talentos da universidade
            pública a oportunidades reais.
          </p>

          <form
            className="flex w-full flex-col gap-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <Input
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              id="password"
              name="password"
              placeholder="Senha"
              isPassword={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="button"
              variant="link"
              onClick={handleForgotPassword}
              size="small"
              className="p-0"
            >
              Esqueci minha senha
            </Button>

            <div className="mt-4 flex items-center gap-x-3">
              <Button
                type="button"
                variant="outline_white"
                onClick={handleRegister}
                className="w-full"
              >
                Cadastrar
              </Button>
              <Button type="submit" variant="primary" className="w-full">
                Entrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
