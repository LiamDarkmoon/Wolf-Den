import { useCharacter } from "../../lib/hooks/useCharacter";
import { species as sp } from "../../lib/species";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";

export default function SpecieStep() {
  const { character, species, updateCharacter } = useCharacter();


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
          <div
          key={item.id}
          className={`
                        max-w-60 shrink-0 border-4 rounded-md cursor-pointer flex flex-col items-center
                        ${
                          character.speciesId === item.id
                          ? "border-primary bg-primary text-main-text"
                          : "border-amber-50 bg-amber-50 text-primary"
                        }
                        `}
                        onClick={() => handleSpecieSelect(item.id)}
                        >
            <img src={sp[item.code].src} alt={item.name} />
            <div className="p-4 flex flex-col items-center justify-center">
              <h3 className="font-semibold text-xl">{item.name}</h3>
            </div>
          </div>
        ))}
      </StepBody>
    </div>
  );
}
