"use client";
import { useContext, useEffect, useState } from "react";
import { Pen } from "lucide-react";
import { AppContext, AppContextType, Employer } from "@/context/appContext";
import { Opportunity } from "@/types/entities";
import { useRouter } from "next/navigation";
import api from "@/services/axios";
import { Button } from "@/app/components/ui/button";
import Avatar from "@/app/components/ui/avatar";
import JobCard from "@/app/components/ui/job-card";

export default function CompanyProfilePage() {
  const router = useRouter();
  const { state } = useContext(AppContext) as AppContextType;
  const [employerOpportunities, setEmployerOpportunities] = useState<
    Opportunity[]
  >([]);
  const employerData: Employer = state.userData.user as Employer;

  useEffect(() => {
    const fetchOpportunities = async () => {
      const opportunitiesResponse = await api.get(
        `/opportunities/employer/${employerData._id}`
      );
      if (opportunitiesResponse.status === 200) {
        setEmployerOpportunities(opportunitiesResponse.data);
      }
    };
    fetchOpportunities();
  }, []);

  const handleUpdateProfile = () => {
    router.push(`/company/[id]/update`);
    // substituir `[id]` pelo ID do empregador
  };

  return (
    <div className="w-full self-stretch px-30 pt-6 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-16">
      <div className="self-stretch w-full inline-flex justify-start items-start gap-6">
        <Avatar
          imageUrl={""}
          name={"Insight Data Science Lab"}
          variant="organization"
          size="lg"
        />

        <div className="self-stretch w-full inline-flex flex-col justify-center items-start gap-1">
          <div className="justify-start text-white text-xl font-semibold leading-[150%]">
            {employerData.name}
          </div>
          {/* <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
            
          </div> */}
          {employerData.hiringRate !== undefined && (
            <div className="justify-start text-violet-500 text-xs font-medium leading-[150%]">
              {`${employerData.hiringRate}% de taxa de contratação no ConectaUFC`}
            </div>
          )}
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
              {employerData.description}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full justify-start text-white text-lg font-semibold leading-[150%]">
              Site
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              {employerData.site ? employerData.site : "Não informado"}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full justify-start text-white text-lg font-semibold leading-[150%]">
              Sede
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              {employerData.location ? employerData.location : "Não informado"}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full justify-start text-white text-lg font-semibold leading-[150%]">
              Especializações
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              {employerData.specializations &&
                employerData.specializations.length > 1
                ? `${employerData.specializations.slice(0, -1).join(",")} e ${employerData.specializations[
                employerData.specializations.length - 1
                ]
                }`
                : employerData.specializations
                  ? `${employerData.specializations[0]}`
                  : "Não informado"}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="w-full justify-start text-white text-lg font-semibold leading-[150%]">
              Contato
            </div>
            <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
              {employerData.email}
            </div>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-6">
          <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
            Vagas
          </div>

          <div className="self-stretch inline-flex flex-col justify-start items-start gap-4">
            {employerOpportunities.length > 0
              ? employerOpportunities.map((opportunity) => (
                <JobCard
                  logoUrl={employerData.profileImage || ""}
                  companyName={employerData.name}
                  jobTitle={opportunity.title}
                  description={opportunity.description}
                  location={opportunity.workLocation}
                  salary={opportunity.salary.toString()}
                  workload={`${opportunity.weeklyHours}h semanais`}
                  buttonText="Ver candidatos"
                  key={opportunity._id}
                />
              ))
              : "Não há oportunidades cadastradas"}

            {/* <JobCard
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
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
