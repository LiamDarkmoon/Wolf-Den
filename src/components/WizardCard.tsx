import type { AbilityCode} from "../lib/types";
import type { Character } from "./CharacterCreator/CharacterProvider";

type SelectionKey =
  | "classId"
  | "backgroundId"
  | "speciesId"
  | "speciesVariantId";

type WizardStep = SelectionKey extends `${infer T}Id` ? T : never;

export default function WizarCard({
  step,
  character,
  item,
  bg,
  source,
  handleSelect,
}: {
  step: string;
  character: Character;
  item: any;
  bg?: string | null;
  source: ImageMetadata;
  handleSelect: (id: string) => void | ((abilities: AbilityCode) => void);
}) {
  const id = `${step}Id` as SelectionKey;
  const selected = character[id] === item.id;
  const isClassStep = step === "class";

  return (
    <div
      key={item.id}
      className={`
                  relative max-w-75 h-full shrink-0 border-4 rounded-md cursor-pointer flex flex-col items-center p-2.5
                  ${
                    selected
                      ? "border-primary-hover text-primary-hover shadow-md shadow-primary-hover scale-102"
                      : "border-amber-50 text-main-text"
                  }
      `}
      onClick={() => handleSelect(item.id)}
    >
      {selected && !isClassStep ? (
        <div className="absolute inset-0 -z-2">
          <img
            className="object-fill object-center w-full h-full"
            src={`${bg}`}
          />
        </div>
      ) : (
        <div className="absolute inset-0 -z-2">
          <img
            className="object-fill object-center w-full h-full"
            src={'/league-bg.png'}
          />
        </div>
      )}
      <span className="absolute inset-0 bg-linear-to-b from-transparent via-70% via-border/60 to-black z-1" />
      <img src={source.src} alt={item.name} className={`h-full -z-1  ${selected ? "drop-shadow-lg drop-shadow-primary-hover scale-110 pb-4" : ""}`} />
      <div className="absolute bottom-4 flex flex-col text-center items-center h-40 w-4/5 z-1">
        <div
          className={`flex text-center items-center justify-center pb-1 border-b-2 ${
            selected ? " border-primary-hover" : " border-main-text"
          } w-full my-3`}
        >
          <h3 className="text-lg font-bold">{item.name}</h3>
          {item.hit_die && <p className="text-sm ms-1">(d{item.hit_die})</p>}
        </div>
        <div className="flex items-center justify-center">
          <p className="text-xs ms-1 text-pretty">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
