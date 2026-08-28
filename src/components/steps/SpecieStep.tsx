import { useCharacter } from "../../lib/hooks/useCharacter";
import { species, type Species } from "../../lib/species";
import Under from "../Under";
import StepBody from "./step/StepBody";


export default function SpecieStep() {
  const { character, updateCharacter } = useCharacter();

  const handleSpecieSelect = (Specie: Species) => {
    updateCharacter({ ...character, species: Specie });
  }

  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center text-center mb-4">
          <h2 className="text-xl font-semibold">Elije una especie: </h2>
          <span className="h-8 text-2xl text-primary font-bold mt-2">{character.species}</span>
          <Under/>
        </div>
        <StepBody>
            {
                Object.entries(species).map(([specieName, specieImage]) => (
                <div key={specieName} className={`md:w-60 border-4 rounded-md cursor-pointer ${character.species === specieName ? 'border-primary bg-primary' : 'border-amber-50 bg-amber-50'}`} onClick={() => handleSpecieSelect(specieName as Species)}>
                    <img src={specieImage.src} alt={specieName} className="" />
                </div>
            ))}
        </StepBody>
    </div>
  );
}