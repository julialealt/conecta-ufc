import React from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Avatar from "./avatar";
import { Button } from "./Button";

export type ApplicantCardProps = {
  avatarUrl?: string;
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
  onDecline,
  onRecruit,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-start gap-x-4 rounded-2xl border border-zinc-600 bg-zinc-950 p-4",
        className
      )}
    >
      <Avatar imageUrl={avatarUrl} name={name} size="md" />

      <div className="flex flex-1 flex-col self-stretch gap-0.5">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-x-1.5"
        >
          <h3 className="truncate text-base font-semibold text-zinc-50">
            {name}
          </h3>
          <ExternalLink
            size={14}
            className="text-zinc-500 transition-all duration-300 group-hover:text-violet-400"
          />
        </a>

        <p className="text-xs leading-relaxed text-zinc-300 line-clamp-3">
          {bio}
        </p>

        <div className="flex items-end justify-between">
          <div className="flex items-end justify-end gap-x-2">
            <Button
              variant="outline_white"
              onClick={onDecline}
              className="h-[32px] w-[112px] text-sm"
            >
              Recusar
            </Button>
            <Button
              variant="primary"
              onClick={onRecruit}
              className="h-[32px] w-[112px] text-sm"
            >
              Recrutar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
