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
    <section className="h-full w-full flex flex-col md:flex-row items-center justify-around gap-10 p-5 overflow-auto scrollbar-none">
      {
        adv.length <= 0 ? <p className="text-center w-2/3 text-primary italic"> Espera que la liga asigne nuevas misiones... estamos ocupados con una orda infernal</p>
        : adv.map((adventure: adventureWithStatus) => (
        <AdventureCard key={adventure.id} role={role} adventure={adventure} onDelete={handleDelete} />
      ))
      }
      
    </section>
  );
}
