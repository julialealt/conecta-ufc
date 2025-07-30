import React, { useRef, useState, ChangeEvent, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Upload, File as FileIcon, X } from "lucide-react";

type FileInputProps = {
  label?: string;
  required?: boolean;
  name?: string;
  id?: string;
  status?: "default" | "error";
  errorMessage?: string;
  placeholder?: string;
  classesRoot?: string;
  classesInput?: string;
  onChange?: (file: File | null) => void;
  existingFileName?: string | null;
};

const FileInput: React.FC<FileInputProps> = ({
  label,
  required,
  name = "file-input",
  id = "file-input",
  status = "default",
  errorMessage,
  placeholder = "Nenhum arquivo selecionado",
  classesInput = "",
  classesRoot = "",
  onChange,
  existingFileName,
}) => {
  const [fileInfo, setFileInfo] = useState<File | string | null>(existingFileName || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFileInfo(existingFileName || null);
  }, [existingFileName]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileInfo(file);
    if (onChange) {
      onChange(file);
    }
  };

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  const handleClearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileInfo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (onChange) {
      onChange(null);
    }
  };

  const inputBorderClass =
    status === "error"
      ? "border-red-800 hover:border-red-700"
      : "border-zinc-800 hover:border-zinc-700";

  const displayFileName = typeof fileInfo === 'string' ? fileInfo : fileInfo?.name;

  return (
    <div className={cn("flex w-full flex-col text-zinc-400", classesRoot)}>
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-xs font-normal text-zinc-400"
        >
          {label}
          {required && <span className="ml-0.5 text-red-600">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <div
        onClick={handleContainerClick}
        className={cn(
          "relative flex h-[48px] w-full cursor-pointer items-center justify-between rounded-md border bg-black px-4 py-2 text-sm outline-none transition-all duration-300",
          inputBorderClass,
          classesInput
        )}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          {fileInfo ? <FileIcon className="h-4 w-4 flex-shrink-0 text-zinc-400" /> : <Upload className="h-4 w-4 flex-shrink-0 text-zinc-400" />}
          <span className={cn("truncate", fileInfo ? "text-zinc-50" : "text-zinc-500")}>
            {displayFileName || placeholder}
          </span>
        </div>
        {fileInfo && (
          <button
            type="button"
            onClick={handleClearFile}
            className="rounded-full p-1 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-100"
            aria-label="Remover arquivo"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {status === "error" && errorMessage?.trim() && (
        <div className="w-full self-stretch px-2 pt-1">
          <p className="text-[10px] font-normal leading-[16px] text-red-800">
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileInput;