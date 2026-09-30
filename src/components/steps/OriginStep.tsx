import { useCharacter } from "../../lib/hooks/useCharacter";
import { Backgrounds } from "../../lib/types";
import WizarCard from "../WizardCard";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";

export default function OriginStep() {
  const { character, bg, backgrounds, updateCharacter } = useCharacter();

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
          <WizarCard character={character} item={item} bg={bg} source={Backgrounds[item.code]} handleSelect={handleOriginSelect} />
        ))}
      </StepBody>
    </div>
  );
}
