import { createContext, useState, type ComponentType } from 'react';
import type { Species } from '../../lib/species';
import type { Background, Class } from '../../lib/types';
import NameStep from '../steps/NameStep';
import ClassStep from '../steps/ClassStep'
import OriginStep from '../steps/OriginStep';
import SpecieStep from '../steps/SpecieStep';
import AbilitiesStep from '../steps/AbilitiesStep';


export interface Character {
    name: string;

    species?: Species;

    class?: Class;

    background?: Background;

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
    
    stepIndex: number;
    CurrentStep: ComponentType | string;
    
    nextStep(): void;
    
    previousStep(): void;
    
    updateCharacter(
        values: Partial<Character>
    ): void;

    resetCharacter(): void;
}

export const steps = [
    {
        id: "Class",
        component: ClassStep
    }
    ,
    {
        id: "Origin",
        component: OriginStep
    }
    ,
    {
        id: "Specie",
        component: SpecieStep
    }
    ,
    {
        id: "Abilities",
        component: AbilitiesStep
    },
    {
        id: "Name",
        component: NameStep
    }
] as const;
export type Step = typeof steps[number];

export default function CharacterProvider({ children }: { children: React.ReactNode }) {
        const initialCharacter: Character = {
            name: "",
            species: "aasimar",
            
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
        
        const [stepIndex, setStepIndex] = useState(0);
        const step = steps[stepIndex];
        const CurrentStep = step.component;
        
        const updateCharacter = (values: Partial<Character>) => {
            setCharacter(prev => ({
                ...prev,
                ...values,
            }));
        };
        
        const nextStep = () => {
            setStepIndex(i => Math.min(i + 1, steps.length - 1));
        };
        
        const previousStep = () => {
            setStepIndex(i => Math.max(i - 1, 0));
        };

        const resetCharacter = () => {
            setCharacter(initialCharacter);
            setStepIndex(0);
        }

    return (
        <CharacterContext.Provider value={{ character, stepIndex, CurrentStep, nextStep, previousStep, updateCharacter, resetCharacter}}>
            {children}
        </CharacterContext.Provider>
    );
}


export const CharacterContext = createContext<CharacterContext | null>(null);