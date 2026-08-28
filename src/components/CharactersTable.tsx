import { useState } from "react";
import CharacterRow from "./CharacterRow";
import type { CharacterRecord } from "./CharacterCreator/CharacterProvider";

export default function CharactersTable({
    characters,
}: {
    characters: CharacterRecord[] | null;
}) {
    const [charactersList, setCharactersList] = useState(characters ?? []);

    const handleDelete = (id: string) => {
        setCharactersList(prev =>
            prev.filter(character => character.id !== id)
        );
    };

    return (
        <ul className="flex flex-col gap-2">
            {charactersList.map(character => {

    return (
        <CharacterRow
            key={character.id}
            character={character}
            onDelete={handleDelete}
        />
    );
})}
        </ul>
    );
}