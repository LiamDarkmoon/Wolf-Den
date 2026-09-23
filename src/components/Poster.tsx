import type { adventureWithStatus } from "../lib/types";

export default function Poster({
  adventure,
}: {
  adventure: adventureWithStatus;
}) {
  return (
    <div className="bg-img">
      <img
        src={adventure.poster_url ? adventure.poster_url : "/poster.jpeg"}
        alt={adventure.title}
        className={"object-fill"}
      />
    </div>
  );
}
