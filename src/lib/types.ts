import barbarian from "../assets/classes/barbarian.png";
import bard from "../assets/classes/bard.png";
import cleric from "../assets/classes/cleric.png";
import druid from "../assets/classes/druid.png";
import fighter from "../assets/classes/fighter.png";
import monk from "../assets/classes/monk.png";
import paladin from "../assets/classes/paladin.png";
import ranger from "../assets/classes/ranger.png";
import rogue from "../assets/classes/rogue.png";
import sorcerer from "../assets/classes/sorcerer.png";
import warlock from "../assets/classes/warlock.png";
import wizard from "../assets/classes/wizard.png";

import acolyte from "../assets/background/acolyte.png";
import artisan from "../assets/background/artisan.png";
import charlatan from "../assets/background/charlatan.png";
import criminal from "../assets/background/criminal.png";
import entertainer from "../assets/background/entertainer.png";
import farmer from "../assets/background/farmer.png";
import guard from "../assets/background/guard.png";
import guide from "../assets/background/guide.png";
import hermit from "../assets/background/hermit.png";
import merchant from "../assets/background/merchant.png";
import noble from "../assets/background/noble.png";
import sage from "../assets/background/sage.png";
import sailor from "../assets/background/sailor.png";
import scribe from "../assets/background/scribe.png";
import soldier from "../assets/background/soldier.png";
import wayfarer from "../assets/background/wayfarer.png";

import acolyteBg from "../assets/background/acolyte-bg.png";
import artisanBg from "../assets/background/artisan-bg.png";
import charlatanBg from "../assets/background/charlatan-bg.png";
import criminalBg from "../assets/background/criminal-bg.png";
import entertainerBg from "../assets/background/entertainer-bg.png";
import farmerBg from "../assets/background/farmer-bg.png";
import guardBg from "../assets/background/guard-bg.png";
import guideBg from "../assets/background/guide-bg.png";
import hermitBg from "../assets/background/hermit-bg.png";
import merchantBg from "../assets/background/merchant-bg.png";
import nobleBg from "../assets/background/noble-bg.png";
import sageBg from "../assets/background/sage-bg.png";
import sailorBg from "../assets/background/sailor-bg.png";
import scribeBg from "../assets/background/scribe-bg.png";
import soldierBg from "../assets/background/soldier-bg.png";
import wayfarerBg from "../assets/background/wayfarer-bg.png";

import type { Species, Variants } from "./species";

export type Popup = "feedback" | "notifications" | "admin" | null;

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

export const Bg = {
  acolyteBg,
  artisanBg,
  charlatanBg,
  criminalBg,
  entertainerBg,
  farmerBg,
  guardBg,
  guideBg,
  hermitBg,
  merchantBg,
  nobleBg,
  sageBg,
  sailorBg,
  scribeBg,
  soldierBg,
  wayfarerBg,
} as const;
export type Bgs = keyof typeof Bg;

export type Notification = {
  id: string;
  type: string;
  title: string;
  message: string | null;
  read_at: string | null;
  created_at: string;
};

export interface Adventure {
  id: string;
  title: string;
  description: string;
  poster_url: string;
  adventure_date: Date;
  max_players: number;
  created_by: string;
}

export interface registeredAdventure {
  adventure_id: string;
  title: string;
  description: string;
  poster_url: string;
  adventure_date: string;
  max_players: number;
  min_lvl: number;
  max_lvl: number;
  role: "titular" | "suplente";
  registered_at: string;
}
export interface adventureWithStatus {
  id: string;
  title: string;
  description: string;
  poster_url: string;
  adventure_date: string;
  max_players: number;
  min_lvl: number;
  max_lvl: number;
  created_by: string;
  registered_at: string;
  currentPlayers: number;
  currentSubstitutes: number;
  isRegistered: boolean;
  role: "titular" | "suplente";
}

export interface Player {
  user_id: string;
  display_name: string;
  role: string;
  character_id: string;
  character_name: string;
}
export interface User {
  id: string;
  display_name: string;
  role: string;
}

export interface ClassRecord {
  id: string;
  name: string;
  code: Class;
  description: string | null;
  hit_die: number;
  level: number;
  subclass: SubclassRecord | null;
}

export interface SubclassRecord {
  id: string;
  class_id: string;
  code: string;
  name: string;
  description: string | null;
}

export interface SpeciesRecord {
  id: string;
  name: string;
  code: Species;
  description: string | null;
  creature_type: string;
  size: string | null;
  speed: number | null;
  variant: SpeciesVariantRecord | null;
}

export interface SpeciesVariantRecord {
  id: string;
  species_id: string;
  code: Variants;
  name: string;
  description: string | null;
}

export interface BackgroundRecord {
  id: string;
  name: string;
  code: Background;
  description: string | null;
}

export type AbilityCode = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";
export interface AbilityRecord {
  id: string;
  code: AbilityCode;
  name: string;
  description: string | null;
  sort_order: number;
}

export type CharacterAbilityScores = {
  [key in AbilityCode]: number;
};

export interface CharacterSheet {
  id: string;
  name: string;
  level: number;

  classes: ClassRecord[];
  species: SpeciesRecord;
  background: BackgroundRecord;

  abilities: Record<AbilityCode, number>;
}

export type CharacterListItem = {
  id: string;
  user_id: string;
  name: string;
  level: number;
  created_at: string;

  class_code: string | null;
  class_name: string | null;

  species_code: string | null;
  species_name: string | null;

  species_variant_code: string | null;
  species_variant_name: string | null;
};