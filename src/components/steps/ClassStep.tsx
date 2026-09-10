import { useEffect, useState } from "react";

import { useCharacter } from "../../lib/hooks/useCharacter";
import { supabase } from "../../db/supabase-browser";

import StepBody from "./step/StepBody";
import StepHead from "./step/StepHead";
import { Classes, type ClassRecord } from "../../lib/types";

export default function ClassStep() {
    const {
        character,
        classes,
        updateCharacter
    } = useCharacter();

    const handleClassSelect = (classId: string) => {
        updateCharacter({
            classId
        });
    };

    return (
        <div className="flex flex-col items-center">
            <StepHead title="Elige tu clase:">
                {
                    classes.find(
                        (item) => item.id === character.classId
                    )?.name
                }
            </StepHead>

            <StepBody>
                {(
                    classes.map((item) => (
                        <div
                            key={item.id}
                            className={`
                                border-4 rounded-md cursor-pointer flex flex-col items-center
                                ${
                                    character.classId === item.id
                                        ? "border-primary bg-primary text-main-text"
                                        : "border-amber-50 bg-amber-50 text-primary"
                                }
                            `}
                            onClick={() => handleClassSelect(item.id)}
                        >
                            <div className="w-37.5 p-4 flex items-center justify-center">
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-sm ms-1 italic">
                                    (d{item.hit_die})
                                </p>
                            </div>
                            <img src={Classes[item.code].src} alt={item.name} />
                        </div>
                    ))
                )}
            </StepBody>
        </div>
    );
}