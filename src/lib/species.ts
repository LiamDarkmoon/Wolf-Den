import aasimar from "../assets/aasimar.png";
import dragonborn from "../assets/dragonborn.png";
import dwarf from "../assets/dwarf.png";
import elf from "../assets/elf.png";
import halfling from "../assets/halfling.png";
import human from "../assets/human.png";
import orc from "../assets/orc.png";
import tiefling from "../assets/tiefling.png";

const gnome = ""
const goliath = ""
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