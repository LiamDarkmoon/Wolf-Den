import type { Character } from "../../components/CharacterCreator/CharacterProvider";

const DRAFT_KEY = `wolf-den-character-draft`;

export function saveCharacterDraft(character: Character) {
  localStorage.setItem(
    DRAFT_KEY,
    JSON.stringify(character)
  );
}

export function loadCharacterDraft(): Character | null {
  const stored = localStorage.getItem(DRAFT_KEY);

  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function clearCharacterDraft() {
  localStorage.removeItem(DRAFT_KEY);
}