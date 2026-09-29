import type { SpeciesVariantRecord } from "../../lib/types";
import { species as sp } from "../../lib/species";
import { useCharacter } from "../../lib/hooks/useCharacter";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";

export default function VariantStep() {
  const { character, variants, characterSpecies, updateCharacter } = useCharacter();

  const selectedVariants: SpeciesVariantRecord[] = variants.filter(
    (variant: SpeciesVariantRecord) =>
      variant.species_id === character.speciesId,
  );

  const handleVariantSelect = (speciesVariantId: string) => {
    updateCharacter({
      speciesVariantId,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <StepHead title="Elige tu variante">
        {
          selectedVariants.find(
            (variant: SpeciesVariantRecord) =>
              variant.id === character.speciesVariantId,
          )?.name
        }
      </StepHead>

      <StepBody>
        {selectedVariants.map((variant: SpeciesVariantRecord) => (
          <div
            key={variant.id}
            className={`
                  max-w-60 shrink-0 border-4 rounded-md cursor-pointer flex items-center gap-1.5
                  ${
                    character.speciesVariantId === variant.id
                      ? "border-primary bg-primary text-main-text"
                      : "border-amber-50 bg-amber-50 text-primary"
                  }
                `}
            onClick={() => handleVariantSelect(variant.id)}
          >
            <img src={sp[characterSpecies ? characterSpecies.code : 'human'].src} alt={variant.name} className="w-32" />
            <div className="fle flex-col items-start h-full">
              <div
                className={`flex items-center justify-center pb-1 border-b ${
                  character.speciesVariantId === variant.id
                    ? " border-main-text"
                    : " border-primary"
                } w-full my-3`}
              >
                <h3 className="text-sm font-bold">{variant.name}</h3>
              </div>
              {variant.description && (
                <div className="flex items-center justify-center">
                <p className="text-[10px] ms-1 text-pretty">{variant.description}</p>
              </div>
              )}
            </div>
          </div>
        ))}
      </StepBody>
    </div>
  );
}
