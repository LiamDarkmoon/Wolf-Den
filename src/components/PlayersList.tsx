import { useState } from "react";
import { supabase } from "../db/supabase-browser";
import type { User, CharacterSheet } from "../lib/types";
import type { Character } from "./CharacterCreator/CharacterProvider";
import { navigate } from "astro:transitions/client";

export default function PlayersList({
  players,
  role,
}: {
  players: User[];
  role: string | null;
}) {
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [playerCharacters, setPlayerCharacters] = useState<any[]>([]);
  const [charactersLoading, setCharactersLoading] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);

  const handleSelectPlayer = (player: User) => {
    if (selectedPlayer === player.id) {
      setVisible(!visible);
      return;
    }

    setSelectedPlayer(player.id);
    setPlayerCharacters([]);
    setVisible(true);

    getCharacters(player.id);
  };

  const getCharacters = async (id: string) => {
    setCharactersLoading(true);

    const { data, error } = await supabase.rpc("get_user_characters", {
      p_user_id: id,
    });

    if (error) {
      console.error("Error loading characters:", error);
      setPlayerCharacters([]);
    } else {
      setPlayerCharacters(data ?? []);
    }

    setCharactersLoading(false);
  };

  const handlePromotePlayer = async (player: User) => {
    const { data, error } = await supabase.rpc("set_user_role", {
      p_user_id: player.id,
      p_role: "admin",
    });
  };

  const handleDemotePlayer = async (player: User) => {
    const { data, error } = await supabase.rpc("set_user_role", {
      p_user_id: player.id,
      p_role: "user",
    });
  };

  const handleSelectCharacter = (id: string | undefined) => {
    if (id) {
      navigate(`/profile/characters/${id}`);
    } else {
    }
  };


  return (
    <ul className="flex flex-col gap-2 p-2 border-e ">
      {players?.map((player: any) => (
        <li
          key={player.id}
          className="relative flex items-center justify-between text-lg font-semibold cursor-pointer"
          onClick={() => handleSelectPlayer(player)}
        >
          <i
            className={
              selectedPlayer === player.id
                ? "fa-solid fa-address-card me-2 text-primary"
                : "fa-solid fa-address-card me-2"
            }
          ></i>
          {player.display_name}
          <span>
            {selectedPlayer === player.id ? (
              <div className="flex  gap-4 w-5">
                {
                  role === 'super_admin' &&
                <div className="flex  gap-4 w-5">
                  {player.role === "user" ? (
                    <i
                      className="fa-solid fa-user-plus text-emerald-500"
                      onClick={() => handlePromotePlayer(player)}
                    ></i>
                  ) : player.role === "admin" ? (
                    <i
                      className="fa-solid fa-user-minus text-rose-500"
                      onClick={() => handleDemotePlayer(player)}
                    ></i>
                  ) : (
                    <i className="fa-solid fa-shield-heart text-secondary"></i>
                  )}
                </div>
                }
                {visible && (
                  <div className="bg-main-bg absolute top-6 left-0 z-2 w-full rounded-b-sm">
                    {charactersLoading ? (
                      <div className="p-3 font-normal opacity-60">
                        Cargando personajes...
                      </div>
                    ) : playerCharacters.length > 0 ? (
                      playerCharacters.map((character) => (
                        <div
                          key={character.id}
                          className="flex gap-2 p-3 capitalize font-normal border-y border-main-bg hover:border-border hover:bg-secondary-bg hover:text-primary-hover"
                          onClick={() => handleSelectCharacter(character.id)}
                        >
                          <span>{character.name}:</span>
                          <span>{character.class_name}</span>
                          <span className="italic">({character.level})</span>
                        </div>
                      ))
                    ) : (
                      <div className="p-3 font-normal opacity-60">
                        No se encontraron personajes.
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex  gap-4 w-5"></div>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
