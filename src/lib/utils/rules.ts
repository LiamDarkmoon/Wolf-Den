import { getAbilityModifier } from "../rules/abilities"

export function getHealth(
  hitDie: number,
  level: number,
  constitution: number,
): number {
  const conMod = getAbilityModifier(constitution)  
  const hpPerLevel = Math.floor(hitDie / 2) + 1;

  return hitDie + hpPerLevel * (level - 1);
}

export function getArmorClass(dex: number): number {
    const ac = 10 + getAbilityModifier(dex)
    return ac
}