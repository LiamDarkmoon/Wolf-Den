import { useCharacter } from "../../lib/hooks/useCharacter";
import { Classes , type Class } from "../../lib/types"
import Under from "../Under";
import StepBody from "./step/StepBody";


export default function ClassStep() {
  const { character, updateCharacter } = useCharacter();

  const handleClassSelect = (className: Class) => {
    updateCharacter({ ...character, class: className });
  }

  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center text-center mb-4">
          <h2 className="text-xl font-semibold">Elije una classe: </h2>
          <span className="h-8 text-2xl text-primary font-bold mt-2">{character.class}</span>
          <Under/>
        </div>
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