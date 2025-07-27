"use client";

import { Button } from "@/app/components/ui/button";
import UserCard from "@/app/components/ui/user-card";
import { ChevronLeft, Sparkles } from "lucide-react";

export default function OpportuniyPage() {
  const userType = "company"; // pode ser "student" ou "company"
  const loggedUserId = "12345"
  const opportunityCompanyId = "12345"

  const handleBack = () => {
    // deve voltar para a página anterior
  }

  return (
    <div className="self-stretch w-full px-28 pt-12 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-8">
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
            <Button variant="primary">Ver candidatos</Button>
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
          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">Na Stefanini, acreditamos no poder da colaboração. Co-criamos soluções inovadoras em parceria com nossos clientes, combinando tecnologia de ponta, inteligência artificial e a criatividade humana. Estamos na vanguarda da resolução de problemas de negócios, proporcionando impacto real em escala global.<br /><br />Ao se juntar à Stefanini, você se torna parte de uma jornada global de transformação. Estamos empenhados em criar impacto positivo não apenas nos negócios, mas também na vida de nossos colaboradores. Se você procura uma oportunidade de crescimento profissional em uma empresa que valoriza inovação, respeito, autonomia e parceria, você encontra aqui!<br /><br />Junte-se a nós e seja parte da mudança!<br /><br />Vaga: Desenvolvedor(a) React (Micro Frontends)<br /><br />Descrição da vaga:<br />Estamos em busca de um(a) desenvolvedor(a) React dinâmico(a) e colaborativo(a) para se juntar ao nosso time, que opera com uma arquitetura moderna baseada em Micro Frontends. O(a) candidato(a) ideal deve ser apaixonado(a) por boas práticas e inovação tecnológica, além de ter uma atitude colaborativa. Valorizamos um ambiente dinâmico, ágil e criativo, onde a troca de ideias e a inovação são encorajadas. Se você é alguém que gosta de desafios e está disposto(a) a contribuir para o desenvolvimento de soluções inovadoras, queremos conhecê-lo(a)!<br /><br />Responsabilidades:<br />Desenvolver aplicações front-end utilizando React;<br />Trabalhar ativamente com Micro Frontends, preferencialmente usando Single SPA;<br />Implementar interfaces modernas e responsivas com base em protótipos desenvolvidos no Figma;<br />Garantir a qualidade do código por meio de revisões e testes;<br />Colaborar diariamente com uma equipe multidisciplinar em metodologias ágeis;<br />Utilizar Git para controle de versão, realizando pull requests e participando de code reviews.<br /><br />Requisitos obrigatórios:<br />Experiência sólida com React.js;<br />Familiaridade com arquitetura de Micro Frontends e Single SPA;<br />Conhecimento em integração e consumo de APIs REST;<br />Domínio de versionamento com Git;<br />Experiência com prototipação e implementação de designs utilizando Figma;<br />Excelentes habilidades de comunicação e trabalho em equipe.<br /><br />Diferenciais:<br />Conhecimento em outras tecnologias como Redux, Zustand ou React Query;<br />Experiência com testes automatizados (Jest, React Testing Library);<br />Familiaridade com práticas de CI/CD;<br />Experiência anterior em equipes ágeis (Scrum, Kanban).</div>
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