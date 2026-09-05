import { useState } from "react";
import AdventureRow from "./AdventureRow";
import type { registeredAdventure } from "../lib/types";

export default function AdventuresList({
  adventures,
}: {
  adventures: registeredAdventure[] | null;
}) {
  const [adventuresList, setAdventuresList] = useState(adventures ?? []);

  /*     const handleDelete = (id: string) => {
        setAdventuresList(prev =>
            prev.filter(adventures => adventure.id !== id)
        );
    };
 */
  return (
    <ul className="flex flex-col gap-2 min-w-75 md:max-w-fit">
      {adventuresList.map((adventure: registeredAdventure) => {
        return <AdventureRow key={adventure.adventure_id} adventure={adventure} />;
      })}
    </ul>
  );
}
