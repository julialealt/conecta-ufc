"use client";

import Avatar from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/Button";
import { AppContext, AppContextType, Student } from "@/context/appContext";
import { Pen, Plus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "@/app/components/ui/spinner";

import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import api from "@/services/axios";

export default function StudentProfile() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const { state } = useContext(AppContext) as AppContextType;
  const [userData, setUserData] = useState<Student>();
  const [isLoading, setIsLoading] = useState(true);
  const userType = useContext(AppContext)?.state.userType || "";
  const userId = useContext(AppContext)?.state.userData.user?._id;
  //const userData = state.userData.user as Student;

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await testApi.get(`/students/${params.id}/profile`);
        if (response.status === 200) {
          setUserData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error while fetching student profile");
        toast.error("Erro ao carregar perfil do estudante");
      }
    };
    if (userType === "student" && params.id === userId) {
      setUserData(state.userData.user as Student);
      setIsLoading(false);
    } else {
      fetchStudent();
    }
  }, [userType, state]);

  return isLoading ? (
    <>
      <Spinner />
    </>
  ) : (
    <div className="w-full self-stretch px-30 pt-6 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-16">
      <div className="self-stretch w-full inline-flex justify-start items-start gap-6">
        <Avatar imageUrl={""} name={"Jimin"} variant="person" size="lg" />

        <div className="self-stretch w-full inline-flex flex-col justify-center items-start gap-1">
          <div className="justify-start text-white text-xl font-semibold leading-[150%]">
            {userData?.name}
          </div>
        </div>

        {params.id === userId && (
          <Button variant="outline_violet" Icon={Pen} className="p-2.5" />
        )}
      </div>

      <div className="w-full inline-flex flex-col justify-start items-start gap-6">
        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
            Sobre
          </div>
          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
            {userData?.description}
          </div>
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
            Formação acadêmica
          </div>
          <div className="w-[80%] flex justify-between text-zinc-300 text-base font-medium leading-[150%]">
            <div className="flex flex-col">
              <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                Curso
              </div>
              <div className="w-full justify-start text-white text-base font-normal leading-[150%]">
                {userData?.course}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                Semestre de ingresso
              </div>
              <div className="w-full justify-start text-white text-base font-normal leading-[150%]">
                {userData?.entrySemester}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
                Previsão de termino
              </div>
              <div className="w-full justify-start text-white text-base font-normal leading-[150%]">
                {userData?.graduationForecast}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-between">
            <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
              Experiência profissional
            </div>
            <Button variant="filled_icon" Icon={Plus} className="p-2.5  " />
          </div>

          {userData?.experiences && userData?.experiences.length > 0 ? (
            userData?.experiences.map((experience) => (
              <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                <div className=" flex justify-start">
                  <div className=" justify-start text-violet text-xl font-semibold leading-[150%]">
                    {experience.title}
                  </div>
                  <Button
                    variant="icon"
                    Icon={Pen}
                    className="p-2.5  "
                    size="small"
                  />
                </div>
                <div className="pt-5 w-full justify-start text-white text-small font-semibold leading-[150%]">
                  {experience.startDate} - {experience.endDate}
                </div>
                <div className="pt-5 w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                  {experience.description}
                </div>
              </div>
            ))
          ) : (
            <div className="pt-5 w-full justify-start text-white text-small font-semibold leading-[150%]">
              Nenhuma experiência cadastrada.
            </div>
          )}
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-between">
            <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
              Habilidades
            </div>
            <Button variant="filled_icon" Icon={Pen} className="p-2.5  " />
          </div>
          <div className="w-full flex flex-wrap justify-start text-zinc-300 text-base font-medium leading-[150%]">
            {userData?.skills && userData?.skills.length > 0 ? (
              userData?.skills.map((skill) => (
                <div className="mr-[10px] w-fit pt-[10px] pb-[10px] pl-[16px] pr-[16px] border-1 border-solid border-zinc-500 rounded-[8px]">
                  {skill}
                </div>
              ))
            ) : (
              <div className="pt-5 w-full justify-start text-white text-small font-semibold leading-[150%]">
                Nenhuma habilidade cadastrada.
              </div>
            )}
          </div>
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-between">
            <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
              Projetos
            </div>
            <Button variant="filled_icon" Icon={Plus} className="p-2.5" />
          </div>
          {userData?.projects && userData?.projects.length > 0 ? (
            userData?.projects.map((project) => (
              <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                <div className=" flex justify-start">
                  <div className=" justify-start text-violet text-white font-semibold leading-[150%]">
                    {project.name}
                  </div>
                  <Button
                    variant="icon"
                    Icon={Pen}
                    className="p-2.5  "
                    size="small"
                  />
                </div>
                <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                  {project.description}
                </div>
                <div className=" flex justify-start pt-2">
                  <div className=" justify-start text-zinc-100 font-semibold text-xs">
                    {project.type}
                  </div>
                  <div className=" ml-3 justify-start text-violet font-semibold text-xs">
                    {project.link}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="pt-5 w-full justify-start text-white text-small font-semibold leading-[150%]">
              Nenhum projeto cadastrado.
            </div>
          )}
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-between">
            <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
              Artigos publicados
            </div>
            <Button variant="filled_icon" Icon={Plus} className="p-2.5" />
          </div>
          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
            {userData?.articles && userData?.articles.length > 0 ? (
              userData?.articles.map((article) => (
                <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                  <div className=" flex justify-start">
                    <div className=" justify-start text-violet text-white font-semibold leading-[150%]">
                      {article.title}
                    </div>
                    <Button
                      variant="icon"
                      Icon={Pen}
                      className="p-2.5"
                      size="small"
                    />
                  </div>
                  <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                    {article.summary}
                  </div>
                  <div className=" flex justify-start pt-2">
                    {/*  <div className=" justify-start text-zinc-100 font-semibold text-xs">
                      {article.publishedAt.toDateString()}
                    </div> */}
                    <div className=" ml-3 justify-start text-violet font-semibold text-xs">
                      {article.url}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="pt-5 w-full justify-start text-white text-small font-semibold leading-[150%]">
                Nenhum artigo cadastrado.
              </div>
            )}
          </div>
        </div>

        <div className="w-full pt-8 mb-10 border-t border-zinc-500 flex flex-col justify-start items-start gap-2">
          <div className="w-full flex justify-between">
            <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
              Certificados
            </div>
            <Button variant="filled_icon" Icon={Plus} className="p-2.5" />
          </div>
          {userData?.certificates && userData?.certificates.length > 0 ? (
            userData?.certificates.map((certificate) => (
              <div className="w-full flex justify-start text-zinc-300 text-base font-medium leading-[150%]">
                <Avatar
                  imageUrl={""}
                  name={"Certificado"}
                  variant="organization"
                  size="lg"
                />
                <div className="ml-4">
                  <div className="flex justify-start">
                    <div className=" justify-start text-violet text-white font-semibold leading-[150%]">
                      {certificate.title}
                    </div>
                    <Button
                      variant="icon"
                      Icon={Pen}
                      className="p-2.5"
                      size="small"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 text-sm">
                    <span>{certificate.organization}</span>
                    <span>•</span>
                    <span>{certificate.issuedAt.getFullYear()}</span>
                  </div>
                  <Button variant="text">
                    <div className="text-violet font-semibold text-xs">
                      ver certificado
                    </div>
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="pt-5 w-full justify-start text-white text-small font-semibold leading-[150%]">
              Nenhum certificado cadastrado.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
