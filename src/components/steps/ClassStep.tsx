import { useCharacter } from "../../lib/hooks/useCharacter";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";
import { Bg, Classes, type ClassRecord } from "../../lib/types";


export default function ClassStep() {
  const { character, classes, bg, updateCharacter } = useCharacter();

  const handleClassSelect = (classId: string) => {
    updateCharacter({
      classId,
    });
  };
  console.log('bg',bg)

  return (
    <div className="flex flex-col items-center">
      <StepHead title="Elige tu clase:">
        {classes.find((item) => item.id === character.classId)?.name}
      </StepHead>

      <StepBody>
        {classes.map((item) => (
          <div
            key={item.id}
            className={`
                relative h-50 max-w-60 shrink-0 border-4 rounded-md cursor-pointer flex items-center gap-1.5
                ${
                  character.classId === item.id
                    ? " border-main-text"
                    : " border-primary"
                }
            `}
            onClick={() => handleClassSelect(item.id)}
          >
            <img className="absolute h-full inset-0 z-0" src={`${bg}`} />
            <img
              src={Classes[item.code].src}
              alt={item.name}
              className="h-48 w-32 z-1"
            />
            <div className="flex flex-col items-start h-full z-1">
              <div className={`flex items-center justify-center pb-1 border-b ${
                  character.classId === item.id
                    ? " border-main-text"
                    : " border-primary"
                } w-full my-3`}>
                <h3 className="text-sm font-bold">{item.name}</h3>
                <p className="text-sm ms-1">(d{item.hit_die})</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-xs ms-1 text-pretty">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </StepBody>
    </div>
  );
}
