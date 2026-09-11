import { useCharacter } from "../../lib/hooks/useCharacter";
import type { AbilityCode } from "../../lib/types";
import { getAbilityModifier } from "../../lib/rules/abilities";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";

const standardArray = [15, 14, 13, 12, 10, 8] as const;

export default function AbilitiesStep() {
  const { character, abilities, updateCharacter, nextStep } = useCharacter();

  const currentScoreIndex = Object.values(character.abilities).filter(
    (score) => score !== null,
  ).length;
  const currentScore = standardArray[currentScoreIndex];
  const isCompleted = Object.values(character.abilities).every(
    (score) => score !== null,
  );

  const handleStatSelect = (ability: AbilityCode) => {
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
  };

  return (
    <div className="flex flex-col items-center">
      <StepHead
        title={!isCompleted ? "Elije tus habiliades" : "Tus puntuaciones"}
      >
        {currentScore}
      </StepHead>
        <StepBody>
          <div className="flex flex-col gap-3 w-full">
            {abilities.map((ability) => {
              const score = character.abilities[ability.code];

              if (!isCompleted && score !== null) {
                return null;
              }

              return (
                <div
                  key={ability.id}
                  className="flex items-center justify-between h-20 p-4 border-4 rounded-md cursor-pointer border-gray-300 hover:text-primary hover:border-primary"
                  onClick={() => !isCompleted && handleStatSelect(ability.code)}
                >
                  <span className="flex gap-3 w-15 text-2xl font-semibold">
                    {ability.code}:
                  </span>

                  <span className="flex gap-3 w-40 text-sm">
                    {ability.description}:
                  </span>

                  {isCompleted && (
                    <span className="w-15 text-2xl font-semibold">
                      {score}
                      ({getAbilityModifier(score) > 0 ? "+" : ""}
                      {getAbilityModifier(score)})
                    </span>
                  )}
                </div>
              );
            })}
          </div>
      </StepBody>
    </div>
  );
}
