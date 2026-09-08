import { createClient } from "../../db/supabase";
import type { AstroCookies } from "astro";
import type { Player } from "../../lib/types";


export async function getAdventurePlayers({
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
    
    const { data: playersData, error: playersError } = await supabase.rpc(
      "get_adventure_players",
      {
        p_adventure_id: id,
      },
    );

    const players: Player[] = playersData?.players ?? [];

    return players
}