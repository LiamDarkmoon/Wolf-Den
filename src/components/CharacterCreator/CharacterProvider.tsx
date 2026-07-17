import { createContext, useContext, useState } from 'react';
import type { Species } from '../../lib/species';
import type { Classes, Backgrounds } from '../../lib/types';

export interface Character {
    name: string;

    species?: Species;

    class?: Classes;

    background?: Backgrounds;

    abilities: {
        str: number;
        dex: number;
        con: number;
        int: number;
        wis: number;
        cha: number;
    };
}


interface CharacterContext {
    character: Character;
    
    step: Step;
    
    nextStep(): void;
    
    previousStep(): void;
    
    updateCharacter(
        values: Partial<Character>
    ): void;

    resetCharacter(): void;
}

export const steps = [
            "name",
            "species",
            "class",
            "background",
            "summary",
        ] as const;
        
        export type Step = typeof steps[number];

export default function CharacterProvider({ children }: { children: React.ReactNode }) {
        const initialCharacter: Character = {
            name: "",
            species: "aasimar",
            class: "fighter",
            background: "soldier",
            abilities: {
                str: 10,
                dex: 10,
                con: 10,
                int: 10,
                wis: 10,
                cha: 10
            }
        };
        
        const [character, setCharacter] = useState<Character>(initialCharacter);
        
        const [step, setStep] = useState<Step>(steps[0]);
        
        const updateCharacter = (values: Partial<Character>) => {
            setCharacter(prev => ({
                ...prev,
                ...values,
            }));
        };
        
        const nextStep = () => {
            setStep(prev => steps[Math.min(steps.indexOf(prev) + 1, steps.length - 1)]);
        };
        
        const previousStep = () => {
            setStep(prev => steps[Math.max(steps.indexOf(prev) - 1, 0)]);
        };

        const resetCharacter = () => {
            setCharacter(initialCharacter);
            setStep(steps[0]);
        }

    return (
        <CharacterContext.Provider value={{ character, step, nextStep, previousStep, updateCharacter, resetCharacter}}>
            {children}
        </CharacterContext.Provider>
    );
}


export const CharacterContext = createContext<CharacterContext | null>(null);