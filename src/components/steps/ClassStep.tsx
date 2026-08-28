import { useCharacter } from "../../lib/hooks/useCharacter";
import { Classes , type Class } from "../../lib/types"
import Under from "../Under";
import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";


export default function ClassStep() {
  const { character, updateCharacter } = useCharacter();

  const handleClassSelect = (className: Class) => {
    updateCharacter({ ...character, class: className });
  }

  return (
    <div className="flex flex-col items-center">
        <StepHead title="Elige tu clase:">
          {character.class}
        </StepHead>
        <StepBody>
            {
                Object.entries(Classes).map(([className, classImage]) => (
                <div key={className} className={`border-4 rounded-md cursor-pointer ${character.class === className ? 'border-primary bg-primary' : 'border-amber-50 bg-amber-50'}`} onClick={() => handleClassSelect(className as Class)}>
                    <img src={classImage.src} alt={className} className="w-37.5" />
                </div>
            ))}
        </StepBody>
    </div>
  );
}