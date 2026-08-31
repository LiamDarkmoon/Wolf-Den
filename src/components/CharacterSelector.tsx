import { useEffect, useState } from "react";
import { supabase } from "../db/supabase-browser";

export default function CharacterSelector({
    adventureId,
    player,
    userId
}: {
    adventureId: string;
    player: any;
    userId: string | undefined;
}) {

    const [characters, setCharacters] = useState<any[]>([]);
    const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
        player.character_name ?? null
    );
    const [visible, setVisible] = useState(false);

    // Solo cargamos los personajes del usuario actual
    useEffect(() => {

        if (!userId || player.user_id !== userId) {
            return;
        }

        const loadCharacters = async () => {

            const { data, error } = await supabase
                .from("characters")
                .select("id, name")
                .eq("user_id", userId);

            if (error) {
                console.error("Error loading characters:", error);
                return;
            }

            setCharacters(data ?? []);
        };

        loadCharacters();

    }, [userId, player.user_id]);


    // Abrir/cerrar selector
    const handleDropdown = () => {

        // Solo el dueño del registro puede abrirlo
        if (player.user_id !== userId) {
            return;
        }

        setVisible(prev => !prev);
    };


    // Asignar personaje
    const handleSelection = async (characterId: string) => {

        const { data, error } = await supabase.rpc(
            "assign_character_to_adventure",
            {
                p_adventure_id: adventureId,
                p_character_id: characterId,
            }
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
            character => character.id === characterId
        );

        if (character) {
            setSelectedCharacter(character.name);
        }

        setVisible(false);
    };


    const isOwner = player.user_id === userId;


    return (
        <>
            <li className="flex items-center italic my-2">

                {/* Selector solamente para el usuario actual */}
                {isOwner && (
                    <button
                        className="size-8 text-primary cursor-pointer me-1 hover:text-primary-hover"
                        onClick={handleDropdown}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                            />
                        </svg>
                    </button>
                )}

                {player.display_name}

                <span className="text-xs text-secondary-text opacity-50">
                    ({player.user_id.slice(0, 6)})
                </span>

                {" → "}

                <span className="text-secondary ms-2">
                    {selectedCharacter ?? "Sin personaje"}
                </span>

            </li>


            {/* Dropdown */}
            {isOwner && visible && characters.length > 0 && (

                <ul className="p-4 w-full -mt-2 absolute z-10 bg-main-bg rounded-b-md">

                    {characters.map(character => (

                        <li
                            key={character.id}
                            onClick={() => handleSelection(character.id)}
                            className="cursor-pointer hover:text-primary"
                        >
                            {character.name}
                        </li>

                    ))}

                </ul>

            )}
        </>
    );
}
