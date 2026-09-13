import type { adventureWithStatus } from "../lib/types";
import AdventureCard from "../components/AdventureCard";
import { useState } from "react";

export default function AdventureCardsList({
  adventures,
  role,
}: {
  adventures: adventureWithStatus[];
  role: string | null;
}) {
  const [adv, setAdv] = useState(adventures);

  const handleDelete = (id: string) => {
    setAdv((prev) => prev.filter((adventure) => adventure.id !== id));
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-around gap-10 ">
      {adv.map((adventure: adventureWithStatus) => (
        <AdventureCard key={adventure.id} role={role} adventure={adventure} onDelete={handleDelete} />
      ))}
    </section>
  );
}
