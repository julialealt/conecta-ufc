"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../components/ui/button';
import Input from '../components/ui/input';
import logo from '../../../public/assets/logo_lg.svg';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Email: ${email}\nSenha: ${password}`);
  };

  const handleRegister = () => {
    alert('Redirecionando para a página de cadastro...');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4">
      <div className="flex w-full max-w-sm flex-col items-center gap-y-6">

        <div className="self-stretch inline-flex flex-col justify-start items-center gap-3">
          <Image src={logo} alt="Logo ConectaUFC" />
          <p className="self-stretch text-center justify-start text-violet-50 text-xs font-medium">Conectando talentos, construindo futuros.</p>
        </div>

        <div className="self-stretch inline-flex flex-col justify-start items-start gap-8">
          <p className="self-stretch text-center justify-start text-zinc-400 text-sm font-medium leading-tight">Uma plataforma exclusiva para conectar talentos da universidade pública a oportunidades reais.</p>

          <form className="flex w-full flex-col gap-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
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

            <div className="mt-2 flex items-center gap-x-3">
              <Button
                type="button"
                variant="outline_white"
                onClick={handleRegister}
                className="w-full"
              >
                Cadastrar
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="w-full"
              >
                Entrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}