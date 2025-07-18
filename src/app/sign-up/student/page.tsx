"use client";

import { useState } from 'react'
import Image from 'next/image'
import logo from '../../../../public/assets/logo_lg.svg'
import { useRouter } from 'next/navigation'
import { Button } from '@/app/components/ui/button';
import Input from '@/app/components/ui/input';
import Select from '@/app/components/ui/select';
import { courseOptions } from '@/constants/courses';

export default function StudentSignUpPage() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [entrySemester, setEntrySemester] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    alert(`Cadastro realizado com sucesso!\n\nNome: ${name}\nCurso: ${course}\nSemestre de ingresso: ${entrySemester}\nEmail: ${email}`)
  };

  const handleBackToSignIn = () => {
    router.push('/sign-in')
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-8">
      <div className="w-[460px] inline-flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-center gap-3">
          <Image src={logo} alt="Logo ConectaUFC" />
          <p className="self-stretch text-center justify-start text-violet-50 text-xs font-medium">Conectando talentos, construindo futuros.</p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          <p className="self-stretch text-center justify-start text-zinc-400 text-sm font-medium leading-[20px]">Seu futuro começa aqui.<br />Cadastre-se e faça parte da rede de talentos da UFC.</p>

          <form className="flex w-full flex-col gap-y-4" onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
            <Input
              id="name"
              name="name"
              label="Nome*"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Select
              id="course"
              name="course"
              label="Curso*"
              placeholder="Curso"
              value={course}
              options={courseOptions}
              onChange={(e) => setCourse(e.target.value)}
              status='error'
              errorMessage='Campo obrigatório'
            />

            <Input
              id="entrySemester"
              name="entrySemester"
              label="Semestre de ingresso*"
              placeholder="Semestre de ingresso"
              value={entrySemester}
              onChange={(e) => setEntrySemester(e.target.value)}
            />

            <Input
              id="email"
              name="email"
              label="Email*"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              id="password"
              name="password"
              label="Senha*"
              placeholder="Senha"
              isPassword={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="mt-2 flex items-center gap-x-3">
              <Button
                type="button"
                variant="outline_white"
                onClick={handleBackToSignIn}
                className="w-full"
              >
                Voltar para o login
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="w-full"
              >
                Cadastrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}