import { useEffect } from "react";
import type { SpeciesVariantRecord } from "../../lib/types";
import { useCharacter } from "../../lib/hooks/useCharacter";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";

export default function VariantStep() {
  const { character, variants, nextStep, updateCharacter } = useCharacter();

  const selectedVariants: SpeciesVariantRecord[] = variants.filter(
    (variant:SpeciesVariantRecord) => variant.species_id === character.speciesId,
  );

  /* useEffect(() => {
    if (selectedVariants.length === 0) {
      nextStep();
    }
  }, [selectedVariants.length, nextStep]);
 */
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
            (variant: SpeciesVariantRecord) => variant.id === character.speciesVariantId,
          )?.name
        }
      </StepHead>

      <StepBody>
        {selectedVariants.map((variant: SpeciesVariantRecord) => (
          <div
            key={variant.id}
            className={`
                  md:w-37.5 border-4 rounded-md cursor-pointer
                  flex flex-col items-center p-3
                  ${
                    character.speciesVariantId === variant.id
                      ? "border-primary bg-primary text-main-text"
                      : "border-amber-50 bg-amber-50 text-primary"
                  }
                `}
            onClick={() => handleVariantSelect(variant.id)}
          >
            <span className="font-bold">{variant.name}</span>
            {variant.description && (
              <p className="text-sm text-center mt-2">{variant.description}</p>
            )}
          </div>
        ))}
      </StepBody>
    </div>
  );
}
