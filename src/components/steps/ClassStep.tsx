import { useCharacter } from "../../lib/hooks/useCharacter";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";
import { Classes, type ClassRecord } from "../../lib/types";
import Avatar from "../Avatar";

export default function ClassStep() {
  const { character, classes, characterClass, updateCharacter } = useCharacter();

  const handleClassSelect = (classId: string) => {
    updateCharacter({
      classId,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <Avatar avatar={characterClass?.code ?? "druid"} />
      <StepHead title="Elige tu clase:">
        {classes.find((item) => item.id === character.classId)?.name}
      </StepHead>

      <StepBody>
        {classes.map((item) => (
          <div
            key={item.id}
            className={`
                max-w-60 shrink-0 border-4 rounded-md cursor-pointer flex items-center gap-1.5
                ${
                  character.classId === item.id
                    ? " border-primary bg-primary text-main-text"
                    : " border-main-text bg-main-text text-primary"
                }
            `}
            onClick={() => handleClassSelect(item.id)}
          >
            <img
              src={Classes[item.code].src}
              alt={item.name}
              className="h-full"
            />
            <div className="flex flex-col justify-around items-start h-full">
              <div className={`flex items-center justify-center pb-1 border-b ${
                  character.classId === item.id
                    ? " border-main-text"
                    : " border-primary"
                } w-full`}>
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
