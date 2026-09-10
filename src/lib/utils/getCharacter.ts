import { createClient } from "../../db/supabase";
import type { AstroCookies } from "astro";
import type { CharacterSheet } from "../../lib/types";


export async function getCharacter({
    request,
    cookies,
    id
}: {
    request: Request;
    cookies: AstroCookies;
    id?: string
}):Promise<CharacterSheet | null>{
    
    const supabase = createClient({
        request: request,
        cookies: cookies,
    });

    const { data: character, error } = await supabase.rpc(
        "get_character",
        {
        p_character_id: id,
        },
    );

    if (error) {
        console.error("Error getting character:", error);
        return null;
    }

    return character;

}
