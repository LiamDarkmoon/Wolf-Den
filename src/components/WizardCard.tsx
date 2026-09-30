import { Bg, type AbilityCode, type BackgroundRecord } from "../lib/types";
import type { Character } from "./CharacterCreator/CharacterProvider";

export default function WizarCard({
  character,
  item,
  bg,
  source,
  handleSelect,
}: {
  character: Character;
  item: any;
  bg?: string | null;
  source: ImageMetadata;
  handleSelect: (id: string) => void | ((abilities: AbilityCode) => void);
}) {
  return (
    <div
      key={item.id}
      className={`
                        relative h-50 max-w-75 shrink-0 border-4 rounded-md cursor-pointer flex items-center gap-1.5
                        ${
                          character.classId === item.id
                            ? " border-primary"
                            : " border-main-text"
                        }
                    `}
      onClick={() => handleSelect(item.id)}
    >
      <img className="absolute inset-0 -z-1" src={bg ? bg : undefined} />
      <img src={source.src} alt={item.name} className="h-48 w-32" />
      <div className="flex flex-col items-start h-full">
        <div
          className={`flex items-center justify-center pb-1 border-b-2 ${
            character.classId === item.id
              ? " border-primary"
              : " border-main-text"
          } w-full my-3`}
        >
          <h3 className="text-sm font-bold">{item.name}</h3>
          {item.hit_die && <p className="text-sm ms-1">(d{item.hit_die})</p>}
        </div>
        <div className="flex items-center justify-center">
          <p className="text-xs ms-1 text-pretty">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
