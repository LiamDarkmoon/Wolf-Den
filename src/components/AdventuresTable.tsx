import type { adventureWithStatus } from "../lib/types";
import { formatAdventureDate } from "../lib/utils/formatAdventureDate";

export default function AdventuresTable({ adventures } : { adventures: adventureWithStatus[] }){

    

    return(
        <table className="table-fixed">
            
            <thead className="gap-2">
                <tr>
                    <th className="p-2 border rounded-sm border-main-text ">Titulo</th>
                    <th className="p-2 border rounded-sm border-main-text">Max Jugadores</th>
                    <th className="p-2 border rounded-sm border-main-text">Titulares</th>
                    <th className="p-2 border rounded-sm border-main-text">Suplentes</th>
                    <th  className="p-2 border rounded-sm border-main-text">Fecha</th>
                </tr>
            </thead>

            <tbody>
                {adventures.map((adventure) => (
                    <tr key={adventure.id}>
                        <td className="p-2 border rounded-sm border-main-text w-37.5 truncate">{adventure.title}</td>
                        <td className="p-2 border rounded-sm border-main-text text-end w-5">{adventure.max_players}</td>
                        <td className="p-2 border rounded-sm border-main-text text-end w-5">{adventure.currentPlayers}</td>
                        <td className="p-2 border rounded-sm border-main-text text-end w-5">{adventure.currentSubstitutes}</td>
                        <td className="p-2 border rounded-sm border-main-text">{formatAdventureDate(adventure.adventure_date)}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}