import React, { useState } from 'react';
import closeButton from "../../../public/assets/close-button.svg"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Pencil, Plus, X } from 'lucide-react';
import Input from './ui/input';
import Image from 'next/image';

export type SkillsDialogProps = {
  skills: string[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
  onConfirmButtonClick: () => void;
};

const SkillsDialog: React.FC<SkillsDialogProps> = ({
  skills,
  onAddSkill,
  onRemoveSkill,
  onConfirmButtonClick,
}) => {
  const [skill, setSkill] = useState('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" Icon={Pencil} size="icon" />
      </DialogTrigger>

      <DialogContent className="w-[740px]">
        <DialogHeader>
          <DialogTitle>Editar habilidades</DialogTitle>
          <DialogClose asChild>
            <Button variant="text" Icon={X} size="icon" />
          </DialogClose>
        </DialogHeader>

        <div className="w-full flex-1 space-y-4 overflow-y-auto px-6">
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch justify-start text-zinc-400 text-xs font-normal leading-[150%]">Habilidades</div>

            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <Input
                id="skill"
                name="skill"
                placeholder="Habilidade"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                status="default"
                errorMessage=""
              />
              <Button variant="outline_violet" size="icon" Icon={Plus} onClick={() => onAddSkill(skill)} />
            </div>

            <div className="self-stretch inline-flex justify-start items-start gap-1.5 flex-wrap content-start">
              {skills.map((s, index) => (
                <div key={index} className='relative'>
                  <Image src={closeButton} alt="" className='w-4 h-4 absolute right-[-3px] top-[-4px] cursor-pointer' onClick={() => onRemoveSkill(s)} />
                  <Button variant="ghost">{s}</Button>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="self-stretch pt-4 pb-2.5 inline-flex justify-end items-center gap-2">
          <DialogClose asChild>
            <Button variant="outline_white">Cancelar</Button>
          </DialogClose>
          <Button variant="primary" onClick={onConfirmButtonClick}>Salvar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillsDialog;