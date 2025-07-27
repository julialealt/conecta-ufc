"use client";

import { Button } from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import Select from "@/app/components/ui/select";
import TextAreaInput from "@/app/components/ui/text-area-input";
import { useState } from "react";

export default function CreateOpportunityPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [regime, setRegime] = useState('')
  const [salary, setSalary] = useState('')
  const [workload, setWorkload] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <div className="self-stretch w-full px-28 pt-12 pb-16 bg-zinc-950 inline-flex flex-col justify-start items-start gap-8">
      <div className="w-full self-stretch inline-flex flex-col justify-start items-start gap-1">
        <div className="self-stretch justify-start text-violet-50 text-lg font-semibold leading-[150%]">Publicar oportunidade</div>
        <div className="self-stretch justify-start text-zinc-300 text-sm font-medium leading-[150%]">Conecte sua vaga aos talentos da universidade pública. Preencha as informações para alcançar os perfis certos.</div>
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
              { value: 'remote', label: 'Remoto' },
              { value: 'hybrid', label: 'Híbrido' },
              { value: 'in-person', label: 'Presencial' },
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
          <Button variant="outline_white">Cancelar</Button>
          <Button variant="primary">Publicar</Button>
        </div>
      </div>
    </div>
  )
}