// db/character-references.ts

import { supabase } from "./supabase-browser";
import type {
    ClassRecord,
    SpeciesRecord,
    SpeciesVariantRecord,
    BackgroundRecord,
    AbilityRecord,
} from "../lib/types";

export async function getCharacterReferences() {
    const [
        classesResult,
        speciesResult,
        variantResult,
        backgroundsResult,
        abilitiesResult,
    ] = await Promise.all([
        supabase
            .from("classes")
            .select("id, code, name, description, hit_die")
            .order("name"),

        supabase
            .from("species")
            .select("id, name, code, description, creature_type, size, speed")
            .order("name"),

        supabase
            .from("species_variants")
            .select("id, species_id, code, name, description")
            .order("name"),

        supabase
            .from("backgrounds")
            .select("id, name, code, description")
            .order("name"),

        supabase
            .from("abilities")
            .select("id, code, name, description, sort_order")
            .order("sort_order"),
    ]);

    if (classesResult.error) throw classesResult.error;
    if (speciesResult.error) throw speciesResult.error;
    if (variantResult.error) throw variantResult.error;
    if (backgroundsResult.error) throw backgroundsResult.error;
    if (abilitiesResult.error) throw abilitiesResult.error;

    return {
        classes: classesResult.data as ClassRecord[],
        species: speciesResult.data as SpeciesRecord[],
        variants: variantResult.data as SpeciesVariantRecord[],
        backgrounds: backgroundsResult.data as BackgroundRecord[],
        abilities: abilitiesResult.data as AbilityRecord[],
    };
}