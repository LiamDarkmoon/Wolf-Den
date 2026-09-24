import type { adventureWithStatus } from "../lib/types";
import { formatAdventureDate } from "../lib/utils/formatAdventureDate";

export default function AdventureRow({
  adventure,
}: {
  adventure: adventureWithStatus;
}) {
  return (
    <li className={`${adventure.role === 'titular' ? 'bg-primary/30 p-2 rounded-sm text-primary' : ''} grid grid-cols-[50px_1fr_50px] grid-rows-2 items-center justify-center hover:text-primary hover:bg-primary/30 p-2 rounded-sm group`}>
      <i className="col-start-1 row-span-2 fa-solid fa-dice-d20 text-primary"></i>

      <a
        href={`/adventures/league/${adventure.id}`}
        className="col-start-2 row-start-1 flex justify-center items-center border-b  border-main-text group-hover:border-primary truncate"
      >
        {adventure.title}
      </a>
      <div className="col-start-2 row-start-2 flex justify-center items-center w-full">
        <span>niveles: {adventure.min_lvl} - {adventure.max_lvl} </span>
      </div>

      <span className="grid place-items-center col-start-3 row-span-2">
        {adventure.role === "titular" ? (
          <i className="fa-solid fa-person-hiking text-emerald-500"></i>
        ) : (
          <i className="fa-solid fa-user-clock text-cyan-500"></i>
        )}
      </span>
    </li>
  );
}
