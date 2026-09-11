import { createContext, useState, useEffect, type ComponentType } from "react";
import { actions } from "astro:actions";
import { getCharacterReferences } from "../../db/character-references";
import type {
  BackgroundRecord,
  ClassRecord,
  SpeciesRecord,
  AbilityRecord,
  SpeciesVariantRecord,
} from "../../lib/types";
import NameStep from "../steps/NameStep";
import ClassStep from "../steps/ClassStep";
import OriginStep from "../steps/OriginStep";
import SpecieStep from "../steps/SpecieStep";
import VariantStep from "../steps/VariantStep";
import AbilitiesStep from "../steps/AbilitiesStep";
import { record } from "astro:schema";

const DRAFT_KEY = `wolf-den-character-draft`;

export interface Character {
  id?: string;
  name?: string;

  classId?: string;
  speciesId?: string;
  speciesVariantId?: string;
  backgroundId?: string;

  abilities: {
    STR: number | null;
    DEX: number | null;
    CON: number | null;
    INT: number | null;
    WIS: number | null;
    CHA: number | null;
  };
}

export interface CharacterRecord extends Character {
  id: string;
  user_id: string;
  created_at: string;

  class_id: string;
  species_id: string;
  background_id: string;

  level: number;
}

interface CharacterContext {
  character: Character;

  characterClass?: ClassRecord;
  characterSpecies?: SpeciesRecord;
  characterSpecieVariant?: SpeciesVariantRecord;
  characterBackground?: BackgroundRecord;

  classes: ClassRecord[];
  species: SpeciesRecord[];
  variants: SpeciesVariantRecord[];
  backgrounds: BackgroundRecord[];
  abilities: AbilityRecord[];

  stepIndex: number;
  CurrentStep: ComponentType | string;

  nextStep(): void;

  previousStep(): void;

  toStep(arg: number): void;

  updateCharacter(values: Partial<Character>): void;

  resetCharacter(): void;

  saveCharacter: () => Promise<CharacterRecord | null>;
}

export const steps = [
  {
    id: "Class",
    component: ClassStep,
  },
  {
    id: "Origin",
    component: OriginStep,
  },
  {
    id: "Specie",
    component: SpecieStep,
  },
  {
    id: "Variant",
    component: VariantStep,
  },
  {
    id: "Abilities",
    component: AbilitiesStep,
  },
  {
    id: "Name",
    component: NameStep,
  },
] as const;
export type Step = (typeof steps)[number];

export default function CharacterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialCharacter: Character = {
    name: "",
    classId: undefined,
    speciesId: undefined,
    speciesVariantId: undefined,
    backgroundId: undefined,
    abilities: {
      STR: null,
      DEX: null,
      CON: null,
      INT: null,
      WIS: null,
      CHA: null,
    },
  };

  const [classes, setClasses] = useState<ClassRecord[]>([]);
  const [species, setSpecies] = useState<SpeciesRecord[]>([]);
  const [variants, setVariants] = useState<SpeciesVariantRecord[]>([]);
  const [backgrounds, setBackgrounds] = useState<BackgroundRecord[]>([]);
  const [abilities, setAbilities] = useState<AbilityRecord[]>([]);
  const [referencesLoading, setReferencesLoading] = useState(true);

  const [hydrated, setHydrated] = useState(false);
  const [character, setCharacter] = useState<Character>(initialCharacter);

  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];
  const CurrentStep = step.component;

  useEffect(() => {
    const loadReferences = async () => {
      setReferencesLoading(true);
      const references = await getCharacterReferences();

      setClasses(references.classes ?? []);
      setSpecies(references.species ?? []);
      setVariants(references.variants ?? []);
      setBackgrounds(references.backgrounds ?? []);
      setAbilities(references.abilities ?? []);

      setReferencesLoading(false);
    };

    loadReferences();
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(DRAFT_KEY);

    if (stored) {
      try {
        const draft = JSON.parse(stored);
        setCharacter(draft);
      } catch {
        localStorage.removeItem(DRAFT_KEY);
      }
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(DRAFT_KEY, JSON.stringify(character));
  }, [character, hydrated]);

  if (!hydrated) {
    return (
      <p className="w-full text-center p-5 text-primary-hover animate-pulse">
        Cargando personaje...
      </p>
    );
  }
  const hasVariants = variants.some(
    (variant) => variant.species_id === character.speciesId,
  );

  const characterClass = classes.find((item) => item.id === character.classId);

  const characterSpecies = species.find(
    (item) => item.id === character.speciesId,
  );

  const characterSpecieVariant = variants.find(
    (item) => item.id === character.speciesVariantId,
  );

  const characterBackground = backgrounds.find(
    (item) => item.id === character.backgroundId,
  );

  const updateCharacter = (values: Partial<Character>) => {
    setCharacter((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const nextStep = () => {
    setStepIndex((prev) => {
      let next = prev + 1;

      if (steps[next].id === "Variant" && !hasVariants) {
        next++;
      }

      return next;
    });
  };

  const previousStep = () => {
    setStepIndex((prev) => {
      let previous = prev - 1;

      if (steps[previous].id === "Variant" && !hasVariants) {
        previous--;
      }

      return previous;
    });
  };

  const toStep = (stepIndex: number) => {
    setStepIndex(stepIndex);
  };

  const resetCharacter = () => {
    setCharacter(initialCharacter);
    setStepIndex(0);
  };

  const saveCharacter = async (): Promise<CharacterRecord | null> => {
    console.log(character)
    if (
      !character.speciesId ||
      !character.classId ||
      !character.backgroundId ||
      Object.values(character.abilities).some((score) => score === null)
    ) {
      console.error("Character is incomplete");
      return null;
    }

    const result = await actions.createCharacter(character);

    if (result.error) {
      console.error(result.error);
      return null;
    }

    localStorage.removeItem(DRAFT_KEY);
    resetCharacter();
    return result.data;
  };

  return (
    <CharacterContext.Provider
      value={{
        character,

        characterClass,
        characterSpecies,
        characterSpecieVariant,
        characterBackground,

        classes,
        species,
        variants,
        backgrounds,
        abilities,

        stepIndex,
        CurrentStep,
        nextStep,
        previousStep,
        toStep,

        updateCharacter,
        resetCharacter,
        saveCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export const CharacterContext = createContext<CharacterContext | null>(null);
