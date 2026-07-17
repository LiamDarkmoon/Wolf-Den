export const Classes = {
  "barbarian" : "Barbarian",
  "bard" : "Bard",
  "cleric" : "Cleric",
  "druid" : "Druid",
  "fighter" : "Fighter",
  "monk" : "Monk",
  "paladin" : "Paladin",
  "ranger" : "Ranger",
  "rogue" : "Rogue",
  "sorcerer" : "Sorcerer",
  "warlock" : "Warlock",
  "wizard" : "Wizard",
} as const;
export type Classes = keyof typeof Classes;

export const Backgrounds = {
  "acolyte" : "Acolyte",
  "artisan" : "Artisan",
  "charlatan" : "Charlatan",
  "criminal" : "Criminal",
  "entertainer" : "Entertainer",
  "farmer" : "Farmer",
  "guard" : "Guard",
  "guide" : "Guide",
  "hermit" : "Hermit",
  "merchant" : "Merchant",
  "noble" : "Noble",
  "sage" : "Sage",
  "sailor" : "Sailor",
  "scribe" : "Scribe",
  "soldier" : "Soldier",
  "wayfarer" : "Wayfarer",
} as const;
export type Backgrounds = keyof typeof Backgrounds;