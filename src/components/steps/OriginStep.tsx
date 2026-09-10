import { useCharacter } from "../../lib/hooks/useCharacter";
import { Backgrounds } from "../../lib/types";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";

export default function OriginStep() {
  const { character, backgrounds, updateCharacter } = useCharacter();

  const handleOriginSelect = (backgroundId: string) => {
    updateCharacter({ backgroundId });
  };

  return (
    <div className="flex flex-col items-center">
      <StepHead title="Elije el origen">
        {backgrounds.find((item) => item.id === character.backgroundId)?.name}
      </StepHead>
      <StepBody>
        {backgrounds.map((item) => (
          <div
            key={item.id}
            className={`
                md:w-1/3 border-4 rounded-md cursor-pointer flex flex-col items-center
                ${
                  character.backgroundId === item.id
                    ? "border-primary bg-primary text-main-text"
                    : "border-amber-50 bg-amber-50 text-primary"
                }
            `}
            onClick={() => handleOriginSelect(item.id)}
          >
            <img src={Backgrounds[item.code].src} alt={item.name} />
          </div>
        ))}
      </StepBody>
    </div>
  );
}
