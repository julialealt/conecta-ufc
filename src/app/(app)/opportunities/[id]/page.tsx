"use client";

import { Button } from "@/app/components/ui/Button";
import UserCard from "@/app/components/ui/user-card";
import { AppContext, AppContextType, Employer } from "@/context/appContext";
import { testApi } from "@/services/axios";
import { Opportunity } from "@/types/entities";
import { ChevronLeft, Sparkles } from "lucide-react";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/router";

export default function OpportuniyPage() {
  /* const router = useRouter(); */
  const { state } = useContext(AppContext) as AppContextType;
  const userType = state.userType;
  const userId = state.userData.user?._id;

  const loggedUserId = "12345";
  const opportunityCompanyId = "12345";
  const params = useParams<{ id: string }>();
  const [opportunityData, setOpportunityData] = useState<Opportunity>();
  const [studentAldearyApplied, setStudentAldearyApplied] = useState(true);

  useEffect(() => {
    const fetchOpportunity = async () => {
      try {
        const response = await testApi.get(`/opportunities/${params.id}`);
        console.log(response.data);
        if (userType === "student") {
          const hasSudentAlreadyApplied =
            response.data.applicants.includes(userId);
          setStudentAldearyApplied(hasSudentAlreadyApplied);
        }
        setOpportunityData(response.data);
      } catch (error) {
        toast.error("Falha ao carregar oportunidade");
      }
    };

    fetchOpportunity();
  }, []);

  const handleApplyToOpportunity = async () => {
    try {
      const response = await testApi.post(`/opportunities/${params.id}/apply`, {
        studentId: userId,
      });
      if (response.status === 200) {
        toast.success("Candidatura salva com sucesso");
        setStudentAldearyApplied(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao aplicar para a vaga, tente mais tarde.");
    }
  };

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
          <div className="self-stretch justify-start text-violet-50 text-xl font-semibold leading-[150%]">
            {opportunityData?.title}
          </div>
          <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
            {opportunityData?.employer.name}
          </div>
        </div>

        {userType === "employer" &&
          opportunityData?.employer._id === userId && (
            <div className="self-stretch inline-flex justify-start items-start gap-2">
              <Button variant="danger">Excluir oportunidade</Button>
              <Button variant="primary">Ver candidatos</Button>
            </div>
          )}

        {userType === "student" && (
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            {!studentAldearyApplied ? (
              <Button variant="primary" onClick={handleApplyToOpportunity}>
                Aplicar
              </Button>
            ) : (
              <Button variant="under_review">Em análise</Button>
            )}

            {/* // se estudante não
            aplicou ainda
            <Button variant="under_review">Em análise</Button> // se estudante
            já aplicou, mas ainda não teve o resultado
            <Button variant="rejected">Recusado</Button> // se estudante aplicou
            e foi recusado
            <Button variant="recruited" Icon={Sparkles}>
              Recrutado
            </Button>{" "}
            // se estudante aplicou e foi recrutado
            <Button variant="primary">Confirmar contratação</Button> // se
            estudante aplicou e foi recrutado
            <Button variant="rejected">Cancelada</Button> // se vaga foi
            cancelada/inativa */}
          </div>
        )}
      </div>

      <div className="w-full self-stretch inline-flex flex-col justify-start items-start gap-6">
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="w-full justify-start text-white text-lg font-semibold leading-[150%]">
            Sobre a vaga
          </div>
          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
            {opportunityData?.description}
          </div>
        </div>

        <div className="self-stretch inline-flex justify-start items-start gap-6">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">
              Regime
            </div>
            <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">
              {opportunityData?.workLocation}
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">
              Salário ou bolsa
            </div>
            <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">
              R$ {opportunityData?.salary.toString()}
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">
              Carga horária
            </div>
            <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">
              {opportunityData?.weeklyHours.toString()}h semanais
            </div>
          </div>
        </div>

        <UserCard
          variant="organization"
          name={opportunityData?.employer.name || ""}
          profileUrl="/company/id"
          bio=""
          about={opportunityData?.employer.description}
        />
      </div>
    </div>
  );
}
