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
                        max-w-60 shrink-0 border-4 rounded-md cursor-pointer flex items-center gap-1.5
                        ${
                          character.speciesId === item.id
                            ? "border-primary bg-primary text-main-text"
                            : "border-amber-50 bg-amber-50 text-primary"
                        }
                        `}
            onClick={() => handleSpecieSelect(item.id)}
          >
            <img src={sp[item.code].src} alt={item.name} className="w-32" />
            <div className="flex flex-col items-start h-full">
              <div
                className={`flex items-center justify-center pb-1 border-b ${
                  character.speciesId === item.id
                    ? " border-main-text"
                    : " border-primary"
                } w-full my-3`}
              >
                <h3 className="text-sm font-bold">{item.name}</h3>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-[10px] ms-1 text-pretty">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </StepBody>
    </div>
  );
}
