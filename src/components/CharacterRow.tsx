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
        <li className="hover:text-primary">
            <a href={`/profile/characters/${character.id}`}>
                {character.name}
            </a>

            <button
                className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
                onClick={handleDelete}
            >
                x
            </button>
        </li>
    );
}