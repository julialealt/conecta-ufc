import React from 'react';
import Image from 'next/image';
import { MapPin, CircleDollarSign, Clock } from 'lucide-react';
import { Button } from './button';

export type JobCardProps = {
  logoUrl: string;
  companyName: string;
  jobTitle: string;
  description: string;
  location: string;
  salary: string;
  workload: string;
  showApplyButton: boolean;
  onApply?: () => void;
  className?: string;
};

const JobCard: React.FC<JobCardProps> = ({
  logoUrl,
  companyName,
  jobTitle,
  description,
  location,
  salary,
  workload,
  showApplyButton,
  onApply,
  className = "",
}) => {
  return (
    <div
      className={`
        flex items-start gap-4 md:gap-6 p-3 md:p-5 
        bg-zinc-950 border border-zinc-800 rounded-xl
        hover:border-zinc-700 transition-colors
        ${className}
      `}
    >

      <div className="flex-shrink-0">
        <Image
          src={logoUrl}
          alt={`Logo da ${companyName}`}
          width={48}
          height={48}
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex-1 min-w-0 gap-0.5">
        <h3 className="font-semibold text-base text-white truncate">{jobTitle}</h3>
        <p className="text-xs font-medium text-zinc-300 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-zinc-300">
          <div className="flex items-center gap-1.5">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CircleDollarSign size={16} />
            <span>{salary}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={16} />
            <span>{workload}</span>
          </div>

          {showApplyButton && (
            <Button
              variant="primary"
              onClick={onApply}
              className="h-[32px] w-[112px] text-sm"
            >
              Aplicar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;