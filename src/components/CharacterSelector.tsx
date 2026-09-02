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

    const handleDelete = async () => {

       try {
            const { data, error } = await supabase.rpc(
                "cancel_adventure_registration",
                {
                    p_adventure_id: adventureId,
                }
            );

            if (!data.success) {
                console.error("Error deleting registration:", data.error);
            }

        } catch (error) {
            console.error("Error cancelling registration:", error);
        }
    }


    const isOwner = player.user_id === userId;


    return (
        <>
            <li className={isOwner ? "max-w-100 flex items-center justify-around italic py-3 my-2 rounded-sm border-b border-primary/20 bg-primary/30" : "max-w-100 flex items-center justify-around italic py-3 my-2 border-b border-primary/20"}>

                {isOwner ? (
                    <button
                        className="size-8 text-2xl grid place-items-center text-primary cursor-pointer me-1 group"
                        onClick={!selectedCharacter ? handleDropdown : undefined}
                    >
                        {
                            !selectedCharacter ?
                            <i className="fa-solid fa-square-plus group-hover:text-primary-hover"></i>
                            :
                            <i className="fa-solid fa-square-check"></i>
                        }

                    </button>
                ) :
                    <button
                        className="size-8 text-2xl grid place-items-center text-secondary cursor-pointer me-1"
                    >
                        <i className="fa-solid fa-message"></i>

                    </button>
                }
                
                {/* Name and character info */}
                <div className="w-50 flex flex-col">

                    <span className="flex items-center cursor-pointer group">
                        {player.display_name}
                        <span className="text-xs opacity-50">
                            ({player.user_id.slice(0, 6)})
                        </span>
                        <i className="fa-solid fa-user-plus text-sm ms-1 group-hover:text-primary-hover group-hover:scale-110"></i>
                        :
                    </span>

                    <span className="truncate">
                        <i className="fa-solid fa-masks-theater me-1 text-primary-hover"></i>
                        
                        {
                            selectedCharacter ? (
                                <>
                                <span> {selectedCharacter}</span>
                                <i className="fa-solid fa-check ms-1 text-emerald-600"></i>
                                </>
                            ) : isOwner ? (
                                <span className="text-emerald-600 text-sm"> Elige tu personaje</span>
                            ) :
                            (
                                <span className="text-rose-600 text-sm"> Sin personaje elegido</span>
                            )
                        }
                    </span>

                </div>

                <button
                        className="size-8 text-2xl grid place-items-center text-rose-600 cursor-pointer me-1 hover:text-rose-500"
                        onClick={handleDelete}
                    >
                            
                    {
                        isOwner &&
                        <i className="fa-solid fa-trash"></i>
                    }

                </button>


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
