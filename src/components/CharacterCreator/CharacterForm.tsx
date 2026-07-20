import { useCharacter } from "../../lib/hooks/useCharacter";
import Button from '../button';
import Avatar from '../Avatar';
import { species, type Species } from "../../lib/species.ts";
import { Classes , type Class } from "../../lib/types"

export default function CharacterForm() {
  const { character, stepIndex, CurrentStep, nextStep, previousStep } = useCharacter();

  const handleNextStep = () => {
    if(stepIndex === 0){
      nextStep();
    } else {

    }
  }

  return (
    <form className="relative flex flex-col justify-center items-center gap-3">
      <Avatar avatar={ character?.class ? character?.class : 'druid'} />
      <CurrentStep />
      <div className="flex justify-center items-center gap-3">
          <Button size="sm" onClick={nextStep}>
            Siguiente
          </Button>
          <Button secondary size="sm" onClick={previousStep}>
            Anterior
          </Button>
      </div>
    </form>
  );
}

