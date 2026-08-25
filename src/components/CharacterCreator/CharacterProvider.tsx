import { createContext, useState, useEffect, type ComponentType } from 'react';
import { actions } from "astro:actions";
import type { Species } from '../../lib/species';
import type { Background, Class } from '../../lib/types';
import NameStep from '../steps/NameStep';
import ClassStep from '../steps/ClassStep'
import OriginStep from '../steps/OriginStep';
import SpecieStep from '../steps/SpecieStep';
import AbilitiesStep from '../steps/AbilitiesStep';

const DRAFT_KEY = `wolf-den-character-draft`;

export interface Character {
    name: string;

    species?: Species;

    class?: Class;

    background?: Background;

    abilities: {
        str: number | null,
        dex: number | null,
        con: number | null,
        int: number | null,
        wis: number | null,
        cha: number | null
    };
}


interface CharacterContext {
    character: Character;
    
    stepIndex: number;
    CurrentStep: ComponentType | string;
    
    nextStep(): void;
    
    previousStep(): void;

    toStep(arg:number): void
    
    updateCharacter(
        values: Partial<Character>
    ): void;

    resetCharacter(): void;

    saveCharacter: () => Promise<void>;
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
                str: null,
                dex: null,
                con: null,
                int: null,
                wis: null,
                cha: null
            }
        };
        
        const [hydrated, setHydrated] = useState(false);
        const [character, setCharacter] = useState<Character>(initialCharacter);
        
        const [stepIndex, setStepIndex] = useState(0);
        const step = steps[stepIndex];
        const CurrentStep = step.component;

        useEffect(() => {
            const stored = localStorage.getItem(DRAFT_KEY);

            if (stored) {
                try {
                const draft = JSON.parse(stored);
                setCharacter(draft);
                } catch {
                localStorage.removeItem(DRAFT_KEY);
                }
            }

            setHydrated(true);
        }, []);

        useEffect(() => {
            if (!hydrated) return;

            localStorage.setItem(
                DRAFT_KEY,
                JSON.stringify(character)
            );
        }, [character, hydrated]);

        if (!hydrated) {
            return <p>Cargando personaje...</p>;
        }
        
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

        const toStep = (stepIndex: number) => {
            setStepIndex(stepIndex)
        }

        const resetCharacter = () => {
            setCharacter(initialCharacter);
            setStepIndex(0);
        }

        const saveCharacter = async () => {
            const result = await actions.createCharacter(character);

            if (result.error) {
                console.error(result.error);
                return;
            }

            resetCharacter();
        }

    return (
        <CharacterContext.Provider value={{ character, stepIndex, toStep,CurrentStep, nextStep, previousStep, updateCharacter, resetCharacter, saveCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
}


export const CharacterContext = createContext<CharacterContext | null>(null);