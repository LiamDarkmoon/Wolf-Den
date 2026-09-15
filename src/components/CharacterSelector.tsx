import { useEffect, useState } from "react";
import { supabase } from "../db/supabase-browser";
import { navigate } from "astro:transitions/client";
import { getEligibleCharacters } from "../lib/utils/getCharacters";
import confetti from "@hiseb/confetti";

export default function CharacterSelector({
  adventureId,
  player,
  userId,
  substitute,
  index,
  role,
}: {
  adventureId: string;
  player: any;
  userId: string | undefined;
  substitute?: boolean;
  index: number;
  role: string | null;
}) {
  const [characters, setCharacters] = useState<any[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    player.character_name ?? null,
  );
  const [visible, setVisible] = useState(false);
  const isOwner = player.user_id === userId;

  const colors = ["text-primary-hover", "text-gray-500", "text-amber-900"];

  // Solo cargamos los personajes del usuario actual
  useEffect(() => {
    if (index <= 2 && !substitute) {
      confetti({
        position: { x: 0, y: 0 }, // Origin position
        count: 100, // Number of particles
        size: 1, // Size of the particles
        velocity: 200, // Initial particle velocity
        fade: false, // Particles fall off the screen, or fade out
        color: ["#d97706", "#f59e0", "#3b82f6"], // Palette the particles are picked from
      });
      confetti({
        position: { x: 1000, y: 0 }, // Origin position
        count: 100, // Number of particles
        size: 1, // Size of the particles
        velocity: 200, // Initial particle velocity
        fade: false, // Particles fall off the screen, or fade out
        color: ["#d97706", "#f59e0", "#3b82f6"], // Palette the particles are picked from
      });
    }

    if (!userId || !adventureId) return;

    const loadCharacters = async () => {
      const characters = await getEligibleCharacters({
        userId: player.user_id,
        adventureId,
      });

      setCharacters(characters ?? []);
    };

    loadCharacters();
  }, [userId, player.user_id, adventureId]);

  // Abrir/cerrar selector
  const handleDropdown = () => {
    console.log("click", characters);

    // Solo el dueño del registro puede abrirlo
    if (!isOwner) {
      return;
    }

    setVisible((prev) => !prev);
  };

  // Asignar personaje
  const handleSelection = async (characterId: string) => {
    const { data, error } = await supabase.rpc(
      "assign_character_to_adventure",
      {
        p_adventure_id: adventureId,
        p_character_id: characterId,
      },
    );

    if (error) {
      console.error("Error assigning character:", error);
      return;
    }

    if (!data.success) {
      console.error("Character assignment failed:", data);
      return;
    }

    // Buscar el personaje que acabamos de seleccionar
    const character = characters.find(
      (character) => character.id === characterId,
    );

    if (character) {
      setSelectedCharacter(character.name);
    }

    setVisible(false);
  };

  const handleDelete = async (id: string) => {
    if (role !== "user") {
      try {
        
        const { data, error } = await supabase.rpc(
          "admin_remove_registration",
          {
            p_adventure_id: adventureId,
            p_user_id: id,
          },
        );

        if (!data.success) {
          console.error("Error deleting registration:", data.error);
        }

        return;
      } catch (error) {
        console.error("Error cancelling registration:", error);
      }
    }

    try {
      const { data, error } = await supabase.rpc(
        "cancel_adventure_registration",
        {
          p_adventure_id: adventureId,
        },
      );

      navigate("/adventures/league");

      if (!data.success) {
        console.error("Error deleting registration:", data.error);
      }
    } catch (error) {
      console.error("Error cancelling registration:", error);
    }
  };

  return (
    <>
      <li
        className={
          isOwner
            ? "max-w-100 max-h-17.5 flex items-center justify-around italic py-3 my-2 rounded-sm border-b border-primary/20 bg-primary/30"
            : "max-w-100 flex items-center justify-around italic py-3 my-2 border-b border-primary/20"
        }
      >
        {isOwner ? (
          <button
            className="size-8 text-2xl grid place-items-center text-primary cursor-pointer group"
            onClick={
              !selectedCharacter ? handleDropdown : () => console.log("uhmmm")
            }
          >
            {!selectedCharacter ? (
              <i className="fa-solid fa-square-plus group-hover:text-primary-hover"></i>
            ) : (
              <i className="fa-solid fa-square-xmark"></i>
            )}
          </button>
        ) : (
          <button
            className={`size-8 text-2xl grid place-items-center text-primary-hover cursor-pointer`}
          >
            {substitute ? (
              <i className={`fa-solid fa-${index}`}></i>
            ) : (
              <i
                className={
                  index <= 2
                    ? colors[index - 1] + " fa-brands fa-web-awesome"
                    : `fa-solid fa-${index} text-main-text`
                }
              ></i>
            )}
          </button>
        )}

        {/* Name and character info */}
        <div className="w-50 flex flex-col">
          <span className="flex items-center gap-2 cursor-pointer group truncate">
            {player.display_name}:
            <i className="fa-solid fa-user-plus text-sm ms-1 group-hover:text-primary-hover group-hover:scale-110"></i>
          </span>

          <span className="flex items-center gap-2 cursor-pointer group truncate">
            <i className="fa-solid fa-masks-theater me-1 text-primary-hover"></i>

            {selectedCharacter ? (
              <>
                <span> {selectedCharacter}</span>
                <i className="fa-solid fa-check ms-1 text-emerald-600"></i>
              </>
            ) : isOwner ? (
              <span className="text-emerald-600 text-sm">
                {" "}
                Elige tu personaje
              </span>
            ) : (
              <span className="text-rose-600 text-sm">
                {" "}
                Sin personaje elegido
              </span>
            )}
          </span>
        </div>

        <button
          className="size-8 text-2xl grid place-items-center text-rose-600 cursor-pointer me-1 hover:text-rose-500"
          onClick={() => handleDelete(player.user_id)}
        >
          {isOwner || role !== "user" ? (
            <i className="fa-solid fa-circle-xmark"></i>
          ) : null}
        </button>
      </li>

      {/* Dropdown */}
      {isOwner && visible && characters.length > 0 && (
        <ul className="w-full max-w-100 -mt-2 absolute z-10 bg-main-bg rounded-b-md">
          {characters.map((character) => (
            <li
              key={character.id}
              onClick={() => handleSelection(character.id)}
              className="cursor-pointer p-2 rounded-b-sm hover:text-primary hover:bg-secondary-bg"
            >
              {character.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
