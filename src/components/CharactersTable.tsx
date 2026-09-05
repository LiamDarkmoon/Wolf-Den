import { useState, useEffect } from "react";
import CharacterRow from "./CharacterRow";
import { supabase } from "../db/supabase-browser";
import type { CharacterRecord } from "./CharacterCreator/CharacterProvider";
import type { registeredAdventure } from "../lib/types";

export default function CharactersTable({
  characters,
}: {
  characters: CharacterRecord[] | null;
}) {
  const [charactersList, setCharactersList] = useState(characters ?? []);
  const [status, setStatus] = useState<any>()

  const handleDelete = (id: string) => {
    setCharactersList((prev) =>
      prev.filter((character) => character.id !== id),
    );
  };

  return (
    <ul className="flex flex-col gap-2 min-w-50 md:max-w-fit">
      {charactersList.map((character) => {
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
