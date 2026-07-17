import CharacterForm from './CharacterForm.tsx';
import CharacterProvider from './CharacterProvider.tsx';

export default function CharacterCreator() {
  return (
    <CharacterProvider>
      <CharacterForm />
    </CharacterProvider>
  );
}
