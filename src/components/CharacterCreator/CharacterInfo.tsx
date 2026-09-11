import Avatar from "../Avatar";
import { useCharacter } from "../../lib/hooks/useCharacter";
import Under from "../Under";
import { getAbilityModifier } from "../../lib/rules/abilities";

export default function CharacterInfo() {
  const { character, characterClass, characterBackground, characterSpecies, characterSpecieVariant } =
    useCharacter();

  return (
    <article className="hidden md:flex flex-col items-center w-2/5 p-5 rounded-md scroll text-secondary-bg">
      <div className="w-1/2 text-center">
        <Avatar avatar={characterClass ? characterClass.code : "druid"} />
        <h2 className="h-8 text-2xl tittle">{character.name} | lvl 1</h2>
        <span>
          {" "}
          {characterSpecies?.name}({characterSpecieVariant?.name}) - {" "}
          {characterClass?.name}{" "}
        </span>
        <Under />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        {Object.entries(character.abilities).map(([ability, score]) => (
          <div
            key={ability}
            className={`flex items-center justify-between w-1/4 h-12.5 p-2 border-y-4 border-secondary-bg`}
          >
            <span className="w-10 text-xl font-semibold">{ability}:</span>
            <span className="text-xl font-semibold">
              {score}
              <span className="text-sm italic">
                ({getAbilityModifier(score) > 0 ? "+" : ""}
                {getAbilityModifier(score)})
              </span>
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
