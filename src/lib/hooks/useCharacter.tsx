import { useContext } from "react";
import { CharacterContext } from "../../components/CharacterCreator/CharacterProvider";

export function useCharacter() {
    const context = useContext(CharacterContext);

    if (!context) {
        throw new Error("useCharacter debe usarse dentro de CharacterProvider");
    }

    return context;
}