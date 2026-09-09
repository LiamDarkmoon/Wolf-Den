import { useState } from "react";
import type { adventureWithStatus } from "../lib/types";

export default function Poster({ adventure }: { adventure: adventureWithStatus }) {
  const [hover, SetHover] = useState(false);

  return (
    <div
      className={
        hover
          ? "bg-img"
          : "h-37.5 overflow-hidden bg-linear-to-b from-transparent to-secondary-bg  group"
      }
      onMouseOver={()=>SetHover(true)}
      onMouseLeave={()=>SetHover(false)}
    >
      <a href={`/adventures/league/${adventure.id}`}>
        {
            adventure.poster_url ?
            <img
              src={adventure.poster_url}
              alt={adventure.title}
              className=""
            /> : null
        }
      </a>
    </div>
  );
}
