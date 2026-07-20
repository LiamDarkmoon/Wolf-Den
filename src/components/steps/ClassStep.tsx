import { useCharacter } from "../../lib/hooks/useCharacter";
import { Classes , type Class } from "../../lib/types"


export default function ClassStep() {
  const { character, updateCharacter } = useCharacter();

  const handleClassSelect = (className: Class) => {
    updateCharacter({ ...character, class: className });
  }

  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center text-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">Elije una classe: </h2>
          <span className="text-3xl text-primary font-bold border-b-2 border-primary">{character.class}</span>
        </div>
        <div className="flex flex-wrap  max-h-75 items-center gap-2 overflow-y-scroll">
            {
                Object.entries(Classes).map(([className, classImage]) => (
                <div key={className} className={`border-4 rounded-full cursor-pointer ${character.class === className ? 'border-primary' : 'border-gray-300'}`} onClick={() => handleClassSelect(className as Class)}>
                    <img src={classImage.src} alt={className} className="w-37.5" />
                </div>
            ))}
        </div>
    </div>
  );
}