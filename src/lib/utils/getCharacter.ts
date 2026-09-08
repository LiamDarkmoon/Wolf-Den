import { createClient } from "../../db/supabase";
import type { AstroCookies } from "astro";


export async function getCharacter({
    request,
    cookies,
    id
}: {
    request: Request;
    cookies: AstroCookies;
    id?: string
}){
    const supabase = createClient({
        request: request,
        cookies: cookies,
    });

    const { data: character } = await supabase.rpc(
        "get_character",
        {
            p_character_id: id
        }
    )

    return character;

}
