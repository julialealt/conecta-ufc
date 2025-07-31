"use client";

import { Button } from "@/app/components/ui/Button";
import JobCard from "@/app/components/ui/job-card";
import { Spinner } from "@/app/components/ui/spinner";
import { AppContext, AppContextType } from "@/context/appContext";
import { testApi } from "@/services/axios";
import { Opportunity } from "@/types/entities";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export default function OpportunitiesPage() {
  const router = useRouter();
  const { state } = useContext(AppContext) as AppContextType;
  const userType = useContext(AppContext)?.state.userType || "";
  const userId = state.userData.user?._id;
  const [listOfOpportunities, setListOfOpportunities] =
    useState<Opportunity[]>();
  const [isLoading, setIsLoading] = useState(true);

  console.log(userId);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        if (userType === "student") {
          const response = await testApi.get(
            `/opportunities/applicant/${userId}`
          );
          if (response.status === 200) {
            setListOfOpportunities(response.data);
          }
        } else {
          const response = await testApi.get(
            `/opportunities/employer/${userId}`
          );
          if (response.status === 200) {
            setListOfOpportunities(response.data);
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Não foi possível carregar as oportunidades");
      }
    };

    fetchOpportunities();
  }, []);

  const setOpportunityStatus = (opportunity: Opportunity) => {
    let result = "";
    if (userType === "student") {
      const hasSudentAlreadyApplied = opportunity.applicants.includes(
        userId || ""
      );

      if (hasSudentAlreadyApplied) result = "Em análise";

      const contractsWithUserId = opportunity.contracts.filter(
        (contract: any) => contract.employeeId === userId
      );

      if (contractsWithUserId.length > 0) result = "Recrutado";

      if (contractsWithUserId[0].status === "confirmed") result = "Contratado";

      const refusedWithUserId = opportunity.refusedApplicants.filter(
        (contract: any) => contract.employeeId === userId
      );

      if (refusedWithUserId.length > 0) result = "Recusado";
    } else {
      result = "editar";
    }
    return result;
  };

  return isLoading ? (
    <>
      <Spinner />
    </>
  ) : (
    <div className="w-full self-stretch px-30 pt-6 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-8">
      <div className="w-full inline-flex justify-start items-start gap-3">
        <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start gap-1">
          <div className="flex-1 self-stretch justify-start text-violet-50 text-xl font-semibold leading-[150%]">
            Suas {userType === "student" ? "candidaturas" : "vagas publicadas"}
          </div>

          {userType === "company" && (
            <div className="flex-1 self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
              Gerencie todas as oportunidades que você criou.
              <br />
              Acompanhe o número de candidatos, visualize perfis completos e
              entre em contato com os alunos mais alinhados à sua proposta.
            </div>
          )}

          {userType === "student" && (
            <div className="flex-1 self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
              Veja todas as vagas às quais você se candidatou.
              <br />
              Acompanhe o status da sua candidatura, visualize os detalhes das
              oportunidades e mantenha contato com quem publicou.
            </div>
          )}
        </div>

        {userType === "company" && (
          <Button
            variant="primary"
            onClick={() => router.push("/opportunities/create")}
          >
            Publicar oportunidade
          </Button>
        )}
      </div>

      <div className="w-full self-stretch inline-flex flex-col justify-start items-start gap-6">
        {listOfOpportunities?.map((opportunity) => (
          <JobCard
            opportunityId={opportunity._id}
            logoUrl={""}
            companyName={opportunity.employer.name}
            jobTitle={opportunity.title}
            description={opportunity.description}
            location={opportunity.workLocation}
            salary={opportunity.salary.toString()}
            workload={`${opportunity.weeklyHours}h semanais`}
            buttonText={setOpportunityStatus(opportunity)}
          />
        ))}
      </div>
    </div>
  );
}
