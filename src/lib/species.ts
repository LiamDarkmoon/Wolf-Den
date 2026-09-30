import aasimar from "../assets/species/aasimar.png";
import dragonborn from "../assets/species/dragonborn.png";
import dwarf from "../assets/species/dwarf.png";
import elf from "../assets/species/elf.png";
import gnome from "../assets/species/gnome.png";
import goliath from "../assets/species/gnome.png";
import halfling from "../assets/species/halfling.png";
import human from "../assets/species/human.png";
import orc from "../assets/species/orc.png";
import tiefling from "../assets/species/tiefling.png";


export const species = {
  aasimar,
  dragonborn,
  dwarf,
  elf,
  gnome,
  goliath,
  halfling,
  human,
  orc,
  tiefling,
} as const;

export type Species = keyof typeof species;