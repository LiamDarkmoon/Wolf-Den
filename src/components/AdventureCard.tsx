import type { adventureWithStatus } from "../lib/types";
import Frame from "../components/Frame";
import Poster from "../components/Poster";
import Join from "../components/Join.tsx";
import Delete from "../components/delete";

export default function AdventureCard({
  adventure,
  role,
  onDelete,
}: {
  adventure: adventureWithStatus;
  role: string | null;
  onDelete: (id: string) => void;
}) {
  return (
    <article className="relative w-full md:max-h-150 md:w-[30%] max-w-75 board border-4 border-primary shadow-border">
      <Frame />

      <div className="flex items-center flex-wrap justify-center mb-4">
        <h2 className="text-xl font-bold text-center tittle underline truncate">
          <a href={`/adventures/league/${adventure.id}`}>{adventure.title}</a>
        </h2>
        <h3 className="w-full italic text-sm"> Niveles : {adventure.min_lvl} - {adventure.max_lvl} </h3>
      </div>

      <Poster adventure={adventure} />

      <Join
        role={adventure.role}
        currentPlayers={adventure.currentPlayers}
        currentSubstitutes={adventure.currentSubstitutes}
        maxPlayers={adventure.max_players}
        isRegistered={adventure.isRegistered}
        adventureId={adventure.id}
      />
    </article>
  );
}
