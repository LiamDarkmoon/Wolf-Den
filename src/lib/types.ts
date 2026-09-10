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

import type { Species } from "./species";
import type { Character } from "../components/CharacterCreator/CharacterProvider";

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
  adventure_id: string,
  title: string;
  description: string;
  poster_url: string;
  adventure_date: Date;
  max_players: number;
  min_lvl: number;
  max_lvl:number;
  role: 'titular' | 'suplente',
  registered_at: Date
}
export interface adventureWithStatus {
  id: string,
  title: string;
  description: string;
  poster_url: string;
  adventure_date: string;
  max_players: number;
  min_lvl: number;
  max_lvl:number;
  created_by: string;
  registered_at: string,
  currentPlayers: number,
  currentSubstitutes: number,
  isRegistered: boolean,
  role: 'titular' | 'suplente',
}

export interface Player {
  user_id: string,
  display_name: string,
  role: string,
  character_id: string,
  character_name: string
}
export interface User {
  id: string,
  display_name: string,
  role: string,
}

export interface ClassRecord {
    id: string;
    name: string;
    code: Class;
    description: string | null;
    hit_die: number;
}

export interface SpeciesRecord {
    id: string;
    name: string;
    code: Species;
    description: string | null;
    creature_type: string;
    size: string | null;
    speed: number | null;
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

  class: ClassRecord;
  species: SpeciesRecord;
  background: BackgroundRecord;

  abilities: Record<AbilityCode, number>;
}