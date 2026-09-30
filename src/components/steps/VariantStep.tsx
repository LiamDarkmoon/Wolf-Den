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
  console.log('variants',selectedVariants)

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
                  relative max-w-60 h-87.5 shrink-0 border-4 rounded-md cursor-pointer flex flex-col items-center p-2.5 bg-linear-to-b from-transparent to-border
                  ${
                    character.speciesVariantId === variant.id
                      ? "border-primary text-main-text"
                      : "border-amber-50 text-primary"
                  }
                `}
            onClick={() => handleVariantSelect(variant.id)}
          >
            {character.speciesVariantId === variant.id && <img className="absolute h-full inset-0 -z-1" src={`${bg}`} />}
            <img src={variant ? v[variant.code].src : ''} alt={variant.name} className="w-32 z-1" />
            <div className="absolute bottom-4 flex flex-col items-start h-full z-1">
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
