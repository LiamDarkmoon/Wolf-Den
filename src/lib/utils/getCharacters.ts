import { supabase } from "../../db/supabase-browser";

export async function getEligibleCharacters({
  userId,
  adventureId,
}: {
  userId: string;
  adventureId: string;
}) {
  const { data: adventure, error: adventureError } = await supabase
    .from("adventures")
    .select("min_lvl, max_lvl")
    .eq("id", adventureId)
    .single();

  if (adventureError) {
    console.error("Error loading adventure:", adventureError);
    return;
  }

  const { data, error } = await supabase
    .from("characters")
    .select("id, name")
    .eq("user_id", userId)
    .lte("level", adventure?.max_lvl)
    .gte("level", adventure?.min_lvl);

  if (error) {
    console.error("Error loading characters:", error);
    return;
  }

  return data;
}
