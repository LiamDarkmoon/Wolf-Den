import { useCharacter } from "../../lib/hooks/useCharacter";
import Button from '../button';
import Avatar from '../Avatar';
import NameStep from '../steps/NameStep';
import ClassStep from '../steps/ClassStep'
import { species, type Species } from "../../lib/species.ts";
import { Classes , type Class } from "../../lib/types"

export default function CharacterForm() {
  const { character, updateCharacter } = useCharacter();

  return (
    <form className="relative flex flex-col justify-center items-center gap-3">
      <h1 className="text-4xl text-primary font-bold text-center mt-12.5 border-b-2 border-primary pb-2">Crea tu personaje</h1>
      <Avatar avatar={ character?.class ? character?.class : 'druid'} />
      <ClassStep/>
      <div className="flex justify-center items-center gap-3">
          <Button size="sm">Siguiente</Button>
          <Button secondary size="sm" to="/">Cancelar</Button>
      </div>
    </form>
  );
}

