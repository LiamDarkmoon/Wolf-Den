import { useCharacter } from "../../lib/hooks/useCharacter";
import { Backgrounds , type Background } from "../../lib/types"


export default function OriginStep() {
  const { character, updateCharacter } = useCharacter();

  const handleOriginSelect = (Origin: Background) => {
    updateCharacter({ ...character, background: Origin });
  }

  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center text-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">Elije un origen: </h2>
          <span className="text-3xl text-primary font-bold border-b-2 border-primary">{character.background}</span>
        </div>
        <div className="flex flex-wrap max-w-100 max-h-75 justify-center items-center gap-2 overflow-y-scroll">
            {
                Object.entries(Backgrounds).map(([backgroundName, backgroundImage]) => (
                <div key={backgroundName} className={`border-4 rounded-sm cursor-pointer ${character.background === backgroundName ? 'border-primary' : 'border-gray-300'}`} onClick={() => handleOriginSelect(backgroundName as Background)}>
                    <img src={backgroundImage.src} alt={backgroundName} className="" />
                </div>
            ))}
        </div>
    </div>
  );
}