"use client";

import React, { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import { Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PhotoInputProps {
  variant: 'student' | 'organization';
  existingImageUrl?: string | null;
  onImageChange: (file: File) => void;
  className?: string;
  label?: string;
  status?: 'default' | 'error';
  errorMessage?: string;
}

export const PhotoInput: React.FC<PhotoInputProps> = ({
  variant,
  existingImageUrl,
  onImageChange,
  className,
  label = "Perfil",
  status = 'default',
  errorMessage,
}) => {
  const inputBorderClass = status === 'error'
    ? 'border-red-800 hover:border-red-700'
    : 'border-zinc-800 hover:border-zinc-700';

  const [previewUrl, setPreviewUrl] = useState<string | null>(existingImageUrl || null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const shapeClass = variant === 'student' ? 'rounded-full' : 'rounded-lg'

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const newPreviewUrl = URL.createObjectURL(file)
      setPreviewUrl(newPreviewUrl)
      onImageChange(file)
    }
  }

  const handleContainerClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className='flex flex-col w-full text-zinc-400'>
      <div
        onClick={handleContainerClick}
        className={cn(
          'relative group flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden border bg-black transition-all',
          shapeClass,
          inputBorderClass,
          className
        )}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/png, image/jpeg, image/webp" />

        {previewUrl ? (
          <>
            <Image
              src={previewUrl}
              alt="Preview"
              fill
              className="object-cover" />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Upload className="mb-1 h-4 w-4 text-zinc-400" />
              <span className="text-sm font-normal text-zinc-400">Trocar foto</span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center text-zinc-400">
            <Upload className="mb-1 h-4 w-4" />
            <span className="text-sm font-normal">{label}</span>
          </div>
        )}
      </div>

      {status === 'error' && errorMessage?.trim() && (
        <div className="w-full self-stretch px-1 pt-1 inline-flex justify-center items-center gap-1">
          <div className="w-full self-stretch justify-start text-red-800 text-[10px] font-normal leading-[16px]">{errorMessage}</div>
        </div>
      )}
    </div>
  );
};