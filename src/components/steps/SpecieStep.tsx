import { useCharacter } from "../../lib/hooks/useCharacter";
import { species as sp } from "../../lib/species";
import WizarCard from "../WizardCard";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";

export default function SpecieStep() {
  const { character, species, bg, updateCharacter } = useCharacter();

  const handleSpecieSelect = (speciesId: string) => {
    updateCharacter({
      speciesId,
      speciesVariantId: undefined,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <StepHead title="Elige tu especie">
        {species.find((item) => item.id === character.speciesId)?.name}
      </StepHead>
      <StepBody>
        {species.map((item) => (
          <WizarCard character={character} item={item} bg={bg} source={sp[item.code]} handleSelect={handleSpecieSelect} />
        ))}
      </StepBody>
    </div>
  );
}
