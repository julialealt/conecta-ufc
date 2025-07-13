import React from 'react';
import { MapPin, CircleDollarSign, Clock } from 'lucide-react';
import { Button } from './button';
import Avatar from './avatar';

export type JobCardProps = {
  logoUrl: string;
  companyName: string;
  jobTitle: string;
  description: string;
  location: string;
  salary: string;
  workload: string;
  buttonText?: string;
  onClickButton?: () => void;
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
  buttonText,
  onClickButton,
  className = "",
}) => {
  return (
    <div
      className={`
        p-3 bg-zinc-950 w-full rounded-xl inline-flex justify-start items-start gap-4
        border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer
        ${className}
      `}
    >

      <div className="flex-shrink-0">
        <Avatar
          imageUrl={logoUrl}
          name={companyName}
          variant="organization"
          size='md'
        />
      </div>

      <div className="flex-1 min-w-0 gap-0.5">
        <h3 className="font-semibold text-base text-white truncate leading-[150%] pb-1">{jobTitle}</h3>
        <p className="text-xs font-medium text-zinc-300 line-clamp-3 leading-[150%]">{description}</p>

        <div className="flex items-center justify-between gap-x-4 gap-y-1 text-xs font-medium text-zinc-300 h-[32px] leading-[150%] mt-2.5">
          <div className="pt-2 inline-flex justify-start items-start gap-5">
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
          </div>

          {buttonText && (
            <Button
              variant="primary"
              onClick={(e) => {
                e.stopPropagation()
                onClickButton?.()
              }}
              className="h-[32px] min-w-[112px] text-sm"
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;