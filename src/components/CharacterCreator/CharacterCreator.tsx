import CharacterForm from './CharacterForm.tsx';
import CharacterInfo from './CharacterInfo.tsx';
import CharacterProvider from './CharacterProvider.tsx';

export default function CharacterCreator() {
  return (
    <CharacterProvider>
      <section className='w-full flex justify-around'>
        <CharacterForm />
        <CharacterInfo/>
      </section>
    </CharacterProvider>
  );
}
