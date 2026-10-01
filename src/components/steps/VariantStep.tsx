import type { SpeciesVariantRecord } from "../../lib/types";
import { variants as v } from "../../lib/species";
import { useCharacter } from "../../lib/hooks/useCharacter";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";
import WizarCard from "../WizardCard";

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
        {selectedVariants.map((item: SpeciesVariantRecord) => (
          <WizarCard key={item.id} step="speciesVariant" character={character} item={item} bg={bg} source={v[item.code]} handleSelect={handleVariantSelect} />
          )
        )}
      </StepBody>
    </div>
  );
}
