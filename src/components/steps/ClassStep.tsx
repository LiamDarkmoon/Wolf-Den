import { useCharacter } from "../../lib/hooks/useCharacter";
import { Classes , type Class } from "../../lib/types"


export default function ClassStep() {
  const { character, updateCharacter } = useCharacter();

  const handleClassSelect = (className: Class) => {
    updateCharacter({ ...character, class: className });
  }

  return (
    <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold">Elije una classe: 
         <span className="text-2xl text-primary ps-2">{character.class}</span>
        </h2>
        <div className="flex flex-col flex-wrap  max-h-80 items-center gap-2 p-2">
            {
                Object.entries(Classes).map(([className, classImage]) => (
                <div key={className} className={`border-4 rounded-full cursor-pointer ${character.class === className ? 'border-primary' : 'border-gray-300'}`} onClick={() => handleClassSelect(className as Class)}>
                    <img src={classImage.src} alt={className} className="h-20" />
                </div>
            ))}
        </div>
    </div>
  );
}