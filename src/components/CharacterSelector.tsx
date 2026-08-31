import { useEffect, useState } from "react";
import { supabase } from "../db/supabase-browser"

export default function CharacterSelector({ adventureId, player, userId } : { adventureId: string, player: any, userId: string | undefined }) {

    const [characters, setCharacters] = useState<any[] | null>()
    const [selectedCharacter, setSelectedCharacter] = useState<any>()
    const [visible, setVisible] = useState(false)

    useEffect(() => {

    const loadData = async () => {

            // 1. Cargar personajes del jugador
            const { data: charactersData, error: charactersError } =
                await supabase
                    .from("characters")
                    .select("*")
                    .eq("user_id", userId);

            if (charactersError) {
                console.error(
                    "Error loading characters:",
                    charactersError
                );
                return;
            }

            setCharacters(charactersData);


            // 2. Obtener personaje asignado a esta aventura
            const { data: registrationData, error: registrationError } =
                await supabase.rpc(
                    "get_registered_character",
                    {
                        p_adventure_id: adventureId,
                        p_user_id: userId
                    }
                );

            if (registrationError) {
                console.error(
                    "Error getting registered character:",
                    registrationError
                );
                return;
            }


            // 3. Buscarlo dentro de los personajes del jugador
            if (
                registrationData.success &&
                registrationData.character_id
            ) {

                const character = charactersData.find(
                    character =>
                        character.id === registrationData.character_id
                );

                setSelectedCharacter(character);
            }
        };

        if (userId) {
            loadData();
        }

    }, [adventureId, userId]);


    const handleDropdown = (id: string) => {
        console.log( id === userId, id, userId)
        if(id === userId) setVisible(!visible)
    }

    const handleSelection = async (id: string) => {
        const { data, error } = await supabase.rpc(
            "assign_character_to_adventure",
            {
                p_adventure_id: adventureId,
                p_character_id: id,
            }
        );

        if (error) {
            console.error("Error assigning character:", error);
            return;
        }

        if (data.success) {
            const character = characters?.find(
                (character) => character.id === data.character_id
            );

            setSelectedCharacter(character);
        }
    };

    return(
        <>
            <li className="flex items-center italic my-2">
                <button 
                    className="size-8 text-primary cursor-pointer me-1 hover:text-primary-hover "
                    onClick={() => handleDropdown(player.user_id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                    </svg>
                </button>

                {player.display_name}

                <span className="text-xs text-secondary-text opacity-50">
                    ({player.user_id.slice(0, 6)})
                </span>

                -&gt;

                <span className="text-secondary ms-2">
                { selectedCharacter ? selectedCharacter.name : 'Character here'}
                </span>
            </li>

                {
                    characters && visible && (
                        <ul className="p-4 w-full -mt-2 absolute z-10 bg-main-bg rounded-b-md">
                            {characters.map((character) => (
                                <li 
                                    key={character.id}
                                    onClick={()=>handleSelection(character.id)}
                                    className="cursor-pointer"
                                >
                                    {character.name}
                                </li>
                            ))}
                        </ul>
                    )
                }
        </>
    )
}