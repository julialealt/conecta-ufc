"use client";

import ApplicantCard from "@/app/components/ui/applicant-card";
import { Spinner } from "@/app/components/ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { AppContext, AppContextType, Student } from "@/context/appContext";
import api, { testApi } from "@/services/axios";
import { ChevronLeft, CircleAlert } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export default function OpportunityApplicantsPage() {
  const { state } = useContext(AppContext) as AppContextType;
  const employerId = state.userData.user?._id;
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [listOfApplicants, setListOfApplicants] = useState<Student[]>([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const opportunityResponse = await api.get(
          `/opportunities/${params.id}`
        );
        if (opportunityResponse.status === 200) {
          console.log(opportunityResponse);
          const applicantsIds: string[] = opportunityResponse.data.applicants;
          const applicantsObjects: Student[] = [];
          for (const id of applicantsIds) {
            console.log("SEARCH FOR ID", id);
            const studentReponse = await api.get(`/students/${id}/profile`);
            if (studentReponse.status === 200) {
              console.log("STUDE", studentReponse);
              applicantsObjects.push(studentReponse.data);
            }
          }
          console.log(applicantsObjects);
          setListOfApplicants(applicantsObjects);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        toast.error("Algo deu errado ao carregar os candidatos");
      }
    };

    fetchApplicants();
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleRecruit = async (userId: string) => {
    try {
      const response = await api.post("/contracts/request/", {
        userId,
        employerId: employerId,
        opportunityId: params.id,
      });
      if (response.status === 201) {
        toast.success("Proceso de contrato iniciado");
      }
    } catch (error) {
      console.log(error);
      toast.error("Houve um erro ao recrutar candidato, tente mais tarde");
    }
  };

  const handleRefuseApplicant = async (userId: string) => {
    try {
      const response = await api.post("/contracts/refuse/", {
        userId,
        employerId: employerId,
        opportunityId: params.id,
      });
      if (response.status === 201) {
        toast.success("Estudante recusado");
      }
    } catch (error) {
      console.log(error);
      toast.error("Houve um erro ao recrutar candidato, tente mais tarde");
    }
  };

  return (
    <TooltipProvider>
      {isLoading && <Spinner />}
      <div className="w-full self-stretch px-30 pt-6 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-8">
        <div className="w-full inline-flex justify-start items-start gap-3">
          <div className="self-stretch pt-0.5 inline-flex flex-col justify-start items-start gap-1">
            <ChevronLeft
              className="w-5 h-5 text-zinc-400 cursor-pointer"
              onClick={handleBack}
            />
          </div>

          <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start gap-1">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="justify-start text-violet-50 text-xl font-semibold leading-[150%]">
                Candidatos à vaga:
              </div>
              <div className="flex-1 self-stretch justify-start text-violet-500 text-xl font-semibold leading-[150%]">
                UI/UX Designer
              </div>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-flex justify-start items-center gap-1 text-violet-500">
                    <CircleAlert className="h-3.5 w-3.5" />
                    <div className="justify-start text-xs leading-[150%] cursor-default">
                      Você tem 24 dias para recrutar candidatos
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="self-stretch inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch justify-start">
                      <span className="text-violet-50 text-xs leading-[150%]">
                        As vagas no ConectaUFC possuem um prazo de{" "}
                      </span>
                      <span className="text-violet-500 text-xs leading-[150%]">
                        30 dias
                      </span>
                      <span className="text-violet-50 text-xs leading-[150%]">
                        {" "}
                        para a divulgação do resultado. Após esse período, vagas
                        sem um candidato recrutado serão automaticamente
                        marcadas como{" "}
                      </span>
                      <span className="text-violet-500 text-xs leading-[150%]">
                        INATIVAS
                      </span>
                      <span className="text-violet-50 text-xs leading-[150%]">
                        .<br />
                        Esta medida impactará negativamente sua taxa de
                        contratação na plataforma. Para evitar isso, avalie os
                        perfis e recrute ou recuse os candidatos.
                      </span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex-1 self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
              Veja quem se interessou por esta vaga.
              <br />
              Analise os perfis, visualize experiências, projetos e
              certificações, e entre em contato com os candidatos que mais se
              alinham ao que você busca.
            </div>
          </div>
        </div>

        <div className="w-full self-stretch inline-flex flex-col justify-start items-start gap-6">
          {listOfApplicants.length > 0 ? (
            listOfApplicants.map((applicant) => (
              <ApplicantCard
                avatarUrl={""}
                name={applicant.name}
                profileUrl={""}
                bio={applicant.description}
                course={applicant.course}
                enterSemester={applicant.entrySemester}
                variant="default"
                onDecline={() => {
                  handleRefuseApplicant(applicant._id);
                }}
                onRecruit={() => {
                  handleRecruit(applicant._id);
                }}
              />
            ))
          ) : (
            <div className="justify-start text-xs leading-[150%] cursor-default">
              Não há candidatos cadastrados
            </div>
          )}

          {/* <ApplicantCard
            avatarUrl={""}
            name={"Júlia Leal"}
            profileUrl={""}
            bio={
              "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO."
            }
            course={"Análise e Desenvolvimento de Sistemas"}
            enterSemester={"2023.2"}
            variant="recruited"
          />

          <ApplicantCard
            avatarUrl={""}
            name={"Júlia Leal"}
            profileUrl={""}
            bio={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
            course={"Análise e Desenvolvimento de Sistemas"}
            enterSemester={"2023.2"}
            variant="declined"
          /> */}
        </div>
      </div>
    </TooltipProvider>
  );
}
