import { useCharacter } from "../../lib/hooks/useCharacter";
import InputField from "../InputField";

export default function NameStep() {
  const { character, updateCharacter } = useCharacter();

  return (
    <InputField
      label="Nombre"
      value={character.name}
      onChange={(value) => updateCharacter({ ...character, name: value })}
      id="name"
    />
  );
}