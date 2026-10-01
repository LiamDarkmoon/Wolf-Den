import type { SpeciesVariantRecord } from "../../lib/types";
import { variants as v } from "../../lib/species";
import { useCharacter } from "../../lib/hooks/useCharacter";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";

export default function VariantStep() {
  const { character, variants, bg, updateCharacter } = useCharacter();

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
        {selectedVariants.map((variant: SpeciesVariantRecord) => {
          const selected = character.speciesVariantId === variant.id;
          return (
            <div
              key={variant.id}
              className={`
                  relative max-w-75 h-full shrink-0 border-4 rounded-md cursor-pointer flex flex-col items-center p-2.5 
                  ${
                    selected
                      ? "border-primary-hover text-primary-hover shadow-md shadow-primary-hover scale-102"
                      : "border-amber-50 text-main-text"
                  }
                `}
              onClick={() => handleVariantSelect(variant.id)}
            >
              {selected && (
                <div className="absolute inset-0 -z-2">
                  <img className="object-cover object-bottom w-full h-full" src={`${bg}`} />
                </div>
              )}
              <span className="absolute inset-0 bg-linear-to-b from-transparent to-black z-1" />
              <img
                src={variant ? v[variant.code].src : ""}
                alt={variant.name}
                className="h-full -z-1"
              />
              <div className="absolute bottom-4 flex flex-col text-center items-center justify-center h-25 w-4/5 z-1">
                <div
                  className={`flex text-center items-center justify-center pb-1 border-b ${
                    selected
                      ? " border-primary-hover"
                      : " border-main-text"
                  } w-full my-2`}
                >
                  <h3 className="text-lg font-bold">{variant.name}</h3>
                </div>
                {variant.description && (
                  <div className="flex items-center justify-center">
                    <p className="text-xs">
                      {variant.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </StepBody>
    </div>
  );
}
