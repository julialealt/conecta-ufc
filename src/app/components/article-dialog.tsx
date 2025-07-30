import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Pencil, Plus, X } from 'lucide-react';
import Input from './ui/input';
import TextAreaInput from './ui/text-area-input';

export type ArticleDialogProps = {
  type: 'create' | 'edit';
  title: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  onChangeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  link: string;
  onChangeLink: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmButtonClick: () => void;
};


const ArticleDialog: React.FC<ArticleDialogProps> = ({
  type,
  title,
  onChangeTitle,
  description,
  onChangeDescription,
  link,
  onChangeLink,
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
          <DialogTitle>{type === 'create' ? 'Adicionar' : 'Editar'} artigo</DialogTitle>
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

          <Input
            id="link"
            name="link"
            label="Link*"
            placeholder="Link"
            value={link}
            onChange={onChangeLink}
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

export default ArticleDialog;