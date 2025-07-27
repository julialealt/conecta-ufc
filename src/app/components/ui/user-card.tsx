import React from "react";
import Avatar from "./avatar";

export type UserCardProps = {
  variant?: 'person' | 'organization';
  avatarUrl?: string;
  name: string;
  profileUrl: string;
  bio: string;
  about?: string;
  className?: string;
};

const UserCard: React.FC<UserCardProps> = ({
  variant = 'person',
  avatarUrl,
  name,
  profileUrl,
  bio,
  about,
  className,
}) => {
  return (
    <div
      className={`
        p-3 bg-zinc-950 w-full rounded-xl inline-flex justify-start items-start gap-4
        border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer
        ${className}
      `}
    >
      <div className="flex-shrink-0">
        <Avatar
          imageUrl={avatarUrl}
          name={name}
          variant={variant}
          size="md"
        />
      </div>

      <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-1">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-x-1.5"
        >
          <div className="font-semibold text-base text-white truncate leading-[150%]">{name}</div>
        </a>

        <div className="text-sm font-medium text-hite line-clamp-1 leading-[150%]">{bio}</div>

        <div className="text-xs font-medium text-zinc-300 line-clamp-2 leading-[150%]">{about}</div>
      </div>
    </div>
  );
};

export default UserCard;
