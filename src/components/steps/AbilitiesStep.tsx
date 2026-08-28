import { useCharacter } from "../../lib/hooks/useCharacter";
import Under from "../Under";
import StepBody from "./step/StepBody";


const standardArray = [15, 14, 13, 12, 10, 8] as const;

export default function ClassStep() {
  const { character, updateCharacter,nextStep } = useCharacter();

  const currentScoreIndex = Object.values(character.abilities)
    .filter(score => score !== null).length;
  const currentScore = standardArray[currentScoreIndex];
  const isCompleted = Object.values(character.abilities)
    .every(score => score !== null);
  

  const handleStatSelect = (ability:string) => {
    if (currentScore == null) return;

    updateCharacter({
        abilities: {
            ...character.abilities,
            [ability]: currentScore,
        },
    });

    if (currentScoreIndex === standardArray.length - 1) {
        console.log("All abilities have been assigned.");
        nextStep();
    } 
  }

  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center text-center mb-4">
          <h2 className="text-xl font-semibold">{!isCompleted ? 'Elije tus habiliades' : 'Tus puntuaciones'} </h2>
          <span className="h-8 text-2xl text-primary font-bold mt-2">
            {currentScore}
          </span>
          <Under/>
        </div>
        <StepBody>
            {
                !isCompleted ?
                Object.entries(character.abilities).filter(([, score]) => score === null).map(([ability]) => (
                <div key={ability} className={`flex items-center w-full h-20 p-2 border-4 rounded-md cursor-pointer border-gray-300 hover:text-primary hover:border-primary`} onClick={() => handleStatSelect(ability)}>
                    <span className="w-15 text-2xl font-semibold">{ability}</span>
                </div>
            ))
            :
              Object.entries(character.abilities).map(([ability, score]) => (
                <div key={ability} className={`flex items-center w-full h-20 p-2 border-4 rounded-md cursor-pointer border-gray-300 hover:text-primary hover:border-primary`} onClick={() => handleStatSelect(ability)}>
                    <span className="w-15 text-2xl font-semibold">{ability}:</span>
                    <span className="w-15 text-2xl font-semibold"> {score}</span>
                </div>
          ))}
        </StepBody>
    </div>
  );
}