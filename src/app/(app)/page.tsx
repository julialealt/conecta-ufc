"use client";
import { useEffect, useState } from "react";
import { Opportunity } from "@/types/entities";
import api, { testApi } from "@/services/axios";
import { Employer, Student } from "@/context/appContext";
import { InfoCard } from "../components/ui/info-card";
import { SearchBar } from "../components/ui/search-bar";
import { toast } from "sonner";
import { Spinner } from "../components/ui/spinner";

export default function Home() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [fetchingOpportunities, setFetchingOpportunities] =
    useState<boolean>(true);
  const [fetchingStudents, setFetchingStudents] = useState<boolean>(true);
  const [fetchingEmployers, setFetchingEmployers] = useState<boolean>(true);

  const [searchQuery, setSearchQuery] = useState<string>("");

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
    <main className="w-full bg-zinc-950 flex flex-col items-center pt-6 pb-16 overflow-hidden">
      <div className="w-full max-w-[1200px] px-4 md:px-8 flex flex-col items-center gap-12">
        <SearchBar
          placeholder="Pesquisar alunos, empresas ou oportunidades"
          containerClassName="w-full self-stretch"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          filterActive={null}
          regime=""
          setRegime={() => {}}
          salary=""
          setSalary={() => {}}
          workload=""
          setWorkload={() => {}}
          onFilterOpportunities={() => {}}
          onClearOpportunities={() => {}}
          course=""
          setCourse={() => {}}
          entrySemester=""
          setEntrySemester={() => {}}
          onFilterStudents={() => {}}
          onClearStudents={() => {}}
        />

        <div className="self-stretch inline-flex justify-start items-start gap-12">
          <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch inline-flex flex-col justify-center items-start gap-1">
              <div className="self-stretch justify-start text-violet-50 text-xl font-semibold leading-[150%]">
                Vagas recentes
              </div>
              <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
                As últimas oportunidades publicadas na plataforma
              </div>
            </div>
            <div className="mt-5 flex flex-wrap w-full">
              {fetchingOpportunities ? (
                <Spinner />
              ) : (
                opportunities
                  .slice(0, 12)
                  .map((opportunity) => (
                    <InfoCard
                      key={opportunity._id}
                      title={opportunity.title}
                      subtitle={opportunity.employer.name}
                      imageUrl={opportunity.employer.profileImage || ""}
                      student={false}
                      href={`/opportunities/${opportunity._id}`}
                      className="w-full"
                    />
                  ))
              )}
            </div>
          </div>

          <div className="w-[400px] inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex flex-col justify-start items-start gap-8">
              <div className="self-stretch inline-flex flex-col justify-center items-start gap-1">
                <div className="self-stretch justify-start text-violet-50 text-xl font-semibold leading-[150%]">
                  Alunos em destaque
                </div>
                <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
                  Os talentos que se destacam na nossa comunidade
                </div>
              </div>

              <div className="w-full self-stretch inline-flex flex-col justify-start items-center gap-5">
                {fetchingStudents ? (
                  <Spinner />
                ) : (
                  students
                    .slice(0, 3)
                    .map((student) => (
                      <InfoCard
                        key={student._id}
                        title={student.name}
                        subtitle={student.course}
                        imageUrl={student.profileImage || ""}
                        student={true}
                        href={`/student/${student._id}`}
                        className="w-full"
                      />
                    ))
                )}
              </div>
            </div>

            <div className="self-stretch inline-flex flex-col justify-start items-start gap-8">
              <div className="self-stretch inline-flex flex-col justify-center items-start gap-1">
                <div className="self-stretch justify-start text-violet-50 text-xl font-semibold leading-[150%]">
                  Contratantes em alta
                </div>
                <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
                  As maiores taxas de contratação no ConectaUFC
                </div>
              </div>

              <div className="w-full self-stretch inline-flex flex-col justify-start items-center gap-5">
                {fetchingEmployers ? (
                  <Spinner />
                ) : (
                  employers
                    .slice(0, 2)
                    .map((employer) => (
                      <InfoCard
                        key={employer._id}
                        title={employer.name}
                        subtitle={employer.name}
                        imageUrl={employer.profileImage || ""}
                        student={false}
                        href={`/company/${employer._id}`}
                        className="w-full"
                      />
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
