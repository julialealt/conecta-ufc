"use client";

import { Button } from "@/app/components/ui/button";
import JobCard from "@/app/components/ui/job-card";
import { useRouter } from "next/navigation";

export default function OpportunitiesPage() {
  const router = useRouter()
  const userType = "student"; // This would typically come from user context or props
  // const userType = "student"; // Uncomment this line to test the student view

  return (
    <div className="w-full self-stretch px-30 pt-6 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-8">
      <div className="w-full inline-flex justify-start items-start gap-3">
        <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start gap-1">
          <div className="flex-1 self-stretch justify-start text-violet-50 text-xl font-semibold leading-[150%]">Suas {userType === "student" ? 'candidaturas' : 'vagas publicadas'}</div>

          {/* {userType === "company" && (
            <div className="flex-1 self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
              Gerencie todas as oportunidades que você criou.<br />Acompanhe o número de candidatos, visualize perfis completos e entre em contato com os alunos mais alinhados à sua proposta.
            </div>
          )} */}

          {userType === "student" && (
            <div className="flex-1 self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
              Veja todas as vagas às quais você se candidatou.<br />Acompanhe o status da sua candidatura, visualize os detalhes das oportunidades e mantenha contato com quem publicou.
            </div>
          )}
        </div>

        {/* {userType === "company" && <Button variant="primary" onClick={() => router.push("/opportunities/create")}>Publicar oportunidade</Button>} */}
      </div>

      <div className="w-full self-stretch inline-flex flex-col justify-start items-start gap-6">
        <JobCard
          opportunityId={"1"}
          logoUrl={""}
          companyName={"IBM"}
          jobTitle={"UI/UX Designer"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
          }
          location={"Remoto"}
          salary={"R$1.200,00"}
          workload={"20h semanais"}
          buttonText="Recrutado"
        />

        <JobCard
          opportunityId={"2"}
          logoUrl={""}
          companyName={"IBM"}
          jobTitle={"UI/UX Designer"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
          }
          location={"Remoto"}
          salary={"R$1.200,00"}
          workload={"20h semanais"}
          buttonText="Em análise"
        />

        <JobCard
          opportunityId={"3"}
          logoUrl={""}
          companyName={"IBM"}
          jobTitle={"UI/UX Designer"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
          }
          location={"Remoto"}
          salary={"R$1.200,00"}
          workload={"20h semanais"}
          buttonText="Recusado"
        />
      </div>
    </div>
  );
}
