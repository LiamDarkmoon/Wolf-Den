import { actions } from "astro:actions";
import type { registeredAdventure } from "../lib/types";

export default function AdventureRow({ adventure } : { adventure: registeredAdventure }) {
  /*    const handleDelete = async () => {
        const result = await actions.deleteCharacter({
            id: character.id,
        });

        if (result.error) {
            console.error(result.error);
            return;
        }

        onDelete(character.id);
    }; */

  return (
    <li className=" flex justify-between items-center hover:text-primary hover:bg-primary/30 p-2 rounded-sm">
      <i className="fa-solid fa-dice-d20 text-primary"></i>

      <a href={`/adventures/league/${adventure.adventure_id}`} className="truncate">
        {adventure.title}
      </a>

      <span>
        {adventure.role === "titular" ? (
          <i className="fa-solid fa-user-check text-emerald-500"></i>
        ) : (
          <i className="fa-solid fa-user-clock text-cyan-500"></i>
        )}
      </span>
    </li>
  );
}
