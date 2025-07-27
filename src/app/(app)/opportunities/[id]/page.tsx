"use client";

import { Button } from "@/app/components/ui/button";
import UserCard from "@/app/components/ui/user-card";
import { ChevronLeft, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OpportuniyPage() {
  const router = useRouter()

  const userType = "company"; // pode ser "student" ou "company"
  const loggedUserId = "12345"
  const opportunityCompanyId = "12345"

  const handleBack = () => {
    // deve voltar para a página anterior
  }

  return (
    <div className="self-stretch w-full px-30 pt-6 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-8">
      <div className="w-full inline-flex justify-start items-start gap-3">
        <div className="self-stretch pt-0.5 inline-flex flex-col justify-start items-start gap-1">
          <ChevronLeft className="w-5 h-5 text-zinc-400 cursor-pointer" onClick={handleBack} />
        </div>

        <div className="w-full self-stretch inline-flex flex-col justify-center items-start gap-1">
          <div className="self-stretch justify-start text-violet-50 text-xl font-semibold leading-[150%]">UI/UX Designer</div>
          <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">IBM</div>
        </div>

        {userType === "company" && loggedUserId === opportunityCompanyId && (
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            <Button variant="danger">Excluir oportunidade</Button>
            <Button variant="primary" onClick={() => router.push("/opportunities/id/applicants")}>Ver candidatos</Button>
          </div>
        )}

        {/* {userType === "student" && (
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            <Button variant="primary">Aplicar</Button> // se estudante não aplicou ainda 
            <Button variant="under_review">Em análise</Button> // se estudante já aplicou, mas ainda não teve o resultado 
            <Button variant="rejected">Recusado</Button> // se estudante aplicou e foi recusado 
            <Button variant="recruited" Icon={Sparkles}>Recrutado</Button> // se estudante aplicou e foi recrutado 
            <Button variant="primary">Confirmar contratação</Button> // se estudante aplicou e foi recrutado 
            <Button variant="rejected">Cancelada</Button> // se vaga foi cancelada/inativa
          </div>
        )} */}
      </div>

      <div className="w-full self-stretch inline-flex flex-col justify-start items-start gap-6">
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="w-full justify-start text-white text-lg font-semibold leading-[150%]">Sobre a vaga</div>
          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">Na Stefanini, acreditamos no poder da colaboração. Co-criamos soluções inovadoras em parceria com nossos clientes, combinando tecnologia de ponta, inteligência artificial e a criatividade humana. Estamos na vanguarda da resolução de problemas de negócios, proporcionando impacto real em escala global.<br /><br />Ao se juntar à Stefanini, você se torna parte de uma jornada global de transformação. Estamos empenhados em criar impacto positivo não apenas nos negócios, mas também na vida de nossos colaboradores.</div>
        </div>

        <div className="self-stretch inline-flex justify-start items-start gap-6">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">Regime</div>
            <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">Remoto</div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">Salário ou bolsa</div>
            <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">R$ 1.200,00</div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">Carga horária</div>
            <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">20h semanais</div>
          </div>
        </div>

        <UserCard
          variant="organization"
          name="Insight Data Science Lab"
          profileUrl="/company/id"
          bio="Laboratório de pesquisa em Ciência de Dados na Universidade Federal do Ceará (UFC)"
          about="We are a research group at Federal University of Ceará (UFC) linked to the Department of Computing, which is accredited by Brazilian IT Law. It's composed by professors, researchers, collaborators and students of postgraduate and graduation. We conduct interdisciplinary research aimed at discovering the principles underlying the data science. The laboratory conducts rcafdevgfbgrbgsvfbvsgrtvbw jfvnskfjnvs iojfnvsjedkfvn oefijvndfkjv"
        />
      </div>

    </div>
  )
}