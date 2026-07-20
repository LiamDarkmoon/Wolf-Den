import { useCharacter } from "../../lib/hooks/useCharacter";
import InputField from "../InputField";

export default function NameStep() {
  const { character, updateCharacter } = useCharacter();

  return (
    <h2>Abilities</h2>
  );
}