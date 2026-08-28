import { useCharacter } from "../../lib/hooks/useCharacter";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import Button from '../button';
import Avatar from '../Avatar';

export default function CharacterForm() {
  const { stepIndex,CurrentStep, nextStep, previousStep, saveCharacter } = useCharacter();

  const handleNextStep = async () => {
    if(stepIndex === 4){
      const char = await saveCharacter()
      if (!char) return
      navigate(`/profile/characters/${char.id}`)
    } else {
      nextStep();
    }
  }

  const handlePrevStep = async () => {
    if(stepIndex === 0) {
      navigate("/")
    } else {
      previousStep()
    }
  }

  return (
    <form className="md:w-2/5 w-full relative flex flex-col gap-3">
      <CurrentStep />
      <div className="flex justify-around items-center gap-3">
          <Button secondary size="sm" onClick={handlePrevStep}>
            Anterior
          </Button>
          <Button size="sm" onClick={handleNextStep}>
            Siguiente
          </Button>
      </div>
    </form>
  );
}

