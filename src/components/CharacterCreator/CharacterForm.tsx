import Button from '../button.tsx';
import Avatar from '../Avatar.tsx';
import NameStep from '../steps/NameStep.tsx';

export default function CharacterForm() {

  return (
    <form className="relative flex flex-col justify-center items-center gap-3">
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

