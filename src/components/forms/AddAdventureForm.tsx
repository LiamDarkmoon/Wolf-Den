import { actions } from "astro:actions";
import { useState } from "react";
import Button from "../button";
import { supabase } from "../../db/supabase-browser";

export default function AddAdventureForm() {
  const [minLevel, setMinLevel] = useState("1");
  const [maxLevel, setMaxLevel] = useState("2");
  const [loading, setLoading] = useState(false);

  const handleAdd = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)

    const formData = new FormData(event.currentTarget);

    const poster = formData.get("poster");

    // Crear aventura SIN mandar el archivo
    const { data: adventure, error } = await actions.addAdventure({
      title: formData.get("title")?.toString() ?? "",
      max_players: Number(formData.get("max_players")),
      description: formData.get("description")?.toString() || null,
      min_lvl: Number(minLevel),
      max_lvl: Number(maxLevel),
    });

    if (error || !adventure) {
      console.error("Error creando aventura:", error);
      return;
    }

    if (!(poster instanceof File) || poster.size === 0) {
      setLoading(false)
      return;
    }

    // Ahora sí: archivo directamente a Supabase
    const extension = poster.name.split(".").pop()?.toLowerCase() || "webp";

    const filePath = `${adventure.id}/poster.${extension}`;

    const { error: uploadError } = await supabase.storage
    .from("adventure-posters")
    .upload(filePath, poster, {
      contentType: poster.type,
      cacheControl: "31536000",
      upsert: false,
    });


    if (uploadError) {
      console.error("Error subiendo poster:", uploadError);
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("adventure-posters").getPublicUrl(filePath);

    // Guardamos la URL
    const { error: posterError } = await actions.updateAdventurePoster({
      id: adventure.id,
      poster_url: publicUrl,
    });

    if (posterError) {
      console.error("Error guardando poster_url:", posterError);
      return;
    }

    
    setLoading(false)
  };

  return (
    <form
      className="w-full flex flex-col items-center p-2 gap-4"
      onSubmit={handleAdd}
    >
      <h2 className="text-2xl font-semibold text-center border-b border-main-text">
        Agrega una Aventura
      </h2>

      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Título de la aventura"
          className="rounded-md ring p-2 ring-primary"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <label htmlFor="max_players">
          Maximo de jugadores:{" "}
          <span className="text-sm text-secondary-text/80">(min 1)</span>
        </label>
        <input
          type="number"
          id="max_players"
          name="max_players"
          max="6"
          min="1"
          defaultValue={2}
          placeholder="Número máximo de jugadores"
          className="rounded-md ring p-2 ring-primary"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Descripción de la aventura"
          className="rounded-md ring p-2 ring-primary"
        />
      </div>

      <div className="flex gap-3 justify-around">
        <div className="w-1/3 flex flex-col gap-2">
          <label htmlFor="min_lvl">
            Nivel Minimo:{" "}
            <span className="text-sm text-secondary-text/80">(min 1)</span>
          </label>
          <input
            type="number"
            id="min_lvl"
            name="min_lvl"
            min={1}
            max={20}
            value={minLevel}
            onChange={(e) => setMinLevel(e.target.value)}
            onBlur={() => {
              if (minLevel === "") return;

              const value = Math.min(Math.max(Number(minLevel), 1), 20);
              setMinLevel(String(value));
            }}
            placeholder="Lvl Min"
            className="rounded-md ring p-2 ring-primary"
          />
        </div>
        <div className="w-1/3 flex flex-col gap-2">
          <label htmlFor="max_lvl">
            Nivel Maximo:{" "}
            <span className="text-sm text-secondary-text/80">(max 20)</span>
          </label>
          <input
            type="number"
            id="max_lvl"
            name="max_lvl"
            min={1}
            max={20}
            value={maxLevel}
            onChange={(e) => setMaxLevel(e.target.value)}
            onBlur={() => {
              if (maxLevel === "") return;

              const value = Math.min(Math.max(Number(maxLevel), 1), 20);
              setMaxLevel(String(value));
            }}
            placeholder="Lvl Max"
            className="rounded-md ring p-2 ring-primary"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <label htmlFor="poster">Poster:</label>

        <input
          type="file"
          id="poster"
          name="poster"
          accept="image/png,image/jpeg,image/webp"
          className="rounded-md ring p-2 ring-primary"
        />
      </div>

      {
        loading ?
        <Button disabled>Cargando Aventura</Button>
        :
        <Button type="submit">Agregar Aventura</Button>

      }
    </form>
  );
}
