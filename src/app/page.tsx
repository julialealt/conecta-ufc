"use client";
import { useEffect, useState } from "react";
import { InfoCard } from "./components/ui/info-card";
import { SearchBar } from "./components/ui/search-bar";
import { Opportunity } from "@/types/entities";
import api, { testApi } from "@/services/axios";
import { Employer, Student } from "@/context/appContext";

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
      const response = await testApi.get("/opportunities");
      const listOfAllOpportunities: Opportunity[] = response.data;
      /* listOfAllOpportunities.forEach((opportunity) => {
        const employerId = opportunity.employer;
        console.log(employerId);
        const employerName = employers.find(
          (employer) => employer._id === employerId
        )?.name;
        console.log("AAAAAAAAAA", employerName);
        if (employerName) {
          opportunity.employer = employerName;
        }
      }); */
      setOpportunities(listOfAllOpportunities);
      console.log(listOfAllOpportunities);
      setFetchingOpportunities(false);
    };

    const fetchStudents = async () => {
      const response = await testApi.get("/students/search");
      const listOfStudents: Student[] = response.data;
      console.log(listOfStudents);
      setStudents(listOfStudents);
      setFetchingStudents(false);
    };

    const fetchEmployers = async () => {
      console.log("EMPLOYERSSSSSSSS");
      const response = await testApi.get("/employers");
      const listOfEmployers: Employer[] = response.data;
      console.log(listOfEmployers);
      setEmployers(listOfEmployers);
      setFetchingEmployers(false);
    };

    fetchEmployers();
    fetchOpportunities();
    fetchStudents();
  }, []);

  return (
    <div className="flex items-center pt-23 flex flex-col  gap-8 p-8">
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
                    title={opportunity.title}
                    subtitle={opportunity.employer.name}
                    imageUrl=""
                    student={false}
                    href=""
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
