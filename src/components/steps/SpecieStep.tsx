import { useCharacter } from "../../lib/hooks/useCharacter";
import { species as sp } from "../../lib/species";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";

export default function SpecieStep() {
  const { character, species, updateCharacter } = useCharacter();

  const handleSpecieSelect = (speciesId: string) => {
    updateCharacter({ speciesId });
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
                        md:w-37.5 border-4 rounded-md cursor-pointer flex flex-col items-center
                        ${
                          character.speciesId === item.id
                            ? "border-primary bg-primary text-main-text"
                            : "border-amber-50 bg-amber-50 text-primary"
                        }
                    `}
            onClick={() => handleSpecieSelect(item.id)}
          >
            <img src={sp[item.code].src} alt={item.name} />
          </div>
        ))}
      </StepBody>
    </div>
  );
}
