import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Button from "./ui/Button";
import { Pen, X } from "lucide-react";
import Input from "./ui/input";

export type ContactInfoProps = {
  allowEdit: boolean;
  email: string;
  links: { url: string; label: string }[];
  birthDate: string;
  emailValue: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  linkUrl1?: string;
  linkDescription1?: string;
  onChangeLinkUrl1?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLinkDescription1?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  linkUrl2?: string;
  linkDescription2?: string;
  onChangeLinkUrl2?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLinkDescription2?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  linkUrl3?: string;
  linkDescription3?: string;
  onChangeLinkUrl3?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLinkDescription3?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  birthDateValue: string;
  onChangeBirthDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  allowEdit,
  email,
  links,
  birthDate,
  emailValue,
  onChangeEmail,
  linkUrl1,
  linkDescription1,
  onChangeLinkUrl1,
  onChangeLinkDescription1,
  linkUrl2,
  linkDescription2,
  onChangeLinkUrl2,
  onChangeLinkDescription2,
  linkUrl3,
  linkDescription3,
  onChangeLinkUrl3,
  onChangeLinkDescription3,
  birthDateValue,
  onChangeBirthDate,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="justify-start text-violet-500 text-xs font-medium leading-[150%] cursor-pointer">
          Informações de contato
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Informações de contato</DialogTitle>

          {!allowEdit && (
            <DialogClose asChild>
              <Button variant="text" Icon={X} size="icon" />
            </DialogClose>
          )}

          {allowEdit && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="icon" Icon={Pen} size="icon" />
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Informações de contato</DialogTitle>
                  <DialogClose asChild>
                    <Button variant="text" Icon={X} size="icon" />
                  </DialogClose>
                </DialogHeader>

                <Input
                  id="email"
                  name="email"
                  label="Email*"
                  placeholder="Email"
                  value={emailValue}
                  onChange={onChangeEmail}
                  status="default"
                  errorMessage=""
                />

                <div className="w-full inline-flex flex-col justify-start items-start gap-2">
                  <Input
                    id="linkUrl1"
                    name="linkUrl1"
                    label="Link"
                    placeholder="Link"
                    value={linkUrl1}
                    onChange={onChangeLinkUrl1}
                    status="default"
                    errorMessage=""
                  />
                  <Input
                    id="linkDescription1"
                    name="linkDescription1"
                    placeholder="Data de nascimento"
                    value={linkDescription1}
                    onChange={onChangeLinkDescription1}
                    status="default"
                    errorMessage=""
                  />
                </div>

                <div className="w-full inline-flex flex-col justify-start items-start gap-2">
                  <Input
                    id="linkUrl2"
                    name="linkUrl2"
                    label="Link"
                    placeholder="Link"
                    value={linkUrl2}
                    onChange={onChangeLinkUrl2}
                    status="default"
                    errorMessage=""
                  />
                  <Input
                    id="linkDescription2"
                    name="linkDescription2"
                    placeholder="Data de nascimento"
                    value={linkDescription2}
                    onChange={onChangeLinkDescription2}
                    status="default"
                    errorMessage=""
                  />
                </div>

                <div className="w-full inline-flex flex-col justify-start items-start gap-2">
                  <Input
                    id="linkUrl3"
                    name="linkUrl3"
                    label="Link"
                    placeholder="Link"
                    value={linkUrl3}
                    onChange={onChangeLinkUrl3}
                    status="default"
                    errorMessage=""
                  />
                  <Input
                    id="linkDescription3"
                    name="linkDescription3"
                    placeholder="Data de nascimento"
                    value={linkDescription3}
                    onChange={onChangeLinkDescription3}
                    status="default"
                    errorMessage=""
                  />
                </div>

                <Input
                  id="birthDate"
                  name="birthDate"
                  label="Data de nascimento*"
                  placeholder="Data de nascimento"
                  value={birthDateValue}
                  onChange={onChangeBirthDate}
                  status="default"
                  errorMessage=""
                />

                <div className="self-stretch pt-4 inline-flex justify-between items-center">
                  <DialogClose asChild>
                    <Button variant="outline_white">Cancelar</Button>
                  </DialogClose>
                  <Button variant="primary">Salvar</Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </DialogHeader>

        <div className="self-stretch inline-flex flex-col justify-start items-start gap-4">
          <div className="inline-flex flex-col justify-start items-start gap-1.5">
            <div className="w-96 justify-start text-violet-50 text-sm font-semibold leading-[150%]">
              E-mail
            </div>
            <div className="w-96 justify-start text-violet-50 text-xs font-normal leading-[150%]">
              {email}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-1.5">
            <div className="w-96 justify-start text-violet-50 text-sm font-semibold leading-[150%]">
              Links
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              {links.map((link) => (
                <div
                  key={link.url}
                  className="w-96 h-3.5 inline-flex justify-start items-center gap-1"
                >
                  <Button
                    variant="link"
                    size="small"
                    className="p-0 font-semibold"
                  >
                    {link.url}
                  </Button>
                  <div className="justify-start text-zinc-400 text-xs font-normal leading-[150%]">
                    ({link.label})
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-1.5">
            <div className="w-96 justify-start text-violet-50 text-sm font-semibold leading-[150%]">
              Data de nascimento
            </div>
            <div className="w-96 justify-start text-violet-50 text-xs font-normal leading-[150%]">
              {birthDate}
            </div>
          </div>
        </div>
        <DialogClose asChild>
          <div className="self-stretch inline-flex justify-end items-center">
            <Button variant="outline_white">Voltar</Button>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ContactInfo;
