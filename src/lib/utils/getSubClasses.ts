import { supabase } from "../../db/supabase-browser";
import type { CharacterSheet } from "../../lib/types";

export async function getSubClasses(classId?: string) {
  const { data: subClasses, error } = await supabase
    .from("subclasses")
    .select("id, class_id, code, name, description")
    .eq("class_id", classId)
    .order("name");

  if (error) throw error;

  return subClasses;
}

export async function chooseSubclass({ character, selectedSubclass } : { character: CharacterSheet | null, selectedSubclass: string | null }) {
  if (!character?.id || !selectedSubclass) return;

  const { data, error } = await supabase.rpc("choose_subclass", {
    p_character_id: character.id,
    p_subclass_id: selectedSubclass,
  });

  if (error) {
    console.error("Error eligiendo subclase:", error);
    return;
  }

  // Traemos nuevamente el personaje
  const { data: updatedCharacter, error: characterError } =
    await supabase.rpc("get_character", {
      p_character_id: character.id,
    });

  if (characterError) {
    console.error("Error actualizando personaje:", characterError);
    return;
  }

  return updatedCharacter
}