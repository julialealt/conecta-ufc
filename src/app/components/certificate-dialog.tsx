import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Pencil, Plus, X } from 'lucide-react';
import Input from './ui/input';
import FileInput from './ui/file-input';

export type CertificateDialogProps = {
  type: 'create' | 'edit';
  title: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  organization: string;
  onChangeOrganization: (e: React.ChangeEvent<HTMLInputElement>) => void;
  certificate: string;
  onChangeCertificate: (file: File | null) => void;
  certificationDate: string;
  onChangeCertificationDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmButtonClick: () => void;
};


const CertificateDialog: React.FC<CertificateDialogProps> = ({
  type,
  title,
  onChangeTitle,
  organization,
  onChangeOrganization,
  certificate,
  onChangeCertificate,
  certificationDate,
  onChangeCertificationDate,
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
          <DialogTitle>{type === 'create' ? 'Adicionar' : 'Editar'} certificado</DialogTitle>
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

          <FileInput
            id="certificate"
            name="certificate"
            label="Certificado*"
            placeholder="Anexe o certificado aqui"
            existingFileName={certificate}
            onChange={onChangeCertificate}
            status="default"
            errorMessage=""
          />

          <Input
            id="certificationDate"
            name="certificationDate"
            label="Data de emissão*"
            placeholder="Data de emissão"
            value={certificationDate}
            onChange={onChangeCertificationDate}
            status="default"
            errorMessage=""
          />
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

export default CertificateDialog;