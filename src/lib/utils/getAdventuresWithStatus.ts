import { createClient } from "../../db/supabase";
import type { AstroCookies } from "astro";

const now = new Date().toISOString();

export async function getAdventuresWithStatus({
  request,
  cookies,
  filter,
}: {
  request: Request;
  cookies: AstroCookies;
  filter?: "upcoming" | "past";
}) {
  const supabase = createClient({
    request: request,
    cookies: cookies,
  });

  let query = supabase.from("adventures").select("*");

  if (filter === "upcoming") {
    query = query.gte("adventure_date", now);
  }

  if (filter === "past") {
    query = query.lt("adventure_date", now);
  }

  const { data: adventures, error } = await query.order("adventure_date", {
    ascending: filter === "past" ? false : true,
  });

  const adventuresWithStatus = await Promise.all(
    (adventures ?? []).map(async (adventure) => {
      const { data: status, error } = await supabase.rpc(
        "get_adventure_status",
        {
          p_adventure_id: adventure.id,
        },
      );

      if (error) {
        console.error(`Error getting status for ${adventure.title}:`, error);
      }

      return {
        ...adventure,
        currentPlayers: status?.current_players ?? 0,
        currentSubstitutes: status?.current_substitutes ?? 0,
        isRegistered: status?.is_registered ?? false,
        role: status?.role ?? null,
      };
    }),
  );

  return adventuresWithStatus;
}
