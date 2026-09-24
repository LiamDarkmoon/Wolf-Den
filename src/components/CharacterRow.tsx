import { actions } from "astro:actions";
import type { CharacterListItem } from "../lib/types";
import { useState } from "react";
import { navigate } from "astro:transitions/client";

interface CharacterRowProps {
  character: CharacterListItem;
  selected?: boolean;
  isRegistered?: boolean;
  onDelete: (id: string) => void;
}

export default function CharacterRow({
  character,
  onDelete,
  isRegistered,
}: CharacterRowProps) {
  const [selected, setSelected] = useState(false);

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

  const handleSelect = () => {
    if (selected) navigate(`/profile/characters/${character.id}`);
    setSelected(!selected);
  };

  return (
    <li
      className={`${isRegistered ? "bg-primary/30 p-2 rounded-sm text-primary" : ""} grid grid-cols-[50px_1fr_50px] grid-rows-2 items-center justify-center hover:text-primary hover:bg-primary/30 p-2 rounded-sm cursor-pointer group`}
      onClick={handleSelect}
    >
      {isRegistered ? (
        <i className="col-start-1 row-span-2 fa-solid fa-dungeon text-emerald-500"></i>
      ) : (
        <i className="col-start-1 row-span-2 fa-brands fa-fort-awesome"></i>
      )}
      <div className="col-start-2 row-start-1 flex justify-center items-center w-full border-b border-main-text group-hover:border-primary">
        <span>
          {character.name}: Nivel {character.level}
          {selected && <i className="fa-solid fa-link text-secondary text-xs ms-1"></i>}
        </span>
      </div>
      {selected && (
        <button
          className="col-start-3 row-span-2 text-rose-500 hover:text-rose-600 cursor-pointer"
          onClick={handleDelete}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      )}
      <div className=" col-start-2 row-start-2 flex justify-center items-center w-full">
        <span>
          {character.species_name} | {character.class_name}
        </span>
      </div>
    </li>
  );
}
