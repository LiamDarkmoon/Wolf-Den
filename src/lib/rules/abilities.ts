export function getAbilityModifier(score: number | null): number {
    if(score){
        return Math.floor((score - 10) / 2);
    } else {
        return 0
    }
}