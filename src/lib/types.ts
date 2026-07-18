import barbarian from "../assets/barbarian.png";
import bard from "../assets/bard.png";
import cleric from "../assets/cleric.png";
import druid from "../assets/druid.png";
import fighter from "../assets/fighter.png";
import monk from "../assets/monk.png";
import paladin from "../assets/paladin.png";
import ranger from "../assets/ranger.png";
import rogue from "../assets/rogue.png";
import sorcerer from "../assets/sorcerer.png";
import warlock from "../assets/warlock.png";
import wizard from "../assets/wizard.png";

export const Classes = {
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  ranger,
  rogue,
  sorcerer,
  warlock,
  wizard,
} as const;
export type Class = keyof typeof Classes;

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