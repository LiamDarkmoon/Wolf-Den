import { useCharacter } from "../../lib/hooks/useCharacter";
import Button from '../button';


export default function CharacterForm() {
  const { CurrentStep, nextStep, previousStep } = useCharacter();

  return (
    <form className="md:w-2/5 w-full relative flex flex-col gap-3">
      <CurrentStep />
      <div className="flex justify-around items-center gap-3">
          <Button secondary size="sm" onClick={()=>previousStep()}>
            Anterior
          </Button>
          <Button size="sm" onClick={()=>nextStep()}>
            Siguiente
          </Button>
      </div>
    </form>
  );
}

