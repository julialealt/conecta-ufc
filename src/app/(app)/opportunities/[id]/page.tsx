"use client";

import Button from "@/app/components/ui/Button";
import UserCard from "@/app/components/ui/user-card";
import { AppContext, AppContextType } from "@/context/appContext";
import api, { localApi } from "@/services/axios";
import { Opportunity } from "@/types/entities";
import { getRegime } from "@/utils/getRegime";
import { ChevronLeft, Sparkles } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

import { Spinner } from "@/app/components/ui/spinner";

export default function OpportuniyPage() {
  const router = useRouter();
  const { state } = useContext(AppContext) as AppContextType;
  const userType = useContext(AppContext)?.state.userType || "";
  const userId = state.userData.user?._id;

  const params = useParams<{ id: string }>();
  const [opportunityData, setOpportunityData] = useState<Opportunity>();
  const [studentAldearyApplied, setStudentAldearyApplied] = useState(true);
  const [wasStudentRecruited, setWasStudentRecruited] = useState(false);
  const [wasStudentRefused, setWasStudentRefused] = useState(false);
  const [wasStudentHired, setWasStudentHired] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [contractId, setContractId] = useState("");

  useEffect(() => {
    const fetchOpportunity = async () => {
      try {
        const response = await localApi.get(`/opportunities/${params.id}`);
        console.log(response.data);

        if (userType === "student") {
          const hasSudentAlreadyApplied =
            response.data.applicants.includes(userId);
          setStudentAldearyApplied(hasSudentAlreadyApplied);

          const contractsWithUserId = response.data.contracts.filter(
            (contract: any) => contract.employeeId === userId
          );
          const refusedWithUserId = response.data.refusedApplicants.filter(
            (contract: any) => contract.employeeId === userId
          );

          if (refusedWithUserId.length > 0) {
            setWasStudentRefused(true);
          } else if (contractsWithUserId.length > 0) {
            setWasStudentRecruited(true);
            setContractId(contractsWithUserId[0]._id);
            if (contractsWithUserId[0].status === "confirmed") {
              setWasStudentHired(true);
            }
          }
        }
        setOpportunityData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching opportunity:", error);
        toast.error("Falha ao carregar oportunidade");
      }
    };

    fetchOpportunity();
  }, []);

  const handleApplyToOpportunity = async () => {
    try {
      const response = await localApi.post(
        `/opportunities/${params.id}/apply`,
        {
          studentId: userId,
        }
      );
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
    router.back();
  };

  const handleConfirmContract = async () => {
    try {
      const response = await localApi.post("/contracts/confirm/", {
        opportunityId: params.id,
        contractId: contractId,
      });
      if (response.status === 201) {
        toast.success("Contrato confirmado com sucesso.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao confirmar contratação, tente mais tarde");
    }
  };

  return isLoading ? (
    <>
      {" "}
      <Spinner />{" "}
    </>
  ) : (
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
              <Button variant="primary" onClick={() => router.push(`/opportunities/${params.id}/applicants`)}>Ver candidatos</Button>
            </div>
          )}

        {userType === "student" && (
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            {wasStudentHired ? (
              <Button variant="under_review">Contratado</Button>
            ) : wasStudentRefused ? (
              <Button variant="rejected">Recusado</Button>
            ) : wasStudentRecruited ? (
              <Button variant="primary" onClick={handleConfirmContract}>
                Confirmar contratação
              </Button>
            ) : !studentAldearyApplied ? (
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
              {getRegime(opportunityData?.workLocation || "Não especificado")}
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
          profileUrl={`/company/${opportunityData?.employer._id}`}
          bio=""
          about={opportunityData?.employer.description}
        />
      </div>
    </div>
  );
}
