import ProfileFrame from "./ProfileFrame.tsx";
import { species, type Species } from "../lib/species.ts";
import { Classes , type Class } from "../lib/types"


interface AvatarProps {
    avatar: Class | undefined;
}



export default function Avatar({ avatar }: AvatarProps) {

    return (
        <div className="relative group grid place-items-center my-4">
            <ProfileFrame className="w-40 text-primary group-hover:text-primary-hover transition-all duration-300" />
            {
                avatar && 
                <img
                    src={avatar ? Classes[avatar].src : species['human'].src}
                    alt={avatar}
                    className="absolute w-25 rounded-full"
                />
            }
        </div>
    );
}