import { actions } from "astro:actions";
import type { CharacterRecord } from "./CharacterCreator/CharacterProvider";

interface CharacterRowProps {
    character: CharacterRecord;
    onDelete: (id: string) => void;
}

export default function CharacterRow({
    character,
    onDelete,
}: CharacterRowProps) {

    const handleDelete = async () => {
        const result = await actions.deleteCharacter({
            id: character.id,
        });

        if (result.error) {
            console.error(result.error);
            return;
        }

        onDelete(character.id);
    };

    return (
        <li className="flex justify-between items-center hover:text-primary hover:bg-primary/30 p-2 rounded-sm">
            
            <i className="fa-solid fa-square-check text-primary"></i>
            
            <a href={`/profile/characters/${character.id}`}>
                {character.name}
            </a>

            <button
                className="text-rose-500 hover:text-rose-600 cursor-pointer"
                onClick={handleDelete}
            >
                <i className="fa-solid fa-trash"></i>
            </button>
        </li>
    );
}