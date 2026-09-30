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

import drow from '../assets/species/variants/drow.png'
import wood from '../assets/species/variants/wood.png'
import high from '../assets/species/variants/high.png'
import black from '../assets/species/variants/black.png'
import blue from '../assets/species/variants/blue.png'
import brass from '../assets/species/variants/brass.png'
import bronze from '../assets/species/variants/bronze.png'
import copper from '../assets/species/variants/cooper.png'
import gold from '../assets/species/variants/gold.png'
import green from '../assets/species/variants/green.png'
import red from '../assets/species/variants/red.png'
import silver from '../assets/species/variants/silver.png'
import white from '../assets/species/variants/white.png'
import forest from '../assets/species/variants/forest.png'
import rock from '../assets/species/variants/rock.png'
import cloud from '../assets/species/variants/cloud.png'
import fire from '../assets/species/variants/fire.png'
import frost from '../assets/species/variants/frost.png'
import hill from '../assets/species/variants/hill.png'
import stone from '../assets/species/variants/stone.png'
import storm from '../assets/species/variants/storm.png'
import abyssal from '../assets/species/variants/abyssal.png'
import chthonic from '../assets/species/variants/chthonic.png'
import infernal from '../assets/species/variants/infernal.png'



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

export const variants = {
  drow,
  wood,
  high,
  black,
  blue,
  brass,
  bronze,
  copper,
  gold,
  green,
  red,
  silver,
  white,
  forest,
  rock,
  cloud,
  fire,
  frost,
  hill,
  stone,
  storm,
  abyssal,
  chthonic,
  infernal

} as const;

export type Variants = keyof typeof variants;