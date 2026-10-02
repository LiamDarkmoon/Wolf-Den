import { useCharacter } from "../../lib/hooks/useCharacter";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";
import { Classes } from "../../lib/types";
import WizardCard from "../WizardCard";


export default function ClassStep() {
  const { character, classes, bg, updateCharacter } = useCharacter();

  const handleClassSelect = (classId: string) => {
    updateCharacter({
      classId,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <StepHead title="Elige tu clase:">
        {classes.find((item) => item.id === character.classId)?.name}
      </StepHead>

      <StepBody>
        {classes.map((item) => (
          <WizardCard key={item.id} step="class" character={character} item={item} bg={bg} source={Classes[item.code]} handleSelect={handleClassSelect} />
        ))}
      </StepBody>
    </div>
  );
}
