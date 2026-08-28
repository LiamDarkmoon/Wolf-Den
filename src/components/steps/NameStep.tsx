import { useCharacter } from "../../lib/hooks/useCharacter";
import InputField from "../InputField";
import StepBody from "./step/StepBody";
import Avatar from "../Avatar";
import Under from "../Under";

export default function NameStep() {
  const { character, updateCharacter } = useCharacter();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center text-center mb-4">
        <h2 className="text-xl font-semibold">Quien eres?: </h2>
        <span className="max-w-50 h-8 text-2xl text-primary font-bold mt-2">
          {character.name}
        </span>
        <Under/>
      </div>
      <StepBody>
      <Avatar avatar={ character?.class ? character?.class : 'druid'} />
        <InputField
          label="Nombre"
          value={character.name}
          onChange={(value) => updateCharacter({ ...character, name: value })}
          id="name"
        />
      </StepBody>
    </div>
  );
}