"use client";

import { Button } from "@/app/components/ui/button";
import Checkbox from "@/app/components/ui/checkbox";
import Input from "@/app/components/ui/input";
import { PhotoInput } from "@/app/components/ui/photo-input";
import Select from "@/app/components/ui/select";
import TextAreaInput from "@/app/components/ui/text-area-input";
import { courseOptions } from "@/constants/courses";
import { AppContext, type AppContextType, type Student } from "@/context/appContext";
import { localApi } from "@/services/axios";
import { ChevronLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export default function CompanyProfileUpdatePage() {
  const router = useRouter()
  const params = useParams<{ id: string }>();

  const { state } = useContext(AppContext) as AppContextType;
  const [userData, setUserData] = useState<Student>();
  const [isLoading, setIsLoading] = useState(true);
  const userType = useContext(AppContext)?.state.userType || "";
  const userId = useContext(AppContext)?.state.userData.user?._id;

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [about, setAbout] = useState('')
  const [course, setCourse] = useState('')
  const [entryYear, setEntryYear] = useState('')
  const [entrySemester, setEntrySemester] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [graduated, setGraduated] = useState(false)

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
        toast.error("Erro ao carregar informações");
      }
    };
    if (userType === "student" && params.id === userId) {
      setUserData(state.userData.user as Student);
      setIsLoading(false);
    } else {
      fetchStudent();
    }
  }, [userType, state]);

  const handlePhotoChange = (file: File) => {
    console.log("Novo logo de organização selecionado:", file.name);
    // Lógica de upload...
  }

  const handleBack = () => {
    router.push(`/student/${userId}`);
  }

  const handleResetPassword = () => {
    router.push('/reset-password');
  }

  return (
    <div className="self-stretch w-full px-30 pt-6 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-8">
      <div className="w-full inline-flex justify-start items-start gap-3">
        <div className="self-stretch pt-0.5 inline-flex flex-col justify-start items-start gap-1">
          <ChevronLeft className="w-5 h-5 text-zinc-400 cursor-pointer" onClick={handleBack} />
        </div>

        <div className="w-full self-stretch inline-flex flex-col justify-center items-start gap-1">
          <div className="self-stretch justify-start text-violet-50 text-lg font-semibold leading-[150%]">Editar perfil</div>
          <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">Atualize suas informações e aumente suas oportunidades.</div>
        </div>

        <div className="self-stretch inline-flex justify-start items-start gap-2">
          <Button variant="outline_violet" onClick={handleResetPassword}>Redefinir senha</Button>
        </div>
      </div>

      <div className="self-stretch w-full inline-flex flex-col justify-start items-start gap-12">
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-start text-white text-base font-medium leading-[150%]">Sobre</div>

          <PhotoInput
            variant="student"
            onImageChange={handlePhotoChange}
            label="Perfil"
            status="default"
            errorMessage=""
          />

          <Input
            id="name"
            name="name"
            label="Nome*"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            status="default"
            errorMessage=""
          />

          <Input
            id="description"
            name="description"
            label="Descrição*"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            status="default"
            errorMessage=""
          />

          <TextAreaInput
            id="about"
            name="about"
            label="Sobre*"
            placeholder="Sobre"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            status="default"
            errorMessage=""
          />
        </div>

        <div className="self-stretch inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch justify-start text-white text-base font-medium leading-[150%]">Formação acadêmica</div>

          <Select
            id="course"
            name="course"
            label="Curso*"
            placeholder="Curso"
            value={course}
            options={courseOptions}
            onChange={(e) => setCourse(e.target.value)}
            status="default"
            errorMessage=""
          />

          <div className="self-stretch inline-flex justify-start items-start gap-8">
            <div className="w-full self-stretch inline-flex justify-start items-end gap-2">
              <Select
                id="entryYear"
                name="entryYear"
                label="Semestre de ingresso*"
                placeholder="Ano"
                value={entryYear}
                options={[
                  { value: '2020', label: '2020' },
                  { value: '2021', label: '2021' },
                  { value: '2022', label: '2022' },
                  { value: '2023', label: '2023' }, // ...
                ]}
                onChange={(e) => setEntryYear(e.target.value)}
                status="default"
                errorMessage=""
              />
              <Select
                id="entrySemester"
                name="entrySemester"
                placeholder="Semestre"
                value={entrySemester}
                options={[
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                ]}
                onChange={(e) => setEntrySemester(e.target.value)}
                status="default"
                errorMessage=""
              />
            </div>

            <div className="w-full self-stretch inline-flex justify-start items-end gap-2">
              <Select
                id="month"
                name="month"
                label={graduated ? "Semestre de término*" : "Previsão de término*"}
                placeholder="Mês"
                value={month}
                options={[
                  { value: '1', label: 'Janeiro' },
                  { value: '2', label: 'Fevereiro' },
                  { value: '3', label: 'Março' },
                  { value: '4', label: 'Abril' },
                  { value: '5', label: 'Maio' },
                  { value: '6', label: 'Junho' },
                  { value: '7', label: 'Julho' },
                  { value: '8', label: 'Agosto' },
                  { value: '9', label: 'Setembro' },
                  { value: '10', label: 'Outubro' },
                  { value: '11', label: 'Novembro' },
                  { value: '12', label: 'Dezembro' },
                ]}
                onChange={(e) => setMonth(e.target.value)}
                status="default"
                errorMessage=""
              />
              <Select
                id="year"
                name="year"
                placeholder="Ano"
                value={year}
                options={[
                  { value: '2023', label: '2023' },
                  { value: '2024', label: '2024' },
                  { value: '2025', label: '2025' },
                  { value: '2026', label: '2026' }, // ... adicione mais anos 
                ]}
                onChange={(e) => setYear(e.target.value)}
                status="default"
                errorMessage=""
              />
            </div>
          </div>

          <Checkbox
            label="Sou aluno já formado pela UFC"
            checked={graduated}
            onChange={() => setGraduated(!graduated)}
          />
        </div>

        <div className="self-stretch pt-6 inline-flex justify-between items-center">
          <Button variant="danger">Excluir conta</Button>

          <div className="inline-flex justify-start items-center gap-4">
            <Button variant="outline_white">Cancelar</Button>
            <Button variant="primary">Salvar alterações</Button>
          </div>
        </div>
      </div>
    </div>
  )
}