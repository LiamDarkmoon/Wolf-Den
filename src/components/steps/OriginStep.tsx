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
      <StepHead title="Elige tu Transfondo">
        {backgrounds.find((item) => item.id === character.backgroundId)?.name}
      </StepHead>
      <StepBody>
        {backgrounds.map((item) => (
          <div
            key={item.id}
            className={`
                h-50 max-w-60 shrink-0 border-4 rounded-md cursor-pointer flex items-center justify-center gap-1.5
                ${
                  character.backgroundId === item.id
                    ? " border-primary bg-primary text-main-text"
                    : " border-amber-50 bg-amber-50 text-primary"
                }
            `}
            onClick={() => handleOriginSelect(item.id)}
          >
            <img
              src={Backgrounds[item.code].src}
              alt={item.name}
              className="h-48 w-32"
            />
            <div className="flex flex-col items-start h-full">
              <div
                className={`flex items-center justify-center pb-1 border-b ${
                  character.classId === item.id
                    ? " border-main-text"
                    : " border-primary"
                } w-full my-3`}
              >
                <h3 className="text-sm font-bold">{item.name}</h3>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-xs ms-1 text-pretty">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </StepBody>
    </div>
  );
}
