import ProfileFrame from "./ProfileFrame.tsx";
import { useCharacter } from "../lib/hooks/useCharacter.tsx";
import { species, type Species } from "../lib/species.ts";
import { Classes , type Class } from "../lib/types"


interface AvatarProps {
    avatar: Class | undefined;
}



export default function Avatar({ avatar }: AvatarProps) {

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative group grid place-items-center">
                <ProfileFrame className="w-37.5 text-primary group-hover:text-primary-hover transition-all duration-300" />
                {
                    avatar && 
                    <span className="absolute grid place-items-center w-25 bg-main-text rounded-full">
                        <img
                            src={avatar ? Classes[avatar].src : species['human'].src}
                            alt={avatar}
                            className=" h-25 rounded-full"
                        />
                    </span>
                }
            </div>
        </div>
    );
}