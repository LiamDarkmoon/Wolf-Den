import { useState } from "react";
import type { adventureWithStatus } from "../lib/types";

export default function Poster({
  adventure,
}: {
  adventure: adventureWithStatus;
}) {
  const [hover, SetHover] = useState(false);

  return (
    <div
      className={
        hover
          ? "bg-img"
          : "h-37.5 overflow-hidden bg-linear-to-b from-transparent to-secondary-bg  group"
      }
      onClick={() => SetHover(!hover)}
    >
        <img src={adventure.poster_url ? adventure.poster_url : "/poster.jpeg"} alt={adventure.title} className={hover ? "" : "h-full"} />
    </div>
  );
}
