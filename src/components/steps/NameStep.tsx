import { useEffect, useState } from 'react';

import { useCharacter } from "../../lib/hooks/useCharacter";
import { useDebounce } from "../../lib/hooks/useDebounce";

import InputField from "../InputField";
import StepBody from "./step/StepBody";
import Avatar from "../Avatar";
import StepHead from "./step/StepHead";

export default function NameStep() {
  const { character, updateCharacter, characterClass } = useCharacter();

  const [name, setName] = useState(character?.name || "");

  const debouncedName = useDebounce(name, 500);

  useEffect(() => {
    if (debouncedName === character.name) return;

    updateCharacter({
      name: debouncedName,
    });
  }, [debouncedName]);

  return (
    <div className="flex flex-col items-center">
      <StepHead title="¿Cuál es tu nombre?">
        {character.name}
      </StepHead>

      <StepBody>
        <div className='flex flex-col mx-auto'>
        <Avatar avatar={characterClass?.code ?? "druid"} />

        <InputField
          label="Nombre"
          value={name}
          onChange={setName}
          id="name"
        />
        </div>
      </StepBody>
    </div>
  );
}