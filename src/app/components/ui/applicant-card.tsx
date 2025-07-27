import React from "react";
import { cn } from "@/lib/utils";
import Avatar from "./avatar";
import { Button } from "./button";
import { CalendarArrowUp, GraduationCap, Sparkles } from "lucide-react";

export type ApplicantCardProps = {
  avatarUrl?: string;
  name: string;
  profileUrl: string;
  bio: string;
  course: string;
  enterSemester: string;
  variant?: "default" | "recruited" | "declined";
  onDecline?: () => void;
  onRecruit?: () => void;
  className?: string;
};

const ApplicantCard: React.FC<ApplicantCardProps> = ({
  avatarUrl,
  name,
  profileUrl,
  bio,
  course,
  enterSemester,
  variant = "default",
  onDecline,
  onRecruit,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-start gap-x-4 rounded-2xl border border-zinc-600 bg-zinc-950 px-4 py-3",
        className
      )}
    >
      <Avatar imageUrl={avatarUrl} name={name} size="md" />

      <div className="flex flex-1 flex-col self-stretch gap-0.5 min-w-0">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-x-1.5"
        >
          <h3 className="truncate text-base font-semibold text-zinc-50 hover:text-violet-500 transition-colors duration-300 ease-in-out">
            {name}
          </h3>
        </a>

        <p className="text-xs text-zinc-300 line-clamp-2 leading-[150%] break-words">
          {bio}
        </p>

        <div className="self-stretch inline-flex justify-between items-center mt-2.5">
          <div className="inline-flex justify-start items-start gap-5 text-zinc-300">
            <div className="inline-flex justify-start items-start gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <div className="justify-start text-xs font-medium leading-[150%]">{course}</div>
            </div>

            <div className="inline-flex justify-start items-start gap-1.5">
              <CalendarArrowUp className="w-4 h-4" />
              <div className="justify-start text-xs font-medium leading-[150%]">{enterSemester}</div>
            </div>
          </div>

          <div className="inline-flex justify-end items-center gap-2">
            {variant === "default" && (
              <>
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
              </>
            )}

            {variant === "recruited" && (
              <Button
                variant="recruited"
                className="h-[32px] text-sm"
                Icon={Sparkles}
              >
                Aluno recrutado
              </Button>
            )}

            {variant === "declined" && (
              <Button
                variant="rejected"
                className="h-[32px] text-sm"
              >
                Aluno recusado
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
