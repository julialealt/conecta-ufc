"use client";
import { useEffect, useState } from "react";
import { Opportunity } from "@/types/entities";
import api from "@/services/axios";
import { Employer, Student } from "@/context/appContext";
import { InfoCard } from "../components/ui/info-card";
import { SearchBar } from "../components/ui/search-bar";

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
      const response = await api.get("/opportunities");
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
      const response = await api.get("/students/search");
      const listOfStudents: Student[] = response.data;
      console.log(listOfStudents);
      setStudents(listOfStudents);
      setFetchingStudents(false);
    };

    const fetchEmployers = async () => {
      console.log("EMPLOYERSSSSSSSS");
      const response = await api.get("/employers");
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
    <main className="w-full min-h-screen bg-zinc-950 flex flex-col items-center pt-6 pb-16">
      <div className="w-full max-w-[1200px] px-4 md:px-8 flex flex-col items-center gap-12">
        <SearchBar
          placeholder="Pesquisar alunos, empresas ou oportunidades"
          onFilterClick={() => { }}
          containerClassName="w-full max-w-[1200px] self-stretch"
        />

        <div className="max-w-[1200px] self-stretch inline-flex justify-start items-start gap-12">
          <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch inline-flex flex-col justify-center items-start gap-1">
              <div className="self-stretch justify-start text-violet-50 text-xl font-semibold leading-[150%]">Vagas recentes</div>
              <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">As últimas oportunidades publicadas na plataforma</div>
            </div>

            <div className="w-full self-stretch inline-flex flex-col justify-start items-start gap-5">
              <div className="w-full self-stretch inline-flex justify-start items-center gap-5">
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
              </div>

              <div className="w-full self-stretch inline-flex justify-start items-center gap-5">
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
              </div>

              <div className="w-full self-stretch inline-flex justify-start items-center gap-5">
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
              </div>

              <div className="w-full self-stretch inline-flex justify-start items-center gap-5">
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
              </div>

              <div className="w-full self-stretch inline-flex justify-start items-center gap-5">
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
              </div>

              <div className="w-full self-stretch inline-flex justify-start items-center gap-5">
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
                <InfoCard
                  title={"UI/UX Designer"}
                  subtitle={"IBM"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="w-[400px] inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex flex-col justify-start items-start gap-8">
              <div className="self-stretch inline-flex flex-col justify-center items-start gap-1">
                <div className="self-stretch justify-start text-violet-50 text-xl font-semibold leading-[150%]">Alunos em destaque</div>
                <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">Os talentos que se destacam na nossa comunidade</div>
              </div>

              <div className="self-stretch inline-flex flex-col justify-start items-end gap-5">
                <InfoCard
                  title={"Júlia Leal"}
                  subtitle={"Ciência da Computação"}
                  imageUrl=""
                  student
                  href=""
                  className="w-full"
                />
                <InfoCard
                  title={"Rafael Facundo"}
                  subtitle={"Filosofia"}
                  imageUrl=""
                  student
                  href=""
                  className="w-full"
                />
                <InfoCard
                  title={"Gabriel Mota"}
                  subtitle={"Ciência de Dados"}
                  imageUrl=""
                  student
                  href=""
                  className="w-full"
                />
              </div>
            </div>

            <div className="self-stretch inline-flex flex-col justify-start items-start gap-8">
              <div className="self-stretch inline-flex flex-col justify-center items-start gap-1">
                <div className="self-stretch justify-start text-violet-50 text-xl font-semibold leading-[150%]">Contratantes em alta</div>
                <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">As maiores taxas de contratação no ConectaUFC</div>
              </div>

              <div className="self-stretch inline-flex flex-col justify-start items-end gap-5">
                <InfoCard
                  title={"Insight Data Science Lab"}
                  subtitle={"Laboratório de pesquisa em Ciência de Dados"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
                <InfoCard
                  title={"GREat"}
                  subtitle={"Grupo de Redes de Computadores, Engenharia de Software"}
                  imageUrl=""
                  student={false}
                  href=""
                  className="w-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
