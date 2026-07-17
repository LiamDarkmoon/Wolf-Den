import { useState } from 'react';
import Button from '../button.tsx';
import Avatar from '../Avatar.tsx';
import NameStep from '../steps/NameStep.tsx';

const steps = [
    "name",
    "species",
    "class",
    "background",
    "abilities",
    "summary",
] as const;

export default function CharacterForm() {
  const [index, setIndex] = useState(0);
  const [character, setCharacter] = useState({
    name: "",
    species: "aasimar",
  });
  
  const currentStep = steps[index];

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log('Form submitted with data:', Object.fromEntries(formData.entries()));
  };

  return (
    <form className="relative flex flex-col justify-center items-center gap-3" onSubmit={handleSubmit}>
      <h1 className="text-4xl text-primary font-bold text-center mt-12.5 border-b-2 border-primary pb-2">Crea tu personaje</h1>
      <Avatar avatar="aasimar" />
      <NameStep/>
      <div className="flex justify-center items-center gap-3">
          <Button type="submit" size="sm">Siguiente</Button>
          <Button secondary size="sm">Cancelar</Button>
      </div>
    </form>
  );
}

