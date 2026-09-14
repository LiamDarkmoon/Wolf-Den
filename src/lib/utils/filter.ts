export function filterByCharacterLvl(
    level: number,
    minLvl: number,
    maxLvl: number
) {
    return level >= minLvl && level <= maxLvl;
}

