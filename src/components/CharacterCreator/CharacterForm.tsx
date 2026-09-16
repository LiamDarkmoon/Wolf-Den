import { useCharacter } from "../../lib/hooks/useCharacter";
import Button from "../button";
import WizardProgress from "../ProgresionBar";

export default function CharacterForm() {
  const { 
    CurrentStep,
    nextStep,
    previousStep,
    isLastStep,
    steps,
    stepIndex,
    loading,
    error,
  } = useCharacter();

  const hasCreationError = error !== null && isLastStep;

  return (
    <form className="relative md:w-2/5 w-full h-full flex flex-col gap-3">
      <WizardProgress stepList={steps} stepIndex={stepIndex}/>
      <CurrentStep />
      <div className="flex flex-wrap justify-around items-center">
        {error && isLastStep ? (
          <span className="absolute bottom-15 w-full text-center text-rose-500">
            {error}
          </span>
        ) : null}
        {stepIndex > 0 ? (
          <Button secondary size="sm" onClick={() => previousStep()}>
            <i className="fa-solid fa-arrow-left me-2 align-middle"></i>
            Anterior
          </Button>
        ) : (
          <div className="w-37.5" />
        )}
        <Button size="sm" onClick={() => nextStep()} disabled={loading || hasCreationError}>
          {isLastStep ? "Crear" : "Siguiente"}
          {!isLastStep && (
            <i className="fa-solid fa-arrow-right ms-2 align-middle"></i>
          )}
        </Button>
      </div>
    </form>
  );
}
