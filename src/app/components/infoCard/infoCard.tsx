import React from 'react';
import Image from 'next/image';

export type InfoCardProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
  variant?: 'person' | 'organization';
  onClick?: () => void;
  className?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  imageUrl,
  title,
  subtitle,
  variant = 'person',
  onClick,
  className = "",
}) => {
  const imageShapeClass = variant === 'person' ? 'rounded-full' : 'rounded-lg';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full flex items-center gap-4 p-3 text-left
        bg-zinc-900 border border-transparent rounded-xl
        hover:bg-zinc-800/50 hover:border-zinc-800
        transition-all duration-200 ease-in-out
        ${className}
      `}
    >
      {/*
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`Imagem de ${title}`}
          width={56}
          height={56}
          className={`object-cover ${imageShapeClass}`}
        />
      </div>*/}

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white truncate">
          {title}
        </p>
        <p className="text-sm text-zinc-400 truncate">
          {subtitle}
        </p>
      </div>
    </button>
  );
};

export default InfoCard;