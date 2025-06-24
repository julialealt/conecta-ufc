import React from 'react';
import Image from 'next/image';
import { ExternalLink, Users } from 'lucide-react';

export type ApplicantCardProps = {
  avatarUrl: string;
  name: string;
  profileUrl: string;
  bio: string;
  recommendationCount: number;
  onDecline: () => void;
  onRecruit: () => void;
  className?: string;
};
const ApplicantCard: React.FC<ApplicantCardProps> = ({
  avatarUrl,
  name,
  profileUrl,
  bio,
  recommendationCount,
  onDecline,
  onRecruit,
  className = "",
}) => {
  return (
    <div
      className={`
        flex flex-col gap-3 p-4
        bg-zinc-950 border border-zinc-800 rounded-xl
        ${className}
      `}
    >
      <div className="flex items-center gap-4">
        {/*
        <Avatar
          imageUrl={avatarUrl}
          name={name}
          variant="person"
          size="md" // Usando o componente Avatar que criamos
        />
        */}
        <div className="flex-1 min-w-0">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group"
          >
            <h3 className="font-bold text-lg text-white truncate">{name}</h3>
            <ExternalLink 
              size={16} 
              className="text-zinc-500 group-hover:text-violet-400 transition-colors" 
            />
          </a>
        </div>
      </div>

      <p className="text-sm text-zinc-400 line-clamp-4">
        {bio}
      </p>

      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-1.5 text-sm text-zinc-500">
          <Users size={16} />
          <span>
            {recommendationCount} pessoas recomendaram este aluno
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onDecline}
            className="
              px-4 py-1.5 bg-transparent border border-zinc-700 text-zinc-300 
              font-semibold rounded-lg hover:bg-zinc-800 hover:border-zinc-600 
              transition-colors
            "
          >
            Recusar
          </button>
          <button
            onClick={onRecruit}
            className="
              px-4 py-1.5 bg-violet-600 text-white font-semibold rounded-lg
              hover:bg-violet-700 transition-colors
            "
          >
            Recrutar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;