"use client";
import { useEffect, useState } from "react";
import { Opportunity } from "@/types/entities";
import api, { testApi } from "@/services/axios";
import { Employer, Student } from "@/context/appContext";
import { InfoCard } from "../components/ui/info-card";
import { SearchBar } from "../components/ui/search-bar";
import { toast } from "sonner";

export default function Home() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [fetchingOpportunities, setFetchingOpportunities] =
    useState<boolean>(true);
  const [fetchingStudents, setFetchingStudents] = useState<boolean>(true);
  const [fetchingEmployers, setFetchingEmployers] = useState<boolean>(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await testApi.get("/opportunities");
        const listOfAllOpportunities: Opportunity[] = response.data;
        setOpportunities(listOfAllOpportunities);
      } catch (error) {
        console.log(error);
        toast.error("Algo deu errado ao tentar carregas as oportunidades");
      } finally {
        setFetchingOpportunities(false);
      }
    };

    const fetchStudents = async () => {
      try {
        const response = await testApi.get("/students/search");
        const listOfStudents: Student[] = response.data;
        setStudents(listOfStudents);
      } catch (error) {
        console.log(error);
        toast.error("Algo deu errado ao tentar carregas os estudantes");
      } finally {
        setFetchingStudents(false);
      }
    };

    const fetchEmployers = async () => {
      try {
        const response = await testApi.get("/employers");
        const listOfEmployers: Employer[] = response.data;
        setEmployers(listOfEmployers);
      } catch (error) {
        console.log(error);
        toast.error("Algo deu errado ao tentar carregas os contratantes");
      } finally {
        setFetchingEmployers(false);
      }
    };

    fetchEmployers();
    fetchOpportunities();
    fetchStudents();
  }, []);

  return (
    <div className="flex items-center pt-6 flex-col  gap-8 p-8">
      <div className="w-[80%] h-full flex flex-col gap-10">
        <SearchBar
          placeholder="Pesquisar alunos, empresas ou oportunidades"
          onFilterClick={() => {}}
        />
        <div className="w-full flex ">
          <div className="w-[60%]">
            <div className="">
              <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                Vagas recentes
              </div>
              <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                As últimas oportunidades publicadas na plataforma
              </div>
            </div>
            <div className="mt-5 flex flex-wrap w-full">
              {!fetchingOpportunities && opportunities.length > 0 ? (
                opportunities.map((opportunity) => (
                  <InfoCard
                    key={opportunity._id}
                    title={opportunity.title}
                    subtitle={opportunity.employer.name}
                    imageUrl=""
                    student={false}
                    href={`/opportunities/${opportunity._id}`}
                    className="m-[10px] w-90"
                  />
                ))
              ) : fetchingOpportunities ? (
                <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                  Carregando vagas...
                </div>
              ) : (
                <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                  Nenhuma vaga encontrada...
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <div>
                <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                  Alunos destaques
                </div>
                <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                  Os talentos que se destacam na nossa comunidade
                </div>
              </div>
              <div className="mt-5  flex flex-col w-full">
                {!fetchingStudents && students.length > 0 ? (
                  students
                    .slice(0, 5)
                    .map((student) => (
                      <InfoCard
                        key={student._id}
                        title={student.name}
                        subtitle={student.course}
                        imageUrl=""
                        student={true}
                        href=""
                        className="m-[10px] w-90"
                      />
                    ))
                ) : fetchingStudents ? (
                  <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                    Carregando estudantes...
                  </div>
                ) : (
                  <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                    Nenhum estudante encontrado...
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <div>
                <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                  Contrantes em alta
                </div>
                <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                  As maiores taxas de contratação no ConectaUFC
                </div>
              </div>
              <div className="mt-5 flex flex-col w-full">
                {!fetchingEmployers && employers.length > 0 ? (
                  employers
                    .slice(0, 5)
                    .map((employer) => (
                      <InfoCard
                        key={employer._id}
                        title={employer.name}
                        subtitle={employer.description.slice(0, 21) + "..."}
                        imageUrl=""
                        student={false}
                        href=""
                        className="m-[10px] w-90"
                      />
                    ))
                ) : fetchingEmployers ? (
                  <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                    Carregando contratantes...
                  </div>
                ) : (
                  <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                    Nenhum contratante encontrado...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
