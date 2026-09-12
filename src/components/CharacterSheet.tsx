import { useEffect, type ChangeEvent } from "react";
import type { AbilityCode, CharacterSheet, SubclassRecord } from "../lib/types";
import { getAbilityModifier } from "../lib/rules/abilities";

import LvlUpButton from "../components/LvlUpButton";
import Under from "../components/Under";
import Frame from "../components/Frame";
import { useState } from "react";
import { getSubClasses, chooseSubclass } from "../lib/utils/getSubClasses";

const abilityOrder: AbilityCode[] = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

export default function CharacterSheet({
  char,
}: {
  char: CharacterSheet | null;
}) {
  const [character, setCharacter] = useState(char);
  const [subclasses, setSubclasses] = useState<SubclassRecord[] | null>();
  const [selectedSubclass, setSelectedSubclass] = useState("");

  useEffect(() => {
    const classId = character?.classes[0]?.id;
    const classLevel = character?.classes[0]?.level;
    const subclass = character?.classes[0]?.subclass;

    if (!classId || !classLevel || classLevel < 3 || subclass) {
      return;
    }

    const loadSubclasses = async () => {
      try {
        const data = await getSubClasses(classId);
        setSubclasses(data);
      } catch (error) {
        console.error("Error cargando subclases:", error);
      }
    };

    loadSubclasses();
  }, [character]);

  const handleChooseSubclass = async () => {
    if (!character || !selectedSubclass) return;

    try {
      const updatedCharacter = await chooseSubclass({
        character,
        selectedSubclass,
      });

      setCharacter(updatedCharacter);
      setSelectedSubclass("");
      setSubclasses([]);
    } catch (error) {
      console.error("Error eligiendo subclase:", error);
    }
  };

  const handleSelect = async (e: ChangeEvent<HTMLSelectElement>) => {
    const subclassId = e.target.value;

    setSelectedSubclass(subclassId);
    handleChooseSubclass();
  };

  return (
    <article className="relative flex flex-col items-center md:w-1/3 h-[75vh] p-6 gap-3 rounded-md scroll text-secondary-bg">
      <Frame />
      <h1 className="h-8 text-3xl font-black pb-8 border-b-2 tittle">
        {character?.name} | lvl: {character?.level}{" "}
      </h1>
      <div className="flex flex-col items-center gap-1">
        <LvlUpButton setCharacter={setCharacter} character={character} />
        <span className=""> {character?.background.name}</span>
        {character?.classes.map((characterClass, index) => (
          <div key={characterClass.id} className="flex flex-col items-center">
            <span className="">
              {character?.species.name}{(character?.species.variant?.name)}
            </span>
            <span className="pb-2 border-b">
              {characterClass.name}({characterClass.level}) {""}
              {characterClass.subclass ? characterClass.subclass.name : null}
            </span>
            {characterClass.level >= 3 && !characterClass.subclass ? (
              <div className="flex gap-2 justify-center items-center">
                <select
                  className="p-2 text-sm italic text-main-text bg-primary rounded-t-lg w-37.5"
                  value={selectedSubclass}
                  onChange={handleSelect}
                >
                  {subclasses?.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.name}
                    </option>
                  ))}
                </select>
                <button
                  className="p-2 rounded-lg grid place-items-center text-main-text bg-primary hover:bg-primary-hover"
                  onClick={handleChooseSubclass}
                >
                  <i className="fa-solid fa-floppy-disk"></i>
                </button>
              </div>
            ) : null}
            <p className="w-4/5 text-center italic">
              {characterClass.description}
            </p>
          </div>
        ))}
        <Under className="w-1/2" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Object.entries(character?.abilities)
          .sort(
            ([a], [b]) =>
              abilityOrder.indexOf(a as AbilityCode) -
              abilityOrder.indexOf(b as AbilityCode),
          )
          .map(([ability, score]) => (
            <div
              key={ability}
              className="flex items-center justify-between w-30  h-12.5 p-2 border-2 border-secondary-bg rounded-lg"
            >
              <span className="w-10 text-xl">{ability}:</span>

              <span className="text-xl">
                {score}
                <span className="text-sm italic">
                  ({getAbilityModifier(score) >= 0 ? "+" : ""}
                  {getAbilityModifier(score)})
                </span>
              </span>
            </div>
          ))}
      </div>
    </article>
  );
}
