import React from 'react';
import Image from 'next/image';

const getInitials = (name: string) => {
  if (!name) return '';
  return name[0].toUpperCase();
};

export type AvatarProps = {
  imageUrl?: string | null;
  name: string;
  variant?: 'person' | 'organization';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};


const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  name,
  variant = 'person',
  size = 'md',
  className = "",
}) => {
  const shapeClass = variant === 'person' ? 'rounded-full' : 'rounded-xl';

  const sizeStyles = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-23 h-23 text-4xl',
  };
  const sizeClass = sizeStyles[size];

  return (
    <div
      className={`
        relative flex-shrink-0 bg-zinc-800 border border-zinc-700
        flex items-center justify-center
        ${shapeClass} 
        ${sizeClass}
        ${className}
      `}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={`Avatar de ${name}`}
          fill
          className={`object-cover ${shapeClass}`}
        />
      ) : (
        <span className="font-semibold text-white select-none">
          {getInitials(name)}
        </span>
      )}
    </div>
  );
};

export default Avatar;