import type { User, CharacterSheet } from "../lib/types";
import { supabase } from "../db/supabase-browser";

export default function LvlUpButton({
  character,
  setCharacter,
}: {
  character: CharacterSheet | null;
  setCharacter: React.Dispatch<React.SetStateAction<CharacterSheet | null>>;
}) {
  const handleLevelUp = async () => {
    if (!character?.id || !character.classes?.[0]?.id) return;

    const { data, error } = await supabase.rpc("level_up_character", {
      p_character_id: character.id,
      p_class_id: character.classes[0].id,
    });

    if (error) {
      console.error("Error al subir de nivel:", error);
      return;
    }

    // Volver a pedir el personaje actualizado
    const { data: updatedCharacter, error: characterError } =
      await supabase.rpc("get_character", {
        p_character_id: character.id,
      });

    if (characterError) {
      console.error("Error actualizando personaje:", characterError);
      return;
    }
    setCharacter(updatedCharacter);
  };

  return (
    <button
      onClick={() => handleLevelUp()}
      className="p-2 rounded-xl bg-primary text-body text-sm font-semibold text-main-text cursor-pointer shadow-md shadow-border hover:bg-primary-hover active:shadow-none"
    >
      ¡LvL UP!
    </button>
  );
}
