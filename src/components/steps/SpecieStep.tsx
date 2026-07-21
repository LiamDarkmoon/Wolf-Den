import { useCharacter } from "../../lib/hooks/useCharacter";
import { species, type Species } from "../../lib/species";


export default function SpecieStep() {
  const { character, updateCharacter } = useCharacter();

  const handleSpecieSelect = (Specie: Species) => {
    updateCharacter({ ...character, species: Specie });
  }

  return (
    <div className="flex flex-col items-center max-w-screen px-6">
        <div className="flex flex-col justify-center text-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">Elije una especie: </h2>
          <span className="text-3xl text-primary font-bold border-b-2 border-primary">{character.species}</span>
        </div>
        <div className="flex flex-wrap max-w-100 max-h-75 justify-center items-center gap-2 overflow-y-scroll">
            {
                Object.entries(species).map(([specieName, specieImage]) => (
                <div key={specieName} className={`border-4 rounded-full cursor-pointer ${character.species === specieName ? 'border-primary' : 'border-gray-300'}`} onClick={() => handleSpecieSelect(specieName as Species)}>
                    <img src={specieImage.src} alt={specieName} className="size-71" />
                </div>
            ))}
        </div>
    </div>
  );
}