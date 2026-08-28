import { useCharacter } from "../../lib/hooks/useCharacter";
import { Backgrounds , type Background } from "../../lib/types"
import Under from "../Under";
import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";


export default function OriginStep() {
  const { character, updateCharacter } = useCharacter();

  const handleOriginSelect = (Origin: Background) => {
    updateCharacter({ ...character, background: Origin });
  }

  return (
    <div className="flex flex-col items-center">
        <StepHead title="Elije el origen">
          {character.background}
        </StepHead>
        <StepBody>
            {
                Object.entries(Backgrounds).map(([backgroundName, backgroundImage]) => (
                <div key={backgroundName} className={`md:w-60 border-4 rounded-md cursor-pointer ${character.background === backgroundName ? 'border-primary' : 'border-gray-300'}`} onClick={() => handleOriginSelect(backgroundName as Background)}>
                    <img src={backgroundImage.src} alt={backgroundName} className="" />
                </div>
            ))}
        </StepBody>
    </div>
  );
}