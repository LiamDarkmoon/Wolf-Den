import { actions } from "astro:actions"
import Button from "../button";

export default function AddAdventureForm() {

    const handleAdd = async (event: React.FormEvent<HTMLFormElement>) =>{
        const formData = new FormData(event.currentTarget);

        console.log('data', formData)
        const { data, error } = await actions.addAdventure({
            title: formData.get("title") as string,
            max_players: Number(formData.get("max_players")),
            description: formData.get("description") as string,
        });

    }

    return(
        <form className="w-full flex flex-col items-center p-2 gap-4" onSubmit={handleAdd}>

            <h2 className="text-2xl font-semibold text-center underline">Agrega una Aventura</h2>

            <div className="w-full md:w-1/2 flex flex-col gap-2">
                <label htmlFor="title">Título:</label>
                <input type="text" id="title" name="title" placeholder="Título de la aventura" className="rounded-md ring p-2 ring-primary"/>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-2">
                <label htmlFor="max_players">Maximo de jugadores: <span className="text-sm text-secondary-text/80">(minimo 1)</span></label>
                <input type="number" id="max_players" name="max_players" max="6" min="1" defaultValue={2} placeholder="Número máximo de jugadores" className="rounded-md ring p-2 ring-primary"/>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-2">
                <label htmlFor="description">Descripción:</label>
                <textarea id="description" name="description" placeholder="Descripción de la aventura" className="rounded-md ring p-2 ring-primary"/>
            </div>


            <Button type="submit" onClick={()=> console.log('submit')}>
                Agregar Aventura
            </Button>
        </form>
    )
}   
