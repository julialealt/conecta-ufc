"use client";

import { Pen } from "lucide-react";
import Avatar from "../../components/ui/avatar";
import { Button } from "../../components/ui/Button";
import JobCard from "../../components/ui/job-card";
import { useRouter } from "next/navigation";

export default function CompanyProfilePage() {
  const router = useRouter();

  const handleUpdateProfile = () => {
    router.push("/company-profile/update");
  };

  return (
    <div className="w-full self-stretch px-30 pt-12 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-16">
      <div className="self-stretch w-full inline-flex justify-start items-start gap-6">
        <Avatar
          imageUrl={""}
          name={"Insight Data Science Lab"}
          variant="organization"
          size="lg"
        />

        <div className="self-stretch w-full inline-flex flex-col justify-center items-start gap-1">
          <div className="justify-start text-white text-xl font-semibold leading-[150%]">
            Insight Data Science Lab
          </div>
          <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
            Laboratório de pesquisa em Ciência de Dados na Universidade Federal
            do Ceará (UFC)
          </div>
          <div className="justify-start text-violet-500 text-xs font-medium leading-[150%]">
            88% de taxa de contratação no ConectaUFC
          </div>
        </div>

        <Button
          variant="outline_violet"
          Icon={Pen}
          onClick={handleUpdateProfile}
          size="icon"
        />
      </div>

      <div className="w-full inline-flex flex-col justify-start items-start gap-12">
        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
              Sobre
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              We are a research group at Federal University of Ceará (UFC)
              linked to the Department of Computing, which is accredited by
              Brazilian IT Law. It&apos;s composed by professors, researchers,
              collaborators and students of postgraduate and graduation. We
              conduct interdisciplinary research aimed at discovering the
              principles underlying the data science. The laboratory conducts
              research in many areas: cloud computing, machine learning, data
              visualization, semantic integration, social network analysis,
              trajectory exploration, time-dependent networks, text
              summarization and mining massive datasets.
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full justify-start text-white text-lg font-semibold leading-[150%]">
              Site
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              http://insightlab.ufc.br
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full justify-start text-white text-lg font-semibold leading-[150%]">
              Sede
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              Fortaleza, Ceará
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full justify-start text-white text-lg font-semibold leading-[150%]">
              Especializações
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              Big Data Analysis, Large Scale Graph Processing e Mobility Data
              Analysis
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full justify-start text-white text-lg font-semibold leading-[150%]">
              Contato
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              insightlab@gmail.com
            </div>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-6">
          <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
            Vagas
          </div>

          <div className="self-stretch inline-flex flex-col justify-start items-start gap-4">
            <JobCard
              logoUrl={""}
              companyName={"IBM"}
              jobTitle={"UI/UX Designer"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not."
              }
              location={"Remoto"}
              salary={"R$1.200,00"}
              workload={"20h semanais"}
              buttonText="Ver candidatos"
            />

            <JobCard
              logoUrl={""}
              companyName={"IBM"}
              jobTitle={"UI/UX Designer"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
              }
              location={"Remoto"}
              salary={"R$1.200,00"}
              workload={"20h semanais"}
              buttonText="Ver candidatos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
