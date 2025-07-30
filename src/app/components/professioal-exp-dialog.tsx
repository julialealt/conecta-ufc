import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Pencil, Plus, X } from 'lucide-react';
import Input from './ui/input';
import TextAreaInput from './ui/text-area-input';
import Select from './ui/select';

export type ProfessionalExpDialogProps = {
  type: 'create' | 'edit';
  title: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  organization: string;
  onChangeOrganization: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  onChangeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  monthStart: string;
  onChangeMonthStart: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  yearStart: string;
  onChangeYearStart: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  monthEnd: string;
  onChangeMonthEnd: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  yearEnd: string;
  onChangeYearEnd: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onConfirmButtonClick: () => void;
};


const ProfessionalExpDialog: React.FC<ProfessionalExpDialogProps> = ({
  type,
  title,
  onChangeTitle,
  organization,
  onChangeOrganization,
  description,
  onChangeDescription,
  monthStart,
  onChangeMonthStart,
  yearStart,
  onChangeYearStart,
  monthEnd,
  onChangeMonthEnd,
  yearEnd,
  onChangeYearEnd,
  onConfirmButtonClick,
}) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        {type === 'create' ? (
          <Button variant="primary" Icon={Plus} size="icon" />
        ) : (
          <Button variant="icon" Icon={Pencil} size="icon" />
        )}
      </DialogTrigger>

      <DialogContent className="w-[740px]">
        <DialogHeader>
          <DialogTitle>{type === 'create' ? 'Adicionar' : 'Editar'} experiência profissional</DialogTitle>
          <DialogClose asChild>
            <Button variant="text" Icon={X} size="icon" />
          </DialogClose>
        </DialogHeader>

        <div className="w-full flex-1 space-y-4 overflow-y-auto px-6">
          <Input
            id="title"
            name="title"
            label="Título*"
            placeholder="Título"
            value={title}
            onChange={onChangeTitle}
            status="default"
            errorMessage=""
          />

          <Input
            id="organization"
            name="organization"
            label="Empresa ou organização*"
            placeholder="Empresa ou organização"
            value={organization}
            onChange={onChangeOrganization}
            status="default"
            errorMessage=""
          />

          <TextAreaInput
            id="description"
            name="description"
            label="Descrição*"
            placeholder="Descrição"
            value={description}
            onChange={onChangeDescription}
            status="default"
            errorMessage=""
          />

          <div className="w-full self-stretch inline-flex justify-start items-end gap-2">
            <Select
              id="monthStart"
              name="monthStart"
              label="Início*"
              placeholder="Mês"
              value={monthStart}
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
              onChange={onChangeMonthStart}
              status="default"
              errorMessage=""
            />
            <Select
              id="yearStart"
              name="yearStart"
              placeholder="Ano"
              value={yearStart}
              options={[
                { value: '2023', label: '2023' },
                { value: '2024', label: '2024' },
                { value: '2025', label: '2025' },
                { value: '2026', label: '2026' }, // ... adicione mais anos 
              ]}
              onChange={onChangeYearStart}
              status="default"
              errorMessage=""
            />
          </div>

          <div className="w-full self-stretch inline-flex justify-start items-end gap-2">
            <Select
              id="monthEnd"
              name="monthEnd"
              label="Início*"
              placeholder="Mês"
              value={monthEnd}
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
              onChange={onChangeMonthEnd}
              status="default"
              errorMessage=""
            />
            <Select
              id="yearEnd"
              name="yearEnd"
              placeholder="Ano"
              value={yearEnd}
              options={[
                { value: '2023', label: '2023' },
                { value: '2024', label: '2024' },
                { value: '2025', label: '2025' },
                { value: '2026', label: '2026' }, // ... adicione mais anos 
              ]}
              onChange={onChangeYearEnd}
              status="default"
              errorMessage=""
            />
          </div>
        </div>

        <div className="self-stretch pt-4 pb-2.5 inline-flex justify-end items-center gap-2">
          <DialogClose asChild>
            <Button variant="outline_white">Cancelar</Button>
          </DialogClose>
          <Button variant="primary" onClick={onConfirmButtonClick}>{type === 'create' ? 'Adicionar' : 'Salvar'}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfessionalExpDialog;