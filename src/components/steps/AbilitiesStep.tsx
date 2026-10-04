import { useCharacter } from "../../lib/hooks/useCharacter";
import type { AbilityCode } from "../../lib/types";
import { getAbilityModifier } from "../../lib/rules/abilities";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";

const standardArray = [15, 14, 13, 12, 10, 8] as const;

export default function AbilitiesStep() {
  const { character, abilities, updateCharacter, nextStep } = useCharacter();

  const assignedScores = Object.values(character.abilities).filter(
    (score) => score !== null,
  );

  const currentScore = standardArray.find(
    (score) => !assignedScores.includes(score),
  );

  const isCompleted = assignedScores.length === standardArray.length;

  const handleStatSelect = (ability: AbilityCode) => {
    const currentAbilityScore = character.abilities[ability];

    // Si ya tiene un valor → lo quitamos
    if (currentAbilityScore !== null) {
      updateCharacter({
        abilities: {
          ...character.abilities,
          [ability]: null,
        },
      });

      return;
    }

    // Si no quedan scores disponibles, no hacemos nada
    if (currentScore == null) return;

    updateCharacter({
      abilities: {
        ...character.abilities,
        [ability]: currentScore,
      },
    });

    // Si acabamos de asignar el último score
    if (assignedScores.length === standardArray.length - 1) {
      nextStep();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <StepHead
        title={!isCompleted ? "Elige tus habilidades" : "Tus puntuaciones"}
      >
        <div className="flex items-center justify-center gap-2">
          {standardArray.map((score) => {
            const isUsed = assignedScores.includes(score);
            const isCurrent = score === currentScore;

            return (
              <span
                key={score}
                className={`
            flex items-center justify-center
            size-7.5 rounded-full text-sm font-bold
            border-2 transition-all duration-200
            ${
              isCurrent
                ? "border-primary bg-primary text-main-text scale-110 shadow-md shadow-primary/40"
                : isUsed
                  ? "border-primary/50 text-primary/60"
                  : "border-main-text/50 text-main-text"
            }
          `}
              >
                {score}
              </span>
            );
          })}
        </div>
      </StepHead>

      <StepBody>
        <div className="relative w-full h-full shrink-0 rounded-md flex flex-col items-center gap-2">
          {abilities.map((ability) => {
            const score = character.abilities[ability.code];

            return (
              <div
                key={ability.id}
                className={`
                  flex items-center justify-between
                  w-full h-15 p-2.5 border-4 rounded-md cursor-pointer
                  ${
                    score !== null
                      ? "border-primary-hover text-primary-hover"
                      : "border-gray-300 hover:text-primary hover:border-primary"
                  }
                `}
                onClick={() => handleStatSelect(ability.code)}
              >
                <span className="flex w-15 text-xl font-semibold">
                  {ability.code}:
                </span>

                <span className="flex w-45 text-xs">{ability.description}</span>

                <span className="w-15 text-lg font-semibold">
                  {score !== null ? (
                    <>
                      {score}
                      {" ("}
                      {getAbilityModifier(score) > 0 ? "+" : ""}
                      {getAbilityModifier(score)}
                      {")"}
                    </>
                  ) : (
                    "—"
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </StepBody>
    </div>
  );
}
