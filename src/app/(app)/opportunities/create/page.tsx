"use client";

import { Button } from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import Select from "@/app/components/ui/select";
import TextAreaInput from "@/app/components/ui/text-area-input";
import { useContext, useState } from "react";
import { ProtectedRoute } from "@/app/components/protectRoute/ProtectRoute";
import { toast } from "sonner";
import { AppContext, AppContextType, Employer } from "@/context/appContext";
import { useRouter } from "next/navigation";
import { localApi } from "@/services/axios";

export default function CreateOpportunityPage() {
  const router = useRouter();

  const { state } = useContext(AppContext) as AppContextType;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [regime, setRegime] = useState("");
  const [salary, setSalary] = useState("");
  const [workload, setWorkload] = useState("");
  const [endDate, setEndDate] = useState("");
  const employerData: Employer = state.userData.user as Employer;

  const handleCreateOpportunity = async () => {
    try {
      const response = await localApi.post("/opportunities", {
        title,
        description,
        salary: Number(salary),
        weeklyHours: Number(workload),
        workLocation: regime,
        employer: employerData._id,
        endDate,
      });
      if (response.status === 201) {
        toast.success("Vaga criada com sucesso");
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar vaga!");
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <ProtectedRoute allowedRoles={["employer"]}>
      <div className="self-stretch w-full px-28 pt-12 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-8">
        <div className="w-full self-stretch inline-flex flex-col justify-start items-start gap-1">
          <div className="self-stretch justify-start text-violet-50 text-lg font-semibold leading-[150%]">
            Publicar oportunidade
          </div>
          <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">
            Conecte sua vaga aos talentos da universidade pública. Preencha as
            informações para alcançar os perfis certos.
          </div>
        </div>

        <div className="self-stretch w-full inline-flex flex-col justify-start items-start gap-4">
          <Input
            id="title"
            name="title"
            label="Título da vaga*"
            placeholder="Título da vaga"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            status="default"
            errorMessage=""
          />

          <TextAreaInput
            id="description"
            name="description"
            label="Descrição*"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            status="default"
            errorMessage=""
          />

          <div className="self-stretch inline-flex justify-start items-start gap-4">
            <Select
              id="regime"
              name="regime"
              label="Regime*"
              placeholder="Selecione o regime da vaga"
              value={regime}
              options={[
                { value: "remote", label: "Remoto" },
                { value: "hybrid", label: "Híbrido" },
                { value: "in-person", label: "Presencial" },
              ]}
              onChange={(e) => setRegime(e.target.value)}
              status="default"
              errorMessage=""
            />

            <Input
              id="salary"
              name="salary"
              label="Salário ou bolsa*"
              placeholder="Salário ou bolsa"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              status="default"
              errorMessage=""
            />

            <Input
              id="workload"
              name="workload"
              label="Carga horária*"
              placeholder="Carga horária"
              value={workload}
              onChange={(e) => setWorkload(e.target.value)}
              status="default"
              errorMessage=""
            />
          </div>

          <Input
            id="endDate"
            name="endDate"
            label="Data de término de candidaturas*"
            placeholder="Data de término de candidaturas"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            status="default"
            errorMessage=""
            classesInput="w-[calc(100%/3-1rem)]"
          />

          <div className="self-stretch pt-6 inline-flex justify-end items-center gap-4">
            <Button variant="outline_white" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleCreateOpportunity}>
              Publicar
            </Button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
