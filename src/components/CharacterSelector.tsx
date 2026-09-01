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
            <li className="flex items-center italic my-3">

                {isOwner ? (
                    <button
                        className="size-8 grid place-items-center text-primary cursor-pointer me-1 hover:text-primary-hover"
                        onClick={handleDropdown}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" 
                            className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button>
                ) :
                    <button
                        className="size-8 grid place-items-center text-secondary cursor-pointer me-1"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24"
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>

                    </button>
                }
                
                <div className="flex flex-col">

                    <span className="flex items-center">
                    {player.display_name}
                        <span className="text-xs opacity-50">
                            ({player.user_id.slice(0, 6)})
                        </span>:
                    </span>

                    <span className="">
                    Personaje: -&gt; {selectedCharacter ?? "Sin personaje"}
                    </span>

                </div>


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
