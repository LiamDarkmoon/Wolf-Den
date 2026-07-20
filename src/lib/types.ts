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

import acolyte from "../assets/acolyte.png";
import artisan from "../assets/artisan.png";
import charlatan from "../assets/charlatan.png";
import criminal from "../assets/criminal.png";
import entertainer from "../assets/entertainer.png";
import farmer from "../assets/farmer.png";
import guard from "../assets/guard.png";
import guide from "../assets/guide.png";
import hermit from "../assets/hermit.png";
import merchant from "../assets/merchant.png";
import noble from "../assets/noble.png";
import sage from "../assets/sage.png";
import sailor from "../assets/sailor.png";
import scribe from "../assets/scribe.png";
import soldier from "../assets/soldier.png";
import wayfarer from "../assets/wayfarer.png";

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
  acolyte,
  artisan,
  charlatan,
  criminal,
  entertainer,
  farmer,
  guard,
  guide,
  hermit,
  merchant,
  noble,
  sage,
  sailor,
  scribe,
  soldier,
  
  wayfarer,
} as const;
export type Background = keyof typeof Backgrounds;