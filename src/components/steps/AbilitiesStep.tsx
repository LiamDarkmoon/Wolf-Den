import { useCharacter } from "../../lib/hooks/useCharacter";


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
        nextStep();
    } 
  }

  return (
    <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col justify-center text-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">{ isCompleted ? 'Tus habilidades' :'Distribuye tus puntos:'} </h2>
        </div>
        <div>
          <span className="text-6xl text-primary font-bold">
            {currentScore}
          </span>
        </div>
        <div className="flex flex-wrap max-w-100  h-62.5 justify-center items-center gap-2">
            {
                !isCompleted ?
                Object.entries(character.abilities).filter(([, score]) => score === null).map(([ability]) => (
                <div key={ability} className={`w-29 p-2 border-4 rounded-sm cursor-pointer border-gray-300 hover:text-primary hover:border-primary`} onClick={() => handleStatSelect(ability)}>
                    <span className="w-15 text-2xl font-semibold">{ability}</span>
                </div>
            ))
            :
              Object.entries(character.abilities).map(([ability, score]) => (
                <div key={ability} className={`w-29 p-2 border-4 rounded-sm cursor-pointer border-gray-300 hover:text-primary hover:border-primary`} onClick={() => handleStatSelect(ability)}>
                    <span className="w-15 text-2xl font-semibold">{ability} |</span>
                    <span className="w-15 text-2xl font-semibold"> {score}</span>
                </div>
          ))}
        </div>
    </div>
  );
}