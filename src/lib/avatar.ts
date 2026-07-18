export const avatars = {
    human: {
        fighter: humanFighter,
        wizard: humanWizard,
        ranger: humanRanger,
    },

    elf: {
        fighter: elfFighter,
        wizard: elfWizard,
        ranger: elfRanger,
    },

    orc: {
        fighter: orcFighter,
        wizard: orcWizard,
        ranger: orcRanger,
    }
} as const;

export type Avatar = keyof typeof avatars;