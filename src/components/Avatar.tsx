import ProfileFrame from "./ProfileFrame.tsx";
import { useCharacter } from "../lib/hooks/useCharacter.tsx";
import { species, type Species } from "../lib/species.ts";
import { Classes, type Class } from "../lib/types";

interface AvatarProps {
  avatar: Class | undefined;
}

export default function Avatar({ avatar }: AvatarProps) {
  const { bg } = useCharacter();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative group grid place-items-center">
        <ProfileFrame className="w-37.5 text-primary group-hover:text-primary-hover transition-all duration-300 z-1" />
        {avatar && (
          <>
            <span className="absolute grid place-items-center w-25  rounded-full">
              <img
                src={avatar ? Classes[avatar].src : species["human"].src}
                alt={avatar}
                className=" h-25 rounded-full z-2"
              />
            </span>
            <div className="absolute size-25 grid place-items-center rounded-full bg-border/50 z-1"/>
            <div className="absolute size-25 grid place-items-center rounded-full">
              <img
                className="object-fill object-center rounded-full w-full h-full"
                src={`${bg}`}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
