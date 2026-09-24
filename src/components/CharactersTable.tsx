import { useState, useEffect } from "react";
import CharacterRow from "./CharacterRow";
import { supabase } from "../db/supabase-browser";
import type { CharacterListItem, registeredAdventure } from "../lib/types";

export default function CharactersTable({
  characters,
  registered,
}: {
  characters: CharacterListItem[] | null;
  registered: string[] | null;
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
        const isRegistered = registered?.includes(character.id);

        return (
          <CharacterRow
            key={character.id}
            character={character}
            onDelete={handleDelete}
            isRegistered={isRegistered}
            
          />
        );
      })}
    </ul>
  );
}
