"use client";

import { Button } from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleBack = () => {
    // deve voltar para a página anterior
  };

  return (
    <div className="self-stretch w-full px-30 pt-6 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-8">
      <div className="w-full inline-flex justify-start items-start gap-3">
        <div className="self-stretch pt-0.5 inline-flex flex-col justify-start items-start gap-1">
          <ChevronLeft
            className="w-5 h-5 text-zinc-400 cursor-pointer"
            onClick={handleBack}
          />
        </div>

        <div className="w-full self-stretch inline-flex flex-col justify-center items-start gap-1">
          <div className="self-stretch justify-start text-violet-50 text-lg font-semibold leading-[150%]">
            Redefinir senha
          </div>
          <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
            Digite e confirme sua nova senha. Crie uma senha forte e segura.
          </div>
        </div>
      </div>

      <div className="self-stretch w-full inline-flex flex-col justify-start items-start gap-4">
        <Input
          id="password"
          name="password"
          label="Nova senha*"
          placeholder="Nova senha"
          isPassword={true}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          status="default"
          errorMessage=""
        />

        <Input
          id="confirmPassword"
          name="confirmPassword"
          label="Confirmar nova senha*"
          placeholder="Confirmar nova senha"
          isPassword={true}
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          status="default"
          errorMessage=""
        />

        <div className="self-stretch pt-6 inline-flex justify-end items-center gap-4">
          <Button variant="outline_white">Cancelar</Button>
          <Button variant="primary">Redefinir senha</Button>
        </div>
      </div>
    </div>
  );
}
