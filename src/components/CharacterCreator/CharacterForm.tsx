import { useCharacter } from "../../lib/hooks/useCharacter";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import Button from '../button';
import Avatar from '../Avatar';
import { species, type Species } from "../../lib/species.ts";
import { Classes , type Class } from "../../lib/types"

export default function CharacterForm() {
  const { character, stepIndex, toStep ,CurrentStep, nextStep, previousStep } = useCharacter();

  const handleNextStep = () => {
    if(stepIndex === 4){
      toStep(0)
    } else {
      nextStep();
    }
  }

  const handlePrevStep = () => {
    if(stepIndex === 0) {
      navigate("/")
    } else {
      previousStep()
    }
  }

  return (
    <form className="relative flex flex-col justify-center gap-3">
      <Avatar avatar={ character?.class ? character?.class : 'druid'} />
      <CurrentStep />
      <div className="flex justify-center items-center gap-3">
          <Button size="sm" onClick={handleNextStep}>
            Siguiente
          </Button>
          <Button secondary size="sm" onClick={handlePrevStep}>
            Anterior
          </Button>
      </div>
    </form>
  );
}

