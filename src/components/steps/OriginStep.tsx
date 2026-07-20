import { useCharacter } from "../../lib/hooks/useCharacter";
import { Backgrounds , type Background } from "../../lib/types"


export default function OriginStep() {
  const { character, updateCharacter } = useCharacter();

  const handleOriginSelect = (Origin: Background) => {
    updateCharacter({ ...character, background: Origin });
  }

  return (
    <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold">Elije un Origen: 
         <span className="text-2xl text-primary ps-2">{character.background}</span>
        </h2>
        <div className="flex flex-wrap max-h-75 justify-center items-center gap-2 overflow-y-scroll">
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