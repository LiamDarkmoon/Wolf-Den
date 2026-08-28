import { useCharacter } from "../../lib/hooks/useCharacter";
import { Backgrounds , type Background } from "../../lib/types"
import Under from "../Under";
import StepBody from "./step/StepBody";


export default function OriginStep() {
  const { character, updateCharacter } = useCharacter();

  const handleOriginSelect = (Origin: Background) => {
    updateCharacter({ ...character, background: Origin });
  }

  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center text-center mb-4">
          <h2 className="text-xl font-semibold">Elije un origen: </h2>
          <span className="h-8 text-2xl text-primary font-bold mt-2">{character.background}</span>
          <Under/>
        </div>
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