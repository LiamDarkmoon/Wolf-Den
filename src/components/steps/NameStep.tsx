import { useCharacter } from "../../lib/hooks/useCharacter";

export default function NameStep() {
  const { character, updateCharacter } = useCharacter();

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={character.name}
        onChange={(e) => updateCharacter({ ...character, name: e.target.value })}
        className="border-2 border-primary rounded-md p-2 w-80"
      />
    </div>
  );
}