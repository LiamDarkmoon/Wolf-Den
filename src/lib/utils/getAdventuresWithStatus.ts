import { createClient } from "../../db/supabase";
import type { AstroCookies } from "astro";


export async function getAdventuresWithStatus({
    request,
    cookies,
}: {
    request: Request;
    cookies: AstroCookies;
}){
    const supabase = createClient({
        request: request,
        cookies: cookies,
    });

    const { data: adventures } = await supabase
        .from('adventures')
        .select('*')
        .order('adventure_date', { ascending: true });
    
    const adventuresWithStatus = await Promise.all(
        (adventures ?? []).map(async (adventure) => {
            const { data: status, error } = await supabase.rpc(
                "get_adventure_status",
                {
                    p_adventure_id: adventure.id,
                }
            );
    
            if (error) {
                console.error(
                    `Error getting status for ${adventure.title}:`,
                    error
                );
            }
    
            return {
                ...adventure,
                currentPlayers: status?.current_players ?? 0,
                currentSubstitutes: status?.current_substitutes ?? 0,
                isRegistered: status?.is_registered ?? false,
                role: status?.role ?? null,
            };
        })
    );

    return adventuresWithStatus;

}
