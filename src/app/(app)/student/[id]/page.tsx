"use client";

import ArticleDialog from "@/app/components/article-dialog";
import CertificateDialog from "@/app/components/certificate-dialog";
import ContactInfo from "@/app/components/contact-info";
import ProfessionalExpDialog from "@/app/components/professioal-exp-dialog";
import ProjectDialog from "@/app/components/project-dialog";
import SkillsDialog from "@/app/components/skills-dialog";
import Avatar from "@/app/components/ui/avatar";
import Button from "@/app/components/ui/Button";
import {
  AppContext,
  type AppContextType,
  type Student,
} from "@/context/appContext";
import { localApi } from "@/services/axios";
import { Pen } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export default function StudentProfile() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const { state } = useContext(AppContext) as AppContextType;
  const [userData, setUserData] = useState<Student>();
  const [isLoading, setIsLoading] = useState(true);
  const userType = useContext(AppContext)?.state.userType || "";
  const userId = useContext(AppContext)?.state.userData.user?._id;

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await localApi.get(`/students/${params.id}/profile`);
        if (response.status === 200) {
          setUserData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error while fetching student profile: ", error);
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
    <div className="w-full self-stretch px-30 pt-6 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-16"></div>
  ) : (
    <div className="w-full self-stretch px-30 pt-6 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-16">
      <div className="self-stretch w-full inline-flex justify-start items-start gap-6">
        <Avatar
          imageUrl={userData?.profileImage}
          name={userData?.name || ""}
          variant="person"
          size="lg"
        />

        <div className="self-stretch w-full inline-flex flex-col justify-center items-start gap-1">
          <div className="justify-start text-white text-xl font-semibold leading-[150%]">
            {userData?.name}
          </div>

          <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
            {userData?.course} {/** depois mudar para description */}
          </div>

          <ContactInfo
            allowEdit={params.id === userId}
            email={userData?.email || ""}
            links={[
              { url: "github.com/julialealt", label: "Portfólio" },
              { url: "behance.net/julialealt", label: "Portfólio" },
              { url: "lattes.cnpq.com.br/123456789", label: "Currículo" },
            ]}
            birthDate="27/09/2002"
            emailValue=""
            onChangeEmail={() => {}}
            linkUrl1=""
            onChangeLinkUrl1={() => {}}
            linkDescription1=""
            onChangeLinkDescription1={() => {}}
            birthDateValue="27/09/2002"
            onChangeBirthDate={() => {}}
          />
        </div>

        {params.id === userId && (
          <Button
            variant="outline_violet"
            Icon={Pen}
            size="icon"
            onClick={() => router.push(`/student/${userId}/update`)}
          />
        )}
      </div>

      <div className="w-full inline-flex flex-col justify-start items-start gap-12">
        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
            Sobre
          </div>
          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
            {userData?.about}
          </div>
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
            Descrição
          </div>
          <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
            {userData?.description}
          </div>
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="w-full justify-start text-white text-xl font-semibold leading-[150%]">
            Formação acadêmica
          </div>
          <div className="w-full inline-flex justify-start items-start gap-8">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">
                Curso
              </div>
              <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">
                {userData?.course}
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">
                Semestre de ingresso
              </div>
              <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">
                {userData?.entrySemester}
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-white text-lg font-semibold leading-[150%]">
                Previsão de término
              </div>
              <div className="self-stretch justify-start text-zinc-300 text-base font-medium leading-[150%]">
                {userData?.graduationForecast}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-white text-xl font-semibold leading-[150%]">
              Experiência profissional
            </div>
            <ProfessionalExpDialog
              type="create"
              title=""
              onChangeTitle={() => {}}
              organization=""
              onChangeOrganization={() => {}}
              description=""
              onChangeDescription={() => {}}
              monthStart=""
              onChangeMonthStart={() => {}}
              yearStart=""
              onChangeYearStart={() => {}}
              monthEnd=""
              onChangeMonthEnd={() => {}}
              yearEnd=""
              onChangeYearEnd={() => {}}
              onConfirmButtonClick={() => {}}
            />
          </div>
          {userData?.experiences && userData.experiences.length > 0 ? (
            userData.experiences.map((experience) => (
              <div
                key={experience._id}
                className="flex flex-col justify-start items-start gap-2"
              >
                <div className="self-stretch inline-flex justify-start items-center gap-1">
                  <div className="justify-start text-violet-500 text-lg font-semibold leading-[150%]">
                    {experience.title} - {experience.company}
                  </div>
                  <ProfessionalExpDialog
                    type="edit"
                    title=""
                    onChangeTitle={() => {}}
                    organization=""
                    onChangeOrganization={() => {}}
                    description=""
                    onChangeDescription={() => {}}
                    monthStart="1"
                    onChangeMonthStart={() => {}}
                    yearStart="2024"
                    onChangeYearStart={() => {}}
                    monthEnd="12"
                    onChangeMonthEnd={() => {}}
                    yearEnd="2025"
                    onChangeYearEnd={() => {}}
                    onConfirmButtonClick={() => {}}
                  />
                </div>
                <div className="w-full justify-start text-white text-base font-semibold leading-[150%] italic">
                  {experience.startDate} - {experience.endDate}
                </div>
                <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                  {experience.description}
                </div>
              </div>
            ))
          ) : (
            <div className="pt-5 w-full justify-start text-zinc-400 text-sm leading-[150%]">
              Nenhuma experiência cadastrada.
            </div>
          )}
        </div>

        <div className="w-full self-stretch pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-white text-xl font-semibold leading-9">
              Habilidades
            </div>
            <SkillsDialog
              skills={[
                "React",
                "React Native",
                "JavaScript",
                "TypeScript",
                "Figma",
                "Python",
                "Salesforce",
                "Inglês fluente",
              ]}
              onAddSkill={() => {}}
              onRemoveSkill={() => {}}
              onConfirmButtonClick={() => {}}
            />
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-2 flex-wrap content-start">
            {userData?.skills && userData?.skills.length > 0 ? (
              userData?.skills.map((skill, index) => (
                <Button key={index} variant="ghost">
                  {skill}
                </Button>
              ))
            ) : (
              <div className="pt-5 w-full justify-start text-zinc-400 text-sm leading-[150%]">
                Nenhuma habilidade cadastrada.
              </div>
            )}
          </div>
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-white text-xl font-semibold leading-[150%]">
              Projetos
            </div>
            <ProjectDialog
              type="create"
              title=""
              onChangeTitle={() => {}}
              description=""
              onChangeDescription={() => {}}
              category=""
              onChangeCategory={() => {}}
              link=""
              onChangeLink={() => {}}
              onConfirmButtonClick={() => {}}
            />
          </div>

          {userData?.projects && userData?.projects.length > 0 ? (
            userData?.projects.map((project) => (
              <div
                key={project._id}
                className="inline-flex flex-col justify-start items-start gap-2"
              >
                <div className="self-stretch inline-flex justify-start items-center gap-1">
                  <div className="justify-start text-white text-lg font-semibold leading-[150%]">
                    {project.name}
                  </div>
                  <ProjectDialog
                    type="edit"
                    title=""
                    onChangeTitle={() => {}}
                    description=""
                    onChangeDescription={() => {}}
                    category=""
                    onChangeCategory={() => {}}
                    link=""
                    onChangeLink={() => {}}
                    onConfirmButtonClick={() => {}}
                  />
                </div>
                <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                  {project.description}
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2">
                  <div className="justify-start text-zinc-500 text-sm font-medium leading-[150%]">
                    {project.type}
                  </div>
                  <div className="justify-start text-violet-500 text-sm font-medium leading-[150%]">
                    {project.link}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="pt-5 w-full justify-start text-zinc-400 text-sm leading-[150%]">
              Nenhum projeto cadastrado.
            </div>
          )}
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-white text-xl font-semibold leading-[150%]">
              Artigos publicados
            </div>
            <ArticleDialog
              type="create"
              title=""
              onChangeTitle={() => {}}
              description=""
              onChangeDescription={() => {}}
              link=""
              onChangeLink={() => {}}
              onConfirmButtonClick={() => {}}
            />
          </div>

          {userData?.articles && userData?.articles.length > 0 ? (
            userData?.articles.map((article) => (
              <div
                key={article._id}
                className="inline-flex flex-col justify-start items-start gap-2"
              >
                <div className="self-stretch inline-flex justify-start items-center gap-1">
                  <div className="justify-start text-white text-lg font-semibold leading-[150%]">
                    {article.title}
                  </div>
                  <ArticleDialog
                    type="edit"
                    title=""
                    onChangeTitle={() => {}}
                    description=""
                    onChangeDescription={() => {}}
                    link=""
                    onChangeLink={() => {}}
                    onConfirmButtonClick={() => {}}
                  />
                </div>
                <div className="w-full justify-start text-zinc-300 text-base font-medium leading-[150%]">
                  {article.summary}
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2">
                  <div className="justify-start text-zinc-500 text-sm font-medium leading-[150%]">
                    Artigo publicado
                  </div>
                  <div className="justify-start text-violet-500 text-sm font-medium leading-[150%]">
                    {article.url}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="pt-5 w-full justify-start text-zinc-400 text-sm leading-[150%]">
              Nenhum artigo cadastrado.
            </div>
          )}
        </div>

        <div className="w-full pt-8 border-t border-zinc-500 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-white text-xl font-semibold leading-[150%]">
              Certificados
            </div>
            <CertificateDialog
              type="create"
              title=""
              onChangeTitle={() => {}}
              organization=""
              onChangeOrganization={() => {}}
              certificate=""
              onChangeCertificate={() => {}}
              certificationDate=""
              onChangeCertificationDate={() => {}}
              onConfirmButtonClick={() => {}}
            />
          </div>

          {userData?.certificates && userData?.certificates.length > 0 ? (
            userData?.certificates.map((certificate) => (
              <div
                key={certificate._id}
                className="self-stretch inline-flex justify-start items-start gap-4"
              >
                <Avatar
                  variant="organization"
                  name={certificate.organization}
                  size="md"
                />
                <div className="self-stretch inline-flex flex-col justify-start items-start">
                  <div className="self-stretch inline-flex justify-start items-center gap-1">
                    <div className="justify-start text-white text-lg font-semibold leading-[150%]">
                      {certificate.title}
                    </div>
                    <CertificateDialog
                      type="edit"
                      title=""
                      onChangeTitle={() => {}}
                      organization=""
                      onChangeOrganization={() => {}}
                      certificate=""
                      onChangeCertificate={() => {}}
                      certificationDate=""
                      onChangeCertificationDate={() => {}}
                      onConfirmButtonClick={() => {}}
                    />
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-2">
                    <div className="justify-start text-zinc-300 text-sm font-medium leading-[150%]">
                      {certificate.organization}
                    </div>
                    <div className="justify-start text-zinc-300 text-sm font-medium leading-[150%]">
                      •
                    </div>
                    <div className="justify-start text-zinc-300 text-sm font-medium leading-[150%]">
                      {certificate.issuedAt.getFullYear()}
                    </div>
                  </div>
                  <div className="justify-start text-violet-600 text-xs font-medium leading-[150%]">
                    Ver certificado
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="pt-5 w-full justify-start text-zinc-400 text-sm leading-[150%]">
              Nenhum certificado cadastrado.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
