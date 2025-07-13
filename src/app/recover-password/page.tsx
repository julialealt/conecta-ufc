"use client";

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import Input from '../components/ui/input'
import logo from '../../../public/assets/logo_lg.svg'
import { useRouter } from 'next/navigation'

export default function RecoverPasswordPage() {
  const router = useRouter()

  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const handleCancel = () => {
    router.push('/sign-in')
  }

  const handleRecoverPassword = () => {
    alert(`Nova senha: ${newPassword}\nConfirmação de senha: ${confirmNewPassword}`);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4">
      <div className="w-[390px] inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-center gap-3">
          <Image src={logo} alt="Logo ConectaUFC" />
          <p className="self-stretch text-center justify-start text-violet-50 text-xs font-medium">Conectando talentos, construindo futuros.</p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          <p className="self-stretch text-center justify-start text-zinc-400 text-sm font-medium leading-[20px]">Digite e confirme sua nova senha para recuperar o acesso à sua conta. Escolha uma senha segura e fácil de lembrar.</p>

          <form className="flex w-full flex-col gap-y-4" onSubmit={(e) => { e.preventDefault(); handleRecoverPassword(); }}>
            <Input
              id="password"
              name="password"
              label="Nova senha*"
              placeholder="Nova senha"
              isPassword={true}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <Input
              id="confirmPassword"
              name="confirmPassword"
              label="Confirmar nova senha*"
              placeholder="Confirmar nova senha"
              isPassword={true}
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />

            <div className="mt-4 flex items-center gap-x-3">
              <Button
                type="button"
                variant="outline_white"
                onClick={handleCancel}
                className="w-full"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="w-full"
              >
                Redefinir
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}