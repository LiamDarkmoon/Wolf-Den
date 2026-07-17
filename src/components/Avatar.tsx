import { Image } from "astro:assets";
import ProfileFrame from "./ProfileFrame.tsx";
import { species, type Species } from "../lib/species.ts";

interface AvatarProps {
    avatar: Species;
}

export default function Avatar({ avatar }: AvatarProps) {
    return (
        <div className="relative group grid place-items-center my-4">
            <ProfileFrame className="w-40 text-primary group-hover:text-primary-hover transition-all duration-300" />
            <img
                src={species[avatar].src}
                alt={avatar}
                className="absolute w-25 rounded-full"
            />
        </div>
    );
}