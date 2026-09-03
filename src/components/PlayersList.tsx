import { useState } from "react";
import { supabase } from "../db/supabase-browser";

export default function PlayersList({players}:{players:any}) {

    const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

    const handleSelectPlayer = (player:any) => {
        setSelectedPlayer(player.id);
    }

    const handlePromotePlayer = async (player:any) => {
        const { data, error } = await supabase.rpc("set_user_role", { p_user_id: player.id, p_role: "admin" });
    }

    const handleDemotePlayer = async (player:any) => {
        const { data, error } = await supabase.rpc("set_user_role", { p_user_id: player.id, p_role: "user" });
    }



    return(
        <ul className="flex flex-col gap-2 p-2">
            { players?.map((player: any) => (
                <li key={player.id} className="flex items-center justify-between text-lg font-semibold cursor-pointer" onClick={() => handleSelectPlayer(player)}>
                    <i className={selectedPlayer === player.id ? "fa-solid fa-address-card me-2 text-primary" : "fa-solid fa-address-card me-2"}></i>
                    {player.display_name}
                    <span>
                        {
                            selectedPlayer === player.id ? 
                            <div className="flex  gap-4 w-5">
                                {
                                    player.role === "user" ?
                                    <i className="fa-solid fa-user-plus text-emerald-500" onClick={() => handlePromotePlayer(player)}></i>
                                    : player.role === "admin" ?
                                    <i className="fa-solid fa-user-minus text-rose-500" onClick={() => handleDemotePlayer(player)}></i>
                                    : 
                                    <i className="fa-solid fa-shield-heart text-secondary"></i>
                                }
                            </div>
                            : 
                            <div className="flex  gap-4 w-5">
                                
                            </div>
                        }
                    </span>
                </li>
            ))
            }
        </ul>
    )
}