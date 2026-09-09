import type { adventureWithStatus } from "../lib/types";
import { formatAdventureDate } from "../lib/utils/formatAdventureDate";
import Delete from "./delete";

export default function AdventuresTable({ adventures } : { adventures: adventureWithStatus[] }){

    

    return(
        <table className="table-fixed">
            
            <thead className="gap-2">
                <tr>
                    <th className="p-2 border border-main-text">Titulo</th>
                    <th className="p-2 border border-main-text">Max Jugadores</th>
                    <th className="p-2 border border-main-text">Titulares</th>
                    <th className="p-2 border border-main-text">Suplentes</th>
                    <th className="p-2 border border-main-text">Nivel</th>
                </tr>
            </thead>

            <tbody>
                {adventures.map((adventure) => (
                    <tr key={adventure.id}>
                        <td className="flex gap-2 p-2 border border-main-text w-37.5 truncate">
                            <span className="w-25 truncate">
                                {adventure.title}
                            </span>
                            <Delete id={adventure.id}/>
                        </td>
                        <td className="p-2 border border-main-text text-end w-10">{adventure.max_players}</td>
                        <td className="p-2 border border-main-text text-end w-5">{adventure.currentPlayers}</td>
                        <td className="p-2 border border-main-text text-end w-8">{adventure.currentSubstitutes}</td>
                        <td className="p-2 border border-main-text text-end w-6">{adventure.min_lvl} | {adventure.max_lvl}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}