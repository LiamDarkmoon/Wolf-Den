import { useCharacter } from "../../lib/hooks/useCharacter";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import Button from '../button';
import Avatar from '../Avatar';

export default function CharacterForm() {
  const { character, stepIndex,CurrentStep, nextStep, previousStep, saveCharacter } = useCharacter();

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
    <form className="relative flex flex-col justify-center gap-3">
      <Avatar avatar={ character?.class ? character?.class : 'druid'} />
      <CurrentStep />
      <div className="flex justify-center items-center gap-3">
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

